__d(
  "WAWebMetaAILandingConstants",
  [
    "fbt",
    "WDSIconIcHelp.react",
    "WDSIconIcSchool.react",
    "WDSIconWdsIcPencilAi.react",
    "WDSIconWdsIcPhotoAi.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
      {
        id: "learn",
        label: function () {
          return s._(/*BTDS*/ "Learn");
        },
        Icon: r("WDSIconIcSchool.react"),
        placeholder: function () {
          return s._(/*BTDS*/ "What do you want to learn?");
        },
        promptPool: [
          s._(/*BTDS*/ "Explain quantum computing in simple terms"),
          s._(/*BTDS*/ "Outline the key events of the Renaissance"),
          s._(/*BTDS*/ "Explain how photosynthesis works"),
          s._(/*BTDS*/ "Teach me about the solar system"),
          s._(/*BTDS*/ "Describe what causes the northern lights"),
          s._(/*BTDS*/ "Explain how vaccines work in the body"),
          s._(/*BTDS*/ "Explain the theory of relativity simply"),
          s._(/*BTDS*/ "Define blockchain and explain how it works"),
          s._(/*BTDS*/ "Describe how black holes form"),
          s._(/*BTDS*/ "Explain what started World War I"),
          s._(/*BTDS*/ "Summarize how the stock market works"),
          s._(/*BTDS*/ "Explain how airplanes stay in the air"),
          s._(/*BTDS*/ "Explain what DNA is and why it matters"),
          s._(/*BTDS*/ "Describe how earthquakes happen"),
          s._(/*BTDS*/ "Teach me about ancient Egyptian civilization"),
          s._(/*BTDS*/ "Define artificial intelligence and its key concepts"),
          s._(/*BTDS*/ "Explain how the internet actually works"),
          s._(/*BTDS*/ "Categorize the different types of clouds"),
          s._(/*BTDS*/ "Describe how bees make honey"),
          s._(/*BTDS*/ "Explain the water cycle step by step"),
        ],
        pinnedPrompts: [
          {
            display: function () {
              return s._(/*BTDS*/ "Help me with a school assignment");
            },
            query:
              "I need help with a school assignment. Before we begin, ask me to provide the specific details of the assignment. Once I provide those, ask me any clarifying questions you need to understand my current progress and where I might be stuck. Act as a tutor and guide me through the process of completing it step-by-step.",
          },
        ],
      },
      {
        id: "write",
        label: function () {
          return s._(/*BTDS*/ "Write");
        },
        Icon: r("WDSIconWdsIcPencilAi.react"),
        placeholder: function () {
          return s._(/*BTDS*/ "What do you want to write?");
        },
        promptPool: [
          s._(/*BTDS*/ "Help me write a professional email"),
          s._(/*BTDS*/ "Draft a birthday message for a friend"),
          s._(/*BTDS*/ "Write a short story about adventure"),
          s._(/*BTDS*/ "Create a poem about nature"),
          s._(/*BTDS*/ "Write a thank-you note to a coworker"),
          s._(/*BTDS*/ "Help me draft a cover letter"),
          s._(/*BTDS*/ "Write a wedding toast for my best friend"),
          s._(/*BTDS*/ "Draft an apology message to a friend"),
          s._(/*BTDS*/ "Write a product review for a great restaurant"),
          s._(/*BTDS*/ "Help me write a resignation letter"),
          s._(/*BTDS*/ "Create a bedtime story for a 5-year-old"),
          s._(/*BTDS*/ "Write a motivational speech for a team"),
          s._(/*BTDS*/ "Draft a message to a landlord about repairs"),
          s._(/*BTDS*/ "Write a caption for a travel photo"),
          s._(/*BTDS*/ "Help me write a bio for my social profile"),
          s._(/*BTDS*/ "Draft an invitation for a housewarming party"),
          s._(/*BTDS*/ "Write a letter of recommendation"),
          s._(/*BTDS*/ "Create a funny limerick about Mondays"),
          s._(/*BTDS*/ "Help me write a complaint to customer service"),
          s._(/*BTDS*/ "Draft a message to reconnect with an old friend"),
        ],
      },
      {
        id: "create-image",
        label: function () {
          return s._(/*BTDS*/ "Create image");
        },
        Icon: r("WDSIconWdsIcPhotoAi.react"),
        placeholder: function () {
          return s._(/*BTDS*/ "Describe your image");
        },
        promptPool: [
          s._(/*BTDS*/ "Paint a sunset over a calm ocean with vibrant colors"),
          s._(/*BTDS*/ "Design a cozy cabin in a snowy forest"),
          s._(/*BTDS*/ "Draw a futuristic cityscape at night"),
          s._(/*BTDS*/ "Sketch a cute cat wearing a tiny hat"),
          s._(/*BTDS*/ "Illustrate a magical library with floating books"),
          s._(/*BTDS*/ "Create a dragon flying over a medieval castle"),
          s._(/*BTDS*/ "Paint a field of sunflowers under a blue sky"),
          s._(/*BTDS*/ "Draw an astronaut relaxing on the moon"),
          s._(/*BTDS*/ "Illustrate a tropical island with crystal clear water"),
          s._(/*BTDS*/ "Sketch a fox in an autumn forest with falling leaves"),
          s._(
            /*BTDS*/ "Create a rainy street in Tokyo at night with neon lights",
          ),
          s._(/*BTDS*/ "Design a treehouse in a giant redwood tree"),
          s._(/*BTDS*/ "Draw a polar bear cub playing in the snow"),
          s._(/*BTDS*/ "Illustrate an underwater city with coral buildings"),
          s._(/*BTDS*/ "Paint a mountain lake reflecting the stars"),
          s._(/*BTDS*/ "Sketch a vintage car on a desert highway at sunset"),
          s._(/*BTDS*/ "Design a cozy coffee shop on a rainy day"),
          s._(/*BTDS*/ "Make a wolf howling at a full moon"),
          s._(/*BTDS*/ "Create a garden of bioluminescent flowers at night"),
          s._(/*BTDS*/ "Draw a puppy sitting in a field of wildflowers"),
        ],
        pinnedPrompts: [
          {
            display: function () {
              return s._(/*BTDS*/ "Create a birthday card");
            },
            query:
              'Create an image of two adorable tiny white mice wearing little party hats standing around a beautiful white layered cake celebrating a birthday. A sign above them says "HAPPY BIRTHDAY". There are lit candles on the cake and confetti is falling around the happy little mice.',
          },
        ],
      },
      {
        id: "get-advice",
        label: function () {
          return s._(/*BTDS*/ "Get advice");
        },
        Icon: r("WDSIconIcHelp.react"),
        placeholder: function () {
          return s._(/*BTDS*/ "What do you need advice on?");
        },
        promptPool: [
          s._(/*BTDS*/ "Outline strategies to improve my productivity"),
          s._(/*BTDS*/ "Formulate a healthy morning routine for me"),
          s._(/*BTDS*/ "Draft a plan for learning a new language"),
          s._(
            /*BTDS*/ "Brainstorm ways to stay motivated when working from home",
          ),
          s._(/*BTDS*/ "Outline techniques to manage stress during busy weeks"),
          s._(/*BTDS*/ "Formulate a plan for saving money on a tight budget"),
          s._(/*BTDS*/ "Brainstorm ways to make new friends as an adult"),
          s._(/*BTDS*/ "Draft a plan for starting a regular exercise habit"),
          s._(/*BTDS*/ "Outline steps to improve my public speaking skills"),
          s._(/*BTDS*/ "Explain how to get better sleep at night"),
          s._(/*BTDS*/ "Formulate strategies to stay focused while studying"),
          s._(/*BTDS*/ "Draft talking points for negotiating a salary raise"),
          s._(
            /*BTDS*/ "Evaluate my approach to work-life balance and suggest improvements",
          ),
          s._(/*BTDS*/ "Outline a plan to reduce my screen time"),
          s._(/*BTDS*/ "Explain how to start meditating as a beginner"),
          s._(/*BTDS*/ "Analyze why I procrastinate and suggest solutions"),
          s._(/*BTDS*/ "Brainstorm healthy meal ideas on a budget"),
          s._(/*BTDS*/ "Formulate a time management strategy for me"),
          s._(/*BTDS*/ "Draft a confidence-building plan for a job interview"),
          s._(
            /*BTDS*/ "Outline a framework for setting and achieving personal goals",
          ),
        ],
        pinnedPrompts: [
          {
            display: function () {
              return s._(
                /*BTDS*/ "Help me prepare for a difficult conversation",
              );
            },
            query:
              "I need to prepare for a difficult conversation. Ask me for the specific context: who I am speaking with, the core issue, and my ideal outcome. Once I share those details, ask clarifying questions about my concerns or the emotional stakes involved. Act as a communication coach: guide me in drafting clear, constructive talking points, and offer to roleplay the conversation so I can practice.",
          },
        ],
      },
    ];
    l.CATEGORIES = e;
  },
  226,
);
