__d(
  "WASmaxInVoipEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { 0: "0", 1: "1" },
      u = { audio: "audio", video: "video" },
      c = { link_edit: "link_edit", preview: "preview" },
      d = {
        validators: [(e = o("WAJids")).validateCallJid, e.validateDomainJid],
        typeName: "CallJid|DomainJid",
      },
      m = {
        validators: [e.validateDeviceJid, e.validateUserJid],
        typeName: "DeviceJid|UserJid",
      };
    ((l.ENUM_0_1 = s),
      (l.ENUM_AUDIO_VIDEO = u),
      (l.ENUM_LINKEDIT_PREVIEW = c),
      (l.CALLJID_DOMAINJID = d),
      (l.DEVICEJID_USERJID = m));
  },
  98,
);
