__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebLocalStorage",
    "WAWebODS",
    "WAWebPathfinderHealthReporter",
    "WAWebPathfinderReservedMetadataKeys",
    "WAWebPathfinderUnsamplingConfig",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUnifiedSession",
    "WAWebUserPrefsLoginKeys",
    "WamPathfinderWebFalcoEvent",
    "WamPathfinderWebUnsampledFalcoEvent",
    "err",
    "getErrorSafe",
    "isEmptyObject",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = {
        TAP: { category: 1, eventName: 1 },
        DOUBLE_TAP: { category: 1, eventName: 3 },
        SCROLL: { category: 1, eventName: 2 },
        LONG_PRESS: { category: 1, eventName: 4 },
        SWIPE: { category: 1, eventName: 5 },
        SCREEN_CHANGED: { category: 2, eventName: 6 },
        BACKGROUND: { category: 4, eventName: 12 },
        FOREGROUND: { category: 4, eventName: 11 },
        KEYBOARD_SHOWN: { category: 3, eventName: 7 },
        KEYBOARD_CLOSED: { category: 3, eventName: 8 },
        BEGIN_EDITING: { category: 3, eventName: 9 },
        END_EDITING: { category: 3, eventName: 10 },
        OTHER_GESTURE: { category: 1, eventName: 24 },
        CONTENT_CHANGED: { category: 6, eventName: 14 },
        ALERT_SHOWN: { category: 5, eventName: 13 },
        ALERT_CLOSED: { category: 5, eventName: 25 },
        CUSTOM_EVENT: { category: 6, eventName: 19 },
      },
      g = { 1: "UP", 2: "DOWN", 3: "LEFT", 4: "RIGHT" },
      h = 50,
      y = 25,
      C = 100;
    function b(t, n, r, a, i) {
      (t.length > 0 &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Pathfinder]",
              " dropped reserved keys: ",
              "",
            ])),
          i,
          t.join(", "),
        ),
        n.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Pathfinder]",
                " Dropped metadata keys longer than ",
                " chars: ",
                "",
              ])),
            i,
            y,
            n.join(", "),
          ),
        r.length > 0 &&
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Pathfinder]",
                " truncated values >",
                " chars: ",
                "",
              ])),
            i,
            C,
            r.join(", "),
          ),
        a.length > 0 &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Pathfinder]",
                " dropped ",
                " keys over ",
                "-key cap: ",
                "",
              ])),
            i,
            a.length,
            h,
            a.join(", "),
          ));
    }
    function v(e, t, n) {
      if (e != null) {
        for (
          var a = {},
            i = Object.keys(e).sort(),
            l = [],
            s = [],
            u = [],
            c = 0,
            d = -1,
            m = 0;
          m < i.length;
          m++
        ) {
          var p = i[m];
          if (c >= h) {
            d = m;
            break;
          }
          if (p.length > y) {
            l.push(p);
            continue;
          }
          if (
            o("WAWebPathfinderReservedMetadataKeys").RESERVED_METADATA_KEYS.has(
              p,
            )
          ) {
            s.push(p);
            continue;
          }
          var _ = e[p];
          (_.length > C ? (u.push(p), (a[p] = _.slice(0, C))) : (a[p] = _),
            c++);
        }
        var f = d >= 0 ? i.slice(d) : [],
          g = t != null ? " [" + t + "]" : "";
        return (b(s, l, u, f, g), r("isEmptyObject")(a) ? void 0 : a);
      }
    }
    function S(e, t, n) {
      var o,
        a = (o = v(e, n, !0)) != null ? o : {};
      return (
        t.custom_event_type != null &&
          (a.custom_event_type = t.custom_event_type),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function R(e, t, n) {
      var o,
        a = (o = v(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function L(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        f[e.originalEventName] != null
        ? f[e.originalEventName].eventName
        : t;
    }
    var E = null;
    function k() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (E == null && (E = r("WAWebPonyfillsCryptoRandomUUID")()), E);
    }
    var I = null;
    function T() {
      return (I == null && (I = r("qex")._("2703") === !0), I);
    }
    function D() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function x() {
      return r("justknobx")._("918") ? !1 : D() || T();
    }
    var $ = new Set(["BEGIN_EDITING", "END_EDITING"]),
      P = 500,
      N = new Map(),
      M = new Set(),
      w = new Set(),
      A = "";
    function F(e, t) {
      return e + "\0" + t;
    }
    function O(e, t) {
      var n = N.get(e);
      return n != null && t - n < P;
    }
    var B = !1,
      W = 10,
      q = 0;
    function U(e, t) {
      (Re(),
        (B = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function V() {
      B &&
        ((B = !1),
        !(q >= W) &&
          (q++,
          o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters()));
    }
    function H() {
      (re++,
        U(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        re === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(P),
          ));
    }
    function G(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : A;
      if (e.eventType !== "BEGIN_EDITING") return z(n, e);
      var r = F(e.eventType, n);
      return O(r, e.timestampMs)
        ? (M.add(n), H(), !1)
        : (N.set(r, e.timestampMs), w.add(n), M.delete(n), !0);
    }
    function z(e, t) {
      if (M.has(e)) return (M.delete(e), w.delete(e), H(), !1);
      var n = F(t.eventType, e);
      return w.has(e)
        ? (w.delete(e), N.set(n, t.timestampMs), !0)
        : O(n, t.timestampMs)
          ? (H(), !1)
          : (N.set(n, t.timestampMs), !0);
    }
    var j = 100,
      K = 5e4,
      Q = 1e5,
      X = 1e4,
      Y = 5e4,
      J = 864e5,
      Z = -1,
      ee = 0,
      te = 0,
      ne = 0,
      re = 0,
      oe = -1,
      ae = X,
      ie = Y,
      le = !1;
    function se(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function ue(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function ce() {
      var e = r("justknobx")._("2845");
      return se({ max: K, min: j, value: ue(e, X) });
    }
    function de() {
      ae = ce();
      var e = r("justknobx")._("2846");
      ((le = e === Z), (ie = se({ max: Q, min: j, value: ue(e, Y) })));
    }
    function me() {
      var e = Math.floor(Date.now() / J);
      e !== oe && ((te = 0), (ee = 0), (ne = 0), (re = 0), (oe = e), de());
    }
    function pe() {
      (V(), (q = 0), (ee = 0), (Ce = 0), N.clear(), M.clear(), w.clear());
    }
    function _e() {
      (pe(),
        he.fill(void 0),
        (ye = 0),
        (te = 0),
        (ne = 0),
        (re = 0),
        (oe = -1),
        de());
    }
    function fe() {
      return ie;
    }
    var ge = 50,
      he = new Array(ge),
      ye = 0,
      Ce = 0,
      be = !1;
    function ve() {
      be ||
        ((be = !0), o("WAWebCrashlog").registerPathfinderSnapshotCallback(xe));
    }
    var Se = !1;
    function Re() {
      Se || ((Se = !0), self.addEventListener("pagehide", V));
    }
    var Le = null;
    function Ee(e) {
      Le = e;
    }
    var ke = "web.pathfinder.event_cap_drop";
    function Ie() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function Te(e) {
      return !x() || (me(), le)
        ? !1
        : ee >= ae || te >= ie
          ? (ne++,
            U(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            ne === 1 &&
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(ee),
                String(te),
              ),
            Ie(),
            !1)
          : $.has(e.eventType) && !G(e)
            ? !1
            : (ee++,
              te++,
              U(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1),
              !0);
    }
    function De(e) {
      var t, n, a, i, l, s;
      if (Te(e)) {
        var u = [];
        if (
          (e.screenName != null && u.push("screen=" + e.screenName),
          e.targetTrackingId != null && u.push("target=" + e.targetTrackingId),
          e.destinationName != null && u.push("dest=" + e.destinationName),
          e.context != null && u.push("ctx=" + e.context),
          e.debounceCount != null &&
            e.debounceCount > 1 &&
            u.push("debounce=" + String(e.debounceCount)),
          e.gestureDirection != null)
        ) {
          var c;
          u.push(
            "direction=" +
              ((c = g[e.gestureDirection]) != null
                ? c
                : String(e.gestureDirection)),
          );
        }
        var d =
          u.length > 0
            ? "[pathfinder] " + e.eventType + " " + u.join(" ")
            : "[pathfinder] " + e.eventType;
        o("WALogger").LOG(
          p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          d,
        );
        var m = f[e.eventType];
        if (m != null) {
          var h,
            y,
            C,
            b,
            v,
            E,
            I = L(e, m.eventName),
            T =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            D = {
              event_category: m.category,
              event_name: I,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: k(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (h = e.gestureDirection) != null ? h : void 0,
              screen_name: (y = e.screenName) != null ? y : void 0,
              destination_screen_name:
                (C = e.destinationName) != null ? C : void 0,
              target_testid: (b = e.targetTrackingId) != null ? b : void 0,
              target_element_type: (v = e.targetType) != null ? v : void 0,
              event_metadata: R(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                T,
              ),
              custom_metadata: S(
                e.customMetadata,
                { custom_event_type: e.customEventTypeDisplayName },
                T,
              ),
            };
          r("WamPathfinderWebFalcoEvent").log(function () {
            return D;
          });
          var x =
            e.eventType === "SCREEN_CHANGED" &&
            (E = o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdForScreen(e.destinationName)) != null
              ? E
              : o(
                  "WAWebPathfinderUnsamplingConfig",
                ).getUnsamplingRuleIdForScreen(e.screenName);
          x != null &&
            r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
              return babelHelpers.extends({}, D, {
                sampling_reason: "TRIGGER_SCREEN",
                session_flag_rule_id: x,
              });
            });
        }
        ve();
        var $ = {
          eventType: e.eventType,
          timestampMs: e.timestampMs,
          trackingId: (t = e.targetTrackingId) != null ? t : void 0,
          screenName: (n = e.screenName) != null ? n : void 0,
          targetType: (a = e.targetType) != null ? a : void 0,
          destinationName: (i = e.destinationName) != null ? i : void 0,
          context: (l = e.context) != null ? l : void 0,
          debounceCount: (s = e.debounceCount) != null ? s : void 0,
        };
        if (
          (u.length > 0 && ($.extra = u.join(" ")),
          Ce >= ge &&
            U(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
          Ce++,
          (he[ye] = $),
          (ye = (ye + 1) % ge),
          Le != null)
        )
          try {
            Le(e.eventType);
          } catch (e) {
            try {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[pathfinder] emit observer threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("pathfinder-observer-error");
            } catch (e) {}
          }
      }
    }
    function xe() {
      for (var e = [], t = 0; t < ge; t++) {
        var n = (ye + t) % ge,
          r = he[n];
        r != null && e.push(r);
      }
      return e;
    }
    ((l.FALCO_MAP = f),
      (l.isPathfinderLoggingEnabled = x),
      (l.resetPathfinderSessionState = pe),
      (l.resetEventGuardsForTesting = _e),
      (l.getDailyEventCapForTesting = fe),
      (l.registerPathfinderEmitObserver = Ee),
      (l.PATHFINDER_CAP_DROP_ODS_KEY = ke),
      (l.emitPathfinderEvent = De),
      (l.getPathfinderLogSnapshot = xe));
  },
  98,
);
