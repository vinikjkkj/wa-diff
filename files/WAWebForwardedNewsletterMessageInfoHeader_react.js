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
        i = t.msg,
        l = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          i,
          o("WAWebBoolFunc").returnTrue,
        );
      if (l == null) return null;
      var u =
          (n = i.forwardedNewsletterMessageInfo) == null
            ? void 0
            : n.newsletterName,
        d =
          (a = i.forwardedNewsletterMessageInfo) == null
            ? void 0
            : a.profileName,
        m = u != null ? u : s._(/*BTDS*/ "View channel");
      return c.jsx(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiPadding.vert3),
          {
            children: c.jsx(o("WAWebText.react").WAWebClickableText, {
              onClick: l,
              children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
                weight: "semibold",
                color: "link",
                children:
                  d != null
                    ? c.jsxs(o("WAWebFlex.react").FlexRow, {
                        children: [
                          d,
                          c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
                          m,
                        ],
                      })
                    : c.jsx(c.Fragment, { children: m }),
              }),
            }),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
