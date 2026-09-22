__d(
  "WAWebScheduledMsgConstants",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = "scheduled_message",
      u = 30,
      c = 1,
      d = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
      ]),
      m = 419,
      p = 32,
      _ = 12;
    ((l.SCHEDULED_MSG_REVEAL_KEY_RETENTION_DAYS = e),
      (l.SCHEDULED_MSG_META_TYPE = s),
      (l.SCHEDULED_MSG_MAX_PER_CHAT = u),
      (l.MAX_MEDIA_MSGS_TO_SCHEDULE = c),
      (l.SCHEDULABLE_MEDIA_TYPES = d),
      (l.SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE = m),
      (l.SCHEDULED_MSG_REVEAL_KEY_BYTES = p),
      (l.SCHEDULED_MSG_REVEAL_KEY_IV_BYTES = _));
  },
  98,
);
