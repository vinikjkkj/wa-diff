__d(
  "AdsMgmtQPLLogger",
  [
    "AdsAccountStore",
    "AdsManagerAppConfig",
    "AdsManagerDowntimeProductionFiredrill",
    "AdsManagerQPLUserFlowLogger",
    "AdsMgmtStartupLogger",
    "Arbiter",
    "Bootloader",
    "BootloaderEvents",
    "BootloaderEventsPerf",
    "QPLEvent",
    "QPLServerClock",
    "QuickPerformanceLogger",
    "URI",
    "URIInitDataUtil",
    "forEachObject",
    "isEmptyObject",
    "performanceNavigationStart",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (c = r("qpl"))._(41484289, "3972"),
      m = 250,
      p = 0,
      _ = new RegExp(/\d+/g),
      f = [
        c._(41484308, "1757"),
        c._(41491183, "634"),
        c._(41484313, "2554"),
        c._(41484309, "430"),
        c._(41484317, "842"),
        c._(41490114, "4659"),
        c._(41487618, "811"),
        c._(41484311, "2605"),
        c._(41484318, "4248"),
        c._(41498606, "4668"),
        c._(41497570, "1333"),
        c._(270210288, "1246"),
        c._(270219249, "8280"),
        d,
      ],
      g = [
        c._(41491183, "634"),
        c._(41484313, "2554"),
        c._(41484309, "430"),
        c._(41490114, "4659"),
        c._(41487618, "811"),
        c._(41484311, "2605"),
        c._(41498606, "4668"),
        c._(41497570, "1333"),
        d,
      ],
      h = [
        c._(41491183, "634"),
        c._(41484313, "2554"),
        c._(41490114, "4659"),
        c._(41487618, "811"),
        c._(41498606, "4668"),
        c._(41497570, "1333"),
        d,
        c._(41484311, "2605"),
        c._(41484309, "430"),
      ],
      y = new Set(["JS_RUN_START"]),
      C = {},
      b = {},
      v = {},
      S = {},
      R,
      L;
    function E(e, t, n, o) {
      (o === void 0 && (o = 1),
        o !== 0 &&
          (o === 1 || Math.random() * o <= 1) &&
          (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(e, t, n));
    }
    function k(t, n) {
      var r;
      n === void 0 && (n = p);
      var a = (e || (e = o("QPLEvent"))).getMarkerId(t);
      return ((r = C[a]) == null ? void 0 : r[n]) != null;
    }
    function I(t, n) {
      var r;
      n === void 0 && (n = p);
      var a = (e || (e = o("QPLEvent"))).getMarkerId(t);
      return (r = C[a]) == null ? void 0 : r[n];
    }
    function T(t, n, a) {
      (n === void 0 &&
        (n = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()),
        a === void 0 && (a = p));
      var i = (e || (e = o("QPLEvent"))).getMarkerId(t);
      (C[i] || (C[i] = {}), (C[i][a] = n), b[i] || (b[i] = {}), (b[i][a] = {}));
    }
    function D(e) {
      var t = f.filter(function (e) {
        return k(e);
      });
      if (t.length > 0) {
        var n,
          o = e.preloaded === !0 ? "PreloadedAPI" : "API",
          a =
            "[" +
            o +
            "] " +
            ((n = e.source) != null ? n : "") +
            " " +
            e.name.replace(_, "FBID");
        t.forEach(function (t) {
          var n = w(t, a);
          ($(t, n + "_START", r("performanceNavigationStart")() + e.start_time),
            $(t, n + "_END"));
        });
      }
    }
    function x(e) {
      $(r("qpl")._(41484289, "3972"), e);
    }
    function $(t, n, a, i, l) {
      if (
        (a === void 0 &&
          (a = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()),
        i === void 0 && (i = p),
        l === void 0 && (l = !1),
        t === d && (y.has(n) || n.endsWith("_MOUNT_START")) && j(t, n),
        l)
      )
        return (u || (u = r("QuickPerformanceLogger"))).markerPoint(t, n, {
          instanceKey: i,
          timestamp: a,
        });
      var s = (e || (e = o("QPLEvent"))).getMarkerId(t);
      (v[s] || (v[s] = {}), v[s][i] || (v[s][i] = {}), (v[s][i][n] = a));
    }
    function P(e, t, n) {
      for (var r in t) $(e, r, t[r], n);
    }
    function N(e) {
      M();
    }
    function M() {
      ((L = o("AdsMgmtStartupLogger").getQPLServerData()),
        R != null && L != null && F(R, L));
    }
    function w(t, n, r) {
      var a;
      r === void 0 && (r = p);
      var i = (e || (e = o("QPLEvent"))).getMarkerId(t);
      return ((a = b[i]) == null ? void 0 : a[r]) == null
        ? n
        : b[i][r][n]
          ? n + "_" + ++b[i][r][n]
          : ((b[i][r][n] = 1), n);
    }
    function A(e) {
      t.__epilogueQPLData = e;
    }
    function F(n, a) {
      var i,
        l,
        s,
        c,
        _,
        f = a.serverStartTime,
        g = t.__epilogueQPLData;
      g &&
        (Object.assign(a.points, g.points),
        Object.assign(a.annotations, g.annotations),
        Object.assign(a.payloadRefs, g.payloadRefs));
      var h = C[(e || (e = o("QPLEvent"))).getMarkerId(d)][p];
      for (var y in a.annotations) {
        var b,
          v = a.annotations[y];
        (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
          d,
          { string: ((b = {}), (b[y] = v), b) },
          { instanceKey: p },
        );
      }
      for (var S in a.points) {
        var k = a.points[S] - f,
          I = h + m + k;
        I <= n.timestamp && $(d, S, I);
      }
      r("Arbiter").subscribeOnce("ads_account_store_acc_id", function (e, t) {
        var n,
          r = t.src,
          o = t.ts;
        E(d, { int: ((n = {}), (n["ads_acc_store_" + r] = Math.round(o)), n) });
      });
      var T = (i = t.performance) == null ? void 0 : i.timing;
      if (T)
        for (var D in T) {
          var x = T[D];
          x > 0 && $(d, "[NAV] " + D, x);
        }
      (E(d, {
        int: {
          bigPipeFR: Math.round(((l = t.__bigPipeFR) != null ? l : 0) - h),
          bigPipeCtor: Math.round(((s = t.__bigPipeCtor) != null ? s : 0) - h),
          bigPipeFactory: Math.round(
            ((c = t.__bigPipeFactory) != null ? c : 0) - h,
          ),
        },
      }),
        r("Arbiter").subscribeOnce("pagelet_event", function (e, t) {
          var n = t.event,
            r = t.id,
            o = t.ts,
            a = null,
            i = r.startsWith("adp_"),
            l = r.replace(/^adp_(.*)_[a-z0-9]+$/, "$1");
          switch (n) {
            case "prearrive":
              a = "[ARRIVE] " + l + "_start";
              break;
            case "arrive":
              a = "[ARRIVE] " + l + "_end";
              break;
          }
          if (!i)
            switch (n) {
              case "css":
                a = "[DISP_RSRC] " + l + "_start";
                break;
              case "css_load":
                a = "[DISP_RSRC] " + l + "_end";
                break;
              case "display_start":
                a = "[RENDER] " + l + "_start";
                break;
              case "display":
                a = "[RENDER] " + l + "_end";
                break;
              case "jsstart":
                a = "[NORM_RSRC] " + l + "_start";
                break;
              case "jsdone":
                a = "[NORM_RSRC] " + l + "_end";
                break;
              case "preonload":
                a = "[ONLOAD] " + l + "_start";
                break;
              case "onload":
                a = "[ONLOAD] " + l + "_end";
                break;
            }
          a !== null && $(d, a, o);
        }));
      function P() {
        var e = {
          encodedSize: 0,
          transferSize: 0,
          count: 0,
          cacheCount: 0,
          firstEnd: 1 / 0,
          lastStart: -1 / 0,
        };
        return {
          js: babelHelpers.extends({}, e),
          css: babelHelpers.extends({}, e),
          start: 1 / 0,
          end: -1 / 0,
        };
      }
      var N = {},
        M = r("Bootloader").getURLToHashMap();
      ((_ = window.performance) == null ||
        _.getEntriesByType("resource").forEach(function (e) {
          var t,
            n,
            r = e.name,
            o = ((t = /\.(js|css)(\?|$)/.exec(r)) != null ? t : [])[1];
          if (o != null) {
            var i = h + e.startTime,
              l = i + e.duration,
              s = M.get(r),
              u =
                (n = a.payloadRefs[s != null ? s : ""]) != null
                  ? n
                  : ["client_unknown"];
            (u[0] !== "client_unknown" &&
              u[0] !== "early_flush" &&
              u.push(u[0] + "_exclusive"),
              ["total"].concat(u).forEach(function (t) {
                N[t] || (N[t] = P());
                var n = N[t];
                ((n.start = Math.min(n.start, i)),
                  (n.end = Math.max(n.end, l)));
                var r = o === "js" || o === "css" ? n[o] : null;
                r &&
                  ((r.encodedSize += e.encodedBodySize),
                  (r.transferSize += e.transferSize),
                  (r.count += 1),
                  e.transferSize === 0 && (r.cacheCount += 1),
                  (r.firstEnd = Math.min(r.firstEnd, l - h)),
                  (r.lastStart = Math.max(r.lastStart, i - h)));
              }));
          }
        }),
        r("forEachObject")(N, function (e, t) {
          ($(d, "[Resources] " + t + "_start", e.start),
            $(d, "[Resources] " + t + "_end", e.end),
            ["js", "css"].forEach(function (n) {
              return r("forEachObject")(e[n], function (e, o) {
                var a;
                (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                  d,
                  { int: ((a = {}), (a[t + "_" + n + "_" + o] = e), a) },
                  { instanceKey: p },
                );
              });
            }));
        }),
        j(d, "pageLoadVisibleRows"));
      var w = K();
      ((w == null ? void 0 : w.enabled) === !0 &&
        (E(d, { int: { rafEstimatedFrequency: Math.round(w.freq) } }),
        (w.enabled = !1)),
        B(d, n.action, n.timestamp, n.instanceKey),
        (R = null),
        (L = null));
    }
    function O(t, n, r) {
      var a;
      r === void 0 && (r = p);
      var i = (e || (e = o("QPLEvent"))).getMarkerId(t),
        l = S[i] || ((a = {}), (a[r] = []), a);
      ((S[i] = l), l[r] == null && (l[r] = []), l[r].push(n));
    }
    function B(t, n, a, i) {
      var l, s, c;
      (a === void 0 &&
        (a = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()),
        i === void 0 && (i = p));
      var d = (e || (e = o("QPLEvent"))).getMarkerId(t),
        m = (l = C[d]) == null ? void 0 : l[i];
      if (m != null) {
        (delete C[d][i], Object.keys(C[d]).length === 0 && delete C[d]);
        var _ = (s = v[d]) == null ? void 0 : s[i];
        _ != null &&
          (r("forEachObject")(_, function (e, n) {
            e <= a &&
              e >= m &&
              (u || (u = r("QuickPerformanceLogger"))).markerPoint(t, n, {
                instanceKey: i,
                timestamp: e,
              });
          }),
          delete v[d][i],
          Object.keys(v[d]).length === 0 && delete v[d],
          delete b[d][i],
          Object.keys(b[d]).length === 0 && delete b[d]);
        var f =
            (c = r("AdsAccountStore").getSelectedAccountID()) != null
              ? c
              : o("URIInitDataUtil").getAccountID(),
          g = o("URIInitDataUtil").getBusinessID(),
          h = { sessionId: o("AdsManagerAppConfig").sessionID };
        (f != null && (h.ad_account_id = f),
          g != null && (h.business_id = g),
          E(t, { string: h }, { instanceKey: i }),
          W(t, n, i, a),
          (u || (u = r("QuickPerformanceLogger"))).markerEnd(t, n, i, a));
      }
    }
    function W(t, n, a, i) {
      var l,
        s = (e || (e = o("QPLEvent"))).getMarkerId(t),
        u = (l = S[s]) == null ? void 0 : l[a];
      u &&
        (u.forEach(function (e) {
          e(t, n, i, a);
        }),
        delete S[s][a],
        r("isEmptyObject")(S[s]) && delete S[s]);
    }
    function q(e, t, n) {
      (t === void 0 &&
        (t = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()),
        n === void 0 && (n = p),
        (R = { action: e, timestamp: t, instanceKey: n }),
        L != null && F(R, L));
    }
    function U(e, t, n, a) {
      if (
        (t === void 0 &&
          (t = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()),
        n === void 0 && (n = p),
        a === void 0 && (a = !1),
        T(e, t, n),
        a)
      )
        o("AdsManagerQPLUserFlowLogger").start(e, {
          instanceKey: n,
          timestamp: t,
        });
      else {
        var i = o("QPLServerClock").convertToTimeOnServer(t);
        (u || (u = r("QuickPerformanceLogger"))).markerStart(e, n, t, {
          qplInternalDoNotUseAbsoluteTimeOrigin: i,
          enableE2ETracing: !0,
        });
      }
    }
    function V(e, t, n) {
      (t === void 0 && (t = p),
        n === void 0 && (n = !1),
        T(e, r("performanceNavigationStart")(), t),
        n
          ? o("AdsManagerQPLUserFlowLogger").startFromNavStart(e, {
              instanceKey: t,
            })
          : (u || (u = r("QuickPerformanceLogger"))).markerStartFromNavStart(
              e,
              t,
              {
                qplInternalDoNotUseConvertToTimeOnServer:
                  o("QPLServerClock").convertToTimeOnServer,
              },
            ));
    }
    function H() {
      g.length &&
        o("BootloaderEvents").onBootload(function (e) {
          var t = o("BootloaderEventsPerf").computeBLData(e),
            n = g.filter(function (e) {
              return k(e);
            });
          if (n.length > 0) {
            var r = t.start_time,
              a = r + t.durations.callback_wait;
            t.components.forEach(function (e) {
              var t = "[Bootload] " + e;
              n.forEach(function (e) {
                ($(e, t + "_START", r), $(e, t + "_END", a));
              });
            });
          }
        });
    }
    function G(e, t, n, a) {
      var i = a === void 0 ? {} : a,
        l = i.timestamp,
        s =
          l === void 0
            ? (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()
            : l,
        c = i.annotations;
      ((u || (u = r("QuickPerformanceLogger"))).markEvent(e, t, n, {
        timestamp: s,
        annotations: c,
      }),
        o("AdsManagerDowntimeProductionFiredrill").markMirroredEvent(e, t, n, {
          timestamp: s,
          annotations: c,
        }));
    }
    function z(e, t, n, o) {
      (o === void 0 && (o = p),
        $(
          e,
          t + "_START",
          (u || (u = r("QuickPerformanceLogger"))).currentTimestamp(),
          o,
        ));
      var a = n();
      return ($(e, t + "_END", u.currentTimestamp(), o), a);
    }
    function j(e, t) {
      var n = K();
      if ((n == null ? void 0 : n.enabled) === !0) {
        var r;
        E(e, {
          int:
            ((r = {}),
            (r[t + "_raf_count"] = n.count),
            (r[t + "_raf_missed_count"] = n.getMissedFrames()),
            r),
        });
      }
    }
    function K() {
      return t.__ads_raf;
    }
    function Q() {
      if (h.length) {
        var t = new Map(),
          n = function (a, i, l) {
            var n = h.filter(function (e) {
              return k(e);
            });
            if (!(n.length <= 0)) {
              var u =
                  a.uri instanceof (s || (s = r("URI")))
                    ? a.uri
                    : new (s || (s = r("URI")))(a.uri),
                c =
                  "[AsyncRequest] " +
                  a.getMethod() +
                  " " +
                  u.getPath().replace(_, "FBID");
              n.forEach(function (n) {
                var r = (e || (e = o("QPLEvent"))).getMarkerId(n),
                  s = a.id + "-" + r,
                  u = t.get(s);
                (u == null && l && ((u = w(n, c)), t.set(s, u)),
                  u != null && $(n, u + "_" + (l ? "START" : "END"), i),
                  l || t.delete(s));
              });
            }
          };
        (r("Arbiter").subscribe("AsyncRequest/send", function (e, t) {
          var r = t.request,
            o = t.ts;
          n(r, o, !0);
        }),
          r("Arbiter").subscribe("AsyncRequest/response", function (e, t) {
            var r = t.request,
              o = t.ts;
            n(r, o, !1);
          }));
      }
    }
    (H(), Q());
    var X = {
      markerStartFromNavStart: V,
      markerStart: U,
      markerAnnotate: E,
      addPoint: $,
      markerEnd: B,
      onMarkerEnd: O,
      isMarkerActive: k,
    };
    ((l.__NETWORK_TIME_ESTIMATE = m),
      (l.DEFAULT_INSTANCE_KEY = p),
      (l.__activeMarkers = C),
      (l.__points = v),
      (l.__markerEndCallbacks = S),
      (l.markerAnnotate = E),
      (l.isMarkerActive = k),
      (l.getMarkerStart = I),
      (l.addGraphAPIPoint = D),
      (l.addStartupCompletePoint = x),
      (l.addPoint = $),
      (l.addPoints = P),
      (l.addServerStartupCompleteData = N),
      (l.addServerStartupComplete = M),
      (l.getUniquePointName = w),
      (l.setEpilogue = A),
      (l.onMarkerEnd = O),
      (l.markerEnd = B),
      (l.endStartupCompleteWithServer = q),
      (l.markerStart = U),
      (l.markerStartFromNavStart = V),
      (l.markEvent = G),
      (l.measureSpan = z),
      (l.adsMgmtQPLMethods = X));
  },
  98,
);
