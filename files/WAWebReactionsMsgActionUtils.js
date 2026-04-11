__d(
  "WAWebReactionsMsgActionUtils",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n = !!(
          (t = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) != null &&
          t.isCag
        ),
        r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      return n ? r : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
    }
    function c(e, t, n, r, o, a, i) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, u, c) {
            var d,
              m = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                i,
                o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
              );
            if (
              (a.equals(m.from) ||
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "create reaction: ",
                        " and ",
                        " do not match",
                      ])),
                    a.toLogString(),
                    m.from.toLogString(),
                  )
                  .tags("messaging")
                  .sendLogs("reactionMsgData: from is not matching", {
                    sampling: 0.01,
                  }),
              u.equals(m.to) ||
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "create reaction: ",
                        " and ",
                        " do not match",
                      ])),
                    u.toLogString(),
                    m.to.toLogString(),
                  )
                  .tags("messaging")
                  .sendLogs("reactionMsgData: to is not matching", {
                    sampling: 0.01,
                  }),
              (d = o("WAWebFrontendMsgGetters").getChat(t).groupMetadata) !=
                null && d.isCag)
            ) {
              var p = self.crypto.getRandomValues(new Uint8Array(12)),
                _ = {
                  type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                  encode: { text: n, senderTimestampMs: c },
                },
                f = yield o("WAWebAddonEncryption").encryptAddOn(_, {
                  messageSecret: r("WANullthrows")(
                    t.messageSecret,
                    "Parent message missing message secret",
                  ),
                  iv: p,
                  stanzaId: t.id.id,
                  originalMessageSender: o("WAWebMsgGetters").getOriginalSender(
                    t.unsafe(),
                  ),
                  addOnSender: o("WAWebWidFactory").asUserWidOrThrow(a),
                }),
                g = f.encPayload;
              return {
                id: i,
                type: o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
                kind: o("WAWebMsgType").MsgKind.ReactionEncrypted,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: l,
                from: a,
                to: u,
                author: m.author,
                ack: o("WAWebAck").ACK.CLOCK,
                targetMessageKey: o(
                  "WAWebReferentialMsgKey",
                ).getReferentialMsgKey(t),
                encPayload: g,
                encIv: p.buffer,
              };
            }
            return {
              id: i,
              reactionParentKey: o(
                "WAWebReferentialMsgKey",
              ).getReferentialMsgKey(t),
              type: o("WAWebMsgType").MSG_TYPE.REACTION,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
              t: l,
              from: a,
              to: u,
              author: m.author,
              ack: o("WAWebAck").ACK.CLOCK,
              reactionText: n,
              reactionTimestamp: c,
              read: !0,
            };
          },
        )),
        d.apply(this, arguments)
      );
    }
    ((l.getFromForReactionMessage = u), (l.getReactionMsgData = c));
  },
  98,
);
