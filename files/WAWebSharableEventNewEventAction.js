__d(
  "WAWebSharableEventNewEventAction",
  ["fbt", "WAWebOpenSharableEventCreateFlowAction"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return {
        label: s._(/*BTDS*/ "New event"),
        onPress: o("WAWebOpenSharableEventCreateFlowAction")
          .openSharableEventCreateDialog,
        testid: e,
        variant: "filled",
      };
    }
    l.getSharableEventNewEventAction = e;
  },
  226,
);
