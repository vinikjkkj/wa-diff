__d(
  "useWAWebNewsletterReports",
  [
    "$InternalEnum",
    "WAWebNetworkStatus",
    "WAWebNewsletterGetReportsAction",
    "WAWebNewsletterReportCollection",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState,
      m = n("$InternalEnum").Mirrored([
        "OFFLINE",
        "FETCHING",
        "SUCCESS",
        "ERROR",
      ]);
    function p() {
      var e = r("useWAWebUnmountSignal")(),
        t = d(m.FETCHING),
        a = t[0],
        i = t[1],
        l = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterReportCollection").NewsletterReportCollection,
          ["add", "remove", "change", "reset"],
          function () {
            return o(
              "WAWebNewsletterReportCollection",
            ).NewsletterReportCollection.toArray();
          },
        ),
        s = u(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!e.aborted) {
              if ((i(m.FETCHING), !r("WAWebNetworkStatus").online)) {
                i(m.OFFLINE);
                return;
              }
              try {
                (yield o(
                  "WAWebNewsletterGetReportsAction",
                ).getNewsletterReportsAction(),
                  i(m.SUCCESS));
              } catch (e) {
                i(m.ERROR);
              }
            }
          }),
          [e],
        );
      return (
        c(
          function () {
            s();
          },
          [s],
        ),
        [a, s, l]
      );
    }
    ((l.FetchReportStatus = m), (l.useNewsletterReports = p));
  },
  98,
);
