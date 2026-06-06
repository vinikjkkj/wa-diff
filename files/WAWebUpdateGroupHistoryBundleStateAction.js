__d(
  "WAWebUpdateGroupHistoryBundleStateAction",
  ["WAWebMsgCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebMsgCollection").MsgCollection.get(e);
      if (!(n == null || n.groupHistoryBundleMetadata == null))
        return n.updateGroupHistoryBundleProcessState(t);
    }
    l.updateGroupHistoryBundleState = e;
  },
  98,
);
