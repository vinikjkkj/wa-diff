__d(
  "WASmaxGroupsSetSubjectRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = m(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return { name: "SetSubjectResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "SetSubjectResponseClientError", value: i.value };
          var l = c(r, n);
          if (l.success)
            return { name: "SetSubjectResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetSubject", {
              Success: a,
              ClientError: i,
              ServerError: l,
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
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = p(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetSubjectClientErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    function m(e) {
      var t = f(
        o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax("iq", null),
          e,
        ),
        e,
      );
      return t;
    }
    function p(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: i.value,
        });
      var l = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorNotAcceptable",
              "IQErrorLocked",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    function _(e) {
      var t = e.subjectElementValue,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("subject", null, t),
        );
      return n;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSetSubjectRPC = e),
      (l.parseSetSubjectResponseClientError = u),
      (l.parseSetSubjectResponseServerError = c),
      (l.parseSetSubjectResponseSuccess = d),
      (l.makeSetSubjectRequest = m),
      (l.parseSetSubjectClientErrors = p),
      (l.mergeSetSubjectChangeSubjectMixin = f));
  },
  98,
);
