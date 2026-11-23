__d(
  "CTWAAGMCTADefaultingUtils",
  [
    "AdsWhatsAppNumberUtils",
    "CTWAAGMCTAOwnershipUtils",
    "CTWAAGMCallKeywordUtils",
    "ClickToMessageCTWAFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        /^https:\/\/[a-zA-Z0-9][-a-zA-Z0-9]*(\.[a-zA-Z0-9][-a-zA-Z0-9]*)+(:\d+)?(\/[^\s]*)?$/,
      s = /https:\/\/[^\s<>\"\'`]+/g,
      u = /[.,!?;:\"\'\]]+$/;
    function c(e, t, n, r) {
      var o;
      return (
        e === r.ctaType &&
        t === ((o = r.url) != null ? o : null) &&
        n === r.source
      );
    }
    function d(t) {
      if (t == null) return null;
      var n = t.split(",");
      for (var r of n) {
        var o = r.trim();
        if (o !== "" && e.test(o)) return o;
      }
      return null;
    }
    function m(e, t) {
      return (
        t === void 0 && (t = e !== void 0),
        t
          ? e == null || e.trim() === ""
            ? "none"
            : d(e) == null
              ? "invalid"
              : "valid"
          : "unavailable"
      );
    }
    function p(t) {
      if (t == null || t === "") return null;
      s.lastIndex = 0;
      for (var n = s.exec(t); n != null; ) {
        for (
          var r = n[0].replace(u, "");
          r.endsWith(")") && r.split(")").length > r.split("(").length;
        )
          r = r.slice(0, -1);
        if (e.test(r)) return r;
        n = s.exec(t);
      }
      return null;
    }
    function _(e, t) {
      var n = p(e);
      if (n != null) return { source: "primary_text", url: n };
      var r = d(t == null ? void 0 : t.website);
      if (r != null) return { source: "page_website", url: r };
      var o = d(t == null ? void 0 : t.link_in_bio),
        a = t == null ? void 0 : t.link_in_bio_source;
      if (o != null) {
        var i =
          a === "PAGE_PROFILE_BIO"
            ? "page_profile_bio"
            : a === "INSTAGRAM_BIO"
              ? "instagram_bio"
              : "bio_source_unknown";
        return { source: i, url: o };
      }
      return {
        source:
          t == null || a == null || a === "UNAVAILABLE"
            ? "unavailable"
            : "none",
        url: null,
      };
    }
    var f = { ctaType: "none", source: "none" };
    function g(e) {
      var t,
        n,
        r = e.adAccountVertical,
        a = e.headlineText,
        i = e.page,
        l = e.pageWhatsAppNumberID,
        s = e.primaryText,
        u = i
          ? ((t = o("AdsWhatsAppNumberUtils").getWhatsappInfoForNumber(i, l)) ==
            null
              ? void 0
              : t.is_calling_enabled) === !0
          : !1;
      if (u && o("CTWAAGMCallKeywordUtils").hasCallKeywordIntent(s, a))
        return { ctaType: "call", source: "call_now" };
      var c = _(s, i).url;
      if (c != null) return { ctaType: "url", source: "visit_website", url: c };
      var d =
        (n = i == null ? void 0 : i.has_whatsapp_catalog) != null ? n : !1;
      return d &&
        o("ClickToMessageCTWAFeatureGating").isAssistedShoppingVertical(r)
        ? { ctaType: "catalog", source: "view_catalog" }
        : f;
    }
    function h(e) {
      var t = e.withExposureLogging,
        n = t === void 0 ? !0 : t;
      return o("ClickToMessageCTWAFeatureGating").isAGMCTADefaultingEnabled(n)
        ? g({
            adAccountVertical: e.adAccountVertical,
            headlineText: e.headlineText,
            page: e.page,
            pageWhatsAppNumberID: e.pageWhatsAppNumberID,
            primaryText: e.primaryText,
          })
        : f;
    }
    ((l.AGM_CTA_DEFAULT_SOURCE_FIELD = o(
      "CTWAAGMCTAOwnershipUtils",
    ).AGM_CTA_DEFAULT_SOURCE_FIELD),
      (l.AGM_CTA_DEFAULT_URL_FIELD = o(
        "CTWAAGMCTAOwnershipUtils",
      ).AGM_CTA_DEFAULT_URL_FIELD),
      (l.isAGMCTAStillDefaulted = o(
        "CTWAAGMCTAOwnershipUtils",
      ).isAGMCTAStillDefaulted),
      (l.isAGMCTADefaultUpToDate = c),
      (l.getAGMWebsiteObservationStatus = m),
      (l.resolveAGMWebsiteCandidate = _),
      (l.resolveAGMCTAEligibility = g),
      (l.resolveDefaultAGMCTA = h));
  },
  98,
);
