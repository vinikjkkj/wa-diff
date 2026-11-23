__d(
  "AdsClickToCallFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsUEditorMessagingDestinationUtils",
    "CallAdsAIScreeningTestViewer",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("2692") === !0 : r("qex")._("3325") === !0
      );
    }
    function s() {
      return !1;
    }
    function u(e, t) {
      return (
        e === r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
        (t === r("AdsAPIObjectives").OUTCOME_LEADS ||
          t === r("AdsAPIObjectives").OUTCOME_SALES) &&
        r("gkx")("29426") === !0
      );
    }
    function c(e, t) {
      return (
        t &&
        o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e) &&
        r("gkx")("29426") === !0
      );
    }
    function d() {
      return r("gkx")("329") === !0;
    }
    function m() {
      return r("gkx")("13775") === !0;
    }
    function p() {
      return r("gkx")("28383") === !0;
    }
    function _() {
      return r("CallAdsAIScreeningTestViewer").can_enroll_viewer;
    }
    function f() {
      return r("gkx")("22462") === !0;
    }
    function g() {
      var e = f(),
        t = r("gkx")("22531") === !0;
      return e
        ? t
          ? { showScreening: !0, showTranscription: !0 }
          : { showScreening: !0, showTranscription: !1 }
        : { showScreening: !1, showTranscription: !0 };
    }
    function h(e) {
      return e && m();
    }
    ((l.isCallAdsWithWhatsAppCallEnabled = e),
      (l.isCallOnMessengerInCAWCEnabled = s),
      (l.isWebsiteAndCallsDestinationPreviewEnabled = u),
      (l.isCallAddonDestinationPreviewEnabled = c),
      (l.shouldDefaultToWhatsApp = d),
      (l.isCallTranscriptOptInToggleEnabled = p),
      (l.canAICallScreeningTestEnrollViewer = _),
      (l.isCallScreeningL4Eligible = f),
      (l.getCallSettingsFeatures = g),
      (l.shouldShowCallTranscriptDisclosure = h));
  },
  98,
);
