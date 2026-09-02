__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebLocalStorage",
    "WAWebODS",
    "WAWebPathfinderHealthReporter",
    "WAWebPathfinderReservedMetadataKeys",
    "WAWebPathfinderTraceEnvelope",
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
      f,
      g,
      h = {
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
      y = { 1: "UP", 2: "DOWN", 3: "LEFT", 4: "RIGHT" },
      C = 50,
      b = 25,
      v = 100;
    function S(t, n, r, a, i) {
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
            b,
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
            v,
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
            C,
            a.join(", "),
          ));
    }
    function R(e, t, n) {
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
          if (c >= C) {
            d = m;
            break;
          }
          if (p.length > b) {
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
          (_.length > v ? (u.push(p), (a[p] = _.slice(0, v))) : (a[p] = _),
            c++);
        }
        var f = d >= 0 ? i.slice(d) : [],
          g = t != null ? " [" + t + "]" : "";
        return (S(s, l, u, f, g), r("isEmptyObject")(a) ? void 0 : a);
      }
    }
    function L(e, t, n) {
      var o,
        a = (o = R(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function E(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        h[e.originalEventName] != null
        ? h[e.originalEventName].eventName
        : t;
    }
    var k = null;
    function I() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (k == null && (k = r("WAWebPonyfillsCryptoRandomUUID")()), k);
    }
    var T = null;
    function D() {
      return (T == null && (T = r("qex")._("2703") === !0), T);
    }
    function x() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function $() {
      return r("justknobx")._("918") ? !1 : x() || D();
    }
    var P = new Set(["BEGIN_EDITING", "END_EDITING"]),
      N = 500,
      M = new Map(),
      w = new Set(),
      A = new Set(),
      F = "";
    function O(e, t) {
      return e + "\0" + t;
    }
    function B(e, t) {
      var n = M.get(e);
      return n != null && t - n < N;
    }
    var W = !1,
      q = 10,
      U = 0;
    function V(e, t) {
      (ke(),
        (W = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function H() {
      W &&
        ((W = !1),
        !(U >= q) &&
          (U++,
          o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters()));
    }
    function G() {
      (oe++,
        V(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        oe === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(N),
          ));
    }
    function z(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : F;
      if (e.eventType !== "BEGIN_EDITING") return j(n, e);
      var r = O(e.eventType, n);
      return B(r, e.timestampMs)
        ? (w.add(n), G(), !1)
        : (M.set(r, e.timestampMs), A.add(n), w.delete(n), !0);
    }
    function j(e, t) {
      if (w.has(e)) return (w.delete(e), A.delete(e), G(), !1);
      var n = O(t.eventType, e);
      return A.has(e)
        ? (A.delete(e), M.set(n, t.timestampMs), !0)
        : B(n, t.timestampMs)
          ? (G(), !1)
          : (M.set(n, t.timestampMs), !0);
    }
    var K = 100,
      Q = 5e4,
      X = 1e5,
      Y = 1e4,
      J = 5e4,
      Z = 864e5,
      ee = -1,
      te = 0,
      ne = 0,
      re = 0,
      oe = 0,
      ae = -1,
      ie = Y,
      le = J,
      se = !1;
    function ue(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function ce(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function de() {
      var e = r("justknobx")._("2845");
      return ue({ max: Q, min: K, value: ce(e, Y) });
    }
    function me() {
      ie = de();
      var e = r("justknobx")._("2846");
      ((se = e === ee), (le = ue({ max: X, min: K, value: ce(e, J) })));
    }
    function pe() {
      var e = Math.floor(Date.now() / Z);
      e !== ae && ((ne = 0), (te = 0), (re = 0), (oe = 0), (ae = e), me());
    }
    function _e() {
      (H(), (U = 0), (te = 0), (be = 0), M.clear(), w.clear(), A.clear());
    }
    function fe() {
      (_e(),
        ye.fill(void 0),
        (Ce = 0),
        (ve = 0),
        (ne = 0),
        (re = 0),
        (oe = 0),
        (ae = -1),
        me());
    }
    function ge() {
      return le;
    }
    var he = 50,
      ye = new Array(he),
      Ce = 0,
      be = 0,
      ve = 0,
      Se = !1;
    function Re() {
      Se ||
        ((Se = !0),
        o("WAWebCrashlog").registerPathfinderTraceCallback(function () {
          try {
            if (!$()) return null;
            var e = o(
              "WAWebPathfinderTraceEnvelope",
            ).buildPathfinderTraceEnvelope(Me());
            return e != null &&
              o("WAWebPathfinderTraceEnvelope").exceedsTraceByteBudget(e)
              ? (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Pathfinder crash-log trace exceeds ",
                        "B, skipping trace attachment",
                      ])),
                    o("WAWebPathfinderTraceEnvelope").MAX_TRACE_BYTES,
                  )
                  .sendLogs("pathfinder-trace-crashlog-too-large"),
                null)
              : e;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Pathfinder crash-log trace build failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("pathfinder-trace-crashlog-fail"),
              null
            );
          }
        }));
    }
    function Le() {
      return o("WAWebPathfinderTraceEnvelope").serializePathfinderTraceEnvelope(
        Me,
        $,
      );
    }
    var Ee = !1;
    function ke() {
      Ee || ((Ee = !0), self.addEventListener("pagehide", H));
    }
    var Ie = null;
    function Te(e) {
      Ie = e;
    }
    var De = "web.pathfinder.event_cap_drop";
    function xe() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function $e(e) {
      return !$() || (pe(), se)
        ? !1
        : te >= ie || ne >= le
          ? (re++,
            V(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            re === 1 &&
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(te),
                String(ne),
              ),
            xe(),
            !1)
          : P.has(e.eventType) && !z(e)
            ? !1
            : (te++,
              ne++,
              V(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1),
              !0);
    }
    function Pe(e) {
      var t, n, a, i, l, s;
      if ($e(e)) {
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
              ((c = y[e.gestureDirection]) != null
                ? c
                : String(e.gestureDirection)),
          );
        }
        var d =
          u.length > 0
            ? "[pathfinder] " + e.eventType + " " + u.join(" ")
            : "[pathfinder] " + e.eventType;
        o("WALogger").LOG(
          f || (f = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          d,
        );
        var m = h[e.eventType];
        if (m != null) {
          var p,
            _,
            C,
            b,
            v,
            S,
            k = E(e, m.eventName),
            T =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            D = {
              event_category: m.category,
              event_name: k,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: I(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (p = e.gestureDirection) != null ? p : void 0,
              screen_name: (_ = e.screenName) != null ? _ : void 0,
              destination_screen_name:
                (C = e.destinationName) != null ? C : void 0,
              target_testid: (b = e.targetTrackingId) != null ? b : void 0,
              target_element_type: (v = e.targetType) != null ? v : void 0,
              event_metadata: L(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                T,
              ),
              custom_metadata: R(e.customMetadata, T, !0),
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
            (S = o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdForScreen(e.destinationName)) != null
              ? S
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
        Re();
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
          be >= he &&
            V(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
          be++,
          ve++,
          (ye[Ce] = $),
          (Ce = (Ce + 1) % he),
          Ie != null)
        )
          try {
            Ie(e.eventType);
          } catch (e) {
            try {
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[pathfinder] emit observer threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("pathfinder-observer-error");
            } catch (e) {}
          }
      }
    }
    function Ne() {
      for (var e = [], t = 0; t < he; t++) {
        var n = (Ce + t) % he,
          r = ye[n];
        r != null && e.push(r);
      }
      return e;
    }
    function Me() {
      return { entries: Ne(), headClipped: ve > he, totalRecorded: ve };
    }
    ((l.FALCO_MAP = h),
      (l.isPathfinderLoggingEnabled = $),
      (l.resetPathfinderSessionState = _e),
      (l.resetEventGuardsForTesting = fe),
      (l.getDailyEventCapForTesting = ge),
      (l.getPathfinderTraceJsonForBugReport = Le),
      (l.registerPathfinderEmitObserver = Te),
      (l.PATHFINDER_CAP_DROP_ODS_KEY = De),
      (l.emitPathfinderEvent = Pe),
      (l.getPathfinderLogSnapshot = Ne),
      (l.getPathfinderLogSnapshotWithMeta = Me));
  },
  98,
);
