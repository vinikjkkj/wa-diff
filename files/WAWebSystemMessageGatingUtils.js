__d(
  "WAWebSystemMessageGatingUtils",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("system_msg_text_styling");
    }
    function s() {
      return r("justknobx")._("8563");
    }
    ((l.systemMessageActionTextStylingEnabled = e),
      (l.systemMessageTerminalPeriodsEnabled = s));
  },
  98,
);
