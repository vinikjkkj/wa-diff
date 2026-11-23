__d(
  "MAIBAV2IXTA2UIStatePersistence",
  ["MAIBAV2IXTA2UIAdapterNav"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ixt_a2ui_challenge",
      s = 1;
    function u(e) {
      return (
        e === "completed" ||
        e === "error" ||
        e === "in_progress" ||
        e === "manual_handoff" ||
        e === "manual_handoff_launched"
      );
    }
    function c(e) {
      var t = o("MAIBAV2IXTA2UIAdapterNav").asObject(e),
        n = t == null ? void 0 : t.status,
        r = t == null ? void 0 : t.data;
      return t == null ||
        (n !== "PENDING" && n !== "CONFIRMED") ||
        (r != null && typeof r != "string")
        ? null
        : { data: r != null ? r : null, status: n };
    }
    function d(e) {
      var t = o("MAIBAV2IXTA2UIAdapterNav").asObject(e);
      if (t == null) return null;
      var n = {};
      for (var r of Object.keys(t)) {
        var a = c(t[r]);
        if (a == null) return null;
        n[r] = a;
      }
      return n;
    }
    function m(e) {
      if (!Array.isArray(e)) return null;
      var t = [];
      for (var n of e) {
        if (typeof n != "string") return null;
        t.push(n);
      }
      return t;
    }
    function p(e) {
      var t = e.terminal_status,
        n = m(e.slots),
        r = d(e.widget_states);
      return !u(t) || n == null || r == null
        ? null
        : { phase: t, slots: n, widgetStates: r };
    }
    function _(e) {
      if ((e == null ? void 0 : e.status) !== "CONFIRMED" || e.data == null)
        return null;
      try {
        var t = JSON.parse(e.data),
          n = o("MAIBAV2IXTA2UIAdapterNav").asObject(t);
        return n == null ? null : n.version === 1 ? p(n) : null;
      } catch (e) {
        return null;
      }
    }
    function f(e, t, n) {
      var r = {
        slots: t,
        terminal_status: e,
        version: s,
        widget_states: e === "completed" ? n : {},
      };
      return JSON.stringify(r);
    }
    function g(e) {
      return e == null
        ? []
        : e.slots.map(function (t, n) {
            return {
              a2uiJson: t,
              interactive:
                e.phase === "manual_handoff" && n === e.slots.length - 1,
              key: "ixt-persisted-state-" + n,
            };
          });
    }
    function h(e, t) {
      var n;
      return (e == null ? void 0 : e.phase) === "completed" &&
        (n = e.widgetStates[t]) != null
        ? n
        : null;
    }
    ((l.PERSISTED_CHALLENGE_STATE_KEY = e),
      (l.CURRENT_PERSISTED_CHALLENGE_STATE_VERSION = s),
      (l.decodePersistedChallengeState = _),
      (l.encodePersistedChallengeState = f),
      (l.restoredSlotsFromChallengeState = g),
      (l.restoredWidgetState = h));
  },
  98,
);
