__d(
  "WASmaxPrivacyGetOrgsListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInPrivacyCategoryNamesForOrgsListMixin",
    "WASmaxInPrivacyGetPrivacyListError",
    "WASmaxInPrivacyIQErrorResponseMixin",
    "WASmaxInPrivacyIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutPrivacyCategoryNamesForOrgsListMixin",
    "WASmaxOutPrivacyGetIQMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "GetOrgsListResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "GetOrgsListResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetOrgsList", {
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
      var i = o("WASmaxInPrivacyGetPrivacyListError").parseGetPrivacyListError(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetPrivacyListError: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "org");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "org_id");
      return n.success
        ? o("WAResultOrError").makeResult({ orgId: n.value })
        : n;
    }
    function c(e, t) {
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
      if (!s.success) return s;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "org",
        0,
        100,
        u,
      );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                privacyOrgsListDhash: i.value,
                privacyOrgsListCategoryNamesForOrgsListMixin: l.value,
              },
              s.value,
              { privacyOrgsListOrg: c.value },
            ),
          )
        : c;
    }
    function d(e) {
      var t = e.orgsListDhash,
        n = e.categoryNamesForOrgsListMixinArgs,
        r = o("WASmaxOutPrivacyGetIQMixin").mergeGetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "privacy",
              null,
              o(
                "WASmaxOutPrivacyCategoryNamesForOrgsListMixin",
              ).mergeCategoryNamesForOrgsListMixin(
                o("WASmaxJsx").smax("orgs_list", {
                  dhash: o("WAWap").CUSTOM_STRING(t),
                }),
                n,
              ),
            ),
          ),
        );
      return r;
    }
    ((l.sendGetOrgsListRPC = e),
      (l.parseGetOrgsListResponseError = s),
      (l.parseGetOrgsListResponseSuccess = c),
      (l.makeGetOrgsListRequest = d));
  },
  98,
);
