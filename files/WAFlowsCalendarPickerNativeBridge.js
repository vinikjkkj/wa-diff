__d(
  "WAFlowsCalendarPickerNativeBridge",
  [
    "WAFlowsBridgeEvents",
    "WAFlowsCalendarPickerUtils",
    "WAFlowsGetFocusDate",
    "WAFlowsNativeState",
    "WAFlowsRegisterNativeFormValueCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r, a) {
        var e = a.dateValue,
          i = a.endDateLabel,
          l = a.endDateValue,
          s = a.includeDays,
          u = a.isRange,
          d = a.label,
          m = a.maxDate,
          p = a.maxDays,
          _ = a.minDate,
          f = a.minDays,
          g = a.name,
          h = a.onClose,
          y = a.source,
          C = a.unavailableDates,
          b = o("WAFlowsGetFocusDate").getFocusDate(e, l, y, _, m, f),
          v = o("WAFlowsCalendarPickerUtils").getISODateWithoutDay(b),
          S = o("WAFlowsCalendarPickerUtils").getISODate(b),
          R = y === "end" ? l : e;
        (t({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsShowNativeInputDialogComponent,
          payload: {
            input_type: "CalendarPicker",
            input_name: g,
            params: {
              title: y === "end" ? i : d,
              initial_date: r === "android" ? R || S : R,
              min_date: o("WAFlowsCalendarPickerUtils").getDerivedMinDate(
                e,
                l,
                y,
                _,
                m,
                f,
                p,
              ),
              max_date: o("WAFlowsCalendarPickerUtils").getDerivedMaxDate(
                e,
                l,
                y,
                _,
                m,
                f,
                p,
              ),
              unavailable_dates: C,
              include_days: s,
              focus_date: v,
            },
          },
          hasCallback: !1,
          fallBackDataForWeb: void 0,
        }),
          o(
            "WAFlowsRegisterNativeFormValueCallback",
          ).WAFlowsRegisterNativeFormValueChangeCallback(
            n,
            function () {
              (h(), c());
            },
            function (t) {
              return o("WAFlowsCalendarPickerUtils").getFormattedDate(
                t,
                e,
                l,
                y,
                u,
              );
            },
          ),
          o(
            "WAFlowsRegisterNativeFormValueCallback",
          ).WAFlowsRegisterNativeFormValueCancelCallback(function () {
            (h(), c());
          }));
      },
      s = function (t) {
        d(t, !0, o("WAFlowsCalendarPickerUtils").getDialogOverlayColor());
      },
      u = function (t) {
        d(t, !1);
      },
      c = function () {
        (o("WAFlowsNativeState").NativeStateChangeEventEmitter.remove(
          "WAFOnNativeComponentValueChange",
        ),
          o("WAFlowsNativeState").NativeStateChangeEventEmitter.remove(
            "WAFOnNativeComponentValueCancel",
          ));
      },
      d = function (t, n, r) {
        t({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsShowOverlay,
          payload: { show_overlay: n, overlay_color: r },
          hasCallback: !1,
          fallBackDataForWeb: void 0,
        });
      };
    ((l.openNativeCalendar = e),
      (l.showNativeOverlay = s),
      (l.hideNativeOverlay = u));
  },
  98,
);
