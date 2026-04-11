__d(
  "WAWebGroupHistoryProtoUtils",
  ["WALogger", "WAWebDecodeJid", "WAWebProtobufMsgKeyUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var n;
      if (t == null) return null;
      if (t.bundleMessageKey == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "bundleMessageKey missing in GroupHistoryIndividualMsgInfo",
              ])),
          ),
          null
        );
      var a = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(
          t.bundleMessageKey,
        ),
        i = o("WAWebDecodeJid").decodeJidAndValidate(
          (n = t.bundleMessageKey) == null ? void 0 : n.participant,
          "groupHistoryIndividualMessageInfo",
        );
      return i instanceof r("WAWebWid")
        ? t.editedAfterReceivedAsHistory == null
          ? (o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "editedAfterReceivedAsHistory missing in GroupHistoryMsgInfo",
                ])),
            ),
            null)
          : {
              isEditedAfterReceivedAsHistory: t.editedAfterReceivedAsHistory,
              bundleMessageKey: a,
              bundleSender: i,
            }
        : (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "bundleSender missing/invalid (GroupHistoryIndividualMsgInfo)",
              ])),
          ),
          null);
    }
    l.getGroupHistoryIndividualMessageInfoMetadataFromProto = c;
  },
  98,
);
