# ATS-friendly CV — single column, plain text, standard headings, ONE page.
# No sidebars/columns/tables/images/colored pills, so any ATS (or human) parses
# it cleanly. Consistent spacing throughout.

from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor

W, H = A4
LEFT, RIGHT = 50, 50
TOP, BOTTOM = 46, 40
CW = W - LEFT - RIGHT

DARK = HexColor("#111111")
GREY = HexColor("#444444")

# ── Consistent spacing constants ──
BODY, BLEAD = 9, 11.0          # body font / line height
GAP_BEFORE_H = 8               # space above a section heading
GAP_AFTER_H = 8                # space below the heading rule
GAP_ENTRY = 5                  # space between entries

OUT = r"C:\Users\Eng_Nayra\OneDrive\Desktop\SUT\portfolio\Nayra_Araby_CV_ATS.pdf"

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("Nayra Ahmed Araby - CV")
c.setAuthor("Nayra Ahmed Araby")
c.setKeywords("Machine Learning, Data Science, Python, AI, Data Analytics, Deep Learning")
y = H - TOP


def lines_for(text, font, size, max_w):
    c.setFont(font, size)
    words, line, out = text.split(), "", []
    for w in words:
        t = (line + " " + w).strip()
        if c.stringWidth(t, font, size) <= max_w:
            line = t
        else:
            out.append(line); line = w
    if line:
        out.append(line)
    return out


def para(text, x, max_w, font=("Helvetica", BODY), color=DARK, leading=BLEAD):
    global y
    f, s = font
    for ln in lines_for(text, f, s, max_w):
        c.setFont(f, s); c.setFillColor(color)
        c.drawString(x, y, ln); y -= leading


def heading(text):
    global y
    y -= GAP_BEFORE_H
    c.setFont("Helvetica-Bold", 10.5); c.setFillColor(DARK)
    c.drawString(LEFT, y, text.upper())
    y -= 4
    c.setStrokeColor(GREY); c.setLineWidth(0.8)
    c.line(LEFT, y, LEFT + CW, y)
    y -= GAP_AFTER_H


def entry(title, date=None, sub=None, bullets=None):
    global y
    c.setFont("Helvetica-Bold", 9.5); c.setFillColor(DARK)
    if date:
        c.setFont("Helvetica", 8.5); c.setFillColor(GREY)
        dw = c.stringWidth(date, "Helvetica", 8.5)
        c.drawString(LEFT + CW - dw, y, date)
    c.setFont("Helvetica-Bold", 9.5); c.setFillColor(DARK)
    c.drawString(LEFT, y, title)
    y -= 11
    if sub:
        para(sub, LEFT, CW, ("Helvetica-Oblique", 8.5), GREY, 10.5)
    for b in (bullets or []):
        c.setFont("Helvetica", BODY); c.setFillColor(DARK)
        c.drawString(LEFT + 6, y, "•")
        para(b, LEFT + 15, CW - 15)
    y -= GAP_ENTRY


def skills_line(label, items):
    global y
    label_txt = label + ": "
    c.setFont("Helvetica-Bold", BODY); c.setFillColor(DARK)
    lw = c.stringWidth(label_txt, "Helvetica-Bold", BODY)
    c.drawString(LEFT, y, label_txt)
    body = ", ".join(items)
    c.setFont("Helvetica", BODY)
    first, line, x0 = True, "", LEFT + lw
    for w in body.split(" "):
        max_w = (CW - lw) if first else CW
        t = (line + " " + w).strip()
        if c.stringWidth(t, "Helvetica", BODY) <= max_w:
            line = t
        else:
            c.setFont("Helvetica", BODY); c.setFillColor(DARK)
            c.drawString(x0 if first else LEFT, y, line)
            y -= BLEAD; first, line = False, w
    if line:
        c.setFont("Helvetica", BODY); c.setFillColor(DARK)
        c.drawString(x0 if first else LEFT, y, line)
        y -= BLEAD


# ── HEADER ──
c.setFont("Helvetica-Bold", 18); c.setFillColor(DARK)
c.drawString(LEFT, y, "Nayra Ahmed Araby"); y -= 15
c.setFont("Helvetica", 9.5); c.setFillColor(GREY)
c.drawString(LEFT, y, "AI & Data Science Student  |  Aspiring AI / Machine Learning Engineer"); y -= 12
c.setFont("Helvetica", 8.5); c.setFillColor(DARK)
c.drawString(LEFT, y, "Cairo, Egypt  |  +20 155 708 4472  |  nayraaraby2@gmail.com"); y -= 10.5
c.drawString(LEFT, y, "linkedin.com/in/nayra-ahmed-841793333  |  github.com/nayra-ahmedaraby  |  nayra-ahmedaraby.github.io"); y -= 2

