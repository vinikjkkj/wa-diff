__d(
  "WAWebSendCoexV2RetryMsgJob",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBotTypes",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebOutgoingMessage",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSendMsgMetaNode",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (a == null)
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] retry: missing recipient; skipping",
                    ])),
                )
                .sendLogs("coexv2-retry-missing-recipient"),
              null
            );
          var i = t.data,
            l = i.id.id;
          if (!o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled())
            return (
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] retry: send flag off; dropping bot retry for ",
                      "",
                    ])),
                  l,
                )
                .sendLogs("coexv2-retry-flag-off"),
              null
            );
          var d = yield o(
            "WAWebApiCoexV2RelayReceiptStore",
          ).getUndeliveredCoexV2Lids(l);
          if (d.length === 0)
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no undelivered LIDs for ",
                    "",
                  ])),
                l,
              ),
              null
            );
          var m = yield g(t, d),
            p = m.selfHosted,
            _ = m.survivors;
          if (_.length === 0)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no surviving targets for ",
                    "",
                  ])),
                l,
              ),
              null
            );
          var f = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
              t,
            ),
            h = o("WAWebSendMsgCreateFanoutStanza").getIsBizBotFeedback(
              i,
              i.id.remote,
            ),
            y = yield o(
              "WAWebSendMsgCreateFanoutStanza",
            ).genCoexV2RelayBotNodeForTargets(
              i,
              f,
              o("WAWebMsgGetters").getWamEditType(i),
              _,
              n,
              p,
              {
                clientThreadId: null,
                localAutomatedType: h
                  ? null
                  : o("WAWebBotTypes").getBotLocalAutomatedType(i.bizBotType),
                modeSelected: null,
                modeSelection: null,
                type: o("WAWebSendMsgCreateFanoutStanza").getBotStanzaType(i),
              },
            );
          if (y == null)
            throw r("err")(
              "[coexv2] retry: failed to build relay bot node for " +
                _.length +
                " undelivered target(s)",
            );
          var C = o("WAWebSendMsgMetaNode").genMetaNode({
            chatId: i.id.remote,
            groupData: null,
            includeAttributes: { appendHostedSenderIntent: !0 },
            msgProtobuf: f,
            msgRecord: t,
          });
          return o("WAWap").wap(
            "message",
            {
              id: o("WAWap").CUSTOM_STRING(l),
              to: o("WAWebCommsWapMd").CHAT_JID(a),
              type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(f),
              edit: o("WAWebSendMsgCommonApi").editAttribute(f, i.subtype),
            },
            y.node,
            C,
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.data.id.remote,
            i = yield (p || (p = n("Promise"))).all([
              o("WAWebSendMsgCreateFanoutStanza").isSelfCoexV2Hosted(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(a),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(a),
            ]),
            l = i[0],
            s = i[1],
            u = i[2],
            c = [],
            _ = [];
          for (var f of t) {
            var g = void 0;
            try {
              g = o("WAWebWidFactory").createUserWidOrThrow(f);
            } catch (e) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] retry: skipping malformed undelivered LID",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-retry-malformed-lid");
              continue;
            }
            if (!g.isLid()) {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] retry: skipping non-LID undelivered target ",
                      "",
                    ])),
                  g.toLogString(),
                )
                .sendLogs("coexv2-retry-non-lid-target");
              continue;
            }
            o("WAWebUserPrefsMeUser").isMeAccount(g)
              ? l && c.push(g)
              : s && !u && _.push(g);
          }
          var h = yield p.all(
              _.map(function (e) {
                return o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                  e,
                );
              }),
            ),
            y = _.filter(function (e, t) {
              return !h[t];
            }),
            C =
              y.length > 0
                ? yield o(
                    "WAWebSendMsgCommonApi",
                  ).filterDeviceWithChangedIdentity(e, y)
                : y;
          return { selfHosted: l, survivors: [].concat(c, C) };
        })),
        h.apply(this, arguments)
      );
    }
    l.buildCoexV2RetryStanza = _;
  },
  98,
);
