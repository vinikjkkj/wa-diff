__d(
  "WAWebSlashCommandsReminderToast",
  [
    "fbt",
    "WAWebScheduledMsgDay",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: d(e, new Date()) }),
      );
    }
    function d(e, t) {
      var n = o("WAWebScheduledMsgDay").getScheduledMsgDay(e, t),
        r = n.date,
        a = n.day,
        i = n.time;
      return a === "today"
        ? s._(/*BTDS*/ "Reminder set for {time}", [s._param("time", i)])
        : a === "tomorrow"
          ? s._(/*BTDS*/ "Reminder set for tomorrow at {time}", [
              s._param("time", i),
            ])
          : a === "later"
            ? s._(/*BTDS*/ "Reminder set for {date} at {time}", [
                s._param("date", r),
                s._param("time", i),
              ])
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    a,
                );
              })();
    }
    ((l.showReminderSetToast = c), (l.getReminderSetText = d));
  },
  226,
);
