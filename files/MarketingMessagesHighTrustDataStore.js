__d(
  "MarketingMessagesHighTrustDataStore",
  [
    "AdsDataAtom",
    "FluxLoadObjectStore_RELAY",
    "MarketingMessagesHighTrustDataStoreInline_fragment.graphql",
    "MarketingMessagesHighTrustDataStoreLoadedQuery.graphql",
    "MarketingMessagesHighTrustDataStoreLoaderQuery.graphql",
    "RelayHooks",
    "react-relay",
    "readQueryToLoadObject",
    "updateLoadedAdAccountsClientSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n(
              "MarketingMessagesHighTrustDataStoreInline_fragment.graphql",
            )),
      m =
        s !== void 0
          ? s
          : (s = n("MarketingMessagesHighTrustDataStoreLoaderQuery.graphql")),
      p =
        u !== void 0
          ? u
          : (u = n("MarketingMessagesHighTrustDataStoreLoadedQuery.graphql")),
      _ = (function (e) {
        function t() {
          return e.call(this, c || (c = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.reduce = function (t, n) {
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
              n = this.getRelayEnvironment();
            o("react-relay")
              .fetchQuery(
                n,
                m,
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
            return p;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getCachedFromRelayStore = function (t) {
            return r("readQueryToLoadObject")(
              this.getRelayEnvironment(),
              r("MarketingMessagesHighTrustDataStoreLoaderQuery.graphql"),
              { adAccountID: t },
              function (e) {
                var t = o("RelayHooks").readInlineData(
                  d,
                  e == null ? void 0 : e.ad_account,
                );
                return t == null
                  ? null
                  : {
                      isBusinessHighTrustForMM:
                        t.is_business_high_trust_for_marketing_messages,
                    };
              },
            );
          }),
          t
        );
      })(r("FluxLoadObjectStore_RELAY"));
    _.__moduleID = i.id;
    var f = new _();
    l.default = f;
  },
  98,
);
