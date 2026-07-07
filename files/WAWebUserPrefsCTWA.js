__d(
  "WAWebUserPrefsCTWA",
  [
    "WAWebCTWAGatingUtils",
    "WAWebCommonAdsTypes",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebPonyfillsCryptoRandomUUID")();
      return (
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.AD_CREATION_FLOW_ID_KEY,
          e,
        ),
        e
      );
    }
    function s() {
      var t = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.AD_CREATION_FLOW_ID_KEY,
      );
      return ((t == null || typeof t != "string") && (t = e()), t);
    }
    function u() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY,
      );
      return (
        (e == null || typeof e != "number") && (e = 1),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY,
          e + 1,
        ),
        e
      );
    }
    function c() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY,
        1,
      );
    }
    function d(e) {
      switch (e) {
        case "WEAK":
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK;
        case "STRONG":
        default:
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.STRONG;
      }
    }
    function m() {
      if (!o("WAWebCTWAGatingUtils").adAccountTokenStoringEnabled())
        return null;
      var e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN,
        ),
        t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_BP_ID,
        ),
        n = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN_STRENGTH,
        );
      return e == null || typeof e != "string"
        ? null
        : ((t == null || typeof t != "string") && (t = ""),
          (n == null || typeof n != "string") && (n = null),
          o("WAWebCommonAdsTypes").asAdAccountToken(e, t, "WAA", d(n)));
    }
    function p(e) {
      o("WAWebCTWAGatingUtils").adAccountTokenStoringEnabled() &&
        (r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN,
          e.token,
        ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_BP_ID,
          e.bp_id,
        ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN_STRENGTH,
          e.type === "WAA" ? e.tokenStrength : null,
        ));
    }
    function _() {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN,
        null,
      ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_BP_ID,
          null,
        ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN_STRENGTH,
          null,
        ));
    }
    function f() {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN,
        null,
      ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID,
          null,
        ));
    }
    function g() {
      var e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN,
        ),
        t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID,
        );
      return e == null ||
        typeof e != "string" ||
        t == null ||
        typeof t != "string"
        ? null
        : o("WAWebCommonAdsTypes").asAdAccountToken(e, t, "FB");
    }
    function h(e) {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN,
        e.token,
      ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID,
          e.bp_id,
        ));
    }
    function y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.NATIVE_ADS_MVP_ELIGIBILITY,
        e,
      );
    }
    function C() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.NATIVE_ADS_MVP_ELIGIBILITY,
      );
      if (e == null || typeof e != "object") return null;
      var t = e.is_page_asset_linked,
        n = e.is_pageless_asset_linked,
        a = e.lifetime_native_ctwa_advertiser,
        i = e.webclient_l90_ad_creator;
      return typeof t != "boolean" ||
        typeof n != "boolean" ||
        typeof a != "boolean" ||
        typeof i != "boolean"
        ? null
        : {
            is_page_asset_linked: t,
            is_pageless_asset_linked: n,
            lifetime_native_ctwa_advertiser: a,
            webclient_l90_ad_creator: i,
          };
    }
    ((l.generateAdCreationFlowId = e),
      (l.getAdCreationFlowId = s),
      (l.getAndIncrementAdCreationSequenceNumber = u),
      (l.resetAdCreationSequenceNumber = c),
      (l.getAdAccountToken = m),
      (l.setAdAccountToken = p),
      (l.clearAdAccountToken = _),
      (l.clearFBIdentity = f),
      (l.getFBIdentity = g),
      (l.setFbIdentity = h),
      (l.setNativeAdsMvpEligibility = y),
      (l.getNativeAdsMvpEligibility = C));
  },
  98,
);
