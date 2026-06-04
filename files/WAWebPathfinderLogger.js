__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCrashlog",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUnifiedSession",
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
      if (r("justknobx")._("918")) return 0;
      var e = o("WAWebABProps").getABPropConfigValue("web_pathfinder_logging");
      return e > 0 ? e : k() ? 2 : 0;
    }
    function T() {
      return I() > 0;
    }
    var D = 50,
      x = new Array(D),
      $ = 0,
      P = !1;
    function N() {
      P || ((P = !0), o("WAWebCrashlog").registerPathfinderSnapshotCallback(w));
    }
    function M(e) {
      var t = I();
      if (!(t < 1)) {
        var n = [];
        if (
          (e.screenName != null && n.push("screen=" + e.screenName),
          e.targetTrackingId != null && n.push("target=" + e.targetTrackingId),
          e.destinationName != null && n.push("dest=" + e.destinationName),
          e.context != null && n.push("ctx=" + e.context),
          e.debounceCount != null &&
            e.debounceCount > 1 &&
            n.push("debounce=" + String(e.debounceCount)),
          e.gestureDirection != null)
        ) {
          var a;
          n.push(
            "direction=" +
              ((a = p[e.gestureDirection]) != null
                ? a
                : String(e.gestureDirection)),
          );
        }
        var i =
          n.length > 0
            ? "[pathfinder] " + e.eventType + " " + n.join(" ")
            : "[pathfinder] " + e.eventType;
        if (
          (o("WALogger").LOG(
            d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            i,
          ),
          t >= 2)
        ) {
          var l = m[e.eventType];
          if (l != null) {
            var s = S(e, l.eventName),
              u =
                "" +
                e.eventType +
                (e.targetTrackingId != null ? ":" + e.targetTrackingId : "");
            r("WamPathfinderWebFalcoEvent").log(function () {
              var t, n, r, o, a;
              return {
                event_category: l.category,
                event_name: s,
                client_timestamp_ms: String(e.timestampMs),
                unified_session_id: L(),
                debounce_count:
                  e.debounceCount != null ? String(e.debounceCount) : void 0,
                gesture_direction:
                  (t = e.gestureDirection) != null ? t : void 0,
                screen_name: (n = e.screenName) != null ? n : void 0,
                destination_screen_name:
                  (r = e.destinationName) != null ? r : void 0,
                target_testid: (o = e.targetTrackingId) != null ? o : void 0,
                target_element_type: (a = e.targetType) != null ? a : void 0,
                event_metadata: v(
                  e.eventMetadata,
                  { triggering_testid: e.triggeringTestId },
                  u,
                ),
                custom_metadata: b(
                  e.customMetadata,
                  { custom_event_type: e.customEventTypeDisplayName },
                  u,
                ),
              };
            });
          }
        }
        if (t >= 3) {
          var c, _, f, g, h, y;
          N();
          var C = {
            eventType: e.eventType,
            timestampMs: e.timestampMs,
            trackingId: (c = e.targetTrackingId) != null ? c : void 0,
            screenName: (_ = e.screenName) != null ? _ : void 0,
            targetType: (f = e.targetType) != null ? f : void 0,
            destinationName: (g = e.destinationName) != null ? g : void 0,
            context: (h = e.context) != null ? h : void 0,
            debounceCount: (y = e.debounceCount) != null ? y : void 0,
          };
          (n.length > 0 && (C.extra = n.join(" ")),
            (x[$] = C),
            ($ = ($ + 1) % D));
        }
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
