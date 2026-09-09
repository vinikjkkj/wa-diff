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
      y = new Set([
        "TAP",
        "DOUBLE_TAP",
        "SCROLL",
        "LONG_PRESS",
        "SWIPE",
        "OTHER_GESTURE",
      ]),
      C = { 1: "UP", 2: "DOWN", 3: "LEFT", 4: "RIGHT" },
      b = 50,
      v = 25,
      S = 100;
    function R(t, n, r, a, i) {
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
            v,
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
            S,
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
            b,
            a.join(", "),
          ));
    }
    function L(e, t, n) {
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
          if (c >= b) {
            d = m;
            break;
          }
          if (p.length > v) {
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
          (_.length > S ? (u.push(p), (a[p] = _.slice(0, S))) : (a[p] = _),
            c++);
        }
        var f = d >= 0 ? i.slice(d) : [],
          g = t != null ? " [" + t + "]" : "";
        return (R(s, l, u, f, g), r("isEmptyObject")(a) ? void 0 : a);
      }
    }
    function E(e, t, n) {
      var o,
        a = (o = L(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function k(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        h[e.originalEventName] != null
        ? h[e.originalEventName].eventName
        : t;
    }
    var I = null;
    function T() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (I == null && (I = r("WAWebPonyfillsCryptoRandomUUID")()), I);
    }
    var D = null;
    function x() {
      return (D == null && (D = r("qex")._("2703") === !0), D);
    }
    function $() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function P() {
      return r("justknobx")._("918") ? !1 : $() || x();
    }
    var N = new Set(["BEGIN_EDITING", "END_EDITING"]),
      M = 500,
      w = new Map(),
      A = new Set(),
      F = new Set(),
      O = "";
    function B(e, t) {
      return e + "\0" + t;
    }
    function W(e, t) {
      var n = w.get(e);
      return n != null && t - n < M;
    }
    var q = !1,
      U = 10,
      V = 0;
    function H(e, t) {
      (Ie(),
        (q = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function G() {
      if (q) {
        if (((q = !1), V >= U)) {
          o("WAWebPathfinderHealthReporter").discardPathfinderHealthCounters();
          return;
        }
        (V++,
          o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters());
      }
    }
    function z() {
      (ae++,
        H(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        ae === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(M),
          ));
    }
    function j(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : O;
      if (e.eventType !== "BEGIN_EDITING") return K(n, e);
      var r = B(e.eventType, n);
      return W(r, e.timestampMs)
        ? (A.add(n), z(), !1)
        : (w.set(r, e.timestampMs), F.add(n), A.delete(n), !0);
    }
    function K(e, t) {
      if (A.has(e)) return (A.delete(e), F.delete(e), z(), !1);
      var n = B(t.eventType, e);
      return F.has(e)
        ? (F.delete(e), w.set(n, t.timestampMs), !0)
        : W(n, t.timestampMs)
          ? (z(), !1)
          : (w.set(n, t.timestampMs), !0);
    }
    var Q = 100,
      X = 5e4,
      Y = 1e5,
      J = 1e4,
      Z = 5e4,
      ee = 864e5,
      te = -1,
      ne = 0,
      re = 0,
      oe = 0,
      ae = 0,
      ie = -1,
      le = J,
      se = Z,
      ue = !1;
    function ce(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function de(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function me() {
      var e = r("justknobx")._("2845");
      return ce({ max: X, min: Q, value: de(e, J) });
    }
    function pe() {
      le = me();
      var e = r("justknobx")._("2846");
      ((ue = e === te), (se = ce({ max: Y, min: Q, value: de(e, Z) })));
    }
    function _e() {
      var e = Math.floor(Date.now() / ee);
      e !== ie && ((re = 0), (ne = 0), (oe = 0), (ae = 0), (ie = e), pe());
    }
    function fe() {
      (G(), (V = 0), (ne = 0), (ve = 0), w.clear(), A.clear(), F.clear());
    }
    function ge() {
      (fe(),
        Ce.fill(void 0),
        (be = 0),
        (Se = 0),
        (re = 0),
        (oe = 0),
        (ae = 0),
        (ie = -1),
        pe());
    }
    function he() {
      return se;
    }
    var ye = 50,
      Ce = new Array(ye),
      be = 0,
      ve = 0,
      Se = 0,
      Re = !1;
    function Le() {
      Re ||
        ((Re = !0),
        o("WAWebCrashlog").registerPathfinderTraceCallback(function () {
          try {
            if (!P()) return null;
            var e = o(
              "WAWebPathfinderTraceEnvelope",
            ).buildPathfinderTraceEnvelope(Fe());
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
    function Ee() {
      return o("WAWebPathfinderTraceEnvelope").serializePathfinderTraceEnvelope(
        Fe,
        P,
      );
    }
    var ke = !1;
    function Ie() {
      ke || ((ke = !0), self.addEventListener("pagehide", G));
    }
    var Te = null;
    function De(e) {
      Te = e;
    }
    var xe = "web.pathfinder.event_cap_drop";
    function $e() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function Pe(e) {
      return (
        y.has(e.eventType) &&
        (e.targetTrackingId == null || e.targetTrackingId === "") &&
        (e.targetType == null || e.targetType === "") &&
        r("justknobx")._("3611")
      );
    }
    function Ne(e) {
      return !P() || (_e(), ue)
        ? !1
        : ne >= le || re >= se
          ? (oe++,
            H(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            oe === 1 &&
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(ne),
                String(re),
              ),
            $e(),
            !1)
          : Pe(e)
            ? (Me(),
              H(
                o("WAWebPathfinderHealthReporter")
                  .COUNTER_TARGETLESS_TOUCH_DROPS,
                1,
              ),
              !1)
            : N.has(e.eventType) && !j(e)
              ? !1
              : (Me(),
                H(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1),
                !0);
    }
    function Me() {
      (ne++, re++);
    }
    function we(e) {
      var t, n, a, i, l, s;
      if (Ne(e)) {
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
              ((c = C[e.gestureDirection]) != null
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
            y,
            b,
            v,
            S,
            R = k(e, m.eventName),
            I =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            D = {
              event_category: m.category,
              event_name: R,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: T(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (p = e.gestureDirection) != null ? p : void 0,
              screen_name: (_ = e.screenName) != null ? _ : void 0,
              destination_screen_name:
                (y = e.destinationName) != null ? y : void 0,
              target_testid: (b = e.targetTrackingId) != null ? b : void 0,
              target_element_type: (v = e.targetType) != null ? v : void 0,
              event_metadata: E(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                I,
              ),
              custom_metadata: L(e.customMetadata, I, !0),
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
        Le();
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
          ve >= ye &&
            H(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
          ve++,
          Se++,
          (Ce[be] = $),
          (be = (be + 1) % ye),
          Te != null)
        )
          try {
            Te(e.eventType);
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
    function Ae() {
      for (var e = [], t = 0; t < ye; t++) {
        var n = (be + t) % ye,
          r = Ce[n];
        r != null && e.push(r);
      }
      return e;
    }
    function Fe() {
      return { entries: Ae(), headClipped: Se > ye, totalRecorded: Se };
    }
    ((l.FALCO_MAP = h),
      (l.isPathfinderLoggingEnabled = P),
      (l.resetPathfinderSessionState = fe),
      (l.resetEventGuardsForTesting = ge),
      (l.getDailyEventCapForTesting = he),
      (l.getPathfinderTraceJsonForBugReport = Ee),
      (l.registerPathfinderEmitObserver = De),
      (l.PATHFINDER_CAP_DROP_ODS_KEY = xe),
      (l.emitPathfinderEvent = we),
      (l.getPathfinderLogSnapshot = Ae),
      (l.getPathfinderLogSnapshotWithMeta = Fe));
  },
  98,
);
