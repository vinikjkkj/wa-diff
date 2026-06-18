__d(
  "WAWebDebugQuickPromotions",
  [
    "WASmaxInAppCommsEventRPC",
    "WATimeUtils",
    "WAWebConsumerQuickPromotionActionMutation",
    "WAWebFetchQuickPromotions",
    "WAWebJobUserExposureToQuickPromotion",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionActionMutation",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebSchemaQuickPromotions",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "whatsapp_gk_enabled";
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["quick-promotions"], function (e) {
          var t = e[0];
          return t.clear();
        });
    }
    ((s.doc = "delete the Quick Promotion local cache"),
      (s.paramsToExecute = []));
    function u() {
      return o("WAWebFetchQuickPromotions")
        .fetchQuickPromotions()
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((u.doc = "Fetch quick promotions"), (u.paramsToExecute = []));
    function c() {
      return o("WAWebSchemaQuickPromotions")
        .getQuickPromotionsTable()
        .all()
        .then(function (e) {
          return e;
        });
    }
    ((c.doc = "Get the Quick Promotion local cache"), (c.paramsToExecute = []));
    function d(e) {
      e !== "" && o("WAWebJobUserExposureToQuickPromotion").reportViaFalco(e);
    }
    ((d.doc =
      "Log a QP qp_exposure Falco event for a given promotion id (the whatsapp_gk_enabled exposure path). Fire-and-forget \u2014 verify server-side."),
      (d.paramsToExecute = [""]));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (t === "") return "no-id";
          var r = yield o("WAWebSchemaQuickPromotions")
            .getQuickPromotionsTable()
            .get(t);
          if (r == null) return "not-found";
          var a =
            o(
              "WAWebQuickPromotionValidatorUtils",
            ).getQuickPromotionContentAttribute(r.data, e) === "true";
          if (a)
            return (
              o("WAWebJobUserExposureToQuickPromotion").reportViaFalco(t),
              "falco"
            );
          var i = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
            eventType: "exposure",
            eventPromotionId: t,
            eventTimestampSec: o("WATimeUtils").unixTime(),
            eventLogdata: (n = r.data.qpConfigExperimentKey) != null ? n : "",
          });
          return i.name;
        })),
        p.apply(this, arguments)
      );
    }
    ((m.doc =
      "Log a QP exposure: Falco for whatsapp_gk_enabled promotions, otherwise the traditional IQ comms event. Returns the path taken / server result."),
      (m.paramsToExecute = [""]));
    function _(e) {
      return o("WAWebSchemaQuickPromotions")
        .getQuickPromotionsTable()
        .get(e)
        .then(function (e) {
          var t;
          if (e == null) return null;
          var n =
              (t = e.data.qpConfigInstanceLogData) == null
                ? void 0
                : t.elementValue,
            r = "";
          if (n != null) for (var o of n) r += String.fromCharCode(o);
          return { surfaceId: e.surfaceId, instanceLogData: r };
        });
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "") return "no-id";
          var t = yield _(e);
          if (t == null) return "not-found";
          var n = o("WATimeUtils").unixTime(),
            r = o("WAWebMobilePlatforms").isSMB()
              ? yield o(
                  "WAWebQuickPromotionActionMutation",
                ).executeQuickPromotionActionMutation({
                  event: "VIEW",
                  promotion_id: e,
                  surface_nux_id: t.surfaceId,
                  promotion_logging_data: t.instanceLogData,
                  client_time: n,
                })
              : yield o(
                  "WAWebConsumerQuickPromotionActionMutation",
                ).executeConsumerQuickPromotionActionMutation({
                  event: "VIEW",
                  promotion_id: e,
                  surface_nux_id: t.surfaceId,
                  promotion_logging_data: "",
                  client_time: n,
                });
          return r.type;
        })),
        g.apply(this, arguments)
      );
    }
    ((f.doc =
      "Log a QP VIEW (impression) via the GraphQL action mutation; returns the server result type."),
      (f.paramsToExecute = [""]));
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "") return "no-id";
          var t = yield _(e);
          if (t == null) return "not-found";
          var n = o("WATimeUtils").unixTime(),
            r = o("WAWebMobilePlatforms").isSMB()
              ? yield o(
                  "WAWebQuickPromotionActionMutation",
                ).executeQuickPromotionActionMutation({
                  event: "ACTION",
                  action: "PRIMARY",
                  promotion_id: e,
                  surface_nux_id: t.surfaceId,
                  promotion_logging_data: t.instanceLogData,
                  client_time: n,
                })
              : yield o(
                  "WAWebConsumerQuickPromotionActionMutation",
                ).executeConsumerQuickPromotionActionMutation({
                  event: "ACTION",
                  action: "PRIMARY",
                  promotion_id: e,
                  surface_nux_id: t.surfaceId,
                  promotion_logging_data: "",
                  client_time: n,
                });
          return r.type;
        })),
        y.apply(this, arguments)
      );
    }
    ((h.doc =
      "Log a QP primary action click via the GraphQL action mutation; returns the server result type."),
      (h.paramsToExecute = [""]));
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "") return "no-id";
          var t = yield _(e);
          if (t == null) return "not-found";
          var n = o("WATimeUtils").unixTime(),
            r = o("WAWebMobilePlatforms").isSMB()
              ? yield o(
                  "WAWebQuickPromotionActionMutation",
                ).executeQuickPromotionActionMutation({
                  event: "ACTION",
                  action: "DISMISS",
                  promotion_id: e,
                  surface_nux_id: t.surfaceId,
                  promotion_logging_data: t.instanceLogData,
                  client_time: n,
                })
              : yield o(
                  "WAWebConsumerQuickPromotionActionMutation",
                ).executeConsumerQuickPromotionActionMutation({
                  event: "ACTION",
                  action: "DISMISS",
                  promotion_id: e,
                  surface_nux_id: t.surfaceId,
                  promotion_logging_data: "",
                  client_time: n,
                });
          return r.type;
        })),
        b.apply(this, arguments)
      );
    }
    ((C.doc =
      "Log a QP dismiss via the GraphQL action mutation; returns the server result type."),
      (C.paramsToExecute = [""]));
    function v(e) {
      return o("WAWebQuickPromotionActionMutation")
        .executeQuickPromotionActionMutation(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    var S = {
      deleteAllQPPromotions: s,
      fetchQuickPromotions: u,
      getAllQPPromotions: c,
      logQpExposureViaFalco: d,
      logQpExposure: m,
      logQpImpression: f,
      logQpPrimaryClick: h,
      logQpDismiss: C,
      executeQuickPromotionActionMutation: v,
    };
    l.default = S;
  },
  98,
);
