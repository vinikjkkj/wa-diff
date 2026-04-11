__d(
  "WAWebLowEndDeviceExperimentGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_low_resource_device",
      );
    }
    l.shouldDisableSoftwareAudioProcessing = e;
  },
  98,
);
