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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "whatsapp_gk_enabled";
    function s() {
      return (
        r("vulture")("NdrX2SZS0yOgWtVAMtSLwIcJG6c="),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["quick-promotions"], function (e) {
            var t = e[0];
            return (r("vulture")("j53pDrFnI30UD75X8emVjKUoz_M="), t.clear());
          })
      );
    }
    ((s.doc = "delete the Quick Promotion local cache"),
      (s.paramsToExecute = []));
    function u() {
      return (
        r("vulture")("OD4l0JtI8qYM-f5nD6nZsohxJLw="),
        o("WAWebFetchQuickPromotions")
          .fetchQuickPromotions()
          .then(function (e) {
            r("vulture")("hmHqKi-1fOOtQwb85IEhYA9papU=");
          })
          .catch(function (e) {})
      );
    }
    ((u.doc = "Fetch quick promotions"), (u.paramsToExecute = []));
    function c() {
      return (
        r("vulture")("Qr_TeyVmSWmnw-EAS_VrPlr57JM="),
        o("WAWebSchemaQuickPromotions")
          .getQuickPromotionsTable()
          .all()
          .then(function (e) {
            return (r("vulture")("LlnEFFqg_NGq556x6esDuqAqYDU="), e);
          })
      );
    }
    ((c.doc = "Get the Quick Promotion local cache"), (c.paramsToExecute = []));
    function d(e) {
      (r("vulture")("vv0mhgcb90UzE7zH7bK6G8PaYLY="),
        e !== "" &&
          o("WAWebJobUserExposureToQuickPromotion").reportViaFalco(e));
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
          if ((r("vulture")("H_mP1jwj8BFoy6E5lGMkWtAAudw="), t === ""))
            return "no-id";
          var a = yield o("WAWebSchemaQuickPromotions")
            .getQuickPromotionsTable()
            .get(t);
          if (a == null) return "not-found";
          var i =
            o(
              "WAWebQuickPromotionValidatorUtils",
            ).getQuickPromotionContentAttribute(a.data, e) === "true";
          if (i)
            return (
              o("WAWebJobUserExposureToQuickPromotion").reportViaFalco(t),
              "falco"
            );
          var l = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
            eventType: "exposure",
            eventPromotionId: t,
            eventTimestampSec: o("WATimeUtils").unixTime(),
            eventLogdata: (n = a.data.qpConfigExperimentKey) != null ? n : "",
          });
          return l.name;
        })),
        p.apply(this, arguments)
      );
    }
    ((m.doc =
      "Log a QP exposure: Falco for whatsapp_gk_enabled promotions, otherwise the traditional IQ comms event. Returns the path taken / server result."),
      (m.paramsToExecute = [""]));
    function _(e) {
      return (
        r("vulture")("4_ON9E4MpzcjyeuOZh3GeF1ip-s="),
        o("WAWebSchemaQuickPromotions")
          .getQuickPromotionsTable()
          .get(e)
          .then(function (e) {
            var t;
            if ((r("vulture")("UVTpmy-479NQ4bG7geANaF4Sf2k="), e == null))
              return null;
            var n =
                (t = e.data.qpConfigInstanceLogData) == null
                  ? void 0
                  : t.elementValue,
              o = "";
            if (n != null) for (var a of n) o += String.fromCharCode(a);
            return { surfaceId: e.surfaceId, instanceLogData: o };
          })
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((r("vulture")("8lR9b5BXWZGyfoYbQTCx96pDv3g="), e === ""))
            return "no-id";
          var t = yield _(e);
          if (t == null) return "not-found";
          var n = o("WATimeUtils").unixTime(),
            a = o("WAWebMobilePlatforms").isSMB()
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
          return a.type;
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
          if ((r("vulture")("OI_OC0NtsE8okcO6BEU829neKCw="), e === ""))
            return "no-id";
          var t = yield _(e);
          if (t == null) return "not-found";
          var n = o("WATimeUtils").unixTime(),
            a = o("WAWebMobilePlatforms").isSMB()
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
          return a.type;
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
          if ((r("vulture")("1t_mw1kYQJ3O4yx1dh17f1kYzB0="), e === ""))
            return "no-id";
          var t = yield _(e);
          if (t == null) return "not-found";
          var n = o("WATimeUtils").unixTime(),
            a = o("WAWebMobilePlatforms").isSMB()
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
          return a.type;
        })),
        b.apply(this, arguments)
      );
    }
    ((C.doc =
      "Log a QP dismiss via the GraphQL action mutation; returns the server result type."),
      (C.paramsToExecute = [""]));
    function v(e) {
      return (
        r("vulture")("fITeP5gs9ocjdU5vk_pGTuiu5kw="),
        o("WAWebQuickPromotionActionMutation")
          .executeQuickPromotionActionMutation(e)
          .then(function (e) {
            r("vulture")("kjfaLrw0LTIcvNhlgEjxc6YFPRA=");
          })
          .catch(function (e) {})
      );
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
