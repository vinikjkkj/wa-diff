__d(
  "WAWebSendCoexV2RetryMsgJob",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBotTypes",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebOutgoingMessage",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
            l = i.id.id,
            c = yield o(
              "WAWebApiCoexV2RelayReceiptStore",
            ).getUndeliveredCoexV2Lids(l);
          if (c.length === 0)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no undelivered LIDs for ",
                    "",
                  ])),
                l,
              ),
              null
            );
          var d = yield f(t, c);
          if (d.length === 0)
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no surviving targets for ",
                    "",
                  ])),
                l,
              ),
              null
            );
          var m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
              t,
            ),
            p = o("WAWebSendMsgCreateFanoutStanza").getIsBizBotFeedback(
              i,
              i.id.remote,
            ),
            _ = yield o(
              "WAWebSendMsgCreateFanoutStanza",
            ).genCoexV2RelayBotNodeForTargets(
              i,
              m,
              o("WAWebMsgGetters").getWamEditType(i),
              d,
              n,
              {
                clientThreadId: null,
                localAutomatedType: p
                  ? null
                  : o("WAWebBotTypes").getBotLocalAutomatedType(i.bizBotType),
                modeSelected: null,
                modeSelection: null,
                type: o("WAWebSendMsgCreateFanoutStanza").getBotStanzaType(i),
              },
            );
          if (_ == null)
            throw r("err")(
              "[coexv2] retry: failed to build relay bot node for " +
                d.length +
                " undelivered target(s)",
            );
          return o("WAWap").wap(
            "message",
            {
              id: o("WAWap").CUSTOM_STRING(l),
              to: o("WAWebCommsWapMd").CHAT_JID(a),
              type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(m),
              edit: o("WAWebSendMsgCommonApi").editAttribute(m, i.subtype),
            },
            _.node,
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.data.id.remote,
            i = yield (m || (m = n("Promise"))).all([
              o("WAWebSendMsgCreateFanoutStanza").isSelfCoexV2Hosted(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(a),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(a),
            ]),
            l = i[0],
            s = i[1],
            u = i[2],
            p = [],
            _ = [];
          for (var f of t) {
            var g = void 0;
            try {
              g = o("WAWebWidFactory").createUserWidOrThrow(f);
            } catch (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] retry: skipping non-LID undelivered target ",
                      "",
                    ])),
                  g.toLogString(),
                )
                .sendLogs("coexv2-retry-non-lid-target");
              continue;
            }
            o("WAWebUserPrefsMeUser").isMeAccount(g)
              ? l && p.push(g)
              : s && !u && _.push(g);
          }
          var h = yield m.all(
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
          return [].concat(p, C);
        })),
        g.apply(this, arguments)
      );
    }
    l.buildCoexV2RetryStanza = p;
  },
  98,
);
