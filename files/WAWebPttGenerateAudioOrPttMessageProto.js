__d(
  "WAWebPttGenerateAudioOrPttMessageProto",
  [
    "invariant",
    "WALogger",
    "WATypeUtils",
    "WAWebAudioMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      var n = t.contextInfo,
        a = t.json,
        i = t.mediaMetadata;
      i || s(0, 66891);
      var l = a.mimetype || i.mimetype,
        u = i.duration,
        c = a.waveform || i.waveform,
        d = u != null && o("WATypeUtils").isString(u) ? parseInt(u, 10) : u,
        m = {
          url: i.url,
          mimetype: l,
          directPath: i.directPath,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(i.filehash),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(i.encFilehash),
          seconds: d,
          ptt: a.type === "ptt",
          fileLength: o("WATypeUtils").isNumber(a.size) ? a.size : void 0,
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(i.mediaKey),
          mediaKeyTimestamp: o("WATypeUtils").isNumber(i.mediaKeyTimestamp)
            ? i.mediaKeyTimestamp
            : void 0,
          contextInfo: n,
          streamingSidecar: a.streamingSidecar,
          viewOnce: a.isViewOnce,
        };
      return (
        c &&
          (o("WAWebAudioMessageProtoUtils").validateWaveform(c)
            ? (m.waveform = c.buffer)
            : o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Outgoing waveform with invalid size: ",
                      "",
                    ])),
                  c.byteLength,
                )
                .sendLogs("outgoing-waveform-invalid-size")),
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(
          a.type ? "ptt" : "audio",
          m,
          r("WAWebWid").isNewsletter(a.to),
        ),
        { audioMessage: m }
      );
    }
    l.default = u;
  },
  98,
);
