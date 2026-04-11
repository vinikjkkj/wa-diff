__d(
  "useWAWebNewsletterReports",
  [
    "$InternalEnum",
    "WAWebNetworkStatus",
    "WAWebNewsletterGetReportsAction",
    "WAWebNewsletterReportCollection",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(10),
        t = r("useWAWebUnmountSignal")(),
        a = d(m.FETCHING),
        i = a[0],
        l = a[1],
        s;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["add", "remove", "change", "reset"]), (e[0] = s))
        : (s = e[0]);
      var u = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterReportCollection").NewsletterReportCollection,
          s,
          _,
        ),
        p;
      e[1] !== t.aborted
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!t.aborted) {
                if ((l(m.FETCHING), !r("WAWebNetworkStatus").online)) {
                  l(m.OFFLINE);
                  return;
                }
                try {
                  (yield o(
                    "WAWebNewsletterGetReportsAction",
                  ).getNewsletterReportsAction(),
                    l(m.SUCCESS));
                } catch (e) {
                  l(m.ERROR);
                }
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (e[1] = t.aborted),
          (e[2] = p))
        : (p = e[2]);
      var f = p,
        g,
        h;
      (e[3] !== f
        ? ((g = function () {
            f();
          }),
          (h = [f]),
          (e[3] = f),
          (e[4] = g),
          (e[5] = h))
        : ((g = e[4]), (h = e[5])),
        c(g, h));
      var y;
      return (
        e[6] !== i || e[7] !== f || e[8] !== u
          ? ((y = [i, f, u]), (e[6] = i), (e[7] = f), (e[8] = u), (e[9] = y))
          : (y = e[9]),
        y
      );
    }
    function _() {
      return o(
        "WAWebNewsletterReportCollection",
      ).NewsletterReportCollection.toArray();
    }
    ((l.FetchReportStatus = m), (l.useNewsletterReports = p));
  },
  98,
);
