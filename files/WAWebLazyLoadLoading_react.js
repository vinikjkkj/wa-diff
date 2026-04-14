__d(
  "WAWebLazyLoadLoading.react",
  [
    "fbt",
    "WALogger",
    "WAWebRefreshIcon.react",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = {
        circleSvg: { width: "x1pju0fl", height: "x10wjd1d", $$css: !0 },
        text: { lineHeight: "xggjnk3", color: "x1v5yvga", $$css: !0 },
      };
    function p(e) {
      var t = e.text;
      return d.jsxs("div", {
        children: [
          d.jsx("div", {
            className:
              "x1pju0fl x10wjd1d x1d12jij xwodta0 x1idq3uh x396r2g xdj266r x11t971q x98jqk3 xvc5jky xue55m6 x17t9dm2 x2b8uid x1c9tyrk xeusxvb x1pahc9y x1ertn4p xilfgz5",
            children: d.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
              iconXstyle: m.circleSvg,
            }),
          }),
          d.jsx(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props(
                m.text,
                o("WAWebUISpacing").uiMargin.vert0,
                o("WAWebUISpacing").uiMargin.horiz20,
              ),
              { children: t },
            ),
          ),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.error,
        r = t.text,
        a =
          r === void 0
            ? s._(
                /*BTDS*/ "There was an unexpected error, please click to reload the application.",
              )
            : r,
        i = t.retry,
        l =
          i === void 0
            ? function () {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[reload] LazyLoadLoading.retry",
                    ])),
                ),
                  window.location.reload());
              }
            : i;
      return d.jsx("div", {
        className:
          "x10l6tqk x16uhe5s x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x2b8uid x1ypdohk",
        onClick: n ? l : null,
        children: n
          ? d.jsx(p, { text: a })
          : d.jsx(o("WAWebSpinner.react").Spinner, { size: 50, stroke: 4 }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
