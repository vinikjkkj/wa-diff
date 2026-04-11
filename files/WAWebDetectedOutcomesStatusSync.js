__d(
  "WAWebDetectedOutcomesStatusSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.DetectedOutcomeStatus;
          }),
          (a.applyMutations = function (r) {
            var t = this,
              a = 0,
              i = 0,
              l = (c || (c = n("Promise"))).all(
                r.map(
                  (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        try {
                          if (n.operation === "set") {
                            var r = n.value,
                              l = r.detectedOutcomesStatusAction;
                            return (l == null ? void 0 : l.isEnabled) == null
                              ? (a++,
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  t.collectionName,
                                ))
                              : (yield o(
                                  "WAWebBackendApi",
                                ).frontendSendAndReceive(
                                  "ctwaDetectedOutcomeOnboardingStatusUpdate",
                                  { onboardingStatus: l.isEnabled },
                                ),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                });
                          }
                          return (
                            i++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            }
                          );
                        } catch (t) {
                          return (
                            o("WALogger").ERROR(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "[DetectedOutcomesStatusSync] set status failed",
                                ])),
                            ),
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Failed,
                            }
                          );
                        }
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                ),
              );
            return l.then(function (e) {
              return (
                a > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "detected outcome status sync: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "detected outcome status sync: ",
                        " operations not supported",
                      ])),
                    i,
                  ),
                e
              );
            });
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
