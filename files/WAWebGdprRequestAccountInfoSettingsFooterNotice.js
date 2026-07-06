__d(
  "WAWebGdprRequestAccountInfoSettingsFooterNotice",
  [
    "fbt",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebText.react",
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
        r = e.isPending,
        a = e.newsletterBodyText,
        i = n === void 0 ? 3 : n,
        l = i < 1 ? 1 : i,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(
            /*BTDS*/ "Your request will be canceled if you make changes to your account such as changing your number or deleting your account.",
          )),
          (t[0] = d))
        : (d = t[0]);
      var m = d;
      if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
        var p;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { className: "x162tt16 x5zjp28 x109j2v6" }), (t[1] = p))
          : (p = t[1]);
        var _;
        return (
          t[2] !== r || t[3] !== a
            ? ((_ = u.jsx(
                "div",
                babelHelpers.extends({}, p, {
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: r ? m : u.jsx(u.Fragment, { children: a }),
                  }),
                }),
              )),
              (t[2] = r),
              (t[3] = a),
              (t[4] = _))
            : (_ = t[4]),
          _
        );
      }
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x162tt16 x5zjp28 x9orja2" }), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== l
        ? ((g = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: c.availability,
            children: s._(
              /*BTDS*/ '_j{"*":"Your report will be ready in about {number} days. You\'ll have a few weeks to download your report after it\'s available.","_1":"Your report will be ready in about 1 day. You\'ll have a few weeks to download your report after it\'s available."}',
              [s._plural(l, "number", l)],
            ),
          })),
          (t[6] = l),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: m })),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== g
          ? ((y = u.jsxs(
              "div",
              babelHelpers.extends({}, f, { children: [g, h] }),
            )),
            (t[9] = g),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    l.default = d;
  },
  226,
);
