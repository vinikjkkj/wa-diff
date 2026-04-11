__d(
  "WASmaxInVoipEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { 0: "0", 1: "1" },
      u = { audio: "audio", video: "video" },
      c = { link_edit: "link_edit", preview: "preview" },
      d = {
        validators: [
          (e = o("WAJids")).validateCallJid,
          e.validateDeviceJid,
          e.validateDomainJid,
          e.validateUserJid,
        ],
        typeName: "CallJid|DeviceJid|DomainJid|UserJid",
      },
      m = {
        validators: [e.validateCallJid, e.validateDomainJid],
        typeName: "CallJid|DomainJid",
      },
      p = {
        validators: [e.validateDeviceJid, e.validateUserJid],
        typeName: "DeviceJid|UserJid",
      };
    ((l.ENUM_0_1 = s),
      (l.ENUM_AUDIO_VIDEO = u),
      (l.ENUM_LINKEDIT_PREVIEW = c),
      (l.CALLJID_DEVICEJID_DOMAINJID_USERJID = d),
      (l.CALLJID_DOMAINJID = m),
      (l.DEVICEJID_USERJID = p));
  },
  98,
);
