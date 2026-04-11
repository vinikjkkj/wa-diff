__d(
  "MqttUserNameUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null
        ? e
        : typeof document == "object" &&
            document != null &&
            "hasFocus" in document &&
            document.hasFocus();
    }
    function l() {
      return navigator.userAgent;
    }
    ((i.getMqttForegroundStatus = e), (i.getUserAgent = l));
  },
  66,
);
