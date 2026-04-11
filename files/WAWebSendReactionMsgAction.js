__d(
  "WAWebSendReactionMsgAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonSendMsgData",
    "WAWebChatGetters",
    "WAWebDBGetReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterSendReactionAction",
    "WAWebReactionsMsgActionUtils",
    "WAWebReactionsUtils",
    "WAWebReferentialMsgKey",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          if (
            o("WAWebChatGetters").getIsNewsletter(
              o("WAWebFrontendMsgGetters").getChat(t),
            )
          )
            return o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterReactionEnabled()
              ? o("WAWebNewsletterSendReactionAction")
                  .sendNewsletterReaction(t, n)
                  .then(function (e) {
                    return { messageSendResult: e };
                  })
              : void 0;
          var i = o("WAWebFrontendMsgGetters").getChat(t).id,
            l = o("WAWebReactionsMsgActionUtils").getFromForReactionMessage(t),
            s = o("WAWebChatGetters").getIsGroup(
              o("WAWebFrontendMsgGetters").getChat(t),
            )
              ? o("WAWebWidFactory").asUserWidOrThrow(l)
              : void 0,
            u = new (r("WAWebMsgKey"))({
              from: l,
              to: i,
              id: yield r("WAWebMsgKey").newId(),
              participant: s,
              selfDir: "out",
            }),
            c = o("WATimeUtils").unixTime(),
            m = c * 1e3,
            p = {
              msgKey: u.toString(),
              parentMsgKey: t.id.toString(),
              senderUserJid: l.toString(),
              reactionText: n,
              timestamp: m,
              orphan: 0,
              read: !0,
              ack: o("WAWebAck").ACK.CLOCK,
            },
            _ = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              u,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            f = yield o(
              "WAWebDBGetReactions",
            ).existsReactionAddressingModeInsensitive({
              parentMsgKey: p.parentMsgKey,
              senderUserJid: p.senderUserJid,
            });
          (f && (m = Math.max(f.timestamp + 1, m)), (p.timestamp = m));
          var g = babelHelpers.extends({ id: u }, _, {
            reactionParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(
              t,
            ),
            type: o("WAWebMsgType").MSG_TYPE.REACTION,
            kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
            t: c,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            ack: o("WAWebAck").ACK.CLOCK,
            reactionText: n,
            reactionTimestamp: m,
            read: !0,
          });
          if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(g))
            return d(g);
          var h = yield o("WAWebReactionsMsgActionUtils").getReactionMsgData(
            t,
            n,
            l,
            u,
            c,
            i,
            m,
          );
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sending reaction: ",
                ", parent: ",
                ", isParentLid: ",
                "",
              ])),
            h.id.id,
            t.id.id,
            (a = t.id.participant) == null ? void 0 : a.isLid(),
          );
          var y = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(
            h,
          );
          if (
            (o("WAWebReactionsUtils").updateRecentReaction(n, m),
            y.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK)
          )
            throw r("err")("Reaction send error");
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.id,
            a = e.reactionParentKey,
            i = e.reactionText,
            l = e.reactionTimestamp;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sending reaction: ",
                ", parent: ",
                ", isParentLid: ",
                "",
              ])),
            n.id,
            a == null ? void 0 : a.id,
            (t = n.participant) == null ? void 0 : t.isLid(),
          );
          var u = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(
            e,
          );
          if (
            (o("WAWebReactionsUtils").updateRecentReaction(i, l),
            u.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK)
          )
            throw r("err")("Reaction send error");
        })),
        m.apply(this, arguments)
      );
    }
    l.sendReactionToMsg = u;
  },
  98,
);
