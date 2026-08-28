__d(
  "AdsEventsManagerURLProviderPlugin",
  ["AdsEventsManagerRoutingConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        initialState: {
          params:
            ((e = {
              accountID: null,
              businessID: null,
              channel: null,
              conversionIDs: null,
              crmPreSelectedPartner: null,
              dataSourceID: null,
              date: null,
              dialog: null,
              domain: null,
              eventName: null,
              globalScopeID: null,
              optimization: null,
              partnerConnectionID: null,
              partnerIntegrationID: null,
              partnerType: null,
              pixelID: null,
              selectedTab: null,
              showModal: null,
            }),
            (e[r("AdsEventsManagerRoutingConstants").STATE.NAV_ITEM] = null),
            (e.verifyEventNameID = null),
            e),
          routes: r("immutable").List(),
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
