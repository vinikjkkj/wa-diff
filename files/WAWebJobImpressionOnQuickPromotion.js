__d(
  "WAWebJobImpressionOnQuickPromotion",
  [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebConsumerQuickPromotionActionMutation",
    "WAWebDefinePersistedJob",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionActionMutation",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
      var n = t.id,
        r = t.ts;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["quick-promotions"], async function (t) {
          var a,
            i = t[0],
            l = await i.get(n);
          if (l == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "impressionOnQuickPromotion: promotion not found",
                ])),
            );
            return;
          }
          var s = babelHelpers.extends({}, l.tracking, {
              impressions: l.tracking.impressions + 1,
            }),
            u = s.lastImpressionTs;
          return (
            (u == null || r > u) && (s.lastImpressionTs = r),
            await i.merge(n, { tracking: s }),
            {
              surfaceId: l.surfaceId,
              instanceLogData:
                (a = l.data.qpConfigInstanceLogData) == null
                  ? void 0
                  : a.elementValue,
            }
          );
        })
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
    async function m(e, t) {
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
              "impressionOnQuickPromotion: surfaceId for GraphQL not found",
            ])),
        );
      else {
        var l, d;
        try {
          d = o("WAWebMobilePlatforms").isSMB()
            ? await o(
                "WAWebQuickPromotionActionMutation",
              ).executeQuickPromotionActionMutation({
                event: "VIEW",
                promotion_id: n,
                surface_nux_id: i,
                promotion_logging_data: a,
                client_time: r,
              })
            : await o(
                "WAWebConsumerQuickPromotionActionMutation",
              ).executeConsumerQuickPromotionActionMutation({
                event: "VIEW",
                promotion_id: n,
                surface_nux_id: i,
                promotion_logging_data: "",
                client_time: r,
              });
        } catch (e) {
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "impressionOnQuickPromotion: unable to log through GraphQL",
              ])),
          );
        }
        if (((l = d) == null ? void 0 : l.type) !== "not-enabled") return;
        d.type;
      }
      var m = await o("WASmaxInAppCommsEventRPC").sendEventRPC({
        eventType: "impression",
        eventPromotionId: n,
        eventTimestampSec: r,
        eventLogdata: a,
      });
      m.name !== "EventResponseSuccess" &&
        (m.name,
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "impressionOnQuickPromotion: unable to log",
            ])),
        ));
    }
    var p = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", d)
      .finalStep("reportToComms", m)
      .end();
    l.impressionOnQuickPromotion = p;
  },
  98,
);
