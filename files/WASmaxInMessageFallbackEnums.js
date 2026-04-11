__d(
  "WASmaxInMessageFallbackEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        validators: [
          (e = o("WAJids")).validateBroadcastJid,
          e.validateCallJid,
          e.validateDeviceJid,
          e.validateDomainJid,
          e.validateGroupJid,
          e.validateStatusJid,
          e.validateUserJid,
        ],
        typeName:
          "BroadcastJid|CallJid|DeviceJid|DomainJid|GroupJid|StatusJid|UserJid",
      };
    l.BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID = s;
  },
  98,
);
