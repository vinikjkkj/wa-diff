__d(
  "WebBloksComponentQueryFetcher",
  [
    "WebBloksCacheUtils",
    "WebBloksErrors",
    "WebBloksPayloadParser",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = new Set()), (this.$2 = e), (this.$3 = t), (this.$4 = n));
      }
      var t = e.prototype;
      return (
        (t.runQuery = function (t, n, r) {
          var e = this.$3.get(t);
          if (
            e != null &&
            o("WebBloksCacheUtils").isResponseFresh(e, n.cacheTtlSeconds)
          ) {
            var a = { result: e.response, success: !0 };
            r(a);
          } else this.$5(t, n, r);
        }),
        (t.$5 = function (t, n, r) {
          var e = this;
          if (!this.$1.has(t)) {
            this.$1.add(t);
            var a = o("WebBloksUtils").nullthrows(this.$2);
            a.fetchComponentQuery(n.appId, n.params)
              .then(function (a) {
                var i = new Map();
                for (var l of a.components) {
                  var s = o("WebBloksPayloadParser").parseTree(l.payload, e.$4);
                  i.set(l.id, s);
                }
                var u = { components: i },
                  c = { result: u, success: !0 };
                (e.$3.set(t, {
                  response: u,
                  responseTimestampMs: Date.now().toString(),
                  queryPurpose: n.queryPurpose,
                }),
                  e.$1.delete(t),
                  r(c));
              })
              .catch(function (r) {
                throw (
                  e.$1.delete(t),
                  new (o("WebBloksErrors").WebBloksError)(
                    "Failed to fetch async component for appId: " + n.appId,
                    r,
                  )
                );
              });
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
