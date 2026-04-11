__d(
  "WAWebParseProtocolHistorySyncNotificationMessageProto",
  [
    "WAWebE2EProtoParserApi",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumDownloadOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        r = e.messageProtobuf,
        a = e.msgContext,
        i = r.protocolMessage;
      if (
        i != null &&
        a === "relay" &&
        i.type ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .HISTORY_SYNC_NOTIFICATION
      ) {
        var l = i.historySyncNotification;
        if (l != null) {
          var s = {
              directPath: l.directPath,
              encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(
                l.fileEncSha256,
              ),
              filehash: o("WAWebE2EProtoParserApi").decodeBytes(l.fileSha256),
              mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(l.mediaKey),
              type: "md-msg-hist",
              downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                .DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC,
            },
            u = babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.Protocol,
              subtype: "history_sync_notification",
              historySyncMetaData: {
                historySyncNotification: l,
                downloadOptions: s,
                progress:
                  (i == null || (t = i.historySyncNotification) == null
                    ? void 0
                    : t.progress) || 0,
              },
            });
          return { msgData: u, contextInfo: void 0 };
        }
      }
    }
    l.default = e;
  },
  98,
);
