__d(
  "WAWebUnavailableFanoutPlaceholderType",
  ["WAWebHandleMsgTypes"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t, n;
      return (t =
        (n = u.find(function (t) {
          return t.applies(e);
        })) == null
          ? void 0
          : n.placeholderType) != null
        ? t
        : o("WAWebHandleMsgTypes").PlaceholderType.FANOUT;
    }
    var u = [
      {
        applies: function (t) {
          var e = t.msgBotInfo;
          return e != null;
        },
        placeholderType: (e = o("WAWebHandleMsgTypes")).PlaceholderType
          .BOT_UNAVAILABLE_FANOUT,
      },
      {
        applies: function (t) {
          var e = t.msgMeta;
          return e.isHostedMsgUnavailable === !0;
        },
        placeholderType: e.PlaceholderType.HOSTED_UNAVAILABLE_FANOUT,
      },
      {
        applies: function (t) {
          var e = t.msgMeta;
          return e.isViewOnceUnavailable === !0;
        },
        placeholderType: e.PlaceholderType.VIEW_ONCE_UNAVAILABLE_FANOUT,
      },
      {
        applies: function (t) {
          var e = t.msgMeta;
          return e.isAcpUnavailable === !0;
        },
        placeholderType: e.PlaceholderType.ACP_UNAVAILABLE_FANOUT,
      },
    ];
    l.getUnavailableFanoutPlaceholderType = s;
  },
  98,
);
