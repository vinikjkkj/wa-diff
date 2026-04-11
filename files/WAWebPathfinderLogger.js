__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAwareWamEvent",
    "WAWebCrashlog",
    "WamPathfinderWebFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        TAP: { category: 0, eventName: 0 },
        DOUBLE_TAP: { category: 0, eventName: 1 },
        SCROLL: { category: 0, eventName: 2 },
        LONG_PRESS: { category: 0, eventName: 3 },
        SWIPE: { category: 0, eventName: 4 },
        SCREEN_CHANGED: { category: 1, eventName: 5 },
        BACKGROUND: { category: 2, eventName: 6 },
        FOREGROUND: { category: 2, eventName: 7 },
        KEYBOARD_SHOWN: { category: 3, eventName: 8 },
        KEYBOARD_CLOSED: { category: 3, eventName: 9 },
        BEGIN_EDITING: { category: 3, eventName: 10 },
        END_EDITING: { category: 3, eventName: 11 },
        OTHER_GESTURE: { category: 0, eventName: 12 },
        CONTENT_CHANGED: { category: 3, eventName: 13 },
        ALERT_SHOWN: { category: 2, eventName: 14 },
        ALERT_CLOSED: { category: 2, eventName: 15 },
      },
      u = {
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
        CONTENT_CHANGED: { category: 5, eventName: 14 },
        ALERT_SHOWN: { category: 5, eventName: 13 },
        ALERT_CLOSED: { category: 5, eventName: 25 },
      },
      c = crypto.randomUUID(),
      d = o("WAWebABProps").getABPropConfigValue("web_pathfinder_logging"),
      m = 50,
      p = new Array(m),
      _ = 0;
    function f(t) {
      if (d >= 1) {
        var n = s[t.eventType];
        if (n != null) {
          var a, i, l, f, g, h;
          new (o("WAWebAwareWamEvent").AwareWamEvent)({
            awareCategory: n.category,
            awareEventName: n.eventName,
            awareTimestampMs: t.timestampMs,
            awareScreenName: (a = t.screenName) != null ? a : void 0,
            awareTargetTrackingId:
              (i = t.targetTrackingId) != null ? i : void 0,
            awareTargetType: (l = t.targetType) != null ? l : void 0,
            awareDestinationName: (f = t.destinationName) != null ? f : void 0,
            awareContext: (g = t.context) != null ? g : void 0,
            awareDebounceCount: (h = t.debounceCount) != null ? h : void 0,
          }).commit();
        }
      }
      if (d >= 2) {
        var y = u[t.eventType];
        y != null &&
          r("WamPathfinderWebFalcoEvent").log(function () {
            var e, n, r, o;
            return {
              event_category: y.category,
              event_name: y.eventName,
              client_timestamp_ms: String(t.timestampMs),
              unified_session_id: c,
              debounce_count:
                t.debounceCount != null ? String(t.debounceCount) : void 0,
              screen_name: (e = t.screenName) != null ? e : void 0,
              destination_screen_name:
                (n = t.destinationName) != null ? n : void 0,
              target_testid: (r = t.targetTrackingId) != null ? r : void 0,
              target_element_type: (o = t.targetType) != null ? o : void 0,
            };
          });
      }
      if (!(d < 2)) {
        var C = [];
        (t.screenName != null && C.push("screen=" + t.screenName),
          t.targetTrackingId != null && C.push("target=" + t.targetTrackingId),
          t.destinationName != null && C.push("dest=" + t.destinationName),
          t.context != null && C.push("ctx=" + t.context),
          t.debounceCount != null &&
            t.debounceCount > 1 &&
            C.push("debounce=" + String(t.debounceCount)));
        var b =
          C.length > 0
            ? "[pathfinder] " + t.eventType + " " + C.join(" ")
            : "[pathfinder] " + t.eventType;
        if (
          (o("WALogger").LOG(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            b,
          ),
          d >= 3)
        ) {
          var v,
            S,
            R,
            L,
            E,
            k,
            I = {
              eventType: t.eventType,
              timestampMs: t.timestampMs,
              trackingId: (v = t.targetTrackingId) != null ? v : void 0,
              screenName: (S = t.screenName) != null ? S : void 0,
              targetType: (R = t.targetType) != null ? R : void 0,
              destinationName: (L = t.destinationName) != null ? L : void 0,
              context: (E = t.context) != null ? E : void 0,
              debounceCount: (k = t.debounceCount) != null ? k : void 0,
            };
          (C.length > 0 && (I.extra = C.join(" ")),
            (p[_] = I),
            (_ = (_ + 1) % m));
        }
      }
    }
    function g() {
      for (var e = [], t = 0; t < m; t++) {
        var n = (_ + t) % m,
          r = p[n];
        r != null && e.push(r);
      }
      return e;
    }
    (d >= 3 && o("WAWebCrashlog").registerPathfinderSnapshotCallback(g),
      (l.FALCO_MAP = u),
      (l.emitPathfinderEvent = f),
      (l.getPathfinderLogSnapshot = g));
  },
  98,
);
