__d(
  "AdsSmartDefaultStoreSource",
  [
    "AdsSmartDefaultStoreSourceFragment.graphql",
    "AdsSmartDefaultStoreSourceServerLoadedQuery.graphql",
    "AdsSmartDefaultStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "promiseDone",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("AdsSmartDefaultStoreSourceServerQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n("AdsSmartDefaultStoreSourceServerLoadedQuery.graphql")),
      m =
        u !== void 0
          ? u
          : (u = n("AdsSmartDefaultStoreSourceFragment.graphql")),
      p = (function (e) {
        function t() {
          var t = "xfb_andromeda_XAdsSmartDefaultControllerUpdated";
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getGQLParams = function (t) {
            return { ad_account_id: t };
          }),
          (n.formatControllerReturnData = function (t) {
            var e = function (t) {
              return {
                conversion_location: t.conversion_location,
                source: t.source,
                default_page_id: t.default_page_id,
                default_commerce_product_set_id:
                  t.default_commerce_product_set_id,
              };
            };
            return babelHelpers.extends({}, t, {
              leads: t.leads.map(function (t) {
                return e(t);
              }),
              engagement: t.engagement.map(function (t) {
                return e(t);
              }),
              traffic: t.traffic.map(function (t) {
                return e(t);
              }),
              sales: t.sales.map(function (t) {
                return e(t);
              }),
              lead_gen: t.lead_gen.map(function (t) {
                return e(t);
              }),
              conversions: t.conversions.map(function (t) {
                return e(t);
              }),
            });
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_ads_smart_default",
              i = "XFBXAdsSmartDefaultController",
              l = t[0],
              s = this.getRelayId(l);
            this.updateRecords([s], a, i);
            var u = this.__getGQLParams(l),
              d = o("RelayHooks")
                .fetchQuery(this.__environment, c, u)
                .toPromise()
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(d);
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = e.getRelayId(t),
                  o = e.__getGQLParams(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    o,
                    {},
                    n,
                    function (e) {
                      return e;
                    },
                  ),
                };
              });
            return o;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceWeakBase"));
    l.default = p;
  },
  98,
);
