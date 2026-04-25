__d(
  "WAWebBizBroadcastCTAButtonUtils",
  [
    "WAWebBizBroadcastCTAButtonSectionStrings",
    "WAWebContactImportValidationUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20;
    function s(e) {
      var t = c(e);
      if (!t.isValid) return null;
      var n = e.type,
        r = e.displayText.trim(),
        o = u(e, r),
        a = { buttons: [{ name: n, buttonParamsJson: o }] };
      return JSON.stringify(a);
    }
    function u(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "cta_url" &&
          "url" in n
        ) {
          var r = n.url;
          return JSON.stringify({ display_text: t, url: r.trim() });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "cta_call" &&
          "phoneNumber" in n
        ) {
          var o = n.phoneNumber;
          return JSON.stringify({ display_text: t, phone_number: o.trim() });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "quick_reply"
        )
          return JSON.stringify({ display_text: t, id: t });
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function c(t) {
      var n = t.displayText.trim();
      return m(t)
        ? { isValid: !0 }
        : n.length > e
          ? { isValid: !1, error: "DISPLAY_TEXT_TOO_LONG" }
          : d(t);
    }
    function d(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "cta_url" &&
          "url" in t
        ) {
          var n = t.url;
          return p(n)
            ? { isValid: !0 }
            : { isValid: !1, error: "INVALID_URL_FORMAT" };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "cta_call" &&
          "phoneNumber" in t
        ) {
          var r = t.phoneNumber;
          return f(r)
            ? { isValid: !0 }
            : { isValid: !1, error: "INVALID_PHONE_FORMAT" };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "quick_reply"
        )
          return { isValid: !0 };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function m(e) {
      var t = e.displayText.trim();
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "cta_url" &&
          "url" in e
        ) {
          var n = e.url;
          return t === "" && n.trim() === "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "cta_call" &&
          "phoneNumber" in e
        ) {
          var r = e.phoneNumber;
          return t === "" && r.trim() === "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "quick_reply"
        )
          return t === "";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function p(e) {
      var t = e.trim();
      return t === "" ? !1 : r("WAWebURLUtils").isValid(t);
    }
    function _(e) {
      var t = e.trim();
      return t === "" || r("WAWebURLUtils").hasValidUrlScheme(t)
        ? t
        : "https://" + t;
    }
    function f(e) {
      var t = e.trim();
      if (t === "") return !1;
      var n = o(
        "WAWebContactImportValidationUtils",
      ).validateAndFormatPhoneNumber(t);
      return (
        n.status ===
        o("WAWebContactImportValidationUtils").ValidationStatus.VALID
      );
    }
    function g(e) {
      return e === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
        ? "Website"
        : e === r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL
          ? "Phone Call"
          : e === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY
            ? "Custom Reply"
            : "Unknown";
    }
    function h(e) {
      return (
        e === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL ||
        e === r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL ||
        e === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY
      );
    }
    function y(e) {
      if (e == null) return null;
      try {
        var t,
          n = JSON.parse(e),
          o =
            n == null || (t = n.buttons) == null || (t = t[0]) == null
              ? void 0
              : t.name,
          a = r("WAWebInteractiveMessagesNativeFlowName").cast(o);
        return a != null && h(a) ? a : null;
      } catch (e) {
        return null;
      }
    }
    function C(e) {
      return e === "DISPLAY_TEXT_TOO_LONG"
        ? o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getDisplayTextTooLongError()
        : null;
    }
    function b(e) {
      return e === "INVALID_PHONE_FORMAT"
        ? o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getInvalidPhoneFormatError()
        : null;
    }
    function v(e) {
      return e === "INVALID_URL_FORMAT"
        ? o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getInvalidUrlFormatError()
        : null;
    }
    function S(e) {
      return e === "cta_url"
        ? o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getAddWebsiteButtonModalTitle()
        : e === "cta_call"
          ? o(
              "WAWebBizBroadcastCTAButtonSectionStrings",
            ).getAddPhoneCallButtonModalTitle()
          : e === "quick_reply"
            ? o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getAddCustomerReplyButtonModalTitle()
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.MAX_DISPLAY_TEXT_LENGTH = e),
      (l.convertButtonDataToJson = s),
      (l.validateButtonData = c),
      (l.isValidUrlFormat = p),
      (l.normalizeUrl = _),
      (l.isValidPhoneNumber = f),
      (l.getButtonTypeDisplayName = g),
      (l.isSupportedCTAButtonType = h),
      (l.extractButtonTypeFromJson = y),
      (l.getDisplayTextValidationError = C),
      (l.getPhoneNumberValidationError = b),
      (l.getUrlValidationError = v),
      (l.getModalTitle = S));
  },
  98,
);
