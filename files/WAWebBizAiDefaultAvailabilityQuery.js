__d(
  "WAWebBizAiDefaultAvailabilityQuery",
  [
    "WALogger",
    "WAWebBizAiAppointmentAvailabilityNormalize",
    "WAWebBizAiDefaultAvailabilityQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiDefaultAvailabilityQuery.graphql"));
    function d(e) {
      var t =
        e == null ? void 0 : e.meta_ai_biz_agent_wa_get_default_availability;
      if (t == null)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Default appointment availability response was empty",
                ])),
            )
            .sendLogs("biz-ai-appointment-default-availability-empty"),
          { availability: [], timezoneId: null }
        );
      var n = t.timezone_id,
        r = o(
          "WAWebBizAiAppointmentAvailabilityNormalize",
        ).normalizeAvailabilityRanges(
          t.availability.map(function (e) {
            return {
              dayOfWeek: e.day_of_week,
              endTimeMinutes: e.end_time_in_min,
              startTimeMinutes: e.start_time_in_min,
            };
          }),
        ),
        a = r.invalidCount,
        i = r.ranges;
      return (
        a > 0 &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "normalizeDefaultAvailability dropped ",
                  " malformed availability ranges",
                ])),
              a,
            )
            .sendLogs("biz-ai-appointment-default-availability-range-invalid"),
        { availability: i, timezoneId: n == null || n === "" ? null : n }
      );
    }
    ((l.DEFAULT_AVAILABILITY_QUERY = c), (l.normalizeDefaultAvailability = d));
  },
  98,
);
