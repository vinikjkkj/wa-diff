__d(
  "WAWebEventDateBlock.react",
  ["fbt", "WAWeb-moment", "WAWebText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        dateBlockText: { color: "xo1mcw5", fontWeight: "x1s688f", $$css: !0 },
        datePassed: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.eventStartTime,
        a = e.passed,
        i = a === void 0 ? !1 : a,
        l,
        d;
      if (t[0] !== n) {
        var m = r("WAWeb-moment").unix(n);
        ((l = m.format("MMM")),
          (d = m.format("D")),
          (t[0] = n),
          (t[1] = l),
          (t[2] = d));
      } else ((l = t[1]), (d = t[2]));
      var p = d,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x14qfxbe xc9qbxq x1lliihq xtvhhri x1mzt3pk" }),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      return (
        t[4] !== p || t[5] !== l || t[6] !== i
          ? ((f = u.jsx(
              "div",
              babelHelpers.extends({}, _, {
                children: s._(/*BTDS*/ "{=m0}{=m1}", [
                  s._implicitParam(
                    "=m0",
                    u.jsx(o("WAWebText.react").WAWebTextSmall, {
                      xstyle: [c.dateBlockText, i && c.datePassed],
                      color: i ? "secondaryLighter" : "teal",
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
                        }[!!i << 0],
                        {
                          children: s._(/*BTDS*/ "{day}", [s._param("day", p)]),
                        },
                      ),
                    ),
                  ),
                ]),
              }),
            )),
            (t[4] = p),
            (t[5] = l),
            (t[6] = i),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    l.default = d;
  },
  226,
);
