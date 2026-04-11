__d(
  "WebBloksOpenScreenByRoute",
  ["WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: n } },
      ),
        e.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromAppId(
            e.objectSet,
            n,
            void 0,
            { ownerContext: e },
            t,
          ),
        ));
    }
    l.default = e;
  },
  98,
);
