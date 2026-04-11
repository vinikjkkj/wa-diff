__d(
  "WAWebForwardedNewsletterMessageInfoHeader.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebFlex.react",
    "WAWebMessageMeta.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebForwardedNewsletterMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(9),
        l = t.msg,
        u = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          l,
          o("WAWebBoolFunc").returnTrue,
        );
      if (u == null) return null;
      var d =
          (n = l.forwardedNewsletterMessageInfo) == null
            ? void 0
            : n.newsletterName,
        m =
          (a = l.forwardedNewsletterMessageInfo) == null
            ? void 0
            : a.profileName,
        p;
      i[0] !== d
        ? ((p = d != null ? d : s._(/*BTDS*/ "View channel")),
          (i[0] = d),
          (i[1] = p))
        : (p = i[1]);
      var _ = p,
        f;
      i[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert3,
          )),
          (i[2] = f))
        : (f = i[2]);
      var g;
      i[3] !== m || i[4] !== _
        ? ((g = c.jsx(o("WAWebText.react").WAWebTextSmall, {
            weight: "semibold",
            color: "link",
            children:
              m != null
                ? c.jsxs(o("WAWebFlex.react").FlexRow, {
                    children: [
                      m,
                      c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
                      _,
                    ],
                  })
                : c.jsx(c.Fragment, { children: _ }),
          })),
          (i[3] = m),
          (i[4] = _),
          (i[5] = g))
        : (g = i[5]);
      var h;
      return (
        i[6] !== u || i[7] !== g
          ? ((h = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, f, {
                children: c.jsx(o("WAWebText.react").WAWebClickableText, {
                  onClick: u,
                  children: g,
                }),
              }),
            )),
            (i[6] = u),
            (i[7] = g),
            (i[8] = h))
          : (h = i[8]),
        h
      );
    }
    l.default = d;
  },
  226,
);
