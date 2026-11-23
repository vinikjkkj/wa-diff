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
      var t, n;
      return (t =
        (n = r("AdsUserSettingsProvider")()) == null ||
        (n = n.getData()) == null ||
        (n = n.first()) == null ||
        (n = n.getValue()) == null ||
        (n = n.creative_feature_default_config) == null ||
        (n = n.aplusc_personalized_recommendation) == null ||
        (n = n.find(function (t) {
          return t.key === e;
        })) == null ||
        (n = n.value) == null
          ? void 0
          : n.opt_out_count) != null
        ? t
        : 0;
    }
    function p(e) {
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
    function _(e) {
      return e === "OFF" || e === "OFF_STICKY_MODE";
    }
    function f(e, t) {
      var n, r;
      return e === "replace_media_text" &&
        (t == null ? void 0 : t.replace_media_text_opt_in_status) ===
          "OPTED_OUT"
        ? {
            isOptedOut: !0,
            outcome: "blocked_optin_legacy_field",
            source: "legacy_field",
          }
        : e === "carousel_to_video" &&
            (t == null ? void 0 : t.carousel_to_video_opt_in_status) ===
              "OPTED_OUT"
          ? {
              isOptedOut: !0,
              outcome: "blocked_optin_legacy_field",
              source: "legacy_field",
            }
          : e === "image_background_gen" &&
              (t == null
                ? void 0
                : t.image_background_generation_opt_in_status) === "OPTED_OUT"
            ? {
                isOptedOut: !0,
                outcome: "blocked_optin_legacy_field",
                source: "legacy_field",
              }
            : e === "audio" &&
                (_(
                  t == null || (n = t.music_on_reels_opt_in) == null
                    ? void 0
                    : n.single_image,
                ) ||
                  _(
                    t == null || (r = t.music_on_reels_opt_in) == null
                      ? void 0
                      : r.carousel,
                  ))
              ? {
                  isOptedOut: !0,
                  outcome: "blocked_optin_legacy_field",
                  source: "legacy_field",
                }
              : e === "local_store_extension" &&
                  (t == null
                    ? void 0
                    : t.aplusc_local_store_extension_opt_in_status) ===
                    "OPTED_OUT"
                ? {
                    isOptedOut: !0,
                    outcome: "blocked_optin_legacy_field",
                    source: "legacy_field",
                  }
                : null;
    }
    function g(e, t) {
      var n, r, a;
      if (t) {
        var i = o(
          "adsAdAccountStickyConfigSelector",
        ).getAPlusCAdAccountStickyEntryForSelectedAccount(
          "standard_enhancements",
        );
        if ((i == null ? void 0 : i.status) === "OPTED_OUT")
          return {
            isOptedOut: !0,
            outcome: "blocked_optin_inherited_parent",
            source: "inherited_parent_new_store",
          };
      }
      var l = e == null ? void 0 : e.creative_feature_default_config,
        s =
          l == null || (n = l.aplusc_sticky_opt_in_status_v2) == null
            ? void 0
            : n.find(function (e) {
                return e.key === "standard_enhancements";
              });
      if (
        (s == null || (r = s.value) == null ? void 0 : r.status) === "OPTED_OUT"
      )
        return {
          isOptedOut: !0,
          outcome: "blocked_optin_inherited_parent",
          source: "inherited_parent_v2",
        };
      var u =
        l == null || (a = l.aplusc_sticky_opt_in_status) == null
          ? void 0
          : a.find(function (e) {
              return e.key === "standard_enhancements";
            });
      return (u == null ? void 0 : u.value) === "OPTED_OUT"
        ? {
            isOptedOut: !0,
            outcome: "blocked_optin_inherited_parent",
            source: "inherited_parent_v1",
          }
        : null;
    }
    function h(e) {
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
        var h = _.value === "OPTED_OUT";
        return {
          isOptedOut: h,
          outcome: h ? "blocked_optin" : "passed",
          source: "user_settings_v1",
        };
      }
      var y = f(e, u);
      if (y != null) return y;
      if (e === "inline_comment") {
        var C = g(u, i);
        if (C != null) return C;
      }
      return { isOptedOut: !1, outcome: "passed", source: null };
    }
    function y(e) {
      return h(e).source;
    }
    function C(e) {
      var t = h(e),
        n = t.isOptedOut,
        r = t.outcome;
      return (s(e, r), n);
    }
    ((l.isStickyAutoOptInExcluded = c),
      (l.isPluginStickyOptOut = d),
      (l.getAPlusCFeatureConsecutiveOptOutCount = m),
      (l.getUnifiedSecondaryFeatureName = p),
      (l.getAPlusCFeatureStickyOptOutSource = y),
      (l.isAPlusCFeatureStickyOptedOut = C));
  },
  98,
);
