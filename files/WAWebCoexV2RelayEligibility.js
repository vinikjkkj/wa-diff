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
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return (
        (e == null ? void 0 : e.statelessSessionEnabled) === !0 &&
        (t.isHosted() ||
          (t.user === e.stanzaTo.user &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(t)))
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (p || (p = n("Promise"))).all(
            t
              .filter(function (t) {
                return !t.isHosted() && g(e, t);
              })
              .map(function (e) {
                return o("WAWebSignalSessionApi").deleteRemoteSession(e);
              }),
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
          var t =
            ((yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
              !(yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                e,
              ))) ||
            (yield M());
          return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!$(e, t) || !(yield D())) return null;
          var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          return n == null
            ? null
            : { agentCopyIsRequired: !0, kind: "user_agent", selfLid: n };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = e.hasFbidBotDevice,
        n = e.isBotInvokeMessage,
        r = e.isResendingMsg,
        o = e.isRevokeForMsgFromOrDeliveredToBot,
        a = e.relayPlan;
      return r || a == null || (!n && !o) || !t
        ? null
        : { agentCopyIsRequired: !1, kind: "invoked_agent", relayPlan: a };
    }
    function L(e, t) {
      return (e == null ? void 0 : e.agentCopyIsRequired) === !0 && t === 0;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.chatId,
            a = e.isAeaE2eeSend,
            i = e.msgProtobuf,
            l = e.option,
            s = e.stanzaTo;
          if (!P(i, s, l)) return null;
          var d = yield (p || (p = n("Promise"))).all([
              D(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
              a != null ? a : I(r, i),
            ]),
            m = d[0],
            _ = d[1],
            f = d[2],
            g = d[3],
            h = _ && !g;
          if (
            (_ &&
              g &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] relay copy stopped chat=",
                    "",
                  ])),
                r.toLogString(),
              ),
            !m && !h)
          )
            return null;
          var y = m ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
            C = h && !f ? N(t == null ? void 0 : t.accountLid, s) : null,
            b =
              C != null &&
              (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(C));
          h &&
            (f || b) &&
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: peer is blocked; dropping peer <to>",
                  ])),
              )
              .sendLogs("coexv2-relay-peer-blocked");
          var v = b ? null : C;
          return y == null && v == null
            ? null
            : { peerLid: v, selfIsCoexV2: m, selfLid: y };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] relay copy: failed to read the thread state",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-relay-aea-thread-state-read-failed"),
              o("WAWebAeaRollout").isAeaEnforcementEnabled()
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        e.isFbidBot() &&
        !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t)
      );
    }
    function P(e, t, n) {
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
    function N(t, n) {
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
    function M() {
      return o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
        ? (p || (p = n("Promise"))).resolve(!1)
        : D();
    }
    ((l.resolveCoexV2SimpleSignalPolicy = _),
      (l.shouldUseCoexV2StatelessSession = g),
      (l.deleteCoexV2SimpleSignalPrimarySessions = h),
      (l.genIsCoexV2RelayEligibleSend = C),
      (l.getCoexV2AgentSendPlan = v),
      (l.getCoexV2InvokedAgentSendPlan = R),
      (l.shouldRejectCoexV2AgentSend = L),
      (l.getCoexV2RelaySendPlan = E),
      (l.shouldAeaStopRelayCopy = I),
      (l.isSelfCoexV2Hosted = D));
  },
  98,
);
