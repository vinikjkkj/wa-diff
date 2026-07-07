__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebLocalStorage",
    "WAWebPathfinderReservedMetadataKeys",
    "WAWebPathfinderUnsamplingConfig",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUnifiedSession",
    "WAWebUserPrefsLoginKeys",
    "WamPathfinderWebFalcoEvent",
    "WamPathfinderWebUnsampledFalcoEvent",
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
      _ = {
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
      f = { 1: "UP", 2: "DOWN", 3: "LEFT", 4: "RIGHT" },
      g = 50,
      h = 25,
      y = 100;
    function C(t, n, r, a, i) {
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
            h,
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
            y,
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
            g,
            a.join(", "),
          ));
    }
    function b(e, t) {
      if (e != null) {
        for (
          var n = {},
            a = Object.keys(e).sort(),
            i = [],
            l = [],
            s = [],
            u = 0,
            c = -1,
            d = 0;
          d < a.length;
          d++
        ) {
          var m = a[d];
          if (u >= g) {
            c = d;
            break;
          }
          if (m.length > h) {
            i.push(m);
            continue;
          }
          if (
            o("WAWebPathfinderReservedMetadataKeys").RESERVED_METADATA_KEYS.has(
              m,
            )
          ) {
            l.push(m);
            continue;
          }
          var p = e[m];
          (p.length > y ? (s.push(m), (n[m] = p.slice(0, y))) : (n[m] = p),
            u++);
        }
        var _ = c >= 0 ? a.slice(c) : [],
          f = t != null ? " [" + t + "]" : "";
        return (C(l, i, s, _, f), r("isEmptyObject")(n) ? void 0 : n);
      }
    }
    function v(e, t, n) {
      var o,
        a = (o = b(e, n)) != null ? o : {};
      return (
        t.custom_event_type != null &&
          (a.custom_event_type = t.custom_event_type),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function S(e, t, n) {
      var o,
        a = (o = b(e, n)) != null ? o : {};
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
        _[e.originalEventName] != null
        ? _[e.originalEventName].eventName
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
    function O() {
      (X++,
        X === 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] Editing-event dedup active (window=",
                "ms), suppressing rapid duplicate BEGIN/END events",
              ])),
            String($),
          ));
    }
    function B(e) {
      var t,
        n = (t = e.targetTrackingId) != null ? t : w;
      if (e.eventType !== "BEGIN_EDITING") return W(n, e);
      var r = A(e.eventType, n);
      return F(r, e.timestampMs)
        ? (N.add(n), O(), !1)
        : (P.set(r, e.timestampMs), M.add(n), N.delete(n), !0);
    }
    function W(e, t) {
      if (N.has(e)) return (N.delete(e), M.delete(e), O(), !1);
      var n = A(t.eventType, e);
      return M.has(e)
        ? (M.delete(e), P.set(n, t.timestampMs), !0)
        : F(n, t.timestampMs)
          ? (O(), !1)
          : (P.set(n, t.timestampMs), !0);
    }
    var q = 100,
      U = 5e4,
      V = 1e5,
      H = 1e4,
      G = 5e4,
      z = 864e5,
      j = 0,
      K = 0,
      Q = 0,
      X = 0,
      Y = -1,
      J = H,
      Z = G;
    function ee(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function te(e, t) {
      return !Number.isFinite(e) || e <= 0 ? t : e;
    }
    function ne() {
      var e = r("justknobx")._("2845");
      return ee(te(e, H), q, U);
    }
    function re() {
      var e = r("justknobx")._("2846");
      return ee(te(e, G), q, V);
    }
    function oe() {
      var e = Math.floor(Date.now() / z);
      e !== Y &&
        ((K = 0), (j = 0), (Q = 0), (X = 0), (Y = e), (J = ne()), (Z = re()));
    }
    function ae() {
      ((j = 0), P.clear(), N.clear(), M.clear());
    }
    function ie() {
      (ae(), (K = 0), (Q = 0), (X = 0), (Y = -1), (J = ne()), (Z = re()));
    }
    var le = 50,
      se = new Array(le),
      ue = 0,
      ce = !1;
    function de() {
      ce ||
        ((ce = !0), o("WAWebCrashlog").registerPathfinderSnapshotCallback(_e));
    }
    function me(e) {
      return D()
        ? (oe(),
          j >= J || K >= Z
            ? (Q++,
              Q === 1 &&
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[pathfinder] Event cap reached (session=",
                      " daily=",
                      "), dropping subsequent events",
                    ])),
                  String(j),
                  String(K),
                ),
              !1)
            : x.has(e.eventType) && !B(e)
              ? !1
              : (j++, K++, !0))
        : !1;
    }
    function pe(e) {
      var t, n, a, i, l, s;
      if (me(e)) {
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
              ((c = f[e.gestureDirection]) != null
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
        var m = _[e.eventType];
        if (m != null) {
          var g,
            h,
            y,
            C,
            b,
            L = R(e, m.eventName),
            k =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            I = {
              event_category: m.category,
              event_name: L,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: E(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (g = e.gestureDirection) != null ? g : void 0,
              screen_name: (h = e.screenName) != null ? h : void 0,
              destination_screen_name:
                (y = e.destinationName) != null ? y : void 0,
              target_testid: (C = e.targetTrackingId) != null ? C : void 0,
              target_element_type: (b = e.targetType) != null ? b : void 0,
              event_metadata: S(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                k,
              ),
              custom_metadata: v(
                e.customMetadata,
                { custom_event_type: e.customEventTypeDisplayName },
                k,
              ),
            };
          r("WamPathfinderWebFalcoEvent").log(function () {
            return I;
          });
          var T = o(
            "WAWebPathfinderUnsamplingConfig",
          ).getUnsamplingRuleIdForScreen(e.screenName);
          T != null &&
            r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
              return babelHelpers.extends({}, I, {
                sampling_reason: "TRIGGER_SCREEN",
                session_flag_rule_id: T,
              });
            });
        }
        de();
        var D = {
          eventType: e.eventType,
          timestampMs: e.timestampMs,
          trackingId: (t = e.targetTrackingId) != null ? t : void 0,
          screenName: (n = e.screenName) != null ? n : void 0,
          targetType: (a = e.targetType) != null ? a : void 0,
          destinationName: (i = e.destinationName) != null ? i : void 0,
          context: (l = e.context) != null ? l : void 0,
          debounceCount: (s = e.debounceCount) != null ? s : void 0,
        };
        (u.length > 0 && (D.extra = u.join(" ")),
          (se[ue] = D),
          (ue = (ue + 1) % le));
      }
    }
    function _e() {
      for (var e = [], t = 0; t < le; t++) {
        var n = (ue + t) % le,
          r = se[n];
        r != null && e.push(r);
      }
      return e;
    }
    ((l.FALCO_MAP = _),
      (l.isPathfinderLoggingEnabled = D),
      (l.resetPathfinderSessionState = ae),
      (l.resetEventGuardsForTesting = ie),
      (l.emitPathfinderEvent = pe),
      (l.getPathfinderLogSnapshot = _e));
  },
  98,
);
