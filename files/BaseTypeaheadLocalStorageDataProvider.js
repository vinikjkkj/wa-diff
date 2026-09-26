__d(
  "BaseTypeaheadLocalStorageDataProvider",
  [
    "BaseTypeaheadDataProvider",
    "BaseTypeaheadLocalStorageDataProviderStorageKey",
    "FBLogger",
    "Promise",
    "WebStorage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["storageKey", "storageTimespan"],
      s,
      u,
      c = 864e5,
      d = (function () {
        function t(t) {
          var n = t.storageKey,
            a = t.storageTimespan,
            i = a === void 0 ? c : a,
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
          ((this.$1 = new (r("BaseTypeaheadDataProvider"))(l)),
            (this.$3 =
              n != null
                ? o("BaseTypeaheadLocalStorageDataProviderStorageKey")
                    .StorageKeyPrefix + n
                : null),
            (this.$4 = i));
          var s = l.queryVariablesBuilder;
          this.$2 = s;
        }
        var a = t.prototype;
        return (
          (a.fetch = function (t) {
            var e = this,
              r = this.$3 != null ? this.$5(t) : null;
            if (r != null) {
              var o = this.$2.build(),
                a = o(t);
              return (u || (u = n("Promise"))).resolve({
                requestQueryVariables: a,
                response: r,
              });
            }
            return this.$1.fetch(t).then(function (n) {
              var r = n.response;
              return (r != null && e.$3 != null && e.$6(t, r), n);
            });
          }),
          (a.clearLocalStorage = function () {
            var e = this.$3,
              t = (s || (s = r("WebStorage"))).getLocalStorage();
            t == null || e == null || t.removeItem(e);
          }),
          (a.$5 = function (t) {
            var e = this.$3,
              n = (s || (s = r("WebStorage"))).getLocalStorage();
            if (n == null || e == null) return null;
            var o = n.getItem(e);
            if (o == null) return null;
            var a;
            try {
              a = JSON.parse(o);
            } catch (e) {
              r("FBLogger")("search")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "Cannot deserialize bootstrap response from local storage due to error",
                );
            }
            if (a == null) return null;
            var i = a,
              l = i.queryVariables,
              u = i.response,
              c = i.timestamp,
              d = this.$2.build(),
              m = d(t);
            if (JSON.stringify(l) !== JSON.stringify(m))
              return (n.removeItem(e), null);
            var p = Date.now();
            return c + Number(this.$4) >= p ? u : (n.removeItem(e), null);
          }),
          (a.$6 = function (t, n) {
            var e = this.$3,
              o = (s || (s = r("WebStorage"))).getLocalStorage();
            if (!(o == null || e == null)) {
              var a = this.$2.build(),
                i = a(t);
              try {
                var l = Date.now(),
                  u = JSON.stringify({
                    queryVariables: i,
                    response: n,
                    timestamp: l,
                  });
                o.setItem(e, u);
              } catch (e) {
                r("FBLogger")("search")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "Cannot save bootstrap response to local storage due to error",
                  );
              }
            }
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
