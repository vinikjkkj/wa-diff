__d(
  "WAWebDialogEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDialogEventType",
    "WAWebWamEnumDialogNameType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DialogEvent: [
          7068,
          {
            dialogEventSource: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            dialogEventType: [
              2,
              o("WAWebWamEnumDialogEventType").DIALOG_EVENT_TYPE,
            ],
            dialogName: [3, o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { DialogEvent: [] },
    );
    l.DialogEventWamEvent = e;
  },
  98,
);
