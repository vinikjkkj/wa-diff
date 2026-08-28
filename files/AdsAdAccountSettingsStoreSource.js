__d(
  "AdsAdAccountSettingsStoreSource",
  [
    "AdsAdAccountSettingsStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "promiseDone",
    "readQueryToLoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdsAdAccountSettingsStoreSourceServerQuery.graphql")),
      u = (function (e) {
        function t() {
          var t = "ads_ad_account_settings_from_ad_account";
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return s;
          }),
          (n.__getVariables = function () {
            return { ad_account_id: "" };
          }),
          (n.__getGQLParams = function (t) {
            return { ad_account_id: t };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "ads_ad_account_settings_from_ad_account",
              i = "AdsAdAccountSettings",
              l = t[0],
              u = this.getRelayId(l);
            this.updateRecords([u], a, i);
            var c = this.__getGQLParams(l),
              d = o("RelayHooks")
                .fetchQuery(this.__environment, s, c)
                .toPromise()
                .then(function (t) {
                  return e.__toReturnType(t);
                })
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(d, function () {
              return e.notifyDataChange();
            });
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = r("readQueryToLoadObject")(
                  e.__environment,
                  s,
                  e.__getGQLParams(t),
                  function (t) {
                    return e.__toReturnType(t);
                  },
                );
                return { key: t, value: n };
              });
            return o;
          }),
          (n.__toReturnType = function (t) {
            var e,
              n,
              r =
                (e =
                  t == null ||
                  (n = t.ads_ad_account_settings_from_ad_account) == null
                    ? void 0
                    : n.feature_sticky_entries) != null
                  ? e
                  : [],
              o = {};
            for (var a of r)
              if (a != null && a.feature_name != null) {
                var i;
                o[a.feature_name] = {
                  status: c(a.status),
                  timestamp: (i = a.timestamp) != null ? i : 0,
                };
              }
            return { aplusc_sticky_config: o };
          }),
          t
        );
      })(r("ReverseInteropStoreSourceWeakBase"));
    function c(e) {
      if (e == null) return "NONE";
      switch (e) {
        case "OPTED_IN":
          return "OPTED_IN";
        case "DEFAULT_OPTED_IN_FIRST_TIME":
          return "DEFAULT_OPTED_IN_FIRST_TIME";
        case "OPTED_OUT":
          return "OPTED_OUT";
        default:
          return "NONE";
      }
    }
    l.default = u;
  },
  98,
);
