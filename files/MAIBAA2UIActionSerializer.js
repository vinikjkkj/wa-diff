__d(
  "MAIBAA2UIActionSerializer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = [];
      if (e.context != null)
        for (var o of e.context) {
          var a = "";
          if (o.value.literalString != null) a = o.value.literalString;
          else if (o.value.path != null) {
            var i = o.value.path.split("/").filter(Boolean),
              l = t;
            for (var s of i)
              if (l != null && typeof l == "object") {
                var u = l[s];
                if (u != null) l = u;
                else {
                  l = "";
                  break;
                }
              } else {
                l = "";
                break;
              }
            typeof l == "string"
              ? (a = l)
              : (typeof l == "number" || typeof l == "boolean") &&
                (a = String(l));
          }
          r.push({ key: o.key, value: a });
        }
      var c = {
        type: "a2ui_action",
        action_name: e.name,
        context: r,
        surface_id: n,
      };
      return JSON.stringify(c);
    }
    i.serializeA2UIAction = e;
  },
  66,
);
