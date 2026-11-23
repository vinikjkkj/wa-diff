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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = h(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = p(r, n);
      if (a.success)
        return { name: "GetResponseSuccessPictureURL", value: a.value };
      var i = c(r, n);
      if (i.success)
        return { name: "GetResponseSuccessAvatarURLs", value: i.value };
      var l = m(r, n);
      if (l.success)
        return { name: "GetResponseSuccessPictureBlob", value: l.value };
      var u = d(r, n);
      if (u.success)
        return { name: "GetResponseSuccessNoData", value: u.value };
      var _ = s(r, n);
      if (_.success) return { name: "GetResponseError", value: _.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Get", {
          SuccessPictureURL: a,
          SuccessAvatarURLs: i,
          SuccessPictureBlob: l,
          SuccessNoData: u,
          Error: _,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = _(e, t);
      if (!a.success) return a;
      var i = g(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorProfilePictureGetErrors: i.value,
            }),
          )
        : i;
    }
    function u(e) {
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
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = f(e, t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "avatar", 1, 4, u);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { avatar: a.value }),
          )
        : a;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = f(e, t);
      return (r.success, r);
    }
    function m(e, t) {
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
      var u = f(e, t);
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
      var d = f(e, t);
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
    function _(e, t) {
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
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function g(e) {
      var t = b(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = L(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: n.value,
        });
      var r = R(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = E(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = S(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: i.value,
        });
      var l = v(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: l.value,
        });
      var s = k(e);
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
    function h(e) {
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
        _ = F(
          N(
            o("WASmaxJsx").smax(
              "iq",
              null,
              o("WASmaxMixins").optionalMerge(
                $,
                o("WASmaxMixins").optionalMerge(
                  C,
                  o("WASmaxMixins").optionalMerge(
                    T,
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
    function y(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          B(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
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
    function v(e) {
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
    function S(e) {
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
    function R(e) {
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
    function L(e) {
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
    function E(e) {
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
    function k(e) {
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
    function I(e) {
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
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
      var t = e.avatarPoseId,
        n = o("WASmaxJsx").smax("avatar", {
          pose_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function x(e) {
      var t = e.avatarArgs,
        n = o("WASmaxJsx").smax(
          "picture",
          { type: "avatar" },
          o("WASmaxChildren").REPEATED_CHILD(D, t, 0, 4),
        );
      return n;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P() {
      var e = w(o("WASmaxJsx").smax("iq", { xmlns: "w:profile:picture" }));
      return e;
    }
    function N(e) {
      var t = P();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function M() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function w(e) {
      var t = M();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function A(e) {
      var t = e.iqTarget,
        n = q(o("WASmaxJsx").smax("iq", { target: o("WAWap").JID(t) }));
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W() {
      var e = o("WASmaxJsx").smax("iq", { to: o("WAWap").S_WHATSAPP_NET });
      return e;
    }
    function q(e) {
      var t = W();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetRPC = e),
      (l.parseGetResponseError = s),
      (l.parseGetResponseSuccessAvatarURLs = c),
      (l.parseGetResponseSuccessNoData = d),
      (l.parseGetResponseSuccessPictureBlob = m),
      (l.parseGetResponseSuccessPictureURL = p),
      (l.makeGetRequest = h));
  },
  98,
);
