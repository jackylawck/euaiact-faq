# 02 角色界定與價值鏈責任 (Roles & Value Chain)

[🇬🇧 **Switch to English Section**](#english-version){ .md-button } [🇭🇰 **切換至中文區塊**](#chinese-version){ .md-button .md-button--primary }

> **法定核心依據 / Legal Basis**: Regulation (EU) 2024/1689 **Article 3**, **Article 16**, **Article 25** & **Article 26**

---

<span id="chinese-version"></span>
## 🇭🇰 角色界定深度解析 (中文版)

### 2.1 Provider 與 Deployer 責任矩陣
| 角色名稱 | 法定定義 (Article 3) | 核心義務 |
| :--- | :--- | :--- |
| **提供者 (Provider)** | 開發 AI 並以自身名義/商標投放市場或交付使用。 | CE 標誌、技術文檔、符合性評估、風險管理體系。 |
| **部署者 (Deployer)** | 在職權或業務範圍內使用 AI 系統（非純個人）。 | 依指引操作、人工監督、保存日誌 6 個月、通知員工。 |
| **GPAI 提供者 (GPAI Provider)** | 訓練通用大模型（如 LLM）的研發機構。 | 下游技術文檔、版權法合規、訓練數據摘要、紅隊測試。 |

### 2.2 Deployer 升級為 Provider 的三大陷阱 (Article 25)
若企業進行以下操作之一，依法將被直接推定為 **Provider**，須承擔全部高風險合規責任：
1. **白標貼牌 (White-labeling)**：將第三方 AI 冠上自己品牌或商標推出市場。
2. **實質性修改 (Substantial Modification)**：對模型架構、權重進行大幅改動或深度微調（Fine-tuning），改變了風險特徵。
3. **變更預期用途 (Repurposing)**：將一般用途系統（如語音分析）改裝應用於 Annex III 高風險範疇（如面試評核）。

### 2.3 AIGP 考點防雷
* **自研自用屬 Provider**：企業自研 AI 僅供內部使用（Putting into service），兼具 Provider 與 Deployer 雙重責任。
* **Prompt Engineering 邊界**：單純設計提示詞或掛載外部 RAG 知識庫，通常維持 Deployer 身份。

---

<span id="english-version"></span>
## 🇬🇧 Roles & Value Chain Responsibilities (English Version)

### 2.1 Statutory Roles Matrix
| Role | Definition (Article 3) | Core Statutory Duties |
| :--- | :--- | :--- |
| **Provider** | Develops and places AI on the market under own brand. | Technical files, CE marking, conformity assessments. |
| **Deployer** | Uses an AI system in professional contexts. | Instructions compliance, human oversight, 6-month logs. |
| **GPAI Provider** | Builds foundational broad general-purpose AI. | Technical integration files, copyright rules, red-teaming. |

### 2.2 Role-Switch Trap (Article 25)
A Deployer is **statutorily deemed a Provider** if:
1. **White-Labeling**: Placing third-party AI on the market under own trademark.
2. **Substantial Modification**: Modifying weights/architecture altering the risk profile.
3. **Repurposing**: Modifying a low-risk tool into an Annex III high-risk use case.

### 2.3 AIGP Exam Focus
* **Internal Use = Putting into Service**: Developing proprietary in-house tools triggers full Provider liability.
* **Prompting Safety**: Standard prompt engineering and RAG workflows generally retain Deployer status.
