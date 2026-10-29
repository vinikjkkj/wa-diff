__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebLocalStorage",
    "WAWebMdSessionIdCache",
    "WAWebODS",
    "WAWebPathfinderHealthReporter",
    "WAWebPathfinderPIIFilter",
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
      h,
      y = {
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
      C = new Set([
        "TAP",
        "DOUBLE_TAP",
        "SCROLL",
        "LONG_PRESS",
        "SWIPE",
        "OTHER_GESTURE",
      ]),
      b = { 1: "UP", 2: "DOWN", 3: "LEFT", 4: "RIGHT" },
      v = 50,
      S = 25,
      R = 100;
    function L(t, n, r, a, i) {
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
            S,
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
            R,
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
            v,
            a.join(", "),
          ));
    }
    function E(e, t, n) {
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
          if (c >= v) {
            d = m;
            break;
          }
          if (p.length > S) {
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
          (_.length > R ? (u.push(p), (a[p] = _.slice(0, R))) : (a[p] = _),
            c++);
        }
        var f = d >= 0 ? i.slice(d) : [],
          g = t != null ? " [" + t + "]" : "";
        return (L(s, l, u, f, g), r("isEmptyObject")(a) ? void 0 : a);
      }
    }
    function k(e, t, n) {
      var o,
        a = (o = E(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function I(e, t) {
      if (e.eventType !== "CUSTOM_EVENT") return t;
      if (Oe(e)) return null;
      var n = e.originalEventName;
      return n == null ? null : y[n].eventName;
    }
    var T = null;
    function D() {
      var e = self.crypto;
      return (
        T == null &&
          e != null &&
          (T = String(e.getRandomValues(new Uint32Array(1))[0])),
        T
      );
    }
    var x = null;
    function $() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (x == null && (x = r("WAWebPonyfillsCryptoRandomUUID")()), x);
    }
    var P = new Map();
    function N(e, t) {
      var n = !1,
        r = void 0;
      return function () {
        return (n || ((n = !0), (r = M(e, t))), r);
      };
    }
    function M(e, t) {
      var n = o("WAWebMdSessionIdCache").getCachedMdSessionId();
      if (!(n == null || n === "")) {
        var r = P.get(e);
        if (
          !(
            (r == null ? void 0 : r.sessionId) === t &&
            (r == null ? void 0 : r.mdSessionId) === n
          )
        )
          return (P.set(e, { sessionId: t, mdSessionId: n }), n);
      }
    }
    var w = null;
    function A() {
      return (w == null && (w = r("qex")._("2703") === !0), w);
    }
    function F() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function O() {
      return r("justknobx")._("918") ? !1 : F() || A();
    }
    var B = new Set(["BEGIN_EDITING", "END_EDITING"]),
      W = 500,
      q = new Map(),
      U = new Set(),
      V = new Set(),
      H = "";
    function G(e, t) {
      return e + "\0" + t;
    }
    function z(e, t) {
      var n = q.get(e);
      return n != null && t - n < W;
    }
    var j = !1,
      K = 10,
      Q = 0;
    function X(e, t) {
      ($e(),
        (j = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function Y() {
      if (j) {
        if (((j = !1), Q >= K)) {
          o("WAWebPathfinderHealthReporter").discardPathfinderHealthCounters();
          return;
        }
        o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters() &&
          Q++;
      }
    }
    function J() {
      (de++,
        X(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        de === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(W),
          ));
    }
    function Z(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : H;
      if (e.eventType !== "BEGIN_EDITING") return ee(n, e);
      var r = G(e.eventType, n);
      return z(r, e.timestampMs)
        ? (U.add(n), J(), !1)
        : (q.set(r, e.timestampMs), V.add(n), U.delete(n), !0);
    }
    function ee(e, t) {
      if (U.has(e)) return (U.delete(e), V.delete(e), J(), !1);
      var n = G(t.eventType, e);
      return V.has(e)
        ? (V.delete(e), q.set(n, t.timestampMs), !0)
        : z(n, t.timestampMs)
          ? (J(), !1)
          : (q.set(n, t.timestampMs), !0);
    }
    var te = 100,
      ne = 5e4,
      re = 1e5,
      oe = 1e4,
      ae = 5e4,
      ie = 864e5,
      le = -1,
      se = 0,
      ue = 0,
      ce = 0,
      de = 0,
      me = !1,
      pe = -1,
      _e = oe,
      fe = ae,
      ge = !1;
    function he(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function ye(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function Ce() {
      var e = r("justknobx")._("2845");
      return he({ max: ne, min: te, value: ye(e, oe) });
    }
    function be() {
      _e = Ce();
      var e = r("justknobx")._("2846");
      ((ge = e === le), (fe = he({ max: re, min: te, value: ye(e, ae) })));
    }
    function ve() {
      var e = Math.floor(Date.now() / ie);
      e !== pe &&
        ((ue = 0), (se = 0), (ce = 0), (de = 0), (me = !1), (pe = e), be());
    }
    function Se() {
      (Y(),
        (Q = 0),
        (se = 0),
        (ke = 0),
        q.clear(),
        U.clear(),
        V.clear(),
        P.clear());
    }
    var Re = 50,
      Le = new Array(Re),
      Ee = 0,
      ke = 0,
      Ie = 0,
      Te = !1;
    function De() {
      Te ||
        ((Te = !0),
        o("WAWebCrashlog").registerPathfinderTraceCallback(function () {
          try {
            if (!O()) return null;
            var e = o(
              "WAWebPathfinderTraceEnvelope",
            ).buildPathfinderTraceEnvelope(ze());
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
    var xe = !1;
    function $e() {
      xe || ((xe = !0), self.addEventListener("pagehide", Y));
    }
    var Pe = null;
    function Ne(e) {
      Pe = e;
    }
    var Me = "web.pathfinder.ring_buffer_overflow";
    function we() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function Ae() {
      try {
        r("WAWebODS").incr("web.pathfinder.unresolvable_custom_event_drop");
      } catch (e) {}
    }
    function Fe() {
      try {
        r("WAWebODS").incr("web.pathfinder.ring_buffer_overflow");
      } catch (e) {}
    }
    function Oe(e) {
      return (
        e.eventType === "CUSTOM_EVENT" &&
        (e.originalEventName == null ||
          e.originalEventName === "CUSTOM_EVENT" ||
          !Object.prototype.hasOwnProperty.call(y, e.originalEventName))
      );
    }
    function Be() {
      (X(
        o("WAWebPathfinderHealthReporter")
          .COUNTER_UNRESOLVABLE_CUSTOM_EVENT_DROPS,
        1,
      ),
        Ae(),
        me ||
          (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] dropped custom event without a semantic event name",
                ])),
            )
            .sendLogs("pathfinder-custom-event-unresolvable-name"),
          (me = !0)));
    }
    function We(e) {
      return (
        C.has(e.eventType) &&
        (e.targetTrackingId == null || e.targetTrackingId === "") &&
        (e.targetType == null || e.targetType === "") &&
        r("justknobx")._("3611")
      );
    }
    function qe(e) {
      return (
        (e.targetTrackingId != null &&
          o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
            e.targetTrackingId,
            B.has(e.eventType),
          )) ||
        (e.triggeringTestId != null &&
          o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
            e.triggeringTestId,
          ))
      );
    }
    function Ue(e) {
      return !O() || (ve(), ge) || qe(e)
        ? !1
        : se >= _e || ue >= fe
          ? (ce++,
            X(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            ce === 1 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(se),
                String(ue),
              ),
            we(),
            !1)
          : Oe(e)
            ? (Be(), !1)
            : We(e)
              ? (Ve(),
                X(
                  o("WAWebPathfinderHealthReporter")
                    .COUNTER_TARGETLESS_TOUCH_DROPS,
                  1,
                ),
                !1)
              : B.has(e.eventType) && !Z(e)
                ? !1
                : (Ve(), !0);
    }
    function Ve() {
      (se++, ue++);
    }
    function He(e) {
      var t, n, a, i, l, s;
      if (Ue(e)) {
        var u = y[e.eventType],
          c = u != null ? I(e, u.eventName) : null;
        if (e.eventType === "CUSTOM_EVENT" && c == null) {
          Be();
          return;
        }
        X(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1);
        var d = [];
        if (
          (e.screenName != null && d.push("screen=" + e.screenName),
          e.targetTrackingId != null && d.push("target=" + e.targetTrackingId),
          e.destinationName != null && d.push("dest=" + e.destinationName),
          e.context != null && d.push("ctx=" + e.context),
          e.debounceCount != null &&
            e.debounceCount > 1 &&
            d.push("debounce=" + String(e.debounceCount)),
          e.gestureDirection != null)
        ) {
          var m;
          d.push(
            "direction=" +
              ((m = b[e.gestureDirection]) != null
                ? m
                : String(e.gestureDirection)),
          );
        }
        var p =
          d.length > 0
            ? "[pathfinder] " + e.eventType + " " + d.join(" ")
            : "[pathfinder] " + e.eventType;
        if (
          (o("WALogger").LOG(
            g || (g = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            p,
          ),
          u != null && c != null)
        ) {
          var _,
            f,
            C,
            v,
            S,
            R,
            L =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            T = {
              event_category: u.category,
              event_name: c,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: $(),
              process_id: D(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (_ = e.gestureDirection) != null ? _ : void 0,
              screen_name: (f = e.screenName) != null ? f : void 0,
              destination_screen_name:
                (C = e.destinationName) != null ? C : void 0,
              target_testid: (v = e.targetTrackingId) != null ? v : void 0,
              target_element_type: (S = e.targetType) != null ? S : void 0,
              event_metadata: k(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                L,
              ),
              custom_metadata: E(e.customMetadata, L, !0),
              custom_event_type_id:
                e.customEventTypeId != null
                  ? String(e.customEventTypeId)
                  : void 0,
            },
            x = N("sampled", T.unified_session_id);
          r("WamPathfinderWebFalcoEvent").log(function () {
            return babelHelpers.extends({}, T, { md_session_id: x() });
          });
          var P =
            e.eventType === "SCREEN_CHANGED" &&
            (R = o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdForScreen(e.destinationName)) != null
              ? R
              : o(
                  "WAWebPathfinderUnsamplingConfig",
                ).getUnsamplingRuleIdForScreen(e.screenName);
          if (P != null) {
            var M = N("unsampled", T.unified_session_id);
            r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
              return babelHelpers.extends({}, T, {
                md_session_id: M(),
                sampling_reason: "TRIGGER_SCREEN",
                session_flag_rule_id: P,
              });
            });
          }
        }
        De();
        var w = {
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
          (d.length > 0 && (w.extra = d.join(" ")),
          ke >= Re &&
            (X(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
            Fe()),
          ke++,
          Ie++,
          (Le[Ee] = w),
          (Ee = (Ee + 1) % Re),
          Pe != null)
        )
          try {
            Pe(e.eventType);
          } catch (e) {
            try {
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[pathfinder] emit observer threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("pathfinder-observer-error");
            } catch (e) {}
          }
      }
    }
    function Ge() {
      for (var e = [], t = 0; t < Re; t++) {
        var n = (Ee + t) % Re,
          r = Le[n];
        r != null && e.push(r);
      }
      return e;
    }
    function ze() {
      return { entries: Ge(), headClipped: Ie > Re, totalRecorded: Ie };
    }
    ((l.FALCO_MAP = y),
      (l.isPathfinderLoggingEnabled = O),
      (l.resetPathfinderSessionState = Se),
      (l.registerPathfinderEmitObserver = Ne),
      (l.PATHFINDER_RING_BUFFER_OVERFLOW_ODS_KEY = Me),
      (l.emitPathfinderEvent = He),
      (l.getPathfinderLogSnapshot = Ge),
      (l.getPathfinderLogSnapshotWithMeta = ze));
  },
  98,
);
