__d(
  "WebBloksComponentQueryFetcher",
  [
    "WebBloksCacheUtils",
    "WebBloksCachedStackedScreens",
    "WebBloksErrors",
    "WebBloksPayloadParser",
    "WebBloksRenderDiagnostics",
    "WebBloksSSRUtils",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4;
    function s() {}
    var u = (function () {
      function t(e, t, n, r, o) {
        ((this.$1 = new Set()),
          (this.$2 = e),
          (this.$3 = t),
          (this.$5 = n),
          (this.$6 = r),
          (this.$4 = o));
      }
      var n = t.prototype;
      return (
        (n.runQuery = function (t, n, r) {
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
          } else this.$7(t, n, r);
        }),
        (n.$7 = function (t, n, r) {
          var e = this;
          if (!this.$1.has(t)) {
            this.$1.add(t);
            var a = this.$8(n.appId),
              i = o("WebBloksUtils").nullthrows(this.$2);
            i.fetchComponentQuery(n.appId, n.params)
              .then(function (i) {
                a();
                var l = new Map();
                try {
                  for (var s of i.components) {
                    var u = o("WebBloksPayloadParser").parseTree(
                      s.payload,
                      e.$5,
                      e.$6,
                      e.$4,
                      void 0,
                    );
                    l.set(s.id, u);
                  }
                } catch (e) {
                  throw new (o(
                    "WebBloksErrors",
                  ).WebBloksComponentQueryParseError)(
                    n.appId,
                    e instanceof Error ? e : null,
                  );
                }
                var c = { components: l },
                  d = {
                    response: c,
                    responseTimestampMs: Date.now().toString(),
                    queryPurpose: n.queryPurpose,
                    stackedScreens: i.stacked_screens,
                    stackedScreensDelayMs: i.stacked_screens_delay_ms,
                    stackedScreensConsumed: !1,
                  },
                  m = babelHelpers.extends(
                    { result: c, success: !0 },
                    o("WebBloksCachedStackedScreens").readCachedStackedScreens(
                      d,
                    ),
                  );
                (e.$3.set(t, d), e.$1.delete(t), r(m));
              })
              .catch(function (i) {
                (a(),
                  e.$1.delete(t),
                  r({
                    result: { components: new Map() },
                    success: !1,
                    error:
                      i instanceof
                      o("WebBloksErrors").WebBloksComponentQueryParseError
                        ? i
                        : new (o("WebBloksErrors").WebBloksError)(
                            "Failed to fetch async component for appId: " +
                              n.appId,
                            i instanceof Error ? i : null,
                          ),
                  }));
              });
          }
        }),
        (n.$8 = function (n) {
          if (
            !o("WebBloksSSRUtils").canUseDOM ||
            !o(
              "WebBloksRenderDiagnostics",
            ).isWebBloksRenderDiagnosticsInstalled()
          )
            return s;
          var t = Date.now(),
            r = o("WebBloksRenderDiagnostics").getWebBloksDocumentGeneration(),
            a = window.setTimeout(function () {
              document.visibilityState !== "visible" ||
                Date.now() - t > e * 1.5 ||
                o(
                  "WebBloksRenderDiagnostics",
                ).getWebBloksDocumentGeneration() !== r ||
                o("WebBloksRenderDiagnostics").reportWebBloksRenderDrop(
                  "async_fetch_timeout",
                  { queryAppId: n },
                );
            }, e);
          return function () {
            return window.clearTimeout(a);
          };
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
