__d(
  "WAWebCoexV2RelayEligibility",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAeaRollout",
    "WAWebApiVerifiedBusinessName",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2SupportedMsgTypes",
    "WAWebCoexV2UserAgentEligibility",
    "WAWebHandleMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgCommonApi",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "cr:17538",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n = t.chatId,
        a = t.stanzaTo;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_coex_simple_signal_enabled",
        ) !== 1 ||
        !n.isUser() ||
        !a.isUser() ||
        o(
          "WAWebSimpleSignalDowngradeStore",
        ).isCoexUserDowngradedFromSimpleSignal(n)
      )
        return null;
      try {
        var i,
          l =
            (i = await o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(n)) == null
              ? void 0
              : i.privacyMode;
        if (l == null) return null;
        var s = o(
          "WAWebApiVerifiedBusinessName",
        ).convertPrivacyModeFromStorageType(l);
        return s == null ||
          s.hostStorage !==
            o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook
          ? null
          : {
              privacyMode: s,
              stanzaTo: a,
              statelessSessionEnabled: o(
                "WAWebMessagingGatingUtils",
              ).isSimpleSignalEnabled(),
            };
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] simple signal: failed to read peer privacy mode",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-simple-signal-privacy-mode-read-failed"),
          null
        );
      }
    }
    function p(e, t) {
      return (
        (e == null ? void 0 : e.statelessSessionEnabled) === !0 &&
        (t.isHosted() ||
          (t.user === e.stanzaTo.user &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(t)))
      );
    }
    async function _(e, t) {
      await Promise.all(
        t
          .filter(function (t) {
            return !t.isHosted() && p(e, t);
          })
          .map(function (e) {
            return o("WAWebSignalSessionApi").deleteRemoteSession(e);
          }),
      );
    }
    async function f(e) {
      if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
      var t =
        ((await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
          !(await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e))) ||
        (await L());
      return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
    }
    async function g(e, t) {
      if (
        !v(e, t) ||
        !(await o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted())
      )
        return null;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return n == null
        ? null
        : { agentCopyIsRequired: !0, kind: "user_agent", selfLid: n };
    }
    function h(e) {
      var t = e.hasFbidBotDevice,
        n = e.isBotInvokeMessage,
        r = e.isResendingMsg,
        o = e.isRevokeForMsgFromOrDeliveredToBot,
        a = e.relayPlan;
      return r || a == null || (!n && !o) || !t
        ? null
        : { agentCopyIsRequired: !1, kind: "invoked_agent", relayPlan: a };
    }
    function y(e, t) {
      return (e == null ? void 0 : e.agentCopyIsRequired) === !0 && t === 0;
    }
    async function C(e) {
      var t = e.chat,
        n = e.chatId,
        r = e.isAeaE2eeSend,
        a = e.msgProtobuf,
        i = e.option,
        l = e.stanzaTo;
      if (!S(a, l, i)) return null;
      var c = await Promise.all([
          o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted(),
          o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(n),
          o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(n),
          r != null ? r : b(n, a),
        ]),
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = m && !_;
      if (
        (m &&
          _ &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] relay copy stopped chat=",
                "",
              ])),
            n.toLogString(),
          ),
        !d && !f)
      )
        return null;
      var g = d ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
        h = f && !p ? R(t == null ? void 0 : t.accountLid, l) : null,
        y =
          h != null &&
          (await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(h));
      f &&
        (p || y) &&
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] relay: peer is blocked; dropping peer <to>",
              ])),
          )
          .sendLogs("coexv2-relay-peer-blocked");
      var C = y ? null : h;
      return g == null && C == null
        ? null
        : { peerLid: C, selfIsCoexV2: d, selfLid: g };
    }
    async function b(e, t) {
      var a,
        i = (a = t.protocolMessage) == null ? void 0 : a.type;
      if (
        n("cr:17538") == null ||
        i === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE ||
        i ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .MESSAGE_UNSCHEDULE
      )
        return !1;
      try {
        return await n("cr:17538").isAeaEnforcedE2eeChat(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] relay copy: failed to read the thread state",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-relay-aea-thread-state-read-failed"),
          o("WAWebAeaRollout").isAeaEnforcementEnabled()
        );
      }
    }
    function v(e, t) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        o("WAWebCoexV2UserAgentEligibility").isCoexV2UserAgentTarget(e) &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t)
      );
    }
    function S(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(e)
      );
    }
    function R(e, t) {
      var n =
        e != null && e.isLid() ? e : o("WAWebLidMigrationUtils").toUserLid(t);
      return (
        n == null &&
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>",
                ])),
            )
            .sendLogs("coexv2-relay-peer-lid-missing"),
        n
      );
    }
    function L() {
      return o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
        ? Promise.resolve(!1)
        : o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted();
    }
    ((l.resolveCoexV2SimpleSignalPolicy = m),
      (l.shouldUseCoexV2StatelessSession = p),
      (l.deleteCoexV2SimpleSignalPrimarySessions = _),
      (l.genIsCoexV2RelayEligibleSend = f),
      (l.getCoexV2AgentSendPlan = g),
      (l.getCoexV2InvokedAgentSendPlan = h),
      (l.shouldRejectCoexV2AgentSend = y),
      (l.getCoexV2RelaySendPlan = C),
      (l.shouldAeaStopRelayCopy = b));
  },
  98,
);
