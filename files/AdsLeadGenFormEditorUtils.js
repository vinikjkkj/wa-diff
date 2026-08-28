__d(
  "AdsLeadGenFormEditorUtils",
  [
    "AdsInterfacesLogger",
    "AdsLeadGenPhoneOtpFormEditorEntrypointVariant",
    "FormHooksValidators",
    "LeadAdsQualityFeatureGating",
    "LeadNurturingAmActionFalcoEvent",
    "gkx",
    "guid",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "-";
    function s() {
      return e + r("guid")();
    }
    function u(e) {
      return e ? e.trim().toLocaleLowerCase() : "";
    }
    function c(e, t) {
      var n = e.get(t);
      return n ? n.message : null;
    }
    function d(t) {
      return t.indexOf(e) === 0;
    }
    function m(e) {
      if (e == null || e === "") return "";
      var t = e.toLowerCase().split(" ");
      return t.join("_");
    }
    function p(e) {
      var t, n, r;
      return {
        error_code:
          e.error_subcode != null
            ? e.error_subcode
            : (t = e.code) != null
              ? t
              : 0,
        error_message:
          e.error_user_msg != null && e.error_user_msg !== ""
            ? e.error_user_msg
            : e.message,
        error_type: (n = e.type) != null ? n : "",
        fbtrace_id: (r = e.fbtrace_id) != null ? r : "",
      };
    }
    function _(e) {
      var t = r("immutable").List(),
        n = r("immutable").Map();
      return (
        e.toArray().forEach(function (e, r) {
          var o = e.id.toString(),
            a = e.questionTypeKey !== "qualifying-question",
            i = { id: o, question: e, isMovable: a, isRemovable: !1 };
          ((t = t.push(o)), (n = n.set(o, i)));
        }),
        { questionItemsOrder: t, questionItems: n }
      );
    }
    function f(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        eventName: e,
        data:
          ((i = {}),
          (i.page_id = n),
          (i.metadata = t),
          (i.ad_account_id = o),
          (i.new_value = a),
          i),
      });
    }
    function g() {
      var e = r("gkx")("8302");
      return e === !0
        ? o("AdsLeadGenPhoneOtpFormEditorEntrypointVariant")
            .HIGH_INTENT_OPTION_1
        : "";
    }
    function h(e, t) {
      var n =
        e === !0
          ? o(
              "LeadAdsQualityFeatureGating",
            ).isInOTPL1DefaultingTreatmentWithExposure()
          : o(
              "LeadAdsQualityFeatureGating",
            ).isInOTPL1DefaultingTreatmentWithoutExposure();
      return !!((n && t === !0) || (n && r("gkx")("11928") === !1));
    }
    function y(e, t) {
      return h(e, t);
    }
    function C(e) {
      var t,
        n,
        r,
        o,
        a =
          (t =
            e == null || (n = e.clientValidationRules) == null
              ? void 0
              : n.min_length_value) != null
            ? t
            : 0,
        i =
          (r =
            (o = e.clientValidationRules) == null
              ? void 0
              : o.max_length_value) != null
            ? r
            : 0,
        l = a > 0 ? 1 : 0;
      return ((l += i > 0 ? 1 : 0), l);
    }
    function b(e) {
      if (e == null) return !1;
      var t = e.toLowerCase(),
        n = ["e-book", "facebook"];
      for (var r of n) t = t.replaceAll(r, "");
      var o = [
        "reserv",
        "appointment",
        "calend",
        "schedul",
        "book",
        "time",
        "avail",
      ];
      return o.some(function (e) {
        return t.toLowerCase().includes(e);
      });
    }
    function v(e) {
      return e === "VIEW_WEBSITE" || e === "BOOK_ON_WEBSITE";
    }
    function S(e) {
      var t = new Map();
      if ((e == null ? void 0 : e.get("has_conditional_logic")) === !0) {
        var n;
        e == null ||
          (n = e.end_pages) == null ||
          n.thankYouPages.forEach(function (e, n) {
            if (v(e.button_type)) {
              var r = e.website_url;
              r != null &&
                o("FormHooksValidators").isNonEmptyString(r) &&
                t.set(n, r);
            }
          });
      } else {
        var r = e == null ? void 0 : e.get("thank_you_page");
        if (v(r == null ? void 0 : r.button_type)) {
          var a = e == null ? void 0 : e.follow_up_action_url;
          a != null &&
            o("FormHooksValidators").isNonEmptyString(a) &&
            t.set("thank_you_page", a);
        }
      }
      return t;
    }
    function R(e, t) {
      r("LeadNurturingAmActionFalcoEvent").log(function () {
        var n, r;
        return {
          event_name: e,
          extra_data: {
            ad_account_id: t.ad_account_id,
            form_id: (n = t.form_id) != null ? n : "",
            page_id: (r = t.page_id) != null ? r : "",
          },
        };
      });
    }
    ((l.generateNewFormID = s),
      (l.generateKeyFromText = u),
      (l.getErrorMessage = c),
      (l.isNewFormID = d),
      (l.getDefaultFieldID = m),
      (l.getErrorSpecFromError = p),
      (l.getQuestionsSorteableData = _),
      (l.logToPowerEditor = f),
      (l.phoneOtpEntrypointVariant = g),
      (l.isEligibleForHighIntentOTPDefaulting = y),
      (l.numberOfShorrtAnswerQuestionRulesEnabled = C),
      (l.containsBookingKeywords = b),
      (l.isWebsiteOrBookCTASelected = v),
      (l.getWebsiteUrlsFromForm = S),
      (l.logToLeadNurturingAmAction = R));
  },
  98,
);
