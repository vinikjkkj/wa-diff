__d(
  "MAIBAA2UIv09ActionSerializer",
  ["MAIBAA2UIv09DataBinding"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? ""
        : typeof e == "string" || typeof e == "number" || typeof e == "boolean"
          ? String(e)
          : "";
    }
    function s(t, n, r) {
      var a = {},
        i = "";
      if (t.event != null) {
        i = t.event.name;
        var l = t.event.context;
        if (l != null)
          for (var s of Object.keys(l))
            a[s] = e(o("MAIBAA2UIv09DataBinding").resolveDynamicValue(l[s], n));
      } else if (t.functionCall != null) {
        i = t.functionCall.call;
        var u = t.functionCall.args;
        for (var c of Object.keys(u)) a[c] = e(u[c]);
      }
      var d = {
        type: "a2ui_action",
        action_name: i,
        context: a,
        surface_id: r,
      };
      return JSON.stringify(d);
    }
    l.serializeA2UIv09Action = s;
  },
  98,
);
