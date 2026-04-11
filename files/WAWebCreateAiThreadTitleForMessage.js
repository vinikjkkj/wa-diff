__d(
  "WAWebCreateAiThreadTitleForMessage",
  ["WALogger", "WAWebMsgType", "fbs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (
        t.body != null &&
        t.type !== o("WAWebMsgType").MSG_TYPE.IMAGE &&
        t.type !== o("WAWebMsgType").MSG_TYPE.VIDEO &&
        t.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT
      )
        return t.body;
      if (t.caption != null) return t.caption;
      var n = t.type;
      switch (n) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return r("fbs")._(/*BTDS*/ "New image").toString();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return r("fbs")._(/*BTDS*/ "New video").toString();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return r("fbs")._(/*BTDS*/ "New audio").toString();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return r("fbs")._(/*BTDS*/ "New document").toString();
        default:
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Encountered unexpected message type: ",
                  "",
                ])),
              n,
            )
            .tags("ai-threads")
            .sendLogs(
              "createAiThreadTitleForMessage: unsupported message type",
            );
          return;
      }
    }
    l.createAiThreadTitleForMessage = s;
  },
  226,
);
