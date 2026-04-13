__d(
  "WAWebProductCatalogFetchStateTopBar.react",
  [
    "fbt",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "err",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        loadingContainer: {
          position: "x10l6tqk",
          zIndex: "x12xzxwr",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          backgroundColor: "x1280gxy",
          boxShadow: "x1499u3w",
          opacity: "x1hc1fzr",
          transitionDelay: "x1ojkfpl",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        text: { fontWeight: "xk50ysn", $$css: !0 },
        loadingText: { color: "xxr6tci", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.fetchState;
      switch (a) {
        case "NONE":
        case "SUCCESS":
          return null;
        case "PENDING": {
          var i, l;
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (e || (e = r("stylex"))).props(
                d.loadingContainer,
                o("WAWebUISpacing").uiPadding.all8,
              )),
              (l = c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 14,
                color: "highlight",
              })),
              (n[0] = i),
              (n[1] = l))
            : ((i = n[0]), (l = n[1]));
          var u;
          return (
            n[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = c.jsxs(
                  "div",
                  babelHelpers.extends({}, i, {
                    children: [
                      l,
                      c.jsx(o("WAWebText.react").WAWebTextSmall, {
                        as: "span",
                        xstyle: [
                          d.text,
                          o("WAWebUISpacing").uiMargin.horiz10,
                          d.loadingText,
                        ],
                        children: s._(/*BTDS*/ "Waiting for network"),
                      }),
                    ],
                  }),
                )),
                (n[2] = u))
              : (u = n[2]),
            u
          );
        }
        case "TOKEN_RECOVERY_REQUIRED":
        case "NOT_FOUND":
        case "ERROR": {
          var m;
          n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (e || (e = r("stylex"))).props(
                d.loadingContainer,
                o("WAWebUISpacing").uiPadding.all8,
              )),
              (n[3] = m))
            : (m = n[3]);
          var p;
          n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = [d.text, o("WAWebUISpacing").uiMargin.horiz10]), (n[4] = p))
            : (p = n[4]);
          var _;
          n[5] !== a
            ? ((_ =
                a === "NOT_FOUND"
                  ? s._(/*BTDS*/ "This product or service has been removed")
                  : s._(/*BTDS*/ "Something went wrong")),
              (n[5] = a),
              (n[6] = _))
            : (_ = n[6]);
          var f;
          return (
            n[7] !== _
              ? ((f = c.jsx(
                  "div",
                  babelHelpers.extends({}, m, {
                    children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
                      as: "span",
                      xstyle: p,
                      color: "critical",
                      children: _,
                    }),
                  }),
                )),
                (n[7] = _),
                (n[8] = f))
              : (f = n[8]),
            f
          );
        }
        default:
          throw r("err")("invalid fetchState " + a);
      }
    }
    l.default = m;
  },
  226,
);
