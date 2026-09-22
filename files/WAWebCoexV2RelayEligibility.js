__d(
  "WAWebCoexV2RelayEligibility",
  [
    "Promise",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2SupportedMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebMsgFanoutTypes",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
          var t =
            ((yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
              !(yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                e,
              ))) ||
            (yield L());
          return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!v(e, t) || !(yield C())) return null;
          var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          return n == null
            ? null
            : { agentCopyIsRequired: !0, kind: "user_agent", selfLid: n };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = e.hasFbidBotDevice,
        n = e.isBotInvokeMessage,
        r = e.isResendingMsg,
        o = e.isRevokeForMsgFromOrDeliveredToBot,
        a = e.relayPlan;
      return r || a == null || (!n && !o) || !t
        ? null
        : { agentCopyIsRequired: !1, kind: "invoked_agent", relayPlan: a };
    }
    function g(e, t) {
      return (e == null ? void 0 : e.agentCopyIsRequired) === !0 && t === 0;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.chatId,
            a = e.msgProtobuf,
            i = e.option,
            l = e.stanzaTo;
          if (!S(a, l, i)) return null;
          var u = yield (c || (c = n("Promise"))).all([
              C(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
            ]),
            d = u[0],
            m = u[1],
            p = u[2];
          if (!d && !m) return null;
          var _ = d ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
            f = m && !p ? R(t == null ? void 0 : t.accountLid, l) : null,
            g =
              f != null &&
              (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(f));
          m &&
            (p || g) &&
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: peer is blocked; dropping peer <to>",
                  ])),
              )
              .sendLogs("coexv2-relay-peer-blocked");
          var h = g ? null : f;
          return _ == null && h == null
            ? null
            : { peerLid: h, selfIsCoexV2: d, selfLid: _ };
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        e.isFbidBot() &&
        !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t)
      );
    }
    function S(e, t, n) {
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
    function R(t, n) {
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
    function L() {
      return o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
        ? (c || (c = n("Promise"))).resolve(!1)
        : C();
    }
    ((l.genIsCoexV2RelayEligibleSend = d),
      (l.getCoexV2AgentSendPlan = p),
      (l.getCoexV2InvokedAgentSendPlan = f),
      (l.shouldRejectCoexV2AgentSend = g),
      (l.getCoexV2RelaySendPlan = h),
      (l.isSelfCoexV2Hosted = C));
  },
  98,
);
