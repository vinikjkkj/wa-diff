__d(
  "WASmaxGroupsDeleteParentGroupRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "DeleteParentGroupResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "DeleteParentGroupResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "DeleteParentGroupResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("DeleteParentGroup", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorDeleteParentGroupClientError: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    function d(e) {
      var t = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
        o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("delete_parent", null),
        ),
        e,
      );
      return t;
    }
    function m(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorItemNotFound",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a],
          );
    }
    ((l.sendDeleteParentGroupRPC = e),
      (l.parseDeleteParentGroupResponseClientError = s),
      (l.parseDeleteParentGroupResponseServerError = u),
      (l.parseDeleteParentGroupResponseSuccess = c),
      (l.makeDeleteParentGroupRequest = d));
  },
  98,
);
