__d(
  "WAWebJobUserExposureToQuickPromotion",
  [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebDefinePersistedJob",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
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
      var r = t.experimentKey,
        a = t.exposureHoldout,
        i = t.id;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["quick-promotions"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  l = yield n.get(i);
                if (l == null)
                  return { status: "not-found", whatsappGkEnabled: !1 };
                var s = o(
                  "WAWebQuickPromotionValidatorUtils",
                ).isWhatsappGkEnabledPromotion(l.data);
                if (s) return { status: "gk", whatsappGkEnabled: s };
                if (r.length === 0)
                  return (
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "userExposureToQuickPromotion: missing experiment key",
                          ])),
                      )
                      .sendLogs(
                        "user-exposure-quick-promotion-missing-exp-key",
                      ),
                    { status: "missing-key", whatsappGkEnabled: !1 }
                  );
                if (a == null)
                  return { status: "old-job", whatsappGkEnabled: s };
                var u = l.tracking,
                  c = u.lastLoggedExposure;
                if (
                  c != null &&
                  c.experimentKey === r &&
                  c.exposureHoldout === a
                )
                  return { status: "deduped", whatsappGkEnabled: s };
                var d = babelHelpers.extends({}, u, {
                  lastLoggedExposure: { experimentKey: r, exposureHoldout: a },
                });
                return (
                  yield n.merge(i, { tracking: d }),
                  { status: "updated", whatsappGkEnabled: s }
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          e.whatsappGkEnabled
            ? g(r)
            : yield _({ experimentKey: n, id: r, ts: a });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.experimentKey,
            n = e.id,
            r = e.ts,
            a = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
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
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      c.onReady(function (t) {
        t.log(function () {
          return { promotion_id: e };
        });
      });
    }
    var h = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .step("saveToDb", d)
      .finalStep("reportToComms", m)
      .end();
    ((l.reportViaFalco = g), (l.userExposureToQuickPromotion = h));
  },
  98,
);
