__d(
  "WAWebPathfinderMessageSentFields",
  ["WAWebMsgType", "WAWebWamEnumMediaType", "WAWebWamMsgUtils"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d(e)
        ? {
            type: e.type,
            subtype: e.subtype,
            chatKind: p(e),
            pairedMediaType: e.pairedMediaType,
            associationType: e.associationType,
            mediaType: _(e),
          }
        : null;
    }
    function d(e) {
      return (
        e.id.fromMe &&
        (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
          e.subtype === "share_phone_number")
      );
    }
    var m = new Set(["bot", "c.us", "hosted", "hosted.lid", "lid"]);
    function p(e) {
      var t = e.id.remote.server;
      return t === "g.us" ? "group" : m.has(t) ? "user" : "other";
    }
    function _(e) {
      var t,
        n = f[e.type];
      if (n != null) return n;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.ALBUM &&
        ((t = e.expectedVideoCount) != null ? t : 0) > 0
      )
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.MIXED_COLLECTION;
      var r = o("WAWebWamMsgUtils").getWamMediaType(e);
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        r === o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT
        : r;
    }
    var f =
      ((e = {}),
      (e[(s = o("WAWebMsgType")).MSG_TYPE.COMMENT] = (u = o(
        "WAWebWamEnumMediaType",
      )).MEDIA_TYPE.COMMENT),
      (e[s.MSG_TYPE.INSTANT_IMAGE] = u.MEDIA_TYPE.PHOTO),
      (e[s.MSG_TYPE.MUSIC] = u.MEDIA_TYPE.MUSIC),
      (e[s.MSG_TYPE.RICH_RESPONSE] = u.MEDIA_TYPE.RICH_RESPONSE),
      (e[s.MSG_TYPE.SHARABLE_EVENT_INVITE] = u.MEDIA_TYPE.EVENT_INVITE),
      e);
    ((l.getPathfinderPostedSend = c),
      (l.isUserSend = d),
      (l.getChatKind = p),
      (l.getPathfinderMessageSentMediaType = _));
  },
  98,
);
