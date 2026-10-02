__d(
  "WASmaxInMessageDeliverUPIMessageDeliverSendPayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverUPILiteDetailsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "upi_lite_details");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverUPILiteDetailsMixin",
      ).parseUPILiteDetailsMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "pay");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "upi_lite_details",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "credential-id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "device-id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "expiry-ts",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "mpin",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "nonce",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver-vpa",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver-vpa-id",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver-name",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "payee-name",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "request-id",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender-vpa",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender-vpa-id",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender-name",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "seq-no",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "token",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "device_ssid",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums").ENUM_P2M_P2P,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "upi-bank-info",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "split_id",
      );
      return R.success
        ? o("WAResultOrError").makeResult({
            credentialId: a.value,
            deviceId: i.value,
            expiryTs: l.value,
            mpin: s.value,
            nonce: u.value,
            receiverVpa: c.value,
            receiverVpaId: d.value,
            receiverName: m.value,
            payeeName: p.value,
            requestId: _.value,
            senderVpa: f.value,
            senderVpaId: g.value,
            senderName: h.value,
            seqNo: y.value,
            token: C.value,
            deviceSsid: b.value,
            transactionType: v.value,
            upiBankInfo: S.value,
            splitId: R.value,
            upiLiteDetails: r.value,
          })
        : R;
    }
    ((l.parseUPIMessageDeliverSendPayNodeUpiLiteDetails = e),
      (l.parseUPIMessageDeliverSendPayNodeMixin = s));
  },
  98,
);
