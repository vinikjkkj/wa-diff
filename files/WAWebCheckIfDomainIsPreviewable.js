__d(
  "WAWebCheckIfDomainIsPreviewable",
  [
    "WAWebChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIsDomainPreviewableAction",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            t != null
              ? o("WAWebChatGetters").getIsNewsletter(
                  o("WAWebStateUtils").unproxy(t),
                )
              : !1;
          if (
            !n ||
            !o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterHideNewsUrlPreviewEnabled()
          )
            return !0;
          var r = yield o(
            "WAWebNewsletterIsDomainPreviewableAction",
          ).isDomainPreviewableAction(e);
          return r;
        })),
        s.apply(this, arguments)
      );
    }
    l.checkIfDomainIsPreviewable = e;
  },
  98,
);
