__d(
  "WASmaxGroupsSetDescriptionRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorConflictMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return { name: "SetDescriptionResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "SetDescriptionResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "SetDescriptionResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetDescription", {
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
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetDescriptionClientErrors: i.value,
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
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ t: r.value }, a.value),
          )
        : a;
    }
    function m(e) {
      var t = e.bodyElementValue,
        n = o("WASmaxJsx").smax("body", null, t);
      return n;
    }
    function p(e) {
      var t = e.bodyArgs,
        n = e.descriptionId,
        r = e.descriptionPrev,
        a = e.hasDescriptionDeleteTrue,
        i = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "description",
              {
                id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
                prev: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
                delete: o("WASmaxAttrs").OPTIONAL_LITERAL("true", a),
              },
              o("WASmaxChildren").OPTIONAL_CHILD(m, t),
            ),
          ),
          e,
        );
      return i;
    }
    function _(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o("WASmaxInGroupsIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: l.value,
        });
      var s = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
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
              "IQErrorConflict",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorNotAcceptable",
              "IQErrorLocked",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    ((l.sendSetDescriptionRPC = e),
      (l.parseSetDescriptionResponseClientError = u),
      (l.parseSetDescriptionResponseServerError = c),
      (l.parseSetDescriptionResponseSuccess = d),
      (l.makeSetDescriptionRequestDescriptionBody = m),
      (l.makeSetDescriptionRequest = p),
      (l.parseSetDescriptionClientErrors = _));
  },
  98,
);
