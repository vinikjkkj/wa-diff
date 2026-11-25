__d(
  "WAWebSharableEventAddToCalendarAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGuestCoreConsts",
    "WAWebLazyLoadedRetriable",
    "WAWebNullFunc",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "WAWebSharableEventInviteStatus",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventTiming",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipCallLinkUrl",
    "getErrorSafe",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebGuestEventsCalendarUtils")
          .__setRef("WAWebSharableEventAddToCalendarAction")
          .load();
      }, "WAWebGuestEventsCalendarUtils"),
      _ = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebSharableEventAddToCalendarUserJourneyLogger",
        )
          .__setRef("WAWebSharableEventAddToCalendarAction")
          .load();
      }, "WAWebSharableEventAddToCalendarUserJourneyLogger"),
      f = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebOpenEventCalendarPickerAction",
        )
          .__setRef("WAWebSharableEventAddToCalendarAction")
          .load();
      }, "WAWebOpenEventCalendarPickerAction");
    async function g(t, n) {
      if (
        o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("add-to-calendar")
      ) {
        var a = r("gkx")("9092");
        try {
          var i,
            l = await p(),
            c = l.downloadGuestEventCalendarICSFile,
            d = l.getGuestEventCalendarDetails,
            _ = l.getGuestEventCalendarICSFile,
            g =
              (i = t.callLinkUrl) != null
                ? i
                : o("WAWebVoipCallLinkUrl").getCallLinkUrl(
                    t.callLinkToken,
                    t.callLinkMediaType !==
                      o("WAWebSharableEventStorageEnums")
                        .SharableEventCallLinkMediaType.Voice,
                  ),
            h = d(
              {
                description: S(t.description, g),
                endTsSec: o(
                  "WAWebSharableEventTiming",
                ).computeSharableEventEffectiveEndTsSec(t),
                eventLinkToken: t.id,
                eventType: "full",
                locationAddress: t.locationAddress,
                locationLat: t.locationLatitude,
                locationLong: t.locationLongitude,
                locationName: t.locationName,
                locationRegion: null,
                startTsSec: t.startTsSec,
                title: t.name,
              },
              o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN,
            );
          if (a) {
            var y,
              C = await f(),
              b = C.openEventCalendarPicker;
            await b(
              babelHelpers.extends({}, h, {
                callLink: g,
                webLocation:
                  (y = t.locationName) != null ? y : t.locationAddress,
              }),
              function () {
                v(t.id, n);
              },
            );
          } else (c(_(h)), await v(t.id, n));
        } catch (t) {
          if (!a) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][calendar] building the .ics file failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
            return;
          }
          (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][calendar] opening the calendar picker failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("sharable-event-calendar-open-failed"),
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, {
                id: o("WAWebToast.react").genId(),
                msg: s._(/*BTDS*/ ""),
              }),
            ));
        }
      }
    }
    function h(e, t) {
      return Math.min(
        t,
        e +
          o("WAWebABProps").getABPropConfigValue(
            "events_v2_hide_add_to_calendar_post_start_window_sec",
          ),
      );
    }
    function y(e, t, n) {
      return (
        o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
        o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(
          e,
        ) &&
        !t.isCanceled &&
        n <
          h(
            t.startTsSec,
            o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
              t,
            ),
          )
      );
    }
    function C(e) {
      var t,
        n,
        a = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          e.sharableEventInviteStartTime,
        ),
        i = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          e.sharableEventInviteEndTime,
        );
      return a == null ||
        o("WAWebSharableEventInviteStatus").isSharableEventInviteAccessLost(
          e.sharableEventInviteStatus,
        ) ||
        !y(
          o("WAWebSharableEventGatingUtils")
            .SharableEventAddToCalendarEntryPoint.MessageContextMenu,
          {
            startTsSec: a,
            endTsSec: i,
            isCanceled: o(
              "WAWebSharableEventInviteStatus",
            ).isSharableEventInviteCanceled(
              e.sharableEventInviteStatus,
              e.sharableEventInviteIsCanceled,
            ),
          },
          o("WATimeUtils").unixTime(),
        )
        ? null
        : {
            eventId: (t = e.sharableEventInviteId) != null ? t : "",
            title: (n = e.sharableEventInviteTitle) != null ? n : "",
            caption: e.sharableEventInviteCaption,
            startTsSec: a,
            endTsSec: i,
            callLink: e.sharableEventInviteCallLink,
          };
    }
    function b(e, t) {
      return g(
        {
          id: e.eventId,
          name: e.title,
          description: e.caption,
          startTsSec: e.startTsSec,
          endTsSec: e.endTsSec,
          locationName: null,
          locationAddress: null,
          locationLatitude: null,
          locationLongitude: null,
          callLinkToken: null,
          callLinkMediaType: null,
          callLinkUrl: e.callLink,
        },
        t,
      );
    }
    async function v(e, t) {
      try {
        var n = await _().catch(o("WAWebNullFunc").returnNull);
        n == null || n.logSharableEventAddedToCalendar(e, t);
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][calendar] logging the calendar handoff failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function S(e, t) {
      return [e == null ? void 0 : e.trim(), t].filter(function (e) {
        return e != null && e !== "";
      }).join(`

`);
    }
    ((l.addSharableEventToCalendar = g),
      (l.getSharableEventAddToCalendarHiddenTsSec = h),
      (l.canAddSharableEventToCalendar = y),
      (l.getSharableEventInviteMenuCalendarFields = C),
      (l.addSharableEventInviteToCalendar = b));
  },
  226,
);
