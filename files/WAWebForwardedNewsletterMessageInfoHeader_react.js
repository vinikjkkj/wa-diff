__d(
  "WAWebForwardedNewsletterMessageInfoHeader.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebFlex.react",
    "WAWebForwardedInfoHeaderLink.react",
    "WAWebMessageMeta.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedNewsletterMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(8),
        i = e.msg,
        l = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          i,
          o("WAWebBoolFunc").returnTrue,
        );
      if (l == null) return null;
      var c =
          (t = i.forwardedNewsletterMessageInfo) == null
            ? void 0
            : t.newsletterName,
        d =
          (n = i.forwardedNewsletterMessageInfo) == null
            ? void 0
            : n.profileName,
        m;
      a[0] !== c
        ? ((m = c != null ? c : s._(/*BTDS*/ "View channel")),
          (a[0] = c),
          (a[1] = m))
        : (m = a[1]);
      var p = m,
        _;
      a[2] !== d || a[3] !== p
        ? ((_ =
            d != null
              ? u.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    d,
                    u.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
                    p,
                  ],
                })
              : p),
          (a[2] = d),
          (a[3] = p),
          (a[4] = _))
        : (_ = a[4]);
      var f;
      return (
        a[5] !== l || a[6] !== _
          ? ((f = u.jsx(r("WAWebForwardedInfoHeaderLink.react"), {
              onClick: l,
              testId: "forwarded-newsletter-info",
              children: _,
            })),
            (a[5] = l),
            (a[6] = _),
            (a[7] = f))
          : (f = a[7]),
        f
      );
    }
    l.default = c;
  },
  226,
);
