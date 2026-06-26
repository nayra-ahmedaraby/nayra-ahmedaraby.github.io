from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm

# ── Page & layout constants ──────────────────────────────────────────────────
W, H = A4                         # 595.3 x 841.9 pt
M_TOP    = 0
M_BOT    = 14
SIDE_W   = 185                    # left sidebar width
GAP      = 0                      # gap between sidebar and main
MAIN_X   = SIDE_W + 10           # main text start x
MAIN_W   = W - MAIN_X - 18       # main text width
SIDE_TX  = 14                     # sidebar text x
SIDE_TW  = SIDE_W - SIDE_TX - 10 # sidebar text width

# ── Palette ──────────────────────────────────────────────────────────────────
C_NAVY   = HexColor("#0B1D2E")
C_TEAL   = HexColor("#0EA5C9")
C_TEAL2  = HexColor("#7DD3EA")
C_TEAL3  = HexColor("#E0F6FD")   # very light teal for tags
C_MID    = HexColor("#7A9BB5")
C_BODY   = HexColor("#1C2B38")   # main body text
C_LIGHT  = HexColor("#F4F9FC")   # main bg
C_DIV    = HexColor("#D0E8F2")   # divider
C_SUBTXT = HexColor("#536B7D")   # subtitle
C_TAG_BG = HexColor("#132D3F")   # tag background in sidebar

# ── Canvas ───────────────────────────────────────────────────────────────────
def make_canvas(path):
    c = canvas.Canvas(path, pagesize=A4)
    c.setTitle("Nayra Ahmed Araby — CV")
    return c

def draw_page_bg(c):
    # sidebar bg
    c.setFillColor(C_NAVY)
    c.rect(0, 0, SIDE_W, H, fill=1, stroke=0)
    # thin teal left edge accent
    c.setFillColor(C_TEAL)
    c.rect(0, 0, 4, H, fill=1, stroke=0)
    # main bg
    c.setFillColor(C_LIGHT)
    c.rect(SIDE_W, 0, W - SIDE_W, H, fill=1, stroke=0)
    # top bar on main
    c.setFillColor(C_TEAL)
    c.rect(SIDE_W, H - 5, W - SIDE_W, 5, fill=1, stroke=0)

# ── Text helpers ─────────────────────────────────────────────────────────────
def text_width(c, text, font, size):
    c.setFont(font, size)
    return c.stringWidth(text, font, size)

def draw_text(c, text, x, y, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, text)

def wrap_text(c, text, x, y, max_w, font, size, color, leading=None):
    """Draw wrapped text; return y below last line."""
    if leading is None:
        leading = size * 1.4
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ""
    lines = []
    for w in words:
        test = (line + " " + w).strip()
        if c.stringWidth(test, font, size) <= max_w:
            line = test
        else:
            if line:
                lines.append(line)
            line = w
    if line:
        lines.append(line)
    for ln in lines:
        c.drawString(x, y, ln)
        y -= leading
    return y

# ── SIDEBAR helpers ───────────────────────────────────────────────────────────
def side_section(c, label, y):
    """Draw sidebar section label; return y after."""
    y -= 6
    # tiny teal rect accent
    c.setFillColor(C_TEAL)
    c.rect(SIDE_TX, y + 2, 18, 1.5, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 7.5)
    c.setFillColor(C_TEAL)
    c.drawString(SIDE_TX + 22, y, label.upper())
    y -= 9
    return y

def side_item(c, line1, line2, y):
    c.setFont("Helvetica-Bold", 7.5); c.setFillColor(white)
    c.drawString(SIDE_TX, y, line1)
    y -= 9
    if line2:
        y = wrap_text(c, line2, SIDE_TX, y, SIDE_TW, "Helvetica", 7, C_MID)
    return y

def side_bullet(c, text, y):
    c.setFillColor(C_TEAL)
    c.setFont("Helvetica", 7); c.drawString(SIDE_TX, y + 1, "\u2022")
    y = wrap_text(c, text, SIDE_TX + 8, y, SIDE_TW - 8, "Helvetica", 7.5, white, 10.5)
    return y

