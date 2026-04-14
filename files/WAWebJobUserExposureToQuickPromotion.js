__d(
  "WAWebJobUserExposureToQuickPromotion",
  [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebConsumerQuickPromotionActionMutation",
    "WAWebDefinePersistedJob",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionActionMutation",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
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
                    if (a == null)
                      return { type: "old-job", surfaceId: n.surfaceId };
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
                    return (
                      yield t.merge(i, { tracking: s }),
                      { type: "updated", surfaceId: n.surfaceId }
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )
            .then(function (e) {
              return typeof e != "string" && e.type === "updated"
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = t.experimentKey,
            a = t.id,
            i = t.ts;
          if (typeof e == "string") {
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
          var l;
          try {
            l = o("WAWebMobilePlatforms").isSMB()
              ? yield o(
                  "WAWebQuickPromotionActionMutation",
                ).executeQuickPromotionActionMutation({
                  event: "EXPOSURE",
                  promotion_id: a,
                  surface_nux_id: e.surfaceId,
                  promotion_logging_data: r,
                  client_time: i,
                })
              : yield o(
                  "WAWebConsumerQuickPromotionActionMutation",
                ).executeConsumerQuickPromotionActionMutation({
                  event: "EXPOSURE",
                  promotion_id: a,
                  surface_nux_id: e.surfaceId,
                  promotion_logging_data: r,
                  client_time: i,
                });
          } catch (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "userExposureToQuickPromotion: unable to log through GraphQL",
                ])),
            );
          }
          if (((n = l) == null ? void 0 : n.type) === "not-enabled") {
            l.type;
            var d = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
              eventType: "exposure",
              eventPromotionId: a,
              eventTimestampSec: i,
              eventLogdata: r,
            });
            d.name !== "EventResponseSuccess" &&
              (d.name,
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "userExposureToQuickPromotion: unable to log",
                  ])),
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    var _ = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", d)
      .finalStep("reportToComms", m)
      .end();
    l.userExposureToQuickPromotion = _;
  },
  98,
);
