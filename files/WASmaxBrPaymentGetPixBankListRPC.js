__d(
  "WASmaxBrPaymentGetPixBankListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentIQErrorGenericResponseMixin",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = m(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = d(n, t);
          if (r.success)
            return { name: "GetPixBankListResponseSuccess", value: r.value };
          var a = u(n, t);
          if (a.success)
            return { name: "GetPixBankListResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetPixBankList", {
              Success: r,
              Error: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBrPaymentIQErrorGenericResponseMixin",
      ).parseIQErrorGenericResponseMixin(e, t);
      return (r.success, r);
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "bank_name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "image_url");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "bank_ref_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "psp_routing");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrInt(e, "ttl");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is_available",
        o("WASmaxInBrPaymentEnums").ENUM_FALSE_TRUE,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_popular",
        o("WASmaxInBrPaymentEnums").ENUM_FALSE_TRUE,
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            bankName: n.value,
            imageUrl: r.value,
            bankRefId: a.value,
            pspRouting: i.value,
            ttl: l.value,
            isAvailable: s.value,
            isPopular: u.value,
          })
        : u;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "account");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "banks");
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, [
        "account",
        "action",
      ]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "action",
        i.value,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInBrPaymentIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "bank",
        0,
        1e3,
        c,
      );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, s.value, { accountBanksBank: u.value }),
          )
        : u;
    }
    function m() {
      var e = _(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:pay" },
          o("WASmaxJsx").smax("account", { action: "get-pix-bank-list" }),
        ),
      );
      return e;
    }
    function p() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function _(e) {
      var t = p();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetPixBankListRPC = e),
      (l.parseGetPixBankListResponseError = u),
      (l.parseGetPixBankListResponseSuccess = d),
      (l.makeGetPixBankListRequest = m));
  },
  98,
);
