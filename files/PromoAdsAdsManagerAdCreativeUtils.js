__d(
  "PromoAdsAdsManagerAdCreativeUtils",
  [
    "$InternalEnum",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "immutable",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "PRIMARY_TEXT",
        "HEADLINE",
        "DESCRIPTION",
      ]),
      s = n("$InternalEnum").Mirrored(["REGEX", "EXTENDED_REGEX", "LLM"]),
      u = [6, 24];
    function c(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return !u.includes(e);
        })
      );
    }
    function d(e, t) {
      return (
        (e != null && e.toUpperCase() !== "US") ||
        (t != null && t.toUpperCase() !== "USD")
      );
    }
    function m(e, t, n) {
      return c(e) || d(t, n);
    }
    function p(t, n) {
      var o = _(t, n, e.PRIMARY_TEXT);
      if (!r("isStringNullOrEmpty")(o.code))
        return babelHelpers.extends({}, o, {
          source: "AD_CREATIVE_PRIMARY_TEXT",
        });
      var a = _(t, n, e.HEADLINE);
      if (!r("isStringNullOrEmpty")(a.code))
        return babelHelpers.extends({}, a, { source: "AD_CREATIVE_HEADLINE" });
      var i = _(t, n, e.DESCRIPTION);
      return r("isStringNullOrEmpty")(i.code)
        ? null
        : babelHelpers.extends({}, i, { source: "AD_CREATIVE_DESCRIPTION" });
    }
    function _(t, n, a) {
      var i = "";
      switch (a) {
        case e.PRIMARY_TEXT:
          i = r("AdsAdgroupSemanticFields").message.get(n, t);
          break;
        case e.HEADLINE:
          if (
            ((i = r("AdsAdgroupSemanticFields").headline.get(n, t)),
            i == null || i === "")
          )
            return f(t, a);
          break;
        case e.DESCRIPTION:
          if (
            ((i = r("AdsAdgroupSemanticFields").linkDescription.get(n, t)),
            i == null || i === "")
          )
            return f(t, a);
          break;
      }
      if (i === null) return { code: "", extractionFeatureType: null };
      if (typeof i == "string")
        return o("PromoAdsAdsManagerCouponCodeUtils").extractCouponCodeFromText(
          i,
        );
      var l = [];
      return (
        r("immutable").List.isList(i) &&
          i.forEach(function (e, t) {
            var n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(i, "text", t);
            if (!r("isStringNullOrEmpty")(n)) {
              var a = o(
                "PromoAdsAdsManagerCouponCodeUtils",
              ).extractCouponCodeFromText(n);
              r("isStringNullOrEmpty")(a.code) || l.push(a);
            }
          }),
        l.length > 0 ? l[0] : { code: "", extractionFeatureType: null }
      );
    }
    function f(t, n) {
      var a,
        i =
          (a = t.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null
            ? void 0
            : a.child_attachments;
      if (i == null || !r("immutable").List.isList(i))
        return { code: "", extractionFeatureType: null };
      for (
        var l = n === e.HEADLINE ? "name" : "description", s = 0;
        s < i.size;
        s++
      ) {
        var u = i.get(s);
        if (u != null) {
          var c = u.get(l);
          if (typeof c == "string" && !r("isStringNullOrEmpty")(c)) {
            var d = o(
              "PromoAdsAdsManagerCouponCodeUtils",
            ).extractCouponCodeFromText(c);
            if (!r("isStringNullOrEmpty")(d.code)) return d;
          }
        }
      }
      return { code: "", extractionFeatureType: null };
    }
    function g(e, t, n, o) {
      var a = h(e, t, n, o, "AD_CREATIVE_PRIMARY_TEXT");
      return r("isStringNullOrEmpty")(a.code)
        ? ((a = h(e, t, n, o, "AD_CREATIVE_HEADLINE")),
          r("isStringNullOrEmpty")(a.code)
            ? ((a = h(e, t, n, o, "AD_CREATIVE_DESCRIPTION")),
              r("isStringNullOrEmpty")(a.code)
                ? null
                : babelHelpers.extends({}, a, {
                    source: "AD_CREATIVE_DESCRIPTION",
                  }))
            : babelHelpers.extends({}, a, { source: "AD_CREATIVE_HEADLINE" }))
        : babelHelpers.extends({}, a, { source: "AD_CREATIVE_PRIMARY_TEXT" });
    }
    function h(t, n, a, i, l) {
      var s, u, c;
      if (l === "AD_CREATIVE_PRIMARY_TEXT") {
        var d,
          m,
          p =
            l === i && n < 0
              ? a
              : (d = t.creative) == null ||
                  (d = d.object_story_spec) == null ||
                  (d = d.link_data) == null
                ? void 0
                : d.message;
        if (
          !r("isStringNullOrEmpty")(p) &&
          ((c = o(
            "PromoAdsAdsManagerCouponCodeUtils",
          ).extractCouponCodeFromText(p)),
          !r("isStringNullOrEmpty")(c.code))
        )
          return c;
        u =
          (m = t.creative) == null || (m = m.asset_feed_spec) == null
            ? void 0
            : m.bodies;
      } else if (l === "AD_CREATIVE_HEADLINE") {
        var _,
          g,
          h =
            l === i && n < 0
              ? a
              : (_ = t.creative) == null ||
                  (_ = _.object_story_spec) == null ||
                  (_ = _.link_data) == null
                ? void 0
                : _.name;
        if (
          !r("isStringNullOrEmpty")(h) &&
          ((c = o(
            "PromoAdsAdsManagerCouponCodeUtils",
          ).extractCouponCodeFromText(h)),
          !r("isStringNullOrEmpty")(c.code))
        )
          return c;
        var y = f(t, e.HEADLINE);
        if (!r("isStringNullOrEmpty")(y.code)) return y;
        u =
          (g = t.creative) == null || (g = g.asset_feed_spec) == null
            ? void 0
            : g.titles;
      } else {
        var C,
          b,
          v =
            l === i && n < 0
              ? a
              : (C = t.creative) == null ||
                  (C = C.object_story_spec) == null ||
                  (C = C.link_data) == null
                ? void 0
                : C.description;
        if (
          !r("isStringNullOrEmpty")(v) &&
          ((c = o(
            "PromoAdsAdsManagerCouponCodeUtils",
          ).extractCouponCodeFromText(v)),
          !r("isStringNullOrEmpty")(c.code))
        )
          return c;
        var S = f(t, e.DESCRIPTION);
        if (!r("isStringNullOrEmpty")(S.code)) return S;
        u =
          (b = t.creative) == null || (b = b.asset_feed_spec) == null
            ? void 0
            : b.descriptions;
      }
      if (u === null || !(u instanceof r("immutable").List))
        return { code: "", extractionFeatureType: null };
      var R = { code: "", extractionFeatureType: null };
      return (
        (s = u) == null ||
          s.some(function (e, t) {
            var s = t === n && i === l ? a : e.get("text");
            if (s !== null && typeof s == "string") {
              var u = o(
                "PromoAdsAdsManagerCouponCodeUtils",
              ).extractCouponCodeFromText(String(s));
              if (!r("isStringNullOrEmpty")(u.code)) return ((R = u), !0);
            }
          }),
        R
      );
    }
    function y(e) {
      var t = new Set([
        "BIZAI_CUA_VALIDATED_PROMO_CODES",
        "DETECTED_FROM_MERCHANT_ADS",
        "DETECTED_FROM_MERCHANT_WEBSITE",
        "PROVIDED_BY_MERCHANT",
        "PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT",
      ]);
      return e.intersection(t).size > 0;
    }
    function C(e) {
      return e
        .filter(function (e) {
          return y(e.sources);
        })
        .map(function (e) {
          return e.id;
        });
    }
    function b(e) {
      var t;
      return !e || e.length === 0
        ? null
        : (t = e.filter(function (e) {
              var t = e.offerDetectionSources
                ? new Set(e.offerDetectionSources)
                : new Set();
              return e.id != null && y(t);
            })) == null ||
            (t = t.map(function (e) {
              return e.id;
            })) == null
          ? void 0
          : t.filter(function (e) {
              return e != null;
            });
    }
    function v(e, t) {
      var n,
        r,
        o =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.link_data,
        a =
          t === "body"
            ? o == null
              ? void 0
              : o.message
            : t === "title"
              ? o == null
                ? void 0
                : o.name
              : o == null
                ? void 0
                : o.description;
      if (typeof a == "string" && a !== "") return a;
      var i =
          t === "body" ? "bodies" : t === "title" ? "titles" : "descriptions",
        l =
          (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r[i];
      if (l == null || !Array.isArray(l)) return "";
      for (var s of l)
        if (s != null) {
          var u = s.text;
          if (typeof u == "string" && u !== "") return u;
        }
      return "";
    }
    function S(e, t) {
      var n,
        r =
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.child_attachments;
      if (r == null || !Array.isArray(r)) return "";
      for (var o of r)
        if (o != null) {
          var a = t === "name" ? o.name : o.description;
          if (typeof a == "string" && a !== "") return a;
        }
      return "";
    }
    function R(e, t, n, r) {
      return typeof e == "string" && e !== ""
        ? e
        : typeof e != "string" && t != null
          ? v(t, n)
          : r != null && t != null
            ? S(t, r)
            : typeof e == "string"
              ? e
              : "";
    }
    ((l.PromoCodeExtractionField = e),
      (l.PromoCodeExtractionFeatureType = s),
      (l.isTargetingNonEnglishAudience = c),
      (l.isLikelyI18nSeller = m),
      (l.getFirstCouponCodeFromAdgroup = p),
      (l.getCouponCodeFromAdgroup = _),
      (l.getFirstCouponCodeMessageFromAllMessageVariants = g),
      (l.hasAllowedDetectionSource = y),
      (l.filterCouponCodesForPromotionalMetadata = C),
      (l.filterValidPromoOffersIDs = b),
      (l.getEffectiveTextForLLMExtraction = R));
  },
  98,
);