# ── SUMMARY ──
heading("Summary")
para("Second-year AI & Data Science student (4.1/4.3 CGPA) and research participant at Matsuo Lab, "
     "University of Tokyo. Experienced in machine learning, data analytics, and backend APIs, with "
     "selections for Harvard-affiliated leadership, Google AI training, and two industry internships.",
     LEFT, CW, leading=11.5)

# ── SKILLS ──
heading("Technical Skills")
skills_line("Programming", ["Python", "Java", "C++", "SQL", "JavaScript", "PHP", "Bash/Shell", "HTML/CSS"])
skills_line("AI & Machine Learning", ["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn",
                                      "Neural Networks", "LLMs", "Generative AI", "CSP"])
skills_line("Data & Backend", ["Pandas", "NumPy", "Power BI", "Data Visualization", "FastAPI",
                               "REST APIs", "MongoDB", "MySQL", "SQL Server"])
skills_line("Cloud & Tools", ["Google Cloud", "Databricks", "AWS", "Docker", "Linux", "Git & GitHub"])

# ── EXPERIENCE & PROGRAMS ──
heading("Experience & Programs")
entry("Research Participant - Matsuo Lab, University of Tokyo", "2026 - Present",
      bullets=["Selected for AI and deep learning research at one of Japan's leading AI laboratories."])
entry("Build with AI: Masr Edition - Google (with ITI)", "Apr - May 2026",
      bullets=["Hands-on AI development training with Google's AI tools, APIs, and Google Cloud."])
entry("Aspire Leaders Program - Harvard-affiliated", "2025 - 2026",
      bullets=["Competitive global leadership program on innovation, social impact, and strategic thinking."])
entry("Data Science Intern - E-Finance", "Aug - Sep 2025",
      bullets=["Ran the full data lifecycle (cleaning, analysis, Power BI dashboards) on real financial data."])
entry("AI Committee Member - FDAI, Ministry of Youth & Sports", "Aug 2025 - Present",
      bullets=["Delivered AI-awareness workshops for youth and helped organize the Financial & Digital Inclusion Summit."])
entry("Participant - InnovEgypt (TIEC & iSpark)", "2025",
      sub="Entrepreneurship & product-innovation bootcamp.")
entry("Technical Intern - Mylerz", "2024 - 2025",
      sub="Logistics & technology industry experience.")

# ── PROJECTS ──
heading("Selected Projects")
entry("CyberNest SOAR - AI Vulnerability Engine (Team)", "Ongoing",
      bullets=["AI-assisted vulnerability prioritization using SSVC & EPSS with automated response workflows."])
entry("HR Analytics - Employee Attrition Prediction (Team)",
      bullets=["Compared Logistic Regression, Random Forest & Gradient Boosting (best ~0.79 ROC-AUC) with K-Means segmentation and Power BI. (Python, scikit-learn)"])
entry("Student Burnout Analysis (Solo)",
      bullets=["Built a Maslach-inspired burnout score on a ~28,000-row dataset; explored drivers in Power BI. (Python, Pandas)"])
entry("Fitness Tracker API (Team)",
      bullets=["FastAPI backend generating personalized workout plans via a constraint-satisfaction planner + adherence prediction."])
entry("MINIMIND - Kids Learning App (Team)",
      bullets=["Children's app teaching tech topics (AI, coding, cybersecurity) - SolveThe17 Hackathon. (React, Vite, Express)"])

# ── EDUCATION ──
heading("Education")
entry("B.Sc. Data Science & Artificial Intelligence - SUTech University", "Expected 2028",
      bullets=["CGPA: 4.0 / 4.0. Dual-certified with Amity University, India. Top Achiever Award (2024 & 2025)."])

# ── CERTIFICATIONS ──
heading("Certifications")
para("Introduction to Generative AI with AWS - Amazon & Udacity (2025);  Microsoft AI Skills Fest (2025);  "
     "Responsible & Ethical AI (2025);  Introduction to Data Science (2024);  Sustainability for Employability - UN (2024).",
     LEFT, CW, leading=11.5)

# ── LANGUAGES ──
heading("Languages")
skills_line("Languages", ["Arabic - Native", "English - B2 (British Council)", "French - Intermediate", "German - Basic"])

# ── AWARDS & ACTIVITIES ──
heading("Awards & Activities")
para("WHCL Competition Finalist - 4th Place (ProofMe);  FDAI Summit Organizing Committee;  "
     "SolveThe17 Hackathon Competitor (EUI);  GDG Cairo - AI & Innovation;  Volunteer & Group Leader, SUTech University.",
     LEFT, CW, leading=11.5)

c.save()
print(f"Saved -> {OUT}")
