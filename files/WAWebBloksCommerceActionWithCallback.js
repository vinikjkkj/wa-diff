__d(
  "WAWebBloksCommerceActionWithCallback",
  ["WALogger", "WAWebBloksA2uiReplyMessageUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "a2ui_reply_action",
      m = "success",
      p = "error";
    function _(t, n, r, a) {
      if (n !== d) {
        (o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebBloksCommerceActionWithCallback: unhandled action",
            ])),
        ),
          f(t, a, p));
        return;
      }
      var i = o("WAWebBloksA2uiReplyMessageUtils").resolveA2uiReply(r);
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "A2uiReplyAction: resolved to ",
              "",
            ])),
          i.kind,
        ),
        i.kind === "error")
      ) {
        (o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "A2uiReplyAction: missing context (chatJid/body). Not processing.",
            ])),
        ),
          f(t, a, p));
        return;
      }
      (o("WAWebBloksA2uiReplyMessageUtils")
        .sendA2uiReplyMessage({
          body: i.body,
          chatJid: i.chatJid,
          messageRowId: i.messageRowId,
          paramsJson: i.paramsJson,
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "A2uiReplyAction: failed to send reply",
                ])),
            )
            .sendLogs("a2ui-reply-action-send-failed");
        }),
        f(t, a, m));
    }
    function f(e, t, n) {
      e.executeCatch(t, [n, {}]);
    }
    l.default = _;
  },
  98,
);
