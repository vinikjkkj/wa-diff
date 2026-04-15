__d(
  "WAWebNewsletterDrawerBodyParagraph.react",
  [
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        row: { display: "x78zum5", width: "xh8yej3", $$css: !0 },
        paragraph: { flexGrow: "x1iyjqo2", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.description,
        i = t.icon,
        l = t.title,
        s,
        d;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e || (e = r("stylex"))).props([
            c.row,
            o("WAWebUISpacing").uiMargin.vert15,
          ])),
          (d = { className: "xvy4d1p xxk0z11" }),
          (n[0] = s),
          (n[1] = d))
        : ((s = n[0]), (d = n[1]));
      var m;
      n[2] !== i
        ? ((m = u.jsx("div", babelHelpers.extends({}, d, { children: i }))),
          (n[2] = i),
          (n[3] = m))
        : (m = n[3]);
      var p;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e || (e = r("stylex"))).props([
            c.paragraph,
            o("WAWebUISpacing").uiMargin.horiz16,
          ])),
          (n[4] = p))
        : (p = n[4]);
      var _;
      n[5] !== l
        ? ((_ = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "p",
            weight: "normal",
            color: "primary",
            children: l,
          })),
          (n[5] = l),
          (n[6] = _))
        : (_ = n[6]);
      var f;
      n[7] !== a
        ? ((f = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            as: "p",
            xstyle: o("WAWebUISpacing").uiMargin.top8,
            children: a,
          })),
          (n[7] = a),
          (n[8] = f))
        : (f = n[8]);
      var g;
      n[9] !== _ || n[10] !== f
        ? ((g = u.jsxs(
            "div",
            babelHelpers.extends({}, p, { children: [_, f] }),
          )),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g))
        : (g = n[11]);
      var h;
      return (
        n[12] !== m || n[13] !== g
          ? ((h = u.jsxs(
              "div",
              babelHelpers.extends({}, s, { children: [m, g] }),
            )),
            (n[12] = m),
            (n[13] = g),
            (n[14] = h))
          : (h = n[14]),
        h
      );
    }
    l.default = d;
  },
  98,
);
