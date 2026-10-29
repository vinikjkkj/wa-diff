__d(
  "WAWebGlanceInsight.story",
  [
    "WAWebCheckBox.react",
    "WAWebFlex.react",
    "WAWebGlanceInsight.react",
    "WAWebNoop",
    "WAWebShowroomStory.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        background: { backgroundColor: "x1280gxy", $$css: !0 },
        smallSize: { width: "x1exxlbk", height: "x1gnnpzl", $$css: !0 },
        newsletterInsight: { width: "x1f2tiqu", height: "xsdox4t", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.insight,
        a = e.label,
        i = e.onClick,
        l = e.xstyle,
        d = u(!1),
        m = d[0],
        p = d[1],
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsx("label", {
            htmlFor: "loading-checkbox",
            style: { marginRight: 8 },
            children: "Loading:",
          })),
          (t[0] = _))
        : (_ = t[0]);
      var f;
      t[1] !== m
        ? ((f = function () {
            return p(!m);
          }),
          (t[1] = m),
          (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] !== m || t[4] !== f
        ? ((g = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              _,
              s.jsx(o("WAWebCheckBox.react").CheckBox, {
                id: "loading-checkbox",
                checked: m,
                onChange: f,
              }),
            ],
          })),
          (t[3] = m),
          (t[4] = f),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== l
        ? ((h = [c.background, l]), (t[6] = l), (t[7] = h))
        : (h = t[7]);
      var y = i != null ? i : r("WAWebNoop"),
        C;
      t[8] !== n || t[9] !== a || t[10] !== m || t[11] !== h || t[12] !== y
        ? ((C = s.jsx(r("WAWebGlanceInsight.react"), {
            xstyle: h,
            label: a,
            insight: n,
            loading: m,
            onClick: y,
          })),
          (t[8] = n),
          (t[9] = a),
          (t[10] = m),
          (t[11] = h),
          (t[12] = y),
          (t[13] = C))
        : (C = t[13]);
      var b;
      return (
        t[14] !== g || t[15] !== C
          ? ((b = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 4,
              children: [g, C],
            })),
            (t[14] = g),
            (t[15] = C),
            (t[16] = b))
          : (b = t[16]),
        b
      );
    }
    var m = {
      storyName: "WAWebGlanceInsight",
      section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
      component: r("WAWebGlanceInsight.react"),
      description:
        "Component designed to display delta value percentage, showing visualcolour indication of positive/negative/neutral change",
      examples: [
        {
          example: function () {
            return s.jsx(d, {
              label: "Accounts Reached",
              insight: { value: 57e5, delta: 0.087 },
              xstyle: c.newsletterInsight,
            });
          },
          title: "Positive Insight",
          description: "Typical positive newsletter glance insight",
        },
        {
          example: function () {
            return s.jsx(d, {
              label: "Accounts Reached",
              insight: { value: 57e5, delta: -0.087 },
              xstyle: c.newsletterInsight,
            });
          },
          title: "Negative Insight",
          description: "Typical negative newsletter glance insight",
        },
        {
          example: function () {
            return s.jsx(d, {
              label: "Accounts Reached",
              insight: { value: 57e5, delta: 0 },
              xstyle: c.newsletterInsight,
            });
          },
          title: "Neutral Insight",
          description: "Typical newsletter glance insight with 0 delta",
        },
        {
          example: function () {
            return s.jsx(d, {
              label: "Accounts Reached",
              insight: { value: 57e5 },
              xstyle: c.newsletterInsight,
            });
          },
          title: "No Delta Insight",
          description: "Typical newsletter glance insight without a delta",
        },
        {
          example: function () {
            return s.jsx(d, {
              label: "Accounts Reached",
              insight: { value: 57e5 },
              xstyle: c.newsletterInsight,
              onClick: function () {
                alert("Clicked on insight");
              },
            });
          },
          title: "Clickable insight",
          description: "Typical newsletter glance which can be clicked on",
        },
        {
          example: function () {
            return s.jsx(d, {
              label: "Accounts Reached",
              insight: null,
              xstyle: c.newsletterInsight,
              onClick: function () {
                alert("Clicked on insight");
              },
            });
          },
          title: "Blank insight",
          description: "Typical newsletter glance with null insight value",
        },
        {
          example: function () {
            return s.jsx(d, {
              label:
                "A very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very large value",
              insight: { value: 57e5 },
              xstyle: c.smallSize,
            });
          },
          title: "Long text",
          description: "Glance insight with large text that gets hidden",
        },
      ],
    };
    l.default = m;
  },
  98,
);
