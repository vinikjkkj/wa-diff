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
        a = (o = v(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function R(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        f[e.originalEventName] != null
        ? f[e.originalEventName].eventName
        : t;
    }
    var L = null;
    function E() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (L == null && (L = r("WAWebPonyfillsCryptoRandomUUID")()), L);
    }
    var k = null;
    function I() {
      return (k == null && (k = r("qex")._("2703") === !0), k);
    }
    function T() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function D() {
      return r("justknobx")._("918") ? !1 : T() || I();
    }
    var x = new Set(["BEGIN_EDITING", "END_EDITING"]),
      $ = 500,
      P = new Map(),
      N = new Set(),
      M = new Set(),
      w = "";
    function A(e, t) {
      return e + "\0" + t;
    }
    function F(e, t) {
      var n = P.get(e);
      return n != null && t - n < $;
    }
    var O = !1,
      B = 10,
      W = 0;
    function q(e, t) {
      (Se(),
        (O = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function U() {
      O &&
        ((O = !1),
        !(W >= B) &&
          (W++,
          o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters()));
    }
    function V() {
      (ne++,
        q(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        ne === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String($),
          ));
    }
    function H(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : w;
      if (e.eventType !== "BEGIN_EDITING") return G(n, e);
      var r = A(e.eventType, n);
      return F(r, e.timestampMs)
        ? (N.add(n), V(), !1)
        : (P.set(r, e.timestampMs), M.add(n), N.delete(n), !0);
    }
    function G(e, t) {
      if (N.has(e)) return (N.delete(e), M.delete(e), V(), !1);
      var n = A(t.eventType, e);
      return M.has(e)
        ? (M.delete(e), P.set(n, t.timestampMs), !0)
        : F(n, t.timestampMs)
          ? (V(), !1)
          : (P.set(n, t.timestampMs), !0);
    }
    var z = 100,
      j = 5e4,
      K = 1e5,
      Q = 1e4,
      X = 5e4,
      Y = 864e5,
      J = -1,
      Z = 0,
      ee = 0,
      te = 0,
      ne = 0,
      re = -1,
      oe = Q,
      ae = X,
      ie = !1;
    function le(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function se(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function ue() {
      var e = r("justknobx")._("2845");
      return le({ max: j, min: z, value: se(e, Q) });
    }
    function ce() {
      oe = ue();
      var e = r("justknobx")._("2846");
      ((ie = e === J), (ae = le({ max: K, min: z, value: se(e, X) })));
    }
    function de() {
      var e = Math.floor(Date.now() / Y);
      e !== re && ((ee = 0), (Z = 0), (te = 0), (ne = 0), (re = e), ce());
    }
    function me() {
      (U(), (W = 0), (Z = 0), (ye = 0), P.clear(), N.clear(), M.clear());
    }
    function pe() {
      (me(),
        ge.fill(void 0),
        (he = 0),
        (ee = 0),
        (te = 0),
        (ne = 0),
        (re = -1),
        ce());
    }
    function _e() {
      return ae;
    }
    var fe = 50,
      ge = new Array(fe),
      he = 0,
      ye = 0,
      Ce = !1;
    function be() {
      Ce ||
        ((Ce = !0), o("WAWebCrashlog").registerPathfinderSnapshotCallback(De));
    }
    var ve = !1;
    function Se() {
      ve || ((ve = !0), self.addEventListener("pagehide", U));
    }
    var Re = null;
    function Le(e) {
      Re = e;
    }
    var Ee = "web.pathfinder.event_cap_drop";
    function ke() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function Ie(e) {
      return !D() || (de(), ie)
        ? !1
        : Z >= oe || ee >= ae
          ? (te++,
            q(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            te === 1 &&
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(Z),
                String(ee),
              ),
            ke(),
            !1)
          : x.has(e.eventType) && !H(e)
            ? !1
            : (Z++,
              ee++,
              q(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1),
              !0);
    }
    function Te(e) {
      var t, n, a, i, l, s;
      if (Ie(e)) {
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
            L,
            k,
            I = R(e, m.eventName),
            T =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            D = {
              event_category: m.category,
              event_name: I,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: E(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (h = e.gestureDirection) != null ? h : void 0,
              screen_name: (y = e.screenName) != null ? y : void 0,
              destination_screen_name:
                (C = e.destinationName) != null ? C : void 0,
              target_testid: (b = e.targetTrackingId) != null ? b : void 0,
              target_element_type: (L = e.targetType) != null ? L : void 0,
              event_metadata: S(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                T,
              ),
              custom_metadata: v(e.customMetadata, T, !0),
              custom_event_type_id:
                e.customEventTypeId != null
                  ? String(e.customEventTypeId)
                  : void 0,
            };
          r("WamPathfinderWebFalcoEvent").log(function () {
            return D;
          });
          var x =
            e.eventType === "SCREEN_CHANGED" &&
            (k = o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdForScreen(e.destinationName)) != null
              ? k
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
        be();
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
          ye >= fe &&
            q(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
          ye++,
          (ge[he] = $),
          (he = (he + 1) % fe),
          Re != null)
        )
          try {
            Re(e.eventType);
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
    function De() {
      for (var e = [], t = 0; t < fe; t++) {
        var n = (he + t) % fe,
          r = ge[n];
        r != null && e.push(r);
      }
      return e;
    }
    ((l.FALCO_MAP = f),
      (l.isPathfinderLoggingEnabled = D),
      (l.resetPathfinderSessionState = me),
      (l.resetEventGuardsForTesting = pe),
      (l.getDailyEventCapForTesting = _e),
      (l.registerPathfinderEmitObserver = Le),
      (l.PATHFINDER_CAP_DROP_ODS_KEY = Ee),
      (l.emitPathfinderEvent = Te),
      (l.getPathfinderLogSnapshot = De));
  },
  98,
);
