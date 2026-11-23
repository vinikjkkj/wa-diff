__d(
  "WASmaxOutMessagePublishUPIPublishSendPayNodeMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishUPILiteDetailsMixin",
    "WASmaxOutMessagePublishUPIPublishSendPayNodeP2POrMMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.upiLiteDetailsArgs,
        n = e.upiToken,
        r = o("WASmaxJsx").smax(
          "upi",
          { token: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n) },
          o("WASmaxChildren").OPTIONAL_CHILD(s, t),
        );
      return r;
    }
    function s(e) {
      var t = o(
        "WASmaxOutMessagePublishUPILiteDetailsMixin",
      ).mergeUPILiteDetailsMixin(
        o("WASmaxJsx").smax("upi_lite_details", null),
        e,
      );
      return t;
    }
    function u(t) {
      var n,
        r,
        a = t.upiArgs,
        i = t.payCredentialId,
        l = t.payDeviceId,
        s = t.payId,
        u = t.payMpin,
        c = t.payReceiverVpa,
        d = t.payReceiverVpaId,
        m = t.payReceiverName,
        p = t.payPayeeName,
        _ = t.paySenderVpa,
        f = t.paySenderVpaId,
        g = t.paySenderName,
        h = t.paySeqNo,
        y = t.payUpiBankInfo,
        C = t.payMode,
        b = t.payUpiIntent,
        v = t.payPurposeCode,
        S = t.payMcc,
        R = t.payRefId,
        L = t.payDeviceSsid,
        E = t.payClVersion,
        k = t.payNote,
        I = t.payTransactionReferral,
        T = t.uPIPublishSendPayNodeP2POrMMixinGroupArgs,
        D = o(
          "WASmaxOutMessagePublishUPIPublishSendPayNodeP2POrMMixinGroup",
        ).mergeUPIPublishSendPayNodeP2POrMMixinGroup(
          o("WASmaxJsx").smax(
            "pay",
            {
              "credential-id": (n = o("WAWap")).CUSTOM_STRING(i),
              "device-id": n.CUSTOM_STRING(l),
              id: (r = o("WASmaxAttrs")).OPTIONAL(n.CUSTOM_STRING, s),
              mpin: r.OPTIONAL(n.CUSTOM_STRING, u),
              "receiver-vpa": n.CUSTOM_STRING(c),
              "receiver-vpa-id": r.OPTIONAL(n.CUSTOM_STRING, d),
              "receiver-name": r.OPTIONAL(n.CUSTOM_STRING, m),
              "payee-name": r.OPTIONAL(n.CUSTOM_STRING, p),
              "sender-vpa": n.CUSTOM_STRING(_),
              "sender-vpa-id": r.OPTIONAL(n.CUSTOM_STRING, f),
              "sender-name": r.OPTIONAL(n.CUSTOM_STRING, g),
              "seq-no": n.CUSTOM_STRING(h),
              "upi-bank-info": n.CUSTOM_STRING(y),
              mode: r.OPTIONAL(n.CUSTOM_STRING, C),
              upi_intent: r.OPTIONAL(n.CUSTOM_STRING, b),
              "purpose-code": r.OPTIONAL(n.CUSTOM_STRING, v),
              mcc: r.OPTIONAL(n.CUSTOM_STRING, S),
              "ref-id": r.OPTIONAL(n.CUSTOM_STRING, R),
              device_ssid: r.OPTIONAL(n.CUSTOM_STRING, L),
              cl_version: r.OPTIONAL(n.CUSTOM_STRING, E),
              note: r.OPTIONAL(n.CUSTOM_STRING, k),
              transaction_referral: r.OPTIONAL(n.CUSTOM_STRING, I),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(e, a),
          ),
          T,
        );
      return D;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeUPIPublishSendPayNodeUpi = e),
      (l.makeUPIPublishSendPayNodeUpiUpiLiteDetails = s),
      (l.mergeUPIPublishSendPayNodeMixin = c));
  },
  98,
);
