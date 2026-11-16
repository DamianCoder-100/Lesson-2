
/* =========================================================
   LESSON 2 EXAMINATION
   File: js/lesson-2.js
   ========================================================= */

(() => {
    "use strict";

    const PASS_MARK = 80;
    const STORAGE_RESULT_KEY = "module2ExamResult";
    const STORAGE_PASS_KEY = "module2Passed";

    const questions = [
        {
            question: "What do shares outstanding represent?",
            options: [
                "The total number of shares issued and held by shareholders",
                "Only the shares available for public trading",
                "The number of employees a company has",
                "The number of shares traded in one day"
            ],
            answer: 0,
            explanation: "Shares outstanding are the total shares of a company's stock currently held by all its shareholders. Restricted shares are included, while treasury shares are generally excluded."
        },
        {
            question: "What is a company's public float?",
            options: [
                "All shares ever issued by the company",
                "Shares generally available for public trading",
                "Only shares owned by company executives",
                "The total dollar value of the company"
            ],
            answer: 1,
            explanation: "The float represents shares generally available for public trading. It excludes restricted or closely held shares that are not available for normal trading."
        },
        {
            question: "A company has 80 million shares outstanding, of which 15 million are restricted. What is its approximate float?",
            options: [
                "95 million shares",
                "80 million shares",
                "65 million shares",
                "15 million shares"
            ],
            answer: 2,
            explanation: "Float = Shares Outstanding − Restricted Shares. Therefore, 80 million − 15 million = 65 million shares."
        },
        {
            question: "How is a company's market capitalization calculated?",
            options: [
                "Share price × Shares outstanding",
                "Revenue × Number of employees",
                "Net income ÷ Share price",
                "Share price × Daily trading volume"
            ],
            answer: 0,
            explanation: "Market capitalization is calculated by multiplying the current share price by the total shares outstanding."
        },
        {
            question: "A company has 50 million shares outstanding and its stock trades at $40 per share. What is its market capitalization?",
            options: [
                "$500 million",
                "$1 billion",
                "$2 billion",
                "$4 billion"
            ],
            answer: 2,
            explanation: "50 million shares × $40 = $2 billion in market capitalization."
        },
        {
            question: "What happens when a company's IPO lock-up period expires?",
            options: [
                "The company must immediately sell all its shares",
                "Certain insiders and early investors may become free to sell previously restricted shares",
                "The company automatically leaves the stock exchange",
                "All shareholders lose their shares"
            ],
            answer: 1,
            explanation: "A lock-up expiration ends a contractual restriction on certain shareholders selling their shares. It does not mean they must sell."
        },
        {
            question: "What is a dividend?",
            options: [
                "A loan that shareholders must repay",
                "A fee charged by the stock exchange",
                "A distribution of company profits or assets to shareholders",
                "A guarantee that a stock's price will increase"
            ],
            answer: 2,
            explanation: "A dividend is a distribution a company may make to its shareholders. Dividends are not guaranteed and can be reduced or suspended."
        },
        {
            question: "You own 250 shares of a company that declares a quarterly dividend of $0.40 per share. How much would you receive for that dividend payment?",
            options: [
                "$40",
                "$100",
                "$250",
                "$400"
            ],
            answer: 1,
            explanation: "250 shares × $0.40 = $100. This is the dividend amount before any applicable taxes."
        },
        {
            question: "Which statement about the ex-dividend date is correct?",
            options: [
                "It is the date the company first becomes publicly traded",
                "It determines whether a buyer qualifies for the upcoming dividend",
                "It is always the date the dividend is paid",
                "It is the date a company reports its annual revenue"
            ],
            answer: 1,
            explanation: "The ex-dividend date determines whether a buyer qualifies for the declared dividend. Generally, an investor must buy before the ex-dividend date to receive it."
        },
        {
            question: "What does DRIP stand for?",
            options: [
                "Dividend Return Investment Plan",
                "Direct Reinvestment Payment",
                "Dividend Reinvestment Plan",
                "Daily Return Income Program"
            ],
            answer: 2,
            explanation: "DRIP stands for Dividend Reinvestment Plan. It allows dividends to be used to purchase additional shares of the investment."
        },
        {
            question: "What is one possible benefit of using a Dividend Reinvestment Plan?",
            options: [
                "It guarantees that a stock will increase in value",
                "It can automatically use dividends to purchase additional shares, including fractional shares",
                "It eliminates all investment risk",
                "It guarantees that a company will continue paying dividends"
            ],
            answer: 1,
            explanation: "A DRIP can automatically reinvest dividends into additional shares. Some plans allow fractional shares, but reinvestment does not guarantee a profit."
        },
        {
            question: "A company reports $12 million in revenue and $9 million in expenses. Using this simplified example, what is its profit?",
            options: [
                "$3 million",
                "$9 million",
                "$12 million",
                "$21 million"
            ],
            answer: 0,
            explanation: "Profit = Revenue − Expenses. Therefore, $12 million − $9 million = $3 million."
        },
        {
            question: "How is basic Earnings Per Share (EPS) generally calculated?",
            options: [
                "Share price ÷ Revenue",
                "Net income ÷ Weighted average common shares outstanding, after preferred dividends where applicable",
                "Total assets × Number of employees",
                "Revenue ÷ Market capitalization"
            ],
            answer: 1,
            explanation: "Basic EPS is generally calculated as (Net Income − Preferred Dividends) ÷ Weighted Average Common Shares Outstanding."
        },
        {
            question: "A company has $18 million in net income available to common shareholders and 6 million weighted average common shares outstanding. What is its basic EPS?",
            options: [
                "$2",
                "$3",
                "$6",
                "$18"
            ],
            answer: 1,
            explanation: "$18 million ÷ 6 million shares = $3 basic EPS."
        },
        {
            question: "What does diluted EPS take into account?",
            options: [
                "Only the company's current share price",
                "Potential additional shares from instruments such as stock options or convertible securities, when applicable",
                "Only the company's dividend payments",
                "The total number of company employees"
            ],
            answer: 1,
            explanation: "Diluted EPS considers potential shares that could be created by instruments such as options or convertible securities when their inclusion is applicable."
        },
        {
            question: "How is the Price-to-Earnings (P/E) ratio calculated?",
            options: [
                "EPS ÷ Share price",
                "Revenue ÷ Expenses",
                "Share price ÷ Earnings Per Share",
                "Market capitalization ÷ Number of employees"
            ],
            answer: 2,
            explanation: "The P/E ratio is calculated by dividing the share price by earnings per share."
        },
        {
            question: "A stock trades at $60 per share and has earnings per share of $3. What is its P/E ratio?",
            options: [
                "10",
                "15",
                "20",
                "30"
            ],
            answer: 2,
            explanation: "$60 ÷ $3 = 20. The stock has a P/E ratio of 20."
        },
        {
            question: "What does a high P/E ratio automatically tell you about a stock?",
            options: [
                "That the stock is definitely overvalued",
                "That the stock is definitely undervalued",
                "Nothing definitive by itself; it needs to be considered in context",
                "That the company is guaranteed to grow"
            ],
            answer: 2,
            explanation: "A high or low P/E ratio does not automatically make a stock good or bad. Investors compare it with growth expectations, industry peers, and other factors."
        },
        {
            question: "Which information is commonly included in a company's earnings report?",
            options: [
                "Revenue, net income, EPS, expenses, and company guidance",
                "Only the company's stock ticker",
                "Only the names of its shareholders",
                "Only the daily opening and closing stock prices"
            ],
            answer: 0,
            explanation: "Earnings reports commonly provide financial information such as revenue, net income, EPS, operating expenses, cash flow, and sometimes future guidance."
        },
        {
            question: "Why might a company's stock price fall even after it reports higher earnings?",
            options: [
                "Stock prices can only rise when earnings increase",
                "Investors may have expected even better results, or the company's future guidance may disappoint",
                "Higher earnings automatically cancel the company's shares",
                "The company must immediately stop trading"
            ],
            answer: 1,
            explanation: "Stock prices respond to expectations as well as reported results. A company can report higher earnings and still disappoint investors if expectations or future guidance were stronger."
        }
    ];

    const shuffle = (items) => {
        const copy = [...items];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    };

    const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

    /* EXAM STYLES */

    const style = document.createElement("style");

    style.textContent = `
        .m2-exam-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: rgba(10, 12, 30, .76);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px;
            overflow-y: auto;
        }

        .m2-exam-modal {
            background: #fff;
            color: #293044;
            width: min(900px, 100%);
            max-height: 94vh;
            overflow-y: auto;
            border-radius: 14px;
            padding: 26px;
            box-shadow: 0 18px 60px rgba(0, 0, 0, .28);
            font-family: Arial, sans-serif;
        }

        .m2-exam-modal h2 {
            margin: 0 0 10px;
            color: #30245f;
        }

        .m2-exam-muted {
            color: #716b82;
        }

        .m2-exam-top {
            display: flex;
            justify-content: space-between;
            gap: 14px;
            align-items: center;
            flex-wrap: wrap;
            border-bottom: 1px solid #e3ddef;
            padding-bottom: 14px;
            margin-bottom: 18px;
        }

        .m2-exam-question {
            border: 1px solid #e3ddef;
            border-radius: 10px;
            padding: 16px;
            margin: 14px 0;
        }

        .m2-exam-question legend {
            font-weight: 700;
            padding: 0 5px;
        }

        .m2-exam-option {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            padding: 9px 10px;
            margin-top: 5px;
            border-radius: 7px;
            cursor: pointer;
        }

        .m2-exam-option:hover {
            background: #f5f2fa;
        }

        .m2-exam-option input {
            margin-top: 4px;
            accent-color: #6551a3;
        }

        .m2-exam-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .m2-exam-btn {
            border: 0;
            border-radius: 8px;
            padding: 11px 17px;
            font-weight: 700;
            cursor: pointer;
            background: #30245f;
            color: #fff;
        }

        .m2-exam-btn:hover {
            background: #6551a3;
        }

        .m2-exam-btn.secondary {
            background: #eeeaf5;
            color: #30245f;
        }

        .m2-exam-btn:disabled {
            opacity: .55;
            cursor: not-allowed;
        }

        .m2-exam-result {
            padding: 18px;
            border-radius: 10px;
            background: #f5f2fa;
            margin: 16px 0;
        }

        .m2-exam-pass {
            color: #167443;
        }

        .m2-exam-fail {
            color: #b42318;
        }

        .m2-exam-review {
            border-top: 1px solid #e3ddef;
            padding: 13px 0;
        }

        .m2-exam-correct {
            color: #167443;
        }

        .m2-exam-wrong {
            color: #b42318;
        }

        .m2-exam-name {
            width: 100%;
            max-width: 420px;
            padding: 11px;
            border: 1px solid #c9c0dc;
            border-radius: 7px;
            font: inherit;
            margin: 8px 0 16px;
        }

        @media(max-width: 600px) {
            .m2-exam-modal {
                padding: 18px;
            }

            .m2-exam-overlay {
                padding: 8px;
            }
        }

        @media print {
            body > *:not(.m2-exam-overlay) {
                display: none !important;
            }

            .m2-exam-overlay {
                position: static;
                background: #fff;
                padding: 0;
                display: block;
            }

            .m2-exam-modal {
                max-height: none;
                overflow: visible;
                box-shadow: none;
                width: 100%;
                padding: 0;
            }

            .m2-exam-actions {
                display: none !important;
            }
        }
    `;

    document.head.appendChild(style);

    let overlay;
    let activeQuestions = [];
    let studentName = "";

    function closeExam() {
        if (overlay) {
            overlay.remove();
            overlay = null;
            document.body.style.overflow = "";
        }

        document.removeEventListener("keydown", handleEscape);
    }

    function createModal() {
        closeExam();

        overlay = document.createElement("div");
        overlay.className = "m2-exam-overlay";

        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-label", "Lesson 2 examination");

        overlay.innerHTML = `
            <div class="m2-exam-modal">

                <div class="m2-exam-top">
                    <div>
                        <h2>Lesson 2 Examination</h2>
                        <p class="m2-exam-muted">
                            Answer all ${questions.length} questions.
                            You need ${PASS_MARK}% to pass.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="m2-exam-btn secondary"
                        data-action="close">
                        Close
                    </button>
                </div>

                <div id="m2-exam-content"></div>

            </div>
        `;

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeExam();
                return;
            }

            const action = event.target.closest("[data-action]")?.dataset.action;

            if (action === "close") closeExam();
            if (action === "submit") submitExam();
            if (action === "retake") startExam();
            if (action === "print") window.print();
        });

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        document.addEventListener("keydown", handleEscape);

        return overlay.querySelector("#m2-exam-content");
    }

    function handleEscape(event) {
        if (event.key === "Escape" && overlay) {
            closeExam();
        }
    }

    /* START EXAMINATION */

    function startExam() {
        const content = createModal();

        activeQuestions = shuffle(questions).map((question) => {
            const shuffledOptions = shuffle(
                question.options.map((text, originalIndex) => ({
                    text,
                    originalIndex
                }))
            );

            return {
                ...question,
                options: shuffledOptions.map((item) => item.text),
                answer: shuffledOptions.findIndex(
                    (item) => item.originalIndex === question.answer
                )
            };
        });

        content.innerHTML = `
            <label for="m2-student-name">
                <strong>Student name</strong>
            </label>

            <br>

            <input
                class="m2-exam-name"
                id="m2-student-name"
                type="text"
                maxlength="100"
                autocomplete="name"
                placeholder="Enter your name"
                required
            >

            <form id="m2-exam-form">

                ${activeQuestions.map((question, index) => `
                    <fieldset class="m2-exam-question">

                        <legend>
                            ${index + 1}. ${escapeHTML(question.question)}
                        </legend>

                        ${question.options.map((option, optionIndex) => `
                            <label class="m2-exam-option">

                                <input
                                    type="radio"
                                    name="question-${index}"
                                    value="${optionIndex}"
                                >

                                <span>${escapeHTML(option)}</span>

                            </label>
                        `).join("")}

                    </fieldset>
                `).join("")}

                <p class="m2-exam-muted">
                    All questions must be answered before you submit.
                </p>

                <div class="m2-exam-actions">

                    <button
                        class="m2-exam-btn"
                        type="button"
                        data-action="submit">
                        Submit Examination
                    </button>

                    <button
                        class="m2-exam-btn secondary"
                        type="button"
                        data-action="close">
                        Close
                    </button>

                </div>

            </form>
        `;

        content.querySelector("#m2-student-name").focus();

        content.querySelector("#m2-exam-form")
            .addEventListener("submit", (event) => {
                event.preventDefault();
            });
    }

    /* SUBMIT AND GRADE EXAMINATION */

    function submitExam() {
        const content = overlay?.querySelector("#m2-exam-content");

        if (!content) return;

        const nameInput = content.querySelector("#m2-student-name");

        studentName = nameInput?.value.trim() || "";

        if (!studentName) {
            nameInput?.focus();
            nameInput?.setCustomValidity("Please enter your name.");
            nameInput?.reportValidity();

            nameInput?.addEventListener("input", () => {
                nameInput.setCustomValidity("");
            }, { once: true });

            return;
        }

        const answers = activeQuestions.map((question, index) => {
            const selected = content.querySelector(
                `input[name="question-${index}"]:checked`
            );

            return selected ? Number(selected.value) : null;
        });

        const unanswered = answers.findIndex((answer) => answer === null);

        if (unanswered !== -1) {
            const firstMissing = content.querySelector(
                `input[name="question-${unanswered}"]`
            );

            firstMissing
                ?.closest(".m2-exam-question")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            firstMissing?.focus({ preventScroll: true });

            return;
        }

        const correct = answers.reduce((total, answer, index) => {
            return total + (
                answer === activeQuestions[index].answer ? 1 : 0
            );
        }, 0);

        const total = activeQuestions.length;
        const percentage = Math.round((correct / total) * 100);
        const passed = percentage >= PASS_MARK;

        const result = {
            studentName,
            correct,
            incorrect: total - correct,
            total,
            percentage,
            passed,
            passMark: PASS_MARK,
            date: new Date().toISOString()
        };

        /* SAVE LESSON 2 RESULT */

        try {
            localStorage.setItem(
                STORAGE_RESULT_KEY,
                JSON.stringify(result)
            );

            if (passed) {
                localStorage.setItem(STORAGE_PASS_KEY, "true");
            } else {
                localStorage.removeItem(STORAGE_PASS_KEY);
            }

        } catch (error) {
            console.warn(
                "The exam result could not be saved in this browser.",
                error
            );
        }

        /* DISPLAY RESULTS */

        content.innerHTML = `
            <h2>Examination Results</h2>

            <p>
                <strong>Student:</strong>
                ${escapeHTML(studentName)}
            </p>

            <div class="m2-exam-result">

                <h2 class="${passed ? "m2-exam-pass" : "m2-exam-fail"}">
                    ${passed
                        ? "Congratulations — You Passed!"
                        : "You Did Not Pass This Time"}
                </h2>

                <p>
                    <strong>Score:</strong>
                    ${correct} out of ${total}
                </p>

                <p>
                    <strong>Percentage:</strong>
                    ${percentage}%
                </p>

                <p>
                    <strong>Required to pass:</strong>
                    ${PASS_MARK}%
                </p>

                <p>
                    <strong>Result:</strong>
                    ${passed ? "PASS" : "FAIL"}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${new Date(result.date).toLocaleString()}
                </p>

            </div>

            <h3>Answer Review</h3>

            ${activeQuestions.map((question, index) => {
                const isCorrect = answers[index] === question.answer;

                return `
                    <div class="m2-exam-review">

                        <p>
                            <strong>
                                ${index + 1}. ${escapeHTML(question.question)}
                            </strong>
                        </p>

                        <p class="${
                            isCorrect
                                ? "m2-exam-correct"
                                : "m2-exam-wrong"
                        }">
                            ${isCorrect ? "Correct" : "Incorrect"}
                            — Your answer:
                            ${escapeHTML(question.options[answers[index]])}
                        </p>

                        ${!isCorrect ? `
                            <p>
                                <strong>Correct answer:</strong>
                                ${escapeHTML(question.options[question.answer])}
                            </p>
                        ` : ""}

                        <p class="m2-exam-muted">
                            ${escapeHTML(question.explanation)}
                        </p>

                    </div>
                `;
            }).join("")}

            <div class="m2-exam-actions">

                <button
                    class="m2-exam-btn"
                    type="button"
                    data-action="print">
                    Print / Save Result
                </button>

                <button
                    class="m2-exam-btn secondary"
                    type="button"
                    data-action="retake">
                    Retake Examination
                </button>

                <button
                    class="m2-exam-btn secondary"
                    type="button"
                    data-action="close">
                    Close
                </button>

            </div>

            <p class="m2-exam-muted">
                This result is calculated in your browser.
                It is not automatically sent to an instructor.
            </p>
        `;

        content.scrollTop = 0;

        overlay.querySelector(".m2-exam-modal").scrollTop = 0;
    }

    /* CONNECT START BUTTON */

    document.addEventListener("DOMContentLoaded", () => {
        const scrollToTopButton = document.getElementById("scroll-to-top");

        if (scrollToTopButton) {
            const updateScrollToTopButton = () => {
                scrollToTopButton.hidden = window.scrollY < 300;
            };

            window.addEventListener("scroll", updateScrollToTopButton, {
                passive: true
            });
            updateScrollToTopButton();

            scrollToTopButton.addEventListener("click", () => {
                const prefersReducedMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;

                window.scrollTo({
                    top: 0,
                    behavior: prefersReducedMotion ? "auto" : "smooth"
                });
            });
        }

        const startButton = document.getElementById(
            "start-lesson-2-test"
        );

        if (startButton) {
            startButton.addEventListener("click", startExam);
        } else {
            console.warn(
                "Lesson 2 exam button was not found. Check the button ID."
            );
        }
    });

})();
