__d(
  "FBPayCardinal3DSCresMapper",
  ["FBPayThreeDSContentSanitizer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["default", "dark", "monochrome"],
      s = 64;
    function u(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function c(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function d(e, t) {
      var n = e[t];
      return n === void 0
        ? "absent"
        : typeof n == "string"
          ? n
          : "non-string (" + (n === null ? "null" : typeof n) + ")";
    }
    function m(e) {
      var t = c(e, "acsUiType");
      return t === "01" || t === "02" || t === "03" || t === "07" ? t : null;
    }
    function p(e) {
      return c(e, "challengeCompletionInd") === "Y";
    }
    function _(e) {
      var t = e.challengeSelectInfo;
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t)
        if (!(r == null || typeof r != "object")) {
          var a = Object.keys(r);
          if (a.length !== 0) {
            var i = a[0];
            if (!(i.length > s)) {
              var l = u(r, i);
              if (typeof l == "string") {
                var c = o("FBPayThreeDSContentSanitizer").truncateCresField(
                  "challengeSelectLabel",
                  l,
                );
                c != null && n.push({ titleText: c, value: i });
              }
            }
          }
        }
      return n.length > 0 ? n : null;
    }
    function f(t, n) {
      var r = t[n];
      if (typeof r == "string")
        return o("FBPayThreeDSContentSanitizer").sanitizeImageUrl(r);
      if (r != null && typeof r == "object")
        for (var a of e) {
          var i = u(r, a);
          if (typeof i == "string")
            return o("FBPayThreeDSContentSanitizer").sanitizeImageUrl(i);
        }
      return null;
    }
    var g = 45;
    function h(e, t) {
      var n = e[t];
      if (n == null || typeof n != "object") return null;
      var r = u(n, "challengeDataEntryKeyboardType"),
        a = r === "01" ? "numeric" : r === "02" ? "text" : null,
        i = u(n, "challengeDataEntryAutofill") === "Y",
        l = u(n, "challengeDataEntryAutofillType"),
        s = i
          ? l === "02"
            ? "current-password"
            : l === "01"
              ? "one-time-code"
              : null
          : null,
        c = u(n, "challengeDataEntryLengthMax"),
        d = typeof c == "string" ? Number(c) : NaN,
        m = Number.isInteger(d) && d >= 1 && d <= g ? d : g,
        p = u(n, "challengeDataEntryLabel"),
        _ =
          typeof p == "string"
            ? o("FBPayThreeDSContentSanitizer").truncateCresField(
                "challengeDataEntryLabel",
                p,
              )
            : null,
        f = u(n, "challengeDataEntryMasking") === "Y",
        h = f && u(n, "challengeDataEntryToggle") !== "N";
      return {
        autoComplete: s,
        hasMaskingToggle: h,
        inputMode: a,
        isMasked: f,
        label: _,
        maxLength: m,
      };
    }
    function y(e) {
      var t = [];
      e.challengeSelectInfo != null &&
        _(e) == null &&
        t.push("challengeSelectInfo");
      for (var n of ["challengeEntryBox", "challengeEntryBoxTwo"])
        e[n] != null && h(e, n) == null && t.push(n);
      for (var r of ["issuerImage", "psImage"])
        e[r] != null && f(e, r) == null && t.push(r);
      return (
        m(e) === "07" &&
          c(e, "challengeInfoHeader") == null &&
          c(e, "challengeInfoText") == null &&
          t.push("type07EmptyInfoContent"),
        t
      );
    }
    function C(e) {
      var t, n;
      return {
        challengeAddLabel: (n = o(
          "FBPayThreeDSContentSanitizer",
        )).truncateCresField("challengeAddLabel", c(e, "challengeAddLabel")),
        challengeEntryBox: h(e, "challengeEntryBox"),
        challengeEntryBoxTwo: h(e, "challengeEntryBoxTwo"),
        challengeInfoHeader: n.truncateCresField(
          "challengeInfoHeader",
          c(e, "challengeInfoHeader"),
        ),
        challengeInfoLabel: n.truncateCresField(
          "challengeInfoLabel",
          c(e, "challengeInfoLabel"),
        ),
        challengeInfoText: n.truncateCresField(
          "challengeInfoText",
          c(e, "challengeInfoText"),
        ),
        challengeSelectInfo: _(e),
        deviceBindingInfoText: n.truncateCresField(
          "deviceBindingInfoText",
          c(e, "deviceBindingInfoText"),
        ),
        expandInfoLabel: n.truncateCresField(
          "expandInfoLabel",
          c(e, "expandInfoLabel"),
        ),
        expandInfoText: n.truncateCresField(
          "expandInfoText",
          c(e, "expandInfoText"),
        ),
        hasChallengeInfoTextWarning:
          ((t = c(e, "challengeInfoTextIndicator")) == null
            ? void 0
            : t.toUpperCase()) === "Y",
        infoContinueLabel: o("FBPayThreeDSContentSanitizer").truncateCresField(
          "infoContinueLabel",
          c(e, "infoContinueLabel"),
        ),
        issuerImageUrl: f(e, "issuerImage"),
        isTogglePositionAboveActions: c(e, "togglePositionInd") === "01",
        paymentSystemImageUrl: f(e, "psImage"),
        resendInformationLabel: o(
          "FBPayThreeDSContentSanitizer",
        ).truncateCresField(
          "resendInformationLabel",
          c(e, "resendInformationLabel"),
        ),
        submitAuthenticationLabel: o(
          "FBPayThreeDSContentSanitizer",
        ).truncateCresField(
          "submitAuthenticationLabel",
          c(e, "submitAuthenticationLabel"),
        ),
        trustListInfoText: o("FBPayThreeDSContentSanitizer").truncateCresField(
          "trustListInfoText",
          c(e, "trustListInfoText"),
        ),
        whyInfoLabel: o("FBPayThreeDSContentSanitizer").truncateCresField(
          "whyInfoLabel",
          c(e, "whyInfoLabel"),
        ),
        whyInfoText: o("FBPayThreeDSContentSanitizer").truncateCresField(
          "whyInfoText",
          c(e, "whyInfoText"),
        ),
      };
    }
    ((l.cresString = c),
      (l.describeCresField = d),
      (l.getAcsUiType = m),
      (l.isChallengeComplete = p),
      (l.getChallengeSelectOptions = _),
      (l.getChallengeEntryBox = h),
      (l.getCResShapeWarnings = y),
      (l.mapCResToContent = C));
  },
  98,
);
