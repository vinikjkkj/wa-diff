__d(
  "WAWebConfirmPendingSubgroupSuggestions",
  ["fbt", "WAWebConfirmPopup.react"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return o("WAWebConfirmPopup.react").waitForConfirmPopup({
        title: s._(/*BTDS*/ "Approve all pending group suggestions?"),
        okText: s._(/*BTDS*/ "Approve"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-settings",
        },
        children: s._(
          /*BTDS*/ 'If you change this setting to "Everyone," all pending group suggestions will be approved.',
        ),
      });
    }
    l.default = e;
  },
  226,
);
