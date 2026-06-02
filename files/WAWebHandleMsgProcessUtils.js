__d(
  "WAWebHandleMsgProcessUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizCoexGatingUtils",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBPollsUpsertVotes",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebGetMessageCache",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgValidate",
    "WAWebIcdcHandlerApi",
    "WAWebLastAddOnDBSerialization",
    "WAWebOfflineDeviceCache",
    "WAWebReactionDataUtils",
    "WAWebShouldUpdateLastAddOnPreview",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "cr:10197",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = {
        msg: e,
        receiptInfo: { externalId: e.id.id, from: e.from, author: t.author },
      };
      o("WAWebGetMessageCache").getMessageCache().addMessages([n], !1);
    }
    async function u(t, n) {
      if (
        (t.offline == null &&
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "processDecryptedMessageProto: msgId::",
                  ", message decrypted: ",
                ])),
              t.externalId,
            )
            .tags("messaging"),
        !t.isHsm && n.highlyStructuredMessage)
      )
        throw new (o("WAWebHandleMsgCommon").HsmMismatchError)();
      var r = null;
      if (!(await o("WAWebHandleMsgValidate").isFromKnownDevice(t.author))) {
        var a = o("WAWebWidFactory").asUserWidOrThrow(t.author);
        throw (
          t.offline == null
            ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                [a],
                null,
                null,
              )
            : o(
                "WAWebOfflineDeviceCache",
              ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                String(a),
                null,
              ),
          new (o("WAWebHandleMsgError").UnknownDeviceMessageError)(
            "[messaging] msgId::" +
              t.externalId +
              ", processDecryptedMessageProto: reject message from unknown device",
          )
        );
      }
      return (
        n.messageContextInfo &&
          (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            (r = t.chat.isUser()
              ? await o("WAWebIcdcHandlerApi").handleHostedIcdcMetadataInline(
                  t.chat,
                  t.author,
                  n.messageContextInfo,
                )
              : null),
          o("WAWebIcdcHandlerApi").handleICDCData(
            t.author,
            t.chat.isUser() ? t.chat : null,
            n.messageContextInfo,
          )),
        r
      );
    }
    async function c(e) {
      var t = e.msg,
        n = e.msgInfo,
        r = e.reparsing;
      if (n.offline != null && !r) return s(t, n);
      await o("WAWebBackendApi").frontendSendAndReceive(
        "processEphemeralSyncResponse",
        { msg: t },
      );
    }
    async function d(e, t, n) {
      if (t.offline != null && !n) return s(e, t);
      await o("WAWebBackendApi").frontendSendAndReceive(
        "processKeepInChatMessage",
        { keepInChatMessage: e, allowNotification: !0 },
      );
    }
    async function m(e, t, n) {
      var r = e;
      if (t.offline != null && !n) return s(r, t);
      await o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs([r], n);
    }
    async function p(e) {
      var t = await o("WAWebDBPollsUpsertVotes").upsertVotesDb(e);
      (o("WAWebBackendApi").frontendFireAndForget(
        "upsertVotesModelCollection",
        { votes: t, votesToRemove: null, restoredFromDb: !0 },
      ),
        await _(
          t.map(function (e) {
            return o(
              "WAWebLastAddOnDBSerialization",
            ).lastAddOnPreviewCandidateFromVoteData(e, !1);
          }),
        ));
    }
    async function _(e) {
      var t = await o(
        "WAWebShouldUpdateLastAddOnPreview",
      ).filterChatsWithAddOnPreviewUpdates(e);
      t.size > 0 &&
        (await o(
          "WAWebDBUpdateLastAddOnPreviewChat",
        ).updateDatabaseForLastAddOnPreview(t),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateChatLastAddOnPreview",
          { chatMap: t },
        ));
    }
    async function f(e) {
      var t = e.map(function (e) {
          return o(
            "WAWebReactionDataUtils",
          ).webMsgInfoReactionTypeToReactionsRow(e);
        }),
        n =
          "reaction received: " +
          t
            .map(function (e) {
              return e.msgKey.toString() + " to " + e.parentMsgKey;
            })
            .toString() +
          ";",
        r = await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(
          t,
        );
      return (
        r &&
          (await _(
            r.map(function (e) {
              return o(
                "WAWebLastAddOnDBSerialization",
              ).lastAddOnPreviewCandidateFromReactionRowType(e);
            }),
          )),
        r
      );
    }
    ((l.preProcessMsg = u),
      (l.processEphemeralSyncResponseMsg = c),
      (l.processKeepInChatMsg = d),
      (l.processEditProtocolMsg = m),
      (l.storePollVotesBulk = p),
      (l.storeReactionMsgBulk = f));
  },
  98,
);
