__d(
  "WAWebWindowsDevicesSettingsHelpers",
  ["fbt", "WAWebSettingsConst"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u() {
      return s._(/*BTDS*/ "Video & voice");
    }
    function c() {
      return s._(/*BTDS*/ "Microphone");
    }
    function d() {
      return s._(/*BTDS*/ "Camera");
    }
    function m() {
      return s._(/*BTDS*/ "Speakers");
    }
    function p() {
      return s._(/*BTDS*/ "Camera, microphone & speakers");
    }
    var _ = {
        step: (e = o("WAWebSettingsConst")).SettingsSteps.WinDevicesSettings,
        id: "device_settings",
        isAvailable: !0,
        searchCriteria: [
          u().toString(),
          p().toString(),
          c().toString(),
          d().toString(),
          m().toString(),
        ]
          .join(" ")
          .toLowerCase(),
        title: u,
        secondaryTitle: p,
        testid: "li-devices-settings",
      },
      f = {
        step: e.SettingsSteps.WinDevicesSettings,
        id: "microphone_setting",
        isAvailable: !0,
        searchCriteria: [c().toString(), u().toString()]
          .join(" ")
          .toLowerCase(),
        title: c,
        testid: "li-microphone-setting",
      },
      g = {
        step: e.SettingsSteps.WinDevicesSettings,
        id: "webcam_setting",
        isAvailable: !0,
        searchCriteria: [d().toString(), u().toString()]
          .join(" ")
          .toLowerCase(),
        title: d,
        testid: "li-webcam-setting",
      },
      h = {
        step: e.SettingsSteps.WinDevicesSettings,
        id: "audio_output_setting",
        isAvailable: !0,
        searchCriteria: [m().toString(), u().toString()]
          .join(" ")
          .toLowerCase(),
        title: m,
        testid: "li-audio-output-setting",
      };
    ((l.getDeviceSettingsTitle = u),
      (l.getMicrophoneSettingsTitle = c),
      (l.getWebcamSettingsTitle = d),
      (l.getAudioOutputSettingsTitle = m),
      (l.getDeviceSettingsSecondaryTitle = p),
      (l.DeviceSettingsParentItem = _),
      (l.MicrophoneSettingsItem = f),
      (l.WebcamSettingsItem = g),
      (l.AudioOutputSettingsItem = h));
  },
  226,
);
