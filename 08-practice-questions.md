# Practice Questions and Exam Tips
## Prepare for Exam Day

---

## Sample Questions with Answers

### Domain 1: AI/ML Fundamentals (20%)

**Q1:** Which type of machine learning is used when the training data includes labeled examples?

A) Supervised learning  
B) Unsupervised learning  
C) Reinforcement learning  
D) Self-supervised learning  

**Answer:** A) Supervised learning

**Explanation:** Supervised learning requires labeled data where each input has a corresponding output. The model learns to map inputs to outputs.

---

**Q2:** A company wants to group customers into segments based on purchasing behavior without predefined categories. Which ML approach should they use?

A) Classification  
B) Regression  
C) Clustering  
D) Reinforcement learning  

**Answer:** C) Clustering

**Explanation:** Clustering is an unsupervised learning technique that groups similar items together without predefined labels.

---

**Q3:** Which neural network architecture is most suitable for image recognition tasks?

A) RNN  
B) CNN  
C) GAN  
D) Transformer  

**Answer:** B) CNN (Convolutional Neural Network)

**Explanation:** CNNs are designed for image processing, using convolutional layers to detect features like edges, shapes, and patterns.

---

### Domain 2: Generative AI Fundamentals (24%)

**Q4:** When constructing a prompt for a foundation model, which principle helps achieve the most relevant output?

A) Use longer prompts with more words  
B) Provide clear context and specific instructions  
C) Avoid examples in the prompt  
D) Use only single-word commands  

**Answer:** B) Provide clear context and specific instructions

**Explanation:** Clear, specific prompts with context help the model understand exactly what's needed, leading to more relevant outputs.

---

**Q5:** What is the primary purpose of Retrieval Augmented Generation (RAG)?

A) To train a model from scratch  
B) To reduce model size  
C) To provide external knowledge to a foundation model  
D) To encrypt model outputs  

**Answer:** C) To provide external knowledge to a foundation model

**Explanation:** RAG retrieves relevant information from external sources and provides it to the model, enhancing factual accuracy without retraining.

---

**Q6:** Which technique involves providing examples in a prompt to guide the model's response?

A) Zero-shot prompting  
B) Few-shot prompting  
C) Chain-of-thought prompting  
D) System prompting  

**Answer:** B) Few-shot prompting

**Explanation:** Few-shot prompting provides 1-5 examples before the actual task, helping the model understand the expected format and behavior.

---

### Domain 3: Applications of Foundation Models (36%)

**Q7:** Which AWS service provides a fully managed environment for accessing foundation models from multiple providers?

A) Amazon SageMaker  
B) Amazon Bedrock  
C) AWS Lambda  
D) Amazon Comprehend  

**Answer:** B) Amazon Bedrock

**Explanation:** Amazon Bedrock is the managed service for accessing FMs from Anthropic, Meta, Amazon, Mistral, and others through a single API.

---

**Q8:** A company wants to fine-tune a foundation model with their proprietary data while minimizing costs. Which approach should they use?

A) Full fine-tuning  
B) LoRA (Low-Rank Adaptation)  
C) Training from scratch  
D) Zero-shot prompting  

**Answer:** B) LoRA (Low-Rank Adaptation)

**Explanation:** LoRA adds small trainable layers to the model, achieving customization with significantly less compute and cost than full fine-tuning.

---

**Q9:** Which AWS service should be used to detect and redact PII from model inputs and outputs?

A) Amazon Macie  
B) Amazon Bedrock Guardrails  
C) AWS IAM  
D) Amazon CloudWatch  

**Answer:** B) Amazon Bedrock Guardrails

**Explanation:** Bedrock Guardrails can detect and redact PII in both inputs and outputs, providing content filtering for AI applications.

---

**Q10:** A developer needs to build a chatbot that can answer questions based on company documentation. Which combination of services is MOST appropriate?

A) Amazon Lex + Amazon Comprehend  
B) Amazon Bedrock + Bedrock Knowledge Bases  
C) Amazon SageMaker + Amazon S3  
D) Amazon Polly + Amazon Transcribe  

**Answer:** B) Amazon Bedrock + Bedrock Knowledge Bases

**Explanation:** Bedrock provides the foundation model, and Knowledge Bases provides RAG capabilities to answer questions from company documents.

