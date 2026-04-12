__d(
  "WAWebProductCatalogFetchStateTopBar.react",
  [
    "fbt",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "err",
    "react",
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
      var n = t.fetchState;
      switch (n) {
        case "NONE":
        case "SUCCESS":
          return null;
        case "PENDING":
          return c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.loadingContainer,
                o("WAWebUISpacing").uiPadding.all8,
              ),
              {
                children: [
                  c.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 14,
                    color: "highlight",
                  }),
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
              },
            ),
          );
        case "TOKEN_RECOVERY_REQUIRED":
        case "NOT_FOUND":
        case "ERROR":
          return c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.loadingContainer,
                o("WAWebUISpacing").uiPadding.all8,
              ),
              {
                children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
                  as: "span",
                  xstyle: [d.text, o("WAWebUISpacing").uiMargin.horiz10],
                  color: "critical",
                  children:
                    n === "NOT_FOUND"
                      ? s._(/*BTDS*/ "This product or service has been removed")
                      : s._(/*BTDS*/ "Something went wrong"),
                }),
              },
            ),
          );
        default:
          throw r("err")("invalid fetchState " + n);
      }
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
