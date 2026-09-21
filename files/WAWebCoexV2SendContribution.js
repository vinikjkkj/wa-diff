__d(
  "WAWebCoexV2SendContribution",
  [
    "WALogger",
    "WAWap",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2ProtoSanitize",
    "WAWebCoexV2RelayEligibility",
    "WAWebCommsWapMd",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptMsgProtobuf",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebSessionScope",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.agentCopies,
        n = e.agentEngagementType,
        r = e.isFeedback,
        o = e.msg,
        a = e.personaType,
        i = e.plan;
      if (i == null) return null;
      var l = t[0];
      return l == null
        ? null
        : {
            node: m({
              agentEngagementType: n,
              agentWids: [l.agentWid],
              isFeedback: r,
              personaType: a,
              selfLid: i.selfLid,
              sharedEnc: l.sharedEnc,
            }),
            seedReceipts: null,
          };
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.botAttrs,
            n = e.editType,
            r = e.msg,
            a = e.sendContext,
            i = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              a,
            );
          if (i == null) return null;
          var l = i.peerLid,
            s = i.selfIsCoexV2,
            u = i.selfLid,
            c = [u, l].filter(Boolean),
            d = yield p(r, a.msgProtobuf, n, c, null, s, t);
          return d == null
            ? null
            : {
                node: d.node,
                seedReceipts: function () {
                  return o(
                    "WAWebApiCoexV2RelayReceiptStore",
                  ).createOrMergeCoexV2RelayReceipts(r.id.id, c, r.t);
                },
                shouldHaveIdentity: d.shouldHaveIdentity,
              };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      var r = e;
      return (
        t.isFbidBot() &&
          (r = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(r)),
        t.isBot() && (r = o("WAWebE2EProtoGenerator").updateBotProtobuf(r)),
        f(r, o("WAWebMsgGetters").getMessageSecret(n))
      );
    }
    function m(e) {
      var t = e.agentEngagementType,
        n = e.agentWids,
        r = e.isFeedback,
        o = e.personaType,
        a = e.selfLid,
        i = e.sharedEnc;
      return g({
        agentEngagementType: t,
        botAttrs: null,
        destinationWids: [a].concat(n),
        isFeedback: r,
        personaType: o,
        sharedEnc: i,
      });
    }
    function p(e, t, n, r, o, a, i) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, s, u) {
            try {
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
              });
              var c = o("WAWebCoexV2ProtoSanitize").sanitizeCoexV2RelayMessage(
                  n,
                ),
                d = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  l != null ? l : 0,
                  c,
                  t,
                  a,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                  s,
                ),
                m = d.ciphertext,
                p = d.type,
                _ = o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(p),
                    session_type: o(
                      "WAWebEncryptMsgProtobuf",
                    ).isPqxdhCiphertext(m)
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      p === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    count:
                      l != null && l > 0
                        ? o("WAWap").INT(l)
                        : o("WAWap").DROP_ATTR,
                  },
                  m,
                );
              return {
                node: g({
                  agentEngagementType: null,
                  botAttrs: u,
                  destinationWids: i,
                  isFeedback: !1,
                  personaType: null,
                  sharedEnc: _,
                }),
                shouldHaveIdentity:
                  p === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                type: p,
              };
            } catch (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to build relay bot node",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("coexv2-relay-bot-node-build-failed"),
                null
              );
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n,
        r = o("WAWebCoexV2ProtoSanitize").sanitizeCoexV2RelayMessage(e);
      return (
        ((n = r.messageContextInfo) == null ? void 0 : n.botMessageSecret) !=
          null &&
          (r.messageContextInfo = babelHelpers.extends(
            {},
            r.messageContextInfo,
            { botMessageSecret: null },
          )),
        t != null &&
          (r.messageContextInfo = babelHelpers.extends(
            {},
            r.messageContextInfo,
            { messageSecret: t },
          )),
        r
      );
    }
    function g(e) {
      var t = e.agentEngagementType,
        n = e.botAttrs,
        r = e.destinationWids,
        a = e.isFeedback,
        i = e.personaType,
        l = e.sharedEnc,
        s = new Set(),
        u = [];
      for (var c of r) {
        var d = o("WAWebCommsWapMd").DEVICE_JID(c),
          m = d.toString();
        s.has(m) || (s.add(m), u.push(c));
      }
      var p = u.map(function (e) {
        return o("WAWap").wap("to", {
          jid: o("WAWebCommsWapMd").DEVICE_JID(e),
        });
      });
      return o("WAWap").wap(
        "bot",
        {
          type: a
            ? "feedback"
            : o("WAWap").MAYBE_CUSTOM_STRING(n == null ? void 0 : n.type),
          agent_engagement_type:
            t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
          persona_type:
            i != null ? o("WAWap").CUSTOM_STRING(i) : o("WAWap").DROP_ATTR,
          local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(
            n == null ? void 0 : n.localAutomatedType,
          ),
          client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(
            n == null ? void 0 : n.clientThreadId,
          ),
          mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(
            n == null ? void 0 : n.modeSelection,
          ),
          mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(
            n == null ? void 0 : n.modeSelected,
          ),
        },
        [].concat(p, [l]),
      );
    }
    ((l.finalizeCoexV2AgentContribution = s),
      (l.buildCoexV2RelayContribution = u),
      (l.prepareCoexV2AgentPayload = d),
      (l.genCoexV2RelayBotNodeForTargets = p));
  },
  98,
);
