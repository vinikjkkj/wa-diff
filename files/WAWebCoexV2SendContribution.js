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
    "WAWebCommsWapMd",
    "WAWebEncryptMsgProtobuf",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebSessionScope",
    "WAWebSimpleSignalPNToFBIDMigration",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.agentCopies,
        n = e.agentEngagementType,
        r = e.botAttrs,
        a = e.isFeedback,
        i = e.msg,
        l = e.plan;
      if (l == null) return null;
      var s = t[0];
      if (s == null) return null;
      var u = C(l),
        c = u.peerLid,
        d = u.selfLid,
        m = b(d, c),
        p = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
          s.agentWid,
        );
      return {
        node: g({
          agentEngagementType: n,
          botAttrs: r,
          destinationWids: [d, c, s.agentWid],
          isFeedback: a,
          personaType: p != null ? p : null,
          sharedEnc: s.sharedEnc,
        }),
        seedReceipts: function () {
          return h(i.id.id, m, i.t);
        },
      };
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.botAttrs,
            n = e.editType,
            r = e.msg,
            o = e.msgProtobuf,
            a = e.relayPlan;
          if (a == null) return null;
          var i = a.peerLid,
            l = a.selfIsCoexV2,
            s = a.selfLid,
            u = [s, i].filter(Boolean),
            c = yield p(r, o, n, u, null, l, t);
          return c == null
            ? null
            : {
                node: c.node,
                seedReceipts: function () {
                  return h(r.id.id, u, r.t);
                },
                shouldHaveIdentity: c.shouldHaveIdentity,
              };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return f(e, o("WAWebMsgGetters").getMessageSecret(t));
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
      for (var c of r)
        if (c != null) {
          var d = v(c);
          s.has(d) || (s.add(d), u.push(c));
        }
      var m = u.map(function (e) {
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
        [].concat(m, [l]),
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield o(
              "WAWebApiCoexV2RelayReceiptStore",
            ).createOrMergeCoexV2RelayReceipts(e, t, n);
          } catch (e) {
            throw (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to seed relay receipt rows",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-relay-receipt-seed-failed"),
              e
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "user_agent"
        ) {
          var t = e;
          return { peerLid: null, selfLid: t.selfLid };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "invoked_agent"
        ) {
          var n = e;
          return { peerLid: n.relayPlan.peerLid, selfLid: n.relayPlan.selfLid };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function b(e, t) {
      return e == null
        ? t == null
          ? []
          : [t]
        : t == null || v(e) === v(t)
          ? [e]
          : [e, t];
    }
    function v(e) {
      return o("WAWebCommsWapMd").DEVICE_JID(e).toString();
    }
    ((l.finalizeCoexV2AgentContribution = u),
      (l.buildCoexV2RelayContribution = c),
      (l.prepareCoexV2AgentPayload = m),
      (l.genCoexV2RelayBotNodeForTargets = p));
  },
  98,
);
