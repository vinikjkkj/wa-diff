__d(
  "WAWebBizAIAppointmentCreateState",
  ["WALogger", "WAWebBizAIAppointmentEditorState", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return o(
        "WAWebBizAIAppointmentEditorState",
      ).getCreateAppointmentEditorInitialState({
        availability: t.availability,
        calendars: e.calendars,
        isNativeCalendar: e.isNativeCalendar,
        timeZoneId: d(t.timezoneId),
      });
    }
    function c(e, t) {
      return {
        availability: e.availability,
        calendarId: t.isNativeCalendar ? null : e.calendarId,
        customerFields: e.customerFields.map(function (e) {
          return {
            enabled: e.enabled,
            id: e.id,
            label: o(
              "WAWebBizAIAppointmentEditorState",
            ).getCustomerFieldLabelText(e),
          };
        }),
        customLocation: e.customLocation,
        durationMinutes: e.durationMinutes,
        inPersonLocation: e.inPersonLocation,
        isNativeCalendar: t.isNativeCalendar,
        locationTypes: e.locationTypes,
        thirdPartyCalendarTypeStr: t.thirdPartyCalendarTypeStr,
        timeZoneId: e.timeZoneId,
        title: e.title,
      };
    }
    function d(t) {
      if (t != null && t !== "") return t;
      try {
        var n = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return n == null || n === ""
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Browser time zone is unavailable; defaulting to UTC",
                  ])),
              )
              .sendLogs("biz-ai-appointment-timezone-empty-fallback"),
            "UTC")
          : n;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to resolve browser time zone; defaulting to UTC",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("biz-ai-appointment-timezone-fallback"),
          "UTC"
        );
      }
    }
    ((l.getAppointmentCreateInitialState = u),
      (l.toAppointmentCreateDraft = c));
  },
  98,
);
