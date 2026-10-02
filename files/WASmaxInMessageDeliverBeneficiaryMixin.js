__d(
  "WASmaxInMessageDeliverBeneficiaryMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "beneficiary");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "address_line1");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "address_line2",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "city",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "state",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "phone_number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrString(e, "country");
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrString(e, "postal_code");
      return c.success
        ? o("WAResultOrError").makeResult({
            name: n.value,
            addressLine1: r.value,
            addressLine2: a.value,
            city: i.value,
            state: l.value,
            phoneNumber: s.value,
            country: u.value,
            postalCode: c.value,
          })
        : c;
    }
    l.parseBeneficiaryMixin = e;
  },
  98,
);
