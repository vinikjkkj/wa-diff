__d(
  "WAWebNewsletterSuspendedMessagePreview.react",
  [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebSettingsBlockedIcon.react",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        r = e.isGeosuspended,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "This channel is no longer available")),
          (t[0] = a))
        : (a = t[0]);
      var i = m(a),
        l = i[0],
        c = i[1],
        p,
        _;
      (t[1] !== r
        ? ((p = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (r) {
                    var e = yield o(
                      "WAWebCommonNewsletterIntegrityStrings",
                    ).getGeosuspendedInYourCountryString();
                    c(e);
                  }
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })();
            e();
          }),
          (_ = [r]),
          (t[1] = r),
          (t[2] = p),
          (t[3] = _))
        : ((p = t[2]), (_ = t[3])),
        d(p, _));
      var f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x1k4tb9n" }), (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
            width: 14,
            height: 14,
            displayInline: !0,
            directional: !0,
            xstyle: [
              o("WAWebUISpacing").uiMargin.top3,
              o("WAWebUISpacing").uiMargin.end3,
            ],
          })),
          (t[5] = g))
        : (g = t[5]);
      var h;
      return (
        t[6] !== l
          ? ((h = u.jsxs(
              "span",
              babelHelpers.extends({ title: l }, f, {
                "data-testid": void 0,
                children: [g, l],
              }),
            )),
            (t[6] = l),
            (t[7] = h))
          : (h = t[7]),
        h
      );
    }
    l.default = p;
  },
  226,
);
