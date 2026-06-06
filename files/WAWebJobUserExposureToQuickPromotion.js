__d(
  "WAWebJobUserExposureToQuickPromotion",
  [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebDefinePersistedJob",
    "WAWebModelStorageUtils",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var r = t.experimentKey,
        a = t.exposureHoldout,
        i = t.id;
      return r.length === 0
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "userExposureToQuickPromotion: missing experiment key",
                ])),
            )
            .sendLogs("user-exposure-quick-promotion-missing-exp-key"),
          "missing-key")
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["quick-promotions"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0],
                      n = yield t.get(i);
                    if (n == null) return "not-found";
                    if (a == null) return "old-job";
                    var o = n.tracking,
                      l = o.lastLoggedExposure;
                    if (
                      l != null &&
                      l.experimentKey === r &&
                      l.exposureHoldout === a
                    )
                      return "deduped";
                    var s = babelHelpers.extends({}, o, {
                      lastLoggedExposure: {
                        experimentKey: r,
                        exposureHoldout: a,
                      },
                    });
                    return (yield t.merge(i, { tracking: s }), "updated");
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )
            .then(function (e) {
              return e === "updated"
                ? o("WAWebWorkerSafeBackendApi")
                    .workerSafeSendAndReceive("loadQuickPromotions", {
                      trigger: "user-action",
                    })
                    .then(function () {
                      return e;
                    })
                : e;
            });
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.experimentKey,
            r = t.id,
            a = t.ts;
          if (e !== "updated" && e !== "old-job") {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "userExposureToQuickPromotion: skipping comms step: ",
                  "",
                ])),
              e,
            );
            return;
          }
          var i = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
            eventType: "exposure",
            eventPromotionId: r,
            eventTimestampSec: a,
            eventLogdata: n,
          });
          i.name !== "EventResponseSuccess" &&
            (i.name,
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "userExposureToQuickPromotion: unable to log",
                ])),
            ));
        })),
        m.apply(this, arguments)
      );
    }
    var p = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", c)
      .finalStep("reportToComms", d)
      .end();
    l.userExposureToQuickPromotion = p;
  },
  98,
);
