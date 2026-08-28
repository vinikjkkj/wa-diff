__d(
  "AdsAccountUtils",
  [
    "fbt",
    "AdsAudienceDirectConfig",
    "AdsBuyingTypes",
    "AdsPEAccountUtils",
    "Arbiter",
    "CurrentAdAccount",
    "FBLogger",
    "ifRequired",
    "isNumberLike",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = !1;
    function c(t) {
      u ||
        ((u = !0),
        r("Arbiter").inform(
          "ads_account_store_acc_id",
          { src: t, ts: (e || (e = r("performanceNow")))() },
          "state",
        ));
    }
    function d() {
      r("FBLogger")(
        "ads_account_switcher",
        ".account_updated_in_account_store",
      ).warn(
        "Account id in AdsAccountStore will eventually be immutable, and account id comes from CurrentAdAccount.getID",
      );
    }
    function m(e, t, n, o) {
      r("FBLogger")(
        "ads_account_switcher",
        "ad_account_updated_mis_matched",
      ).warn(
        "Ad account mismatches detected, CurrentAdAccount id is %s, requested account id is %s, has access token is %s, caller is %s",
        e,
        t,
        n,
        o != null ? o : "UNKNOWN",
      );
    }
    function p() {
      r("ifRequired")("AdsExcelAccountProvider", function (e) {
        var t,
          n,
          o = (t = e().selectedAccountID) != null ? t : null,
          a = (n = r("CurrentAdAccount").getID()) != null ? n : null;
        ((a = a === r("CurrentAdAccount").LOGGED_OUT ? null : a),
          a !== o &&
            r("FBLogger")(
              "ads_account_switcher",
              "ad_account_mis_matched_in_fame",
            ).warn(
              "Ad account mismatches detected in FAME, CurrentAdAccount id is %s, requested account id is %s",
              a,
              o,
            ));
      });
    }
    function _(e, t, n, o) {
      (n === void 0 && (n = "AdsAccountSelect"),
        o === void 0 && (o = !1),
        r("FBLogger")(
          "ads_account_switcher",
          "business_account_updated_mis_matched",
        ).warn(
          "Business account mismatches in %s, CurrentBusinessUser business_id is: %s, business id is %s, has shared ad account is %s",
          n,
          e,
          t,
          o,
        ));
    }
    function f(e) {
      r("FBLogger")("ads_account_switcher", "request_rejected_failure")
        .catching(e)
        .warn("Request rejected because of %s", e.message);
    }
    function g(e, t) {
      var n = e.name,
        r = e.account_id,
        o = e.io_number;
      return (
        o != null
          ? n
            ? (n = s._(/*BTDS*/ "{account name} (IO {IO Number})", [
                s._param("account name", n),
                s._param("IO Number", o),
              ]))
            : (n = s._(/*BTDS*/ "IO {IO number}", [s._param("IO number", o)]))
          : n || (n = r),
        t === !0 &&
          n !== r &&
          (n = s._(/*BTDS*/ "{account name} ({account ID})", [
            s._param("account name", n),
            s._param("account ID", r),
          ])),
        n
      );
    }
    function h(e) {
      return e != null && e.length >= 5 && r("isNumberLike")(e);
    }
    function y(e) {
      return (
        (e.funding_source == null || e.funding_source === "") &&
        !b(e, "HAS_VALID_PAYMENT_METHODS") &&
        !b(e, "DIRECT_SALES") &&
        e.can_bypass_fs_check !== !0
      );
    }
    function C(e) {
      return (
        e != null &&
        b(e, "DIRECT_SALES") &&
        e.io_number != null &&
        parseInt(e.io_number, 10) > 0
      );
    }
    function b(e, t) {
      return v(e == null ? void 0 : e.capabilities, t);
    }
    function v(e, t) {
      return e != null && e.includes(t);
    }
    function S(e, t) {
      return t.some(function (t) {
        return v(e, t);
      });
    }
    function R() {
      return r("AdsAudienceDirectConfig").isDirectDealsUser
        ? r("AdsBuyingTypes").FIXED_PRICE
        : r("AdsBuyingTypes").AUCTION;
    }
    function L(e) {
      var t = e == null ? void 0 : e.business;
      return t != null
        ? { businessID: t.id, businessName: t.name || t.id }
        : { businessID: null, businessName: "" };
    }
    function E(e) {
      var t,
        n,
        r,
        a = o("AdsPEAccountUtils").getArchiveInfo();
      return {
        archivedAdgroupCount: (t = e.archived_adgroup_count) != null ? t : 0,
        archivedCampaignCount: (n = e.archived_campaign_count) != null ? n : 0,
        archivedCampaignGroupCount:
          (r = e.archived_campaign_group_count) != null ? r : 0,
        desiredArchiveCount: a.finalArchiveSize,
        maxArchiveCount: a.hardArchiveLimit,
        warnArchiveCount: a.warnArchiveSize,
      };
    }
    var k = {
        getUIName: g,
        isPotentialAccountID: h,
        isPaymentInfoRequired: y,
        hasContract: C,
        hasCapability: b,
        hasCapabilityFromList: v,
        hasAnyCapabilityFromList: S,
        getDefaultBuyingType: R,
        getBusinessInfo: L,
        logAccID: c,
        logMsgWhenAccountUpdates: d,
        logAdAccountUpdatesMisMatched: m,
        maybeLogAdAccountMisMatchedInFAME: p,
        logBusinessAccountUpdatesMisMatched: _,
        logCapabilityFailures: f,
        getAccountArchivedInfo: E,
      },
      I = k;
    l.default = I;
  },
  226,
);
