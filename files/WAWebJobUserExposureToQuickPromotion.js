__d(
  "WAWebJobUserExposureToQuickPromotion",
  [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebDefinePersistedJob",
    "WAWebModelStorageUtils",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = t.experimentKey,
        r = t.exposureHoldout,
        a = t.id;
      return n.length === 0
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
            .lock(["quick-promotions"], async function (e) {
              var t = e[0],
                o = await t.get(a);
              if (o == null) return "not-found";
              if (r == null) return "old-job";
              var i = o.tracking,
                l = i.lastLoggedExposure;
              if (l != null && l.experimentKey === n && l.exposureHoldout === r)
                return "deduped";
              var s = babelHelpers.extends({}, i, {
                lastLoggedExposure: { experimentKey: n, exposureHoldout: r },
              });
              return (await t.merge(a, { tracking: s }), "updated");
            })
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
    async function d(e, t) {
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
      var i = await o("WASmaxInAppCommsEventRPC").sendEventRPC({
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
    }
    var m = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", c)
      .finalStep("reportToComms", d)
      .end();
    l.userExposureToQuickPromotion = m;
  },
  98,
);
