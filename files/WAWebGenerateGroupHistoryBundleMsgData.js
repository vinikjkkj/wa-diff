__d(
  "WAWebGenerateGroupHistoryBundleMsgData",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenGenerator",
    "WAWebJidToWid",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRetrieveMessagesForBundle",
    "WAWebRetrieveOutOfWindowPinsForBundle",
    "WAWebSerializeGroupHistoryMessages",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumUploadOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t) {
      var n = t.chatId,
        a = t.historyReceivers,
        i = t.nonHistoryReceivers,
        l = t.selectedMessageCount,
        d = t.targetStartMessageTime;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "generateGroupHistoryBundleMsgData",
          async function () {
            var t,
              p = o("WAWebWidFactory").asGroupWidOrThrow(
                o("WAWebJidToWid").groupJidToWid(n),
              );
            if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(p))
              return Promise.reject(
                r("err")("[group-history] Group history sender is not enabled"),
              );
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] sendBundle chat=",
                  " receivers=",
                  "",
                ])),
              n,
              a,
            );
            var _ = await o(
              "WAWebRetrieveMessagesForBundle",
            ).retrieveMessagesForBundle(p, l, d);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Retrieved ",
                  " messages",
                ])),
              _.length,
            );
            var f = d != null ? d : o("WATimeUtils").unixTime(),
              g = o(
                "WAWebGroupHistoryGating",
              ).getGroupHistoryMessagesTimeLimitSecs(p),
              h = f - g,
              y = new Set(
                _.map(function (e) {
                  return e.id;
                }),
              ),
              C = await o(
                "WAWebRetrieveOutOfWindowPinsForBundle",
              ).retrieveOutOfWindowPinsForBundle(p, h, y, d),
              b = _.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              }),
              v =
                C.length > 0
                  ? C.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    })
                  : void 0,
              S = await o(
                "WAWebSerializeGroupHistoryMessages",
              ).serializeGroupHistoryMessages(b, v),
              R = S.compressedBundle,
              L = S.encodedBytes;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Serialized messages ",
                  " bytes",
                ])),
              R.byteLength,
            );
            var E = self.crypto.getRandomValues(new Uint8Array(32)),
              k = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              I = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: p,
                id: await r("WAWebMsgKey").newId(),
                participant: k,
              }),
              T = null;
            if (
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySenderReportingTokenEnabled(p)
            ) {
              var D = m(b, v),
                x = o(
                  "WAWebMessagingGatingUtils",
                ).getSenderReportingTokenVersion();
              ((T = await o(
                "WAWebGroupHistoryReportingTokenGenerator",
              ).genGroupHistoryReportingTokens(
                L,
                E,
                o("WAWebWidToJid").widToUserJid(k),
                n,
                x,
                D,
              )),
                T != null &&
                  (await o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(I.toString(), T, !0)));
            }
            var $ = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "GroupHistoryBundle",
              }),
              P = await r("WAWebUploadManager").encryptAndUpload({
                blob: R,
                signal: new AbortController().signal,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.CHAT_GROUP,
                isViewOnce: !1,
                uploadQpl: $,
              });
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Uploaded history bundle to ",
                  "",
                ])),
              P.url,
            );
            var N = await o("WAMediaCalculateFilehash").calculateFilehash(R),
              M = (t = _.at(-1)) == null ? void 0 : t.t,
              w =
                C.length > 0
                  ? Math.min.apply(
                      Math,
                      C.map(function (e) {
                        var t;
                        return (t = e.t) != null ? t : 1 / 0;
                      }),
                    )
                  : void 0,
              A = w != null && M != null ? Math.min(M, w) : w != null ? w : M,
              F = babelHelpers.extends(
                { id: I },
                o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                  I,
                  o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
                ),
                {
                  type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
                  subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                    .MessageHistoryBundle,
                  kind: o("WAWebMsgType").MsgKind.MessageHistoryBundle,
                  viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  t: o("WATimeUtils").unixTime(),
                  isNewMsg: !0,
                  local: !0,
                  ack: o("WAWebAck").ACK.CLOCK,
                  messageSecret: E,
                  filehash: N,
                  encFilehash: P.encFilehash,
                  mediaKey: P.mediaKey,
                  mediaKeyTimestamp: P.mediaKeyTimestamp,
                  directPath: P.directPath,
                  size: R.byteLength,
                  mimetype: "application/protobuf",
                  groupHistoryBundleMetadata: {
                    messageCount: _.length,
                    historyReceivers: a,
                    nonHistoryReceivers: i,
                    oldestMessageTimestampInWindow: M,
                    oldestMessageTimestampInBundle: A,
                    processState: o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.NONE,
                  },
                },
              );
            return F;
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e, t) {
      var n = new Map();
      for (var r of [].concat(e, t != null ? t : []))
        r.type === "revoked" &&
          r.protocolMessageKey != null &&
          n.set(r.id.id, r.protocolMessageKey.id);
      return n;
    }
    l.generateGroupHistoryBundleMsgData = d;
  },
  98,
);
