__d(
  "WAWebChatThreadLoggingCountFields",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        profileViews: 0,
        statusViews: 0,
        statusReplies: 0,
        groupMembershipReplies: 0,
        groupPrivateReplies: 0,
        profileReplies: 0,
        chatOverflowClicks: 0,
        pdpViews: 0,
        ordersSent: 0,
        repliesSent: 0,
        commentsReceived: 0,
      },
      l = Object.freeze(e),
      s = Object.freeze(Object.keys(e));
    function u(e) {
      return s.find(function (t) {
        return t === e;
      });
    }
    ((i.COUNT_FIELDS = l),
      (i.COUNT_FIELD_NAMES = s),
      (i.toMaybeCountActionType = u));
  },
  66,
);
