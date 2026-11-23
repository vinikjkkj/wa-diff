__d(
  "WASmaxDevicesFetchRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInDevicesDeviceIqErrors",
    "WASmaxInDevicesDeviceListMixin",
    "WASmaxInDevicesICDCFromServerMixin",
    "WASmaxInDevicesIQErrorInternalServerErrorMixin",
    "WASmaxInDevicesIQErrorItemNotFoundMixin",
    "WASmaxInDevicesIQErrorResponseMixin",
    "WASmaxInDevicesIQErrorServiceUnavailableMixin",
    "WASmaxInDevicesIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutDevicesBaseIQGetRequestMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = _(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success) return { name: "FetchResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success) return { name: "FetchResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Fetch", {
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
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = d(e);
      return (n.success, n);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "users");
      if (!r.success) return r;
      var a = o(
        "WASmaxInDevicesIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "user",
        0,
        25,
        u,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { usersUser: i.value }),
          )
        : i;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = m(e);
      return n.success
        ? o("WAResultOrError").makeResult({ userResponses: n.value })
        : n;
    }
    function m(e) {
      var t = h(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FetchUserResponseFailure",
          value: t.value,
        });
      var n = b(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "FetchUserResponseSuccess",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["UserResponseFailure", "UserResponseSuccess"],
            [t, n],
          );
    }
    function p(e) {
      var t = e.userJid,
        n = e.dhashMixinArgs,
        r = e.iCDCSeqMixinArgs,
        a = o("WASmaxMixins").optionalMerge(
          g,
          o("WASmaxMixins").optionalMerge(
            R,
            o("WASmaxJsx").smax("user", { jid: o("WAWap").USER_JID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    function _(e) {
      var t = e.userArgs,
        n = o(
          "WASmaxOutDevicesBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "fbid:devices" },
            o("WASmaxJsx").smax(
              "users",
              null,
              o("WASmaxChildren").REPEATED_CHILD(p, t, 1, 25),
            ),
          ),
        );
      return n;
    }
    function f(e) {
      var t = e.anySeq,
        n = o("WASmaxJsx").smax("smax$any", { seq: o("WAWap").INT(t) });
      return n;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!r.success) return r;
      var a = v(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            jid: r.value,
            errorUserErrors: a.value,
          })
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "devices");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesDeviceListMixin").parseDeviceListMixin(e);
      return (n.success, n);
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "icdc");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesICDCFromServerMixin").parseICDCFromServerMixin(
        e,
      );
      return (n.success, n);
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "devices", y);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "icdc", C);
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(e, "jid");
      return a.success
        ? o("WAResultOrError").makeResult({
            jid: a.value,
            devices: n.value,
            icdc: r.value,
          })
        : a;
    }
    function v(e) {
      var t = E(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FetchRetryableUserError",
          value: t.value,
        });
      var n = L(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "FetchNonRetryableUserError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RetryableUserError", "NonRetryableUserError"],
            [t, n],
          );
    }
    function S(e) {
      var t = e.anyDhash,
        n = o("WASmaxJsx").smax("smax$any", {
          dhash: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o(
        "WASmaxInDevicesIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      return (n.success, n);
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = k(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            iQErrorInternalServerErrorOrServiceUnavailableMixinGroup: n.value,
          })
        : n;
    }
    function k(e) {
      var t = o(
        "WASmaxInDevicesIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInDevicesIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorInternalServerError", "IQErrorServiceUnavailable"],
            [t, n],
          );
    }
    ((l.sendFetchRPC = e),
      (l.parseFetchResponseError = s),
      (l.parseFetchResponseSuccess = c),
      (l.makeFetchRequest = _));
  },
  98,
);
