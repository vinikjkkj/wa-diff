__d(
  "WAWebQuickPromotionValidatorUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WATimeUtils").castUnixTimeToMillisTime(e),
        r = o("WATimeUtils").millisTime() - n,
        a = r <= t;
      return a;
    }
    function s(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.key,
            r = e.value;
          n == null || r == null || t.set(n, r);
        }),
        t
      );
    }
    function u(e, t) {
      var n,
        r,
        o = (n = e.contentAttributes) == null ? void 0 : n.attribute;
      if (o == null) return null;
      var a = o.find(function (e) {
        return e.key === t;
      });
      return (r = a == null ? void 0 : a.value) != null ? r : null;
    }
    var c = "whatsapp_gk_enabled";
    function d(e) {
      return u(e, c) === "true";
    }
    function m(e) {
      return e === !1 ? "server" : "client";
    }
    function p(e) {
      return e.qpConfigExposureStrategy !== "server";
    }
    ((l.checkIsWithinEligibilityWindow = e),
      (l.convertFilterParametersIntoMap = s),
      (l.getQuickPromotionContentAttribute = u),
      (l.isWhatsappGkEnabledPromotion = d),
      (l.toQuickPromotionExposureStrategy = m),
      (l.shouldLogExposureOnClient = p));
  },
  98,
);
