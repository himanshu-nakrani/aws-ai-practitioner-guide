# Everything you need to know to become AWS AI Practitioner

<p align="center">
  <a href="https://aws.amazon.com/certification/certified-ai-practitioner/">
    <img src="https://img.shields.io/badge/AWS-Certified%20AI%20Practitioner-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS AI Practitioner Badge">
  </a>
  <img src="https://img.shields.io/badge/Exam-AIF--C01-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AIF-C01">
  <img src="https://img.shields.io/badge/Level-Foundational-1P73D4?style=for-the-badge" alt="Foundational Level">
</p>

This repo is a study guide for the **[AWS Certified AI Practitioner (AIF-C01)](https://aws.amazon.com/certification/certified-ai-practitioner/)** exam. It also covers how common AI and generative AI ideas show up on AWS in real projects.

The material follows the **official exam guide** ([PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf), [HTML hub](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01.html)). For exam scope, service names, and domain weights, rely on AWS docs and the guide; both can change.

---

## 🎨 Interactive Study Guide

A beautifully designed, interactive web interface is now available at [`web/index.html`](web/index.html) — featuring:

- **Visual domain breakdown** with animated weight bars
- **7-phase study timeline** with estimated time allocations
- **Interactive concept cards** covering all 5 exam domains
- **Visual diagrams** for RAG, FM lifecycle, ML lifecycle, and shared responsibility
- **AWS service reference tables** with exam-oriented one-liners
- **Self-check quizzes** at the end of each domain
- **Code examples browser** for hands-on practice

Open `web/index.html` in any modern browser to start studying.

---

## Who this is for

- Professionals who need **foundational AI/ML and generative AI literacy** on AWS.
- Candidates preparing for **AIF-C01** who want domain-by-domain coverage plus hands-on examples.
- Anyone mapping **business problems** to the right AWS AI building blocks (without assuming you will train models from scratch).

The exam's **target candidate** uses AI/ML on AWS but is **not** expected to implement deep model engineering, heavy MLOps pipelines, or organization-wide governance frameworks. On the exam those topics show up as _concepts_ to recognize, not as tasks to perform.

---

## Exam snapshot (official basics)

| Item                 | Detail                                                            |
| -------------------- | ----------------------------------------------------------------- |
| **Exam code**        | AIF-C01                                                           |
| **Level**            | Foundational (AWS Certification)                                  |
| **Question types**   | Multiple choice, multiple response, ordering, matching            |
| **Scored questions** | 50 (plus **15 unscored** questions that do not affect your score) |
| **Passing score**    | **700** on a scaled score of 100–1000                             |
| **Scoring model**    | Compensatory (overall pass; section weights differ)                |

**Recommended knowledge (from AWS):** familiarity with core AWS services (for example EC2, S3, Lambda, **Amazon Bedrock**, **Amazon SageMaker AI**), the **shared responsibility model**, **IAM**, and **pricing models**. Up to about **six months**' exposure to AI/ML on AWS is typical for the target candidate.

**Out-of-scope job tasks (examples from AWS):** developing model algorithms, heavy feature engineering, hyperparameter tuning, building full AI/ML pipelines or security/compliance programs. On the exam you need to recognize _what_ these are, not perform them at expert depth.

---

## Content domains and weights (scored content)

| Domain | Topic                                                 | Weight  |
| ------ | ----------------------------------------------------- | ------- |
| **1**  | Fundamentals of AI and ML                             | **20%** |
| **2**  | Fundamentals of GenAI                                 | **24%** |
| **3**  | Applications of Foundation Models                     | **28%** |
| **4**  | Guidelines for Responsible AI                         | **14%** |
| **5**  | Security, Compliance, and Governance for AI Solutions | **14%** |

---

## How to use this repo

### Web Interface (Recommended)
Open [`web/index.html`](web/index.html) in your browser for an interactive study experience with visual aids and animations.

### Markdown Guides
1. **Read the domain guides in order** (1 through 5). Later domains assume you know these terms.
2. **Cross-link to AWS docs** for anything operational (IAM, encryption, regional availability, pricing).
3. **Run the code examples** under `examples/` to connect API shapes to the concepts (Bedrock, boto3 patterns, evaluation and monitoring ideas).
4. **Validate exam scope** using the official [in-scope services](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/aif-01-in-scope-services.html) list.

### Suggested study sequence

| Phase | Focus                  | Activities                                                                                  |
| ----- | ---------------------- | ------------------------------------------------------------------------------------------- |
| **1** | Vocabulary & lifecycle | Domain 1 guide; sketch one ML lifecycle for a business problem you know.                    |
| **2** | GenAI building blocks  | Domain 2 guide; list 3 GenAI use cases and 2 failure modes (hallucination, cost).           |
| **3** | FMs in production      | Domain 3 guide; practice explaining RAG, agents, and evaluation metrics out loud.           |
| **4** | Responsibility & trust | Domain 4 guide; map tools (Guardrails, Clarify, Model Monitor, A2I) to risks.               |
| **5** | Security & governance  | Domain 5 guide; trace IAM → encryption → logging for a Bedrock workload on paper.           |
| **6** | Service mapping        | `06-aws-services.md`; drill "which service for which scenario?"                             |
| **7** | AI services lookup     | `10-aws-ai-services-lookup.md`; use as a visual lookup page for detailed service selection.  |
| **8** | Hands-on               | Run Bedrock examples in a sandbox account; adjust inference parameters and observe changes. |

---

## Guide index

| Guide                                       | File                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Domain 1: AI & ML fundamentals              | [01-ai-ml-fundamentals.md](01-ai-ml-fundamentals.md)                                             |
| Domain 2: Generative AI fundamentals        | [02-generative-ai-fundamentals.md](02-generative-ai-fundamentals.md)                             |
| Domain 3: Foundation model applications     | [03-foundation-model-applications.md](03-foundation-model-applications.md)                       |
| Domain 4: Responsible AI                    | [04-guidelines-responsible-ai.md](04-guidelines-responsible-ai.md)                               |
| Domain 5: Security, compliance, governance  | [05-security-compliance-governance.md](05-security-compliance-governance.md)                     |
| AWS services reference                       | [06-aws-services.md](06-aws-services.md)                                                         |
| Prompt engineering                           | [07-prompt-engineering.md](07-prompt-engineering.md)                                             |
| Practice questions                           | [08-practice-questions.md](08-practice-questions.md)                                             |
| Resources                                    | [09-resources.md](09-resources.md)                                                               |
| Visual AWS AI services lookup                | [10-aws-ai-services-lookup.md](10-aws-ai-services-lookup.md)                                     |
| Complete combined guide                      | [aws-ai-practitioner-complete-guide.md](aws-ai-practitioner-complete-guide.md)                   |

---

## Code examples

| Example                                                                  | Description                                                                           |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [examples/bedrock_converse.py](examples/bedrock_converse.py)             | Invoke a foundation model with the **Converse** API (messages, inference parameters). |
| [examples/bedrock_embeddings.py](examples/bedrock_embeddings.py)         | Generate **embeddings** for RAG-style workflows.                                      |
| [examples/rag_similarity_concept.py](examples/rag_similarity_concept.py) | **Cosine similarity** between vectors (RAG retrieval concept).                        |
| [examples/requirements.txt](examples/requirements.txt)                   | Minimal Python dependencies for the samples.                                          |

Examples assume credentials via the default AWS credential chain (for example environment variables, `~/.aws/credentials`, or an IAM role). Replace model IDs and regions with values valid for your account.

---

## Official resources

- [AWS Certified AI Practitioner](https://aws.amazon.com/certification/certified-ai-practitioner/) (certification home)
- [Exam guide (AIF-C01)](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01.html) (domains, tasks, policies)
- [Exam Prep on AWS Skill Builder](https://skillbuilder.aws/) (training aligned with AWS Certification)
- [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) (operational excellence, security, cost, sustainability)

---

## Disclaimer

This guide is **educational** and not affiliated with AWS. Exams, service names, and guides change; check AWS documentation before you schedule your test or design production systems.
