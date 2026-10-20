__d(
  "WASmaxStatusPublishPostBroadcastStatusRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInStatusPublishStatusAckMixin",
    "WASmaxInStatusPublishStatusNegativeAckMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
    "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
    "WASmaxOutStatusPublishStatusContentTypeTextMixin",
    "WASmaxOutStatusPublishStatusRevokeMixin",
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
            a = u(r, n);
          if (a.success)
            return {
              name: "PostBroadcastStatusResponseNegative",
              value: a.value,
            };
          var i = c(r, n);
          if (i.success)
            return {
              name: "PostBroadcastStatusResponseSuccess",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PostBroadcastStatus", {
              Negative: a,
              Success: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "participant",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusPublishStatusNegativeAckMixin",
      ).parseStatusNegativeAckMixin(e, t);
      if (!a.success) return a;
      var i = U(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, {
          deviceListStaleMixin: i.success ? i.value : null,
        }),
      );
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "participant",
      );
      if (!r.success) return r;
      var a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = U(e),
        l = V(e),
        s = d(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, {
          deviceListStaleMixin: i.success ? i.value : null,
          fanoutCountMixin: l.success ? l.value : null,
          statusAckRcatMixin: s.success ? s.value : null,
        }),
      );
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ rcatElementValue: r.value })
        : r;
    }
    function m(e) {
      var t,
        n = e.statusId,
        r = e.statusT,
        a = e.deviceIdentityMixinArgs,
        i = e.statusEncSettingMixinArgs,
        l = e.statusEncHashMetaAttributeMixinArgs,
        s = e.statusContentTypeMediaFanoutMixinArgs,
        u = e.statusEncMentionedUsersMixinArgs,
        c = e.hasStatusEncMentionMessage,
        d = e.hasStatusEncSessionScope,
        m = e.statusEncContentTypeMixinArgs,
        _ = e.statusSenderContentBindingMixinArgs,
        f = e.anonPaddingMixinArgs,
        g = e.statusEncMessageAssociationTypeMixinArgs,
        h = e.hasStatusSgCapture,
        y = e.statusBroadcastPublishTypeMixinsArgs,
        b = e.statusEncContentTypeMixinsArgs,
        R = S(
          p(
            (t = o("WASmaxMixins")).optionalMerge(
              q,
              t.optionalMerge(
                $,
                t.optionalMerge(
                  G,
                  t.optionalMerge(
                    B,
                    t.optionalMerge(
                      v,
                      t.optionalMerge(
                        N,
                        t.optionalMerge(
                          k,
                          t.optionalMerge(
                            D,
                            t.optionalMerge(
                              C,
                              t.optionalMerge(
                                L,
                                t.optionalMerge(
                                  w,
                                  t.optionalMerge(
                                    j,
                                    o("WASmaxJsx").smax("status", {
                                      id: o("WAWap").STANZA_ID(n),
                                      to: o("WAWap").STATUS_BROADCAST,
                                      t: o("WASmaxAttrs").OPTIONAL(
                                        o("WAWap").INT,
                                        r,
                                      ),
                                    }),
                                    a,
                                  ),
                                  i,
                                ),
                                l,
                              ),
                              s,
                            ),
                            u,
                          ),
                          c,
                        ),
                        d,
                      ),
                      m,
                    ),
                    _,
                  ),
                  f,
                ),
                g,
              ),
              h,
            ),
            y,
          ),
          b,
        );
      return R;
    }
    function p(e, t) {
      if (t.statusBroadcastRegular) return g(e, t.statusBroadcastRegular);
      if (t.statusBroadcastDirected) return ee(e, t.statusBroadcastDirected);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function _(e) {
      var t = e.encMediaTypeMixinArgs,
        n = e.hasStatusEncHideDecryptFail,
        r = e.encRetryMixinArgs,
        a = e.encVersionArgs,
        i =
          e.encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroupArgs,
        l = K(
          tt(
            o("WASmaxMixins").optionalMerge(
              Pe,
              o("WASmaxMixins").optionalMerge(
                ut,
                o("WASmaxMixins").optionalMerge(
                  ht,
                  o("WASmaxJsx").smax("enc", null),
                  t,
                ),
                n,
              ),
              r,
            ),
            a,
          ),
          i,
        );
      return l;
    }
    function f(e) {
      var t,
        n = e.encArgs,
        r = e.statusParticipantHashMixinArgs,
        a = e.statusEncFanoutMixinArgs,
        i = e.statusReportingMixinArgs,
        l = e.statusSenderKeyBucketingModeMixinArgs,
        s = e.statusEditOrRevokeMixinGroupArgs,
        u = (t = o("WASmaxMixins")).optionalMerge(
          ae,
          t.optionalMerge(
            _e,
            t.optionalMerge(
              me,
              t.optionalMerge(
                qe,
                t.optionalMerge(
                  F,
                  o("WASmaxJsx").smax(
                    "status",
                    null,
                    o("WASmaxChildren").REPEATED_CHILD(_, n, 1, 5),
                  ),
                  r,
                ),
                a,
              ),
              i,
            ),
            l,
          ),
          s,
        );
      return u;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e) {
      var t = e.encMediatype,
        n = e.hasEncStickerTypeAvatar,
        r = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("enc", {
            mediatype: o("WAWap").CUSTOM_STRING(t),
            sticker_type: o("WASmaxAttrs").OPTIONAL_LITERAL("avatar", n),
          }),
        );
      return r;
    }
    function y(e) {
      var t = e.toArgs,
        n = o(
          "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
        ).mergeStatusContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax(
              "participants",
              null,
              o("WASmaxChildren").HOMOGENEOUS_CHILD(h, t),
            ),
          ),
        );
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
      var t = e.metaContentType,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            content_type: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S(e, t) {
      if (t.isStatusContentTypeText)
        return o(
          "WASmaxOutStatusPublishStatusContentTypeTextMixin",
        ).mergeStatusContentTypeTextMixin(e);
      if (t.isStatusContentTypeMedia)
        return o(
          "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
        ).mergeStatusContentTypeMediaMixin(e);
      if (t.isStatusContentTypeReaction)
        return o(
          "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
        ).mergeStatusContentTypeReactionMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function R(e) {
      var t = e.metaStatusH,
        n = e.metaStatusOts,
        r = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            status_h: o("WAWap").CUSTOM_STRING(t),
            status_ots: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
          }),
        );
      return r;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { is_status_mention: "true" }),
      );
      return e;
    }
    function k(e) {
      var t = E();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function I(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").JID(t) });
      return n;
    }
    function T(e) {
      var t = e.toArgs,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax(
            "meta",
            null,
            o("WASmaxJsx").smax(
              "mentioned_users",
              null,
              o("WASmaxChildren").REPEATED_CHILD(I, t, 1, 5),
            ),
          ),
        );
      return n;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t = e.metaMessageAssociationType,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            message_association_type: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { session_scope: "status" }),
      );
      return e;
    }
    function N(e) {
      var t = P();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function M(e) {
      var t = e.metaStatusSetting,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            status_setting: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A(e) {
      var t = e.statusPhash,
        n = o("WASmaxJsx").smax("status", {
          phash: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
      var t = e.senderContentBindingElementValue,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("sender_content_binding", null, t),
        );
      return n;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { sg_capture: "1" }),
      );
      return e;
    }
    function q(e) {
      var t = W();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "phash");
      return n.success
        ? o("WAResultOrError").makeResult({ phash: n.value })
        : n;
    }
    function V(e) {
      var t = o("WASmaxParseUtils").attrInt(e, "count");
      return t.success
        ? o("WAResultOrError").makeResult({ count: t.value })
        : t;
    }
    function H(e) {
      var t = e.taPadElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("ta_pad", null, t),
        );
      return n;
    }
    function G(e, t) {
      var n = H(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function z(e) {
      var t = e.deviceIdentityElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("device-identity", null, t),
        );
      return n;
    }
    function j(e, t) {
      var n = z(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function K(e, t) {
      if (t.encTypeSenderKey) return J(e, t.encTypeSenderKey);
      if (t.encTypeOneTimeSenderKey) return X(e, t.encTypeOneTimeSenderKey);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function Q(e) {
      var t = e.encElementValue,
        n = e.encSenderKeyBucketMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          be,
          o("WASmaxJsx").smax("enc", { type: "otsk" }, t),
          n,
        );
      return r;
    }
    function X(e, t) {
      var n = Q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Y(e) {
      var t = e.encSenderKeyBucketMixinArgs,
        n = mt(
          o("WASmaxMixins").optionalMerge(
            be,
            o("WASmaxJsx").smax("enc", { type: "skmsg" }),
            t,
          ),
          e,
        );
      return n;
    }
    function J(e, t) {
      var n = Y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Z(e) {
      var t,
        n = e.statusReportingMixinArgs,
        r = e.statusDeprecatedParticipantHashMixinArgs,
        a = e.statusSenderKeyBucketingModeMixinArgs,
        i = e.statusDirectedRetryParticipantMixinArgs,
        l = e.hasStatusNoExtraFanout,
        s = e.tCTokenMixinArgs,
        u = e.statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs,
        c = e.statusEditOrRevokeMixinGroupArgs,
        d = (t = o("WASmaxMixins")).optionalMerge(
          ae,
          ie(
            t.optionalMerge(
              ge,
              t.optionalMerge(
                ce,
                t.optionalMerge(
                  oe,
                  t.optionalMerge(
                    _e,
                    t.optionalMerge(
                      ne,
                      t.optionalMerge(
                        me,
                        o("WASmaxJsx").smax("status", null),
                        n,
                      ),
                      r,
                    ),
                    a,
                  ),
                  i,
                ),
                l,
              ),
              s,
            ),
            u,
          ),
          c,
        );
      return d;
    }
    function ee(e, t) {
      var n = Z(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function te(e) {
      var t = e.statusPhash,
        n = o("WASmaxJsx").smax("status", {
          phash: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function ne(e, t) {
      var n = te(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function re(e) {
      var t = e.statusParticipant,
        n = o("WASmaxJsx").smax("status", { participant: o("WAWap").JID(t) });
      return n;
    }
    function oe(e, t) {
      var n = re(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ae(e, t) {
      if (t.isStatusEdit) return Te(e);
      if (t.isStatusRevoke)
        return o(
          "WASmaxOutStatusPublishStatusRevokeMixin",
        ).mergeStatusRevokeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ie(e, t) {
      if (t.statusEncFanoutSenderKeyEmpty)
        return xe(e, t.statusEncFanoutSenderKeyEmpty);
      if (t.statusEncRetry) return se(e, t.statusEncRetry);
      if (t.statusEncFanout) return qe(e, t.statusEncFanout);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function le(e) {
      var t = e.encTypeIndividualMixinArgs,
        n = e.hasStatusEncHideDecryptFail,
        r = e.encRetryMixinArgs,
        a = e.encVersionArgs,
        i = o("WASmaxJsx").smax(
          "status",
          null,
          tt(
            o("WASmaxMixins").optionalMerge(
              Pe,
              o("WASmaxMixins").optionalMerge(
                ut,
                et(o("WASmaxJsx").smax("enc", null), t),
                n,
              ),
              r,
            ),
            a,
          ),
        );
      return i;
    }
    function se(e, t) {
      var n = le(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ue() {
      var e = o("WASmaxJsx").smax("status", { device_fanout: "false" });
      return e;
    }
    function ce(e) {
      var t = ue();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function de(e) {
      var t = e.serverReportingTokenMixinArgs,
        n = e.clientReportingTokenMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          ye,
          o("WASmaxMixins").optionalMerge(
            ke,
            o("WASmaxJsx").smax("status", null),
            t,
          ),
          n,
        );
      return r;
    }
    function me(e, t) {
      var n = de(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function pe(e) {
      var t = e.statusBucketing,
        n = o("WASmaxJsx").smax("status", {
          bucketing: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function _e(e, t) {
      var n = pe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function fe(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          Se(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function ge(e, t) {
      var n = fe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function he(e) {
      var t = e.reportingTokenElementMixinArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            Le,
            o("WASmaxJsx").smax("reporting", null),
            t,
          ),
        );
      return n;
    }
    function ye(e, t) {
      var n = he(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ce(e) {
      var t = e.encBucket,
        n = o("WASmaxJsx").smax("enc", { bucket: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function be(e, t) {
      var n = Ce(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ve(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function Se(e, t) {
      var n = ve(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Re(e) {
      var t = e.reportingTokenV,
        n = e.reportingTokenElementValue,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "reporting_token",
            { v: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t) },
            n,
          ),
        );
      return r;
    }
    function Le(e, t) {
      var n = Re(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ee(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        Oe(o("WASmaxJsx").smax("reporting", null), e),
      );
      return t;
    }
    function ke(e, t) {
      var n = Ee(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ie() {
      var e = o("WASmaxJsx").smax("status", { edit: "1" });
      return e;
    }
    function Te(e) {
      var t = Ie();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function De(e) {
      var t = e.encTypeSenderKeyEmptyMixinArgs,
        n = e.encMediaTypeMixinArgs,
        r = e.hasStatusEncHideDecryptFail,
        a = e.encRetryMixinArgs,
        i = e.encVersionArgs,
        l = qe(
          o("WASmaxJsx").smax(
            "status",
            null,
            tt(
              o("WASmaxMixins").optionalMerge(
                Pe,
                o("WASmaxMixins").optionalMerge(
                  ut,
                  o("WASmaxMixins").optionalMerge(
                    ht,
                    Me(o("WASmaxJsx").smax("enc", null), t),
                    n,
                  ),
                  r,
                ),
                a,
              ),
              i,
            ),
          ),
          e,
        );
      return l;
    }
    function xe(e, t) {
      var n = De(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $e(e) {
      var t = e.encCount,
        n = o("WASmaxJsx").smax("enc", { count: o("WAWap").INT(t) });
      return n;
    }
    function Pe(e, t) {
      var n = $e(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ne(e) {
      var t = e.encElementValue,
        n = Ae(o("WASmaxJsx").smax("enc", null, t));
      return n;
    }
    function Me(e, t) {
      var n = Ne(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function we() {
      var e = o("WASmaxJsx").smax("enc", { type: "skmsg" });
      return e;
    }
    function Ae(e) {
      var t = we();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Fe(e) {
      var t = e.reportingTagElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("reporting_tag", null, t),
        );
      return n;
    }
    function Oe(e, t) {
      var n = Fe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Be(e) {
      var t = e.statusToContentBindingMixinArgs,
        n = e.statusTCTokenMixinArgs,
        r = e.senderKeyBucketParticipantMixinArgs,
        a = e.statusToDeviceOrUserMixinGroupArgs,
        i = ze(
          o("WASmaxMixins").optionalMerge(
            Xe,
            o("WASmaxMixins").optionalMerge(
              Ve,
              o("WASmaxMixins").optionalMerge(
                Ge,
                o("WASmaxJsx").smax("to", null),
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
    function We(e) {
      var t = e.toArgs,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax(
            "participants",
            null,
            o("WASmaxChildren").REPEATED_CHILD(Be, t, 1, 9990998),
          ),
        );
      return n;
    }
    function qe(e, t) {
      var n = We(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ue(e) {
      var t = e.tctokenElementValue,
        n = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("tctoken", null, t),
        );
      return n;
    }
    function Ve(e, t) {
      var n = Ue(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function He(e) {
      var t = e.contentBindingElementValue,
        n = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("content_binding", null, t),
        );
      return n;
    }
    function Ge(e, t) {
      var n = He(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ze(e, t) {
      if (t.statusToDevice) return Je(e, t.statusToDevice);
      if (t.statusToUser) return Ke(e, t.statusToUser);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function je(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").JID(t) });
      return n;
    }
    function Ke(e, t) {
      var n = je(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Qe(e) {
      var t = e.toBucket,
        n = o("WASmaxJsx").smax("to", { bucket: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function Xe(e, t) {
      var n = Qe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ye(e) {
      var t = e.toJid,
        n = e.encTypeIndividualMixinArgs,
        r = e.hasStatusEncHideDecryptFail,
        a = e.encVersionArgs,
        i = o("WASmaxJsx").smax(
          "to",
          { jid: o("WAWap").JID(t) },
          tt(
            o("WASmaxMixins").optionalMerge(
              ut,
              et(o("WASmaxJsx").smax("enc", null), n),
              r,
            ),
            a,
          ),
        );
      return i;
    }
    function Je(e, t) {
      var n = Ye(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ze(e) {
      var t = e.encType,
        n = e.encStateOrSessionTypeMixinGroupArgs,
        r = e.encMediaTypeOrListMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          ct,
          o("WASmaxMixins").optionalMerge(
            pt,
            mt(
              o("WASmaxJsx").smax("enc", { type: o("WAWap").CUSTOM_STRING(t) }),
              e,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function et(e, t) {
      var n = Ze(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function tt(e, t) {
      if (t.isEncVersion2) return rt(e);
      if (t.isEncVersion3) return at(e);
      if (t.encVersionFutureproof) return lt(e, t.encVersionFutureproof);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function nt() {
      var e = o("WASmaxJsx").smax("enc", { v: "2" });
      return e;
    }
    function rt(e) {
      var t = nt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ot() {
      var e = o("WASmaxJsx").smax("enc", { v: "3" });
      return e;
    }
    function at(e) {
      var t = ot();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function it(e) {
      var t = e.encV,
        n = o("WASmaxJsx").smax("enc", { v: o("WAWap").INT(t) });
      return n;
    }
    function lt(e, t) {
      var n = it(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function st() {
      var e = o("WASmaxJsx").smax("enc", { "decrypt-fail": "hide" });
      return e;
    }
    function ut(e) {
      var t = st();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ct(e, t) {
      if (t.encMediaType) return ht(e, t.encMediaType);
      if (t.isEncList) return ft(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function dt(e) {
      var t = e.encElementValue,
        n = o("WASmaxJsx").smax("enc", null, t);
      return n;
    }
    function mt(e, t) {
      var n = dt(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function pt(e, t) {
      if (t.encState) return vt(e, t.encState);
      if (t.isEncSessionType) return Ct(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function _t() {
      var e = o("WASmaxJsx").smax("enc", { mediatype: "list" });
      return e;
    }
    function ft(e) {
      var t = _t();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function gt(e) {
      var t = e.encNativeFlowName,
        n = e.hasAvatarStickerType,
        r = o("WASmaxMixins").optionalMerge(
          Et,
          Rt(
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
    function ht(e, t) {
      var n = gt(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function yt() {
      var e = o("WASmaxJsx").smax("enc", { session_type: "pq" });
      return e;
    }
    function Ct(e) {
      var t = yt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function bt(e) {
      var t = e.encState,
        n = o("WASmaxJsx").smax("enc", { state: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function vt(e, t) {
      var n = bt(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function St(e) {
      var t = e.encMediatype,
        n = o("WASmaxJsx").smax("enc", {
          mediatype: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function Rt(e, t) {
      var n = St(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Lt() {
      var e = o("WASmaxJsx").smax("enc", { sticker_type: "avatar" });
      return e;
    }
    function Et(e) {
      var t = Lt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendPostBroadcastStatusRPC = e),
      (l.parsePostBroadcastStatusResponseNegative = u),
      (l.parsePostBroadcastStatusResponseSuccess = c),
      (l.parseStatusAckRcatMixin = d),
      (l.makePostBroadcastStatusRequest = m),
      (l.mergeStatusBroadcastPublishTypeMixins = p),
      (l.makeStatusBroadcastRegularEnc = _),
      (l.mergeStatusBroadcastRegularMixin = g),
      (l.makeStatusContentTypeMediaFanoutParticipantsTo = h),
      (l.mergeStatusContentTypeMediaFanoutMixin = C),
      (l.mergeStatusEncContentTypeMixin = v),
      (l.mergeStatusEncContentTypeMixins = S),
      (l.mergeStatusEncHashMetaAttributeMixin = L),
      (l.mergeStatusEncMentionMessageMixin = k),
      (l.makeStatusEncMentionedUsersMetaMentionedUsersTo = I),
      (l.mergeStatusEncMentionedUsersMixin = D),
      (l.mergeStatusEncMessageAssociationTypeMixin = $),
      (l.mergeStatusEncSessionScopeMixin = N),
      (l.mergeStatusEncSettingMixin = w),
      (l.mergeStatusParticipantHashMixin = F),
      (l.mergeStatusSenderContentBindingMixin = B),
      (l.mergeStatusSgCaptureMixin = q),
      (l.parseDeviceListStaleMixin = U),
      (l.parseFanoutCountMixin = V),
      (l.mergeAnonPaddingMixin = G),
      (l.mergeDeviceIdentityMixin = j),
      (l.mergeEncTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroup =
        K),
      (l.mergeEncTypeOneTimeSenderKeyMixin = X),
      (l.mergeEncTypeSenderKeyMixin = J),
      (l.mergeStatusBroadcastDirectedMixin = ee),
      (l.mergeStatusDeprecatedParticipantHashMixin = ne),
      (l.mergeStatusDirectedRetryParticipantMixin = oe),
      (l.mergeStatusEditOrRevokeMixinGroup = ae),
      (l.mergeStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup = ie),
      (l.mergeStatusEncRetryMixin = se),
      (l.mergeStatusNoExtraFanoutMixin = ce),
      (l.mergeStatusReportingMixin = me),
      (l.mergeStatusSenderKeyBucketingModeMixin = _e),
      (l.mergeTCTokenMixin = ge),
      (l.mergeClientReportingTokenMixin = ye),
      (l.mergeEncSenderKeyBucketMixin = be),
      (l.mergePrivacyTokenContentsMixin = Se),
      (l.mergeReportingTokenElementMixin = Le),
      (l.mergeServerReportingTokenMixin = ke),
      (l.mergeStatusEditMixin = Te),
      (l.mergeStatusEncFanoutSenderKeyEmptyMixin = xe),
      (l.mergeEncRetryMixin = Pe),
      (l.mergeEncTypeSenderKeyEmptyMixin = Me),
      (l.mergeEncTypeSkmsgMixin = Ae),
      (l.mergeReportingTagElementMixin = Oe),
      (l.makeStatusEncFanoutParticipantsTo = Be),
      (l.mergeStatusEncFanoutMixin = qe),
      (l.mergeStatusTCTokenMixin = Ve),
      (l.mergeStatusToContentBindingMixin = Ge),
      (l.mergeStatusToDeviceOrUserMixinGroup = ze),
      (l.mergeStatusToUserMixin = Ke),
      (l.mergeSenderKeyBucketParticipantMixin = Xe),
      (l.mergeStatusToDeviceMixin = Je),
      (l.mergeEncTypeIndividualMixin = et),
      (l.mergeEncVersion = tt),
      (l.mergeEncVersion2Mixin = rt),
      (l.mergeEncVersion3Mixin = at),
      (l.mergeEncVersionFutureproofMixin = lt),
      (l.mergeStatusEncHideDecryptFailMixin = ut),
      (l.mergeEncMediaTypeOrListMixinGroup = ct),
      (l.mergeEncPayloadMixin = mt),
      (l.mergeEncStateOrSessionTypeMixinGroup = pt),
      (l.mergeEncListMixin = ft),
      (l.mergeEncMediaTypeMixin = ht),
      (l.mergeEncSessionTypeMixin = Ct),
      (l.mergeEncStateMixin = vt),
      (l.mergeMediaTypeMixin = Rt),
      (l.mergeAvatarStickerTypeMixin = Et));
  },
  98,
);
