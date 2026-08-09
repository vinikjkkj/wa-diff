__d(
  "MpsTypes",
  ["$InternalEnum", "WAStanzaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e;
    }
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(e) {
      return o("WAStanzaUtils").toStanzaId(e);
    }
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    var _ = (e = n("$InternalEnum")).Mirrored(["Send", "Receive"]),
      f = e.Mirrored(["InProgress", "Completed"]),
      g = e({
        Unknown: 0,
        Noop: 1,
        UpsertTopLevel: 2,
        UpsertSupplemental: 3,
        DeleteTopLevel: 4,
        DeleteTopLevelWithPlaceholder: 5,
        Preprocess: 6,
        DeleteSupplemental: 7,
        DeleteThread: 8,
      }),
      h = e({
        AllowOverwriteExistingTopLevel: "allow_overwrite_existing_top_level",
        DidOverwriteExistingTopLevel: "did_overwrite_existing_top_level",
      }),
      y = "EB_VISIBILITY_METADATA";
    function C(e) {
      return e.tags.includes(y);
    }
    ((l.toBytes = s),
      (l.toTimestamp = u),
      (l.toMessageId = c),
      (l.messageIdToStanzaId = d),
      (l.toThreadId = m),
      (l.toSupplementalKey = p),
      (l.InsertionSource = _),
      (l.MawDBMigrationState = f),
      (l.ActionType = g),
      (l.MpsDirectiveTag = h),
      (l.VISIBILITY_METADATA_MESSAGE_TAG = y),
      (l.isVisibilityMetadataMessage = C));
  },
  98,
);
