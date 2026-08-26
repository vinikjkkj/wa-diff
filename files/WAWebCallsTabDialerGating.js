__d(
  "WAWebCallsTabDialerGating",
  ["WAWebABProps", "useWAWebABPropConfigValue"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("dialer_pad_for_new_chats");
    }
    function s() {
      return o("useWAWebABPropConfigValue").useABPropConfigValue(
        "dialer_pad_for_new_chats",
      );
    }
    ((l.callsTabDialerEnabled = e), (l.useCallsTabDialerEnabled = s));
  },
  98,
);
