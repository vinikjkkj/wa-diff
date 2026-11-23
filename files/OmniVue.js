__d(
  "OmniVue",
  ["AdsInterfacesLogger", "Run", "general-purpose-utils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["type"],
      s = 1,
      u = 100,
      c = !1,
      d = !1,
      m = !1,
      p = null,
      _ = [],
      f = null,
      g = null,
      h = null,
      y = null,
      C = new Map(),
      b = new Set(),
      v = [],
      S = 500;
    function R(e) {
      switch (e) {
        case "board":
        case "brief":
        case "campaign":
        case "concept":
        case "creative":
        case "reference":
        case "signal":
          return e;
        default:
          return null;
      }
    }
    function L(e) {
      var t = {};
      for (var n of e.attributes)
        if (n.name.startsWith("data-obs-")) {
          var r = n.name.slice(9);
          t[r] = n.value === "" ? !0 : n.value;
        }
      return t;
    }
    function E(e) {
      for (var t = [], n = e; n != null && n !== document.documentElement; ) {
        var r = L(n),
          o = n.getAttribute("data-component"),
          a = Object.keys(r).length > 0;
        if (a || o != null) {
          var i = { tag: n.tagName.toLowerCase() };
          (o != null && (i.component = o), a && (i.meta = r), t.push(i));
        }
        n = n.parentElement;
      }
      return (t.reverse(), t);
    }
    function k(e) {
      for (
        var t = L(e), n = E(e), r = [], o = e.closest("[data-entity-id]");
        o != null;
      ) {
        var a,
          i,
          l = o.getAttribute("data-entity-id"),
          s = o.getAttribute("data-entity-type"),
          u = s != null ? R(s) : null;
        (l != null &&
          u != null &&
          r.push({ entity_id: l, entity_type: u, meta: L(o) }),
          (o =
            (a =
              (i = o.parentElement) == null
                ? void 0
                : i.closest("[data-entity-id]")) != null
              ? a
              : null));
      }
      return { actionMeta: t, elementPath: n, entities: r };
    }
    function I(e) {
      return e === "click"
        ? {
            intent: "interaction",
            severity: "info",
            subsystem: "dom",
            surface: "unknown",
          }
        : e === "session_start" || e === "session_end"
          ? {
              intent: "lifecycle",
              severity: "info",
              subsystem: "logger",
              surface: "boot",
            }
          : e === "visibility_change"
            ? {
                intent: "telemetry",
                severity: "info",
                subsystem: "dom",
                surface: "unknown",
              }
            : e === "url_change"
              ? {
                  intent: "telemetry",
                  severity: "info",
                  subsystem: "nav",
                  surface: "unknown",
                }
              : e === "hover" || e === "elemVisibility"
                ? {
                    intent: "telemetry",
                    severity: "info",
                    subsystem: "dom",
                    surface: "unknown",
                  }
                : e === "custom"
                  ? {
                      intent: "interaction",
                      severity: "info",
                      subsystem: "ui",
                      surface: "unknown",
                    }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function T(e) {
      var t,
        n,
        r,
        o,
        a = I(e.data.type);
      return {
        data: e.data,
        entities: e.entities,
        intent: (t = e.intent) != null ? t : a.intent,
        severity: (n = e.severity) != null ? n : a.severity,
        subsystem: (r = e.subsystem) != null ? r : a.subsystem,
        surface: (o = e.surface) != null ? o : a.surface,
      };
    }
    function D() {
      var e = {};
      for (var t of C) {
        var n = t[0],
          r = t[1];
        e[n] = r;
      }
      return e;
    }
    function x(e) {
      var t = {
        enrichments: D(),
        logger_version: s,
        payload: e,
        session_id: p != null ? p : "",
        timestamp: Date.now(),
      };
      (v.length >= S && v.shift(), v.push(t));
      for (var n of b) n(t);
    }
    function $(t) {
      var n,
        a = T(t),
        i = a.data,
        l = a.entities,
        u = a.intent,
        c = a.severity,
        d = a.subsystem,
        m = a.surface,
        _ = i.type,
        f = babelHelpers.objectWithoutPropertiesLoose(i, e),
        g = D(),
        h = JSON.stringify(
          babelHelpers.extends(
            {
              session_id: p,
              timestamp: Date.now(),
              logger_version: s,
              type: _,
            },
            f,
            {
              entities: l != null ? l : [],
              enrichments: g,
              surface: m,
              subsystem: d,
              intent: u,
              severity: c,
            },
          ),
        );
      (r("AdsInterfacesLogger").log({
        eventName: "ads_auto2_logging",
        data:
          ((n = {}),
          (n.metadata = o("general-purpose-utils").toJson_LOGGING_PURPOSE_ONLY(
            h,
          )),
          n),
      }),
        x(a));
    }
    function P() {
      ((f = function (t) {
        if (t.target instanceof Element) {
          var e = t.target.closest("[data-log-click]");
          if (e != null) {
            var n = k(e),
              r = n.actionMeta,
              o = n.elementPath,
              a = n.entities;
            w({
              data: {
                type: "click",
                action_meta: r,
                element_path: o,
                target_tag: e.tagName.toLowerCase(),
              },
              entities: a,
            });
          }
        }
      }),
        window.addEventListener("click", f, !0),
        (g = function () {
          w({ data: { type: "visibility_change", hidden: document.hidden } });
        }),
        document.addEventListener("visibilitychange", g),
        (h = function (t) {
          if (!(!(t instanceof CustomEvent) || t.detail == null)) {
            var e = t.detail,
              n = e.path,
              r = e.query,
              o = e.section;
            w({
              data: {
                type: "url_change",
                path: n != null ? n : window.location.pathname,
                query: r != null ? r : {},
                section: o != null ? o : "",
              },
            });
          }
        }),
        window.addEventListener("adsauto:url_change", h),
        (y = o("Run").onUnload(function () {
          m || ((m = !0), $({ data: { type: "session_end" } }));
        })));
    }
    function N() {
      (f != null && (window.removeEventListener("click", f, !0), (f = null)),
        g != null &&
          (document.removeEventListener("visibilitychange", g), (g = null)),
        h != null &&
          (window.removeEventListener("adsauto:url_change", h), (h = null)),
        y != null && (y.remove(), (y = null)));
    }
    function M(e) {
      if (!c) {
        for (
          c = !0,
            p = e.sessionId,
            d ||
              ((d = !0),
              w({
                data: {
                  type: "session_start",
                  viewport_width: window.innerWidth,
                  viewport_height: window.innerHeight,
                  device_pixel_ratio: window.devicePixelRatio,
                },
              }));
          _.length > 0;
        ) {
          var t = _.shift();
          t != null && $(t);
        }
        P();
      }
    }
    function w(e) {
      if (!c || p == null) {
        (_.length >= u && _.shift(), _.push(e));
        return;
      }
      $(e);
    }
    function A() {
      c && ($({ data: { type: "session_end" } }), N(), (c = !1));
    }
    function F(e) {
      for (var t of v) e(t);
      return (
        b.add(e),
        function () {
          b.delete(e);
        }
      );
    }
    function O(e, t) {
      C.set(e, t);
    }
    function B(e) {
      C.delete(e);
    }
    ((l.collectEventContext = k),
      (l.destroy = A),
      (l.init = M),
      (l.log = w),
      (l.registerEnrichment = O),
      (l.removeEnrichment = B),
      (l.subscribe = F));
  },
  98,
);
