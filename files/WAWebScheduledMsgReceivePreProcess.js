__d(
  "WAWebScheduledMsgReceivePreProcess",
  [
    "WALogger",
    "WAWebConditionalRevealPreProcessor",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebLogReceivedMessages",
    "WAWebOfflineAttrUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t, n;
      return (t = e.conditionalRevealMessage) != null
        ? t
        : (n = e.deviceSentMessage) == null || (n = n.message) == null
          ? void 0
          : n.conditionalRevealMessage;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a,
            i,
            l,
            u,
            c,
            d = t.conditionalRevealMessage,
            m = t.info,
            p = t.msgMeta,
            _ = t.plaintext,
            f = t.proto,
            g = t.reportingTokenInfo;
          o("WAWebConditionalRevealPreProcessor").assertScheduledMsgStanzaType(
            p == null ? void 0 : p.type,
          );
          var h =
              f.conditionalRevealMessage == null
                ? (n =
                    (r =
                      (a = f.deviceSentMessage) == null
                        ? void 0
                        : a.destinationJid) != null
                      ? r
                      : (i = m.chat) == null
                        ? void 0
                        : i.toString()) != null
                  ? n
                  : ""
                : (l = (u = m.chat) == null ? void 0 : u.toString()) != null
                  ? l
                  : "",
            y = null;
          try {
            y = o("WAWebWidFactory").createWid(h);
          } catch (e) {
            y = null;
          }
          if (
            y != null &&
            (yield o(
              "WAWebLimitSharingAcp2HideReceivedMsgs",
            ).hideScheduledMsgInAcp2RestrictedChat({
              chatWid: y,
              messageType: m.type,
              t: m.ts,
            }))
          )
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] hidden in ACP2-restricted chat, skip processing msgId=",
                    "",
                  ])),
                m.externalId,
              ),
              { skipProcessing: !0 }
            );
          var C =
              m.author != null &&
              !o("WAWebUserPrefsMeUser").isMeAccount(m.author)
                ? m.author.toString()
                : null,
            b = yield o(
              "WAWebConditionalRevealPreProcessor",
            ).maybePreProcessConditionalRevealForReceive({
              conditionalRevealMessage: d,
              msgId: m.externalId,
              outerMessageContextInfo: f.messageContextInfo,
              rawChatJid: h,
              reportingTokenInfo: g,
              senderJid: C,
              stanzaScheduledMsgMeta:
                (c = p == null ? void 0 : p.scheduledMsgMeta) != null
                  ? c
                  : null,
            });
          if (b.isRevealPending) {
            var v =
              m.author != null &&
              o("WAWebUserPrefsMeUser").isMeAccount(m.author);
            return (
              v ||
                o(
                  "WAWebLogReceivedMessages",
                ).logConditionalRevealMessageReceive({
                  chatWid: m.chat,
                  clientReceivedTsMillis: m.clientReceivedTsMillis,
                  msgProcessStartTsMillis: m.msgProcessStartTsMillis,
                  offline: o("WAWebOfflineAttrUtils").toOfflineNumber(
                    m.offline,
                  ),
                  tsMillis: m.ts * 1e3,
                }),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] reveal-pending, skip processing msgId=",
                    "",
                  ])),
                m.externalId,
              ),
              { skipProcessing: !0 }
            );
          }
          return b.proto != null && b.protoBytes != null
            ? {
                skipProcessing: !1,
                proto: b.proto,
                plaintext: b.protoBytes,
                scheduledMsgViewMode: b.scheduledMsgViewMode,
              }
            : {
                skipProcessing: !1,
                proto: f,
                plaintext: _,
                scheduledMsgViewMode: b.scheduledMsgViewMode,
              };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getIncomingConditionalRevealMessage = u),
      (l.preProcessIncomingScheduledMsg = c));
  },
  98,
);
