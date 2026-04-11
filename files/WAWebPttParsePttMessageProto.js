__d(
  "WAWebPttParsePttMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebAudioMessageProtoUtils",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.audioMessage;
      if (a != null) {
        var i = a.ptt;
        if (i === !0) {
          var l = a.contextInfo,
            s = a.backgroundArgb,
            u = a.directPath,
            c = a.mediaKeyTimestamp,
            d = a.mimetype,
            m = a.seconds,
            p = a.streamingSidecar,
            _ = a.viewOnce,
            f = a.waveform,
            g = o(
              "WAWebMediaMessageGetValidatedProperties",
            ).getValidatedMediaMessageProperties(
              a,
              t,
              r,
              o("WAWebMsgType").MSG_TYPE.PTT,
            ),
            h = g.fileEncSha256,
            y = g.fileLength,
            C = g.fileSha256,
            b = g.mediaKey,
            v = g.url,
            S = babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.PTT,
              kind: o("WAWebMsgType").MsgKind.Ptt,
              deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(v),
              directPath: u,
              mimetype: d,
              filehash: o("WAWebE2EProtoParserApi").decodeBytes(C),
              encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(h),
              size: y,
              duration: "" + (m || 0),
              mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(b),
              mediaKeyTimestamp:
                c != null
                  ? o("WALongInt").numberOrThrowIfTooLarge(c)
                  : o("WATimeUtils").unixTime(),
              streamingSidecar: p,
              waveform:
                f && o("WAWebAudioMessageProtoUtils").validateWaveform(f)
                  ? new Uint8Array(f)
                  : void 0,
              backgroundColor: s,
              isViewOnce: _ === !0,
            });
          return (
            o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(S, a),
            o("WAWebAudioMessageProtoUtils").validateRequiredAudioProperties(
              S,
              a,
            ),
            { msgData: S, contextInfo: l }
          );
        }
      }
    }
    l.default = e;
  },
  98,
);