def side_link(c, label, url, y):
    c.setFont("Helvetica", 8); c.setFillColor(C_TEAL2)
    c.drawString(SIDE_TX, y, "\u25b8  " + label)
    lw = c.stringWidth("\u25b8  " + label, "Helvetica", 8)
    c.linkURL(url, (SIDE_TX, y - 2, SIDE_TX + lw, y + 8), relative=0)
    return y - 12

# ── MAIN helpers ──────────────────────────────────────────────────────────────
def main_section(c, label, y):
    y -= 8
    c.setFont("Helvetica-Bold", 9); c.setFillColor(C_TEAL)
    c.drawString(MAIN_X, y, label.upper())
    lw = c.stringWidth(label.upper(), "Helvetica-Bold", 9)
    y -= 4
    # full-width rule
    c.setStrokeColor(C_TEAL); c.setLineWidth(1.0)
    c.line(MAIN_X, y, MAIN_X + MAIN_W, y)
    return y - 7

def main_entry_head(c, title, right_text, y):
    """Bold title + italic right label on same line."""
    c.setFont("Helvetica-Bold", 8.5); c.setFillColor(C_BODY)
    # right text
    c.setFont("Helvetica-Oblique", 7.5); c.setFillColor(C_SUBTXT)
    rw = c.stringWidth(right_text, "Helvetica-Oblique", 7.5)
    c.drawString(MAIN_X + MAIN_W - rw, y, right_text)
    # title (clipped to not overlap right text)
    max_title_w = MAIN_W - rw - 6
    c.setFont("Helvetica-Bold", 8.5); c.setFillColor(C_BODY)
    # wrap if needed
    words = title.split()
    line = ""
    for w in words:
        test = (line + " " + w).strip()
        if c.stringWidth(test, "Helvetica-Bold", 8.5) <= max_title_w:
            line = test
        else:
            c.drawString(MAIN_X, y, line)
            y -= 11; line = w; right_text = ""
            c.setFont("Helvetica-Bold", 8.5)
    c.drawString(MAIN_X, y, line)
    return y - 11

def main_sub(c, text, y):
    y = wrap_text(c, text, MAIN_X, y, MAIN_W, "Helvetica-Oblique", 7.5, C_SUBTXT, 10.5)
    return y

def main_bullet(c, text, y):
    c.setFillColor(C_TEAL); c.setFont("Helvetica-Bold", 8)
    c.drawString(MAIN_X + 2, y + 0.5, "\u2022")
    y = wrap_text(c, text, MAIN_X + 11, y, MAIN_W - 13, "Helvetica", 8, C_BODY, 11)
    return y - 1

def skill_row(c, label, tags, y):
    c.setFont("Helvetica-Bold", 8); c.setFillColor(C_BODY)
    c.drawString(MAIN_X, y, label + ":")
    lw = c.stringWidth(label + ": ", "Helvetica-Bold", 8)
    tx = MAIN_X + lw + 2
    first_row_y = y
    for tag in tags:
        tw = c.stringWidth(tag, "Helvetica", 7.5) + 7
        if tx + tw > MAIN_X + MAIN_W:
            y -= 12; tx = MAIN_X + lw + 2
        # tag pill
        c.setFillColor(C_TEAL3)
        c.roundRect(tx, y - 1.5, tw, 10, 2.5, fill=1, stroke=0)
        c.setFillColor(C_BODY)
        c.setFont("Helvetica", 7.5)
        c.drawString(tx + 3.5, y + 1, tag)
        tx += tw + 4
    return y - 13

# ════════════════════════════════════════════════════════════════════════════════
c = make_canvas("C:\\Users\\Eng_Nayra\\OneDrive\\Desktop\\SUT\\portfolio\\Nayra_Araby_CV.pdf")
draw_page_bg(c)

# ═══════════════════════ SIDEBAR ════════════════════════════════════════════════
sy = H - 28

