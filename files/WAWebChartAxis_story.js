__d(
  "WAWebChartAxis.story",
  [
    "ReactKonva",
    "WAWebChartAxis.react",
    "WAWebChartKonvaHarness.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function () {},
      c = {
        storyName: "WAWebChartAxis",
        component: r("WAWebChartAxis.react"),
        description: "Draws a bidimensional cartesian axis.",
        descriptionNode: s.jsx("div", {}),
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebChartKonvaHarness.react"), {
                side: 300,
                children: s.jsx(o("ReactKonva").Group, {
                  x: 50,
                  y: 50,
                  children: s.jsx(r("WAWebChartAxis.react"), {
                    onYTicksRendered: u,
                    xTicksCount: 3,
                    chartHeight: 200,
                    chartWidth: 200,
                    formatXLabel: function (t) {
                      return t.toString();
                    },
                    formatYLabel: function (t) {
                      return t.toString();
                    },
                    tX: function (t) {
                      return t;
                    },
                    tY: function (t) {
                      return 200 - t;
                    },
                    xDomain: [0, 200],
                    yDomain: [0, 200],
                  }),
                }),
              });
            },
            title: "Axis",
          },
        ],
      };
    l.default = c;
  },
  98,
);
