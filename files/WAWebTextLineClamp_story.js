__d(
  "WAWebTextLineClamp.story",
  ["WAWebTextLineClamp.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebTextLineClamp",
        component: r("WAWebTextLineClamp.react"),
        description:
          "Component does line clamping (truncating multiple line text).",
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebTextLineClamp.react"), {
                maxLines: 1,
                children: "Short text",
              });
            },
            title: "Short text, 1 line",
            description: "Short text taking 1 line.",
          },
          {
            example: function () {
              return s.jsx(r("WAWebTextLineClamp.react"), {
                maxLines: 2,
                children:
                  "Please share your arrival time the evening before so we can sort out the carpools for Saturday.",
              });
            },
            title: "Medium text, 2 lines max",
            description: "Medium length text taking no more than 2 lines.",
          },
          {
            example: function () {
              return s.jsx(r("WAWebTextLineClamp.react"), {
                maxLines: 1,
                children:
                  "Welcome to the weekend hiking group. Please share your arrival time the evening before so we can sort out the carpools, and remember to bring water, a waterproof layer and something warm for the summit.",
              });
            },
            title: "Long text, 1 line max",
            description: "Long text truncated with an ellipsis after 1 line.",
          },
          {
            example: function () {
              return s.jsx("div", {
                style: { textAlign: "center" },
                children: s.jsx(r("WAWebTextLineClamp.react"), {
                  maxLines: 3,
                  children:
                    "Welcome to the weekend hiking group. Please share your arrival time the evening before so we can sort out the carpools, and remember to bring water, a waterproof layer and something warm for the summit. We meet at the north car park and set off together at nine, so check the pinned message for the latest route and parking details before you leave the house.",
                }),
              });
            },
            title: "Long text, 3 lines max, centered.",
            description:
              "Long length text taking no more than 3 lines. Center text alignment style is applied to the upper container.",
          },
        ],
      };
    l.default = u;
  },
  98,
);
