__d(
  "WAWebScheduledMsgRetryPicker",
  [
    "WALogger",
    "WAWebModalManager",
    "WAWebScheduleTimePickerLoadable",
    "getErrorSafe",
    "once",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.isGroup,
        a = t.onSchedule,
        i = t.scheduledTimestampS,
        l = r("once")(function (t) {
          (o("WAWebModalManager").closeModalManager(),
            a(t).catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Retried schedule failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("scheduled-msg-retry-send-fail");
            }));
        });
      o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebScheduleTimePickerLoadable").WAWebScheduleTimePickerLoadable,
          {
            initialScheduledTimestampS: i,
            isGroup: n,
            onCancel: o("WAWebModalManager").closeModalManager,
            onSchedule: l,
          },
        ),
      );
    }
    l.openScheduledMsgRetryPicker = c;
  },
  98,
);
