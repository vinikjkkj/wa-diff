__d(
  "adsCFGetDefaultPageUIState_HACK",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAccountStore",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsDataAtom",
    "AdsDefaultPageDataProvider",
    "AdsInterfacesLogger",
    "AdsPagePostListStore",
    "AdsSelectorUtils",
    "adsCFCampaignGroupRecordSelector",
    "adsCFGetPageStoreState_HACK",
    "adsCFGetReachFrequencyState_HACK",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n, a, i;
      (s || (s = r("AdsDataAtom"))).isDispatching() &&
        (s || (s = r("AdsDataAtom"))).waitFor(
          (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
            r("adsCFCampaignGroupRecordSelector"),
          ]),
        );
      var l = r("adsCFCampaignGroupRecordSelector")(),
        u = r("adsCFGetPageStoreState_HACK")(),
        c,
        d = "standard";
      if (l.boosted_component_product === "boosted_automated_ads") {
        d = "automated_ads";
        var m = l.boosted_page_id;
        c = m != null ? o("AdsCFFindEligiblePageStoreUtils").getPage(m) : null;
      } else if (o("AdsAPICampaignGroupRecordUtils").isReachFrequency(l)) {
        d = "reach_frequency";
        var p = r("adsCFGetReachFrequencyState_HACK")();
        c = p.destinationID != null ? u.get(p.destinationID) : null;
      } else {
        d =
          t != null
            ? "standard_with_smart_default"
            : "standard_account_default";
        var _ = t;
        if (_ == null) {
          var f,
            g = r("AdsDefaultPageDataProvider").toFluxSelector();
          (s || (s = r("AdsDataAtom"))).isDispatching() &&
            (s || (s = r("AdsDataAtom"))).waitFor(
              [r("AdsAccountStore").getDispatchToken()].concat(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([g]),
              ),
            );
          var h = r("AdsAccountStore").getSelectedAccountID();
          _ =
            h != null
              ? (f = g().get(h).getValue()) == null
                ? void 0
                : f.pageID
              : null;
        }
        c = o("AdsCFFindEligiblePageStoreUtils").findEligiblePage(u, _);
      }
      return (
        r("AdsInterfacesLogger").log({
          eventName: "page_defaulting_result",
          data: {
            page_id: (n = c) == null ? void 0 : n.id,
            source: d,
            custom_event_type: "campaign_type_branch",
            message: JSON.stringify({
              campaign_type_source: d,
              default_page_id_input: t,
              result_page_id: (a = c) == null ? void 0 : a.id,
            }),
          },
        }),
        r("isFalsey")((i = c) == null ? void 0 : i.id)
          ? null
          : (r("AdsPagePostListStore").getFor(c.id), c)
      );
    }
    l.default = u;
  },
  98,
);
