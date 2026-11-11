__d(
  "WAWebGenerateGroupHistoryBundleMsgData",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t) {
      var a = t.chatId,
        i = t.historyReceivers,
        l = t.nonHistoryReceivers,
        m = t.selectedMessageCount,
        _ = t.targetStartMessageTime;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "generateGroupHistoryBundleMsgData",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              f = o("WAWebWidFactory").asGroupWidOrThrow(
                o("WAWebJidToWid").groupJidToWid(a),
              );
            if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(f))
              return (d || (d = n("Promise"))).reject(
                r("err")("[group-history] Group history sender is not enabled"),
              );
            var g = self.performance.now();
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] sendBundle chat=",
                  " receivers=",
                  "",
                ])),
              a,
              i,
            );
            var h = yield o(
              "WAWebRetrieveMessagesForBundle",
            ).retrieveMessagesForBundle(f, m, _);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Retrieved ",
                  " messages",
                ])),
              h.length,
            );
            var y = _ != null ? _ : o("WATimeUtils").unixTime(),
              C = o(
                "WAWebGroupHistoryGating",
              ).getGroupHistoryMessagesTimeLimitSecs(),
              b = y - C,
              v = new Set(
                h.map(function (e) {
                  return e.id;
                }),
              ),
              S = yield o(
                "WAWebRetrieveOutOfWindowPinsForBundle",
              ).retrieveOutOfWindowPinsForBundle({
                chatId: f,
                inWindowMessageKeys: v,
                messagesNotOlderThanTimestamp: b,
                targetJoinTime: _,
              }),
              R = h.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              }),
              L =
                S.length > 0
                  ? S.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    })
                  : void 0,
              E = yield o(
                "WAWebSerializeGroupHistoryMessages",
              ).serializeGroupHistoryMessages(R, L),
              k = E.compressedBundle,
              I = E.encodedBytes,
              T = E.oowPinsCount,
              D = E.packedCount,
              x = Math.round(self.performance.now() - g);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Serialized messages ",
                  " bytes",
                ])),
              k.byteLength,
            );
            var $ = self.crypto.getRandomValues(new Uint8Array(32)),
              P = o("WAWebUserUtils").getMeLidUserOrThrow(),
              N = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: f,
                id: yield r("WAWebMsgKey").newId(),
                participant: P,
              }),
              M = null;
            if (
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySenderReportingTokenEnabled(f)
            ) {
              var w = p(R, L),
                A = o(
                  "WAWebMessagingGatingUtils",
                ).getSenderReportingTokenVersion();
              ((M = yield o(
                "WAWebGroupHistoryReportingTokenGenerator",
              ).genGroupHistoryReportingTokens(
                I,
                $,
                o("WAWebWidToJid").widToUserJid(P),
                a,
                A,
                w,
              )),
                M != null &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(N.toString(), M, !0)));
            }
            var F = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "GroupHistoryBundle",
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                byteLength: k.byteLength,
              }),
              O = yield r("WAWebUploadManager").encryptAndUpload({
                blob: k,
                signal: new AbortController().signal,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.CHAT_GROUP,
                fileOrigin: null,
                isViewOnce: !1,
                uploadQpl: F,
              });
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Uploaded history bundle to ",
                  "",
                ])),
              O.url,
            );
            var B = yield o("WAMediaCalculateFilehash").calculateFilehash(k),
              W = (t = h.at(-1)) == null ? void 0 : t.t,
              q =
                S.length > 0
                  ? Math.min.apply(
                      Math,
                      S.map(function (e) {
                        var t;
                        return (t = e.t) != null ? t : 1 / 0;
                      }),
                    )
                  : void 0,
              U = q != null && W != null ? Math.min(W, q) : q != null ? q : W,
              V = babelHelpers.extends(
                { id: N },
                o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                  N,
                  o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
                ),
                {
                  type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
                  subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                    .MessageHistoryBundle,
                  kind: o("WAWebMsgType").MsgKind.MessageHistoryBundle,
                  viewMode: o(
                    "WAWebGroupHistoryAgentBundleFilter",
                  ).isAgentHistoryBundle(i)
                    ? o("WAWebViewMode.flow").ViewModeType.HIDDEN
                    : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  t: o("WATimeUtils").unixTime(),
                  isNewMsg: !0,
                  local: !0,
                  ack: o("WAWebAck").ACK.CLOCK,
                  messageSecret: $,
                  filehash: B,
                  encFilehash: O.encFilehash,
                  mediaKey: O.mediaKey,
                  mediaKeyTimestamp: O.mediaKeyTimestamp,
                  directPath: O.directPath,
                  size: k.byteLength,
                  mimetype: "application/protobuf",
                  groupHistoryBundleMetadata: {
                    messageCount: h.length,
                    historyReceivers: i,
                    nonHistoryReceivers: l,
                    oldestMessageTimestampInWindow: W,
                    oldestMessageTimestampInBundle: U,
                    processState: o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.NONE,
                  },
                },
              );
            return {
              msgData: V,
              stats: {
                buildDurationMs: x,
                deflatedBytes: k.byteLength,
                oowPinsCount: T,
                packedCount: D,
                uncountedCount: 0,
              },
            };
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e, t) {
      var n = new Map();
      for (var r of [].concat(e, t != null ? t : []))
        r.type === "revoked" &&
          r.protocolMessageKey != null &&
          n.set(r.id.id, r.protocolMessageKey.id);
      return n;
    }
    l.generateGroupHistoryBundleMsgData = m;
  },
  98,
);
