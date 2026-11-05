__d(
  "WAWebDisappearingModeChatOpenRefresh",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "paa_support_for_disabled_epehemerality",
        ) === !0
      );
    }
    l.shouldRefreshDisappearingModeOnChatOpen = e;
  },
  98,
);
