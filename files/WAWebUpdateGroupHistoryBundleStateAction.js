__d(
  "WAWebUpdateGroupHistoryBundleStateAction",
  ["WAWebMsgCollection", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebMsgCollection").MsgCollection.get(e);
          if (!(n == null || n.groupHistoryBundleMetadata == null))
            return n.updateGroupHistoryBundleProcessState(t);
        })),
        s.apply(this, arguments)
      );
    }
    l.updateGroupHistoryBundleState = e;
  },
  98,
);
