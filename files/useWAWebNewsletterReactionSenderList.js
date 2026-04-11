__d(
  "useWAWebNewsletterReactionSenderList",
  [
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMessageReactionSenderListAction",
    "WAWebNewsletterReactionFrontendUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(t, a, i) {
      var l = m(!0),
        s = l[0],
        u = l[1],
        p = m(!1),
        _ = p[0],
        f = p[1],
        g = m([]),
        h = g[0],
        y = g[1],
        C = m(new Map()),
        b = C[0],
        v = C[1],
        S = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          function () {
            return !r("WAWebNetworkStatus").online;
          },
        ),
        R = c(
          function () {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                if (
                  !(
                    !o(
                      "WAWebNewsletterExtendedGatingUtils",
                    ).isNewsletterReactionSenderListEnabled(t, i) ||
                    S ||
                    _
                  )
                ) {
                  var n = yield o(
                    "WAWebNewsletterMessageReactionSenderListAction",
                  ).getNewsletterMessageReactionSenderListAction(t, a);
                  if (n == null) {
                    (f(!0),
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[useNewsletterReactionSenderList] Failed to get reaction senders for message ",
                              " from newsletter ",
                              "",
                            ])),
                          a.id,
                          t.id,
                        )
                        .sendLogs(
                          "newsletter-hook-failed-to-get-reaction-senders",
                        ));
                    return;
                  }
                  (y(
                    o(
                      "WAWebNewsletterReactionFrontendUtils",
                    ).getContactReactionSenders(n),
                  ),
                    v(
                      o(
                        "WAWebNewsletterReactionFrontendUtils",
                      ).getReactionSendersForFacePile(n),
                    ));
                }
              })()
              .finally(function () {
                u(!1);
              });
          },
          [t, a, i, S, _],
        );
      return (
        d(function () {
          return R();
        }, []),
        [b, h, s, _, S, f, R]
      );
    }
    l.useNewsletterReactionSenderList = p;
  },
  98,
);
