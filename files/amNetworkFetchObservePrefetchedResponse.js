__d(
  "amNetworkFetchObservePrefetchedResponse",
  [
    "invariant",
    "AdsRelayHackPrefetchedResponseProviderFactory",
    "AdsRelayHackPreloaderCache",
    "PreloadingEvent.flow",
    "RelayPrefetchedResponseProvider",
    "RelayRuntime",
    "amNetworkFetchUtils",
    "clearImmediate",
    "clearTimeout",
    "setImmediate",
    "setTimeoutAcrossTransitions",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n =
        (e != null &&
          e.metadata != null &&
          e.metadata.prefetchedResponseProvider) ||
        void 0;
      return n != null
        ? (typeof n.get == "function" || s(0, 2666), r("unsafeCast")(n))
        : t != null
          ? r("AdsRelayHackPrefetchedResponseProviderFactory")(t)
          : r("RelayPrefetchedResponseProvider");
    }
    function u(t, n, a, i, l, s, u, c, d) {
      var m;
      if (!o("amNetworkFetchUtils").isQuery(t))
        return o("RelayRuntime").Observable.create(function (e) {
          return e.complete();
        });
      var p = o("amNetworkFetchUtils").getCacheID(t),
        _ =
          (m = c == null ? void 0 : c.isScenarioOngoing) != null
            ? m
            : function () {
                return !0;
              };
      if (!_()) {
        var f = o("AdsRelayHackPreloaderCache").clearRegistryForQueryID(p);
        return (
          f &&
            (a.prefetchingEvent = {
              name: o("PreloadingEvent.flow").PreloadingEventName
                .ADS_INTERFACES_PRELOADING_ISSUE,
              type: o("PreloadingEvent.flow").PreloadingEventType
                .UNNECESSARY_SERVER_PRELOADING,
            }),
          o("RelayRuntime").Observable.create(function (e) {
            return e.complete();
          })
        );
      }
      (o("AdsRelayHackPreloaderCache").registerPreloaderIfNeeded(p),
        o("AdsRelayHackPreloaderCache").loadPreloaderResultsIfNeeded(p));
      var g = e(l, c),
        h = g.get(s, p, n, t.name);
      return c != null && c.raceServerPreloader
        ? o("RelayRuntime")
            .Observable.create(function (e) {
              var t = null,
                n = "unknown",
                i = r("setTimeoutAcrossTransitions")(function () {
                  t = d().subscribe({
                    complete: function () {
                      n === "fallback" && e.complete();
                    },
                    next: function (r) {
                      n !== "prefetcher" &&
                        ((n = "fallback"),
                        (a.usedPrefetcher = !1),
                        (a.prefetchingEvent = {
                          name: o("PreloadingEvent.flow").PreloadingEventName
                            .ADS_INTERFACES_PRELOADING_ISSUE,
                          type: o("PreloadingEvent.flow").PreloadingEventType
                            .SERVER_DIDNT_BEAT_API,
                        }),
                        e.next(r));
                    },
                  });
                }, 2e3),
                s = h
                  .do({
                    complete: function () {
                      (r("clearTimeout")(i),
                        n !== "fallback" && (n = "prefetcher"));
                    },
                    error: function () {
                      (r("clearTimeout")(i),
                        n !== "fallback" && (n = "prefetcher"));
                    },
                    next: function () {
                      (r("clearTimeout")(i),
                        n !== "fallback" && (n = "prefetcher"));
                    },
                  })
                  .subscribe({
                    complete: function () {
                      n !== "fallback" &&
                        (a.hasPrefetcher &&
                          a.prefetchingEvent == null &&
                          (a.prefetchingEvent = {
                            name: o("PreloadingEvent.flow").PreloadingEventName
                              .ADS_INTERFACES_PRELOADING_ISSUE,
                            type: o("PreloadingEvent.flow").PreloadingEventType
                              .SERVER_DIDNT_SEND_ALL_NECESSARY_DATA,
                          }),
                        e.complete());
                    },
                    error: function (r) {
                      n !== "fallback" &&
                        ((a.prefetchingEvent = {
                          error: r,
                          name: o("PreloadingEvent.flow").PreloadingEventName
                            .ADS_INTERFACES_PRELOADING_ISSUE,
                          type: o("PreloadingEvent.flow").PreloadingEventType
                            .ERROR_LOADING_PRELOADED_DATA,
                        }),
                        e.complete());
                    },
                    next: function (r) {
                      if (n !== "fallback") {
                        if (!o("amNetworkFetchUtils").cacheDataIsFresh(r, l)) {
                          a.prefetchingEvent = {
                            name: o("PreloadingEvent.flow").PreloadingEventName
                              .ADS_INTERFACES_PRELOADING_ISSUE,
                            type: o("PreloadingEvent.flow").PreloadingEventType
                              .UNUSED_PRELOADED_DATA,
                          };
                          return;
                        }
                        (u != null && u({ prefetched: !0 }),
                          (a.usedPrefetcher = !0),
                          (a.prefetchingEvent = {
                            name: o("PreloadingEvent.flow").PreloadingEventName
                              .ADS_INTERFACES_PRELOADING_SUCCESS,
                            type: o("PreloadingEvent.flow").PreloadingEventType
                              .PRELOAD_HIT,
                          }),
                          e.next(r));
                      }
                    },
                  });
              return function () {
                var e;
                (r("clearTimeout")(i),
                  s.unsubscribe(),
                  (e = t) == null || e.unsubscribe());
              };
            })
            .map(function (e) {
              return (i && i.set(p, n, e), e);
            })
        : o("RelayRuntime").Observable.create(function (e) {
            var t = !0,
              s = null;
            (c == null ? void 0 : c.ignoreIfServerDidntBeatJSExecution) ===
              !0 &&
              (s = r("setImmediate")(function () {
                t &&
                  ((a.prefetchingEvent = {
                    name: o("PreloadingEvent.flow").PreloadingEventName
                      .ADS_INTERFACES_PRELOADING_ISSUE,
                    type: o("PreloadingEvent.flow").PreloadingEventType
                      .SERVER_DIDNT_BEAT_JS_EXECUTION,
                  }),
                  e.complete());
              }));
            var d = h.subscribe({
              complete: function () {
                (a.hasPrefetcher &&
                  a.prefetchingEvent == null &&
                  (a.prefetchingEvent = {
                    name: o("PreloadingEvent.flow").PreloadingEventName
                      .ADS_INTERFACES_PRELOADING_ISSUE,
                    type: o("PreloadingEvent.flow").PreloadingEventType
                      .SERVER_DIDNT_SEND_ALL_NECESSARY_DATA,
                  }),
                  (t = !1),
                  r("clearImmediate")(s),
                  e.complete());
              },
              error: function (i) {
                ((t = !1),
                  r("clearImmediate")(s),
                  (a.prefetchingEvent = {
                    name: o("PreloadingEvent.flow").PreloadingEventName
                      .ADS_INTERFACES_PRELOADING_ISSUE,
                    type: o("PreloadingEvent.flow").PreloadingEventType
                      .ERROR_LOADING_PRELOADED_DATA,
                  }),
                  e.error(i));
              },
              next: function (d) {
                if (
                  ((t = !1),
                  r("clearImmediate")(s),
                  !o("amNetworkFetchUtils").cacheDataIsFresh(d, l))
                ) {
                  a.prefetchingEvent = {
                    name: o("PreloadingEvent.flow").PreloadingEventName
                      .ADS_INTERFACES_PRELOADING_ISSUE,
                    type: o("PreloadingEvent.flow").PreloadingEventType
                      .UNUSED_PRELOADED_DATA,
                  };
                  return;
                }
                (u != null && u({ prefetched: !0 }),
                  (a.usedPrefetcher = !0),
                  (a.prefetchingEvent = {
                    name: o("PreloadingEvent.flow").PreloadingEventName
                      .ADS_INTERFACES_PRELOADING_SUCCESS,
                    type: o("PreloadingEvent.flow").PreloadingEventType
                      .PRELOAD_HIT,
                  }),
                  i && i.set(p, n, d),
                  e.next(d));
              },
            });
            return function () {
              (r("clearImmediate")(s), d.unsubscribe());
            };
          });
    }
    l.default = u;
  },
  98,
);
