__d(
  "WAWebHsmGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_buttons_response_prop_removal_killswitch",
      );
    }
    l.shouldUseLegacyButtonsResponse = e;
  },
  98,
);
