__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCrashlog",
    "WAWebMdSessionIdCache",
    "WAWebODS",
    "WAWebPathfinderAppReactionMetadata",
    "WAWebPathfinderBackIntent",
    "WAWebPathfinderHealthReporter",
    "WAWebPathfinderHeldBackPermit",
    "WAWebPathfinderHeldBackScreen",
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
        TOAST_PRESENTED: { category: 5, eventName: 18 },
        SHEET_PRESENTED: { category: 5, eventName: 26 },
        SHEET_DISMISSED: { category: 5, eventName: 27 },
        TOGGLE_STATE_CHANGED: { category: 5, eventName: 29 },
        SELECTION_MADE: { category: 5, eventName: 30 },
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
              " (reason=reserved_key)",
            ])),
          i,
          t.length,
        ),
        n.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Pathfinder]",
                " Dropped metadata keys longer than ",
                " chars: ",
                " (reason=key_too_long)",
              ])),
            i,
            S,
            n.length,
          ),
        r.length > 0 &&
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Pathfinder]",
                " truncated values >",
                " chars: ",
                " (reason=value_too_long)",
              ])),
            i,
            R,
            r.length,
          ),
        a.length > 0 &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Pathfinder]",
                " dropped ",
                " keys over ",
                "-key cap (reason=key_cap)",
              ])),
            i,
            a.length,
            v,
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
      for (var i of (l = t.appReaction) != null ? l : []) {
        var l,
          s = i[0],
          u = i[1];
        a[s] = u;
      }
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        t.press_kind != null && (a.press_kind = t.press_kind),
        t.is_back === !0 && (a.is_back = "true"),
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
      if (qe(e)) return null;
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
      return q() !== "disabled";
    }
    function q() {
      return r("justknobx")._("918")
        ? "disabled"
        : B()
          ? "paired"
          : O()
            ? "logged_out"
            : "disabled";
    }
    var U = new Set(["BEGIN_EDITING", "END_EDITING"]),
      V = 500,
      H = new Map(),
      G = new Set(),
      z = new Set(),
      j = "";
    function K(e, t) {
      return e + "\0" + t;
    }
    function Q(e, t) {
      var n = H.get(e);
      return n != null && t - n < V;
    }
    var X = !1,
      Y = 10,
      J = 0;
    function Z(e, t) {
      (Me(),
        (X = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function ee() {
      if (X) {
        if (((X = !1), J >= Y)) {
          o("WAWebPathfinderHealthReporter").discardPathfinderHealthCounters();
          return;
        }
        o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters() &&
          J++;
      }
    }
    function te() {
      (_e++,
        Z(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        _e === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(V),
          ));
    }
    function ne(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : j;
      if (e.eventType !== "BEGIN_EDITING") return re(n, e);
      var r = K(e.eventType, n);
      return Q(r, e.timestampMs)
        ? (G.add(n), te(), !1)
        : (H.set(r, e.timestampMs), z.add(n), G.delete(n), !0);
    }
    function re(e, t) {
      if (G.has(e)) return (G.delete(e), z.delete(e), te(), !1);
      var n = K(t.eventType, e);
      return z.has(e)
        ? (z.delete(e), H.set(n, t.timestampMs), !0)
        : Q(n, t.timestampMs)
          ? (te(), !1)
          : (H.set(n, t.timestampMs), !0);
    }
    var oe = 100,
      ae = 5e4,
      ie = 1e5,
      le = 1e4,
      se = 5e4,
      ue = 864e5,
      ce = -1,
      de = 0,
      me = 0,
      pe = 0,
      _e = 0,
      fe = !1,
      ge = -1,
      he = le,
      ye = se,
      Ce = !1;
    function be(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function ve(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function Se() {
      var e = r("justknobx")._("2845");
      return be({ max: ae, min: oe, value: ve(e, le) });
    }
    function Re() {
      he = Se();
      var e = r("justknobx")._("2846");
      ((Ce = e === ce), (ye = be({ max: ie, min: oe, value: ve(e, se) })));
    }
    function Le() {
      var e = Math.floor(Date.now() / ue);
      e !== ge &&
        ((me = 0), (de = 0), (pe = 0), (_e = 0), (fe = !1), (ge = e), Re());
    }
    function Ee() {
      (ee(),
        (J = 0),
        (de = 0),
        (De = 0),
        H.clear(),
        G.clear(),
        z.clear(),
        M.clear());
    }
    var ke = 50,
      Ie = new Array(ke),
      Te = 0,
      De = 0,
      xe = 0,
      $e = !1;
    function Pe() {
      $e ||
        (($e = !0),
        o("WAWebCrashlog").registerPathfinderTraceCallback(function () {
          try {
            if (!W()) return null;
            var e = o(
              "WAWebPathfinderTraceEnvelope",
            ).buildPathfinderTraceEnvelope(Je());
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
    var Ne = !1;
    function Me() {
      Ne || ((Ne = !0), self.addEventListener("pagehide", ee));
    }
    var we = null;
    function Ae(e) {
      we = e;
    }
    var Fe = "web.pathfinder.ring_buffer_overflow";
    function Oe() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function Be() {
      try {
        r("WAWebODS").incr("web.pathfinder.unresolvable_custom_event_drop");
      } catch (e) {}
    }
    function We() {
      try {
        r("WAWebODS").incr("web.pathfinder.ring_buffer_overflow");
      } catch (e) {}
    }
    function qe(e) {
      return (
        e.eventType === "CUSTOM_EVENT" &&
        (e.originalEventName == null ||
          e.originalEventName === "CUSTOM_EVENT" ||
          !Object.prototype.hasOwnProperty.call(y, e.originalEventName) ||
          o(
            "WAWebPathfinderAppReactionMetadata",
          ).FRAMEWORK_ONLY_EVENT_TYPES.has(e.originalEventName))
      );
    }
    function Ue() {
      (Z(
        o("WAWebPathfinderHealthReporter")
          .COUNTER_UNRESOLVABLE_CUSTOM_EVENT_DROPS,
        1,
      ),
        Be(),
        fe ||
          (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] dropped custom event without a semantic event name",
                ])),
            )
            .sendLogs("pathfinder-custom-event-unresolvable-name"),
          (fe = !0)));
    }
    function Ve(e) {
      return Math.round(e - o("WATimeUtils").getClockSkew() * 1e3);
    }
    function He(e) {
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
    function Ge(e) {
      return (
        C.has(e.eventType) &&
        (e.targetTrackingId == null || e.targetTrackingId === "") &&
        (e.targetType == null || e.targetType === "") &&
        r("justknobx")._("3611")
      );
    }
    function ze(e) {
      return (
        (e.targetTrackingId != null &&
          o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
            e.targetTrackingId,
            U.has(e.eventType),
          )) ||
        (e.triggeringTestId != null &&
          o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
            e.triggeringTestId,
          ))
      );
    }
    function je(e, t) {
      return t === "disabled" || (Le(), Ce) || ze(e)
        ? !1
        : de >= he || me >= ye
          ? (pe++,
            Z(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            pe === 1 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(de),
                String(me),
              ),
            Oe(),
            !1)
          : qe(e)
            ? (Ue(), !1)
            : Ge(e)
              ? (Qe(),
                Z(
                  o("WAWebPathfinderHealthReporter")
                    .COUNTER_TARGETLESS_TOUCH_DROPS,
                  1,
                ),
                !1)
              : U.has(e.eventType) && !ne(e)
                ? !1
                : (Qe(), !0);
    }
    function Ke(e) {
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
    function Qe() {
      (de++, me++);
    }
    function Xe(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u =
          e.eventType === "SCREEN_CHANGED" &&
          o("WAWebPathfinderBackIntent").consumeBackIntent(e.timestampMs) &&
          e.screenName !== o("WAWebPathfinderHeldBackScreen").UNNAMED_SCREEN;
      if (
        !(
          !o("WAWebPathfinderHeldBackPermit").takePermittedHeldBackRow(e) &&
          o("WAWebPathfinderHeldBackSurface").isHeldBackEvent(e)
        )
      ) {
        var c = q();
        if (je(e, c)) {
          var d = Ke(e),
            m = y[d.eventType],
            p = m != null ? D(d, m.eventName) : null;
          if (d.eventType === "CUSTOM_EVENT" && p == null) {
            Ue();
            return;
          }
          Z(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1);
          var _ = [];
          if (
            (d.screenName != null && _.push("screen=" + d.screenName),
            d.targetTrackingId != null &&
              _.push("target=" + d.targetTrackingId),
            d.destinationName != null && _.push("dest=" + d.destinationName),
            d.context != null && _.push("ctx=" + d.context),
            d.debounceCount != null &&
              d.debounceCount > 1 &&
              _.push("debounce=" + String(d.debounceCount)),
            d.gestureDirection != null)
          ) {
            var f;
            _.push(
              "direction=" +
                ((f = b[d.gestureDirection]) != null
                  ? f
                  : String(d.gestureDirection)),
            );
          }
          var C = T(d);
          C != null && _.push("kind=" + C);
          var v =
            _.length > 0
              ? "[pathfinder] " + d.eventType + " " + _.join(" ")
              : "[pathfinder] " + d.eventType;
          if (
            (o("WALogger").LOG(
              g || (g = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              v,
            ),
            m != null && p != null)
          ) {
            var S,
              R,
              L,
              I,
              x,
              P,
              M,
              A =
                "" +
                d.eventType +
                (d.targetTrackingId != null ? ":" + d.targetTrackingId : ""),
              F = {
                event_category: m.category,
                event_name: p,
                client_timestamp_ms: String(Ve(d.timestampMs)),
                unified_session_id:
                  d.unifiedSessionId !== void 0
                    ? (S = d.unifiedSessionId) != null
                      ? S
                      : ""
                    : N(),
                process_id: $(),
                debounce_count:
                  d.debounceCount != null ? String(d.debounceCount) : void 0,
                gesture_direction:
                  (R = d.gestureDirection) != null ? R : void 0,
                screen_name: (L = d.screenName) != null ? L : void 0,
                destination_screen_name:
                  (I = d.destinationName) != null ? I : void 0,
                target_testid: (x = d.targetTrackingId) != null ? x : void 0,
                target_element_type: (P = d.targetType) != null ? P : void 0,
                event_metadata: k(
                  d.eventMetadata,
                  {
                    appReaction: o(
                      "WAWebPathfinderAppReactionMetadata",
                    ).toAppReactionEventMetadata(
                      d.eventType,
                      d.appReactionMetadata,
                    ),
                    triggering_testid: d.triggeringTestId,
                    press_kind: C,
                    is_back: u,
                  },
                  A,
                ),
                custom_metadata: E(d.customMetadata, A, !0),
                custom_event_type_id:
                  d.customEventTypeId != null
                    ? String(d.customEventTypeId)
                    : void 0,
              },
              O = w("sampled", F.unified_session_id);
            r("WamPathfinderWebFalcoEvent").log(function () {
              return babelHelpers.extends({}, F, { md_session_id: O() });
            });
            var B =
              d.eventType === "SCREEN_CHANGED" &&
              (M = o(
                "WAWebPathfinderUnsamplingConfig",
              ).getUnsamplingRuleIdForScreen(d.destinationName)) != null
                ? M
                : o(
                    "WAWebPathfinderUnsamplingConfig",
                  ).getUnsamplingRuleIdForScreen(d.screenName);
            if (B != null) {
              var W = w("unsampled", F.unified_session_id);
              r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
                return babelHelpers.extends({}, F, {
                  md_session_id: W(),
                  sampling_reason: "TRIGGER_SCREEN",
                  session_flag_rule_id: B,
                  session_flag_rule_ids: He(d),
                });
              });
            }
          }
          Pe();
          var U = {
            eventType: d.eventType,
            timestampMs: d.timestampMs,
            trackingId: (t = d.targetTrackingId) != null ? t : void 0,
            screenName: (n = d.screenName) != null ? n : void 0,
            targetType: (a = d.targetType) != null ? a : void 0,
            destinationName: (i = d.destinationName) != null ? i : void 0,
            context: (l = d.context) != null ? l : void 0,
            debounceCount: (s = d.debounceCount) != null ? s : void 0,
          };
          if (
            (_.length > 0 && (U.extra = _.join(" ")),
            De >= ke &&
              (Z(
                o("WAWebPathfinderHealthReporter")
                  .COUNTER_RING_BUFFER_OVERFLOWS,
                1,
              ),
              We()),
            De++,
            xe++,
            (Ie[Te] = U),
            (Te = (Te + 1) % ke),
            we != null)
          )
            try {
              we(d.eventType);
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
    }
    function Ye() {
      for (var e = [], t = 0; t < ke; t++) {
        var n = (Te + t) % ke,
          r = Ie[n];
        r != null && e.push(r);
      }
      return e;
    }
    function Je() {
      return { entries: Ye(), headClipped: xe > ke, totalRecorded: xe };
    }
    ((l.FALCO_MAP = y),
      (l.isPathfinderLoggingEnabled = W),
      (l.resetPathfinderSessionState = Ee),
      (l.registerPathfinderEmitObserver = Ae),
      (l.PATHFINDER_RING_BUFFER_OVERFLOW_ODS_KEY = Fe),
      (l.emitPathfinderEvent = Xe),
      (l.getPathfinderLogSnapshot = Ye),
      (l.getPathfinderLogSnapshotWithMeta = Je));
  },
  98,
);
