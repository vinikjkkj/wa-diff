__d(
  "WAWebReceiptAck",
  ["WAWap", "WAWebCommsWapMd"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").JID(e),
        id: o("WAWap").CUSTOM_STRING(t),
        class: "receipt",
        type: o("WAWap").MAYBE_CUSTOM_STRING(n),
        participant:
          r && r !== e
            ? o("WAWebCommsWapMd").DEVICE_JID(r)
            : o("WAWap").DROP_ATTR,
      });
    }
    l.buildReceiptAck = e;
  },
  98,
);
