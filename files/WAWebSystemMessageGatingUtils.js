__d(
  "WAWebSystemMessageGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "system_msg_text_styling",
      );
    }
    function s() {
      return !!o("WAWebABProps").getABPropConfigValue("system_msg_truncation");
    }
    ((l.systemMessageActionTextStylingEnabled = e),
      (l.systemMessageTextTruncationEnabled = s));
  },
  98,
);
