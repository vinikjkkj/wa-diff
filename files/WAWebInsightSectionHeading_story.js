__d(
  "WAWebInsightSectionHeading.story",
  ["WAWebInsightSectionHeading.react", "WAWebShowroomStory.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebInsightSectionHeading",
        section: o("WAWebShowroomStory.react").StorySectionType.ATOM,
        component: r("WAWebInsightSectionHeading.react"),
        description:
          "Component designed to display heading and an info icon which can be clicked for more info",
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebInsightSectionHeading.react"), {
                title: "Top countries",
                onIconClick: function () {
                  return alert("info clicked");
                },
              });
            },
            title: "InsightSectionHeading with info icon",
            description:
              "Component showing heading and info icon which is clickable",
          },
          {
            example: function () {
              return s.jsx(r("WAWebInsightSectionHeading.react"), {
                title: "Top countries",
              });
            },
            title: "InsightSectionHeading with no info icon",
            description:
              "Component showing title only because onclick is not defined",
          },
        ],
      };
    l.default = u;
  },
  98,
);
