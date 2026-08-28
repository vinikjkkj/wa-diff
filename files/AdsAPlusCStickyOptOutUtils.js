__d(
  "AdsAPlusCStickyOptOutUtils",
  [
    "AdsAPlusCVideoUncropUtils",
    "AdsAplusCAnimationUtils",
    "AdsUserSettingsProvider",
    "ODS",
    "adsAdAccountStickyConfigSelector",
    "gkx",
    "justknobx",
    "passAPlusCStickyOptOutForFastTrackGlobalishGK",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      (e || (e = o("ODS"))).bumpEntityKey(6304, "aplusc_sticky_gate." + t, n);
    }
    var u = new Set(["replaceMediaText"]);
    function c(e) {
      return u.has(e);
    }
    function d(e, t) {
      var n, o;
      if (!r("passAPlusCStickyOptOutForFastTrackGlobalishGK")()) return !1;
      if ((e == null || (n = e.get(t)) == null ? void 0 : n.shouldOptIn) === !1)
        return !0;
      if ((e == null ? void 0 : e.get(t)) != null) return !1;
      var a =
        (o = r("AdsUserSettingsProvider")()) == null ||
        (o = o.getData()) == null ||
        (o = o.first()) == null
          ? void 0
          : o.getValue();
      if (a == null) return !1;
      switch (t) {
        case "replaceMediaText":
          return a.replace_media_text_opt_in_status === "OPTED_OUT";
        case "carouselToVideo":
          return a.carousel_to_video_opt_in_status === "OPTED_OUT";
        case "imageBackgroundGen":
          return a.image_background_generation_opt_in_status === "OPTED_OUT";
        case "aPlusCLocalStoreExtension":
          return a.aplusc_local_store_extension_opt_in_status === "OPTED_OUT";
        default:
          return !1;
      }
    }
    function m(e) {
      return o("AdsAplusCAnimationUtils").passAnimationUnificationGK(
        "silent",
      ) && e === "image_animation"
        ? "cv_transformation"
        : o("AdsAPlusCVideoUncropUtils").passVideoUncropUnificationGk(
              "silent",
            ) && e === "video_auto_crop"
          ? "video_uncrop"
          : null;
    }
    function p(e) {
      var t, n, a;
      if (
        r("justknobx")._("2009") &&
        (e === "product_extensions" || e === "site_extensions")
      )
        return {
          isOptedOut: !1,
          outcome: "pe_se_sticky_disabled",
          source: null,
        };
      if (!r("passAPlusCStickyOptOutForFastTrackGlobalishGK")())
        return { isOptedOut: !1, outcome: "gk_off", source: null };
      var i = r("gkx")("3951");
      if (i) {
        var l = o(
          "adsAdAccountStickyConfigSelector",
        ).getAPlusCAdAccountStickyEntryForSelectedAccount(e);
        if (l != null) {
          var s = l.status === "OPTED_OUT";
          return {
            isOptedOut: s,
            outcome: s ? "blocked_optin" : "passed",
            source: "new_store",
          };
        }
      }
      var u =
          (t = r("AdsUserSettingsProvider")()) == null ||
          (t = t.getData()) == null ||
          (t = t.first()) == null
            ? void 0
            : t.getValue(),
        c = u == null ? void 0 : u.creative_feature_default_config;
      if (c == null)
        return { isOptedOut: !1, outcome: "no_settings", source: null };
      var d =
        (n = c.aplusc_sticky_opt_in_status_v2) == null
          ? void 0
          : n.find(function (t) {
              return t.key === e;
            });
      if (d != null) {
        var m,
          p = ((m = d.value) == null ? void 0 : m.status) === "OPTED_OUT";
        return {
          isOptedOut: p,
          outcome: p ? "blocked_optin" : "passed",
          source: "user_settings_v2",
        };
      }
      var _ =
        (a = c.aplusc_sticky_opt_in_status) == null
          ? void 0
          : a.find(function (t) {
              return t.key === e;
            });
      if (_ != null) {
        var f = _.value === "OPTED_OUT";
        return {
          isOptedOut: f,
          outcome: f ? "blocked_optin" : "passed",
          source: "user_settings_v1",
        };
      }
      if (
        e === "replace_media_text" &&
        (u == null ? void 0 : u.replace_media_text_opt_in_status) ===
          "OPTED_OUT"
      )
        return {
          isOptedOut: !0,
          outcome: "blocked_optin_legacy_field",
          source: "legacy_field",
        };
      if (
        e === "carousel_to_video" &&
        (u == null ? void 0 : u.carousel_to_video_opt_in_status) === "OPTED_OUT"
      )
        return {
          isOptedOut: !0,
          outcome: "blocked_optin_legacy_field",
          source: "legacy_field",
        };
      if (
        e === "image_background_gen" &&
        (u == null ? void 0 : u.image_background_generation_opt_in_status) ===
          "OPTED_OUT"
      )
        return {
          isOptedOut: !0,
          outcome: "blocked_optin_legacy_field",
          source: "legacy_field",
        };
      if (e === "inline_comment") {
        var g, h, y;
        if (i) {
          var C = o(
            "adsAdAccountStickyConfigSelector",
          ).getAPlusCAdAccountStickyEntryForSelectedAccount(
            "standard_enhancements",
          );
          if ((C == null ? void 0 : C.status) === "OPTED_OUT")
            return {
              isOptedOut: !0,
              outcome: "blocked_optin_inherited_parent",
              source: "inherited_parent_new_store",
            };
        }
        var b =
          (g = c.aplusc_sticky_opt_in_status_v2) == null
            ? void 0
            : g.find(function (e) {
                return e.key === "standard_enhancements";
              });
        if (
          (b == null || (h = b.value) == null ? void 0 : h.status) ===
          "OPTED_OUT"
        )
          return {
            isOptedOut: !0,
            outcome: "blocked_optin_inherited_parent",
            source: "inherited_parent_v2",
          };
        var v =
          (y = c.aplusc_sticky_opt_in_status) == null
            ? void 0
            : y.find(function (e) {
                return e.key === "standard_enhancements";
              });
        if ((v == null ? void 0 : v.value) === "OPTED_OUT")
          return {
            isOptedOut: !0,
            outcome: "blocked_optin_inherited_parent",
            source: "inherited_parent_v1",
          };
      }
      return e === "local_store_extension" &&
        (u == null ? void 0 : u.aplusc_local_store_extension_opt_in_status) ===
          "OPTED_OUT"
        ? {
            isOptedOut: !0,
            outcome: "blocked_optin_legacy_field",
            source: "legacy_field",
          }
        : { isOptedOut: !1, outcome: "passed", source: null };
    }
    function _(e) {
      return p(e).source;
    }
    function f(e) {
      var t = p(e),
        n = t.isOptedOut,
        r = t.outcome;
      return (s(e, r), n);
    }
    ((l.isStickyAutoOptInExcluded = c),
      (l.isPluginStickyOptOut = d),
      (l.getUnifiedSecondaryFeatureName = m),
      (l.getAPlusCFeatureStickyOptOutSource = _),
      (l.isAPlusCFeatureStickyOptedOut = f));
  },
  98,
);
