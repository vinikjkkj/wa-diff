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
    "WAWebGroupHistoryAgentBundleFilter",
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
    "WAWebUserUtils",
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
            var _ = self.performance.now();
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
            var f = await o(
              "WAWebRetrieveMessagesForBundle",
            ).retrieveMessagesForBundle(p, l, d);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Retrieved ",
                  " messages",
                ])),
              f.length,
            );
            var g = d != null ? d : o("WATimeUtils").unixTime(),
              h = o(
                "WAWebGroupHistoryGating",
              ).getGroupHistoryMessagesTimeLimitSecs(),
              y = g - h,
              C = new Set(
                f.map(function (e) {
                  return e.id;
                }),
              ),
              b = await o(
                "WAWebRetrieveOutOfWindowPinsForBundle",
              ).retrieveOutOfWindowPinsForBundle({
                chatId: p,
                inWindowMessageKeys: C,
                messagesNotOlderThanTimestamp: y,
                targetJoinTime: d,
              }),
              v = f.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              }),
              S =
                b.length > 0
                  ? b.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    })
                  : void 0,
              R = await o(
                "WAWebSerializeGroupHistoryMessages",
              ).serializeGroupHistoryMessages(v, S),
              L = R.compressedBundle,
              E = R.encodedBytes,
              k = R.oowPinsCount,
              I = R.packedCount,
              T = Math.round(self.performance.now() - _);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Serialized messages ",
                  " bytes",
                ])),
              L.byteLength,
            );
            var D = self.crypto.getRandomValues(new Uint8Array(32)),
              x = o("WAWebUserUtils").getMeLidUserOrThrow(),
              $ = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: p,
                id: await r("WAWebMsgKey").newId(),
                participant: x,
              }),
              P = null;
            if (
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySenderReportingTokenEnabled(p)
            ) {
              var N = m(v, S),
                M = o(
                  "WAWebMessagingGatingUtils",
                ).getSenderReportingTokenVersion();
              ((P = await o(
                "WAWebGroupHistoryReportingTokenGenerator",
              ).genGroupHistoryReportingTokens(
                E,
                D,
                o("WAWebWidToJid").widToUserJid(x),
                n,
                M,
                N,
              )),
                P != null &&
                  (await o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos($.toString(), P, !0)));
            }
            var w = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "GroupHistoryBundle",
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                byteLength: L.byteLength,
              }),
              A = await r("WAWebUploadManager").encryptAndUpload({
                blob: L,
                signal: new AbortController().signal,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.CHAT_GROUP,
                fileOrigin: null,
                isViewOnce: !1,
                uploadQpl: w,
              });
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Uploaded history bundle to ",
                  "",
                ])),
              A.url,
            );
            var F = await o("WAMediaCalculateFilehash").calculateFilehash(L),
              O = (t = f.at(-1)) == null ? void 0 : t.t,
              B =
                b.length > 0
                  ? Math.min.apply(
                      Math,
                      b.map(function (e) {
                        var t;
                        return (t = e.t) != null ? t : 1 / 0;
                      }),
                    )
                  : void 0,
              W = B != null && O != null ? Math.min(O, B) : B != null ? B : O,
              q = babelHelpers.extends(
                { id: $ },
                o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                  $,
                  o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
                ),
                {
                  type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
                  subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                    .MessageHistoryBundle,
                  kind: o("WAWebMsgType").MsgKind.MessageHistoryBundle,
                  viewMode: o(
                    "WAWebGroupHistoryAgentBundleFilter",
                  ).isAgentHistoryBundle(a)
                    ? o("WAWebViewMode.flow").ViewModeType.HIDDEN
                    : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  t: o("WATimeUtils").unixTime(),
                  isNewMsg: !0,
                  local: !0,
                  ack: o("WAWebAck").ACK.CLOCK,
                  messageSecret: D,
                  filehash: F,
                  encFilehash: A.encFilehash,
                  mediaKey: A.mediaKey,
                  mediaKeyTimestamp: A.mediaKeyTimestamp,
                  directPath: A.directPath,
                  size: L.byteLength,
                  mimetype: "application/protobuf",
                  groupHistoryBundleMetadata: {
                    messageCount: f.length,
                    historyReceivers: a,
                    nonHistoryReceivers: i,
                    oldestMessageTimestampInWindow: O,
                    oldestMessageTimestampInBundle: W,
                    processState: o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.NONE,
                  },
                },
              );
            return {
              msgData: q,
              stats: {
                buildDurationMs: T,
                deflatedBytes: L.byteLength,
                oowPinsCount: k,
                packedCount: I,
                uncountedCount: 0,
              },
            };
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
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
