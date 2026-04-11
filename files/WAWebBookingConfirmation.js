__d(
  "WAWebBookingConfirmation",
  [
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {
      return o("WAWebABProps").getABPropConfigValue(
        "booking_confirmation_enabled_wa_web",
      );
    };
    function s(e) {
      try {
        var t,
          n,
          r,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
          _,
          f,
          g,
          h = JSON.parse(e);
        if (
          h.start_datetime == null ||
          (h.location == null &&
            h.booking_url == null &&
            h.phone_number == null)
        )
          return null;
        var y =
          h.display_content != null
            ? {
                displayLanguage:
                  (t = h.display_content.display_language) != null ? t : null,
                displayMeetingType:
                  (n = h.display_content.display_meeting_type) != null
                    ? n
                    : null,
                displayBottomSheetHeader:
                  (r = h.display_content.display_bottom_sheet_header) != null
                    ? r
                    : null,
                displayAddToCalendarCtaText:
                  (o = h.display_content.display_add_to_calendar_cta_text) !=
                  null
                    ? o
                    : null,
                displayViewOnMapsCtaText:
                  (a = h.display_content.display_view_on_maps_cta_text) != null
                    ? a
                    : null,
                displayManageBookingCtaText:
                  (i = h.display_content.display_manage_booking_cta_text) !=
                  null
                    ? i
                    : null,
                displayManageBookingNotSupportedText:
                  (l =
                    h.display_content
                      .display_manage_booking_not_supported_text) != null
                    ? l
                    : null,
                displayReadMore:
                  (s = h.display_content.display_read_more) != null ? s : null,
              }
            : null;
        return {
          startDatetime: h.start_datetime,
          endDatetime: (u = h.end_datetime) != null ? u : null,
          location: (c = h.location) != null ? c : null,
          bookingUrl: (d = h.booking_url) != null ? d : null,
          phoneNumber: (m = h.phone_number) != null ? m : null,
          bookingManagementUrl:
            (p = h.booking_management_url) != null ? p : null,
          description: (_ = h.description) != null ? _ : null,
          email: (f = h.email) != null ? f : null,
          displayText: (g = h.display_text) != null ? g : null,
          displayContent: y,
        };
      } catch (e) {
        return null;
      }
    }
    var u = function (t) {
        var e, n;
        if (
          t.nativeFlowName !==
            r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION ||
          t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
          !((e = t.interactivePayload) != null && e.buttons)
        )
          return null;
        var a =
          (n = t.interactivePayload.buttons[0]) == null
            ? void 0
            : n.buttonParamsJson;
        return a == null ? null : s(a);
      },
      c = function (t) {
        if (
          (t == null ? void 0 : t.name) !==
          r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
        )
          return null;
        var e = t.buttonParamsJson;
        return e == null ? null : s(e);
      };
    ((l.isBookingConfirmationEnabled = e),
      (l.getBookingConfirmationInfo = u),
      (l.parseBookingConfirmationButton = c));
  },
  98,
);
