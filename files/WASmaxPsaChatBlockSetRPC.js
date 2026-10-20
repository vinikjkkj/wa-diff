__d(
  "WASmaxPsaChatBlockSetRPC",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return { name: "ChatBlockSetResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "ChatBlockSetResponseServerError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockSet", {
              Success: a,
              ServerError: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
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
    function c(e, t) {
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
    function d(e) {
      var t = e.blockingAction,
        n = p(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:comms:chat" },
            o("WASmaxJsx").smax("blocking", {
              action: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    function m() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function p(e) {
      var t = m();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendChatBlockSetRPC = e),
      (l.parseChatBlockSetResponseServerError = u),
      (l.parseChatBlockSetResponseSuccess = c),
      (l.makeChatBlockSetRequest = d),
      (l.mergeBaseIQSetRequestMixin = p));
  },
  98,
);
