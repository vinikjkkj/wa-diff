__d(
  "WAWebCoexV2SendContribution",
  [
    "WALogger",
    "WAWap",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2ProtoSanitize",
    "WAWebCoexV2RelayEditProto",
    "WAWebCoexV2RelayOneShotEncrypt",
    "WAWebCoexV2RetryMarkerStore",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebHandleMsgError",
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
        l = e.personaType,
        s = e.plan;
      if (s == null) return null;
      var u = t[0];
      if (u == null) return null;
      var c = y(s),
        d = c.peerLid,
        m = c.selfLid,
        p = C(m, d);
      return {
        node: g({
          agentEngagementType: n,
          botAttrs: r,
          destinationWids: [m, d, u.agentWid],
          isFeedback: a,
          personaType: l != null ? l : null,
          sharedEnc: u.sharedEnc,
        }),
        seedReceipts: async function () {
          (await h(i.id.id, p, i.t),
            await o("WAWebCoexV2RetryMarkerStore").markCoexV2RepresentedTargets(
              i.id,
              u.agentWid,
            ));
        },
      };
    }
    async function c(e) {
      var t = e.botAttrs,
        n = e.editType,
        r = e.msg,
        a = e.msgProtobuf,
        i = e.relayPlan;
      if (i == null) return null;
      var l = await o("WAWebCoexV2RelayEditProto").genCoexV2RelayProtobuf(
          a,
          o("WAWebMsgGetters").getMessageSecret(r),
        ),
        s = i.peerLid,
        u = i.selfIsCoexV2,
        c = i.selfLid,
        d = [c, s].filter(Boolean),
        m = await _(r, l, n, d, null, u, t);
      return m == null
        ? null
        : {
            node: m.node,
            seedReceipts: function () {
              return h(r.id.id, d, r.t);
            },
            shouldHaveIdentity: m.shouldHaveIdentity,
          };
    }
    function d(e, t) {
      return f(e, o("WAWebMsgGetters").getMessageSecret(t));
    }
    function m(e) {
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
    async function p(e, t, n, r, a) {
      var i,
        l,
        s = r.agentEngagementType,
        u = r.agentWid,
        c = r.isFeedback,
        p = r.representedLids,
        _ = r.selfHosted,
        f = r.stanzaTo,
        h = r.useStatelessSession,
        y = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
          e,
          o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, e.id.remote),
          (i =
            (l = o("WAWebThreadMsgUtils").getMsgAiThread(e)) == null
              ? void 0
              : l.key.id) != null
            ? i
            : null,
        );
      (h && (await o("WAWebSignalSessionApi").deleteRemoteSession(u)),
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
          wids: [u],
        }),
        await o("WAWebICDCMetaApi").populateICDCMeta(
          o("WAWebWidFactory").asUserWidOrThrow(f),
          t,
        ));
      var C = d(t, e);
      if (
        o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
          f,
          u,
          e.subtype,
        )
      )
        try {
          C = await o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage(
            { currentStanzaId: e.id.id, innerMessage: C },
          );
        } catch (e) {
          throw e instanceof
            o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
            ? e
            : new (o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError)(
                "WASA Hatch outbound wrap failed",
                e,
              );
        }
      var b = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
          u,
          a,
          C,
          e,
          n,
          o("WAWebSessionScope").SessionScope.DEFAULT,
          h,
          _,
        ),
        v = b.ciphertext,
        S = b.type,
        R = m({
          ciphertext: v,
          mediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t),
          msgProtobuf: t,
          retryCount: a,
          type: S,
          useStatelessSession: h,
        }),
        L = await o("WAWebSimpleSignalPNToFBIDMigration").genFbidBotPersonaType(
          u,
        );
      return {
        node: g({
          agentEngagementType: s,
          botAttrs: y,
          destinationWids: [].concat(p, [u]),
          isFeedback: c,
          personaType: L != null ? L : null,
          sharedEnc: R,
        }),
        shouldHaveIdentity:
          S === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
        type: S,
      };
    }
    async function _(t, n, a, i, l, s, u) {
      try {
        var c = await o(
            "WAWebCoexV2RelayOneShotEncrypt",
          ).encryptCoexV2RelayOneShot({
            coexV2SelfHosted: s,
            editType: a,
            msg: t,
            msgProtobuf: o(
              "WAWebCoexV2ProtoSanitize",
            ).sanitizeCoexV2RelayMessage(n),
            retryCount: l != null ? l : 0,
          }),
          d = c.ciphertext,
          m = c.type,
          p = o("WAWap").wap(
            "enc",
            {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(m),
              session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(d)
                ? o("WAWap").CUSTOM_STRING("pq")
                : o("WAWap").DROP_ATTR,
              state:
                m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                  ? o("WAWap").CUSTOM_STRING("false")
                  : o("WAWap").DROP_ATTR,
              count:
                l != null && l > 0 ? o("WAWap").INT(l) : o("WAWap").DROP_ATTR,
            },
            d,
          );
        return {
          node: g({
            agentEngagementType: null,
            botAttrs: u,
            destinationWids: i,
            isFeedback: !1,
            personaType: null,
            sharedEnc: p,
          }),
          shouldHaveIdentity:
            m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
          type: m,
        };
      } catch (t) {
        if (
          (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to build relay bot node",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-relay-bot-node-build-failed"),
          t instanceof o("WAWebHandleMsgError").MessageValidationError)
        )
          throw t;
        return null;
      }
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
          var d = b(c);
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
    async function h(e, t, n) {
      try {
        await o(
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
    }
    function y(e) {
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
    function C(e, t) {
      return e == null
        ? t == null
          ? []
          : [t]
        : t == null || b(e) === b(t)
          ? [e]
          : [e, t];
    }
    function b(e) {
      return o("WAWebCommsWapMd").DEVICE_JID(e).toString();
    }
    ((l.finalizeCoexV2AgentContribution = u),
      (l.buildCoexV2RelayContribution = c),
      (l.prepareCoexV2AgentPayload = d),
      (l.genCoexV2AgentSharedEncNode = m),
      (l.genCoexV2InvokedAgentRetryBotNode = p),
      (l.genCoexV2RelayBotNodeForTargets = _),
      (l.genCoexV2BotNode = g));
  },
  98,
);
