__d(
  "useWAWebNewsletterPrivacyBanner",
  [
    "WAWebChatGetters",
    "WAWebNewsletterPrivacyMsgBar.react",
    "react",
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
      var t = d(m(e)),
        n = t[0],
        a = t[1];
      o("useWAWebListener").useListener(
        e.newsletterMetadata,
        ["change:isPreview"],
        function () {
          return a(m(e));
        },
      );
      var i = c(function () {
        a(!1);
      }, []);
      return n
        ? s.jsx(r("WAWebNewsletterPrivacyMsgBar.react"), { onDismiss: i })
        : null;
    }
    l.default = p;
  },
  98,
);
