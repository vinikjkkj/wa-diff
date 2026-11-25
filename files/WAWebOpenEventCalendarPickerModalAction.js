__d(
  "WAWebOpenEventCalendarPickerModalAction",
  [
    "WAWebErrorBoundary.react",
    "WAWebEventCalendarPicker.react",
    "WAWebEventCalendarPickerFallback.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          fallback: r("WAWebEventCalendarPickerFallback.react"),
          name: "event-calendar-picker",
          children: s.jsx(r("WAWebEventCalendarPicker.react"), {
            eventDetails: e,
            onAdded: t,
            onDismiss: o("WAWebModalManager").closeModalManager,
          }),
        }),
      );
    }
    l.openEventCalendarPickerModal = u;
  },
  98,
);
