__d(
  "WAWebOpenEventCalendarPickerAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebOpenEventCalendarPickerModalAction",
        )
          .__setRef("WAWebOpenEventCalendarPickerAction")
          .load();
      }, "WAWebOpenEventCalendarPickerModalAction");
    async function m(t, n) {
      if (p())
        try {
          var a = await d(),
            i = a.openEventCalendarPickerModal;
          i(t, n);
        } catch (t) {
          (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[events][calendar] loading the calendar picker failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("event-calendar-picker-load-failed"),
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                id: o("WAWebToast.react").genId(),
                msg: s._(/*BTDS*/ ""),
              }),
            ));
        }
    }
    function p() {
      return r("gkx")("9092");
    }
    ((l.openEventCalendarPicker = m), (l.isEventCalendarPickerEnabled = p));
  },
  226,
);
