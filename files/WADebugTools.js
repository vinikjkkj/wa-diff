__d(
  "WADebugTools",
  ["WADevToolsDebugFns"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      self.Debug == null && (self.Debug = {});
      var t = function () {
        var t = e[n];
        self.Debug[t.name] = function () {
          return t.execute.apply(t, arguments);
        };
      };
      for (var n in e) t();
      o("WADevToolsDebugFns").registerDebugFnsToDevTool(e);
    }
    l.initDebugFunctions = e;
  },
  98,
);
