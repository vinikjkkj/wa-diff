__d(
  "WASmaxPrivacySetOrgsListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInPrivacyCategoryNamesForOrgsListMixin",
    "WASmaxInPrivacyIQErrorBadRequestMixin",
    "WASmaxInPrivacyIQErrorFeatureNotImplementedMixin",
    "WASmaxInPrivacyIQErrorInternalServerErrorMixin",
    "WASmaxInPrivacyIQErrorRateOverlimitMixin",
    "WASmaxInPrivacyIQErrorResponseMixin",
    "WASmaxInPrivacyIQErrorServiceUnavailableMixin",
    "WASmaxInPrivacyIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPrivacyCategoryNamesForOrgsListMixin",
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
      if (a.success)
        return { name: "SetOrgsListResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "SetOrgsListResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetOrgsList", {
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
        "WASmaxInPrivacyIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetOrgsListError: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "orgs_list");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(a.value, "dhash");
      if (!i.success) return i;
      var l = o(
        "WASmaxInPrivacyCategoryNamesForOrgsListMixin",
      ).parseCategoryNamesForOrgsListMixin(a.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInPrivacyIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                privacyOrgsListDhash: i.value,
                privacyOrgsListCategoryNamesForOrgsListMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    function c(e) {
      var t = e.orgAction,
        n = e.orgOrgId,
        r = o("WASmaxJsx").smax("org", {
          action: o("WAWap").CUSTOM_STRING(t),
          org_id: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function d(e) {
      var t = e.orgArgs,
        n = e.orgsListDhash,
        r = e.categoryNamesForOrgsListMixinArgs,
        a = _(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "privacy",
              null,
              o(
                "WASmaxOutPrivacyCategoryNamesForOrgsListMixin",
              ).mergeCategoryNamesForOrgsListMixin(
                o("WASmaxJsx").smax(
                  "orgs_list",
                  { dhash: o("WAWap").CUSTOM_STRING(n) },
                  o("WASmaxChildren").REPEATED_CHILD(c, t, 1, 200),
                ),
                r,
              ),
            ),
          ),
        );
      return a;
    }
    function m(e) {
      var t = o(
        "WASmaxInPrivacyIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = h(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: n.value,
        });
      var r = f(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: r.value,
        });
      var a = o(
        "WASmaxInPrivacyIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: a.value,
        });
      var i = o(
        "WASmaxInPrivacyIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: i.value,
        });
      var l = o(
        "WASmaxInPrivacyIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: l.value,
        });
      var s = o(
        "WASmaxInPrivacyIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAcceptable",
              "IQErrorConflict",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
              "IQErrorRateOverlimit",
              "IQErrorInternalServerError",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function p() {
      var e = C(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "privacy",
        }),
      );
      return e;
    }
    function _(e) {
      var t = p();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "conflict",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        409,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "field");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "reason");
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, reason: r.value })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "field", g);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-acceptable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        406,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            code: a.value,
            field: n.value,
          })
        : a;
    }
    function y() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function C(e) {
      var t = y();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendSetOrgsListRPC = e),
      (l.parseSetOrgsListResponseError = s),
      (l.parseSetOrgsListResponseSuccess = u),
      (l.makeSetOrgsListRequest = d));
  },
  98,
);
