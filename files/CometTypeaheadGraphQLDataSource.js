__d(
  "CometTypeaheadGraphQLDataSource",
  [
    "BaseCacheEntryKeyBuilder",
    "BaseTypeaheadDataProvider",
    "BaseTypeaheadDataProviderQueryVariablesBuilder",
    "BaseTypeaheadNetworkCacheDataSource",
    "BaseTypeaheadQueryDataCacheProvider",
    "baseTypeaheadDedupEntriesBuilder",
    "baseTypeaheadLabelSuffixBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.gqlQuery,
          n = e.normalize,
          o = e.options,
          a = e.queryVariablesBuilderFunction,
          i = e.relayEnvironment,
          l = e.suffixBuilder,
          s = function () {
            return a;
          },
          u = new (r("BaseTypeaheadDataProviderQueryVariablesBuilder"))(s),
          c = new (r("BaseTypeaheadDataProvider"))({
            options: o,
            query: t,
            queryVariablesBuilder: u,
            relayEnvironment: i,
          }),
          d = new (r("BaseTypeaheadQueryDataCacheProvider"))({
            dedupe: r("baseTypeaheadDedupEntriesBuilder")(
              r("BaseCacheEntryKeyBuilder"),
            ),
            suffixBuilder: l != null ? l : r("baseTypeaheadLabelSuffixBuilder"),
          });
        this.$1 = new (r("BaseTypeaheadNetworkCacheDataSource"))(c, d, {
          normalizeFunc: n,
        });
      }
      var t = e.prototype;
      return (
        (t.fetchCache = function (t) {
          return this.$1.fetchCache(t);
        }),
        (t.fetchNetwork = function (t) {
          return this.$1.fetchNetwork(t);
        }),
        (t.clearCache = function () {
          this.$1.clearCache();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
