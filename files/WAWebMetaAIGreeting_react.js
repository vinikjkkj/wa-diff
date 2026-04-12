__d(
  "WAWebMetaAIGreeting.react",
  [
    "fbt",
    "WAWebConnModel",
    "WAWebMetaAIGreetingUtils",
    "WDSText.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e,
        t = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        n = t.pushname,
        a = (e = n == null ? void 0 : n.split(" ")[0]) != null ? e : "",
        i = o("WAWebMetaAIGreetingUtils").getTimeOfDayGreeting(),
        l = o("WAWebMetaAIGreetingUtils").getRandomHeading();
      return u.jsxs("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 x129bwdz x1trrmfo",
        children: [
          u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body1",
            children:
              a !== ""
                ? s._(/*BTDS*/ "{greeting}, {userName}", [
                    s._param("greeting", i),
                    s._param("userName", a),
                  ])
                : s._(/*BTDS*/ "{greeting}", [s._param("greeting", i)]),
          }),
          u.jsx("span", {
            className: "xddofbv",
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              type: "Headline1",
              children: l,
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
