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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = d(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = c(n, t);
      if (r.success)
        return { name: "GetPixBankListResponseSuccess", value: r.value };
      var a = s(n, t);
      if (a.success)
        return { name: "GetPixBankListResponseError", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetPixBankList", {
          Success: r,
          Error: a,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBrPaymentIQErrorGenericResponseMixin",
      ).parseIQErrorGenericResponseMixin(e, t);
      return (r.success, r);
    }
    function u(e) {
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
    function c(e, t) {
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
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "bank",
        0,
        1e3,
        u,
      );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, s.value, { accountBanksBank: c.value }),
          )
        : c;
    }
    function d() {
      var e = p(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:pay" },
          o("WASmaxJsx").smax("account", { action: "get-pix-bank-list" }),
        ),
      );
      return e;
    }
    function m() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function p(e) {
      var t = m();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetPixBankListRPC = e),
      (l.parseGetPixBankListResponseError = s),
      (l.parseGetPixBankListResponseSuccess = c),
      (l.makeGetPixBankListRequest = d));
  },
  98,
);
