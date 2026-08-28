__d(
  "preloadedGraphAPI",
  [
    "AdsPreloaderUtils",
    "FBLogger",
    "InteractionTracing",
    "PreloadingEvent.flow",
    "Promise",
    "adsIsPreloadingDebugModeFromURI",
    "clearTimeout",
    "cr:1612590",
    "getErrorSafe",
    "gkx",
    "performanceAbsoluteNow",
    "preloadedGraphAPIUtils",
    "qpl",
    "requireDeferred",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["__fb_trace_id__"],
      s,
      u,
      c = r("requireDeferred")("QuickPerformanceLogger").__setRef(
        "preloadedGraphAPI",
      ),
      d = r("adsIsPreloadingDebugModeFromURI")(),
      m = new Set(),
      p = {},
      _ = new Map(),
      f = [],
      g = {};
    function h(e) {
      var t;
      ((t = g[e]) != null ? t : []).forEach(function (e) {
        return e();
      });
    }
    function y(e, t) {
      var n;
      ((n = g[e]) != null ? n : (g[e] = [])).push(t);
    }
    var C = 0.01;
    function b(e) {
      var a,
        i = e.preloadInfo,
        l = i.asyncData,
        s = i.isScenarioOngoing;
      if (!s()) return e.go();
      var c = E(e);
      n("cr:1612590") != null &&
        n("cr:1612590").addDebugPreloadedCall({
          name: c.preloader,
          api_request_source: c.requestSource,
          timestamp: (u || (u = r("performanceAbsoluteNow")))(),
        });
      var d = (a = t.__pendingPreloaders) != null ? a : {};
      l.onError(function (t) {
        P(
          o("PreloadingEvent.flow").PreloadingEventName
            .ADS_INTERFACES_PRELOADING_ISSUE,
          o("PreloadingEvent.flow").PreloadingEventType
            .ERROR_LOADING_PRELOADED_DATA,
          e,
          c,
          t,
        );
      });
      var m;
      if (
        (L(l, c, function (e) {
          m = e;
        }),
        m)
      )
        return D(e, m, !0, c);
      var p = d[c.preloader],
        _ = r("gkx")("12639") ? 4e3 : 2e3;
      return p != null && x(e, p) == null ? D(e, p, !0, c) : k(e, _, c);
    }
    function v(e, t) {
      var n,
        r = R();
      ((r[e] = [
        (n = t == null ? void 0 : t.result) != null ? n : {},
        new Date().getTime(),
      ]),
        r.__onAdd(e));
    }
    function S(e) {
      t.__pendingPreloaders = e;
    }
    function R() {
      var e = t.__preloaderData || (t.__preloaderData = {});
      return ((e.__onAdd = h), e);
    }
    function L(e, t, n) {
      var o = R(),
        a = function (o) {
          var e;
          ((a = function (t) {}),
            (t.serverEnd =
              (e = t.serverEnd) != null
                ? e
                : (u || (u = r("performanceAbsoluteNow")))()),
            n(o));
        },
        i = function (n, i) {
          var e;
          r("InteractionTracing")
            .getPendingInteractions()
            .forEach(function (e) {
              e.addMarkerPoint(
                t.preloader + "_wpd_received_" + n,
                "AppTiming",
                void 0,
                i,
              );
            });
          var l = o[t.preloader],
            s = l[0],
            u = l[1];
          ((t.wpdArrive = (e = t.wpdArrive) != null ? e : u), a(s));
        };
      o[t.preloader]
        ? i("ONLOADED_SERVER_DATA_READY", { isRace: !1 })
        : (y(t.preloader, function () {
            return i("wpdListen", { isRace: !0 });
          }),
          e.onLoaded(function (e) {
            (r("InteractionTracing")
              .getPendingInteractions()
              .forEach(function (n) {
                n.addMarkerPoint(
                  t.preloader + "_adp_received",
                  "AppTiming",
                  void 0,
                  { isDummyData: !!e.__wpd__, isRace: !0 },
                );
              }),
              e.__wpd__
                ? o[t.preloader] && i("asyncData.onLoaded", { isRace: !0 })
                : a(e));
          }));
    }
    function E(e) {
      var t,
        n,
        o = e.preloadInfo.asyncData.getPreloaderName(),
        a = (t = e.source) != null ? t : "unknown",
        i = [o, a].join(":"),
        l = (n = _.get(i)) != null ? n : 0;
      _.set(i, l + 1);
      var s = {
        requestSource: a,
        requestedAt: (u || (u = r("performanceAbsoluteNow")))(),
        preloader: o,
        queryIndex: l,
      };
      return (f.push(s), s);
    }
    function k(e, t, a) {
      return (
        P(
          o("PreloadingEvent.flow").PreloadingEventName
            .ADS_INTERFACES_PRELOADING_ISSUE,
          o("PreloadingEvent.flow").PreloadingEventType
            .SERVER_DIDNT_BEAT_JS_EXECUTION,
          e,
          a,
        ),
        t <= 0
          ? I(e, a)
          : new (s || (s = n("Promise")))(function (n) {
              var o = !1,
                i = r("setTimeoutAcrossTransitions")(function () {
                  ((o = !0), n(I(e, a)));
                }, t);
              (L(e.preloadInfo.asyncData, a, function (t) {
                o || (r("clearTimeout")(i), n(D(e, t, !0, a)));
              }),
                e.preloadInfo.asyncData.onError(function (t) {
                  o || (r("clearTimeout")(i), n(e.go()));
                }));
            })
      );
    }
    function I(e, t) {
      var a,
        i = e.preloadInfo,
        l = i.asyncData,
        c = i.isScenarioOngoing;
      (P(
        o("PreloadingEvent.flow").PreloadingEventName
          .ADS_INTERFACES_PRELOADING_ISSUE,
        o("PreloadingEvent.flow").PreloadingEventType
          .SERVER_DIDNT_BEAT_API_START,
        e,
        t,
      ),
        (t.apiStart =
          (a = t.apiStart) != null
            ? a
            : (u || (u = r("performanceAbsoluteNow")))()));
      var d = e.go(),
        m = null;
      return (s || (s = n("Promise")))
        .race([
          new s(function (n) {
            L(l, t, function (r) {
              var o = m === null;
              (o &&
                !e.preloadInfo.mutableData.winner &&
                (e.preloadInfo.mutableData.winner = "server"),
                n(D(e, r, e.preloadInfo.mutableData.winner === "server", t, d)),
                (m = r));
            });
          }),
          d.then(function (n) {
            return (
              r("InteractionTracing")
                .getPendingInteractions()
                .forEach(function (e) {
                  e.addMarkerPoint(
                    t.preloader + "_api_data_received",
                    "AppTiming",
                  );
                }),
              (t.apiEnd = (u || (u = r("performanceAbsoluteNow")))()),
              m === null &&
                (e.preloadInfo.mutableData.winner ||
                  ((e.preloadInfo.mutableData.winner = "client"),
                  P(
                    o("PreloadingEvent.flow").PreloadingEventName
                      .ADS_INTERFACES_PRELOADING_ISSUE,
                    o("PreloadingEvent.flow").PreloadingEventType
                      .SERVER_DIDNT_BEAT_API,
                    e,
                    t,
                  )),
                (m = n)),
              n
            );
          }),
        ])
        .then(function (n) {
          return (
            c() ||
              P(
                o("PreloadingEvent.flow").PreloadingEventName
                  .ADS_INTERFACES_PRELOADING_ISSUE,
                o("PreloadingEvent.flow").PreloadingEventType
                  .UNNECESSARY_SERVER_PRELOADING,
                e,
                t,
                n,
              ),
            n
          );
        });
    }
    function T(e) {
      var n,
        r = (n = t.__pendingPreloaders) != null ? n : {};
      return r[e.preloadInfo.asyncData.getPreloaderName()] === null;
    }
    function D(e, t, a, i, l) {
      var c,
        d = x(e, t);
      if (d) {
        var m = r("gkx")("25268")
          ? Object.keys(d).filter(function (e) {
              return !e.startsWith("__");
            }).length === 1 && d.error != null
          : !1;
        if (m)
          a &&
            P(
              o("PreloadingEvent.flow").PreloadingEventName
                .ADS_INTERFACES_PRELOADING_ISSUE,
              o("PreloadingEvent.flow").PreloadingEventType
                .ERROR_LOADING_PRELOADED_DATA,
              e,
              i,
              d.error,
            );
        else
          return (
            a &&
              P(
                o("PreloadingEvent.flow").PreloadingEventName
                  .ADS_INTERFACES_PRELOADING_SUCCESS,
                o("PreloadingEvent.flow").PreloadingEventType.PRELOAD_HIT,
                e,
                i,
                t,
              ),
            (s || (s = n("Promise"))).resolve(
              babelHelpers.extends({}, d, { __preloaded: !0 }),
            )
          );
      } else if (
        a &&
        !e.preloadInfo.ignoreMismatches &&
        !(t != null && t.intentionally_empty)
      )
        if (T(e))
          P(
            o("PreloadingEvent.flow").PreloadingEventName
              .ADS_INTERFACES_PRELOADING_ISSUE,
            o("PreloadingEvent.flow").PreloadingEventType
              .SERVER_DISABLED_DIDNT_SEND_DATA,
            e,
            i,
            t,
          );
        else {
          P(
            o("PreloadingEvent.flow").PreloadingEventName
              .ADS_INTERFACES_PRELOADING_ISSUE,
            o("PreloadingEvent.flow").PreloadingEventType
              .SERVER_DIDNT_SEND_ALL_NECESSARY_DATA,
            e,
            i,
            t,
          );
          try {
            A(i, e, t);
          } catch (e) {
            r("FBLogger")("ads")
              .catching(r("getErrorSafe")(e))
              .mustfix("Error logging preloader mismatch to QPL");
          }
        }
      return (
        l ||
        ((i.apiStart =
          (c = i.apiStart) != null
            ? c
            : (u || (u = r("performanceAbsoluteNow")))()),
        e.go().then(function (e) {
          return ((i.apiEnd = (u || (u = r("performanceAbsoluteNow")))()), e);
        }))
      );
    }
    function x(t, n) {
      n = n;
      var r = o("AdsPreloaderUtils").getQueryKey(t);
      if (n[r]) return n[r];
      var a = o("AdsPreloaderUtils").extractMetadataFromRequest(t),
        i = o("AdsPreloaderUtils").getFieldsParamFromRequest(t),
        l = o("AdsPreloaderUtils").normalizeParamsForComparison(a.params),
        s = a.ids,
        u = {},
        c = function () {
          var r = o("AdsPreloaderUtils").extractMetadataFromServerKey(m),
            c = n[m];
          if (a.path !== r.path || a.method !== r.method || c.error != null)
            return 0;
          var d = o("AdsPreloaderUtils").filterIgnoredParams(
            o("AdsPreloaderUtils").normalizeParamsForComparison(r.params),
          );
          if (
            !o("preloadedGraphAPIUtils").isSubsetOf(
              l,
              d,
              i,
              t.preloadInfo.fieldComparators,
            )
          )
            return 0;
          var p = r.ids;
          if (s == null && p == null) return { v: c };
          if (s == null || p == null) return 0;
          if (a.isForSingleID || r.isForSingleID) {
            if (
              !s.every(function (e) {
                return p.indexOf(e) !== -1;
              })
            )
              return 0;
            if (a.isForSingleID && r.isForSingleID) return { v: c };
            if (a.isForSingleID)
              return {
                v: babelHelpers.extends(
                  { __fb_trace_id__: c.__fb_trace_id__ },
                  c[s[0]],
                ),
              };
            if (r.isForSingleID) {
              var _,
                f = c.__fb_trace_id__,
                g = babelHelpers.objectWithoutPropertiesLoose(c, e);
              return { v: ((_ = { __fb_trace_id__: f }), (_[p[0]] = g), _) };
            }
          }
          if (
            ((u.__fb_trace_id__ = c.__fb_trace_id__),
            (s = s.filter(function (e) {
              return p.indexOf(e) !== -1 ? ((u[e] = c[e]), !1) : !0;
            })),
            s.length === 0)
          )
            return { v: u };
        },
        d;
      for (var m of Object.keys(n)) if (((d = c()), d !== 0 && d)) return d.v;
      return null;
    }
    function $(e) {
      return e.replace(/\d{4,}/g, "{ID}");
    }
    function P(e, t, n, a, i) {
      var l;
      ((a.eventType = (l = a.eventType) != null ? l : t),
        (d ||
          t ===
            o("PreloadingEvent.flow").PreloadingEventType
              .SERVER_DIDNT_SEND_ALL_NECESSARY_DATA) &&
          ("" + String(t),
          N(t),
          o("AdsPreloaderUtils").getQueryKey(n),
          n.name,
          n.source),
        r("InteractionTracing")
          .getPendingInteractions()
          .forEach(function (e) {
            (e.addMarkerPoint(
              a.preloader + "_" + String(t) + "_" + $(n.name),
              "AppTiming",
            ),
              e.addAnnotationInt(String(t), 1));
          }));
      var s = {
        api_request_source: n.source,
        call_name: n.name,
        endpoint: n.path,
        error_type: t,
      };
      (Math.random() <= C &&
        ((s.search_query = o("AdsPreloaderUtils").getQueryKey(n)),
        (s.field_names =
          t ===
          o("PreloadingEvent.flow").PreloadingEventType
            .SERVER_DIDNT_SEND_ALL_NECESSARY_DATA
            ? Object.keys(i || {})
            : null)),
        n.preloadInfo.log(
          s,
          o("PreloadingEvent.flow").PreloadingEventName.getName(e),
        ));
    }
    function N(e) {
      switch (e) {
        case o("PreloadingEvent.flow").PreloadingEventType
          .SERVER_DIDNT_SEND_ALL_NECESSARY_DATA:
          return "\n          Graph API call is not being preloaded by AdsPreloader as declared!\n          Notice that the server and client queries are matched based on their\n          parameters, so look out for any parameter or path difference between\n          client and server queries.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .SERVER_DIDNT_BEAT_JS_EXECUTION:
          return "\n          The server query that preloads this Graph API call didn't respond\n          before the callsite in JavaScript executed.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .SERVER_DIDNT_BEAT_API:
          return "\n          The server query that preloads this Graph API call didn't respond\n          before the actual API call, so it was not useful whatsoever.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .SERVER_DISABLED_DIDNT_SEND_DATA:
          return "\n          Graph API call is not being preloaded by AdsPreloader because it was\n          disabled on that run. Probably caused by some experiment.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .UNNECESSARY_SERVER_PRELOADING:
          return "\n          The AdsPreloader query that is meant to preload this request finished\n          after the given scenario was concluded. This means this API call might\n          not be needed for the scenario at hand, and thus the preloading could\n          be removed.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .ERROR_LOADING_PRELOADED_DATA:
          return "\n          There was an error in the execution of the AdsPreloader query that\n          backs this Graph API call.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType.PRELOAD_HIT:
          return "\n          Preloaded data was successfully used by client query.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .SERVER_DIDNT_BEAT_API_START:
          return "\n          The server query that preloads this Graph API call didn't respond\n          before the actual API call and a subsequent delay, so it was not\n          useful whatsoever.\n        ";
        case o("PreloadingEvent.flow").PreloadingEventType
          .UNUSED_PRELOADED_DATA:
          return "\n          Preloaded data was unused.\n        ";
      }
    }
    function M(e, t) {
      p[e] = t;
    }
    function w() {
      return f;
    }
    function A(e, t, a) {
      var i, l;
      m.add(e.preloader);
      var s = o("AdsPreloaderUtils").getStringArrayAnnotations(t, a);
      (s && (e.stringArrayAnnotations = s),
        n("cr:1612590") !== null && n("cr:1612590").record(e.preloader, t, a));
      var u = babelHelpers.extends({}, p, {
        call_name: (i = t.name) != null ? i : "null",
        endpoint: t.path,
        preloader: t.preloadInfo.asyncData.getID(),
        request_source: (l = t.source) != null ? l : "null",
        uri: window.location.href,
      });
      c.onReady(function (e) {
        e.markEvent(r("qpl")._(41484301, "4983"), "preloader_mismatch", 3, {
          annotations: { string: u, string_array: s },
        });
      });
    }
    function F() {
      return Array.from(m);
    }
    ((l.preloadedGraphAPI = b),
      (l.setPreloaderData = v),
      (l.setPendingPreloaders = S),
      (l.addPreloaderLoggingContext = M),
      (l.getPreloadersUsageData = w),
      (l.getMismatchedPreloaders = F));
  },
  98,
);
