__d(
  "WebBloksComponentQueryFetcher",
  [
    "WebBloksCacheUtils",
    "WebBloksCachedStackedScreens",
    "WebBloksErrors",
    "WebBloksLogger",
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
      function t(e, t, n, o, a, i) {
        (i === void 0 && (i = new (r("WebBloksLogger"))()),
          (this.$1 = new Set()),
          (this.$2 = e),
          (this.$3 = t),
          (this.$4 = i),
          (this.$6 = n),
          (this.$7 = o),
          (this.$5 = a));
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
            r(t, a);
          } else this.$8(t, n, r);
        }),
        (n.$8 = function (t, n, r, a) {
          var e = this;
          if ((a === void 0 && (a = !0), !this.$1.has(t))) {
            this.$1.add(t);
            var i = this.$9(n.appId),
              l = o("WebBloksUtils").nullthrows(this.$2);
            l.fetchComponentQuery(n.appId, n.params)
              .then(function (l) {
                i();
                var s = new Map();
                try {
                  for (var u of l.components) {
                    var c = o("WebBloksPayloadParser").parseTree(
                      u.payload,
                      e.$6,
                      e.$7,
                      e.$5,
                      void 0,
                    );
                    s.set(u.id, c);
                  }
                } catch (e) {
                  throw new (o(
                    "WebBloksErrors",
                  ).WebBloksComponentQueryParseError)(
                    n.appId,
                    e instanceof Error ? e : null,
                  );
                }
                var d = { components: s },
                  m = {
                    response: d,
                    responseTimestampMs: Date.now().toString(),
                    queryPurpose: n.queryPurpose,
                    stackedScreens: l.stacked_screens,
                    stackedScreensDelayMs: l.stacked_screens_delay_ms,
                    stackedScreensConsumed: !1,
                  },
                  p = babelHelpers.extends(
                    {
                      result: d,
                      success: !0,
                      resources: a ? l.component_query_resources : void 0,
                    },
                    o("WebBloksCachedStackedScreens").readCachedStackedScreens(
                      m,
                    ),
                  );
                (e.$3.set(t, m),
                  e.$1.delete(t),
                  a && e.$10(l.component_query_responses, n, r, t),
                  r(t, p));
              })
              .catch(function (a) {
                (i(),
                  e.$1.delete(t),
                  r(t, {
                    result: { components: new Map() },
                    success: !1,
                    error:
                      a instanceof
                      o("WebBloksErrors").WebBloksComponentQueryParseError
                        ? a
                        : new (o("WebBloksErrors").WebBloksError)(
                            "Failed to fetch async component for appId: " +
                              n.appId,
                            a instanceof Error ? a : null,
                          ),
                  }));
              });
          }
        }),
        (n.$10 = function (t, n, r, a) {
          if (Array.isArray(t))
            for (var e of t) {
              var i = this.$11(e, n);
              if (!(i == null || i === a) && !this.$1.has(i)) {
                var l = this.$3.get(i);
                if (
                  !(
                    l != null &&
                    o("WebBloksCacheUtils").isResponseFresh(
                      l,
                      n.cacheTtlSeconds,
                    )
                  )
                )
                  try {
                    var s = JSON.parse(e.payload);
                    if (s == null || !Array.isArray(s.components))
                      throw new (o(
                        "WebBloksErrors",
                      ).WebBloksComponentQueryParseError)(e.app_id, null);
                    var u = new Map();
                    for (var c of s.components)
                      c == null ||
                        c.id == null ||
                        u.set(
                          c.id,
                          o("WebBloksPayloadParser").parseTree(
                            c.payload,
                            this.$6,
                            this.$7,
                            this.$5,
                            void 0,
                          ),
                        );
                    var d = { components: u },
                      m = {
                        response: d,
                        responseTimestampMs: Date.now().toString(),
                        queryPurpose: n.queryPurpose,
                      };
                    (this.$3.set(i, m),
                      r(
                        i,
                        babelHelpers.extends(
                          { result: d, success: !0 },
                          o(
                            "WebBloksCachedStackedScreens",
                          ).readCachedStackedScreens(m),
                        ),
                      ));
                  } catch (t) {
                    (this.$4.warn(
                      "WebBloks: corrupt bundled query payload for " + e.app_id,
                      t instanceof Error ? t : String(t),
                    ),
                      this.$8(
                        i,
                        babelHelpers.extends({}, n, {
                          appId: e.app_id,
                          params: o("WebBloksCacheUtils").resolveConsumedParams(
                            o("WebBloksUtils").cast(e.consumed_params),
                            n.params,
                          ),
                        }),
                        r,
                        !1,
                      ));
                  }
              }
            }
        }),
        (n.$11 = function (t, n) {
          try {
            var e = o("WebBloksCacheUtils").resolveConsumedParams(
              o("WebBloksUtils").cast(t.consumed_params),
              n.params,
            );
            return o("WebBloksCacheUtils").generateCacheKey(t.app_id, e);
          } catch (e) {
            var r;
            return (
              this.$4.warn(
                "WebBloks: cannot resolve bundled query cache key for " +
                  ((r = t == null ? void 0 : t.app_id) != null ? r : n.appId),
                e instanceof Error ? e : String(e),
              ),
              null
            );
          }
        }),
        (n.$9 = function (n) {
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
