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
      ]);
    function y(t, n, r, a, i) {
      (t.length > 0 &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Pathfinder]",
              " Dropped reserved metadata keys (framework-owned): ",
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
                " Truncated metadata values longer than ",
                " chars for keys: ",
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
                " Dropped ",
                " metadata keys beyond the ",
                "-key cap (alphabetical): ",
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
    var L = o("WAWebABProps").getABPropConfigValue("web_pathfinder_logging"),
      E = 50,
      k = new Array(E),
      I = 0;
    function T(e) {
      if (!(L < 1)) {
        var t = [];
        if (
          (e.screenName != null && t.push("screen=" + e.screenName),
          e.targetTrackingId != null && t.push("target=" + e.targetTrackingId),
          e.destinationName != null && t.push("dest=" + e.destinationName),
          e.context != null && t.push("ctx=" + e.context),
          e.debounceCount != null &&
            e.debounceCount > 1 &&
            t.push("debounce=" + String(e.debounceCount)),
          e.gestureDirection != null)
        ) {
          var n;
          t.push(
            "direction=" +
              ((n = p[e.gestureDirection]) != null
                ? n
                : String(e.gestureDirection)),
          );
        }
        var a =
          t.length > 0
            ? "[pathfinder] " + e.eventType + " " + t.join(" ")
            : "[pathfinder] " + e.eventType;
        if (
          (o("WALogger").LOG(
            d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            a,
          ),
          L >= 2)
        ) {
          var i = m[e.eventType];
          if (i != null) {
            var l = v(e, i.eventName),
              s =
                "" +
                e.eventType +
                (e.targetTrackingId != null ? ":" + e.targetTrackingId : "");
            r("WamPathfinderWebFalcoEvent").log(function () {
              var t, n, r, o, a;
              return {
                event_category: i.category,
                event_name: l,
                client_timestamp_ms: String(e.timestampMs),
                unified_session_id: R(),
                debounce_count:
                  e.debounceCount != null ? String(e.debounceCount) : void 0,
                gesture_direction:
                  (t = e.gestureDirection) != null ? t : void 0,
                screen_name: (n = e.screenName) != null ? n : void 0,
                destination_screen_name:
                  (r = e.destinationName) != null ? r : void 0,
                target_testid: (o = e.targetTrackingId) != null ? o : void 0,
                target_element_type: (a = e.targetType) != null ? a : void 0,
                event_metadata: C(e.eventMetadata, s),
                custom_metadata: b(
                  e.customMetadata,
                  { custom_event_type: e.customEventTypeDisplayName },
                  s,
                ),
              };
            });
          }
        }
        if (L >= 3) {
          var u,
            c,
            _,
            f,
            g,
            h,
            y = {
              eventType: e.eventType,
              timestampMs: e.timestampMs,
              trackingId: (u = e.targetTrackingId) != null ? u : void 0,
              screenName: (c = e.screenName) != null ? c : void 0,
              targetType: (_ = e.targetType) != null ? _ : void 0,
              destinationName: (f = e.destinationName) != null ? f : void 0,
              context: (g = e.context) != null ? g : void 0,
              debounceCount: (h = e.debounceCount) != null ? h : void 0,
            };
          (t.length > 0 && (y.extra = t.join(" ")),
            (k[I] = y),
            (I = (I + 1) % E));
        }
      }
    }
    function D() {
      for (var e = [], t = 0; t < E; t++) {
        var n = (I + t) % E,
          r = k[n];
        r != null && e.push(r);
      }
      return e;
    }
    (L >= 3 && o("WAWebCrashlog").registerPathfinderSnapshotCallback(D),
      (l.FALCO_MAP = m),
      (l.emitPathfinderEvent = T),
      (l.getPathfinderLogSnapshot = D));
  },
  98,
);
