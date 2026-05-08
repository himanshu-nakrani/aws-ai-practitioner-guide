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

## Additional Practice Questions

**Q21:** A company needs to process 10 million customer reviews for sentiment analysis. The analysis doesn't need to be real-time. Which approach is MOST cost-effective?

A) Amazon Bedrock on-demand with Claude 3 Opus  
B) Amazon Bedrock batch processing with Claude 3 Haiku  
C) Amazon Comprehend real-time API  
D) Amazon SageMaker real-time endpoint  

**Answer:** B) Amazon Bedrock batch processing with Claude 3 Haiku

**Explanation:** 
- Batch processing is cheaper than real-time (no need for immediate results)
- Haiku is the most cost-effective model for simple tasks like sentiment analysis
- Bedrock batch can process large volumes efficiently
- Comprehend could work but Bedrock batch with Haiku is more cost-effective for this volume

---

**Q22:** A healthcare company is building an AI system to analyze patient records. Which combination of AWS services provides the BEST security and compliance?

A) Amazon Bedrock + S3 + CloudWatch  
B) Amazon Bedrock + Guardrails + VPC + CloudTrail + KMS  
C) Amazon SageMaker + EC2 + CloudWatch  
D) Amazon Comprehend Medical + S3  

**Answer:** B) Amazon Bedrock + Guardrails + VPC + CloudTrail + KMS

**Explanation:**
- Bedrock: HIPAA-eligible foundation model service
- Guardrails: PII detection and redaction
- VPC: Network isolation
- CloudTrail: Complete audit trail for compliance
- KMS: Encryption key management
This combination provides defense-in-depth for healthcare data.

---

**Q23:** A model is generating responses that include information not present in the provided context documents. Which technique would BEST address this issue?

A) Increase temperature parameter  
B) Use Bedrock Guardrails with contextual grounding  
C) Fine-tune the model  
D) Increase max_tokens  

**Answer:** B) Use Bedrock Guardrails with contextual grounding

**Explanation:**
- Contextual grounding ensures responses are based on provided context
- Blocks responses that aren't grounded in source documents
- Directly addresses hallucination problem
- Temperature/max_tokens don't solve hallucination
- Fine-tuning is expensive and doesn't guarantee grounding

---

**Q24:** A company wants to build a chatbot that can check order status, process returns, and answer FAQs. Which service is MOST appropriate?

A) Amazon Lex  
B) Amazon Bedrock Agents  
C) Amazon Comprehend  
D) Amazon Q Business  

**Answer:** B) Amazon Bedrock Agents

**Explanation:**
- Agents can perform actions (check orders, process returns) via API calls
- Can also answer questions (FAQs) using knowledge bases
- Lex is for conversational interfaces but limited action capabilities
- Comprehend is for text analysis, not chatbots
- Q Business is for enterprise knowledge workers, not customer-facing

---

**Q25:** A model trained on historical hiring data shows 85% accuracy for male candidates but only 68% accuracy for female candidates. What is this an example of?

A) Overfitting  
B) Underfitting  
C) Demographic disparity bias  
D) High variance  

**Answer:** C) Demographic disparity bias

**Explanation:**
- Different accuracy across demographic groups indicates bias
- Model performs worse for underrepresented group (female candidates)
- This is a fairness issue, not a technical ML issue
- Overfitting/underfitting relate to model complexity, not fairness

---

**Q26:** Which inference parameter should be set to 0 for tasks requiring deterministic, consistent outputs?

A) max_tokens  
B) top_p  
C) temperature  
D) top_k  

**Answer:** C) temperature

**Explanation:**
- Temperature=0 makes model deterministic (always picks highest probability token)
- Same input always produces same output
- Critical for tasks like classification, data extraction
- top_p and top_k affect diversity but don't guarantee determinism
- max_tokens only controls output length

---

**Q27:** A company has a 2,000-token system prompt that's used in every request. Which feature would MOST reduce costs?

A) Use a smaller model  
B) Enable prompt caching  
C) Reduce max_tokens  
D) Use batch processing  

**Answer:** B) Enable prompt caching

**Explanation:**
- Prompt caching reduces cost for repeated context (75% discount on cached tokens)
- 2,000 tokens repeated in every request = high savings potential
- Smaller model helps but caching addresses the specific problem
- max_tokens affects output, not the system prompt cost
- Batch processing doesn't cache prompts

---

**Q28:** Which AWS service should be used to detect if a model's prediction accuracy is degrading over time in production?

A) Amazon CloudWatch  
B) Amazon SageMaker Model Monitor  
C) AWS CloudTrail  
D) Amazon SageMaker Clarify  

**Answer:** B) Amazon SageMaker Model Monitor

**Explanation:**
- Model Monitor specifically detects data drift and model drift
- Tracks prediction accuracy over time
- Alerts when performance degrades
- CloudWatch monitors infrastructure, not model performance
- CloudTrail is for audit logging
- Clarify is for bias detection, not drift

---

**Q29:** A company needs to generate product descriptions with a consistent brand voice and specific terminology. Which approach is MOST appropriate?

A) Zero-shot prompting  
B) RAG with product documentation  
C) Fine-tuning on brand content  
D) Increase temperature to 1.0  

**Answer:** C) Fine-tuning on brand content

**Explanation:**
- Fine-tuning learns specific writing style and terminology
- Best for consistent brand voice across all outputs
- RAG provides facts but doesn't learn style
- Zero-shot won't capture specific brand voice
- High temperature increases creativity but reduces consistency

---

**Q30:** Which metric measures the overlap between generated summary and reference summary at the word level?

