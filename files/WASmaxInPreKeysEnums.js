__d(
  "WASmaxInPreKeysEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        validators: [
          (e = o("WAJids")).validateDeviceJid,
          e.validateDeviceJid,
          e.validateInteropDeviceJid,
          e.validateInteropDeviceJid,
        ],
        typeName: "DeviceJid|DeviceJid|InteropDeviceJid|InteropDeviceJid",
      },
      u = {
        validators: [e.validateDeviceJid, e.validateDomainJid],
        typeName: "DeviceJid|DomainJid",
      },
      c = {
        validators: [e.validateUserJid, e.validateUserJid],
        typeName: "UserJid|UserJid",
      };
    ((l.DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID = s),
      (l.DEVICEJID_DOMAINJID = u),
      (l.USERJID_USERJID = c));
  },
  98,
);
