__d(
  "WAWebContactManagerChatJid",
  ["WALogger", "WAWebWidFactory", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      try {
        return o("WAWebWidToJid").widToChatJid(
          o("WAWebWidFactory").createWid(t),
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ContactManager] Contact row id is not a chat jid: ",
                  "",
                ])),
              String(t),
            )
            .sendLogs("contact-manager-contact-row-not-chat-jid", {
              sampling: 0.01,
            }),
          null
        );
      }
    }
    l.toChatJidOrNull = s;
  },
  98,
);
