__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebLocalStorage",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUnifiedSession",
    "WAWebUserPrefsLoginKeys",
    "WamPathfinderWebFalcoEvent",
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
      g = 100,
      h = new Set([
        "cancelled",
        "custom_event_type",
        "edit_text_class",
        "frustration_repeated_action",
        "frustration_repetition_count",
        "generic_error_code",
        "generic_error_domain",
        "is_empty",
        "network_error_endpoint_category",
        "network_error_status_code",
        "screen_name",
        "toast_category",
        "toast_type",
        "touch_list_item_index",
        "touch_nearest_ancestor_id",
        "triggering_testid",
      ]);
    function y(t, n, r, a, i) {
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
    function C(e, t) {
      if (e != null) {
        for (
          var n = {},
            o = Object.keys(e).sort(),
            a = [],
            i = [],
            l = [],
            s = 0,
            u = -1,
            c = 0;
          c < o.length;
          c++
        ) {
          var d = o[c];
          if (s >= _) {
            u = c;
            break;
          }
          if (d.length > f) {
            a.push(d);
            continue;
          }
          if (h.has(d)) {
            i.push(d);
            continue;
          }
          var m = e[d];
          (m.length > g ? (l.push(d), (n[d] = m.slice(0, g))) : (n[d] = m),
            s++);
        }
        var p = u >= 0 ? o.slice(u) : [],
          C = t != null ? " [" + t + "]" : "";
        return (y(i, a, l, p, C), r("isEmptyObject")(n) ? void 0 : n);
      }
    }
    function b(e, t, n) {
      var o,
        a = (o = C(e, n)) != null ? o : {};
      return (
        t.custom_event_type != null &&
          (a.custom_event_type = t.custom_event_type),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function v(e, t, n) {
      var o,
        a = (o = C(e, n)) != null ? o : {};
      return (
        t.triggering_testid != null &&
          t.triggering_testid !== "" &&
          (a.triggering_testid = t.triggering_testid),
        r("isEmptyObject")(a) ? void 0 : a
      );
    }
    function S(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        m[e.originalEventName] != null
        ? m[e.originalEventName].eventName
        : t;
    }
    var R = null;
    function L() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e != null && e !== ""
        ? e
        : (R == null && (R = r("WAWebPonyfillsCryptoRandomUUID")()), R);
    }
    var E = null;
    function k() {
      return (E == null && (E = r("qex")._("2703") === !0), E);
    }
    function I() {
      return !!(
        r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").getItem(
          o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
        )
      );
    }
    function T() {
      return r("justknobx")._("918") ? !1 : I() || k();
    }
    var D = 50,
      x = new Array(D),
      $ = 0,
      P = !1;
    function N() {
      P || ((P = !0), o("WAWebCrashlog").registerPathfinderSnapshotCallback(w));
    }
    function M(e) {
      var t, n, a, i, l, s;
      if (T()) {
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
          var g = S(e, f.eventName),
            h =
              "" +
              e.eventType +
              (e.targetTrackingId != null ? ":" + e.targetTrackingId : "");
          r("WamPathfinderWebFalcoEvent").log(function () {
            var t, n, r, o, a;
            return {
              event_category: f.category,
              event_name: g,
              client_timestamp_ms: String(e.timestampMs),
              unified_session_id: L(),
              debounce_count:
                e.debounceCount != null ? String(e.debounceCount) : void 0,
              gesture_direction: (t = e.gestureDirection) != null ? t : void 0,
              screen_name: (n = e.screenName) != null ? n : void 0,
              destination_screen_name:
                (r = e.destinationName) != null ? r : void 0,
              target_testid: (o = e.targetTrackingId) != null ? o : void 0,
              target_element_type: (a = e.targetType) != null ? a : void 0,
              event_metadata: v(
                e.eventMetadata,
                { triggering_testid: e.triggeringTestId },
                h,
              ),
              custom_metadata: b(
                e.customMetadata,
                { custom_event_type: e.customEventTypeDisplayName },
                h,
              ),
            };
          });
        }
        N();
        var y = {
          eventType: e.eventType,
          timestampMs: e.timestampMs,
          trackingId: (t = e.targetTrackingId) != null ? t : void 0,
          screenName: (n = e.screenName) != null ? n : void 0,
          targetType: (a = e.targetType) != null ? a : void 0,
          destinationName: (i = e.destinationName) != null ? i : void 0,
          context: (l = e.context) != null ? l : void 0,
          debounceCount: (s = e.debounceCount) != null ? s : void 0,
        };
        (u.length > 0 && (y.extra = u.join(" ")),
          (x[$] = y),
          ($ = ($ + 1) % D));
      }
    }
    function w() {
      for (var e = [], t = 0; t < D; t++) {
        var n = ($ + t) % D,
          r = x[n];
        r != null && e.push(r);
      }
      return e;
    }
    ((l.FALCO_MAP = m),
      (l.isPathfinderLoggingEnabled = T),
      (l.emitPathfinderEvent = M),
      (l.getPathfinderLogSnapshot = w));
  },
  98,
);
