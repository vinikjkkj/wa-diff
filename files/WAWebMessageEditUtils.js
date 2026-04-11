__d(
  "WAWebMessageEditUtils",
  ["$InternalEnum", "WATimeUtils", "WAWebABProps", "WAWebMsgType", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2592e3;
    function u(e) {
      if (e) return s;
      var t = o("WAWebABProps").getABPropConfigValue(
        "message_edit_window_duration_seconds",
      );
      return t == null || t <= 0 ? 1200 : t;
    }
    function c(e) {
      if (e) return s;
      var t = o("WAWebABProps").getABPropConfigValue(
        "message_edit_client_entry_point_limit_seconds",
      );
      return t == null || t <= 0 ? 900 : t;
    }
    var d = n("$InternalEnum").Mirrored([
      "TextEdit",
      "CaptionEdit",
      "EventEdit",
      "RichResponseEdit",
      "LoadingMediaEdit",
      "PollEdit",
    ]);
    function m(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          return d.TextEdit;
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return d.CaptionEdit;
        case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
          return d.EventEdit;
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
          return d.PollEdit;
        case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
          return d.RichResponseEdit;
        case o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA:
          return d.LoadingMediaEdit;
        default:
          return null;
      }
    }
    var p = [
      (e = o("WAWebMsgType")).MSG_TYPE.CHAT,
      e.MSG_TYPE.IMAGE,
      e.MSG_TYPE.VIDEO,
      e.MSG_TYPE.DOCUMENT,
      e.MSG_TYPE.EVENT_CREATION,
      e.MSG_TYPE.POLL_CREATION,
      e.MSG_TYPE.RICH_RESPONSE,
      e.MSG_TYPE.LOADING_MEDIA,
    ];
    function _(e) {
      return !!p.includes(e);
    }
    function f(e) {
      var t = e.editTsInSeconds,
        n = e.msgKey,
        a = e.parentTsInSeconds,
        i = r("WAWebWid").isNewsletter(n.remote);
      return t != null ? t < a + u(i) : o("WATimeUtils").unixTime() < a + u(i);
    }
    function g(e) {
      var t = e.msgKey,
        n = e.parentTsInSeconds;
      return (
        o("WATimeUtils").unixTime() <
        n + c(r("WAWebWid").isNewsletter(t.remote))
      );
    }
    ((l.getMessageEditProcessingWindowDurationSeconds = u),
      (l.MsgEditType = d),
      (l.getMsgEditType = m),
      (l.msgTypeSupportsEditing = _),
      (l.isParentWithinEditProcessingWindow = f),
      (l.isParentWithinEditUIWindow = g));
  },
  98,
);
