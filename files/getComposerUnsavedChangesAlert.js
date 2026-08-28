__d(
  "getComposerUnsavedChangesAlert",
  ["fbt", "CometComposerDirtyTracker"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return {
        primaryAction: function (n, r) {
          (o("CometComposerDirtyTracker").setIsComposerDirty(
            e.creationSessionID,
            !1,
          ),
            r());
        },
        primaryButtonLabel: s._(/*BTDS*/ "Leave"),
        secondaryButtonLabel: s._(/*BTDS*/ "Keep editing"),
        title: s._(/*BTDS*/ "Leave Page?"),
        warnMessage: s._(
          /*BTDS*/ "You haven't finished your post yet. Do you want to leave without finishing?",
        ),
      };
    }
    l.default = e;
  },
  226,
);
