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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(11),
        i = r("useWAWebUnmountSignal")(),
        l = m(p.FETCHING),
        s = l[0],
        u = l[1],
        c;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["add", "remove", "change", "reset"]), (a[0] = c))
        : (c = a[0]);
      var _ = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterEnforcementAlertCollection")
            .NewsletterEnforcementAlertCollection,
          c,
          f,
        ),
        g;
      a[1] !== t.id || a[2] !== i.aborted
        ? ((g = (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!i.aborted) {
                if ((u(p.FETCHING), !r("WAWebNetworkStatus").online)) {
                  u(p.OFFLINE);
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
                    i.aborted)
                  ) {
                    u(p.ERROR);
                    return;
                  }
                  u(p.SUCCESS);
                } catch (t) {
                  var n = t;
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletters][alerts] Failed to fetch alerts for newsletter",
                        ])),
                    )
                    .sendLogs("newsletter-alerts-drawer-fetch-failed"),
                    u(p.ERROR));
                }
              }
            });
            return function () {
              return a.apply(this, arguments);
            };
          })()),
          (a[1] = t.id),
          (a[2] = i.aborted),
          (a[3] = g))
        : (g = a[3]);
      var h = g,
        y,
        C;
      (a[4] !== h
        ? ((y = function () {
            h();
          }),
          (C = [h]),
          (a[4] = h),
          (a[5] = y),
          (a[6] = C))
        : ((y = a[5]), (C = a[6])),
        d(y, C));
      var b;
      return (
        a[7] !== s || a[8] !== h || a[9] !== _
          ? ((b = [s, h, _]), (a[7] = s), (a[8] = h), (a[9] = _), (a[10] = b))
          : (b = a[10]),
        b
      );
    }
    function f() {
      return o(
        "WAWebNewsletterEnforcementAlertCollection",
      ).NewsletterEnforcementAlertCollection.toArray();
    }
    ((l.FetchAlertStatus = p), (l.useNewsletterEnforcementAlerts = _));
  },
  98,
);
