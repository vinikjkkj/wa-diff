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
      m = {
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
      p = { 1: "UP", 2: "DOWN", 3: "LEFT", 4: "RIGHT" },
      _ = 50,
      f = 25,
      g = 100;
    function h(t, n, r, a, i) {
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
            f,
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
            g,
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
            _,
            a.join(", "),
          ));
    }
    function y(e, t) {
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
          if (u >= _) {
            c = d;
            break;
          }
          if (m.length > f) {
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
          (p.length > g ? (s.push(m), (n[m] = p.slice(0, g))) : (n[m] = p),
            u++);
        }
        var y = c >= 0 ? a.slice(c) : [],
          C = t != null ? " [" + t + "]" : "";
        return (h(l, i, s, y, C), r("isEmptyObject")(n) ? void 0 : n);
      }
    }
    function C(e, t, n) {
      var o,
        a = (o = y(e, n)) != null ? o : {};
      return (
        t.custom_event_type != null &&
          (a.custom_event_type = t.custom_event_type),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function b(e, t, n) {
      var o,
        a = (o = y(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function v(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        m[e.originalEventName] != null
        ? m[e.originalEventName].eventName
        : t;
    }
    var S = null;
    function R() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (S == null && (S = r("WAWebPonyfillsCryptoRandomUUID")()), S);
    }
    var L = null;
    function E() {
      return (L == null && (L = r("qex")._("2703") === !0), L);
    }
    function k() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function I() {
      return r("justknobx")._("918") ? !1 : k() || E();
    }
    var T = 50,
      D = new Array(T),
      x = 0,
      $ = !1;
    function P() {
      $ || (($ = !0), o("WAWebCrashlog").registerPathfinderSnapshotCallback(M));
    }
    function N(e) {
      var t, n, a, i, l, s;
      if (I()) {
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
              ((c = p[e.gestureDirection]) != null
                ? c
                : String(e.gestureDirection)),
          );
        }
        var _ =
          u.length > 0
            ? "[pathfinder] " + e.eventType + " " + u.join(" ")
            : "[pathfinder] " + e.eventType;
        o("WALogger").LOG(
          d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          _,
        );
        var f = m[e.eventType];
        if (f != null) {
          var g,
            h,
            y,
            S,
            L,
            E = v(e, f.eventName),
            k =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : ""),
            $ = {
              event_category: f.category,
              event_name: E,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: R(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (g = e.gestureDirection) != null ? g : void 0,
              screen_name: (h = e.screenName) != null ? h : void 0,
              destination_screen_name:
                (y = e.destinationName) != null ? y : void 0,
              target_testid: (S = e.targetTrackingId) != null ? S : void 0,
              target_element_type: (L = e.targetType) != null ? L : void 0,
              event_metadata: b(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                k,
              ),
              custom_metadata: C(
                e.customMetadata,
                { custom_event_type: e.customEventTypeDisplayName },
                k,
              ),
            };
          r("WamPathfinderWebFalcoEvent").log(function () {
            return $;
          });
          var N = o(
            "WAWebPathfinderUnsamplingConfig",
          ).getUnsamplingRuleIdForScreen(e.screenName);
          N != null &&
            r("WamPathfinderWebUnsampledFalcoEvent").log(function () {
              return babelHelpers.extends({}, $, {
                sampling_reason: "TRIGGER_SCREEN",
                session_flag_rule_id: N,
              });
            });
        }
        P();
        var M = {
          eventType: e.eventType,
          timestampMs: e.timestampMs,
          trackingId: (t = e.targetTrackingId) != null ? t : void 0,
          screenName: (n = e.screenName) != null ? n : void 0,
          targetType: (a = e.targetType) != null ? a : void 0,
          destinationName: (i = e.destinationName) != null ? i : void 0,
          context: (l = e.context) != null ? l : void 0,
          debounceCount: (s = e.debounceCount) != null ? s : void 0,
        };
        (u.length > 0 && (M.extra = u.join(" ")),
          (D[x] = M),
          (x = (x + 1) % T));
      }
    }
    function M() {
      for (var e = [], t = 0; t < T; t++) {
        var n = (x + t) % T,
          r = D[n];
        r != null && e.push(r);
      }
      return e;
    }
    ((l.FALCO_MAP = m),
      (l.isPathfinderLoggingEnabled = I),
      (l.emitPathfinderEvent = N),
      (l.getPathfinderLogSnapshot = M));
  },
  98,
);
