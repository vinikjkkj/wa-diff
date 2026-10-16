__d(
  "WASmaxInPreKeysEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { hybrid_e2ee: "hybrid_e2ee", non_e2ee: "non_e2ee" },
      u = {
        validators: [
          (e = o("WAJids")).validateDeviceJid,
          e.validateDeviceJid,
          e.validateInteropDeviceJid,
          e.validateInteropDeviceJid,
        ],
        typeName: "DeviceJid|DeviceJid|InteropDeviceJid|InteropDeviceJid",
      },
      c = {
        validators: [e.validateDeviceJid, e.validateDomainJid],
        typeName: "DeviceJid|DomainJid",
      },
      d = {
        validators: [e.validateUserJid, e.validateUserJid],
        typeName: "UserJid|UserJid",
      };
    ((l.ENUM_HYBRIDE2EE_NONE2EE = s),
      (l.DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID = u),
      (l.DEVICEJID_DOMAINJID = c),
      (l.USERJID_USERJID = d));
  },
  98,
);
