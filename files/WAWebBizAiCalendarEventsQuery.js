__d(
  "WAWebBizAiCalendarEventsQuery",
  ["WAWebBizAiCalendarEventsQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiCalendarEventsQuery.graphql"));
    function u(e) {
      var t,
        n =
          e == null || (t = e.meta_ai_biz_agent_wa_get_calendar_events) == null
            ? void 0
            : t.calendar_events;
      return n == null
        ? []
        : n.map(function (e) {
            var t, n, r, o, a, i;
            return {
              appointmentDetailsFormJson: e.appointment_details_form_json,
              consumerLid:
                (t = (n = e.consumer_uid) == null ? void 0 : n.lid) != null
                  ? t
                  : null,
              consumerPn:
                (r = (o = e.consumer_uid) == null ? void 0 : o.pn) != null
                  ? r
                  : null,
              endDateTime: e.end_date_time,
              id: e.id,
              location: (a = e.location) != null ? a : null,
              locationType: e.location_type,
              startDateTime: e.start_date_time,
              summary: c(e.summary),
              timezoneId: e.timezone_id,
              videoConferenceLink:
                (i = e.video_conference_link) != null ? i : null,
            };
          });
    }
    function c(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    function d(e) {
      var t = m(e);
      if (t == null) return [];
      var n = [];
      for (var r of Object.keys(t)) {
        var o = r.trim(),
          a = p(t[r]);
        o !== "" && a !== "" && n.push({ label: o, value: a });
      }
      return n;
    }
    function m(e) {
      if (e == null || e === "") return null;
      var t = null;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
    }
    function p(e) {
      return typeof e == "string"
        ? e.trim()
        : typeof e == "number" || typeof e == "boolean"
          ? String(e)
          : "";
    }
    ((l.CALENDAR_EVENTS_QUERY = s),
      (l.normalizeCalendarEvents = u),
      (l.parseAppointmentDetailsForm = d));
  },
  98,
);
