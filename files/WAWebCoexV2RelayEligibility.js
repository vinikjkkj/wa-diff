__d(
  "WAWebCoexV2RelayEligibility",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
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
    "WAWebSendMsgCommonApi",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return (
        (e == null ? void 0 : e.statelessSessionEnabled) === !0 &&
        (t.isHosted() ||
          (t.user === e.stanzaTo.user &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(t)))
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (d || (d = n("Promise"))).all(
            t
              .filter(function (t) {
                return !t.isHosted() && _(e, t);
              })
              .map(function (e) {
                return o("WAWebSignalSessionApi").deleteRemoteSession(e);
              }),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
          var t =
            ((yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
              !(yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                e,
              ))) ||
            (yield x());
          return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!I(e, t) || !(yield E())) return null;
          var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          return n == null
            ? null
            : { agentCopyIsRequired: !0, kind: "user_agent", selfLid: n };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = e.hasFbidBotDevice,
        n = e.isBotInvokeMessage,
        r = e.isResendingMsg,
        o = e.isRevokeForMsgFromOrDeliveredToBot,
        a = e.relayPlan;
      return r || a == null || (!n && !o) || !t
        ? null
        : { agentCopyIsRequired: !1, kind: "invoked_agent", relayPlan: a };
    }
    function S(e, t) {
      return (e == null ? void 0 : e.agentCopyIsRequired) === !0 && t === 0;
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.chatId,
            a = e.msgProtobuf,
            i = e.option,
            l = e.stanzaTo;
          if (!T(a, l, i)) return null;
          var s = yield (d || (d = n("Promise"))).all([
              E(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
            ]),
            c = s[0],
            m = s[1],
            p = s[2];
          if (!c && !m) return null;
          var _ = c ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
            f = m && !p ? D(t == null ? void 0 : t.accountLid, l) : null,
            g =
              f != null &&
              (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(f));
          m &&
            (p || g) &&
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: peer is blocked; dropping peer <to>",
                  ])),
              )
              .sendLogs("coexv2-relay-peer-blocked");
          var h = g ? null : f;
          return _ == null && h == null
            ? null
            : { peerLid: h, selfIsCoexV2: c, selfLid: _ };
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        e.isFbidBot() &&
        !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t)
      );
    }
    function T(e, t, n) {
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
    function D(t, n) {
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
    function x() {
      return o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
        ? (d || (d = n("Promise"))).resolve(!1)
        : E();
    }
    ((l.resolveCoexV2SimpleSignalPolicy = m),
      (l.shouldUseCoexV2StatelessSession = _),
      (l.deleteCoexV2SimpleSignalPrimarySessions = f),
      (l.genIsCoexV2RelayEligibleSend = h),
      (l.getCoexV2AgentSendPlan = C),
      (l.getCoexV2InvokedAgentSendPlan = v),
      (l.shouldRejectCoexV2AgentSend = S),
      (l.getCoexV2RelaySendPlan = R),
      (l.isSelfCoexV2Hosted = E));
  },
  98,
);
