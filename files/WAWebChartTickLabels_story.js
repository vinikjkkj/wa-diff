__d(
  "WAWebChartTickLabels.story",
  ["WAWebChartKonvaHarness.react", "WAWebChartTickLabels", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebChartTickLabels",
        component: o("WAWebChartTickLabels").XTickLabel,
        description:
          "XTickLabel and YTickLabel display and position the label for an x or y axis tick respectively.",
        descriptionNode: s.jsx("div", {}),
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebChartKonvaHarness.react"), {
                children: s.jsx(o("WAWebChartTickLabels").XTickLabel, {
                  position: "middle",
                  text: "hello",
                  x: 50,
                  y: 50,
                }),
              });
            },
            title: "XTickLabel - middle",
          },
          {
            example: function () {
              return s.jsx(r("WAWebChartKonvaHarness.react"), {
                children: s.jsx(o("WAWebChartTickLabels").XTickLabel, {
                  position: "start",
                  text: "hello",
                  x: 50,
                  y: 50,
                }),
              });
            },
            title: "XTickLabel - start",
          },
          {
            example: function () {
              return s.jsx(r("WAWebChartKonvaHarness.react"), {
                children: s.jsx(o("WAWebChartTickLabels").XTickLabel, {
                  position: "end",
                  text: "hello",
                  x: 50,
                  y: 50,
                }),
              });
            },
            title: "XTickLabel - end",
          },
          {
            example: function () {
              return s.jsx(r("WAWebChartKonvaHarness.react"), {
                children: s.jsx(o("WAWebChartTickLabels").YTickLabel, {
                  text: "hello",
                  x: 50,
                  y: 50,
                  margin: 10,
                }),
              });
            },
            title: "YTickLabel",
          },
        ],
      };
    l.default = u;
  },
  98,
);
