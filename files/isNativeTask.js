__d(
  "isNativeTask",
  ["I64", "LSPendingTasksPluginType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "4",
      u = "16",
      c = new Set([r("LSPendingTasksPluginType").IGD_INSTAMADILLO]);
    function d(t) {
      var n = c.has((e || (e = o("I64"))).to_float(t.pluginType)),
        r = t.context === u || t.context === s;
      return n || r;
    }
    l.default = d;
  },
  98,
);
