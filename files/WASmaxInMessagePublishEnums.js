__d(
  "WASmaxInMessagePublishEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { CBP: "CBP", NBP: "NBP", PMP: "PMP" },
      u = { delivery: "delivery", no_optimization: "no_optimization" },
      c = { false: "false", true: "true" },
      d = {
        free_customer_service: "free_customer_service",
        free_entry_point: "free_entry_point",
        regular: "regular",
      },
      m = { lid: "lid", pn: "pn" },
      p = {
        validators: [
          (e = o("WAJids")).validateDeviceJid,
          e.validateDeviceJid,
          e.validateUserJid,
          e.validateUserJid,
        ],
        typeName: "DeviceJid|DeviceJid|UserJid|UserJid",
      },
      _ = {
        validators: [e.validateUserJid, e.validateUserJid],
        typeName: "UserJid|UserJid",
      };
    ((l.ENUM_CBP_NBP_PMP = s),
      (l.ENUM_DELIVERY_NOOPTIMIZATION = u),
      (l.ENUM_FALSE_TRUE = c),
      (l.ENUM_FREECUSTOMERSERVICE_FREEENTRYPOINT_REGULAR = d),
      (l.ENUM_LID_PN = m),
      (l.DEVICEJID_DEVICEJID_USERJID_USERJID = p),
      (l.USERJID_USERJID = _));
  },
  98,
);
