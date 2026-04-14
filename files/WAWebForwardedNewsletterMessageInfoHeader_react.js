__d(
  "WAWebForwardedNewsletterMessageInfoHeader.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebFlex.react",
    "WAWebForwardedInfoHeaderLink.react",
    "WAWebMessageMeta.react",
    "react",
    "useWAWebForwardedNewsletterMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.msg,
        i = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          a,
          o("WAWebBoolFunc").returnTrue,
        );
      if (i == null) return null;
      var l =
          (t = a.forwardedNewsletterMessageInfo) == null
            ? void 0
            : t.newsletterName,
        c =
          (n = a.forwardedNewsletterMessageInfo) == null
            ? void 0
            : n.profileName,
        d = l != null ? l : s._(/*BTDS*/ "View channel");
      return u.jsx(r("WAWebForwardedInfoHeaderLink.react"), {
        onClick: i,
        testId: "forwarded-newsletter-info",
        children:
          c != null
            ? u.jsxs(o("WAWebFlex.react").FlexRow, {
                children: [
                  c,
                  u.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
                  d,
                ],
              })
            : d,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
