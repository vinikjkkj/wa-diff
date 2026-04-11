__d(
  "useWAWebRecommendedNewsletters",
  [
    "WAWebAppRootInteractionContext.react",
    "WAWebNewsletterDirectorySearchAction",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = function (t) {
        return t.filter(function (e) {
          var t;
          return (
            e.isSuspendedOrTerminated() === !1 &&
            ((t = e.newsletterMetadata) == null ? void 0 : t.isPreview) === !0
          );
        });
      };
    function m() {
      var e = c([]),
        t = e[0],
        n = e[1],
        a = c(!1),
        i = a[0],
        l = a[1],
        s = r("useWAWebUnmountSignal")(),
        m = o(
          "WAWebAppRootInteractionContext.react",
        ).useWAWebAppRootInteractionContext(),
        p = m.completeManualyHoldInteraction;
      return (
        u(function () {
          s.aborted ||
            (l(!0),
            o("WAWebNewsletterDirectorySearchAction")
              .getRecommendedNewslettersAction()
              .then(function (e) {
                s.aborted || n(d(e));
              })
              .finally(function () {
                s.aborted || (l(!1), p());
              }));
        }, []),
        [i, t]
      );
    }
    l.useRecommendedNewsletters = m;
  },
  98,
);
