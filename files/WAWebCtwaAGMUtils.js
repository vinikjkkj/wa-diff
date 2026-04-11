__d(
  "WAWebCtwaAGMUtils",
  ["WALogger", "WAWebBizGatingUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { URL: "url", CALL: "call", CATALOG: "catalog", FLOW: "flow" },
      u = {
        FACEBOOK: "facebook",
        INSTAGRAM: "instagram",
        WHATSAPP: "whatsapp",
      };
    function c(t) {
      if (t.ctaPayload == null) return null;
      try {
        var n,
          a = JSON.parse(t.ctaPayload);
        return {
          ctaType: a.cta_type,
          ctaText: a.cta_text,
          ctaPayload: (n = a.cta_payload) != null ? n : null,
        };
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: cannot parse CtWA CTA payload: ",
                "",
              ])),
            r("getErrorSafe")(t).stack,
          ),
          null
        );
      }
    }
    function d(e) {
      var t = o("WAWebBizGatingUtils").getFmxAgmEnabled();
      return o("WAWebBizGatingUtils").getWamoAgmEnabled()
        ? t
        : t && e !== u.WHATSAPP;
    }
    ((l.AGM_CTA_TYPE = s),
      (l.AGM_SOURCE_APP = u),
      (l.extractAGMPayload = c),
      (l.isWamoAGMIntegrationEnabled = d));
  },
  98,
);
