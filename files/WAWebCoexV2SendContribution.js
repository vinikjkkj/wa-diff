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
    "WAWebCoexV2RetryMarkerStore",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebICDCMetaApi",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebSendMsgBotStanza",
    "WAWebSessionScope",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebThreadMsgUtils",
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.agentCopies,
        r = e.agentEngagementType,
        a = e.botAttrs,
        i = e.isFeedback,
        l = e.msg,
        s = e.plan;
      if (s == null) return null;
      var u = t[0];
      if (u == null) return null;
      var c = S(s),
        d = c.peerLid,
        m = c.selfLid,
        p = R(m, d),
        _ = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
          u.agentWid,
        );
      return {
        node: C({
          agentEngagementType: r,
          botAttrs: a,
          destinationWids: [m, d, u.agentWid],
          isFeedback: i,
          personaType: _ != null ? _ : null,
          sharedEnc: u.sharedEnc,
        }),
        seedReceipts: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield b(l.id.id, p, l.t),
              yield o(
                "WAWebCoexV2RetryMarkerStore",
              ).markCoexV2RepresentedTargets(l.id, u.agentWid));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
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
            c = yield g(r, o, n, u, null, l, t);
          return c == null
            ? null
            : {
                node: c.node,
                seedReceipts: function () {
                  return b(r.id.id, u, r.t);
                },
                shouldHaveIdentity: c.shouldHaveIdentity,
              };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return y(e, o("WAWebMsgGetters").getMessageSecret(t));
    }
    function p(e) {
      var t = e.ciphertext,
        n = e.mediaType,
        r = e.msgProtobuf,
        a = e.retryCount,
        i = e.type,
        l = e.useStatelessSession;
      return o("WAWap").wap(
        "enc",
        {
          v: o("WAWap").CUSTOM_STRING(
            o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
          ),
          type: o("WAWap").CUSTOM_STRING(i),
          session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t)
            ? o("WAWap").CUSTOM_STRING("pq")
            : o("WAWap").DROP_ATTR,
          state:
            l && i === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
              ? o("WAWap").CUSTOM_STRING("false")
              : o("WAWap").DROP_ATTR,
          mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(n),
          "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(
            o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(r),
          ),
          native_flow_name: o(
            "WAWebBackendJobsCommon",
          ).encodeMaybeNativeFlowName(
            o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(r),
          ),
          count: a > 0 ? o("WAWap").INT(a) : o("WAWap").DROP_ATTR,
        },
        t,
      );
    }
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i,
              l,
              s = r.agentEngagementType,
              u = r.agentWid,
              c = r.isFeedback,
              d = r.representedLids,
              _ = r.selfHosted,
              f = r.useStatelessSession,
              g = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
                e,
                o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, e.id.remote),
                (i =
                  (l = o("WAWebThreadMsgUtils").getMsgAiThread(e)) == null
                    ? void 0
                    : l.key.id) != null
                  ? i
                  : null,
              );
            (f && (yield o("WAWebSignalSessionApi").deleteRemoteSession(u)),
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [u],
              }),
              yield o("WAWebICDCMetaApi").populateICDCMeta(
                o("WAWebWidFactory").asUserWidOrThrow(e.to),
                t,
              ));
            var h = m(t, e);
            if (
              o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                e.to,
                u,
                e.subtype,
              )
            )
              try {
                h = yield o(
                  "WAWebWasaHatchOutboundWrapper",
                ).wrapHatchOutboundMessage({
                  currentStanzaId: e.id.id,
                  innerMessage: h,
                });
              } catch (e) {
                throw e instanceof
                  o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
                  ? e
                  : new (o(
                      "WAWebWasaHatchOutboundWrapper",
                    ).WAWebWasaHatchWrapError)(
                      "WASA Hatch outbound wrap failed",
                      e,
                    );
              }
            var y = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                u,
                a,
                h,
                e,
                n,
                o("WAWebSessionScope").SessionScope.DEFAULT,
                f,
                _,
              ),
              b = y.ciphertext,
              v = y.type,
              S = p({
                ciphertext: b,
                mediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t),
                msgProtobuf: t,
                retryCount: a,
                type: v,
                useStatelessSession: f,
              }),
              R = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                u,
              );
            return {
              node: C({
                agentEngagementType: s,
                botAttrs: g,
                destinationWids: [].concat(d, [u]),
                isFeedback: c,
                personaType: R != null ? R : null,
                sharedEnc: S,
              }),
              shouldHaveIdentity:
                v === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
              type: v,
            };
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o, a, i) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                node: C({
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
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
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
    function C(e) {
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
          var d = L(c);
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
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e, t) {
      return e == null
        ? t == null
          ? []
          : [t]
        : t == null || L(e) === L(t)
          ? [e]
          : [e, t];
    }
    function L(e) {
      return o("WAWebCommsWapMd").DEVICE_JID(e).toString();
    }
    ((l.finalizeCoexV2AgentContribution = u),
      (l.buildCoexV2RelayContribution = c),
      (l.prepareCoexV2AgentPayload = m),
      (l.genCoexV2AgentSharedEncNode = p),
      (l.genCoexV2InvokedAgentRetryBotNode = _),
      (l.genCoexV2RelayBotNodeForTargets = g));
  },
  98,
);
