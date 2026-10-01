__d(
  "WAWebThreadLoggingFalco",
  [
    "JSResourceForInteraction",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")("WAWebWamFalcoGlobalFields").__setRef(
        "WAWebThreadLoggingFalco",
      );
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return (yield c.load(), !0);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "canLoadThreadLoggingFalcoCanonicals: loading the canonical fields failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("thread-logging-falco-canonicals-preload-failure"),
              !1
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = yield c.load();
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "logThreadInteractionFalcoEvent: loading the canonical fields failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("thread-logging-falco-canonicals-load-failure");
            return;
          }
          e.log(function () {
            var e = babelHelpers.extends(
              {},
              f(function () {
                return n.getCanonicalFieldsForFalco();
              }),
            );
            for (var o of Object.entries(t())) {
              var a = o[0],
                i = o[1];
              i != null &&
                (typeof i != "number" || Number.isFinite(i)) &&
                (e[a] = i);
            }
            return r("unsafeCast")(e);
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      try {
        return t();
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "logThreadInteractionFalcoEvent: reading the canonical fields failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("thread-logging-falco-canonicals-read-failure"),
          {}
        );
      }
    }
    ((l.canLoadThreadLoggingFalcoCanonicals = d),
      (l.logThreadInteractionFalcoEvent = p));
  },
  98,
);
