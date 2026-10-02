__d(
  "WASmaxInMessageDeliverBRMessageDeliverSendNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBasePayNodeMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "credential-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "device-id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "nonce",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums").ENUM_P2M_P2P,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(e, "trusted-device-info");
      if (!s.success) return s;
      var u = o("WASmaxInMessageDeliverBasePayNodeMixin").parseBasePayNodeMixin(
        e,
      );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                credentialId: n.value,
                deviceId: r.value,
                id: a.value,
                nonce: i.value,
                transactionType: l.value,
                trustedDeviceInfo: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseBRMessageDeliverSendNodeMixin = e;
  },
  98,
);
