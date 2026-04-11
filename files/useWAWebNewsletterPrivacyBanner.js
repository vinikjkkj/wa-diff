__d(
  "useWAWebNewsletterPrivacyBanner",
  [
    "WAWebChatGetters",
    "WAWebNewsletterPrivacyMsgBar.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t;
      return (
        o("WAWebChatGetters").getIsNewsletter(e) &&
        ((t = e.newsletterMetadata) == null ? void 0 : t.isPreview) === !0 &&
        !e.isSuspendedOrTerminated()
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] !== e ? ((n = m(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var a = d(n),
        i = a[0],
        l = a[1],
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["change:isPreview"]), (t[2] = u))
        : (u = t[2]);
      var c;
      (t[3] !== e
        ? ((c = function () {
            return l(m(e));
          }),
          (t[3] = e),
          (t[4] = c))
        : (c = t[4]),
        o("useWAWebListener").useListener(e.newsletterMetadata, u, c));
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            l(!1);
          }),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        f;
      return (
        t[6] !== i
          ? ((f = i
              ? s.jsx(r("WAWebNewsletterPrivacyMsgBar.react"), { onDismiss: _ })
              : null),
            (t[6] = i),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    l.default = p;
  },
  98,
);
