__d(
  "WASmaxInAppdataDeliverEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = { high: "high", low: "low" },
      s = { msg: "msg", pkmsg: "pkmsg" },
      u = {
        validators: [
          o("WAJids").validateDeviceJid,
          o("WAJids").validateGroupJid,
        ],
        typeName: "DeviceJid|GroupJid",
      };
    ((l.ENUM_HIGH_LOW = e), (l.ENUM_MSG_PKMSG = s), (l.DEVICEJID_GROUPJID = u));
  },
  98,
);
