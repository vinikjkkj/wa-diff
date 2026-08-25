__d(
  "WebBloksComponentQueryFetcher",
  [
    "WebBloksCacheUtils",
    "WebBloksCachedStackedScreens",
    "WebBloksErrors",
    "WebBloksPayloadParser",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a) {
        (o === void 0 && (o = null),
          a === void 0 && (a = !1),
          (this.$1 = new Set()),
          (this.$2 = e),
          (this.$3 = t),
          (this.$5 = n),
          (this.$4 = r),
          (this.$6 = o),
          (this.$7 = a));
      }
      var t = e.prototype;
      return (
        (t.runQuery = function (t, n, r) {
          var e = this.$3.get(t);
          if (
            e != null &&
            o("WebBloksCacheUtils").isResponseFresh(e, n.cacheTtlSeconds)
          ) {
            var a = babelHelpers.extends(
              { result: e.response, success: !0 },
              o("WebBloksCachedStackedScreens").readCachedStackedScreens(e),
            );
            r(a);
          } else this.$8(t, n, r);
        }),
        (t.$8 = function (t, n, r) {
          var e = this;
          if (!this.$1.has(t)) {
            this.$1.add(t);
            var a = o("WebBloksUtils").nullthrows(this.$2);
            a.fetchComponentQuery(n.appId, n.params)
              .then(function (a) {
                var i = new Map();
                for (var l of a.components) {
                  var s = o("WebBloksPayloadParser").parseTree(
                    l.payload,
                    e.$5,
                    e.$4,
                    void 0,
                    e.$6,
                    e.$7,
                  );
                  i.set(l.id, s);
                }
                var u = { components: i },
                  c = {
                    response: u,
                    responseTimestampMs: Date.now().toString(),
                    queryPurpose: n.queryPurpose,
                    stackedScreens: a.stacked_screens,
                    stackedScreensDelayMs: a.stacked_screens_delay_ms,
                    stackedScreensConsumed: !1,
                  },
                  d = babelHelpers.extends(
                    { result: u, success: !0 },
                    o("WebBloksCachedStackedScreens").readCachedStackedScreens(
                      c,
                    ),
                  );
                (e.$3.set(t, c), e.$1.delete(t), r(d));
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
