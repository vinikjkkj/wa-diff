__d(
  "WAWebMetaAIGreeting.react",
  [
    "fbt",
    "WAWebConnModel",
    "WAWebMetaAIGreetingUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(11),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = ["pushname"]), (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          t,
        ),
        a = n.pushname,
        i;
      if (e[1] !== a) {
        var l;
        ((i = (l = a == null ? void 0 : a.split(" ")[0]) != null ? l : ""),
          (e[1] = a),
          (e[2] = i));
      } else i = e[2];
      var c = i,
        d;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebMetaAIGreetingUtils").getTimeOfDayGreeting()),
          (e[3] = d))
        : (d = e[3]);
      var m = d,
        p;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WAWebMetaAIGreetingUtils").getRandomHeading()), (e[4] = p))
        : (p = e[4]);
      var _ = p,
        f;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x78zum5 xdt5ytf x6s0dn4 x129bwdz x1trrmfo" }),
          (e[5] = f))
        : (f = e[5]);
      var g;
      e[6] !== c
        ? ((g = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body1",
            children:
              c !== ""
                ? s._(/*BTDS*/ "{greeting}, {userName}", [
                    s._param("greeting", m),
                    s._param("userName", c),
                  ])
                : s._(/*BTDS*/ "{greeting}", [s._param("greeting", m)]),
          })),
          (e[6] = c),
          (e[7] = g))
        : (g = e[7]);
      var h;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx("span", {
            className: "xddofbv",
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              type: "Headline1",
              children: _,
            }),
          })),
          (e[8] = h))
        : (h = e[8]);
      var y;
      return (
        e[9] !== g
          ? ((y = u.jsxs(
              "div",
              babelHelpers.extends({}, f, { children: [g, h] }),
            )),
            (e[9] = g),
            (e[10] = y))
          : (y = e[10]),
        y
      );
    }
    l.default = c;
  },
  226,
);
