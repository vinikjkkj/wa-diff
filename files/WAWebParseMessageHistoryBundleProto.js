__d(
  "WAWebParseMessageHistoryBundleProto",
  [
    "WALogger",
    "WAWebE2EProtoParserApi",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebMessageHistoryValidation",
    "WAWebMessageHistoryValidationError",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n,
        r,
        a,
        i = e.baseMessage,
        l = e.messageProtobuf,
        s = l.messageHistoryBundle;
      if (s == null) return null;
      o("WAWebMessageHistoryValidation").validateMessageHistoryBundle(s);
      var d =
          (t = s.messageHistoryMetadata) == null
            ? void 0
            : t.historyReceivers.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(
                  o("WAWebWidFactory").createWid(e),
                );
              }),
        m =
          d === !0 || i.id.fromMe === !0
            ? o("WAWebViewMode.flow").ViewModeType.VISIBLE
            : o("WAWebViewMode.flow").ViewModeType.HIDDEN;
      if (!o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled()) {
        var p;
        return {
          msgData: babelHelpers.extends({}, i, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            viewMode: m,
            futureproofType: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
            futureproofSubtype: "message_history_bundle",
          }),
          contextInfo: (p = s.contextInfo) != null ? p : null,
        };
      }
      var _ = u(s),
        f = babelHelpers.extends({}, i, {
          type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
          kind: "messageHistoryBundle",
          subtype: "message_history_bundle",
          viewMode: m,
          groupHistoryBundleMetadata: s.messageHistoryMetadata
            ? babelHelpers.extends({}, s.messageHistoryMetadata, {
                historyReceivers: s.messageHistoryMetadata.historyReceivers.map(
                  o("WAWebWidFactory").createWid,
                ),
                processState: c(i.groupHistoryBundleInfo),
                nonHistoryReceivers:
                  (n =
                    (r = s.messageHistoryMetadata) == null ||
                    (r = r.nonHistoryReceivers) == null
                      ? void 0
                      : r.map(o("WAWebWidFactory").createWid)) != null
                    ? n
                    : [],
              })
            : null,
          directPath: _ == null ? void 0 : _.directPath,
          encFilehash: _ == null ? void 0 : _.encFilehash,
          filehash: _ == null ? void 0 : _.filehash,
          mediaKey: _ == null ? void 0 : _.mediaKey,
        });
      return {
        msgData: f,
        contextInfo: (a = s.contextInfo) != null ? a : null,
      };
    }
    function u(t) {
      var n = t.directPath,
        r = t.fileEncSha256,
        a = t.fileSha256,
        i = t.mediaKey;
      try {
        var l = o("WAWebE2EProtoParserApi").decodeBytes(a);
        if (l == null)
          throw new (o(
            "WAWebMessageHistoryValidationError",
          ).MessageHistoryValidationError)(
            o("WAWebMessageHistoryValidationError")
              .MessageHistoryValidationErrorCode.MISSING_FILE_SHA256,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (n == null)
          throw new (o(
            "WAWebMessageHistoryValidationError",
          ).MessageHistoryValidationError)(
            o("WAWebMessageHistoryValidationError")
              .MessageHistoryValidationErrorCode.MISSING_DIRECT_PATH,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        return {
          directPath: n,
          encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(r),
          filehash: l,
          mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(i),
          type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
          signal: new AbortController().signal,
          userDownloadAttemptCount: 0,
          downloadOrigin: o("WAWebWamEnumDownloadOriginType")
            .DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC,
        };
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GroupHistory] Failed to download message history bundle",
              ])),
          )
          .sendLogs("group-history-failed-to-download-bundle");
      }
    }
    function c(e) {
      return (function (e) {
        return e ===
          o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState
            .NOT_INJECTED
          ? o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
              .NONE
          : e ===
              o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState
                .INJECTED
            ? o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.INJECTED
            : e ===
                o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState
                  .INJECTED_PARTIAL
              ? o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED_PARTIAL
              : e ===
                  o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState
                    .INJECTION_FAILED
                ? o("WAWebGroupHistoryMsgData.flow")
                    .MessageHistoryBundleProcessState.FAILED
                : o("WAWebGroupHistoryMsgData.flow")
                    .MessageHistoryBundleProcessState.NONE;
      })(e == null ? void 0 : e.processState);
    }
    l.default = s;
  },
  98,
);
