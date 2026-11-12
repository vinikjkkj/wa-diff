__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCrashlog",
    "WAWebMdSessionIdCache",
    "WAWebODS",
    "WAWebPathfinderHealthReporter",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderReservedMetadataKeys",
    "WAWebPathfinderTraceEnvelope",
    "WAWebPathfinderUnsamplingConfig",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUnifiedSession",
    "WAWebUserPrefsHasLoggedIn",
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
        t.press_kind != null && (a.press_kind = t.press_kind),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    var I = new Set(["secondary_click", "keyboard_menu", "long_hold"]);
    function T(e) {
      if (e.eventType !== "LONG_PRESS") return null;
      var t = e.pressKind;
      return t != null && I.has(t) ? t : "long_hold";
    }
    function D(e, t) {
      if (e.eventType !== "CUSTOM_EVENT") return t;
      if (We(e)) return null;
      var n = e.originalEventName;
      return n == null ? null : y[n].eventName;
    }
    var x = null;
    function $() {
      var e = self.crypto;
      return (
        x == null &&
          e != null &&
          (x = String(e.getRandomValues(new Uint32Array(1))[0])),
        x
      );
    }
    var P = null;
    function N() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (P == null && (P = r("WAWebPonyfillsCryptoRandomUUID")()), P);
    }
    var M = new Map();
    function w(e, t) {
      var n = !1,
        r = void 0;
      return function () {
        return (n || ((n = !0), (r = A(e, t))), r);
      };
    }
    function A(e, t) {
      var n = o("WAWebMdSessionIdCache").getCachedMdSessionId();
      if (!(n == null || n === "")) {
        var r = M.get(e);
        if (
          !(
            (r == null ? void 0 : r.sessionId) === t &&
            (r == null ? void 0 : r.mdSessionId) === n
          )
        )
          return (M.set(e, { sessionId: t, mdSessionId: n }), n);
      }
    }
    var F = null;
    function O() {
      return (F == null && (F = r("qex")._("2703") === !0), F);
    }
    function B() {
      return o("WAWebUserPrefsHasLoggedIn").hasLoggedInLightweight();
    }
    function W() {
      return r("justknobx")._("918") ? !1 : B() || O();
    }
    var q = new Set(["BEGIN_EDITING", "END_EDITING"]),
      U = 500,
      V = new Map(),
      H = new Set(),
      G = new Set(),
      z = "";
    function j(e, t) {
      return e + "\0" + t;
    }
    function K(e, t) {
      var n = V.get(e);
      return n != null && t - n < U;
    }
    var Q = !1,
      X = 10,
      Y = 0;
    function J(e, t) {
      (Ne(),
        (Q = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function Z() {
      if (Q) {
        if (((Q = !1), Y >= X)) {
          o("WAWebPathfinderHealthReporter").discardPathfinderHealthCounters();
          return;
        }
        o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters() &&
          Y++;
      }
    }
    function ee() {
      (pe++,
        J(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        pe === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(U),
          ));
    }
    function te(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : z;
      if (e.eventType !== "BEGIN_EDITING") return ne(n, e);
      var r = j(e.eventType, n);
      return K(r, e.timestampMs)
        ? (H.add(n), ee(), !1)
        : (V.set(r, e.timestampMs), G.add(n), H.delete(n), !0);
    }
    function ne(e, t) {
      if (H.has(e)) return (H.delete(e), G.delete(e), ee(), !1);
      var n = j(t.eventType, e);
      return G.has(e)
        ? (G.delete(e), V.set(n, t.timestampMs), !0)
        : K(n, t.timestampMs)
          ? (ee(), !1)
          : (V.set(n, t.timestampMs), !0);
    }
    var re = 100,
      oe = 5e4,
      ae = 1e5,
      ie = 1e4,
      le = 5e4,
      se = 864e5,
      ue = -1,
      ce = 0,
      de = 0,
      me = 0,
      pe = 0,
      _e = !1,
      fe = -1,
      ge = ie,
      he = le,
      ye = !1;
    function Ce(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function be(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function ve() {
      var e = r("justknobx")._("2845");
      return Ce({ max: oe, min: re, value: be(e, ie) });
    }
    function Se() {
      ge = ve();
      var e = r("justknobx")._("2846");
      ((ye = e === ue), (he = Ce({ max: ae, min: re, value: be(e, le) })));
    }
    function Re() {
      var e = Math.floor(Date.now() / se);
      e !== fe &&
        ((de = 0), (ce = 0), (me = 0), (pe = 0), (_e = !1), (fe = e), Se());
    }
    function Le() {
      (Z(),
        (Y = 0),
        (ce = 0),
        (Te = 0),
        V.clear(),
        H.clear(),
        G.clear(),
        M.clear());
    }
    var Ee = 50,
      ke = new Array(Ee),
      Ie = 0,
      Te = 0,
      De = 0,
      xe = !1;
    function $e() {
      xe ||
        ((xe = !0),
        o("WAWebCrashlog").registerPathfinderTraceCallback(function () {
          try {
            if (!W()) return null;
            var e = o(
              "WAWebPathfinderTraceEnvelope",
            ).buildPathfinderTraceEnvelope(Ye());
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
    var Pe = !1;
    function Ne() {
      Pe || ((Pe = !0), self.addEventListener("pagehide", Z));
    }
    var Me = null;
    function we(e) {
      Me = e;
    }
    var Ae = "web.pathfinder.ring_buffer_overflow";
    function Fe() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function Oe() {
      try {
        r("WAWebODS").incr("web.pathfinder.unresolvable_custom_event_drop");
      } catch (e) {}
    }
    function Be() {
      try {
        r("WAWebODS").incr("web.pathfinder.ring_buffer_overflow");
      } catch (e) {}
    }
    function We(e) {
      return (
        e.eventType === "CUSTOM_EVENT" &&
        (e.originalEventName == null ||
          e.originalEventName === "CUSTOM_EVENT" ||
          !Object.prototype.hasOwnProperty.call(y, e.originalEventName))
      );
    }
    function qe() {
      (J(
        o("WAWebPathfinderHealthReporter")
          .COUNTER_UNRESOLVABLE_CUSTOM_EVENT_DROPS,
        1,
      ),
        Oe(),
        _e ||
          (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] dropped custom event without a semantic event name",
                ])),
            )
            .sendLogs("pathfinder-custom-event-unresolvable-name"),
          (_e = !0)));
    }
    function Ue(e) {
      return Math.round(e - o("WATimeUtils").getClockSkew() * 1e3);
    }
    function Ve(e) {
      var t =
        e.eventType === "SCREEN_CHANGED"
          ? [e.destinationName, e.screenName]
          : [e.screenName];
      return Array.from(
        new Set(
          t.flatMap(function (e) {
            return o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdsForScreen(e);
          }),
        ),
      );
    }
    function He(e) {
      return (
        C.has(e.eventType) &&
        (e.targetTrackingId == null || e.targetTrackingId === "") &&
        (e.targetType == null || e.targetType === "") &&
        r("justknobx")._("3611")
      );
    }
    function Ge(e) {
      return (
        (e.targetTrackingId != null &&
          o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
            e.targetTrackingId,
            q.has(e.eventType),
          )) ||
        (e.triggeringTestId != null &&
          o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
            e.triggeringTestId,
          ))
      );
    }
    function ze(e) {
      return !W() || (Re(), ye) || Ge(e)
        ? !1
        : ce >= ge || de >= he
          ? (me++,
            J(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            me === 1 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(ce),
                String(de),
              ),
            Fe(),
            !1)
          : We(e)
            ? (qe(), !1)
            : He(e)
              ? (Ke(),
                J(
                  o("WAWebPathfinderHealthReporter")
                    .COUNTER_TARGETLESS_TOUCH_DROPS,
                  1,
                ),
                !1)
              : q.has(e.eventType) && !te(e)
                ? !1
                : (Ke(), !0);
    }
    function je(e) {
      var t = e.targetTrackingId,
        n = e.triggeringTestId,
        r =
          t != null
            ? o("WAWebPathfinderPIIFilter").maskPathfinderMessageIds(t)
            : t,
        a =
          n != null
            ? o("WAWebPathfinderPIIFilter").maskPathfinderMessageIds(n)
            : n;
      return r === t && a === n
        ? e
        : babelHelpers.extends({}, e, {
            targetTrackingId: r,
            triggeringTestId: a,
          });
    }
    function Ke() {
      (ce++, de++);
    }
    function Qe(e) {
      var t, n, a, i, l, s;
      if (!(o("WAWebPathfinderHeldBackSurface").isHeldBackEvent(e) || !ze(e))) {
        var u = je(e),
          c = y[u.eventType],
          d = c != null ? D(u, c.eventName) : null;
        if (u.eventType === "CUSTOM_EVENT" && d == null) {
          qe();
          return;
        }
        J(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1);
        var m = [];
        if (
          (u.screenName != null && m.push("screen=" + u.screenName),
          u.targetTrackingId != null && m.push("target=" + u.targetTrackingId),
          u.destinationName != null && m.push("dest=" + u.destinationName),
          u.context != null && m.push("ctx=" + u.context),
          u.debounceCount != null &&
            u.debounceCount > 1 &&
            m.push("debounce=" + String(u.debounceCount)),
          u.gestureDirection != null)
        ) {
          var p;
          m.push(
            "direction=" +
              ((p = b[u.gestureDirection]) != null
                ? p
                : String(u.gestureDirection)),
          );
        }
        var _ = T(u);
        _ != null && m.push("kind=" + _);
        var f =
          m.length > 0
            ? "[pathfinder] " + u.eventType + " " + m.join(" ")
            : "[pathfinder] " + u.eventType;
        if (
          (o("WALogger").LOG(
            g || (g = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            f,
          ),
          c != null && d != null)
        ) {
          var C,
            v,
            S,
            R,
            L,
            I,
            x =
              "" +
              u.eventType +
              (u.targetTrackingId != null ? ":" + u.targetTrackingId : ""),
            P = {
              event_category: c.category,
              event_name: d,
              client_timestamp_ms: String(Ue(u.timestampMs)),
              unified_session_id: N(),
              process_id: $(),
              debounce_count:
                u.debounceCount != null ? String(u.debounceCount) : void 0,
              gesture_direction: (C = u.gestureDirection) != null ? C : void 0,
              screen_name: (v = u.screenName) != null ? v : void 0,
              destination_screen_name:
                (S = u.destinationName) != null ? S : void 0,
              target_testid: (R = u.targetTrackingId) != null ? R : void 0,
              target_element_type: (L = u.targetType) != null ? L : void 0,
              event_metadata: k(
                u.eventMetadata,
                { triggering_testid: u.triggeringTestId, press_kind: _ },
                x,
              ),
              custom_metadata: E(u.customMetadata, x, !0),
              custom_event_type_id:
                u.customEventTypeId != null
                  ? String(u.customEventTypeId)
                  : void 0,
            },
            M = w("sampled", P.unified_session_id);
          r("WamPathfinderWebFalcoEvent").log(function () {
            return babelHelpers.extends({}, P, { md_session_id: M() });
          });
          var A =
            u.eventType === "SCREEN_CHANGED" &&
            (I = o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdForScreen(u.destinationName)) != null
              ? I
              : o(
                  "WAWebPathfinderUnsamplingConfig",
                ).getUnsamplingRuleIdForScreen(u.screenName);
          if (A != null) {
            var F = w("unsampled", P.unified_session_id);
            r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
              return babelHelpers.extends({}, P, {
                md_session_id: F(),
                sampling_reason: "TRIGGER_SCREEN",
                session_flag_rule_id: A,
                session_flag_rule_ids: Ve(u),
              });
            });
          }
        }
        $e();
        var O = {
          eventType: u.eventType,
          timestampMs: u.timestampMs,
          trackingId: (t = u.targetTrackingId) != null ? t : void 0,
          screenName: (n = u.screenName) != null ? n : void 0,
          targetType: (a = u.targetType) != null ? a : void 0,
          destinationName: (i = u.destinationName) != null ? i : void 0,
          context: (l = u.context) != null ? l : void 0,
          debounceCount: (s = u.debounceCount) != null ? s : void 0,
        };
        if (
          (m.length > 0 && (O.extra = m.join(" ")),
          Te >= Ee &&
            (J(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
            Be()),
          Te++,
          De++,
          (ke[Ie] = O),
          (Ie = (Ie + 1) % Ee),
          Me != null)
        )
          try {
            Me(u.eventType);
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
    function Xe() {
      for (var e = [], t = 0; t < Ee; t++) {
        var n = (Ie + t) % Ee,
          r = ke[n];
        r != null && e.push(r);
      }
      return e;
    }
    function Ye() {
      return { entries: Xe(), headClipped: De > Ee, totalRecorded: De };
    }
    ((l.FALCO_MAP = y),
      (l.isPathfinderLoggingEnabled = W),
      (l.resetPathfinderSessionState = Le),
      (l.registerPathfinderEmitObserver = we),
      (l.PATHFINDER_RING_BUFFER_OVERFLOW_ODS_KEY = Ae),
      (l.emitPathfinderEvent = Qe),
      (l.getPathfinderLogSnapshot = Xe),
      (l.getPathfinderLogSnapshotWithMeta = Ye));
  },
  98,
);
