__d(
  "AdsAdBuilderDeleteDraftReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.deletingState;
          return babelHelpers.extends({}, t, { deletingState: e });
        },
      },
      l = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { deletingState: "deleted" });
        },
      },
      s = {
        reduce: function (t, n) {
          return n.showDialog
            ? t
            : babelHelpers.extends({}, t, { deletingState: "waiting" });
        },
      };
    ((i.onAdsAdBuilderDeleteDraft = e),
      (i.onAdsDraftDraftFragmentBatchDeleted = l),
      (i.onDeleteConfirmDialogOpen = s));
  },
  66,
);