A) BERTScore  
B) BLEU  
C) ROUGE-1  
D) F1 Score  

**Answer:** C) ROUGE-1

**Explanation:**
- ROUGE-1 measures unigram (word) overlap
- Specifically designed for summarization evaluation
- BERTScore measures semantic similarity, not word overlap
- BLEU is for translation
- F1 is for classification

---

**Q31:** A financial services company needs to ensure AI responses don't include customer account numbers or SSNs. Which Bedrock feature should they implement?

A) Content filters  
B) Topic denial  
C) PII detection and redaction  
D) Contextual grounding  

**Answer:** C) PII detection and redaction

**Explanation:**
- PII detection specifically identifies and blocks/redacts sensitive data (SSN, account numbers)
- Content filters block harmful content categories
- Topic denial blocks discussion topics
- Contextual grounding ensures factual accuracy

---

**Q32:** Which AWS service provides on-demand access to compliance reports like SOC 2 and HIPAA?

A) AWS Config  
B) AWS Audit Manager  
C) AWS Artifact  
D) AWS CloudTrail  

**Answer:** C) AWS Artifact

**Explanation:**
- Artifact provides downloadable compliance reports and agreements
- Config tracks resource configuration
- Audit Manager automates compliance auditing
- CloudTrail logs API activity

---

**Q33:** A model needs to classify images as containing cats, dogs, or neither. This is an example of which type of learning?

A) Supervised learning - regression  
B) Supervised learning - classification  
C) Unsupervised learning - clustering  
D) Reinforcement learning  

**Answer:** B) Supervised learning - classification

**Explanation:**
- Labeled data (images with cat/dog/neither labels) = supervised
- Discrete categories (cat, dog, neither) = classification
- Regression predicts continuous values
- Clustering finds groups without labels
- Reinforcement learning uses rewards

---

**Q34:** Which combination provides the MOST comprehensive evaluation of a RAG system?

A) ROUGE score only  
B) Retrieval accuracy + answer faithfulness + citation correctness  
C) BERTScore only  
D) User satisfaction only  

**Answer:** B) Retrieval accuracy + answer faithfulness + citation correctness

**Explanation:**
- RAG has multiple components that need evaluation
- Retrieval accuracy: Are relevant documents found?
- Answer faithfulness: Does answer match sources?
- Citation correctness: Are sources properly cited?
- Single metrics miss important aspects
- User satisfaction is important but not sufficient alone

---

**Q35:** A company wants to reduce the carbon footprint of their ML training workloads. Which AWS service should they use?

A) Amazon EC2 with GPU instances  
B) AWS Trainium  
C) Amazon SageMaker with default settings  
D) AWS Lambda  

**Answer:** B) AWS Trainium

**Explanation:**
- Trainium is custom ML training chip optimized for energy efficiency
- 40% less energy than comparable GPU instances
- Specifically designed for sustainable ML training
- Lambda not suitable for ML training
- Default SageMaker uses standard instances

---

**Q36:** Which technique generates multiple responses to the same question and checks for agreement to detect hallucinations?

A) RAG grounding  
B) Self-consistency  
C) Fine-tuning  
D) Prompt caching  

**Answer:** B) Self-consistency

**Explanation:**
- Self-consistency generates multiple responses and checks agreement
- High agreement = likely accurate
- Low agreement = potential hallucination
- RAG grounds in documents
- Fine-tuning doesn't detect hallucinations
- Prompt caching is for cost optimization

---

**Q37:** A model shows 99% accuracy on training data but only 65% on test data. This indicates:

A) High bias (underfitting)  
B) High variance (overfitting)  
C) Good generalization  
D) Demographic disparity  

**Answer:** B) High variance (overfitting)

**Explanation:**
- Large gap between training and test performance = overfitting
- Model memorized training data instead of learning patterns
- High variance means model is too sensitive to training data
- High bias would show poor performance on both
- Good generalization would show similar performance
- Demographic disparity is about fairness across groups

---

**Q38:** Which AWS service enables human reviewers to evaluate AI model outputs for quality assurance?

A) Amazon SageMaker Clarify  
B) Amazon Augmented AI (A2I)  
C) Amazon Bedrock Guardrails  
D) AWS CloudTrail  

**Answer:** B) Amazon Augmented AI (A2I)

**Explanation:**
- A2I provides human review workflows for ML predictions
- Integrates with SageMaker and other services
- Clarify detects bias, doesn't provide human review
- Guardrails filter content automatically
- CloudTrail logs API calls

---

**Q39:** A company needs to translate customer support conversations in real-time across 50 languages. Which service is MOST appropriate?

A) Amazon Bedrock with multilingual model  
B) Amazon Translate  
C) Amazon Comprehend  
D) Amazon Polly  

**Answer:** B) Amazon Translate

**Explanation:**
- Translate is purpose-built for language translation
- Supports 75+ languages
- Optimized for translation tasks
- Bedrock could work but Translate is specialized and more cost-effective
- Comprehend analyzes text, doesn't translate
- Polly converts text to speech

---

**Q40:** Which metric would be MOST important for evaluating a medical diagnosis AI system?

A) Precision (minimize false positives)  
B) Recall (minimize false negatives)  
C) Accuracy (overall correctness)  
D) F1 Score (balance)  

**Answer:** B) Recall (minimize false negatives)

**Explanation:**
- In medical diagnosis, missing a disease (false negative) is catastrophic
- Better to have false alarms than miss diagnoses
- Recall measures ability to catch all positive cases
- Precision is important but recall is critical for safety
- Accuracy can be misleading with imbalanced data
- F1 balances both but recall is priority for medical use

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
