__d(
  "WAWebGdprRequestAccountInfoSettingsFooterNotice",
  [
    "fbt",
    "WAWebNewsletterCommonGatingUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { availability: { marginBottom: "x1e56ztr", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.daysDelta,
        a = e.isPending,
        i = e.newsletterBodyText,
        l = n === void 0 ? 3 : n,
        d = l < 1 ? 1 : l,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(
            /*BTDS*/ "Your request will be canceled if you make changes to your account such as changing your number or deleting your account.",
          )),
          (t[0] = m))
        : (m = t[0]);
      var p = m;
      if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
        var _;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = { className: "x162tt16 x5zjp28 x109j2v6" }), (t[1] = _))
          : (_ = t[1]);
        var f;
        return (
          t[2] !== a || t[3] !== i
            ? ((f = u.jsx(
                "div",
                babelHelpers.extends({}, _, {
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: a ? p : u.jsx(u.Fragment, { children: i }),
                  }),
                }),
              )),
              (t[2] = a),
              (t[3] = i),
              (t[4] = f))
            : (f = t[4]),
          f
        );
      }
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x162tt16 x5zjp28 x9orja2" }), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== d
        ? ((h = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            xstyle: c.availability,
            children: s._(
              /*BTDS*/ '_j{"*":"Your report will be ready in about {number} days. You\'ll have a few weeks to download your report after it\'s available.","_1":"Your report will be ready in about 1 day. You\'ll have a few weeks to download your report after it\'s available."}',
              [s._plural(d, "number", d)],
            ),
          })),
          (t[6] = d),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: p,
          })),
          (t[8] = y))
        : (y = t[8]);
      var C;
      return (
        t[9] !== h
          ? ((C = u.jsxs(
              "div",
              babelHelpers.extends({}, g, { children: [h, y] }),
            )),
            (t[9] = h),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    l.default = d;
  },
  226,
);