---

### Domain 4: Considerations for AI/ML (20%)

**Q11:** Under the AWS shared responsibility model, who is responsible for configuring encryption of data used with Amazon Bedrock?

A) AWS  
B) The customer  
C) The model provider  
D) A third party  

**Answer:** B) The customer

**Explanation:** Customers are responsible for configuring security settings, including encryption, for their data in the cloud.

---

**Q12:** Which AWS service can be used to detect bias in ML models before deployment?

A) Amazon CloudWatch  
B) Amazon SageMaker Clarify  
C) AWS Config  
D) Amazon Macie  

**Answer:** B) Amazon SageMaker Clarify

**Explanation:** SageMaker Clarify provides bias detection metrics and model explainability, helping identify unfair model behavior.

---

**Q13:** A company wants to optimize costs when using Amazon Bedrock for high-volume, simple classification tasks. What should they recommend?

A) Use Claude 3 Opus for best accuracy  
B) Use provisioned throughput  
C) Use Claude 3 Haiku for faster, cheaper inference  
D) Fine-tune a custom model  

**Answer:** C) Use Claude 3 Haiku for faster, cheaper inference

**Explanation:** Haiku is designed for high-volume, simple tasks with significantly lower cost than larger models like Opus or Sonnet.

---

**Q14:** Which principle of responsible AI ensures that AI systems treat all users fairly regardless of demographic characteristics?

A) Transparency  
B) Privacy  
C) Fairness  
D) Security  

**Answer:** C) Fairness

**Explanation:** Fairness ensures AI systems don't discriminate and treat all users equitably across different demographic groups.

---

**Q15:** A company needs to ensure their AI application's responses are based on verified company data. Which Bedrock feature should they implement?

A) Fine-tuning  
B) Guardrails with contextual grounding  
C) Provisioned throughput  
D) Model evaluation  

**Answer:** B) Guardrails with contextual grounding

**Explanation:** Contextual grounding checks ensure model responses are based on the provided context, reducing hallucinations.

---

### Domain 5: Security, Compliance, and Governance (14%)

**Q16:** A company wants to prevent users from injecting malicious prompts that override system instructions. Which Bedrock feature should they implement?

A) Provisioned throughput  
B) Prompt caching  
C) Guardrails with prompt attack detection  
D) Model evaluation  

**Answer:** C) Guardrails with prompt attack detection

**Explanation:** Bedrock Guardrails can detect jailbreak and prompt injection attempts, blocking malicious inputs that try to override system instructions.

---

**Q17:** Which AWS service should be used to track the origin, transformations, and usage of data throughout the AI model lifecycle?

A) Amazon CloudWatch  
B) AWS Glue Data Catalog  
C) AWS Config  
D) Amazon Inspector  

**Answer:** B) AWS Glue Data Catalog

**Explanation:** AWS Glue Data Catalog provides a centralized metadata repository that enables data lineage tracking — documenting where data came from, how it was transformed, and which models use it.

---

**Q18:** A healthcare company needs to verify that their AI system complies with HIPAA regulations. Which AWS service provides on-demand access to AWS compliance reports?

A) AWS Audit Manager  
B) AWS Artifact  
C) AWS Config  
D) AWS Trusted Advisor  

**Answer:** B) AWS Artifact

**Explanation:** AWS Artifact provides on-demand access to AWS compliance reports (SOC, HIPAA, ISO) and agreements, allowing organizations to verify AWS's compliance status.

---

**Q19:** Which technique helps detect when a model generates factually incorrect responses that sound plausible?

A) Temperature adjustment  
B) Prompt caching  
C) Confidence scoring  
D) Token counting  

**Answer:** C) Confidence scoring

**Explanation:** Confidence scoring flags low-confidence outputs for review, helping detect potential hallucinations before they reach end users.

---

**Q20:** Under the AWS shared responsibility model, who is responsible for configuring encryption of data at rest used with Amazon Bedrock?

A) AWS  
B) The model provider (e.g., Anthropic)  
C) The customer  
D) Both AWS and the customer jointly  

**Answer:** C) The customer

**Explanation:** Customers are responsible for configuring security IN the cloud, including encryption settings, IAM policies, and access controls for their data.

---

## Exam Tips and Strategies

### Before the Exam

