__d(
  "WAWebWindowsWebDataLossReporter",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebWindowsHybridBridgeCommon",
    "WAWebWindowsWebDataLossQpl",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = !1;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (m) return;
            var t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge();
            if (t == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "activeNativeLoginSessionExists: bridge is null",
                  ])),
              );
              return;
            }
            (yield f(t)) &&
              ((m = !0),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "reportPotentialWebDataLoss: web logged out, native session active",
                  ])),
              ),
              r("justknobx")._("1288") &&
                (o("WAWebWindowsWebDataLossQpl").reportWebDataLossQpl(),
                yield o("WAPromiseDelays").delayMs(1e3),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "reportPotentialWebDataLoss: reported web data loss via QPL",
                    ])),
                )),
              yield t == null
                ? void 0
                : t.getClientKeyBridge().clearClientKey(),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "reportPotentialWebDataLoss: cleared stale client key",
                  ])),
              ));
          } catch (e) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "reportPotentialWebDataLoss: ",
                  "",
                ])),
              e,
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield e.getClientKeyBridge().getClientKey();
            return t != null && t !== "";
          } catch (e) {
            return !1;
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.reportPotentialWebDataLoss = p;
  },
  98,
);
