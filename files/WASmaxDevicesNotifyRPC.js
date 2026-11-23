__d(
  "WASmaxDevicesNotifyRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInDevicesDeviceIqErrors",
    "WASmaxInDevicesIQErrorResponseMixin",
    "WASmaxInDevicesIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutDevicesBaseIQSetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success) return { name: "NotifyResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success) return { name: "NotifyResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Notify", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInDevicesIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInDevicesDeviceIqErrors").parseDeviceIqErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorDeviceIqErrors: i.value }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInDevicesIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    function c(e) {
      var t = e.userJid,
        n = o("WASmaxJsx").smax("user", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function d(e) {
      var t = e.userArgs,
        n = o(
          "WASmaxOutDevicesBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "fbid:devices" },
            o("WASmaxJsx").smax(
              "users",
              null,
              o("WASmaxChildren").REPEATED_CHILD(c, t, 1, 25),
            ),
          ),
        );
      return n;
    }
    ((l.sendNotifyRPC = e),
      (l.parseNotifyResponseError = s),
      (l.parseNotifyResponseSuccess = u),
      (l.makeNotifyRequest = d));
  },
  98,
);
