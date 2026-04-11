__d(
  "WAWebAudioMessageProtoUtils",
  ["WALogger", "WAWebE2EProtoParserApi"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      if (o("WAWebE2EProtoParserApi").shouldLogE2eProtoValidation(t, n)) {
        var r = t.type;
        (n.seconds == null
          ? o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "seconds is missing from msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-message-missing-seconds")
          : n.seconds === 0 &&
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "seconds is 0 in msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-message-incorrect-seconds"),
          n.fileLength == null &&
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fileLength is missing from msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-message-missing-fileLength"));
      }
    }
    function d(e) {
      return e.byteLength >= 64 && e.byteLength <= 192;
    }
    ((l.validateRequiredAudioProperties = c), (l.validateWaveform = d));
  },
  98,
);
