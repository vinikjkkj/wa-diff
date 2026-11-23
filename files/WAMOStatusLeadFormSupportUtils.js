__d(
  "WAMOStatusLeadFormSupportUtils",
  ["AdsLeadGenConstants", "WAMOLeadGenFormSupport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        "QUESTION_PHOTO_UPLOAD",
        "QUESTION_IN_APP_CALLING",
        "QUESTION_SMS_VERIFICATION",
        "QUESTION_MESSENGER_LEAD_CONNECT",
        "QUESTION_VEHICLE_INFORMATION",
        "FEATURE_FLEXIBLE_DELIVERY_BACKGROUND_IMAGE",
        "FEATURE_FLEXIBLE_DELIVERY_CONTEXT_CARD",
        "FEATURE_FLEXIBLE_FORM_DELIVERY",
        "UNCLASSIFIED_FLEXIBLE_DELIVERY_GENAI_ANSWER_SUGGESTIONS",
        "UNCLASSIFIED_FLEXIBLE_DELIVERY_MESSAGE_FOR_LEADS",
        "QUESTION_INTERNAL_ONLY",
        "UNCLASSIFIED_FLEXIBLE_DELIVERY_PROGRESSIVE_FORM_FILLING",
        "FEATURE_GATED_FILE",
        "SUPPORTED",
      ]),
      s = new Set([
        "ACTION_BOOK_APPOINTMENT",
        "ACTION_MESSAGE_ON_MESSENGER",
        "ACTION_PROMO_CODE",
        "ACTION_VIEW_FILE",
        "ACTION_VIEW_ON_FACEBOOK",
        "FEATURE_CONDITIONAL_LOGIC",
        "FEATURE_GATED_PROMO",
        "FEATURE_GENAI_CREATED_FORM",
        "FEATURE_INTRO_WITHOUT_TEXT",
        "FEATURE_LEGACY_CREATIVE_EXPERIENCE",
        "FEATURE_MESSENGER_LEAD_CONNECT",
        "FEATURE_QUALIFYING_QUESTION",
        "FEATURE_RICH_CREATIVE",
        "FEATURE_SMS_VERIFICATION_FILTER",
        "FORM_TYPE_HIGHER_INTENT",
        "FORM_TYPE_VERIFIED_PHONE_NUMBER",
        "QUESTION_APPOINTMENT_REQUEST",
        "QUESTION_CONDITIONAL",
        "QUESTION_DATE_OF_BIRTH",
        "QUESTION_IMAGE_CHOICES",
        "QUESTION_SLIDER",
        "QUESTION_STORE_LOCATOR",
      ]);
    function u(e) {
      var t = e.get("form_type");
      return t === "HIGHER_INTENT"
        ? "FORM_TYPE_HIGHER_INTENT"
        : t === "VERIFIED_PHONE_NUMBER"
          ? "FORM_TYPE_VERIFIED_PHONE_NUMBER"
          : t === "CUSTOM"
            ? "FEATURE_RICH_CREATIVE"
            : null;
    }
    function c(e) {
      var t = [];
      return (
        e
          .getPrefillQuestions()
          .has(o("AdsLeadGenConstants").DATE_OF_BIRTH_QUESTION_ID) &&
          t.push("QUESTION_DATE_OF_BIRTH"),
        e.getCustomQuestions().forEach(function (e) {
          var n = (function (t) {
            if (t === "date-time") return "QUESTION_APPOINTMENT_REQUEST";
            if (t === "store-lookup" || t === "store-lookup-typeahead")
              return "QUESTION_STORE_LOCATOR";
            if (t === "conditional") return "QUESTION_CONDITIONAL";
            if (t === "slider") return "QUESTION_SLIDER";
            if (t === "qualifying-question") return null;
            if (t === "multiple-choice")
              return e.isImageMCQ === !0 ? "QUESTION_IMAGE_CHOICES" : null;
            if (t === "prefill" || t === "short-answer") return null;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          })(e.get("questionTypeKey"));
          n != null && t.push(n);
        }),
        t
      );
    }
    function d(e) {
      return e == null ||
        e === "NONE" ||
        e === "VIEW_WEBSITE" ||
        e === "CALL_BUSINESS" ||
        e === "WHATSAPP"
        ? null
        : e === "DOWNLOAD"
          ? "ACTION_VIEW_FILE"
          : e === "SCHEDULE_APPOINTMENT" || e === "BOOK_ON_WEBSITE"
            ? "ACTION_BOOK_APPOINTMENT"
            : e === "MESSAGE_BUSINESS" || e === "P2B_MESSENGER"
              ? "ACTION_MESSAGE_ON_MESSENGER"
              : e === "VIEW_ON_FACEBOOK"
                ? "ACTION_VIEW_ON_FACEBOOK"
                : e === "PROMO_CODE"
                  ? "ACTION_PROMO_CODE"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function m(e) {
      var t = [],
        n = function (n) {
          var e = d(n);
          e != null && t.push(e);
        };
      if (e.get("has_conditional_logic") === !0) {
        var r;
        (r = e.get("end_pages")) == null ||
          r.get("thankYouPages").forEach(function (e) {
            return n(e.get("button_type"));
          });
      } else {
        var o;
        n((o = e.get("thank_you_page")) == null ? void 0 : o.button_type);
      }
      return t;
    }
    function p(e) {
      var t = e.get("background_image_option");
      return (
        (t === "AD" || t === "UPLOAD") &&
        e.get("context_card_is_selected") !== !0
      );
    }
    function _(e, t) {
      var n = [];
      return (
        (e.get("is_phone_sms_verify_enabled") === !0 || t) &&
          n.push("FEATURE_SMS_VERIFICATION_FILTER"),
        e.get("is_auto_thread_creation_enabled") === !0 &&
          n.push("FEATURE_MESSENGER_LEAD_CONNECT"),
        (e.get("is_created_from_genai_prompt") === !0 ||
          e.get("is_created_from_auto_generation") === !0) &&
          n.push("FEATURE_GENAI_CREATED_FORM"),
        p(e) && n.push("FEATURE_INTRO_WITHOUT_TEXT"),
        e.get("has_conditional_logic") === !0
          ? n.push("FEATURE_CONDITIONAL_LOGIC")
          : e.hasQualifyingQuestion() && n.push("FEATURE_QUALIFYING_QUESTION"),
        e.hasPromoCode() && n.push("FEATURE_GATED_PROMO"),
        e.get("trust_signals_is_selected") === !0
          ? n.push("FEATURE_RICH_CREATIVE")
          : e.get("form_type") !== "CUSTOM" &&
            e.hasCreativesSections() &&
            n.push("FEATURE_LEGACY_CREATIVE_EXPERIENCE"),
        n
      );
    }
    function f(e, t) {
      t === void 0 && (t = !1);
      var n = [u(e)].concat(c(e), m(e), _(e, t)).filter(Boolean);
      return Array.from(new Set(n));
    }
    function g(e) {
      var t, n;
      return (t =
        (n = o("WAMOLeadGenFormSupport").WAMOLeadGenSupportByReasonCode.get(
          e,
        )) == null
          ? void 0
          : n.supportStatus) != null
        ? t
        : "BLOCKS_DELIVERY";
    }
    function h(e) {
      return g(e) === "BLOCKS_DELIVERY";
    }
    function y(e, t) {
      return (
        t === void 0 && (t = !1),
        f(e, t).map(function (e) {
          var t, n;
          return {
            previewBehavior:
              (t =
                (n = o(
                  "WAMOLeadGenFormSupport",
                ).WAMOLeadGenSupportByReasonCode.get(e)) == null
                  ? void 0
                  : n.previewBehavior) != null
                ? t
                : "PREVIEW_UNAVAILABLE",
            reasonCode: e,
            supportStatus: g(e),
          };
        })
      );
    }
    function C(e, t) {
      return (
        t === void 0 && (t = !1),
        y(e, t)
          .filter(function (e) {
            return e.supportStatus === "BLOCKS_DELIVERY";
          })
          .map(function (e) {
            return e.reasonCode;
          })
      );
    }
    function b(e, t) {
      return (t === void 0 && (t = !1), C(e, t).length > 0);
    }
    function v(e) {
      if (e.get("custom_disclaimer_is_selected") !== !0) return !1;
      var t = e.get("custom_disclaimer_editor_state");
      return (
        e.get("custom_disclaimer_title").trim() !== "" ||
        (t != null && t.getCurrentContent().getPlainText().trim() !== "") ||
        e.get("custom_disclaimer_consents").size > 0
      );
    }
    ((l.WAMO_STATUS_LEAD_FORM_SERVER_ONLY_REASON_CODES = e),
      (l.WAMO_STATUS_LEAD_FORM_CLIENT_REASON_CODES = s),
      (l.getWAMOStatusLeadFormReasonCodes = f),
      (l.doesWAMOStatusLeadFormReasonCodeBlockDelivery = h),
      (l.getWAMOStatusLeadFormSupport = y),
      (l.getWAMOStatusLeadFormBlockingReasonCodes = C),
      (l.doesWAMOStatusLeadFormBlockDelivery = b),
      (l.hasWAMOStatusLeadFormCustomNotices = v));
  },
  98,
);
