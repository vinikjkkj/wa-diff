__d(
  "WAWebDetectedOutcomesStatusSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.DetectedOutcomeStatus;
          }),
          (r.applyMutations = function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = Promise.all(
                n.map(async function (n) {
                  try {
                    if (n.operation === "set") {
                      var i = n.value,
                        l = i.detectedOutcomesStatusAction;
                      return (l == null ? void 0 : l.isEnabled) == null
                        ? (r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          ))
                        : (await o("WAWebBackendApi").frontendSendAndReceive(
                            "ctwaDetectedOutcomeOnboardingStatusUpdate",
                            { onboardingStatus: l.isEnabled },
                          ),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          });
                    }
                    return (
                      a++,
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
                      { actionState: o("WASyncdConst").SyncActionState.Failed }
                    );
                  }
                }),
              );
            return i.then(function (e) {
              return (
                r > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "detected outcome status sync: ",
                        " malformed mutations",
                      ])),
                    r,
                  ),
                a > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "detected outcome status sync: ",
                        " operations not supported",
                      ])),
                    a,
                  ),
                e
              );
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
