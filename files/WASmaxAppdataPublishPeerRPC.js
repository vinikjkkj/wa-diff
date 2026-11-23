__d(
  "WASmaxAppdataPublishPeerRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success) return { name: "PeerResponseNegative", value: a.value };
      var i = u(r, n);
      if (i.success) return { name: "PeerResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Peer", {
          Negative: a,
          Success: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "error");
      if (!r.success) return r;
      var a = d(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ error: r.value }, a.value),
          )
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = d(e, t);
      if (!r.success) return r;
      var a = m(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, r.value, {
          deviceListStaleMixin: a.success ? a.value : null,
        }),
      );
    }
    function c(e) {
      var t = e.appdataId,
        n = e.appdataPushPriority,
        r = e.peerMsgTypesArgs,
        a = C(
          _(
            o("WASmaxJsx").smax("appdata", {
              id: o("WAWap").STANZA_ID(t),
              category: "peer",
              push_priority: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                n,
              ),
            }),
            e,
          ),
          r,
        );
      return a;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "appdata",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      return u.success
        ? o("WAResultOrError").makeResult({ class: i.value, t: u.value })
        : u;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "phash");
      return n.success
        ? o("WAResultOrError").makeResult({ phash: n.value })
        : n;
    }
    function p(e) {
      var t,
        n = e.deviceIdentityMixinArgs,
        r = e.withDeviceListCheckMixinArgs,
        a = e.internalTestMixinArgs,
        i = e.traceContextMixinArgs,
        l = (t = o("WASmaxMixins")).optionalMerge(
          T,
          t.optionalMerge(
            y,
            t.optionalMerge(
              x,
              t.optionalMerge(g, o("WASmaxJsx").smax("appdata", null), n),
              r,
            ),
            a,
          ),
          i,
        );
      return l;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e) {
      var t = e.deviceIdentityElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("device-identity", null, t),
        );
      return n;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e) {
      var t = e.testConfig,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("test", {
            config: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
        );
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C(e, t) {
      if (t.peerPeerFanout) return S(e, t.peerPeerFanout);
      if (t.peerPeerSingle) return L(e, t.peerPeerSingle);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function b(e) {
      var t = e.toJid,
        n = e.encVersionFutureproofMixinArgs,
        r = e.encTypeIndividualMixinArgs,
        a = o("WASmaxJsx").smax(
          "to",
          { jid: o("WAWap").DEVICE_JID(t) },
          M(A(o("WASmaxJsx").smax("enc", null), n), r),
        );
      return a;
    }
    function v(e) {
      var t = e.toArgs,
        n = e.appdataTo,
        r = o("WASmaxJsx").smax(
          "appdata",
          { to: o("WAWap").USER_JID(n) },
          o("WASmaxJsx").smax(
            "participants",
            null,
            o("WASmaxChildren").REPEATED_CHILD(b, t, 1, 24),
          ),
        );
      return r;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e) {
      var t = e.appdataTo,
        n = e.retryMixinArgs,
        r = e.encVersionFutureproofMixinArgs,
        a = e.encTypeIndividualMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          k,
          o("WASmaxJsx").smax(
            "appdata",
            { to: o("WAWap").DEVICE_JID(t) },
            M(A(o("WASmaxJsx").smax("enc", null), r), a),
          ),
          n,
        );
      return i;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E(e) {
      var t = e.appdataT,
        n = e.encRetryMixinArgs,
        r = o("WASmaxJsx").smax(
          "appdata",
          { t: o("WAWap").INT(t) },
          P(o("WASmaxJsx").smax("enc", null), n),
        );
      return r;
    }
    function k(e, t) {
      var n = E(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function I(e) {
      var t = e.requestOrTraceIDMixinGroupArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          F(o("WASmaxJsx").smax("trace", null), t),
        );
      return n;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
      var t = e.appdataDeviceListCheck,
        n = o("WASmaxJsx").smax("appdata", {
          device_list_check: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e) {
      var t = e.encCount,
        n = o("WASmaxJsx").smax("enc", { count: o("WAWap").INT(t) });
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t = e.encType,
        n = e.encStateOrSessionTypeMixinGroupArgs,
        r = e.encMediaTypeOrListMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          H,
          o("WASmaxMixins").optionalMerge(
            j,
            z(
              o("WASmaxJsx").smax("enc", { type: o("WAWap").CUSTOM_STRING(t) }),
              e,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.encV,
        n = o("WASmaxJsx").smax("enc", { v: o("WAWap").INT(t) });
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e, t) {
      if (t.requestID) return Q(e, t.requestID);
      if (t.traceID) return V(e, t.traceID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function O(e) {
      var t = e.edgeIdElementValue,
        n = o("WASmaxJsx").smax("edge_id", null, t);
      return n;
    }
    function B(e) {
      var t = e.deviceArgs,
        n = e.correlationIdType,
        r = e.idElementValue,
        a = o("WASmaxJsx").smax(
          "correlation_id",
          { type: o("WAWap").CUSTOM_STRING(n) },
          o("WASmaxJsx").smax("id", null, r),
          o("WASmaxChildren").OPTIONAL_CHILD(q, t),
        );
      return a;
    }
    function W(e) {
      var t = e.observabilityFlagsId,
        n = o("WASmaxJsx").smax("observability_flags", {
          id: o("WAWap").INT(t),
        });
      return n;
    }
    function q(e) {
      var t = e.deviceId,
        n = o("WASmaxJsx").smax("device", { id: o("WAWap").INT(t) });
      return n;
    }
    function U(e) {
      var t = e.edgeIdArgs,
        n = e.correlationIdArgs,
        r = e.observabilityFlagsArgs,
        a = e.traceIdElementValue,
        i = o("WASmaxJsx").smax(
          "trace",
          null,
          [
            o("WASmaxJsx").smax("trace_id", null, a),
            o("WASmaxChildren").OPTIONAL_CHILD(O, t),
          ].concat(o("WASmaxChildren").REPEATED_CHILD(B, n, 0, 10), [
            o("WASmaxChildren").OPTIONAL_CHILD(W, r),
          ]),
        );
      return i;
    }
    function V(e, t) {
      var n = U(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function H(e, t) {
      if (t.encMediaType) return Z(e, t.encMediaType);
      if (t.isEncList) return Y(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function G(e) {
      var t = e.encElementValue,
        n = o("WASmaxJsx").smax("enc", null, t);
      return n;
    }
    function z(e, t) {
      var n = G(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function j(e, t) {
      if (t.encState) return re(e, t.encState);
      if (t.isEncSessionType) return te(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function K(e) {
      var t = e.requestIdElementValue,
        n = o("WASmaxJsx").smax(
          "trace",
          null,
          o("WASmaxJsx").smax("request_id", null, t),
        );
      return n;
    }
    function Q(e, t) {
      var n = K(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function X() {
      var e = o("WASmaxJsx").smax("enc", { mediatype: "list" });
      return e;
    }
    function Y(e) {
      var t = X();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function J(e) {
      var t = e.encNativeFlowName,
        n = e.hasAvatarStickerType,
        r = o("WASmaxMixins").optionalMerge(
          le,
          ae(
            o("WASmaxJsx").smax("enc", {
              native_flow_name: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                t,
              ),
            }),
            e,
          ),
          n,
        );
      return r;
    }
    function Z(e, t) {
      var n = J(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ee() {
      var e = o("WASmaxJsx").smax("enc", { session_type: "pq" });
      return e;
    }
    function te(e) {
      var t = ee();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ne(e) {
      var t = e.encState,
        n = o("WASmaxJsx").smax("enc", { state: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function re(e, t) {
      var n = ne(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function oe(e) {
      var t = e.encMediatype,
        n = o("WASmaxJsx").smax("enc", {
          mediatype: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function ae(e, t) {
      var n = oe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ie() {
      var e = o("WASmaxJsx").smax("enc", { sticker_type: "avatar" });
      return e;
    }
    function le(e) {
      var t = ie();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendPeerRPC = e),
      (l.parsePeerResponseNegative = s),
      (l.parsePeerResponseSuccess = u),
      (l.makePeerRequest = c));
  },
  98,
);
