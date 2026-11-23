__d(
  "WAWebHandleMsgV2",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAStanzaRootTag",
    "WATimeUtils",
    "WAWap",
    "WAWebCoexV2PeerRelayAdmission",
    "WAWebCoexV2UsernameInfoUpdate",
    "WAWebCreateNackFromStanza",
    "WAWebDBReportingTokenUtils",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgTypes",
    "WAWebHandleMsgUnparsableStanza",
    "WAWebHandleMsgV2InPlace",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebLearnUsernamesFromIncomingMsg",
    "WAWebMaybePostOfflineCountTooHighMetric",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebNoop",
    "WAWebOfflineHandler",
    "WAWebPaymentsODS",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebStatusSessionGatingUtils",
    "WAWebUnavailableFanoutPlaceholderType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5e3;
    async function d(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.isGroupStatusStanza,
        a = r === void 0 ? !1 : r,
        i = n.isStatusStanza,
        l = i === void 0 ? !1 : i,
        s = o("WAWebHandleMsgParser").incomingMsgParser.parse(e);
      if (s.error)
        return y(
          e,
          o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
            e,
            s.error,
          ),
          l,
        );
      var u = s.success;
      (a && (u.msgMeta.isGroupStatus = !0),
        l && (u.msgMeta.isStatusStanza = !0),
        m(u));
      var c = u.msgInfo,
        d = u.msgMeta,
        _ = c.offline != null;
      return o("WAWebMessageReceiveFlow")
        .trackMessageReceive(
          {
            chatType: c.type,
            isOffline: _,
            persistedQueue: !0,
            queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
            queueImpl: "one_queue",
            stanzaId: c.externalId,
            stanzaType: d.type,
          },
          function (t, n) {
            var r = n.onInboundDrainWaited,
              a = null;
            return o("WAWebMessageQueue")
              .admitStanzaTaskToOneQueue({
                handler: async function (n) {
                  return ((a = await t(n)), a != null ? a : "NO_ACK");
                },
                isOffline: _,
                msgCategory: c.category,
                onInboundDrainWaited: r,
                props: {
                  offline: _ ? parseInt(String(e.attrs.offline), 10) : null,
                  serverTs: o("WATimeUtils").castToUnixTime(c.ts),
                  tag: o("WAStanzaRootTag").STANZA_ROOT_TAG.MESSAGE,
                },
              })
              .then(
                function () {
                  return a;
                },
                function (e) {
                  return o(
                    "WAWebMessageQueueTimeout",
                  ).handleMessageQueueTimeout(e, "msg");
                },
              );
          },
          function () {
            return p({ input: u, isStatusStanza: l, node: e });
          },
        )
        .then(function () {
          return "NO_ACK";
        });
    }
    function m(e) {
      (o(
        "WAWebMaybePostOfflineCountTooHighMetric",
      ).maybePostOfflineCountTooHigh(e),
        e.dehydratedPaymentNode === "pay"
          ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
          : e.dehydratedPaymentNode === "transaction" &&
            o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
      var t = e.msgInfo;
      ((t.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
        t.offline != null &&
          (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.addOfflinePendingMessage(),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete() &&
          delete t.offline);
    }
    async function p(t) {
      var n,
        r = t.input,
        a = t.isStatusStanza,
        i = t.node,
        l = r.ghsReportingTokenInfos,
        u = r.msgBotInfo,
        c = r.msgInfo,
        d = r.msgMeta;
      if (
        (o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsgV2: chat=",
                " id=",
                " offline=",
                "",
              ])),
            c.chat.toLogString(),
            c.externalId,
            (n = c.offline) != null ? n : "",
          )
          .tags("messaging"),
        o("WAWebInboundMsgPersistedQueueAdapter").isInboundMsgQueueStopped())
      )
        return (
          o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover([
            c.externalId,
          ]),
          null
        );
      c.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs();
      var m = o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake(),
        p = await _(i, c, a);
      if (p != null) return p;
      var y = o(
          "WAWebCoexV2UsernameInfoUpdate",
        ).maybeGetCoexV2UsernameInfoUpdatePlan(c, d),
        C = [];
      await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
        entryPoint: "pq-intake",
        deferredWrites: m != null ? { lidMetadataUpdates: C } : void 0,
        msgInfo: c,
        msgMeta: d,
      });
      var b = o(
        "WAWebLearnUsernamesFromIncomingMsg",
      ).collectUsernameInfoUpdatesFromIncomingMsg(c, y);
      b.length > 0 &&
        (await o(
          "WAWebLearnUsernamesFromIncomingMsg",
        ).storeUsernamesLearnedFromIncomingMsg(
          b,
          m != null
            ? function () {
                return h(c.externalId);
              }
            : null,
        ));
      var v = o("WAWebMsgProcessingApiUtils").messageInfoToKey(c);
      if (
        (l != null &&
          l.length > 0 &&
          (await o(
            "WAWebGroupHistoryReportingTokenDBUtils",
          ).storeGroupHistoryReportingTokenInfos(v.toString(), l, !1),
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Stored ",
                  " reporting tokens for ",
                  "",
                ])),
              l.length,
              c.externalId,
            )
            .tags("messaging", "wa-ice", "group-history")),
        d.isUnavailable)
      )
        return (
          o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
            incomingMsgReportingTokenInfo: r.reportingTokenInfo,
            msgKey: v,
            msgTs: c.ts,
            stanzaId: c.externalId,
          }),
          f(m, {
            input: r,
            lidMetadataUpdates: C,
            msgKey: v,
            node: i,
            placeholderType: o(
              "WAWebUnavailableFanoutPlaceholderType",
            ).getUnavailableFanoutPlaceholderType({
              msgBotInfo: u,
              msgMeta: d,
            }),
          })
        );
      var S = g(r);
      return m == null
        ? o("WAWebHandleMsgV2InPlace").processMsgInPlace({
            input: r,
            msgKey: v,
            node: i,
            sessionScope: S,
          })
        : m({
            input: r,
            lidMetadataUpdates: C,
            msgKey: v,
            node: i,
            sessionScope: S,
          });
    }
    async function _(e, t, n) {
      var r = o("WAWebCoexV2PeerRelayAdmission").getCoexV2PeerRelaySender(t);
      if (r == null) return null;
      var a = await o(
        "WAWebCoexV2PeerRelayAdmission",
      ).checkCoexV2PeerRelayAdmission(e, t, r);
      return a == null
        ? null
        : (t.offline != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.processMessageDecryptResult(
              o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
            ),
          y(e, a, n));
    }
    function f(e, t) {
      var n = t.input,
        r = t.lidMetadataUpdates,
        a = t.msgKey,
        i = t.node,
        l = t.placeholderType;
      return e == null
        ? o("WAWebHandleMsgV2InPlace").writePlaceholderInPlace({
            input: n,
            placeholderType: l,
          })
        : e({
            input: n,
            lidMetadataUpdates: r,
            msgKey: a,
            node: i,
            presetPlaceholder: {
              kind: "ciphertext",
              placeholderAddReason: null,
              placeholderType: l,
            },
            sessionScope: null,
          });
    }
    function g(e) {
      var t = e.encs,
        n = e.msgInfo,
        r = e.msgMeta,
        a = o("WAWebMsgProcessingApiUtils").getFrom(n),
        i = o("WAWebStatusSessionGatingUtils").isIncomingStatusSessionContext({
          from: a,
          isGroupStatus: r.isGroupStatus,
          metaSessionScope: r.metaSessionScope,
        });
      if (i) {
        var l,
          s = o(
            "WAWebStatusSessionGatingUtils",
          ).shouldUseStatusSessionForIncomingMessage(r.metaSessionScope)
            ? o("WAWebSessionScope").SessionScope.STATUS
            : null;
        return (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[status-session] grpStatus=",
                  " scope=",
                  " metaScope=",
                  "",
                ])),
              String(r.isGroupStatus === !0),
              s != null ? s : o("WAWebSessionScope").SessionScope.DEFAULT,
              (l = r.metaSessionScope) != null ? l : "none",
            )
            .tags("messaging"),
          s
        );
      }
      return t.some(function (e) {
        return e.sessionType === "pq";
      })
        ? o("WAWebSessionScope").SessionScope.PQ
        : null;
    }
    async function h(e) {
      var t = globalThis.performance.now();
      (await o("WAPromiseTimeout")
        .promiseTimeout(
          o(
            "WAWebInboundMsgPersistedQueueAdapter",
          ).waitForInboundMsgDrainIdle(),
          c,
        )
        .catch(r("WAWebNoop")),
        o("WAWebMessageReceiveFlow").addMessageReceiveInboundDrainWait(
          e,
          globalThis.performance.now() - t,
        ));
    }
    function y(e, t, n) {
      return o("WAWebCreateNackFromStanza").createNackFromStanza(
        n ? new (o("WAWap").WapNode)("status", e.attrs, e.content) : e,
        t,
      );
    }
    l.default = d;
  },
  98,
);
