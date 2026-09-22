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
      var n = e.originalEventName,
        r = n != null && n !== "CUSTOM_EVENT" ? y[n] : null;
      return r == null
        ? (le ||
            (o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] dropped custom event without a semantic event name",
                  ])),
              )
              .sendLogs("pathfinder-custom-event-unresolvable-name"),
            (le = !0)),
          null)
        : r.eventName;
    }
    var T = null;
    function D() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (T == null && (T = r("WAWebPonyfillsCryptoRandomUUID")()), T);
    }
    var x = null;
    function $() {
      return (x == null && (x = r("qex")._("2703") === !0), x);
    }
    function P() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function N() {
      return r("justknobx")._("918") ? !1 : P() || $();
    }
    var M = new Set(["BEGIN_EDITING", "END_EDITING"]),
      w = 500,
      A = new Map(),
      F = new Set(),
      O = new Set(),
      B = "";
    function W(e, t) {
      return e + "\0" + t;
    }
    function q(e, t) {
      var n = A.get(e);
      return n != null && t - n < w;
    }
    var U = !1,
      V = 10,
      H = 0;
    function G(e, t) {
      (De(),
        (U = !0),
        o("WAWebPathfinderHealthReporter").recordPathfinderHealthCounter(e, t));
    }
    function z() {
      if (U) {
        if (((U = !1), H >= V)) {
          o("WAWebPathfinderHealthReporter").discardPathfinderHealthCounters();
          return;
        }
        (H++,
          o("WAWebPathfinderHealthReporter").drainPathfinderHealthCounters());
      }
    }
    function j() {
      (ie++,
        G(o("WAWebPathfinderHealthReporter").COUNTER_EDITING_DEDUP_DROPS, 1),
        ie === 1 &&
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String(w),
          ));
    }
    function K(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : B;
      if (e.eventType !== "BEGIN_EDITING") return Q(n, e);
      var r = W(e.eventType, n);
      return q(r, e.timestampMs)
        ? (F.add(n), j(), !1)
        : (A.set(r, e.timestampMs), O.add(n), F.delete(n), !0);
    }
    function Q(e, t) {
      if (F.has(e)) return (F.delete(e), O.delete(e), j(), !1);
      var n = W(t.eventType, e);
      return O.has(e)
        ? (O.delete(e), A.set(n, t.timestampMs), !0)
        : q(n, t.timestampMs)
          ? (j(), !1)
          : (A.set(n, t.timestampMs), !0);
    }
    var X = 100,
      Y = 5e4,
      J = 1e5,
      Z = 1e4,
      ee = 5e4,
      te = 864e5,
      ne = -1,
      re = 0,
      oe = 0,
      ae = 0,
      ie = 0,
      le = !1,
      se = -1,
      ue = Z,
      ce = ee,
      de = !1;
    function me(e) {
      var t = e.max,
        n = e.min,
        r = e.value;
      return Math.max(n, Math.min(t, r));
    }
    function pe(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function _e() {
      var e = r("justknobx")._("2845");
      return me({ max: Y, min: X, value: pe(e, Z) });
    }
    function fe() {
      ue = _e();
      var e = r("justknobx")._("2846");
      ((de = e === ne), (ce = me({ max: J, min: X, value: pe(e, ee) })));
    }
    function ge() {
      var e = Math.floor(Date.now() / te);
      e !== se &&
        ((oe = 0), (re = 0), (ae = 0), (ie = 0), (le = !1), (se = e), fe());
    }
    function he() {
      (z(), (H = 0), (re = 0), (Re = 0), A.clear(), F.clear(), O.clear());
    }
    function ye() {
      (he(),
        ve.fill(void 0),
        (Se = 0),
        (Le = 0),
        (oe = 0),
        (ae = 0),
        (ie = 0),
        (le = !1),
        (se = -1),
        fe());
    }
    function Ce() {
      return ce;
    }
    var be = 50,
      ve = new Array(be),
      Se = 0,
      Re = 0,
      Le = 0,
      Ee = !1;
    function ke() {
      Ee ||
        ((Ee = !0),
        o("WAWebCrashlog").registerPathfinderTraceCallback(function () {
          try {
            if (!N()) return null;
            var e = o(
              "WAWebPathfinderTraceEnvelope",
            ).buildPathfinderTraceEnvelope(qe());
            return e != null &&
              o("WAWebPathfinderTraceEnvelope").exceedsTraceByteBudget(e)
              ? (o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ie() {
      return o("WAWebPathfinderTraceEnvelope").serializePathfinderTraceEnvelope(
        qe,
        N,
      );
    }
    var Te = !1;
    function De() {
      Te || ((Te = !0), self.addEventListener("pagehide", z));
    }
    var xe = null;
    function $e(e) {
      xe = e;
    }
    var Pe = "web.pathfinder.event_cap_drop",
      Ne = "web.pathfinder.unresolvable_custom_event_drop";
    function Me() {
      try {
        r("WAWebODS").incr("web.pathfinder.event_cap_drop");
      } catch (e) {}
    }
    function we() {
      try {
        r("WAWebODS").incr("web.pathfinder.unresolvable_custom_event_drop");
      } catch (e) {}
    }
    function Ae(e) {
      return (
        C.has(e.eventType) &&
        (e.targetTrackingId == null || e.targetTrackingId === "") &&
        (e.targetType == null || e.targetType === "") &&
        r("justknobx")._("3611")
      );
    }
    function Fe(e) {
      return !N() || (ge(), de)
        ? !1
        : re >= ue || oe >= ce
          ? (ae++,
            G(o("WAWebPathfinderHealthReporter").COUNTER_CAP_DROPS, 1),
            ae === 1 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] Event cap reached (session=",
                    " daily=",
                    "), dropping subsequent events",
                  ])),
                String(re),
                String(oe),
              ),
            Me(),
            !1)
          : Ae(e)
            ? (Oe(),
              G(
                o("WAWebPathfinderHealthReporter")
                  .COUNTER_TARGETLESS_TOUCH_DROPS,
                1,
              ),
              !1)
            : M.has(e.eventType) && !K(e)
              ? !1
              : (Oe(), !0);
    }
    function Oe() {
      (re++, oe++);
    }
    function Be(e) {
      var t, n, a, i, l, s;
      if (Fe(e)) {
        var u = y[e.eventType],
          c = u != null ? I(e, u.eventName) : null;
        if (e.eventType === "CUSTOM_EVENT" && c == null) {
          we();
          return;
        }
        G(o("WAWebPathfinderHealthReporter").COUNTER_CAPTURE_VOLUME, 1);
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
              unified_session_id: D(),
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
            };
          r("WamPathfinderWebFalcoEvent").log(function () {
            return T;
          });
          var x =
            e.eventType === "SCREEN_CHANGED" &&
            (R = o(
              "WAWebPathfinderUnsamplingConfig",
            ).getUnsamplingRuleIdForScreen(e.destinationName)) != null
              ? R
              : o(
                  "WAWebPathfinderUnsamplingConfig",
                ).getUnsamplingRuleIdForScreen(e.screenName);
          x != null &&
            r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
              return babelHelpers.extends({}, T, {
                sampling_reason: "TRIGGER_SCREEN",
                session_flag_rule_id: x,
              });
            });
        }
        ke();
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
          (d.length > 0 && ($.extra = d.join(" ")),
          Re >= be &&
            G(
              o("WAWebPathfinderHealthReporter").COUNTER_RING_BUFFER_OVERFLOWS,
              1,
            ),
          Re++,
          Le++,
          (ve[Se] = $),
          (Se = (Se + 1) % be),
          xe != null)
        )
          try {
            xe(e.eventType);
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
    function We() {
      for (var e = [], t = 0; t < be; t++) {
        var n = (Se + t) % be,
          r = ve[n];
        r != null && e.push(r);
      }
      return e;
    }
    function qe() {
      return { entries: We(), headClipped: Le > be, totalRecorded: Le };
    }
    ((l.FALCO_MAP = y),
      (l.isPathfinderLoggingEnabled = N),
      (l.resetPathfinderSessionState = he),
      (l.resetEventGuardsForTesting = ye),
      (l.getDailyEventCapForTesting = Ce),
      (l.getPathfinderTraceJsonForBugReport = Ie),
      (l.registerPathfinderEmitObserver = $e),
      (l.PATHFINDER_CAP_DROP_ODS_KEY = Pe),
      (l.PATHFINDER_UNRESOLVABLE_CUSTOM_EVENT_DROP_ODS_KEY = Ne),
      (l.emitPathfinderEvent = Be),
      (l.getPathfinderLogSnapshot = We),
      (l.getPathfinderLogSnapshotWithMeta = qe));
  },
  98,
);
