__d(
  "WAWebJobUserExposureToQuickPromotion",
  [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebDefinePersistedJob",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebWorkerSafeBackendApi",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("requireDeferred")("QpExposureFalcoEvent").__setRef(
        "WAWebJobUserExposureToQuickPromotion",
      );
    function d(t) {
      var n = t.experimentKey,
        r = t.exposureHoldout,
        a = t.id;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["quick-promotions"], async function (t) {
          var i = t[0],
            l = await i.get(a);
          if (l == null) return { status: "not-found", whatsappGkEnabled: !1 };
          var s = o(
            "WAWebQuickPromotionValidatorUtils",
          ).isWhatsappGkEnabledPromotion(l.data);
          if (s) return { status: "gk", whatsappGkEnabled: s };
          if (n.length === 0)
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "userExposureToQuickPromotion: missing experiment key",
                    ])),
                )
                .sendLogs("user-exposure-quick-promotion-missing-exp-key"),
              { status: "missing-key", whatsappGkEnabled: !1 }
            );
          if (r == null) return { status: "old-job", whatsappGkEnabled: s };
          var u = l.tracking,
            c = u.lastLoggedExposure;
          if (c != null && c.experimentKey === n && c.exposureHoldout === r)
            return { status: "deduped", whatsappGkEnabled: s };
          var d = babelHelpers.extends({}, u, {
            lastLoggedExposure: { experimentKey: n, exposureHoldout: r },
          });
          return (
            await i.merge(a, { tracking: d }),
            { status: "updated", whatsappGkEnabled: s }
          );
        })
        .then(function (e) {
          return e.status === "updated"
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
    async function m(e, t) {
      var n = t.experimentKey,
        r = t.id,
        a = t.ts;
      if (
        e.status === "not-found" ||
        e.status === "missing-key" ||
        e.status === "deduped"
      ) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "userExposureToQuickPromotion: skipping comms step: ",
              "",
            ])),
          e.status,
        );
        return;
      }
      e.whatsappGkEnabled ? _(r) : await p({ experimentKey: n, id: r, ts: a });
    }
    async function p(e) {
      var t = e.experimentKey,
        n = e.id,
        r = e.ts,
        a = await o("WASmaxInAppCommsEventRPC").sendEventRPC({
          eventType: "exposure",
          eventPromotionId: n,
          eventTimestampSec: r,
          eventLogdata: t,
        });
      a.name !== "EventResponseSuccess" &&
        (a.name,
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "userExposureToQuickPromotion: unable to log",
            ])),
        ));
    }
    function _(e) {
      c.onReady(function (t) {
        t.log(function () {
          return { promotion_id: e };
        });
      });
    }
    var f = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", d)
      .finalStep("reportToComms", m)
      .end();
    ((l.reportViaFalco = _), (l.userExposureToQuickPromotion = f));
  },
  98,
);
