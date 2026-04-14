__d(
  "WAWebPathfinderLogger",
  ["WALogger", "WAWebABProps", "WAWebCrashlog", "WamPathfinderWebFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
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
      u = crypto.randomUUID(),
      c = o("WAWebABProps").getABPropConfigValue("web_pathfinder_logging"),
      d = 50,
      m = new Array(d),
      p = 0;
    function _(t) {
      if (!(c < 1)) {
        var n = [];
        (t.screenName != null && n.push("screen=" + t.screenName),
          t.targetTrackingId != null && n.push("target=" + t.targetTrackingId),
          t.destinationName != null && n.push("dest=" + t.destinationName),
          t.context != null && n.push("ctx=" + t.context),
          t.debounceCount != null &&
            t.debounceCount > 1 &&
            n.push("debounce=" + String(t.debounceCount)));
        var a =
          n.length > 0
            ? "[pathfinder] " + t.eventType + " " + n.join(" ")
            : "[pathfinder] " + t.eventType;
        if (
          (o("WALogger").LOG(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            a,
          ),
          c >= 2)
        ) {
          var i = s[t.eventType];
          i != null &&
            r("WamPathfinderWebFalcoEvent").log(function () {
              var e, n, r, o;
              return {
                event_category: i.category,
                event_name: i.eventName,
                client_timestamp_ms: String(t.timestampMs),
                unified_session_id: u,
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
        if (c >= 3) {
          var l,
            _,
            f,
            g,
            h,
            y,
            C = {
              eventType: t.eventType,
              timestampMs: t.timestampMs,
              trackingId: (l = t.targetTrackingId) != null ? l : void 0,
              screenName: (_ = t.screenName) != null ? _ : void 0,
              targetType: (f = t.targetType) != null ? f : void 0,
              destinationName: (g = t.destinationName) != null ? g : void 0,
              context: (h = t.context) != null ? h : void 0,
              debounceCount: (y = t.debounceCount) != null ? y : void 0,
            };
          (n.length > 0 && (C.extra = n.join(" ")),
            (m[p] = C),
            (p = (p + 1) % d));
        }
      }
    }
    function f() {
      for (var e = [], t = 0; t < d; t++) {
        var n = (p + t) % d,
          r = m[n];
        r != null && e.push(r);
      }
      return e;
    }
    (c >= 3 && o("WAWebCrashlog").registerPathfinderSnapshotCallback(f),
      (l.FALCO_MAP = s),
      (l.emitPathfinderEvent = _),
      (l.getPathfinderLogSnapshot = f));
  },
  98,
);
