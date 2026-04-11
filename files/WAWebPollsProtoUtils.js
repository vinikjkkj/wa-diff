__d(
  "WAWebPollsProtoUtils",
  ["WALogger", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t) {
      var n = t.pollContentType,
        r = t.options;
      if (n === o("WAWebProtobufsE2E.pb").Message$PollContentType.IMAGE) {
        if (r == null) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Missing options in pollCreationMessage",
                ])),
            )
            .sendLogs("missing-options-in-pollCreationMessage");
          return;
        }
        var a = r.some(function (e) {
          var t = e.optionHash;
          return t == null || t === "";
        });
        a &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Outgoing photo poll with missing option hashes",
                ])),
            )
            .sendLogs("outgoing-photo-poll-missing-option-hashes");
      }
    }
    function m(e) {
      var t = e.correctAnswer,
        n = e.pollType;
      if (n === o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ) {
        if (t == null) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Missing correctAnswer in pollCreationMessage",
                ])),
            )
            .sendLogs("missing-correctAnswer-in-pollCreationMessage");
          return;
        }
      } else if (t) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "correctAnswer present in pollCreationMessage",
              ])),
          )
          .sendLogs("invalid-correctAnswer-in-pollCreationMessage");
        return;
      }
    }
    ((l.validatePhotoPollCreationMessage = d),
      (l.validatePollCreationMessage = m));
  },
  98,
);
