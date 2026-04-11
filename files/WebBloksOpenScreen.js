__d(
  "WebBloksOpenScreen",
  ["WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: t } },
      ),
        e.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromAppId(e.objectSet, t, n),
        ));
    }
    l.default = e;
  },
  98,
);
