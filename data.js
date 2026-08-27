/*
  REAL DATA — extracted from:
  • Commercial Team → Pre-Construction_Commercial_Pack_Register.docx  (50 docs, Sections A–H)
  • Design Team     → P5RS_CSRA Pre-Construction Document Delivery Register_Rev_P01.xlsx  (74 docs, Sections A–E)
  • Construction    → structured mobilisation & execution register

  Sample files live in /samples and are linked below where available.
*/

const COMPANY = {
  name: "Al-Bunyan Group",
  tagline: "How we take a project from brief to build",
};

const TEAMS = [
  /* ─────────────────────────── DESIGN TEAM ─────────────────────────── */
  {
    id: "design",
    name: "Design Team",
    code: "DWG",
    blurb: "Pre-construction document delivery — from development strategy through to technical design readiness.",
    documentCount: 74,
    sections: [
      {
        title: "A. Development Strategy and Investment Basis",
        documents: [
          { ref: "0.01", title: "Development Business Case and Development Appraisal", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.02", title: "Client Strategic Brief", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.03", title: "Site Acquisition and Due Diligence Summary", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.04", title: "Feasibility and Development Options Appraisal", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.05", title: "Planning and Development Capacity Appraisal", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.06", title: "Initial Cost Plan and Funding Assumptions", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.07", title: "Initial Development Programme", owner: "CSRA", sample: null, workflow: null },
          { ref: "0.08", title: "Development Risk, Abnormals and Procurement Strategy", owner: "CSRA", sample: null, workflow: null },
        ],
      },
      {
        title: "B. Project Brief, Scope and Delivery Planning",
        documents: [
          { ref: "1.01", title: "Developed Project Brief", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.02", title: "Development Specification and Quality Brief", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.03", title: "Accommodation, Apartment Type and Area Schedule", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.04", title: "Project Execution Plan, Organisation and Appointment Schedule", owner: "CSRA / Meridian", sample: null, workflow: null },
          { ref: "1.05", title: "Design Responsibility Matrix and RACI", owner: "CSRA / Meridian", sample: null, workflow: null },
          { ref: "1.06", title: "Work Breakdown Structure and Scope Breakdown", owner: "CSRA / Meridian", sample: { file: "samples/1.06.docx", view: "samples/1.06.html", type: "docx" }, workflow: null },
          { ref: "1.07", title: "Design Programme and Information Release Schedule", owner: "Meridian", sample: null, workflow: null },
          { ref: "1.08", title: "Design Procurement and Long-Lead Schedule", owner: "Meridian", sample: null, workflow: null },
          { ref: "1.09", title: "Survey Requirements and Existing Information Register", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.10", title: "Planning and Statutory Approval Information Register", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.11", title: "Building Control Route and Transitional Regulations Record", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.12", title: "Utilities, Sustainability, Energy and EPC Brief", owner: "CSRA", sample: null, workflow: null },
          { ref: "1.13", title: "Pre-Construction Information and CDM Design Risk Register", owner: "CSRA / CDM PD", sample: null, workflow: null },
          { ref: "1.14", title: "Outline Employer's Requirements", owner: "CSRA", sample: null, workflow: null },
        ],
      },
      {
        title: "C. Design Strategy and Performance Definition",
        documents: [
          { ref: "2.01", title: "Concept Design Report and Concept Drawing Set", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.02", title: "Planning Application and Supporting Documents Register", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.03", title: "Updated Accommodation and Development Area Schedule", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.04", title: "Structural, Civil and Drainage Concept Strategy", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.05", title: "MEP Concept and Heating, Cooling and Ventilation Options Appraisal", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.06", title: "Outline Fire and Life-Safety Strategy", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.07", title: "Energy, SAP, EPC, Overheating and Acoustic Performance Strategy", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.08", title: "Access, External Works, Landscape, Parking, Refuse and Security Strategy", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.09", title: "Utilities, EV Charging, Solar PV and Incoming Services Strategy", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.10", title: "Outline Specification and Updated Development Specification", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.11", title: "Concept Cost, Value Engineering and Funding Technical Pack", owner: "CSRA", sample: null, workflow: null },
          { ref: "2.12", title: "Design Strategy Compliance, Risk and Readiness Report", owner: "CSRA", sample: null, workflow: null },
        ],
      },
      {
        title: "D. Coordinated Design and Contract Definition",
        documents: [
          { ref: "3.01", title: "Planning Decision Notice and Approved Drawing/Document Register", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.02", title: "Planning Conditions, Section 106 and CIL Tracker", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.03", title: "Spatial Coordination Report", owner: "Meridian", sample: null, workflow: null },
          { ref: "3.04", title: "Coordinated Architectural Design Package", owner: "Meridian", sample: null, workflow: null },
          { ref: "3.05", title: "Coordinated Structural, Civil, Drainage and Levels Package", owner: "Engineers", sample: null, workflow: null },
          { ref: "3.06", title: "Coordinated MEP and Final Heating/Ventilation Strategy", owner: "MEP Designer", sample: null, workflow: null },
          { ref: "3.07", title: "Developed Fire, Compartmentation and Building Regulations Compliance Package", owner: "Designers", sample: null, workflow: null },
          { ref: "3.08", title: "SOCOTEC Submission, Comments and Actions Register", owner: "CSRA / Meridian", sample: null, workflow: null },
          { ref: "3.09", title: "Apartment Type, Area, Sales and Purchaser Information Pack", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.10", title: "External Works, Landscape, Parking, Refuse and Access Package", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.11", title: "Utilities, EV, PV and Incoming Services Coordination Pack", owner: "CSRA / Meridian", sample: null, workflow: null },
          { ref: "3.12", title: "BIM, Clash Detection and Interface Resolution Report", owner: "Meridian", sample: null, workflow: null },
          { ref: "3.13", title: "Detailed Specifications, Finishes and Room Data Schedules", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.14", title: "Final Employer's Requirements", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.15", title: "Statement of Works, Schedule of Works and Tender Scope Documents", owner: "CSRA", sample: null, workflow: null },
          { ref: "3.16", title: "Tender Contractor's Proposals", owner: "Meridian", sample: null, workflow: null },
          { ref: "3.17", title: "ER/CP Compliance, Qualification and Departure Schedule", owner: "Meridian", sample: null, workflow: null },
          { ref: "3.18", title: "Final Design Responsibility and CDP Matrix", owner: "Meridian", sample: null, workflow: null },
          { ref: "3.19", title: "Design Freeze, Change Control and Coordination Readiness Report", owner: "Meridian / CSRA", sample: null, workflow: null },
        ],
      },
      {
        title: "E. Technical, Procurement and Construction Readiness",
        documents: [
          { ref: "4.01", title: "Final Contract Contractor's Proposals", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.02", title: "Final ER/CP Compliance, Departure and Clarification Schedule", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.03", title: "Master Design Delivery and Technical Submission Schedule", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.04", title: "IFC Architectural Technical Design Package", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.05", title: "IFC Structural, Civil, Drainage and Levels Package", owner: "Engineers", sample: null, workflow: null },
          { ref: "4.06", title: "IFC MEP and Heating, Cooling, Ventilation Technical Package", owner: "MEP / Specialists", sample: null, workflow: null },
          { ref: "4.07", title: "Detailed Fire, Compartmentation and Fire-Stopping Package", owner: "Designers", sample: null, workflow: null },
          { ref: "4.08", title: "Envelope, Roof, Balcony, Window and External Door Technical Package", owner: "CDP Specialists", sample: null, workflow: null },
          { ref: "4.09", title: "Apartment, Kitchen, Bathroom, Door and Finishes Technical Package", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.10", title: "Utilities, EV, PV, Water and Sprinkler Technical Package", owner: "CSRA / Meridian", sample: null, workflow: null },
          { ref: "4.11", title: "Building Regulations, Transitional Evidence and Detailed Compliance Matrix", owner: "CSRA / Design", sample: null, workflow: null },
          { ref: "4.12", title: "SOCOTEC Submission, Comments, Approval and Inspection Tracker", owner: "CSRA / Meridian", sample: null, workflow: null },
          { ref: "4.13", title: "Work Package Schedule, Procurement Schedule and Work Package Documents", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.14", title: "Specialist and Contractor Design Portion Submissions", owner: "CDP Specialists", sample: null, workflow: null },
          { ref: "4.15", title: "Technical Submittal, Material Approval, Sample and Benchmark Register", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.16", title: "Builders' Work, Openings, Penetrations, Clash and Interface Register", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.17", title: "Planning Condition Discharge, Amendment and Compliance Register", owner: "CSRA", sample: null, workflow: null },
          { ref: "4.18", title: "Design Risk, Temporary/Permanent Works Interface and Residual Risk Register", owner: "CDM PD / Meridian", sample: null, workflow: null },
          { ref: "4.19", title: "RFI, Technical Query, Design Change and Decision Registers", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.20", title: "Testing, Commissioning, As-Built, O&M and Handover Information Strategy", owner: "Meridian", sample: null, workflow: null },
          { ref: "4.21", title: "Technical Design Readiness Report", owner: "Meridian", sample: null, workflow: null },
        ],
      },
    ],
  },

  /* ─────────────────────────── COMMERCIAL TEAM ─────────────────────────── */
  {
    id: "commercial",
    name: "Commercial Team",
    code: "COM",
    blurb: "Pre-construction commercial pack — tender baseline, contract, cost control, procurement, and governance.",
    documentCount: 50,
    sections: [
      {
        title: "A. Tender & Bid Baseline",
        documents: [
          { ref: "A-01", title: "Client ITT / Tender Documents (as issued)", owner: "Estimating", priority: "Critical", sample: null, workflow: null },
          { ref: "A-02", title: "Priced Tender Submission (full build-up, as submitted)", owner: "Estimating", priority: "Critical", sample: null, workflow: null },
          { ref: "A-03", title: "Tender Qualifications & Assumptions Schedule", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "A-04", title: "Tender Clarifications & Addenda Log", owner: "Estimating", priority: "High", sample: null, workflow: null },
          { ref: "A-05", title: "Tender Baseline Programme", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "A-06", title: "Contract-vs-Tender Reconciliation", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "A-07", title: "Tender Adjudication / Settlement Summary", owner: "Estimating", priority: "Critical", sample: null, workflow: null },
        ],
      },
      {
        title: "B. Contract & Appointment",
        documents: [
          { ref: "B-01", title: "Executed Main Contract (JCT D&B Articles of Agreement)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "B-02", title: "Contract Particulars & Schedule of Amendments", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "B-03", title: "Employer's Requirements (ER)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "B-04", title: "Contractor's Proposals (CP)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "B-05", title: "Contract Sum Analysis (CSA)", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "B-06", title: "Insurance Schedule & Evidence (JCT Option A/B/C, PI, Works, PL)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "B-07", title: "Performance Bond / Parent Company Guarantee", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "B-08", title: "Collateral Warranties & Third-Party Rights Schedule", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "B-09", title: "Schedule / Priority of Contract Documents", owner: "CM", priority: "Standard", sample: null, workflow: null },
        ],
      },
      {
        title: "C. Cost, Budget & Cashflow",
        documents: [
          { ref: "C-01", title: "Contract Sum Breakdown / Elemental Cost Plan", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "C-02", title: "Opening Cost/Value Reconciliation (CVR)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "C-03", title: "Preliminaries Budget", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "C-04", title: "Cashflow Forecast (S-Curve)", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "C-05", title: "Commercial Risk & Opportunity Register", owner: "CM", priority: "High", sample: { file: "samples/c-05.xlsx", view: "samples/c-05.html", type: "xlsx" }, workflow: null },
          { ref: "C-06", title: "Margin / Fee Statement", owner: "CM", priority: "High", sample: null, workflow: null },
        ],
      },
      {
        title: "D. Procurement & Supply Chain",
        documents: [
          { ref: "D-01", title: "Procurement Schedule / Package Strategy", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "D-02", title: "Subcontract Package Matrix", owner: "QS", priority: "Critical", sample: null, workflow: null },
          { ref: "D-03", title: "Tender Event Schedule (TES)", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "D-04", title: "Package Enquiry / ITT Documents", owner: "QS", priority: "High", sample: { file: "samples/D-04.docx", view: "samples/D-04.html", type: "docx" }, workflow: null },
          { ref: "D-05", title: "Subcontractor Tender Analysis Report (TAR)", owner: "QS", priority: "High", sample: { file: "samples/D-05.docx", view: "samples/D-05.html", type: "docx" }, workflow: null },
          { ref: "D-06", title: "Pre-Let / Pre-Award Meeting Records", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "D-07", title: "Buying Gains / Losses Tracker", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "D-08", title: "Approved Supply Chain & PQQ Records", owner: "Procurement", priority: "Standard", sample: null, workflow: null },
        ],
      },
      {
        title: "E. Subcontract Administration",
        documents: [
          { ref: "E-01", title: "Subcontract Order Template (bespoke / standard sub-form)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "E-02", title: "Downstream Payment & Retention Schedule", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "E-03", title: "Offsite Materials / Vesting Procedure", owner: "QS", priority: "Standard", sample: null, workflow: null },
          { ref: "E-04", title: "Subcontractor Insurance & Warranty Requirements", owner: "CM", priority: "Standard", sample: null, workflow: null },
        ],
      },
      {
        title: "F. Change, Valuation & Payment Control",
        documents: [
          { ref: "F-01", title: "Payment Schedule (Application, Due & Final Dates, Notice deadlines)", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "F-02", title: "Payment Notice & Pay Less Notice Templates", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "F-03", title: "Change / Variation Register & Procedure", owner: "QS", priority: "Critical", sample: null, workflow: null },
          { ref: "F-04", title: "Loss & Expense / Extension of Time Procedure", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "F-05", title: "Dayworks & Contemporary Records Procedure", owner: "QS", priority: "High", sample: null, workflow: null },
          { ref: "F-06", title: "Provisional Sums & PC Sums Schedule", owner: "QS", priority: "Standard", sample: null, workflow: null },
          { ref: "F-07", title: "Contra-Charge Procedure", owner: "QS", priority: "Standard", sample: null, workflow: null },
        ],
      },
      {
        title: "G. Risk & Commercial Governance",
        documents: [
          { ref: "G-01", title: "Commercial Risk Register (Project)", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "G-02", title: "Delegated Authority / Commercial Sign-Off Matrix", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "G-03", title: "Commercial Responsibility Matrix (RACI)", owner: "CM", priority: "Standard", sample: null, workflow: null },
          { ref: "G-04", title: "Notices & Key Dates Schedule", owner: "CM", priority: "Critical", sample: null, workflow: null },
          { ref: "G-05", title: "Liquidated & Ascertained Damages (LADs) Summary", owner: "CM", priority: "High", sample: null, workflow: null },
        ],
      },
      {
        title: "H. Reporting & Handover",
        documents: [
          { ref: "H-01", title: "CVR Reporting Calendar & Template", owner: "CM", priority: "High", sample: null, workflow: null },
          { ref: "H-02", title: "Monthly Commercial Report Template", owner: "CM", priority: "Standard", sample: null, workflow: null },
          { ref: "H-03", title: "Estimating-to-Delivery Handover Record", owner: "Estimating", priority: "High", sample: null, workflow: null },
          { ref: "H-04", title: "Final Account Strategy Note", owner: "CM", priority: "Standard", sample: null, workflow: null },
        ],
      },
    ],
  },

  /* ─────────────────────────── CONSTRUCTION TEAM ─────────────────────────── */
  {
    id: "construction",
    name: "Construction Team",
    code: "CON",
    blurb: "Site execution, inspection, and handover — the documents that track how the build actually happens.",
    documentCount: 24,
    sections: [
      {
        title: "A. Mobilisation & Setup",
        documents: [
          { ref: "CON-01", title: "Construction Phase Plan (CDM)", owner: "PM", sample: null, workflow: null },
          { ref: "CON-02", title: "Site Logistics & Setup Plan", owner: "PM", sample: null, workflow: null },
          { ref: "CON-03", title: "Temporary Works Design Register", owner: "PM", sample: null, workflow: null },
          { ref: "CON-04", title: "Welfare & Site Accommodation Schedule", owner: "SM", sample: null, workflow: null },
          { ref: "CON-05", title: "Plant & Equipment Schedule", owner: "SM", sample: null, workflow: null },
          { ref: "CON-06", title: "Subcontractor Mobilisation Checklist", owner: "PM", sample: null, workflow: null },
        ],
      },
      {
        title: "B. Quality & Inspection",
        documents: [
          { ref: "CON-07", title: "Method Statement Register", owner: "SM", sample: null, workflow: null },
          { ref: "CON-08", title: "Inspection & Test Plan (ITP)", owner: "QM", sample: null, workflow: null },
          { ref: "CON-09", title: "Site Inspection Report", owner: "SM", sample: null, workflow: null },
          { ref: "CON-10", title: "Material Inspection Request (MIR)", owner: "SM", sample: null, workflow: null },
          { ref: "CON-11", title: "Non-Conformance Report (NCR) Register", owner: "QM", sample: null, workflow: null },
          { ref: "CON-12", title: "Hold & Witness Point Register", owner: "QM", sample: null, workflow: null },
        ],
      },
      {
        title: "C. Progress & Reporting",
        documents: [
          { ref: "CON-13", title: "Construction Programme (Master & 6-week look-ahead)", owner: "PM", sample: null, workflow: null },
          { ref: "CON-14", title: "Daily Site Diary / Progress Log", owner: "SM", sample: null, workflow: null },
          { ref: "CON-15", title: "Weekly Progress Report", owner: "PM", sample: null, workflow: null },
          { ref: "CON-16", title: "Monthly Project Report", owner: "PM", sample: null, workflow: null },
          { ref: "CON-17", title: "Delay & Disruption Notice Register", owner: "PM", sample: null, workflow: null },
          { ref: "CON-18", title: "Weather & Site Conditions Log", owner: "SM", sample: null, workflow: null },
        ],
      },
      {
        title: "D. Completion & Handover",
        documents: [
          { ref: "CON-19", title: "Snag List / Punch List", owner: "PM", sample: null, workflow: null },
          { ref: "CON-20", title: "Practical Completion Certificate", owner: "PM", sample: null, workflow: null },
          { ref: "CON-21", title: "O&M Manual Register", owner: "QM", sample: null, workflow: null },
          { ref: "CON-22", title: "As-Built Drawing Register", owner: "PM", sample: null, workflow: null },
          { ref: "CON-23", title: "Commissioning & Testing Certificates", owner: "SM", sample: null, workflow: null },
          { ref: "CON-24", title: "Handover Certificate & Defects Schedule", owner: "PM", sample: null, workflow: null },
        ],
      },
    ],
  },
];
