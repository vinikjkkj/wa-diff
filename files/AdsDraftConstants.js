__d(
  "AdsDraftConstants",
  ["fbt", "LoadObject"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "backgroundPublish",
      u = s._(/*BTDS*/ "View details"),
      c = s._(/*BTDS*/ "Learn more"),
      d = s._(/*BTDS*/ "Publish didn't complete"),
      m = r("LoadObject")
        .loading({ creatorModuleID: i.id })
        .setValue("__EMPTY_DRAFT_PLACEHOLDER_:)");
    ((l.BACKGROUND_PUBLISH_USE_CASE = e),
      (l.VIEW_DETAILS_CALL_TO_ACTION = u),
      (l.SHOPS_ADS_LEARN_MORE_CALL_TO_ACTION = c),
      (l.NO_CHANGES_APPLIED_HEADER = d),
      (l.EMPTY_DRAFT_LOADOBJECT = m));
  },
  226,
);
