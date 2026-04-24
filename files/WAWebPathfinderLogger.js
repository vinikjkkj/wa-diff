__d(
  "WAWebPathfinderLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCrashlog",
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
      p = 50,
      _ = 25,
      f = 100,
      g = new Set([
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
    function h(t, n, r, a, i) {
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
            _,
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
            f,
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
            p,
            a.join(", "),
          ));
    }
    function y(e, t) {
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
          if (s >= p) {
            u = c;
            break;
          }
          if (d.length > _) {
            a.push(d);
            continue;
          }
          if (g.has(d)) {
            i.push(d);
            continue;
          }
          var m = e[d];
          (m.length > f ? (l.push(d), (n[d] = m.slice(0, f))) : (n[d] = m),
            s++);
        }
        var y = u >= 0 ? o.slice(u) : [],
          C = t != null ? " [" + t + "]" : "";
        return (h(i, a, l, y, C), r("isEmptyObject")(n) ? void 0 : n);
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
    function b(e, t) {
      return e.eventType === "CUSTOM_EVENT" &&
        e.originalEventName != null &&
        m[e.originalEventName] != null
        ? m[e.originalEventName].eventName
        : t;
    }
    var v = crypto.randomUUID(),
      S = o("WAWebABProps").getABPropConfigValue("web_pathfinder_logging"),
      R = 50,
      L = new Array(R),
      E = 0;
    function k(e) {
      if (!(S < 1)) {
        var t = [];
        (e.screenName != null && t.push("screen=" + e.screenName),
          e.targetTrackingId != null && t.push("target=" + e.targetTrackingId),
          e.destinationName != null && t.push("dest=" + e.destinationName),
          e.context != null && t.push("ctx=" + e.context),
          e.debounceCount != null &&
            e.debounceCount > 1 &&
            t.push("debounce=" + String(e.debounceCount)));
        var n =
          t.length > 0
            ? "[pathfinder] " + e.eventType + " " + t.join(" ")
            : "[pathfinder] " + e.eventType;
        if (
          (o("WALogger").LOG(
            d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            n,
          ),
          S >= 2)
        ) {
          var a = m[e.eventType];
          if (a != null) {
            var i = b(e, a.eventName),
              l =
                "" +
                e.eventType +
                (e.targetTrackingId != null ? ":" + e.targetTrackingId : "");
            r("WamPathfinderWebFalcoEvent").log(function () {
              var t, n, r, o;
              return {
                event_category: a.category,
                event_name: i,
                client_timestamp_ms: String(e.timestampMs),
                unified_session_id: v,
                debounce_count:
                  e.debounceCount != null ? String(e.debounceCount) : void 0,
                screen_name: (t = e.screenName) != null ? t : void 0,
                destination_screen_name:
                  (n = e.destinationName) != null ? n : void 0,
                target_testid: (r = e.targetTrackingId) != null ? r : void 0,
                target_element_type: (o = e.targetType) != null ? o : void 0,
                event_metadata: y(e.eventMetadata, l),
                custom_metadata: C(
                  e.customMetadata,
                  { custom_event_type: e.customEventTypeDisplayName },
                  l,
                ),
              };
            });
          }
        }
        if (S >= 3) {
          var s,
            u,
            c,
            p,
            _,
            f,
            g = {
              eventType: e.eventType,
              timestampMs: e.timestampMs,
              trackingId: (s = e.targetTrackingId) != null ? s : void 0,
              screenName: (u = e.screenName) != null ? u : void 0,
              targetType: (c = e.targetType) != null ? c : void 0,
              destinationName: (p = e.destinationName) != null ? p : void 0,
              context: (_ = e.context) != null ? _ : void 0,
              debounceCount: (f = e.debounceCount) != null ? f : void 0,
            };
          (t.length > 0 && (g.extra = t.join(" ")),
            (L[E] = g),
            (E = (E + 1) % R));
        }
      }
    }
    function I() {
      for (var e = [], t = 0; t < R; t++) {
        var n = (E + t) % R,
          r = L[n];
        r != null && e.push(r);
      }
      return e;
    }
    (S >= 3 && o("WAWebCrashlog").registerPathfinderSnapshotCallback(I),
      (l.FALCO_MAP = m),
      (l.emitPathfinderEvent = k),
      (l.getPathfinderLogSnapshot = I));
  },
  98,
);
