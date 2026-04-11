__d(
  "WAWebUserPrefsCTWA",
  [
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebCommonAdEntryPointsTypes",
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
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AD_ENTRY_POINTS_CONFIGURATION,
      );
      if (t == null || typeof t != "object") return null;
      var n = t.configuration,
        a = t.locale,
        i = t.ts;
      if (typeof i != "number" || typeof a != "string") return null;
      var l = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(
          o("WAWebBizGatingUtils").adEntryPointsConfigurationFetchThreshold() /
            1e3,
          o("WATimeUtils").castToUnixTime(i),
        ),
      );
      if (a !== e || n == null || typeof n != "object") return null;
      var s = Object.keys(n).reduce(function (e, t) {
        var r = n[t];
        if (r == null || typeof r != "object") return e;
        var a = r.content,
          i = r.shouldShow,
          l = r.subContent;
        if (typeof i != "boolean") return e;
        var s = { shouldShow: i };
        if (a != null) {
          if (typeof a != "string") return e;
          s.content = o("WAWebCommonAdEntryPointsTypes").asAdEntryPointContent(
            a,
          );
        }
        if (l != null) {
          if (typeof l != "string") return e;
          s.subContent = o(
            "WAWebCommonAdEntryPointsTypes",
          ).asAdEntryPointContent(l);
        }
        return ((e[t] = s), e);
      }, {});
      return { configuration: s, isExpired: l };
    }
    function m(e, t) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AD_ENTRY_POINTS_CONFIGURATION,
        { configuration: t, ts: o("WATimeUtils").unixTime(), locale: e },
      );
    }
    function p(e) {
      switch (e) {
        case "WEAK":
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK;
        case "STRONG":
        default:
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.STRONG;
      }
    }
    function _() {
      if (!o("WAWebBizGatingUtils").adAccountTokenStoringEnabled()) return null;
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
          o("WAWebCommonAdsTypes").asAdAccountToken(e, t, "WAA", p(n)));
    }
    function f(e) {
      o("WAWebBizGatingUtils").adAccountTokenStoringEnabled() &&
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
    function g() {
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
    function h() {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN,
        null,
      ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID,
          null,
        ));
    }
    function y() {
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
    function C(e) {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN,
        e.token,
      ),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID,
          e.bp_id,
        ));
    }
    function b(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.NATIVE_ADS_MVP_ELIGIBILITY,
        e,
      );
    }
    function v() {
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
      (l.getAdEntryPointsConfiguration = d),
      (l.setAdEntryPointsConfiguration = m),
      (l.getAdAccountToken = _),
      (l.setAdAccountToken = f),
      (l.clearAdAccountToken = g),
      (l.clearFBIdentity = h),
      (l.getFBIdentity = y),
      (l.setFbIdentity = C),
      (l.setNativeAdsMvpEligibility = b),
      (l.getNativeAdsMvpEligibility = v));
  },
  98,
);
