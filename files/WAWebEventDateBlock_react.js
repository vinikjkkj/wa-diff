__d(
  "WAWebEventDateBlock.react",
  ["fbt", "WAWeb-moment", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        dateBlockText: { color: "xo1mcw5", fontWeight: "x1s688f", $$css: !0 },
        datePassed: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = e.eventStartTime,
        n = e.passed,
        a = n === void 0 ? !1 : n,
        i = r("WAWeb-moment").unix(t),
        l = i.format("MMM"),
        d = i.format("D");
      return u.jsx("div", {
        className: "x14qfxbe xc9qbxq x1lliihq xtvhhri x1mzt3pk",
        children: s._(/*BTDS*/ "{=m0}{=m1}", [
          s._implicitParam(
            "=m0",
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              xstyle: [c.dateBlockText, a && c.datePassed],
              color: a ? "secondaryLighter" : "teal",
              children: s._(/*BTDS*/ "{month}", [s._param("month", l)]),
            }),
          ),
          s._implicitParam(
            "=m1",
            u.jsx(
              "span",
              babelHelpers.extends(
                {},
                {
                  0: { className: "xo1mcw5 x1s688f" },
                  1: { className: "x1s688f xhslqc4" },
                }[!!a << 0],
                { children: s._(/*BTDS*/ "{day}", [s._param("day", d)]) },
              ),
            ),
          ),
        ]),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
