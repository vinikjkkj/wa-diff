__d(
  "WASmaxPsaChatBlockGetRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInPsaChatBlockError",
    "WASmaxInPsaEnums",
    "WASmaxInPsaIQErrorResponseMixin",
    "WASmaxInPsaIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = c(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = u(n, t);
      if (r.success)
        return { name: "ChatBlockGetResponseSuccess", value: r.value };
      var a = s(n, t);
      if (a.success)
        return { name: "ChatBlockGetResponseServerError", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockGet", {
          Success: r,
          ServerError: a,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInPsaIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o("WASmaxInPsaChatBlockError").parseChatBlockError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorChatBlockError: i.value }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "blocking");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "status",
        o("WASmaxInPsaEnums").ENUM_BLOCKED_UNBLOCKED,
      );
      if (!a.success) return a;
      var i = o("WASmaxInPsaIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ blockingStatus: a.value }, i.value),
          )
        : i;
    }
    function c() {
      var e = m(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:comms:chat" },
          o("WASmaxJsx").smax(
            "query",
            null,
            o("WASmaxJsx").smax("blocking_status", null),
          ),
        ),
      );
      return e;
    }
    function d() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function m(e) {
      var t = d();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendChatBlockGetRPC = e),
      (l.parseChatBlockGetResponseServerError = s),
      (l.parseChatBlockGetResponseSuccess = u),
      (l.makeChatBlockGetRequest = c));
  },
  98,
);
