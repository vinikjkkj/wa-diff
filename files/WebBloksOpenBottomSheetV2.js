__d(
  "WebBloksOpenBottomSheetV2",
  ["WebBloksScreen"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      e.objectSet.navigationManager.push(
        o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
          e.objectSet,
          t,
          { isModal: !0, ownerContext: e },
        ),
      );
    }
    l.default = e;
  },
  98,
);
