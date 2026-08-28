__d(
  "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
  ["AdsStrings", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return t
        ? o("AdsStrings").PublishMessageButtonLabel
        : e.length > 0
          ? o("AdsStrings").PublishAdOnlyButtonLabel
          : o("AdsStrings").PublishAdAndMessageButtonLabel;
    }
    function s() {
      return r("gkx")("13496");
    }
    function u() {
      return r("gkx")("362");
    }
    function c(e) {
      var t,
        n,
        r,
        o = (t = e.publisher_platforms) != null ? t : [],
        a = (n = e.whatsapp_positions) != null ? n : [],
        i = (r = e.messenger_positions) != null ? r : [];
      return (
        (o.includes("whatsapp") && a.includes("marketing_messages")) ||
        (o.includes("messenger") && i.includes("marketing_messages"))
      );
    }
    function d(e) {
      var t;
      if (e == null) return !1;
      var n = (t = e.publisher_platforms) != null ? t : [],
        r = Array.isArray(n) ? n.length : n.size;
      if (r === 0) return !1;
      var o = function (n) {
        if (n === "whatsapp") {
          var t,
            r = (t = e.whatsapp_positions) != null ? t : [],
            o = Array.isArray(r) ? r.length : r.size;
          return o === 1 && r.includes("marketing_messages");
        }
        if (n === "messenger") {
          var a,
            i = (a = e.messenger_positions) != null ? a : [],
            l = Array.isArray(i) ? i.length : i.size;
          return l === 1 && i.includes("marketing_messages");
        }
        return !1;
      };
      return Array.isArray(n) ? n.every(o) : n.toArray().every(o);
    }
    ((l.getMessageMarketingAdgroupPublishButtonLabel = e),
      (l.isAdAccountEligibleForMessageMarketingLiquidity = s),
      (l.isAdAccountEligibleForMessengerMarketingLiquidity = u),
      (l.hasMessageMarketingTargeting = c),
      (l.hasOnlyMarketingMessagesTargeting = d));
  },
  98,
);
