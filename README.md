# AWS Certified AI Practitioner (AIF-C01)
## Complete Study Guide

Welcome to your comprehensive study guide for the AWS Certified AI Practitioner certification. This guide covers everything you need to know to pass the exam.

---

## Exam Overview

| Detail | Info |
|--------|------|
| **Exam Code** | AIF-C01 |
| **Level** | Foundational |
| **Format** | Multiple-choice, Multiple-response, Ordering, Matching |
| **Questions** | 65 total (50 scored + 15 unscored) |
| **Duration** | 90 minutes |
| **Cost** | $100 USD |
| **Passing Score** | 700/1000 |
| **Validity** | 3 years |
| **Languages** | English, Japanese, Korean, Simplified Chinese, Traditional Chinese, German, Italian, French (France), Spanish (Latin America), Spanish (Spain), Portuguese (Brazil), Arabic |
| **Prerequisite** | None (up to 6 months AWS AI/ML exposure recommended) |

---

## Exam Domains & Weights

| # | Domain | Weight |
|---|--------|--------|
| 1 | Fundamentals of AI and ML | 20% |
| 2 | Fundamentals of Generative AI | 24% |
| 3 | Applications of Foundation Models | 28% |
| 4 | Guidelines for Responsible AI | 14% |
| 5 | Security, Compliance, and Governance for AI Solutions | 14% |

---

## Recommended Study Plan

### Path 1: Self-Paced (Free, 30-40 hours)

1. **AWS AI Practitioner Essentials** (Skill Builder) — 6 hours
2. **Exam Readiness** course (Skill Builder) — 2 hours
3. **Official Exam Guide** review — 2 hours
4. **Domain study** (this guide) — 12 hours
5. **AWS Workshops** (Bedrock, SageMaker) — 8 hours
6. **Practice Exams** — 6 hours
7. **Weak domain revision** — 4 hours

### Path 2: Accelerated (Paid, 20 hours)

1. Udemy/Coursera course (Stephane Maarek or similar) — 15 hours
2. Official Practice Exam — 2 hours
3. Domain review with this guide — 3 hours

---

## How to Use This Guide

```
aws-ai-practitioner-guide/
├── README.md                                ← You are here
├── 01-ai-ml-fundamentals.md                 ← Domain 1 (20%) ✅ ENRICHED
├── 02-generative-ai-fundamentals.md         ← Domain 2 (24%) ✅ ENRICHED
├── 03-foundation-model-applications.md      ← Domain 3 (28%) ✅ ENRICHED
├── 04-guidelines-responsible-ai.md          ← Domain 4 (14%) ✅ ENRICHED
├── 05-security-compliance-governance.md     ← Domain 5 (14%) ✅ ENRICHED
├── 06-aws-services.md                       ← All in-scope AWS services ✅ ENRICHED
├── 07-prompt-engineering.md                 ← Prompt engineering deep dive ✅ ENRICHED
├── 08-practice-questions.md                 ← Sample Qs & exam tips ✅ ENRICHED
└── 09-resources.md                          ← Links, courses, practice exams
```

**Start with Domain 1**, work through each file in order, then review the services and practice questions.

### 🎯 What's New: Comprehensive Study Material

This guide has been **transformed from outlines into complete study material** with:

✅ **Real-World Examples**: Every concept illustrated with practical scenarios  
✅ **Step-by-Step Calculations**: Detailed walkthroughs of metrics, costs, and formulas  
✅ **Visual Explanations**: Architecture diagrams and process flows  
✅ **AWS Implementation Code**: Working examples for Bedrock, SageMaker, and more  
✅ **Business Context**: ROI calculations and real-world decision frameworks  
✅ **Exam-Focused Content**: Patterns, traps, and decision trees for exam success  

### 📚 Content Highlights by Domain

**Domain 1: AI/ML Fundamentals**
- Supervised learning with diabetes prediction and delivery time examples
- Unsupervised learning with customer segmentation (4 discovered segments)
- Reinforcement learning with warehouse robot navigation (1000 episodes)
- Deep learning architectures (CNNs, RNNs, Transformers) with visual explanations
- Model evaluation metrics with confusion matrix calculations
- Business metrics with $1.5M ROI example

**Domain 2: Generative AI Fundamentals**
- Tokenization with cost calculations (7 input + 23 output tokens example)
- Transformer architecture with attention mechanism visualization
- RAG implementation with company policy Q&A (5-step process)
- AI agents with weather + flight booking example (4-step execution)
- Multi-agent systems with customer support orchestration

**Domain 3: Foundation Model Applications**
- Temperature effects (0.0 vs 0.7 vs 1.0) with product description examples
- Prompt caching savings: $23/month → $4.14/month (82% reduction)
- Fine-tuning cost comparison: LoRA $200 vs Full $1,200
- Model distillation: $150K/month → $2.5K/month (98% savings)
- FM evaluation metrics (ROUGE, BERTScore) with calculations
- RAG evaluation with 100-question test set

**Domain 4: Responsible AI**
- Bias detection with loan approval example (DI = 0.50, significant bias)
- Bias metrics calculations (CI, DI, DPPL, AD, TE) with formulas
- Bias mitigation: 15% → 0.5% hallucination rate (97% reduction)
- Sustainability: GPT-3 training = 552 metric tons CO2
- AWS Inferentia savings: $4,606/year → $1,997/year + 50% less CO2

**Domain 5: Security, Compliance, Governance**
- Prompt injection attacks with 4 attack types and mitigations
- PII detection and redaction with AWS implementation
- Hallucination detection with 3 real examples
- Grounding techniques with legal document analysis (15% → 0.5% hallucination)
- Multi-layer security approach with cost savings

**AWS Services Guide**
- Service comparison matrices (Bedrock vs SageMaker vs Q Business)
- Decision trees for service selection
- Real-world examples: Startup ($75/month) vs Enterprise ($150K/year)
- Exam-focused patterns (cost-effective, quick setup, compliance)
- Service integration patterns (RAG, agents, ML pipeline)

**Prompt Engineering Guide**
- Production patterns (defensive, structured output, error handling)
- Cost optimization: $125/month → $12.50/month (90% reduction)
- Prompt versioning: 65% → 85% satisfaction (+20%)
- A/B testing methodology with metrics
- Bedrock Prompt Management implementation

**Practice Questions**
- 40 comprehensive questions (20 original + 20 new)
- All domains covered with detailed explanations
- Real-world scenarios and cost calculations
- Common exam traps identified
- Explanation of why wrong answers are wrong

---

## Quick Reference: What to Know Cold

- Machine Learning types (supervised, unsupervised, reinforcement)
- Foundation Models vs traditional ML
- Amazon Bedrock and Amazon SageMaker AI (stars of the exam)
- Prompt engineering techniques (zero-shot, few-shot, chain-of-thought)
- RAG vs fine-tuning vs prompt engineering vs model distillation
- Inference parameters (temperature, input/output length)
- FM evaluation metrics (ROUGE, BLEU, BERTScore, LLM-as-a-judge)
- Responsible AI principles (fairness, transparency, veracity, robustness)
- AWS shared responsibility model for AI
- Security: prompt injection, hallucination detection, data leakage prevention
- Governance: data lineage, source citation, compliance frameworks
- Cost models (on-demand vs provisioned throughput, token-based pricing)
- Agentic AI concepts (agents, multi-agent systems, MCP)
