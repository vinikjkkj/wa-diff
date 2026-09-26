__d(
  "loadChatTabEntryPoint",
  ["ExecutionEnvironment", "MWV2ChatTabRoot.entrypoint", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (!(e || (e = r("ExecutionEnvironment"))).isInBrowser) return null;
      var n = o("RelayHooks").loadEntryPoint(
        t,
        r("MWV2ChatTabRoot.entrypoint"),
        {},
      );
      return n;
    }
    l.default = s;
  },
  98,
);
