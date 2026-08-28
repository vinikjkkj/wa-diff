__d(
  "FBPayThreeDSContentSanitizer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^https:\/\//i,
      l = {
        challengeAddLabel: 45,
        challengeDataEntryLabel: 45,
        challengeInfoHeader: 45,
        challengeInfoLabel: 45,
        challengeInfoText: 350,
        challengeSelectLabel: 45,
        deviceBindingInfoText: 64,
        expandInfoLabel: 45,
        expandInfoText: 256,
        infoContinueLabel: 45,
        oobContinueLabel: 45,
        resendInformationLabel: 45,
        submitAuthenticationLabel: 45,
        trustListInfoText: 64,
        whyInfoLabel: 45,
        whyInfoText: 256,
      };
    function s(t) {
      if (t == null) return null;
      var n = t.trim();
      return e.test(n) ? n : null;
    }
    function u(e, t) {
      if (t == null) return t;
      var n = l[e];
      return t.length > n ? t.slice(0, n) : t;
    }
    ((i.CRES_FIELD_MAX_LENGTHS = l),
      (i.sanitizeImageUrl = s),
      (i.truncateCresField = u));
  },
  66,
);
