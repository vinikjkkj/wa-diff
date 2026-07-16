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
          n == null || n.groupHistoryBundleMetadata == null || u(n, t);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
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
