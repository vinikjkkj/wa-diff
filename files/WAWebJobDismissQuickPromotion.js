__d(
  "WAWebJobDismissQuickPromotion",
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
      var r = t.id,
        a = t.ts;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["quick-promotions"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  i = t[0],
                  l = yield i.get(r);
                if (l == null) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "dismissQuickPromotion: promotion not found",
                      ])),
                  );
                  return;
                }
                var s = babelHelpers.extends({}, l.tracking, {
                    dismisses: l.tracking.dismisses + 1,
                  }),
                  u = s.lastDismissTs;
                return (
                  (u == null || a > u) && (s.lastDismissTs = a),
                  yield i.merge(r, { tracking: s }),
                  {
                    surfaceId: l.surfaceId,
                    instanceLogData:
                      (n = l.data.qpConfigInstanceLogData) == null
                        ? void 0
                        : n.elementValue,
                  }
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .then(function (e) {
          return o("WAWebWorkerSafeBackendApi")
            .workerSafeSendAndReceive("loadQuickPromotions", {
              trigger: "user-action",
            })
            .then(function () {
              return e;
            });
        });
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.id,
            r = t.ts,
            a =
              (e == null ? void 0 : e.instanceLogData) != null
                ? String.fromCharCode.apply(null, e.instanceLogData)
                : "",
            i = e == null ? void 0 : e.surfaceId;
          if (i == null)
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "dismissQuickPromotion: surface id for GraphQL call not found",
                ])),
            );
          else {
            var l, d;
            try {
              d = o("WAWebMobilePlatforms").isSMB()
                ? yield o(
                    "WAWebQuickPromotionActionMutation",
                  ).executeQuickPromotionActionMutation({
                    event: "ACTION",
                    action: "DISMISS",
                    promotion_id: n,
                    surface_nux_id: i,
                    promotion_logging_data: a,
                    client_time: r,
                  })
                : yield o(
                    "WAWebConsumerQuickPromotionActionMutation",
                  ).executeConsumerQuickPromotionActionMutation({
                    event: "ACTION",
                    action: "DISMISS",
                    promotion_id: n,
                    surface_nux_id: i,
                    promotion_logging_data: "",
                    client_time: r,
                  });
            } catch (e) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "dismissQuickPromotion: unable to log through GraphQL",
                  ])),
              );
            }
            if (((l = d) == null ? void 0 : l.type) !== "not-enabled") return;
            d.type;
          }
          var m = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
            eventType: "dismiss",
            eventPromotionId: n,
            eventTimestampSec: r,
            eventLogdata: a,
          });
          m.name !== "EventResponseSuccess" &&
            (m.name,
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "dismissQuickPromotion: unable to log through IQ",
                ])),
            ));
        })),
        p.apply(this, arguments)
      );
    }
    var _ = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", d)
      .finalStep("reportToComms", m)
      .end();
    l.dismissQuickPromotion = _;
  },
  98,
);