1. **Know the domains and weights** — Focus on Domains 2 & 3 (52% combined)
2. **Take practice exams** — At least 2-3 full practice tests
3. **Review wrong answers** — Understand why you got them wrong
4. **Study weak domains** — Don't just review what you know

### During the Exam

| Strategy | Description |
|----------|-------------|
| **Read carefully** | Pay attention to "MOST", "BEST", "FIRST" |
| **Eliminate wrong answers** | Usually 2 options are clearly wrong |
| **Flag and skip** | Don't spend too long on one question |
| **Watch for distractors** | Answers that are partially correct |
| **Trust your first instinct** | Don't overthink |
| **Manage time** | ~2 minutes per question |

### Common Question Patterns

| Pattern | What to Look For |
|---------|-----------------|
| "Which service..." | Match use case to AWS service |
| "MOST cost-effective" | Compare pricing models |
| "BEST approach" | Weigh pros and cons |
| "FIRST step" | Identify the starting point |
| "Which type of ML" | Map to supervised/unsupervised/RL |
| "Which security control" | Match to IAM, KMS, guardrails, encryption |
| "Which compliance tool" | Match to Artifact, Audit Manager, Config |

### Key Services to Know Cold

```
Amazon Bedrock — Foundation model access
Amazon SageMaker AI — ML platform
Amazon Comprehend — NLP
Amazon Rekognition — Vision
Amazon Textract — Document extraction
Amazon Polly — Text-to-speech
Amazon Transcribe — Speech-to-text
Amazon Translate — Translation
Amazon Lex — Chatbots
Amazon Q — AI assistant
Amazon Nova — Amazon's multimodal FMs
Amazon Bedrock Guardrails — Content filtering
Amazon SageMaker Clarify — Bias detection
Amazon Augmented AI (A2I) — Human review
AWS Artifact — Compliance reports
AWS Audit Manager — Compliance auditing
```

### Quick Reference: Decision Trees

**Which ML type?**
```
Has labels? → Yes → Supervised
           → No → Clustering/Association (Unsupervised)
Learning from rewards? → Reinforcement
```

**Which AWS service?**
```
Need FM? → Bedrock
Need custom ML? → SageMaker AI
Need NLP? → Comprehend
Need vision? → Rekognition
Need chatbot? → Lex or Bedrock Agents
Need document extraction? → Textract
Need human review? → Augmented AI (A2I)
Need compliance reports? → AWS Artifact
Need bias detection? → SageMaker Clarify
```

**Which fine-tuning method?**
```
Large budget + full control? → Full fine-tuning
Moderate budget? → LoRA/QLoRA
Align with preferences? → RLHF/DPO
Just need knowledge? → RAG (no fine-tuning)
Want smaller/faster model? → Model distillation
```

---

## Study Checklist

### Week 1-2: Foundations
- [ ] Complete AWS AI Practitioner Essentials course
- [ ] Read through Domain 1 & 2 in this guide
- [ ] Take notes on key concepts

### Week 3-4: Services & Applications
- [ ] Study Domain 3 thoroughly
- [ ] Study Domain 4 (Responsible AI)
- [ ] Hands-on with Bedrock (free tier)
- [ ] Review all AWS AI services

### Week 5-6: Security, Practice & Review
- [ ] Complete Domain 5 (Security, Compliance, Governance)
- [ ] Take practice exam #1
- [ ] Review weak areas

### Week 7-8: Final Prep
- [ ] Take practice exam #2
- [ ] Review all checklists
- [ ] Final Domain 3 & 5 review
- [ ] Exam day!

---

## Recommended Study Order

1. **README.md** — Overview and exam details
2. **01-ai-ml-fundamentals.md** — Build foundation (Domain 1)
3. **02-generative-ai-fundamentals.md** — GenAI concepts (Domain 2)
4. **06-aws-services.md** — In-scope service reference
5. **07-prompt-engineering.md** — Prompt techniques deep dive
6. **03-foundation-model-applications.md** — FM applications (Domain 3)
7. **04-guidelines-responsible-ai.md** — Responsible AI (Domain 4)
8. **05-security-compliance-governance.md** — Security & compliance (Domain 5)
9. **08-practice-questions.md** — You are here! Test yourself
10. **09-resources.md** — External resources and links
