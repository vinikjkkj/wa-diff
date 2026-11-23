__d(
  "WASmaxGroupsGetGroupProfilePicturesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorGrowthLockedMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsParentGroupMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxOutGroupsBaseGetServerMixin",
    "WASmaxOutGroupsParentGroupMixin",
    "WASmaxParseJid",
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
        return {
          name: "GetGroupProfilePicturesResponseSuccessGroupPictures",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return {
          name: "GetGroupProfilePicturesResponseClientError",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return {
          name: "GetGroupProfilePicturesResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupProfilePictures", {
          SuccessGroupPictures: a,
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
              errorGetGroupProfilePictureClientErrors: i.value,
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
      if (!r.success) return r;
      var a = _(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, a.value),
          )
        : a;
    }
    function d(e) {
      var t = e.baseGetGroupOrServerMixinGroupArgs,
        n = R(k(o("WASmaxJsx").smax("iq", null), e), t);
      return n;
    }
    function m(e) {
      var t = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorGrowthLockedMixin",
      ).parseIQErrorGrowthLockedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorGrowthLocked",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorItemNotFound",
              "IQErrorForbidden",
              "IQErrorNotAllowed",
              "IQErrorBadRequest",
              "IQErrorRateOverlimit",
              "IQErrorGrowthLocked",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = h(e);
      if (!n.success) return n;
      var r = f(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            parentOrSubGroupMixinGroup: n.value,
            getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup:
              r.value,
          })
        : r;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "pictures");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        t.value,
        "picture",
        1,
        1e3,
        p,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ picturesPicture: n.value })
        : n;
    }
    function f(e) {
      var t = g(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GetGroupProfilePicturesSuccessProfilePictureResponse",
          value: t.value,
        });
      var n = O(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GetGroupProfilePicturesPartialProfilePictureResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SuccessProfilePictureResponse", "PartialProfilePictureResponse"],
            [t, n],
          );
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = y(e);
      if (!n.success) return n;
      var r = C(e);
      if (!r.success) return r;
      var a = b(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          profilePictureUrlOrBlobResponseMixinGroup: a.success ? a.value : null,
        }),
      );
    }
    function h(e) {
      var t = o("WASmaxInGroupsParentGroupMixin").parseParentGroupMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParentGroup",
          value: t.value,
        });
      var n = S(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "SubGroup", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParentGroup", "SubGroup"],
            [t, n],
          );
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_IMAGE_PREVIEW,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function b(e) {
      var t = v(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ProfilePictureUrlResponse",
          value: t.value,
        });
      var n = q(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ProfilePictureBlobResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ProfilePictureUrlResponse", "ProfilePictureBlobResponse"],
            [t, n],
          );
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "url");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "direct_path");
      return r.success
        ? o("WAResultOrError").makeResult({ url: n.value, directPath: r.value })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseJid").attrGroupJid(e, "sub_group_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ subGroupJid: t.value })
        : t;
    }
    function R(e, t) {
      if (t.baseGetGroup)
        return o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          e,
          t.baseGetGroup,
        );
      if (t.isBaseGetServer)
        return o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          e,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function L(e) {
      var t = e.profilePictureIdMixinArgs,
        n = e.profilePictureTypeMixinArgs,
        r = e.profilePictureQueryMixinArgs,
        a = e.parentOrSubGroupMixinGroupArgs,
        i = I(
          o("WASmaxMixins").optionalMerge(
            $,
            o("WASmaxMixins").optionalMerge(
              N,
              o("WASmaxMixins").optionalMerge(
                D,
                o("WASmaxJsx").smax("picture", null),
                t,
              ),
              n,
            ),
            r,
          ),
          a,
        );
      return i;
    }
    function E(e) {
      var t = e.pictureArgs,
        n = e.picturesSize,
        r = e.subGroupHintMixinArgs,
        a = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            w,
            o("WASmaxJsx").smax(
              "pictures",
              { size: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n) },
              o("WASmaxChildren").REPEATED_CHILD(L, t, 1, 1e3),
            ),
            r,
          ),
        );
      return a;
    }
    function k(e, t) {
      var n = E(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function I(e, t) {
      if (t.parentGroup)
        return o("WASmaxOutGroupsParentGroupMixin").mergeParentGroupMixin(
          e,
          t.parentGroup,
        );
      if (t.subGroup) return F(e, t.subGroup);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function T(e) {
      var t = e.pictureId,
        n = o("WASmaxJsx").smax("picture", { id: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t = e.pictureQuery,
        n = o("WASmaxJsx").smax("picture", {
          query: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P(e) {
      var t = e.pictureType,
        n = o("WASmaxJsx").smax("picture", {
          type: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function N(e, t) {
      var n = P(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function M(e) {
      var t = e.anyLinkedGroupsMembershipHint,
        n = o("WASmaxJsx").smax("smax$any", {
          linked_groups_membership_hint: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A(e) {
      var t = e.anySubGroupJid,
        n = o("WASmaxJsx").smax("smax$any", {
          sub_group_jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = B(e);
      return o("WAResultOrError").makeResult({
        pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup:
          n.success ? n.value : null,
      });
    }
    function B(e) {
      var t = H(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PictureDidNotChange",
          value: t.value,
        });
      var n = W(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PictureNotFound",
          value: n.value,
        });
      var r = V(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "BadServerProfilePictureError",
          value: r.value,
        });
      var a = U(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "BadLinkedGroupProfilePictureError",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "PictureDidNotChange",
              "PictureNotFound",
              "BadServerProfilePictureError",
              "BadLinkedGroupProfilePictureError",
            ],
            [t, n, r, a],
          );
    }
    function W(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
        "204",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
        "405",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function V(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
        "500",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function H(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
        "304",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    ((l.sendGetGroupProfilePicturesRPC = e),
      (l.parseGetGroupProfilePicturesResponseClientError = s),
      (l.parseGetGroupProfilePicturesResponseServerError = u),
      (l.parseGetGroupProfilePicturesResponseSuccessGroupPictures = c),
      (l.makeGetGroupProfilePicturesRequest = d));
  },
  98,
);
