__d(
  "WAWebGenerateGroupHistoryBundleMsgData",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenGenerator",
    "WAWebJidToWid",
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
        p = t.targetStartMessageTime;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "generateGroupHistoryBundleMsgData",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t;
            if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled())
              return (d || (d = n("Promise"))).reject(
                r("err")("[group-history] Group history sender is not enabled"),
              );
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
            var _ = o("WAWebJidToWid").groupJidToWid(a),
              f = yield o(
                "WAWebRetrieveMessagesForBundle",
              ).retrieveMessagesForBundle(_, m, p);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Retrieved ",
                  " messages",
                ])),
              f.length,
            );
            var g = p != null ? p : o("WATimeUtils").unixTime(),
              h = o("WAWebABProps").getABPropConfigValue(
                "group_history_messages_time_limit_secs",
              ),
              y = g - h,
              C = new Set(
                f.map(function (e) {
                  return e.id;
                }),
              ),
              b = yield o(
                "WAWebRetrieveOutOfWindowPinsForBundle",
              ).retrieveOutOfWindowPinsForBundle(_, y, C),
              v =
                b.length > 0
                  ? b.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    })
                  : void 0,
              S = yield o(
                "WAWebSerializeGroupHistoryMessages",
              ).serializeGroupHistoryMessages(
                f.map(function (e) {
                  return o("WAWebDBMessageSerialization").messageFromDbRow(e);
                }),
                v,
              ),
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
                remote: _,
                id: yield r("WAWebMsgKey").newId(),
                participant: k,
              }),
              T = null;
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistorySenderReportingTokenEnabled() &&
              ((T = yield o(
                "WAWebGroupHistoryReportingTokenGenerator",
              ).genGroupHistoryReportingTokens(
                L,
                E,
                o("WAWebWidToJid").widToUserJid(k),
                a,
              )),
              T != null &&
                (yield o(
                  "WAWebGroupHistoryReportingTokenDBUtils",
                ).storeGroupHistoryReportingTokenInfos(I.toString(), T, !0)));
            var D = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "GroupHistoryBundle",
              }),
              x = yield r("WAWebUploadManager").encryptAndUpload({
                blob: R,
                signal: new AbortController().signal,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.CHAT_GROUP,
                isViewOnce: !1,
                uploadQpl: D,
              });
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Uploaded history bundle to ",
                  "",
                ])),
              x.url,
            );
            var $ = yield o("WAMediaCalculateFilehash").calculateFilehash(R),
              P = (t = f.at(-1)) == null ? void 0 : t.t,
              N =
                b.length > 0
                  ? Math.min.apply(
                      Math,
                      b.map(function (e) {
                        var t;
                        return (t = e.t) != null ? t : 1 / 0;
                      }),
                    )
                  : void 0,
              M = N != null && P != null ? Math.min(P, N) : N != null ? N : P,
              w = babelHelpers.extends(
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
                  filehash: $,
                  encFilehash: x.encFilehash,
                  mediaKey: x.mediaKey,
                  mediaKeyTimestamp: x.mediaKeyTimestamp,
                  directPath: x.directPath,
                  size: R.byteLength,
                  mimetype: "application/protobuf",
                  groupHistoryBundleMetadata: {
                    messageCount: f.length,
                    historyReceivers: i,
                    nonHistoryReceivers: l,
                    oldestMessageTimestampInWindow: P,
                    oldestMessageTimestampInBundle: M,
                    processState: o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.NONE,
                  },
                },
              );
            return w;
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.generateGroupHistoryBundleMsgData = m;
  },
  98,
);
