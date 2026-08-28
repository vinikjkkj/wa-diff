__d(
  "AdvertiserProfileMessageMarketingDataStore",
  [
    "AdsAdvertiserProfileMessageMarketingReloadActionFlux",
    "AdsDataAtom",
    "AdvertiserProfileMessageMarketingDataStoreLoadedQuery.graphql",
    "AdvertiserProfileMessageMarketingDataStoreLoaderQuery.graphql",
    "FluxLoadObjectStore_RELAY",
    "LoadObject",
    "RelayHooks",
    "gkx",
    "isAccountEligibleForMessengerMarketingMessages",
    "react-relay",
    "readQueryToLoadObject",
    "requireDeferred",
    "updateLoadedAdAccountsClientSchema",
    "useMarketingMessagesAccountSettingsDataInline_fragment.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("requireDeferred")(
        "useMarketingMessagesAccountSettingsData",
      ).__setRef("AdvertiserProfileMessageMarketingDataStore"),
      d =
        e !== void 0
          ? e
          : (e = n(
              "AdvertiserProfileMessageMarketingDataStoreLoaderQuery.graphql",
            )),
      m =
        s !== void 0
          ? s
          : (s = n(
              "AdvertiserProfileMessageMarketingDataStoreLoadedQuery.graphql",
            )),
      p = (function (e) {
        function t() {
          return e.call(this, u || (u = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.actionType) {
              case r("AdsAdvertiserProfileMessageMarketingReloadActionFlux")
                .actionType:
                this.__load(e.adAccountID);
            }
            return t;
          }),
          (n.__addIDToClientSchema = function (t) {
            r("updateLoadedAdAccountsClientSchema")(
              this.getRelayEnvironment(),
              t,
            );
          }),
          (n.__load = function (t) {
            var e = this,
              n =
                r("gkx")("13496") ||
                o(
                  "isAccountEligibleForMessengerMarketingMessages",
                ).isAccountEligibleForMessengerMarketingMessages();
            if (!n) {
              r("gkx")("10486") && this.__dispatchDataUpdatedAction();
              return;
            }
            c.load();
            var a = this.getRelayEnvironment();
            o("react-relay")
              .fetchQuery(
                a,
                d,
                { adAccountID: t },
                { fetchPolicy: "network-only" },
              )
              .subscribe({
                complete: function () {
                  e.__addIDToClientSchema(t);
                },
                error: function (r) {
                  return e.__handleErrors([t], r);
                },
              });
          }),
          (n.__getQuery = function () {
            return m;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getCachedFromRelayStore = function (t) {
            var e = this,
              n =
                r("gkx")("13496") ||
                o(
                  "isAccountEligibleForMessengerMarketingMessages",
                ).isAccountEligibleForMessengerMarketingMessages();
            return n
              ? r("readQueryToLoadObject")(
                  this.getRelayEnvironment(),
                  r(
                    "AdvertiserProfileMessageMarketingDataStoreLoaderQuery.graphql",
                  ),
                  { adAccountID: t },
                  function (n) {
                    var a,
                      i = (a = c.getModuleIfRequired()) != null ? a : {},
                      l = i.getMarketingMessagesAccountSettingsData;
                    if (l == null)
                      return (
                        c.onReadyImmediately(function () {
                          (e.markAsDirty(t), e.__queueNotify());
                        }),
                        null
                      );
                    var s = o("RelayHooks").readInlineData(
                        r(
                          "useMarketingMessagesAccountSettingsDataInline_fragment.graphql",
                        ),
                        n == null ? void 0 : n.ad_account,
                      ),
                      u = l(s),
                      d = r("gkx")("4827");
                    return d && u != null
                      ? babelHelpers.extends({}, u, {
                          hasCreatedCombinedMessageMarketingCampaign: !0,
                        })
                      : u;
                  },
                )
              : r("LoadObject").withValue(null, { creatorModuleID: i.id });
          }),
          t
        );
      })(r("FluxLoadObjectStore_RELAY"));
    p.__moduleID = i.id;
    var _ = new p();
    l.default = _;
  },
  98,
);
