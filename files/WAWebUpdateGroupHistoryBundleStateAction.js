__d(
  "WAWebUpdateGroupHistoryBundleStateAction",
  ["WAWebMsgCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebMsgCollection").MsgCollection.get(e);
      n == null || n.groupHistoryBundleMetadata == null || s(n, t);
    }
    function s(e, t) {
      e.groupHistoryBundleMetadata != null &&
        e.set({
          groupHistoryBundleMetadata: babelHelpers.extends(
            {},
            e.groupHistoryBundleMetadata,
            { processState: t },
          ),
        });
    }
    l.updateGroupHistoryBundleState = e;
  },
  98,
);
