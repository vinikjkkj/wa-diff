__d(
  "MAIBALWICopilotBoostNullState",
  ["fbt", "LWIMAIBACopilotGating", "LWIMAIBAFormPresence", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e || (e = o("react"))).useSyncExternalStore;
    function c() {
      return (
        o("LWIMAIBAFormPresence").isLWIMAIBAFormPresent() &&
        o("LWIMAIBACopilotGating").isCopilotEntryEnabled()
      );
    }
    function d() {
      return u(o("LWIMAIBAFormPresence").subscribeToLWIMAIBAFormPresence, c);
    }
    function m(e) {
      var t = [
        { id: "lwi_copilot_boost_best_settings", label: s._(/*BTDS*/ "") },
        { id: "lwi_copilot_boost_goal", label: s._(/*BTDS*/ "") },
        { id: "lwi_copilot_boost_audience", label: s._(/*BTDS*/ "") },
        { id: "lwi_copilot_boost_schedule_budget", label: s._(/*BTDS*/ "") },
      ];
      return t.map(function (t) {
        return { id: t.id, prompt_placement: e, text: t.label.toString() };
      });
    }
    ((l.isLWIMAIBACopilotBoostNullState = c),
      (l.useLWIMAIBACopilotBoostNullState = d),
      (l.getLWIMAIBACopilotBoostNullStatePrompts = m));
  },
  226,
);