# Name
c.setFont("Helvetica-Bold", 20); c.setFillColor(white)
c.drawString(SIDE_TX, sy, "NAYRA"); sy -= 22
c.drawString(SIDE_TX, sy, "AHMED"); sy -= 22
c.setFillColor(C_TEAL)
c.drawString(SIDE_TX, sy, "ARABY"); sy -= 6
c.setStrokeColor(C_TEAL); c.setLineWidth(1.2)
c.line(SIDE_TX, sy, SIDE_W - 10, sy); sy -= 11
c.setFont("Helvetica", 8); c.setFillColor(C_MID)
c.drawString(SIDE_TX, sy, "AI & Data Science Student"); sy -= 10
c.drawString(SIDE_TX, sy, "Aspiring AI / ML Engineer"); sy -= 18

# Contact
sy = side_section(c, "Contact", sy)
for icon, val in [("\u2709", "nayraaraby2@gmail.com"),
                  ("\u260e", "+20 155 708 4472"),
                  ("\u25a1", "Cairo, Egypt")]:
    c.setFont("Helvetica", 8); c.setFillColor(C_TEAL2); c.drawString(SIDE_TX, sy, icon)
    wrap_text(c, val, SIDE_TX + 12, sy, SIDE_TW - 12, "Helvetica", 8, white, 10)
    sy -= 12

sy -= 4
sy = side_link(c, "LinkedIn", "https://www.linkedin.com/in/nayra-ahmed-841793333", sy)
sy = side_link(c, "GitHub",   "https://github.com/nayra-ahmedaraby", sy)
sy = side_link(c, "Portfolio","https://portfolio-nayra-ahmedaraby.vercel.app/", sy)
sy -= 4

# Education
sy = side_section(c, "Education", sy)
c.setFont("Helvetica-Bold", 8); c.setFillColor(white); c.drawString(SIDE_TX, sy, "SUTech University"); sy -= 10
wrap_text(c, "B.Sc. Data Science & AI", SIDE_TX, sy, SIDE_TW, "Helvetica", 7.5, C_TEAL2, 10); sy -= 10
c.setFont("Helvetica", 7); c.setFillColor(C_MID)
c.drawString(SIDE_TX, sy, "CGPA: 4.0  |  Expected 2028"); sy -= 9
c.drawString(SIDE_TX, sy, "Dual cert. \u2014 Amity Univ., India"); sy -= 9
c.setFillColor(C_TEAL2); c.drawString(SIDE_TX, sy, "Top Achiever Award 2024, 2025"); sy -= 16

# Certifications
sy = side_section(c, "Certifications", sy)
for cert in ["Generative AI with AWS (2025)",
             "Microsoft AI Skills Fest (2025)",
             "Responsible & Ethical AI (2025)",
             "Intro to Data Science (2024)",
             "Sustainability — UN (2024)"]:
    sy = side_bullet(c, cert, sy)
sy -= 4

# Languages
sy = side_section(c, "Languages", sy)
for lang, lvl in [("Arabic","Native"),("English","B2 — British Council"),("French","Intermediate"),("German","Basic")]:
    c.setFont("Helvetica-Bold", 8); c.setFillColor(white); c.drawString(SIDE_TX, sy, lang)
    tw = c.stringWidth(lang, "Helvetica-Bold", 8)
    c.setFont("Helvetica", 7); c.setFillColor(C_MID)
    c.drawString(SIDE_TX + tw + 4, sy, "\u2014 " + lvl)
    sy -= 11
sy -= 4

# Awards & Activities
sy = side_section(c, "Awards & Activities", sy)
for a in ["WHCL Finalist — 4th Place (ProofMe)",
          "FDAI Summit — Organizing Committee",
          "SolveThe17 Hackathon Competitor",
          "GDG Cairo — AI & Innovation",
          "Group Leader — SUTech Univ."]:
    sy = side_bullet(c, a, sy)

# ═══════════════════════ MAIN COLUMN ════════════════════════════════════════════
my = H - 22

# ── Circular photo placeholder (top-right of main column) ──
CIRCLE_R  = 34
CIRCLE_CX = MAIN_X + MAIN_W - CIRCLE_R - 2
CIRCLE_CY = H - 18 - CIRCLE_R        # top-right corner, fully in header zone

