__d(
  "AdsBusinessIntegrityUserAdPublishChallengeInfoDataLoader",
  [
    "AsyncTypedRequest",
    "Promise",
    "XAdsBusinessIntegrityUserAdPublishChallengeInfoControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r(
        "XAdsBusinessIntegrityUserAdPublishChallengeInfoControllerRouteBuilder",
      ).buildUri({ account_id: t });
      return new (e || (e = n("Promise")))(function (e, t) {
        new (r("AsyncTypedRequest"))(o)
          .setMethod("POST")
          .setPayloadHandler(function (t) {
            e(u(t));
          })
          .setErrorHandler(function (e) {
            t(e);
          })
          .send();
      });
    }
    function u(e) {
      var t = e.apf_cleared,
        n = e.apf_enrolled,
        r = e.is_reauthed_for_ad_publish,
        o = e.new_advertiser_verification_state,
        a = e.verification_state,
        i = e.xfac_affected_adgroups_callback_uri;
      return {
        isReauthedForAdPublish: r,
        newAdvertiserVerificationState: o,
        verificationState: a,
        XFACAffectedAdgroupsCallbackURI: i,
        apfCleared: t,
        apfEnrolled: n,
      };
    }
    l.loadUserAdPublishChallengeInfo = s;
  },
  98,
);
