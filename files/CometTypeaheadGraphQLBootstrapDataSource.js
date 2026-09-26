__d(
  "CometTypeaheadGraphQLBootstrapDataSource",
  [
    "BaseTypeaheadDataCacheProvider",
    "BaseTypeaheadInMemoryMapDataCache",
    "baseTypeaheadContainsMatchBuilder",
    "baseTypeaheadPrefixWithDocumentContainsMatchBuilder",
    "baseTypeaheadQueryMatchBuilder",
    "baseTypeaheadStartsWithMatchBuilder",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        prefix: r("baseTypeaheadStartsWithMatchBuilder"),
        prefix_with_document_substring: r(
          "baseTypeaheadPrefixWithDocumentContainsMatchBuilder",
        ),
        substring: r("baseTypeaheadContainsMatchBuilder"),
        token: r("baseTypeaheadQueryMatchBuilder"),
      },
      s = (function () {
        function t(t) {
          var n = t.bootstrapDataProvider,
            o = t.matchStrategy,
            a = o === void 0 ? "prefix" : o,
            i = t.normalize;
          ((this.$2 = !1),
            (this.$1 = new (r("BaseTypeaheadDataCacheProvider"))({
              cache: new (r("BaseTypeaheadInMemoryMapDataCache"))(),
              matchBuilder: e[a],
            })),
            (this.$3 = i),
            (this.$4 = n));
        }
        var n = t.prototype;
        return (
          (n.isBootstrapped = function () {
            return this.$2;
          }),
          (n.bootstrap = function () {
            var e = this;
            r("promiseDone")(
              this.$4
                .fetch({ query: "" })
                .then(function (t) {
                  var n = t.response;
                  return e.$3(n);
                })
                .then(function (t) {
                  e.$1.add(t, null);
                })
                .then(function () {
                  return (e.$2 = !0);
                }),
            );
          }),
          (n.fetchCache = function (t) {
            var e = t.query,
              n = this.$1.match(e);
            return { entries: n, params: t };
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
