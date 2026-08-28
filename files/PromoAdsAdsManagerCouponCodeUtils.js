__d(
  "PromoAdsAdsManagerCouponCodeUtils",
  [
    "$InternalEnum",
    "CatalogPromotionsSourcingConsts",
    "EmojiRenderer",
    "PromoAdsAdsManagerAdCreativeUtils",
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT: "promo_ads_default_opt_in_attempt",
        PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_FAILED:
          "promo_ads_default_opt_in_attempt_failed",
        PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_OFFER_NOT_FOUND_INLINE:
          "promo_ads_default_opt_in_attempt_offer_not_found_inline",
        PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_OFFER_NOT_FOUND_ASYNC:
          "promo_ads_default_opt_in_attempt_offer_not_found_async",
        PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_SUCCESS_ASYNC:
          "promo_ads_default_opt_in_attempt_success_async",
        PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_SUCCESS_INLINE:
          "promo_ads_default_opt_in_attempt_success_inline",
        PROMO_ADS_DEFAULT_OPT_IN_TURN_ON_ADGROUP:
          "promo_ads_default_opt_in_turn_on_adgroup",
        PROMO_ADS_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT:
          "promo_ads_should_enable_default_opt_in_for_ad_account",
        PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD: "should_show_promo_ad_field",
        PROMO_ADS_SHOULD_SHOW_PROMO_ADS_FIELD_IN_CES:
          "should_show_promo_ad_field_in_ces",
        PROMO_ADS_SELECT_CODE_SOURCE_RADIO_BUTTON:
          "promo_ads_select_code_source_radio_button",
        PROMO_ADS_OPT_TOGGLE_CLICK: "promo_ads_opt_toggle_click",
        PROMO_ADS_TOGGLE_SHOW_UP: "promo_ads_toggle_show_up",
        PROMO_ADS_AUTO_TURN_OFF_ADGROUP: "promo_ads_auto_turn_off_adgroup",
        PROMO_ADS_BIZAI_OFFER_EXCLUDED: "promo_ads_bizai_offer_excluded",
        PROMO_ADS_BIZAI_OFFER_SELECTED: "promo_ads_bizai_offer_selected",
        PROMO_ADS_EMAIL_CAPTURE_FEATURE_SHOW_UP:
          "promo_ads_email_capture_feature_show_up",
        PROMO_ADS_EMAIL_CAPTURE_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT:
          "promo_ads_email_capture_should_enable_default_opt_in_for_ad_account",
        PROMO_ADS_EMAIL_CAPTURE_ALWAYS_ON_ADD_OFFER_CLICK:
          "promo_ads_email_capture_always_on_add_offer_click",
        PROMO_ADS_EMAIL_CAPTURE_ALWAYS_ON_APPLY_OFFER_CLICK:
          "promo_ads_email_capture_always_on_apply_offer_click",
        PROMO_ADS_EMAIL_CAPTURE_ALWAYS_ON_GUIDANCE_CARD_DISMISS:
          "promo_ads_email_capture_always_on_guidance_card_dismiss",
        PROMO_ADS_EMAIL_CAPTURE_ALWAYS_ON_GUIDANCE_CARD_IMPRESSION:
          "promo_ads_email_capture_always_on_guidance_card_impression",
        PROMO_ADS_EMAIL_CAPTURE_ALWAYS_ON_STATE_RENDER:
          "promo_ads_email_capture_always_on_state_render",
        PROMO_ADS_EMAIL_CAPTURE_CHECK_BOX_CLICK:
          "promo_ads_email_capture_check_box_click",
        PROMO_ADS_EMAIL_CAPTURE_OFFER_CREATION_BUTTON_CLICK:
          "promo_ads_email_capture_offer_creation_button_click",
        PROMO_ADS_EMAIL_CAPTURE_EDIT_OFFER_CLICK:
          "promo_ads_email_capture_edit_offer_click",
        PROMO_ADS_EMAIL_CAPTURE_RECOMMENDED_OFFER_STORED:
          "promo_ads_email_capture_recommended_offer_stored",
        PROMO_ADS_EMAIL_CAPTURE_IAB_SURFACE_OPT_IN:
          "promo_ads_email_capture_iab_surface_opt_in",
        PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_FIXED_CLICK:
          "promo_ads_email_capture_low_quality_fixed_click",
        PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_EDIT_CODE_CLICK:
          "promo_ads_email_capture_low_quality_edit_code_click",
        PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_GUIDANCE_IMPRESSION:
          "promo_ads_email_capture_low_quality_guidance_impression",
        PROMO_ADS_EMAIL_CAPTURE_OFFER_SAVE_BUTTON_CLICK:
          "promo_ads_email_capture_offer_save_button_click",
        PROMO_ADS_EMAIL_CAPTURE_MODAL_OPEN:
          "promo_ads_email_capture_modal_open",
        PROMO_ADS_EMAIL_CAPTURE_MODAL_CLOSE:
          "promo_ads_email_capture_modal_close",
        PROMO_ADS_EMAIL_CAPTURE_MODAL_CANCEL_BUTTON_CLICK:
          "promo_ads_email_capture_modal_cancel_button_click",
        PROMO_ADS_EMAIL_CAPTURE_OFFER_UPSERT_ACTION:
          "promo_ads_email_capture_offer_upsert_action",
        PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_TURN_ON_ADGROUP:
          "promo_ads_email_capture_default_opt_in_turn_on_adgroup",
        PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT:
          "promo_ads_email_capture_default_opt_in_attempt",
        PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED:
          "promo_ads_email_capture_default_opt_in_attempt_failed",
        PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_SUCCESS:
          "promo_ads_email_capture_default_opt_in_attempt_success",
        PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SETTING_ATTEMPT:
          "promo_ads_email_capture_mutate_from_setting_attempt",
        PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED:
          "promo_ads_email_capture_mutate_from_seeting_attempt_failed",
        PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SETTING_ATTEMPT_SUCCESS:
          "promo_ads_email_capture_mutate_from_setting_attempt_success",
        PROMO_ADS_EMAIL_CAPTURE_TURN_OFF_ADGROUP:
          "promo_ads_email_capture_turn_off_adgroup",
        PROMO_ADS_OFFER_MANAGEMENT_OFFER_MUTATION_FAILED:
          "promo_ads_offer_management_offer_mutation_failed",
        PROMO_ADS_OFFER_MANAGEMENT_EVENT: "promo_ads_offer_management_event",
        PROMO_ADS_EMAIL_CAPTURE_REDIRECT_CLICK:
          "promo_ads_email_capture_redirect_click",
        PROMO_ADS_MANUAL_CODE_SELECTOR_CLICK:
          "promo_ads_manual_code_selector_click",
        PROMO_ADS_MANUAL_CODE_SELECTOR_SELECT:
          "promo_ads_manual_code_selector_select",
        PROMO_ADS_HIDE_PAM_WA_CAPTURE_PASSED:
          "promo_ads_hide_pam_wa_capture_passed",
        PROMO_ADS_UPSELL_GUIDANCE_CARD_IMPRESSION:
          "promo_ads_upsell_guidance_card_impression",
        PROMO_ADS_UPSELL_GUIDANCE_CARD_OPT_IN:
          "promo_ads_upsell_guidance_card_opt_in",
        PROMO_ADS_EMAIL_CAPTURE_INLINE_UPSELL_GUIDANCE_CARD_IMPRESSION:
          "promo_ads_email_capture_inline_upsell_guidance_card_impression",
        PROMO_ADS_INFO_TOOLTIP_IMPRESSION: "promo_ads_info_tooltip_impression",
        PROMO_ADS_INFO_TOOLTIP_CLOSE: "promo_ads_info_tooltip_close",
        PROMO_ADS_PRECLICK_INSTA_STORIES_PREVIEW_TOOLTIP_IMPRESSION:
          "promo_ads_preclick_insta_stories_preview_tooltip_impression",
        PROMO_ADS_EXCLUDED_OFFERS_CHANGE: "promo_ads_excluded_offers_change",
        PROMO_ADS_AUTO_SOURCED_OFFER_TRANSPARENCY_IMPRESSION:
          "promo_ads_auto_sourced_offer_transparency_impression",
        PROMO_ADS_OFFER_UNIFICATION_CATALOG_RESOLUTION:
          "promo_ads_offer_unification_catalog_resolution",
        PROMO_ADS_CLEAR_DRAFT_CATALOGS_FAILED:
          "promo_ads_clear_draft_catalogs_failed",
        PROMO_ADS_DETECTED_OFFER_DISABLED_GUIDANCE_IMPRESSION:
          "promo_ads_detected_offer_disabled_guidance_impression",
        PROMO_ADS_DETECTED_OFFER_UPSELL_GUIDANCE_CARD_CLICK:
          "promo_ads_detected_offer_upsell_guidance_card_click",
        PROMO_ADS_DETECTED_OFFER_UPSELL_GUIDANCE_CARD_DISMISS:
          "promo_ads_detected_offer_upsell_guidance_card_dismiss",
        PROMO_ADS_DETECTED_OFFER_UPSELL_GUIDANCE_CARD_IMPRESSION:
          "promo_ads_detected_offer_upsell_guidance_card_impression",
        PROMO_ADS_ALWAYS_ON_DUPLICATION_NOTICE_DISMISS:
          "promo_ads_always_on_duplication_notice_dismiss",
        PROMO_ADS_ALWAYS_ON_DUPLICATION_TOAST_IMPRESSION:
          "promo_ads_always_on_duplication_toast_impression",
        PROMO_ADS_ALWAYS_ON_DUPLICATION_UPGRADE_TOAST_IMPRESSION:
          "promo_ads_always_on_duplication_upgrade_toast_impression",
        PROMO_ADS_ALWAYS_ON_GUIDANCE_CARD_IMPRESSION:
          "promo_ads_always_on_guidance_card_impression",
        PROMO_ADS_ALWAYS_ON_GUIDANCE_CARD_DISMISS:
          "promo_ads_always_on_guidance_card_dismiss",
      }),
      s = n("$InternalEnum").Mirrored([
        "AD_COPY_CODE_CONFIRMATION",
        "MANAGE_PROMO_CODES_CTA",
        "OFFER_MANAGEMENT_ADD_CODE",
        "OFFER_MANAGEMENT_EDIT_CODE",
        "OFFER_CREATION_EDIT_MODAL",
        "MANUAL_CODE_SELECTOR_ADD_CODE",
        "MANUAL_CODE_INPUT_ADD_CODE",
        "MANUAL_CODE_CONFIRM_CODE",
        "DETECTED_OFFER_DISABLED_CONFIRM_CODE",
      ]);
    function u() {
      return r("gkx")("14516");
    }
    var c = 20,
      d = /^([%\x2D0-9_]*[A-Z\u017F\u212A][%\x2D0-9A-Z_\u017F\u212A]+)$/i,
      m =
        /(?:[\0-\/:-@\[-`\{-\xBF\u0180-\u02FF\u0500-\u052F\u0700-\u08FF\u0A00-\u0DFF\u0E80-\u1AAF\u1B00-\u1DFF\u1F00-\u2FFF\u3100-\u4DFF\uA000-\uABFF\uD7B0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
      p = [
        "code",
        "c\xF3digo",
        "cupom",
        "cup\xE3o",
        "cup\xF3n",
        "codice",
        "rabattkoden",
        "kode",
        "\u30B3\u30FC\u30C9",
        "\u30AF\u30FC\u30DD\u30F3",
        "kodem",
        "k\xF3dem",
        "k\xF3d",
        "kod",
        "\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC",
        "Gutscheincode",
        "\u0643\u0648\u062F",
        "\u512A\u60E0\u78BC",
        "\u4F18\u60E0\u7801",
        "\u0E42\u0E04\u0E49\u0E14",
        "\uCF54\uB4DC",
      ],
      _ = ["\u6298\u6263\u7801"];
    function f(e, t) {
      var n,
        r = e.replace(/[^\w\s%_-]/g, " "),
        o = r.match(t);
      return o && (n = o[1]) != null ? n : "";
    }
    function g(e) {
      if (!e) return { code: "", extractionFeatureType: null };
      var t = R(e);
      if (t)
        return {
          code: t,
          extractionFeatureType: o("PromoAdsAdsManagerAdCreativeUtils")
            .PromoCodeExtractionFeatureType.REGEX,
        };
      var n = h(e, !1);
      if (!r("isStringNullOrEmpty")(n))
        return {
          code: n,
          extractionFeatureType: o("PromoAdsAdsManagerAdCreativeUtils")
            .PromoCodeExtractionFeatureType.REGEX,
        };
      var a = h(e, !0);
      return r("isStringNullOrEmpty")(a)
        ? { code: "", extractionFeatureType: null }
        : {
            code: a,
            extractionFeatureType: o("PromoAdsAdsManagerAdCreativeUtils")
              .PromoCodeExtractionFeatureType.EXTENDED_REGEX,
          };
    }
    function h(e, t) {
      t === void 0 && (t = !1);
      var n = y(e),
        o = n.normalize("NFKD"),
        a = C(o, t);
      return r("isStringNullOrEmpty")(a) ? v(o, t) : a;
    }
    function y(e) {
      var t = o("EmojiRenderer").containsEmoji(e)
        ? o("EmojiRenderer")
            .render(e, function () {
              return "";
            })
            .join("")
        : e;
      return t.replace(m, " ");
    }
    function C(e, t) {
      t === void 0 && (t = !1);
      var n = E(t);
      return b(e, n);
    }
    function b(e, t) {
      var n = t
          .map(function (e) {
            return e.normalize("NFKD");
          })
          .join("|"),
        r = new RegExp(
          "(?:\\n*|\\b)(" +
            n +
            ")[-:''\"\u201C\u2018'\\[\\(\\|' ']*\u3010*([0-9%_-]*[A-Z][A-Z0-9%_\\-!]+)[^\\]''\"A-Za-z0-9]?",
          "iu",
        ),
        o = e.match(r);
      return o && L(o[2]) ? o[2] : "";
    }
    function v(e, t) {
      t === void 0 && (t = !1);
      var n = e.replace(/\r\n|\r|\n/, " "),
        r = E(t)
          .map(function (e) {
            return e.normalize("NFKD");
          })
          .join("|"),
        o = new RegExp(
          "(?:\\b([0-9%_-]*[A-Za-z][A-Za-z0-9%_-]+[0-9]+)\\W+(?:\\w+\\W+){0,4}(" +
            r +
            ")\\b|\\b(" +
            r +
            ")\\b(?:\\W+\\w+){0,4}\\W+([0-9%_-]*[A-Za-z][A-Za-z0-9%_-]+[0-9]+)\\b)",
          "iu",
        ),
        a = n.match(o);
      if (a !== null) {
        if (a[1]) return L(a[1]) ? a[1] : "";
        if (a.length >= 5 && a[4]) return L(a[4]) ? a[4] : "";
      }
      return "";
    }
    function S(e) {
      return (
        e.length > 2 &&
        e.length <= c &&
        !r("CatalogPromotionsSourcingConsts").INVALID_COUPON_CODES.includes(
          e.toLowerCase(),
        )
      );
    }
    function R(e) {
      var t =
          /\b(SAVE5|SAVE10|SAVE15|SAVE20|SAVE25|SAVE30|SAVE35|SAVE40|SAVE45|SAVE50|WELCOME5|WELCOME10|WELCOME15|WELCOME20|WELCOME25|WELCOME30|WELCOME35|WELCOME40|WELCOME45|WELCOME50|FB5|FB10|FB15|FB20|FB25|FB30|FB35|FB40|FB45|FB50|NEW5|NEW10|NEW15|NEW20|NEW25|NEW30|NEW35|NEW40|NEW45|NEW50)\b/,
        n = e.match(t);
      return n === null ? "" : n[1];
    }
    function L(e) {
      return !!(e && S(e) && (e.match(/\b\w*[A-Z0-9]\w*\b/) || e.length >= 6));
    }
    function E(e) {
      return e ? p.concat(_) : p;
    }
    function k(e) {
      return r("isStringNullOrEmpty")(e.code)
        ? !1
        : e.extractionFeatureType !==
            o("PromoAdsAdsManagerAdCreativeUtils")
              .PromoCodeExtractionFeatureType.EXTENDED_REGEX;
    }
    function I(e) {
      return e == null
        ? !1
        : k({ code: e.code, extractionFeatureType: e.extractionFeatureType });
    }
    function T(e) {
      return I(e) ? e : null;
    }
    function D(e, t) {
      var n;
      return (n =
        t == null
          ? void 0
          : t.some(function (t) {
              return t.couponCode === (e == null ? void 0 : e.code);
            })) != null
        ? n
        : !1;
    }
    ((l.PromoAdsAdsManagerEvent = e),
      (l.PromoAdsOfferManagementReferralSurface = s),
      (l.isDetectedOfferCmAmChangesEnabled = u),
      (l.COUPON_CODE_MAX_LENGTH = c),
      (l.MANUAL_COUPON_CODE_REGEX = d),
      (l.getCouponCodeFromText = f),
      (l.extractCouponCodeFromText = g),
      (l.extractCouponCodeFromTextWithI18nHelper = h),
      (l.getShouldUseExtractedCode = k),
      (l.getShouldUseExtractedCodeFromCodeSourcePair = I),
      (l.filterCreativeCouponCodeForEmptyCodeOrIneligibleSource = T),
      (l.isAdCopyCodeConfirmed = D));
  },
  98,
);
