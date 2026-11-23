__d(
  "getWAMOStatusPAReviewWhatsAppIdentities",
  [
    "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
    "isWAMOStatusClickToWhatsAppAd",
    "isWAMOStatusCtwaAccountOnSecondIdentity",
    "selectWAMOStatusCtwaWhatsAppNumberFromList",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r,
        o = n
          ? t == null || (r = t.username) == null
            ? void 0
            : r.toString()
          : e == null
            ? void 0
            : e.name;
      return o != null && o.trim() !== "" ? o : null;
    }
    function s(t) {
      var n = t.adgroups,
        a = t.advertiserPageID,
        i = t.campaignPageID,
        l = t.ctwaPhoneNumberID,
        s = t.destinationType,
        u = t.isDraftAd,
        c = t.isMarketingMessages,
        d = t.marketingMessagesNumber,
        m = t.primaryFBPage,
        p = t.primaryIGAccount,
        _ = t.secondaryFBPage,
        f = t.secondaryIGAccount,
        g = t.whatsAppBusinessAccounts;
      if (m == null && p == null) return null;
      var h = o(
          "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
        ).shouldShowIABP(!0, p == null ? void 0 : p.id, m, _, u),
        y = o(
          "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
        ).shouldShowIABP(!1, f == null ? void 0 : f.id, _, m, u),
        C = e(m, p, h),
        b = d == null ? null : C != null ? C + " (" + d + ")" : d,
        v = !c && l != null && r("isWAMOStatusClickToWhatsAppAd")(s, n),
        S = o(
          "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
        ).getBoostingTypeFromAdvertiserPageID(n, a, _ == null ? void 0 : _.id),
        R =
          v &&
          r("isWAMOStatusCtwaAccountOnSecondIdentity")(
            i,
            m == null ? void 0 : m.id,
            _ == null ? void 0 : _.id,
            S === "SPONSOR_INLINE" || S === "SPONSOR_BOOST",
          ),
        L = v ? r("selectWAMOStatusCtwaWhatsAppNumberFromList")(g, l) : null,
        E = _ != null || f != null;
      return {
        ctwaPhoneNumberIDToFetch: v && L == null ? l : null,
        firstIdentity: {
          ctwaAccountLabel: L == null ? void 0 : L.whatsAppNumberDisplayName,
          isIABP: h,
          marketingMessagesAccountLabel: b,
          ownsCtwaAccount: v && !R,
        },
        secondIdentity: E
          ? {
              ctwaAccountLabel:
                L == null ? void 0 : L.whatsAppNumberDisplayName,
              isIABP: y,
              marketingMessagesAccountLabel: null,
              ownsCtwaAccount: v && R,
            }
          : null,
      };
    }
    l.default = s;
  },
  98,
);