# Clip to circle using path
c.saveState()
p = c.beginPath()
p.circle(CIRCLE_CX, CIRCLE_CY, CIRCLE_R)
c.clipPath(p, stroke=0, fill=0)
c.setFillColor(HexColor("#1C3A52"))
c.circle(CIRCLE_CX, CIRCLE_CY, CIRCLE_R, fill=1, stroke=0)
# silhouette head
c.setFillColor(HexColor("#4A7A9B"))
c.circle(CIRCLE_CX, CIRCLE_CY + 11, 12, fill=1, stroke=0)
# silhouette shoulders
c.setFillColor(HexColor("#4A7A9B"))
c.ellipse(CIRCLE_CX - 20, CIRCLE_CY - 28,
          CIRCLE_CX + 20, CIRCLE_CY + 2, fill=1, stroke=0)
c.restoreState()

# Teal border ring
c.setStrokeColor(C_TEAL)
c.setLineWidth(2.2)
c.circle(CIRCLE_CX, CIRCLE_CY, CIRCLE_R, fill=0, stroke=1)

# Inner dashed ring
c.setStrokeColor(C_TEAL2)
c.setLineWidth(0.7)
c.setDash(3, 3)
c.circle(CIRCLE_CX, CIRCLE_CY, CIRCLE_R - 5, fill=0, stroke=1)
c.setDash()

# Label below circle
c.setFont("Helvetica", 6); c.setFillColor(C_MID)
lbl = "Your Photo"
lw = c.stringWidth(lbl, "Helvetica", 6)
c.drawString(CIRCLE_CX - lw / 2, CIRCLE_CY - CIRCLE_R - 6, lbl)

# ── Name header ──
c.setFont("Helvetica-Bold", 22); c.setFillColor(C_NAVY)
c.drawString(MAIN_X, my, "Nayra Ahmed Araby"); my -= 13
c.setFont("Helvetica", 8.5); c.setFillColor(C_SUBTXT)
c.drawString(MAIN_X, my, "AI & Data Science   \u00b7   Machine Learning   \u00b7   LLMs   \u00b7   Data Engineering")
my -= 16

# Push content start below circle bottom so nothing overlaps
circle_bottom = CIRCLE_CY - CIRCLE_R - 8
if my > circle_bottom:
    my = circle_bottom

# ── Summary ──
my = main_section(c, "Professional Summary", my)
summary = ("Second-year AI & Data Science student (4.0 CGPA) currently doing research at Matsuo Lab, University of Tokyo. Building ML/LLM components for an AI-driven cybersecurity platform while bringing experience from Harvard-affiliated leadership, Google AI, and two industry internships. Track record across national tech competitions and community outreach.")
my = wrap_text(c, summary, MAIN_X, my, MAIN_W, "Helvetica", 8.5, C_BODY, 12.5)

# ── Skills ──
my = main_section(c, "Technical Skills", my)
skill_data = [
    ("Languages",    ["Python","Java","C++","SQL","JavaScript","PHP","Bash/Shell","HTML/CSS"]),
    ("AI / ML",      ["TensorFlow","Scikit-learn","Deep Learning","LLMs","Generative AI","Neural Nets","CSP","Pandas","NumPy","Power BI"]),
    ("Backend & DB", ["FastAPI","REST APIs","MongoDB","MySQL","Firebase","SQL Server"]),
    ("Cloud/DevOps", ["GCP","Databricks","AWS","Docker","Linux Admin","Git & GitHub"]),
]
for label, tags in skill_data:
    my = skill_row(c, label, tags, my)

# ── Experience & Programs ──
my = main_section(c, "Experience & Programs", my)

