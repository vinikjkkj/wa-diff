__d(
  "WASmaxInBrPaymentCardCapabilitiesBaseMixin",
  ["WAResultOrError", "WASmaxInBrPaymentEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "capabilities");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "editable",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "verifiable",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "default-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "default-eligible-p2p",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "default-eligible-p2m",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2p-send",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2p-receive",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-send",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-receive",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      return m.success
        ? o("WAResultOrError").makeResult({
            capabilitiesEditable: r.value,
            capabilitiesVerifiable: a.value,
            capabilitiesDefaultEligible: i.value,
            capabilitiesDefaultEligibleP2p: l.value,
            capabilitiesDefaultEligibleP2m: s.value,
            capabilitiesP2pSend: u.value,
            capabilitiesP2pReceive: c.value,
            capabilitiesP2mSend: d.value,
            capabilitiesP2mReceive: m.value,
          })
        : m;
    }
    l.parseCardCapabilitiesBaseMixin = e;
  },
  98,
);
