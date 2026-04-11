__d(
  "WAWebLongAnimationFrameObserver",
  [
    "WALogger",
    "WAWebDocumentVisibilityObserver",
    "WAWebPdfViewerLongAnimationFrameTracker",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 500;
    function u(e) {
      var t = e.match(/.*\.(.*)/);
      return t ? t[1] : e;
    }
    var c = (function () {
      function t() {
        this.documentVisibilityObserver = new (o(
          "WAWebDocumentVisibilityObserver",
        ).WAWebDocumentVisibilityObserver)();
      }
      var n = t.prototype;
      return (
        (n.isSupported = function () {
          var e;
          return (
            typeof ((e = window.PerformanceObserver) == null ||
            (e = e.supportedEntryTypes) == null
              ? void 0
              : e.includes) == "function" &&
            window.PerformanceObserver.supportedEntryTypes.includes(
              "long-animation-frame",
            )
          );
        }),
        (n.observe = function (t) {
          t.observe({ type: "long-animation-frame", buffered: !0 });
        }),
        (n.handle = function (n) {
          for (var t of n)
            if (!(t.blockingDuration < s || t.firstUIEventTimestamp < 0)) {
              var r = this.documentVisibilityObserver.isWindowInFocus(),
                a = this.documentVisibilityObserver.isDocumentVisible();
              if (!(!a || !r)) {
                if (t.scripts.length === 0) return;
                var i = t.scripts.reduce(function (e, t) {
                  return e.duration > t.duration ? e : t;
                });
                if (
                  o(
                    "WAWebPdfViewerLongAnimationFrameTracker",
                  ).isPdfViewerLongAnimationFrameTrackingActive()
                ) {
                  var l = u(i.invoker) + ":" + i.sourceFunctionName;
                  o(
                    "WAWebPdfViewerLongAnimationFrameTracker",
                  ).recordPdfViewerLongAnimationFrame(
                    t.blockingDuration,
                    l,
                    i.duration,
                  );
                }
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[long-animation-frame] blockingDuration: ",
                        "ms - ",
                        ":",
                        " ",
                        "ms",
                      ])),
                    t.blockingDuration,
                    u(i.invoker),
                    i.sourceFunctionName,
                    i.duration,
                  )
                  .sendLogs(
                    "[performance observer] long-animation-frame by " +
                      u(i.invoker),
                    { sampling: 0.001 },
                  );
              }
            }
        }),
        t
      );
    })();
    l.WAWebLongAnimationFrameObserver = c;
  },
  98,
);
