__d(
  "WAWebSnackbarDeleteUndoWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumSnackbarActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SnackbarDeleteUndo: [
            3628,
            {
              isAGroup: [1, e.TYPES.BOOLEAN],
              mediaType: [6, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messagesUndeleted: [2, e.TYPES.INTEGER],
              snackbarActionType: [
                3,
                o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE,
              ],
              threadId: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SnackbarDeleteUndo: [] },
      );
    l.SnackbarDeleteUndoWamEvent = s;
  },
  98,
);
