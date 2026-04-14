__d(
  "useWAWebNewsletterEnforcementAlerts",
  [
    "$InternalEnum",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterGetNewsletterEnforcementAlertAction",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState,
      p = n("$InternalEnum").Mirrored([
        "OFFLINE",
        "FETCHING",
        "SUCCESS",
        "ERROR",
      ]);
    function _(t) {
      var a = r("useWAWebUnmountSignal")(),
        i = m(p.FETCHING),
        l = i[0],
        s = i[1],
        u = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterEnforcementAlertCollection")
            .NewsletterEnforcementAlertCollection,
          ["add", "remove", "change", "reset"],
          function () {
            return o(
              "WAWebNewsletterEnforcementAlertCollection",
            ).NewsletterEnforcementAlertCollection.toArray();
          },
        ),
        _ = c(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!a.aborted) {
              if ((s(p.FETCHING), !r("WAWebNetworkStatus").online)) {
                s(p.OFFLINE);
                return;
              }
              try {
                if (
                  (yield o(
                    "WAWebNewsletterGetNewsletterEnforcementAlertAction",
                  ).getNewsletterEnforcementAlertAction(
                    t.id,
                    o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                  ),
                  a.aborted)
                ) {
                  s(p.ERROR);
                  return;
                }
                s(p.SUCCESS);
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletters][alerts] Failed to fetch alerts for newsletter",
                      ])),
                  )
                  .sendLogs("newsletter-alerts-drawer-fetch-failed"),
                  s(p.ERROR));
              }
            }
          }),
          [t.id, a.aborted],
        );
      return (
        d(
          function () {
            _();
          },
          [_],
        ),
        [l, _, u]
      );
    }
    ((l.FetchAlertStatus = p), (l.useNewsletterEnforcementAlerts = _));
  },
  98,
);
