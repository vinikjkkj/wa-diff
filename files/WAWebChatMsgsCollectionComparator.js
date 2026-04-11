__d(
  "WAWebChatMsgsCollectionComparator",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e.serverId == null || t.serverId == null
        ? 0
        : e.serverId - t.serverId;
    }
    i.msgComparator = e;
  },
  66,
);
