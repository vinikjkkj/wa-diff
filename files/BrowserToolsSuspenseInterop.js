__d(
  "BrowserToolsSuspenseInterop",
  ["vc-tracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      e = t;
    }
    var u = new Set(),
      c = new Set(),
      d = new Map(),
      m = new Set(),
      p = [],
      _ = [],
      f = {},
      g = {},
      h = new Map(),
      y = [],
      C = new Set(),
      b = [];
    function v(t, n, r) {
      var o;
      if (((o = e) == null ? void 0 : o.isSuspenseDebuggingEnabled) === !0) {
        var a = t.split("("),
          i = "Uncategorized";
        a.length > 1 && (i = a[0].trim());
        var l = {
          description: t,
          placeholderUUID: n,
          causedDOMMutation: "unknown",
          placeholderName: r,
          reactComponentType: i,
        };
        c.has(n) ||
          (p.push(l),
          c.add(n),
          u.forEach(function (e) {
            e.postMessage("suspended_component", l);
          }));
      }
    }
    function S() {
      var e = r("vc-tracker").getCurrentVCTraces(),
        t = r("vc-tracker").getCurrentNavigationVCTrace();
      (t &&
        t.visualChangeRecordList &&
        (_ = _.concat(t.visualChangeRecordList)),
        e.forEach(function (e) {
          e.visualChangeRecordList && (_ = _.concat(e.visualChangeRecordList));
        }));
    }
    function R() {
      for (var e = 0; e < p.length; e++) {
        var t = d.get(p[e].placeholderUUID);
        if (!t) {
          p[e].causedDOMMutation = "false";
          continue;
        }
        for (var n = 0; n < (t == null ? void 0 : t.length); n++)
          for (var o = 0; o < b.length; o++) {
            var a = b[o].element,
              i = r("vc-tracker").derefOnlyAttachedElement(a);
            if (i === t[n]) {
              p[e].causedDOMMutation = "true";
              break;
            }
          }
      }
      for (var l = 0; l < p.length; l++)
        p[l].causedDOMMutation === "unknown" &&
          (p[l].causedDOMMutation = "false");
      u.forEach(function (e) {
        p.forEach(function (t) {
          e.postMessage("suspended_component", t);
        });
      });
    }
    function L() {
      (m.forEach(function (e) {
        var t = d.get(e);
        if (t)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r instanceof HTMLElement && (r.style.boxShadow = "");
          }
      }),
        m.clear());
    }
    function E(e) {
      (L(), m.add(e));
      var t = d.get(e);
      if (t)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r instanceof HTMLElement &&
            (r.style.boxShadow = "inset 0 0 0 3px red");
        }
    }
    function k() {
      ((p = []),
        (h = new Map()),
        L(),
        (g = {}),
        u.forEach(function (e) {
          e.postMessage("clear_components", []);
        }));
    }
    function I(t, n) {
      var o,
        a = n || e,
        i =
          (o = a == null ? void 0 : a.isSuspenseDebuggingEnabled) != null
            ? o
            : !1;
      function l(e) {
        var t,
          n,
          r,
          o = e.getTrace(),
          a = (t = o == null ? void 0 : o.traceId) != null ? t : "unknown",
          i = (n = o == null ? void 0 : o.tracePolicy) != null ? n : "unknown",
          l = (r = o == null ? void 0 : o.type) != null ? r : "unknown",
          s = h.size;
        h.has(a) || s++;
        var c = s + ": " + l + " (" + i + ")";
        (h.set(a, c),
          (y = Array.from(h.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return { traceId: t, traceName: n };
          })),
          u.forEach(function (e) {
            e.postMessage("interaction_list_data", y);
          }),
          e.onLog(function (t) {
            if (t.placeholderMap) {
              var n,
                r = e.getTraceId(),
                o = { interactionID: r, placeholderMap: t.placeholderMap };
              if (
                ((g[r] = o),
                typeof t.placeholderMap == "object" && t.placeholderMap != null)
              ) {
                var a = t.placeholderMap;
                for (var i in a)
                  if (Object.prototype.hasOwnProperty.call(a, i)) {
                    var l = a[i];
                    Array.isArray(l) &&
                      (f[i] ? (f[i] = f[i].concat(l)) : (f[i] = [].concat(l)));
                  }
              }
              var s =
                (n = t.markerPoints.visuallyComplete) == null ||
                (n = n.data) == null
                  ? void 0
                  : n.vcBlockingPlaceholders;
              if (s != null && Array.isArray(s))
                for (var c = 0; c < s.length; c++) C.add(s[c].split("@")[0]);
              (R(),
                u.forEach(function (e) {
                  (e.postMessage("interaction_list_data", y),
                    e.postMessage("placeholder_map_data", o));
                }));
            }
          }));
      }
      (t.InteractionTracingCore.onStartInteraction(l),
        t.InteractionTracingCore.getPendingInteractions().forEach(l));
      function s() {
        for (var e = 0; e < _.length; e++) {
          var t = _[e].element,
            n = r("vc-tracker").derefOnlyAttachedElement(t);
          if (n) {
            var o =
              a == null || a.getWrapperComponentPropArrayFromDOMElement == null
                ? void 0
                : a.getWrapperComponentPropArrayFromDOMElement(
                    n,
                    "HeroPlaceholder",
                    "placeholderUUID",
                  );
            if (o)
              for (var i = 0; i < o.length; i++) {
                var l = o[i];
                if (d.has(l)) {
                  var s;
                  (s = d.get(l)) == null || s.push(n);
                } else d.set(l, [n]);
              }
          }
        }
      }
      return {
        namespace: "suspense",
        onConnection: function (n) {
          (u.add(n),
            r("vc-tracker").VisualCompletionTraceObserver.subscribe(
              function (e) {
                ((b = e.elements), S(), s());
              },
            ),
            n.onMessage(function (t, r) {
              switch (t) {
                case "panel_ready": {
                  (n.postMessage("toggle_value", i),
                    n.postMessage("clear_components", []),
                    p.forEach(function (e) {
                      n.postMessage("suspended_component", e);
                    }),
                    n.postMessage("interaction_list_data", y));
                  for (var o in g)
                    Object.prototype.hasOwnProperty.call(g, o) &&
                      n.postMessage("placeholder_map_data", g[o]);
                  break;
                }
                case "toggle_suspense_debugging": {
                  var l = new URL(window.location.href),
                    u = a != null && a.URI ? a.URI(l.toString()) : null;
                  if (typeof r == "boolean") {
                    var c,
                      d = {};
                    r
                      ? ((d.gk_debug = "1"),
                        u != null &&
                        a != null &&
                        a.isInstagramURI != null &&
                        a.isInstagramURI(u)
                          ? (d.gk_enable = "ig_suspense_hud")
                          : (d.gk_enable = "suspense_hud"),
                        (d.gk_disable = null))
                      : ((d.gk_debug = "1"),
                        u != null &&
                        a != null &&
                        a.isInstagramURI != null &&
                        a.isInstagramURI(u)
                          ? (d.gk_disable = "ig_suspense_hud")
                          : (d.gk_disable = "suspense_hud"),
                        (d.gk_enable = null));
                    for (var m of Object.entries(d)) {
                      var _ = m[0],
                        f = m[1];
                      f === null
                        ? l.searchParams.delete(_)
                        : l.searchParams.set(_, f);
                    }
                    (c = e) == null ||
                      c.goForceFullPageRedirectTo == null ||
                      c.goForceFullPageRedirectTo(l.toString());
                  }
                  break;
                }
                case "clear_suspended_components":
                  k();
                  break;
                case "highlight_active_component":
                  typeof r == "string" && (s(), E(r));
                  break;
                default:
                  break;
              }
            }));
        },
      };
    }
    ((l.BrowserToolsSuspenseInteropSetup = s),
      (l.trackSuspendedComponent = v),
      (l.create = I));
  },
  98,
);
