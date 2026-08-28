__d(
  "AutoLoggingConsts",
  ["ExecutionEnvironment", "MainPageUrl"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "/",
      u = "data-flowlet",
      c =
        (e || (e = r("ExecutionEnvironment"))).isInBrowser &&
        o("MainPageUrl").mainPageUrl.searchParams.get("allog") === "debug",
      d = "_callFlowletID",
      m = "_triggerFlowletID",
      p = "data-auto-logging-component-type",
      _ = "data-auto-logging-dependent-region";
    ((l.SURFACE_SEPARATOR = s),
      (l.AUTO_LOGGING_FLOWLET = u),
      (l.AUTO_LOGGING_DEBUG = c),
      (l.CALL_FLOWLET_ID_PARAM = d),
      (l.TRIGGER_FLOWLET_ID_PARAM = m),
      (l.AUTO_LOGGING_COMPONENT_TYPE = p),
      (l.AUTO_LOGGING_DEPENDENT_REGION = _));
  },
  98,
);
