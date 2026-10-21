__d(
  "WAWebCoexV2RelayEligibility",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAeaRollout",
    "WAWebApiDeviceList",
    "WAWebApiVerifiedBusinessName",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2SupportedMsgTypes",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgCommonApi",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "cr:17538",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.stanzaTo;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "web_coex_simple_signal_enabled",
            ) !== 1 ||
            !t.isUser() ||
            !n.isUser() ||
            o(
              "WAWebSimpleSignalDowngradeStore",
            ).isCoexUserDowngradedFromSimpleSignal(t)
          )
            return null;
          try {
            var a,
              i =
                (a = yield o(
                  "WAWebApiVerifiedBusinessName",
                ).getVerifiedBusinessNameRecordLidAware(t)) == null
                  ? void 0
                  : a.privacyMode;
            if (i == null) return null;
            var l = o(
              "WAWebApiVerifiedBusinessName",
            ).convertPrivacyModeFromStorageType(i);
            return l == null ||
              l.hostStorage !==
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook
              ? null
              : {
                  privacyMode: l,
                  stanzaTo: n,
                  statelessSessionEnabled: o(
                    "WAWebMessagingGatingUtils",
                  ).isSimpleSignalEnabled(),
                };
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] simple signal: failed to read peer privacy mode",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-simple-signal-privacy-mode-read-failed"),
              null
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return (
        (e == null ? void 0 : e.statelessSessionEnabled) === !0 &&
        (t.isHosted() ||
          (t.user === e.stanzaTo.user &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(t)))
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (m || (m = n("Promise"))).all(
            t
              .filter(function (t) {
                return !t.isHosted() && f(e, t);
              })
              .map(function (e) {
                return o("WAWebSignalSessionApi").deleteRemoteSession(e);
              }),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
          var t =
            ((yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
              !(yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                e,
              ))) ||
            (yield N());
          return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!x(e, t) || !(yield T())) return null;
          var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          return n == null
            ? null
            : { agentCopyIsRequired: !0, kind: "user_agent", selfLid: n };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = e.hasFbidBotDevice,
        n = e.isBotInvokeMessage,
        r = e.isResendingMsg,
        o = e.isRevokeForMsgFromOrDeliveredToBot,
        a = e.relayPlan;
      return r || a == null || (!n && !o) || !t
        ? null
        : { agentCopyIsRequired: !1, kind: "invoked_agent", relayPlan: a };
    }
    function R(e, t) {
      return (e == null ? void 0 : e.agentCopyIsRequired) === !0 && t === 0;
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.chatId,
            a = e.msgProtobuf,
            i = e.option,
            l = e.stanzaTo;
          if (!$(a, l, i)) return null;
          var s = yield (m || (m = n("Promise"))).all([
              T(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
              k(r, a),
            ]),
            c = s[0],
            d = s[1],
            p = s[2],
            _ = s[3],
            f = d && !_;
          if (!c && !f) return null;
          var g = c ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
            h = f && !p ? P(t == null ? void 0 : t.accountLid, l) : null,
            y =
              h != null &&
              (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(h));
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
            : { peerLid: C, selfIsCoexV2: c, selfLid: g };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i = (a = t.protocolMessage) == null ? void 0 : a.type;
          if (
            n("cr:17538") == null ||
            i ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE ||
            i ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .MESSAGE_UNSCHEDULE
          )
            return !1;
          try {
            return yield n("cr:17538").isAeaEnforcedE2eeChat(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay: failed to read the AEA thread state",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-relay-aea-thread-state-read-failed"),
              o("WAWebAeaRollout").isAeaEnforcementEnabled()
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        e.isFbidBot() &&
        !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t)
      );
    }
    function $(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(e)
      );
    }
    function P(t, n) {
      var r =
        t != null && t.isLid() ? t : o("WAWebLidMigrationUtils").toUserLid(n);
      return (
        r == null &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>",
                ])),
            )
            .sendLogs("coexv2-relay-peer-lid-missing"),
        r
      );
    }
    function N() {
      return o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
        ? (m || (m = n("Promise"))).resolve(!1)
        : T();
    }
    ((l.resolveCoexV2SimpleSignalPolicy = p),
      (l.shouldUseCoexV2StatelessSession = f),
      (l.deleteCoexV2SimpleSignalPrimarySessions = g),
      (l.genIsCoexV2RelayEligibleSend = y),
      (l.getCoexV2AgentSendPlan = b),
      (l.getCoexV2InvokedAgentSendPlan = S),
      (l.shouldRejectCoexV2AgentSend = R),
      (l.getCoexV2RelaySendPlan = L),
      (l.isSelfCoexV2Hosted = T));
  },
  98,
);
