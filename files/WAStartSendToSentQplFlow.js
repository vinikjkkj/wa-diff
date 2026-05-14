__d(
  "WAStartSendToSentQplFlow",
  ["$InternalEnum", "QPLFlow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e5,
      s = n("$InternalEnum")({
        Image: "image",
        Video: "video",
        Audio: "audio",
        Document: "document",
        Ptt: "ptt",
        Sticker: "sticker",
        Gif: "gif",
        Text: "text",
        Unknown: "unknown",
      }),
      u = n("$InternalEnum")({
        Individual: "individual",
        Group: "group",
        Channel: "channel",
        Status: "status",
        Broadcast: "broadcast",
      }),
      c = n("$InternalEnum")({
        ClickSend: "click_send",
        MsgSaved: "msg_saved",
        MsgRendered: "msg_rendered",
        MediaUploadStart: "media_upload_start",
        MediaUploadEnd: "media_upload_end",
        EncryptStart: "encrypt_start",
        EncryptEnd: "encrypt_end",
        StanzaWritten: "stanza_written",
        ServerAckSent: "server_ack_sent",
      });
    function d(t) {
      var n = t.chatType,
        r = t.event,
        a = t.messageType;
      return o("QPLFlow").startQPLFlow(r, {
        annotations: {
          string: { chatType: n.valueOf(), messageType: a.valueOf() },
        },
        timeoutInMs: e,
      });
    }
    ((l.SendToSentMessageType = s),
      (l.SendToSentChatType = u),
      (l.SendToSentPoint = c),
      (l.startSendToSentQplFlow = d));
  },
  98,
);
