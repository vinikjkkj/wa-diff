__d(
  "WASmaxProfilePictureGetRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInProfilePictureEnums",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseReference",
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
          var n = y(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = _(r, n);
          if (a.success)
            return { name: "GetResponseSuccessPictureURL", value: a.value };
          var i = d(r, n);
          if (i.success)
            return { name: "GetResponseSuccessAvatarURLs", value: i.value };
          var l = p(r, n);
          if (l.success)
            return { name: "GetResponseSuccessPictureBlob", value: l.value };
          var s = m(r, n);
          if (s.success)
            return { name: "GetResponseSuccessNoData", value: s.value };
          var c = u(r, n);
          if (c.success) return { name: "GetResponseError", value: c.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Get", {
              SuccessPictureURL: a,
              SuccessAvatarURLs: i,
              SuccessPictureBlob: l,
              SuccessNoData: s,
              Error: c,
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
      var a = f(e, t);
      if (!a.success) return a;
      var i = h(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorProfilePictureGetErrors: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "avatar");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "url");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "pose_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "hash",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            url: n.value,
            poseId: r.value,
            hash: a.value,
          })
        : a;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = g(e, t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "avatar", 1, 4, c);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { avatar: a.value }),
          )
        : a;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = g(e, t);
      return (r.success, r);
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "type",
        o("WASmaxInProfilePictureEnums").ENUM_IMAGE_PREVIEW,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "has_staging",
        o("WASmaxInProfilePictureEnums").ENUM_FALSE_TRUE,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 1, void 0);
      if (!s.success) return s;
      var u = g(e, t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                pictureId: a.value,
                pictureType: i.value,
                pictureHasStaging: l.value,
                pictureElementValue: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    function _(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "type",
        o("WASmaxInProfilePictureEnums").ENUM_COVER_IMAGE_PREVIEW,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "url");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(r.value, "direct_path");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "hash",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "has_staging",
        o("WASmaxInProfilePictureEnums").ENUM_FALSE_TRUE,
      );
      if (!c.success) return c;
      var d = g(e, t);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                pictureId: a.value,
                pictureType: i.value,
                pictureUrl: l.value,
                pictureDirectPath: s.value,
                pictureHash: u.value,
                pictureHasStaging: c.value,
              },
              d.value,
            ),
          )
        : d;
    }
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function h(e) {
      var t = v(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = E(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: n.value,
        });
      var r = L(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = k(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = R(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: i.value,
        });
      var l = S(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: l.value,
        });
      var s = I(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorItemNotFound",
              "IQErrorRateOverlimit",
              "IQErrorInternalServerError",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function y(e) {
      var t,
        n,
        r = e.pictureType,
        a = e.pictureId,
        i = e.pictureQuery,
        l = e.pictureInvite,
        s = e.picturePersonaId,
        u = e.pictureCommonGid,
        c = e.pictureSize,
        d = e.addRequestMixinArgs,
        m = e.tCTokenMixinArgs,
        p = e.avatarMixinArgs,
        _ = O(
          M(
            o("WASmaxJsx").smax(
              "iq",
              null,
              o("WASmaxMixins").optionalMerge(
                P,
                o("WASmaxMixins").optionalMerge(
                  b,
                  o("WASmaxMixins").optionalMerge(
                    D,
                    o("WASmaxJsx").smax("picture", {
                      type: (t = o("WASmaxAttrs")).OPTIONAL(
                        (n = o("WAWap")).CUSTOM_STRING,
                        r,
                      ),
                      id: t.OPTIONAL(n.CUSTOM_STRING, a),
                      query: t.OPTIONAL(n.CUSTOM_STRING, i),
                      invite: t.OPTIONAL(n.CUSTOM_STRING, l),
                      persona_id: t.OPTIONAL(n.CUSTOM_STRING, s),
                      common_gid: t.OPTIONAL(n.GROUP_JID, u),
                      size: t.OPTIONAL(n.INT, c),
                    }),
                    d,
                  ),
                  m,
                ),
                p,
              ),
            ),
          ),
          e,
        );
      return _;
    }
    function C(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          W(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        400,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "feature-not-implemented",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        501,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "internal-server-error",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        500,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "item-not-found",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        404,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-authorized",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        401,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "rate-overlimit",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        429,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "service-unavailable",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        503,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function T(e) {
      var t = e.addRequestCode,
        n = e.addRequestAdmin,
        r = e.addRequestExpiration,
        a = o("WASmaxJsx").smax(
          "picture",
          null,
          o("WASmaxJsx").smax("add_request", {
            code: o("WAWap").CUSTOM_STRING(t),
            admin: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, n),
            expiration: o("WAWap").INT(r),
          }),
        );
      return a;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t = e.avatarPoseId,
        n = o("WASmaxJsx").smax("avatar", {
          pose_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function $(e) {
      var t = e.avatarArgs,
        n = o("WASmaxJsx").smax(
          "picture",
          { type: "avatar" },
          o("WASmaxChildren").REPEATED_CHILD(x, t, 0, 4),
        );
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N() {
      var e = A(o("WASmaxJsx").smax("iq", { xmlns: "w:profile:picture" }));
      return e;
    }
    function M(e) {
      var t = N();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function w() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function A(e) {
      var t = w();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function F(e) {
      var t = e.iqTarget,
        n = U(o("WASmaxJsx").smax("iq", { target: o("WAWap").JID(t) }));
      return n;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q() {
      var e = o("WASmaxJsx").smax("iq", { to: o("WAWap").S_WHATSAPP_NET });
      return e;
    }
    function U(e) {
      var t = q();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetRPC = e),
      (l.parseGetResponseError = u),
      (l.parseGetResponseSuccessAvatarURLsAvatar = c),
      (l.parseGetResponseSuccessAvatarURLs = d),
      (l.parseGetResponseSuccessNoData = m),
      (l.parseGetResponseSuccessPictureBlob = p),
      (l.parseGetResponseSuccessPictureURL = _),
      (l.parseIQErrorResponseMixin = f),
      (l.parseIQResultResponseMixin = g),
      (l.parseProfilePictureGetErrors = h),
      (l.makeGetRequest = y),
      (l.mergeTCTokenMixin = b),
      (l.parseIQErrorBadRequestMixin = v),
      (l.parseIQErrorFeatureNotImplementedMixin = S),
      (l.parseIQErrorInternalServerErrorMixin = R),
      (l.parseIQErrorItemNotFoundMixin = L),
      (l.parseIQErrorNotAuthorizedMixin = E),
      (l.parseIQErrorRateOverlimitMixin = k),
      (l.parseIQErrorServiceUnavailableMixin = I),
      (l.mergeAddRequestMixin = D),
      (l.makeAvatarAvatar = x),
      (l.mergeAvatarMixin = P),
      (l.mergeBaseGetIQMixin = M),
      (l.mergeBaseIQGetRequestMixin = A),
      (l.mergeGetIQMixin = O),
      (l.mergePrivacyTokenContentsMixin = W),
      (l.mergeServerDomainIQMixin = U));
  },
  98,
);
