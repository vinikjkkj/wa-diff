__d(
  "WAWebPollEndTimeLabel",
  [
    "fbt",
    "WAWebClock",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WDSIconIcScheduleFilled.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          width: "xn6xy2s",
          $$css: !0,
        },
        label: {
          fontSize: "x1pg5gke",
          lineHeight: "x1d3mw78",
          color: "x1bvqhpb",
          $$css: !0,
        },
        almostEnded: { color: "x30a034", $$css: !0 },
      },
      m = 1e3,
      p = 3600,
      _ = 24 * p;
    function f(e) {
      if (e < p) return s._(/*BTDS*/ "Ends in less than 1h");
      if (e < _) {
        var t = Math.floor(e / p);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", t)]);
      }
      var n = Math.floor(e / _);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(n), s._param("days", n)],
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.isPollEnded,
        a = t.isSingleOptionPoll,
        i = t.pollEndTime,
        l = i - o("WAWebClock").Clock.getServerTimeMs(),
        u = Math.max(0, Math.ceil(l / m)),
        _ = u < p && !n;
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: o("WAWebUISpacing").uiPadding.all4,
        testid: void 0,
        children: [
          c.jsx(r("WDSIconIcScheduleFilled.react"), {
            width: 12,
            height: 12,
            xstyle: a ? void 0 : d.iconContainer,
            colorName: _ ? "secondaryNegative" : "contentDeemphasized",
          }),
          c.jsx(
            "span",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.label,
                _ && d.almostEnded,
                o("WAWebUISpacing").uiPadding.start5,
              ),
              { children: n ? s._(/*BTDS*/ "Poll ended") : f(u) },
            ),
          ),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
