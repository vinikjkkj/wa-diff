__d(
  "WAWebCommentUtils",
  [
    "WANullthrows",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebApiUpdateReplyCount",
    "WAWebBackendApi",
    "WAWebCommentGroupBy",
    "WAWebCommentMsgDataConversion",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProcessCommentMsg",
    "WAWebReferentialMsgKey",
    "WAWebSchemaChat",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          a = n.id.remote.toString(),
          i = n.t;
        if (i != null) {
          var l = t.get(a);
          t.set(a, {
            id: a.toString(),
            t: Math.max(i, (r = l == null ? void 0 : l.t) != null ? r : 0),
            unreadCount:
              (l == null ? void 0 : l.unreadCount) != null
                ? l.unreadCount + 1
                : 1,
          });
        }
      }
      for (var s of t.entries()) {
        var u = s[0],
          c = s[1],
          d = await o("WAWebSchemaChat").getChatTable().get(u);
        d != null && c.unreadCount != null && (c.unreadCount += d.unreadCount);
      }
      var m = Array.from(t.values());
      return m;
    }
    async function s(e, t, n) {
      var a = self.crypto.getRandomValues(new Uint8Array(12)),
        i = { type: o("WAWebMsgType").MsgKind.CommentDecrypted, encode: n },
        l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
          o("WAWebMsgType").MsgKind.CommentDecrypted,
          e,
        ),
        s = await o("WAWebAddonEncryption").encryptAddOn(i, {
          messageSecret: l,
          iv: a,
          originalMessageSender: o("WAWebWidFactory").asUserWidOrThrow(
            r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
          ),
          addOnSender: o("WAWebWidFactory").asUserWidOrThrow(t),
          stanzaId: e.id.id,
        }),
        u = s.encPayload,
        c = s.reportingTokenContent;
      return babelHelpers.extends(
        {
          encIv: a.buffer,
          encPayload: u,
          targetMessageKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(e),
        },
        c != null && { reportingTokenContent: c },
      );
    }
    async function u(e, t, n) {
      var r = o("WAWebCommentGroupBy").commentCountByParents(e, n);
      (await o("WAWebApiUpdateReplyCount").updateReplyCountInParentMsgs(r, t),
        o("WAWebBackendApi").frontendFireAndForget("updateReplyCount", {
          replyCountMap: r,
        }));
    }
    async function c(e, t) {
      var n = await o("WAWebProcessCommentMsg").processEncCommentMsg(e, t);
      return o("WAWebCommentMsgDataConversion").convertMessageToCommentMsgData(
        n,
        e,
      );
    }
    async function d(e, t) {
      var n = { conversation: e.body };
      e.messageSecret != null &&
        (n.messageContextInfo = {
          messageSecret: e.messageSecret.buffer,
          threadId: [],
        });
      var a = o("WAWebWidFactory").asUserWidOrThrow(
        r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
      );
      return babelHelpers.extends(
        { id: e.id },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        await s(t, a, n),
        {
          type: o("WAWebMsgType").MSG_TYPE.COMMENT,
          kind: o("WAWebMsgType").MsgKind.CommentEncrypted,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          t: e.t,
          addonEncrypted: !0,
          ack: e.ack,
          messageSecret: e.messageSecret,
        },
      );
    }
    ((l.genChatIdToLastTimestamp = e),
      (l.getEncCommentsFields = s),
      (l.updateReplyCount = u),
      (l.encCommentMsgDataToCommentMsgData = c),
      (l.commentMsgDataToEncCommentMsgData = d));
  },
  98,
);
