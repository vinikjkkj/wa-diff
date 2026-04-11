__d(
  "WAWebDialogEventLogger",
  ["WAWebDialogEventWamEvent", "WAWebWamEnumDialogEventType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      new (o("WAWebDialogEventWamEvent").DialogEventWamEvent)({
        dialogEventSource: e.source,
        dialogEventType:
          (t = e.eventType) != null
            ? t
            : o("WAWebWamEnumDialogEventType").DIALOG_EVENT_TYPE.CLICK,
        dialogName: e.dialogName,
      }).commit();
    }
    l.default = e;
  },
  98,
);
