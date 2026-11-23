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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "PostBroadcastStatusResponseNegative", value: a.value };
      var i = u(r, n);
      if (i.success)
        return { name: "PostBroadcastStatusResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PostBroadcastStatus", {
          Negative: a,
          Success: i,
        }),
      );
    }
    function s(e, t) {
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
      var i = q(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, {
          deviceListStaleMixin: i.success ? i.value : null,
        }),
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
      var a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = q(e),
        l = U(e),
        s = c(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, {
          deviceListStaleMixin: i.success ? i.value : null,
          fanoutCountMixin: l.success ? l.value : null,
          statusAckRcatMixin: s.success ? s.value : null,
        }),
      );
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ rcatElementValue: r.value })
        : r;
    }
    function d(e) {
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
        p = e.statusEncContentTypeMixinArgs,
        _ = e.statusSenderContentBindingMixinArgs,
        f = e.anonPaddingMixinArgs,
        g = e.statusEncMessageAssociationTypeMixinArgs,
        h = e.hasStatusSgCapture,
        C = e.statusBroadcastPublishTypeMixinsArgs,
        S = e.statusEncContentTypeMixinsArgs,
        L = v(
          m(
            (t = o("WASmaxMixins")).optionalMerge(
              W,
              t.optionalMerge(
                x,
                t.optionalMerge(
                  H,
                  t.optionalMerge(
                    O,
                    t.optionalMerge(
                      b,
                      t.optionalMerge(
                        P,
                        t.optionalMerge(
                          E,
                          t.optionalMerge(
                            T,
                            t.optionalMerge(
                              y,
                              t.optionalMerge(
                                R,
                                t.optionalMerge(
                                  M,
                                  t.optionalMerge(
                                    z,
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
                      p,
                    ),
                    _,
                  ),
                  f,
                ),
                g,
              ),
              h,
            ),
            C,
          ),
          S,
        );
      return L;
    }
    function m(e, t) {
      if (t.statusBroadcastRegular) return f(e, t.statusBroadcastRegular);
      if (t.statusBroadcastDirected) return Z(e, t.statusBroadcastDirected);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e) {
      var t = e.encMediaTypeMixinArgs,
        n = e.hasStatusEncHideDecryptFail,
        r = e.encRetryMixinArgs,
        a = e.encVersionArgs,
        i =
          e.encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroupArgs,
        l = j(
          et(
            o("WASmaxMixins").optionalMerge(
              $e,
              o("WASmaxMixins").optionalMerge(
                st,
                o("WASmaxMixins").optionalMerge(
                  gt,
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
    function _(e) {
      var t,
        n = e.encArgs,
        r = e.statusParticipantHashMixinArgs,
        a = e.statusEncFanoutMixinArgs,
        i = e.statusReportingMixinArgs,
        l = e.statusSenderKeyBucketingModeMixinArgs,
        s = e.statusEditOrRevokeMixinGroupArgs,
        u = (t = o("WASmaxMixins")).optionalMerge(
          oe,
          t.optionalMerge(
            pe,
            t.optionalMerge(
              de,
              t.optionalMerge(
                We,
                t.optionalMerge(
                  A,
                  o("WASmaxJsx").smax(
                    "status",
                    null,
                    o("WASmaxChildren").REPEATED_CHILD(p, n, 1, 5),
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
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
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
    function h(e) {
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
              o("WASmaxChildren").HOMOGENEOUS_CHILD(g, t),
            ),
          ),
        );
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C(e) {
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
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e, t) {
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
    function S(e) {
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
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { is_status_mention: "true" }),
      );
      return e;
    }
    function E(e) {
      var t = L();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function k(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").JID(t) });
      return n;
    }
    function I(e) {
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
              o("WASmaxChildren").REPEATED_CHILD(k, t, 1, 5),
            ),
          ),
        );
      return n;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
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
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { session_scope: "status" }),
      );
      return e;
    }
    function P(e) {
      var t = $();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function N(e) {
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
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.statusPhash,
        n = o("WASmaxJsx").smax("status", {
          phash: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
      var t = e.senderContentBindingElementValue,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("sender_content_binding", null, t),
        );
      return n;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { sg_capture: "1" }),
      );
      return e;
    }
    function W(e) {
      var t = B();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "phash");
      return n.success
        ? o("WAResultOrError").makeResult({ phash: n.value })
        : n;
    }
    function U(e) {
      var t = o("WASmaxParseUtils").attrInt(e, "count");
      return t.success
        ? o("WAResultOrError").makeResult({ count: t.value })
        : t;
    }
    function V(e) {
      var t = e.taPadElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("ta_pad", null, t),
        );
      return n;
    }
    function H(e, t) {
      var n = V(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function G(e) {
      var t = e.deviceIdentityElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("device-identity", null, t),
        );
      return n;
    }
    function z(e, t) {
      var n = G(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function j(e, t) {
      if (t.encTypeSenderKey) return Y(e, t.encTypeSenderKey);
      if (t.encTypeOneTimeSenderKey) return Q(e, t.encTypeOneTimeSenderKey);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function K(e) {
      var t = e.encElementValue,
        n = e.encSenderKeyBucketMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          Ce,
          o("WASmaxJsx").smax("enc", { type: "otsk" }, t),
          n,
        );
      return r;
    }
    function Q(e, t) {
      var n = K(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function X(e) {
      var t = e.encSenderKeyBucketMixinArgs,
        n = dt(
          o("WASmaxMixins").optionalMerge(
            Ce,
            o("WASmaxJsx").smax("enc", { type: "skmsg" }),
            t,
          ),
          e,
        );
      return n;
    }
    function Y(e, t) {
      var n = X(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function J(e) {
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
          oe,
          ae(
            t.optionalMerge(
              fe,
              t.optionalMerge(
                ue,
                t.optionalMerge(
                  re,
                  t.optionalMerge(
                    pe,
                    t.optionalMerge(
                      te,
                      t.optionalMerge(
                        de,
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
    function Z(e, t) {
      var n = J(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ee(e) {
      var t = e.statusPhash,
        n = o("WASmaxJsx").smax("status", {
          phash: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function te(e, t) {
      var n = ee(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ne(e) {
      var t = e.statusParticipant,
        n = o("WASmaxJsx").smax("status", { participant: o("WAWap").JID(t) });
      return n;
    }
    function re(e, t) {
      var n = ne(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function oe(e, t) {
      if (t.isStatusEdit) return Ie(e);
      if (t.isStatusRevoke)
        return o(
          "WASmaxOutStatusPublishStatusRevokeMixin",
        ).mergeStatusRevokeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ae(e, t) {
      if (t.statusEncFanoutSenderKeyEmpty)
        return De(e, t.statusEncFanoutSenderKeyEmpty);
      if (t.statusEncRetry) return le(e, t.statusEncRetry);
      if (t.statusEncFanout) return We(e, t.statusEncFanout);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ie(e) {
      var t = e.encTypeIndividualMixinArgs,
        n = e.hasStatusEncHideDecryptFail,
        r = e.encRetryMixinArgs,
        a = e.encVersionArgs,
        i = o("WASmaxJsx").smax(
          "status",
          null,
          et(
            o("WASmaxMixins").optionalMerge(
              $e,
              o("WASmaxMixins").optionalMerge(
                st,
                Ze(o("WASmaxJsx").smax("enc", null), t),
                n,
              ),
              r,
            ),
            a,
          ),
        );
      return i;
    }
    function le(e, t) {
      var n = ie(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function se() {
      var e = o("WASmaxJsx").smax("status", { device_fanout: "false" });
      return e;
    }
    function ue(e) {
      var t = se();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ce(e) {
      var t = e.serverReportingTokenMixinArgs,
        n = e.clientReportingTokenMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          he,
          o("WASmaxMixins").optionalMerge(
            Ee,
            o("WASmaxJsx").smax("status", null),
            t,
          ),
          n,
        );
      return r;
    }
    function de(e, t) {
      var n = ce(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function me(e) {
      var t = e.statusBucketing,
        n = o("WASmaxJsx").smax("status", {
          bucketing: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function pe(e, t) {
      var n = me(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _e(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          ve(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function fe(e, t) {
      var n = _e(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ge(e) {
      var t = e.reportingTokenElementMixinArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            Re,
            o("WASmaxJsx").smax("reporting", null),
            t,
          ),
        );
      return n;
    }
    function he(e, t) {
      var n = ge(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ye(e) {
      var t = e.encBucket,
        n = o("WASmaxJsx").smax("enc", { bucket: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function Ce(e, t) {
      var n = ye(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function be(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function ve(e, t) {
      var n = be(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Se(e) {
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
    function Re(e, t) {
      var n = Se(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Le(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        Fe(o("WASmaxJsx").smax("reporting", null), e),
      );
      return t;
    }
    function Ee(e, t) {
      var n = Le(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ke() {
      var e = o("WASmaxJsx").smax("status", { edit: "1" });
      return e;
    }
    function Ie(e) {
      var t = ke();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Te(e) {
      var t = e.encTypeSenderKeyEmptyMixinArgs,
        n = e.encMediaTypeMixinArgs,
        r = e.hasStatusEncHideDecryptFail,
        a = e.encRetryMixinArgs,
        i = e.encVersionArgs,
        l = We(
          o("WASmaxJsx").smax(
            "status",
            null,
            et(
              o("WASmaxMixins").optionalMerge(
                $e,
                o("WASmaxMixins").optionalMerge(
                  st,
                  o("WASmaxMixins").optionalMerge(
                    gt,
                    Ne(o("WASmaxJsx").smax("enc", null), t),
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
    function De(e, t) {
      var n = Te(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function xe(e) {
      var t = e.encCount,
        n = o("WASmaxJsx").smax("enc", { count: o("WAWap").INT(t) });
      return n;
    }
    function $e(e, t) {
      var n = xe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Pe(e) {
      var t = e.encElementValue,
        n = we(o("WASmaxJsx").smax("enc", null, t));
      return n;
    }
    function Ne(e, t) {
      var n = Pe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Me() {
      var e = o("WASmaxJsx").smax("enc", { type: "skmsg" });
      return e;
    }
    function we(e) {
      var t = Me();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Ae(e) {
      var t = e.reportingTagElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("reporting_tag", null, t),
        );
      return n;
    }
    function Fe(e, t) {
      var n = Ae(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Oe(e) {
      var t = e.statusToContentBindingMixinArgs,
        n = e.statusTCTokenMixinArgs,
        r = e.senderKeyBucketParticipantMixinArgs,
        a = e.statusToDeviceOrUserMixinGroupArgs,
        i = Ge(
          o("WASmaxMixins").optionalMerge(
            Qe,
            o("WASmaxMixins").optionalMerge(
              Ue,
              o("WASmaxMixins").optionalMerge(
                He,
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
    function Be(e) {
      var t = e.toArgs,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax(
            "participants",
            null,
            o("WASmaxChildren").REPEATED_CHILD(Oe, t, 1, 9990998),
          ),
        );
      return n;
    }
    function We(e, t) {
      var n = Be(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function qe(e) {
      var t = e.tctokenElementValue,
        n = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("tctoken", null, t),
        );
      return n;
    }
    function Ue(e, t) {
      var n = qe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ve(e) {
      var t = e.contentBindingElementValue,
        n = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("content_binding", null, t),
        );
      return n;
    }
    function He(e, t) {
      var n = Ve(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ge(e, t) {
      if (t.statusToDevice) return Ye(e, t.statusToDevice);
      if (t.statusToUser) return je(e, t.statusToUser);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ze(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").JID(t) });
      return n;
    }
    function je(e, t) {
      var n = ze(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ke(e) {
      var t = e.toBucket,
        n = o("WASmaxJsx").smax("to", { bucket: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function Qe(e, t) {
      var n = Ke(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Xe(e) {
      var t = e.toJid,
        n = e.encTypeIndividualMixinArgs,
        r = e.hasStatusEncHideDecryptFail,
        a = e.encVersionArgs,
        i = o("WASmaxJsx").smax(
          "to",
          { jid: o("WAWap").JID(t) },
          et(
            o("WASmaxMixins").optionalMerge(
              st,
              Ze(o("WASmaxJsx").smax("enc", null), n),
              r,
            ),
            a,
          ),
        );
      return i;
    }
    function Ye(e, t) {
      var n = Xe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Je(e) {
      var t = e.encType,
        n = e.encStateOrSessionTypeMixinGroupArgs,
        r = e.encMediaTypeOrListMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          ut,
          o("WASmaxMixins").optionalMerge(
            mt,
            dt(
              o("WASmaxJsx").smax("enc", { type: o("WAWap").CUSTOM_STRING(t) }),
              e,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function Ze(e, t) {
      var n = Je(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function et(e, t) {
      if (t.isEncVersion2) return nt(e);
      if (t.isEncVersion3) return ot(e);
      if (t.encVersionFutureproof) return it(e, t.encVersionFutureproof);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function tt() {
      var e = o("WASmaxJsx").smax("enc", { v: "2" });
      return e;
    }
    function nt(e) {
      var t = tt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function rt() {
      var e = o("WASmaxJsx").smax("enc", { v: "3" });
      return e;
    }
    function ot(e) {
      var t = rt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function at(e) {
      var t = e.encV,
        n = o("WASmaxJsx").smax("enc", { v: o("WAWap").INT(t) });
      return n;
    }
    function it(e, t) {
      var n = at(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function lt() {
      var e = o("WASmaxJsx").smax("enc", { "decrypt-fail": "hide" });
      return e;
    }
    function st(e) {
      var t = lt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ut(e, t) {
      if (t.encMediaType) return gt(e, t.encMediaType);
      if (t.isEncList) return _t(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ct(e) {
      var t = e.encElementValue,
        n = o("WASmaxJsx").smax("enc", null, t);
      return n;
    }
    function dt(e, t) {
      var n = ct(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function mt(e, t) {
      if (t.encState) return bt(e, t.encState);
      if (t.isEncSessionType) return yt(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function pt() {
      var e = o("WASmaxJsx").smax("enc", { mediatype: "list" });
      return e;
    }
    function _t(e) {
      var t = pt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ft(e) {
      var t = e.encNativeFlowName,
        n = e.hasAvatarStickerType,
        r = o("WASmaxMixins").optionalMerge(
          Lt,
          St(
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
    function gt(e, t) {
      var n = ft(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ht() {
      var e = o("WASmaxJsx").smax("enc", { session_type: "pq" });
      return e;
    }
    function yt(e) {
      var t = ht();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Ct(e) {
      var t = e.encState,
        n = o("WASmaxJsx").smax("enc", { state: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function bt(e, t) {
      var n = Ct(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function vt(e) {
      var t = e.encMediatype,
        n = o("WASmaxJsx").smax("enc", {
          mediatype: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function St(e, t) {
      var n = vt(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Rt() {
      var e = o("WASmaxJsx").smax("enc", { sticker_type: "avatar" });
      return e;
    }
    function Lt(e) {
      var t = Rt();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendPostBroadcastStatusRPC = e),
      (l.parsePostBroadcastStatusResponseNegative = s),
      (l.parsePostBroadcastStatusResponseSuccess = u),
      (l.makePostBroadcastStatusRequest = d));
  },
  98,
);
