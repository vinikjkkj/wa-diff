__d(
  "WAWebRollerCounter.story",
  [
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebRollerCounter.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = u(1),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (t) {
            a(function (e) {
              return e + t;
            });
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i,
        c;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: function () {
              return l(1);
            },
            children: "Plus",
          })),
          (e[1] = c))
        : (c = e[1]);
      var d;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: function () {
              return l(-1);
            },
            children: "Minus",
          })),
          (e[2] = d))
        : (d = e[2]);
      var m;
      return (
        e[3] !== n
          ? ((m = s.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              children: [
                c,
                " ",
                d,
                s.jsx(r("WAWebRollerCounter.react"), {
                  counter: n,
                  shouldAnimate: !0,
                }),
              ],
            })),
            (e[3] = n),
            (e[4] = m))
          : (m = e[4]),
        m
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(6),
        t = u(1),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (t) {
            a(function (e) {
              return e + t;
            });
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i,
        c;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: function () {
              return l(1);
            },
            children: "Plus",
          })),
          (e[1] = c))
        : (c = e[1]);
      var d;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: function () {
              return l(-1);
            },
            children: "Minus",
          })),
          (e[2] = d))
        : (d = e[2]);
      var m;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { showAggregateMax: !0, showOneToTwoAnimation: !0 }),
          (e[3] = m))
        : (m = e[3]);
      var p;
      return (
        e[4] !== n
          ? ((p = s.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              children: [
                c,
                " ",
                d,
                s.jsx(r("WAWebRollerCounter.react"), {
                  counter: n,
                  shouldAnimate: !0,
                  rollerCounterOptions: m,
                }),
              ],
            })),
            (e[4] = n),
            (e[5] = p))
          : (p = e[5]),
        p
      );
    }
    var m = {
      storyName: "WAWebRollerCounter",
      component: r("WAWebRollerCounter.react"),
      description: "Counter with animation",
      examples: [
        {
          example: function () {
            return s.jsx(c, {});
          },
          title: "Counter that rolls to change number",
          description: "Counter that displays count change with roll animation",
        },
        {
          example: function () {
            return s.jsx(d, {});
          },
          title: "Counter that rolls to change number but with options enabled",
          description:
            "Counter that displays count change with roll animation with options, this are as per reations spec",
        },
      ],
    };
    l.default = m;
  },
  98,
);