entries = [
    {
        "title":   "Research Participant — Matsuo Lab, University of Tokyo",
        "date":    "2026 – Present",
        "sub":     None,
        "bullets": ["Engaged in AI and deep learning research at one of Japan\u2019s leading AI laboratories."],
    },
    {
        "title":   "Build with AI: Masr Edition — Google",
        "date":    "Apr – May 2026",
        "sub":     "Google Training Program",
        "bullets": ["Completed hands-on AI development training using Google\u2019s AI tools and APIs to build real-world applications."],
    },
    {
        "title":   "Aspire Leaders Program — Harvard-affiliated",
        "date":    "2025 – 2026",
        "sub":     "Competitive Global Leadership Program",
        "bullets": ["Selected for a leadership development program focused on innovation, global impact, and social entrepreneurship."],
    },
    {
        "title":   "Data Science Intern — E-Finance",
        "date":    "Aug – Sep 2025",
        "sub":     None,
        "bullets": [
            "Completed the full data-science lifecycle (engineering, cleaning, analysis) on an Amazon-style retail dataset.",
            "Built an interactive Power BI dashboard surfacing sales and customer insights for decision-making.",
        ],
    },
    {
        "title":   "AI Committee Member — FDAI, Ministry of Youth & Sports",
        "date":    "Aug 2025 – Present",
        "sub":     None,
        "bullets": [
            "Designed and delivered AI-awareness campaigns, training courses, and workshops for youth across Egypt.",
            "Helped organize the Financial & Digital Inclusion Summit hosted by Egyptian government ministers.",
        ],
    },
    {
        "title":   "Participant — InnovEgypt Program (TIEC & iSpark)",
        "date":    "Jul – Aug 2025",
        "sub":     "Entrepreneurship & Product Innovation Bootcamp",
        "bullets": [],
    },
    {
        "title":   "Intern — Mylerz",
        "date":    "2024 – 2025",
        "sub":     "Logistics & Technology Industry Experience",
        "bullets": [],
    },
]

for e in entries:
    my = main_entry_head(c, e["title"], e["date"], my)
    if e["sub"]:
        my = main_sub(c, e["sub"], my)
    for b in e["bullets"]:
        my = main_bullet(c, b, my)
    my -= 2

# ── Projects ──
my = main_section(c, "Selected Projects", my)

projects = [
    {
        "title": "CyberNest SOAR — AI Vulnerability Engine",
        "tech":  "AI, SSVC, EPSS, Automation  |  Ongoing",
        "bullets": [
            "ML/LLM-based prioritization of security vulnerabilities with automated patch recommendations.",
            "Integrates SSVC & EPSS scoring frameworks with LLM-based reasoning for incident response.",
        ],
    },
    {
        "title": "HR Analytics — Employee Attrition Prediction",
        "tech":  "Python, Scikit-learn, Databricks, Power BI",
        "bullets": ["Predicted employee attrition on Databricks with segmentation analysis and interactive dashboards."],
    },
    {
        "title": "Fitness Tracker API — AI-Powered Planning",
        "tech":  "FastAPI, Python, MongoDB, Neural Networks, CSP",
        "bullets": ["Backend using CSP for schedule generation and neural networks for adherence prediction."],
    },
    {
        "title": "Linux Monitoring System",
        "tech":  "Bash, Shell Scripting, Linux Administration",
        "bullets": ["Enterprise-grade server monitoring with automated security checks and interactive dashboard."],
    },
    {
        "title": "Student Burnout Analysis",
        "tech":  "Python, Pandas, Matplotlib, Seaborn, Power BI",
        "bullets": ["Burnout pattern analysis with visualization dashboards and evidence-based intervention recommendations."],
    },
    {
        "title": "MindMind — Accessibility Platform  |  SolveThe17 Hackathon",
        "tech":  "TypeScript, React",
        "bullets": ["SDG-aligned web platform supporting children and people with disabilities in accessing learning."],
    },
    {
        "title": "Process Scheduling Simulator",
        "tech":  "Python, JavaScript, HTML/CSS",
        "bullets": ["FCFS, SJF, Priority & Round-Robin CPU algorithms with performance-metric visualizations (GUI + web)."],
    },
]

for p in projects:
    # project title row
    c.setFont("Helvetica-Bold", 8.5); c.setFillColor(C_BODY)
    c.drawString(MAIN_X, my, p["title"]); my -= 11
    my = main_sub(c, p["tech"], my)
    for b in p["bullets"]:
        my = main_bullet(c, b, my)
    my -= 3

c.save()
print("Done. y remaining:", my)