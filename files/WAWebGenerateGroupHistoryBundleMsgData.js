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
            var f = o("WAWebJidToWid").groupJidToWid(a),
              g = yield o(
                "WAWebRetrieveMessagesForBundle",
              ).retrieveMessagesForBundle(f, m, _);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Retrieved ",
                  " messages",
                ])),
              g.length,
            );
            var h = _ != null ? _ : o("WATimeUtils").unixTime(),
              y = o("WAWebABProps").getABPropConfigValue(
                "group_history_messages_time_limit_secs",
              ),
              C = h - y,
              b = new Set(
                g.map(function (e) {
                  return e.id;
                }),
              ),
              v = yield o(
                "WAWebRetrieveOutOfWindowPinsForBundle",
              ).retrieveOutOfWindowPinsForBundle(f, C, b, _),
              S = g.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              }),
              R =
                v.length > 0
                  ? v.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    })
                  : void 0,
              L = yield o(
                "WAWebSerializeGroupHistoryMessages",
              ).serializeGroupHistoryMessages(S, R),
              E = L.compressedBundle,
              k = L.encodedBytes;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Serialized messages ",
                  " bytes",
                ])),
              E.byteLength,
            );
            var I = self.crypto.getRandomValues(new Uint8Array(32)),
              T = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              D = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: f,
                id: yield r("WAWebMsgKey").newId(),
                participant: T,
              }),
              x = null;
            if (
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySenderReportingTokenEnabled()
            ) {
              var $ = p(S, R),
                P = o(
                  "WAWebMessagingGatingUtils",
                ).getSenderReportingTokenVersion();
              ((x = yield o(
                "WAWebGroupHistoryReportingTokenGenerator",
              ).genGroupHistoryReportingTokens(
                k,
                I,
                o("WAWebWidToJid").widToUserJid(T),
                a,
                P,
                $,
              )),
                x != null &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(D.toString(), x, !0)));
            }
            var N = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "GroupHistoryBundle",
              }),
              M = yield r("WAWebUploadManager").encryptAndUpload({
                blob: E,
                signal: new AbortController().signal,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.CHAT_GROUP,
                isViewOnce: !1,
                uploadQpl: N,
              });
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Uploaded history bundle to ",
                  "",
                ])),
              M.url,
            );
            var w = yield o("WAMediaCalculateFilehash").calculateFilehash(E),
              A = (t = g.at(-1)) == null ? void 0 : t.t,
              F =
                v.length > 0
                  ? Math.min.apply(
                      Math,
                      v.map(function (e) {
                        var t;
                        return (t = e.t) != null ? t : 1 / 0;
                      }),
                    )
                  : void 0,
              O = F != null && A != null ? Math.min(A, F) : F != null ? F : A,
              B = babelHelpers.extends(
                { id: D },
                o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                  D,
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
                  messageSecret: I,
                  filehash: w,
                  encFilehash: M.encFilehash,
                  mediaKey: M.mediaKey,
                  mediaKeyTimestamp: M.mediaKeyTimestamp,
                  directPath: M.directPath,
                  size: E.byteLength,
                  mimetype: "application/protobuf",
                  groupHistoryBundleMetadata: {
                    messageCount: g.length,
                    historyReceivers: i,
                    nonHistoryReceivers: l,
                    oldestMessageTimestampInWindow: A,
                    oldestMessageTimestampInBundle: O,
                    processState: o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.NONE,
                  },
                },
              );
            return B;
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
