__d(
  "LongtaskObserver",
  ["OneTraceCore", "addAnnotations", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        typeof ((e = window.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes("longtask"),
      u = new Set(),
      c = !1,
      d = 1;
    function m(e) {
      var t = new Set();
      (r("OneTraceCore").currentTraces.forEach(function (n) {
        n.traceID !== e.traceID &&
          n.traceType !== "RESPONSIVENESS" &&
          t.add(n.traceType);
      }),
        t.size > 0 &&
          r("addAnnotations")(e.annotations, {
            string_array: { currentTraceTypes: Array.from(t).sort() },
          }));
    }
    function p() {
      if (!c) {
        if (s) {
          var e = new window.PerformanceObserver(function (e) {
            var t = e.getEntries();
            t.forEach(function (e) {
              u.forEach(function (t) {
                t(e);
              });
            });
          });
          e.observe({ buffered: !0, type: "longtask" });
        }
        (_(function (e) {
          var t,
            n = (t = r("OneTraceCore")).startTrace(
              r("uuidv4")(),
              t.getCurrentTracePolicy(),
              "LONGTASK",
              e.startTime,
              null,
            );
          (r("addAnnotations")(n.annotations, {
            int: { instanceNum: d++ },
            string: {
              recentInteractionIndentifier: t.getRecentInteractionIndentifier(),
            },
          }),
            m(n),
            t.endTrace(n.traceID, e.startTime + e.duration, "SUCCESS"));
        }),
          (c = !0));
      }
    }
    function _(e) {
      return s
        ? (u.add(e),
          function () {
            u.delete(e);
          })
        : function () {};
    }
    ((l.canUseLongTasksAPI = s),
      (l.logActiveTraceTypes = m),
      (l.init = p),
      (l.subscribe = _));
  },
  98,
);
