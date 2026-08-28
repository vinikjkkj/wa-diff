__d(
  "WAWebInfraErrorLogger",
  [
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "WALogger",
    "WALoggerUtils",
    "WAWebFBLogger",
    "WAWebLogLineSanitizer",
    "err",
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
        { partialMessage: "Invalid bootloader response 0" },
      ],
      c = [
        "ONUNHANDLEDREJECTION",
        "ONERROR",
        "PROMISE_DONE",
        "REACT_FIBER",
        "DEPRECATED",
      ],
      d = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i;
    function m(e) {
      if (e == null || !d.test(e)) return e;
      var t = e.indexOf("?"),
        n = e.indexOf("#"),
        r = t;
      return (
        (r === -1 || (n !== -1 && n < r)) && (r = n),
        r === -1 ? e : e.slice(0, r)
      );
    }
    function p(e) {
      return e.stackFrames
        .map(function (e) {
          return o("WAWebLogLineSanitizer").sanitizeLine(
            r("ErrorNormalizeUtils").formatStackFrame(
              babelHelpers.extends({}, e, { script: m(e.script) }),
            ),
          );
        })
        .join("\n");
    }
    function _(e) {
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
    function f() {
      var t = r("justknobx")._("860");
      if (t !== 0) {
        var n = o("WALoggerUtils").dynamicLoggingSampling(t / 100);
        (s || (s = r("ErrorPubSub"))).addListener(function (t, a) {
          var i;
          if (!(t.type === "debug" || t.type === "info")) {
            var l = _({
              message: t.message,
              project: (i = t.project) != null ? i : "",
              source: a,
            });
            if (!l) {
              var s,
                u = r("err")(
                  o("WAWebLogLineSanitizer").sanitizeLine(t.message),
                );
              ((u.forcedKey =
                t.forcedKey == null
                  ? void 0
                  : o("WAWebLogLineSanitizer").sanitizeLine(t.forcedKey)),
                (u.messageFormat = o("WAWebLogLineSanitizer").sanitizeLine(
                  t.messageFormat,
                )),
                (u.messageParams = t.messageParams.map(
                  o("WAWebLogLineSanitizer").sanitizeLine,
                )),
                (u.name = o("WAWebLogLineSanitizer").sanitizeLine(
                  (s = t.name) != null ? s : "Error",
                )),
                (u.stack = p(t)),
                (u.taalOpcodes =
                  t.taalOpcodes == null ? void 0 : [].concat(t.taalOpcodes)));
              var c =
                t.type === "warn" ? o("WALogger").WARN : o("WALogger").ERROR;
              c(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ErrorPubSub]",
                  ])),
              )
                .catching(u)
                .sendLogs("error-pubsub", { sampling: n })
                .tags("ErrorPubSub");
            }
          }
        });
      }
    }
    l.addListenerToErrorPubSub = f;
  },
  98,
);
