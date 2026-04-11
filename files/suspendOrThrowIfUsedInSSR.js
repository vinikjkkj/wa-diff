__d(
  "suspendOrThrowIfUsedInSSR",
  ["CometSSRClientRender", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (!(e || (e = r("ExecutionEnvironment"))).isInBrowser)
        throw o("CometSSRClientRender").CometSSRClientRender(t);
    }
    l.default = s;
  },
  98,
);
