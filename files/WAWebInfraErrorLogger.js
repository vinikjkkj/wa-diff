__d(
  "WAWebInfraErrorLogger",
  [
    "ErrorPubSub",
    "WALogger",
    "WALoggerUtils",
    "WAWebFBLogger",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        {
          partialMessage:
            'Converting to a string will drop content data. Hash="undefined"',
        },
        { partialMessage: "Failed to preload resource" },
      ],
      c = [
        "ONUNHANDLEDREJECTION",
        "ONERROR",
        "PROMISE_DONE",
        "REACT_FIBER",
        "DEPRECATED",
      ];
    function d(e) {
      var t = e.message,
        n = e.project,
        r = e.source;
      return c.includes(r) || o("WAWebFBLogger").PROJECT.includes(n)
        ? !0
        : u.some(function (e) {
            var n = e.partialMessage;
            return String(t).includes(n);
          });
    }
    function m() {
      var t = r("justknobx")._("860");
      if (t !== 0) {
        var n = o("WALoggerUtils").dynamicLoggingSampling(t / 100);
        (s || (s = r("ErrorPubSub"))).addListener(function (t, a) {
          var i;
          if (!(t.type === "debug" || t.type === "info")) {
            var l = d({
              message: t.message,
              project: (i = t.project) != null ? i : "",
              source: a,
            });
            l ||
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ErrorPubSub]",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("[ErrorPubSub] " + t.message, { sampling: n })
                .tags("ErrorPubSub");
          }
        });
      }
    }
    l.addListenerToErrorPubSub = m;
  },
  98,
);
