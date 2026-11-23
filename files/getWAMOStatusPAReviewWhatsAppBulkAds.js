__d(
  "getWAMOStatusPAReviewWhatsAppBulkAds",
  [
    "getWAMOStatusPAReviewWhatsAppIdentities",
    "selectWAMOStatusCtwaPhoneNumberID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e == null) return null;
      var r = t(e);
      return r == null
        ? null
        : {
            id: e,
            is_iabp: r.isIABP,
            name: (n = r.name) != null ? n : "",
            profile_picture_url: "",
          };
    }
    function s(e) {
      return e == null
        ? null
        : {
            id: e,
            legacy_instagram_user_id: e,
            profile_picture_url: "",
            username: "",
          };
    }
    function u(t, n) {
      var o = n.advertiserPageID,
        a = n.getPage,
        i = n.isMarketingMessagesEnabled,
        l = n.marketingMessagesAccounts,
        u = n.whatsAppBusinessAccounts;
      return t.map(function (t) {
        var n,
          c,
          d,
          m = i && t.hasWhatsappMMPlacement,
          p =
            m && t.marketingMessagesPhoneNumberID != null
              ? l == null ||
                (n = l.find(function (e) {
                  return (
                    e.whatsAppNumberID === t.marketingMessagesPhoneNumberID
                  );
                })) == null
                ? void 0
                : n.whatsAppNumber
              : null,
          _ = e(t.primaryPageID, a),
          f = e(t.secondaryPageID, a);
        if (
          (t.primaryPageID != null && _ == null) ||
          (t.secondaryPageID != null && f == null)
        )
          return {
            adID: t.adID,
            adName: t.adName,
            identities: null,
            isPartnershipAd: t.isPartnershipAd,
          };
        var g = r("getWAMOStatusPAReviewWhatsAppIdentities")({
          adgroups: [t.adgroup],
          advertiserPageID: o,
          campaignPageID: t.campaignPageID,
          ctwaPhoneNumberID:
            (c =
              (d = r("selectWAMOStatusCtwaPhoneNumberID")([
                {
                  creativePageWhatsAppNumberID: null,
                  creativePhoneNumberID: t.creativePhoneNumberID,
                  promotedObjectPageWhatsAppNumberID: null,
                  promotedObjectPhoneNumberID: t.promotedObjectPhoneNumberID,
                },
              ])) == null
                ? void 0
                : d.id) != null
              ? c
              : null,
          destinationType: t.destinationType,
          isDraftAd: t.isDraftAd,
          isMarketingMessages: m,
          marketingMessagesNumber: p,
          primaryFBPage: _,
          primaryIGAccount: s(t.primaryIGAccountID),
          secondaryFBPage: f,
          secondaryIGAccount: s(t.secondaryIGAccountID),
          whatsAppBusinessAccounts: u,
        });
        return {
          adID: t.adID,
          adName: t.adName,
          identities: g,
          isPartnershipAd: t.isPartnershipAd,
        };
      });
    }
    l.default = u;
  },
  98,
);
