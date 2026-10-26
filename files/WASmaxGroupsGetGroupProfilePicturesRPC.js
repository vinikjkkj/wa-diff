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
            return {
              name: "GetGroupProfilePicturesResponseSuccessGroupPictures",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetGroupProfilePicturesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetGroupProfilePicturesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetGroupProfilePictures",
              { SuccessGroupPictures: a, ClientError: i, ServerError: l },
            ),
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
              errorGetGroupProfilePictureClientErrors: i.value,
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
      if (!r.success) return r;
      var a = f(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, a.value),
          )
        : a;
    }
    function m(e) {
      var t = e.baseGetGroupOrServerMixinGroupArgs,
        n = L(I(o("WASmaxJsx").smax("iq", null), e), t);
      return n;
    }
    function p(e) {
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
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorItemNotFound",
              "IQErrorForbidden",
              "IQErrorNotAllowed",
              "IQErrorBadRequest",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l],
          );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = y(e);
      if (!n.success) return n;
      var r = g(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            parentOrSubGroupMixinGroup: n.value,
            getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup:
              r.value,
          })
        : r;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "pictures");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        t.value,
        "picture",
        1,
        1e3,
        _,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ picturesPicture: n.value })
        : n;
    }
    function g(e) {
      var t = h(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GetGroupProfilePicturesSuccessProfilePictureResponse",
          value: t.value,
        });
      var n = B(e);
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
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = C(e);
      if (!n.success) return n;
      var r = b(e);
      if (!r.success) return r;
      var a = v(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          profilePictureUrlOrBlobResponseMixinGroup: a.success ? a.value : null,
        }),
      );
    }
    function y(e) {
      var t = o("WASmaxInGroupsParentGroupMixin").parseParentGroupMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParentGroup",
          value: t.value,
        });
      var n = R(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "SubGroup", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParentGroup", "SubGroup"],
            [t, n],
          );
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_IMAGE_PREVIEW,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function v(e) {
      var t = S(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ProfilePictureUrlResponse",
          value: t.value,
        });
      var n = U(e);
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
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "url");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "direct_path");
      return r.success
        ? o("WAResultOrError").makeResult({ url: n.value, directPath: r.value })
        : r;
    }
    function R(e) {
      var t = o("WASmaxParseJid").attrGroupJid(e, "sub_group_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ subGroupJid: t.value })
        : t;
    }
    function L(e, t) {
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
    function E(e) {
      var t = e.profilePictureIdMixinArgs,
        n = e.profilePictureTypeMixinArgs,
        r = e.profilePictureQueryMixinArgs,
        a = e.parentOrSubGroupMixinGroupArgs,
        i = T(
          o("WASmaxMixins").optionalMerge(
            P,
            o("WASmaxMixins").optionalMerge(
              M,
              o("WASmaxMixins").optionalMerge(
                x,
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
    function k(e) {
      var t = e.pictureArgs,
        n = e.picturesSize,
        r = e.subGroupHintMixinArgs,
        a = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            A,
            o("WASmaxJsx").smax(
              "pictures",
              { size: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n) },
              o("WASmaxChildren").REPEATED_CHILD(E, t, 1, 1e3),
            ),
            r,
          ),
        );
      return a;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e, t) {
      if (t.parentGroup)
        return o("WASmaxOutGroupsParentGroupMixin").mergeParentGroupMixin(
          e,
          t.parentGroup,
        );
      if (t.subGroup) return O(e, t.subGroup);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function D(e) {
      var t = e.pictureId,
        n = o("WASmaxJsx").smax("picture", { id: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e) {
      var t = e.pictureQuery,
        n = o("WASmaxJsx").smax("picture", {
          query: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t = e.pictureType,
        n = o("WASmaxJsx").smax("picture", {
          type: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.anyLinkedGroupsMembershipHint,
        n = o("WASmaxJsx").smax("smax$any", {
          linked_groups_membership_hint: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
      var t = e.anySubGroupJid,
        n = o("WASmaxJsx").smax("smax$any", {
          sub_group_jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = W(e);
      return o("WAResultOrError").makeResult({
        pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup:
          n.success ? n.value : null,
      });
    }
    function W(e) {
      var t = G(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PictureDidNotChange",
          value: t.value,
        });
      var n = q(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PictureNotFound",
          value: n.value,
        });
      var r = H(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "BadServerProfilePictureError",
          value: r.value,
        });
      var a = V(e);
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
    function q(e) {
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
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function V(e) {
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
    function H(e) {
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
    function G(e) {
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
      (l.parseGetGroupProfilePicturesResponseClientError = u),
      (l.parseGetGroupProfilePicturesResponseServerError = c),
      (l.parseGetGroupProfilePicturesResponseSuccessGroupPictures = d),
      (l.makeGetGroupProfilePicturesRequest = m),
      (l.parseGetGroupProfilePictureClientErrors = p),
      (l.parseGetGroupProfilePicturesProfilePicturesResponsePicturesPicture =
        _),
      (l.parseGetGroupProfilePicturesProfilePicturesResponseMixin = f),
      (l.parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup =
        g),
      (l.parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin = h),
      (l.parseParentOrSubGroupMixinGroup = y),
      (l.parseProfilePictureIdMixin = C),
      (l.parseProfilePictureTypeMixin = b),
      (l.parseProfilePictureUrlOrBlobResponseMixinGroup = v),
      (l.parseProfilePictureUrlResponseMixin = S),
      (l.parseSubGroupMixin = R),
      (l.mergeBaseGetGroupOrServerMixinGroup = L),
      (l.makeGetGroupProfilePicturesProfilePicturesRequestPicturesPicture = E),
      (l.mergeGetGroupProfilePicturesProfilePicturesRequestMixin = I),
      (l.mergeParentOrSubGroupMixinGroup = T),
      (l.mergeProfilePictureIdMixin = x),
      (l.mergeProfilePictureQueryMixin = P),
      (l.mergeProfilePictureTypeMixin = M),
      (l.mergeSubGroupHintMixin = A),
      (l.mergeSubGroupMixin = O),
      (l.parseGetGroupProfilePicturesPartialProfilePictureResponseMixin = B),
      (l.parsePictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup =
        W),
      (l.parsePictureNotFoundMixin = q),
      (l.parseProfilePictureBlobResponseMixin = U),
      (l.parseBadLinkedGroupProfilePictureErrorMixin = V),
      (l.parseBadServerProfilePictureErrorMixin = H),
      (l.parsePictureDidNotChangeMixin = G));
  },
  98,
);
