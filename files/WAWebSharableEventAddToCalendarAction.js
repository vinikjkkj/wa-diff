__d(
  "WAWebSharableEventAddToCalendarAction",
  [
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
    "WAWebVoipCallLinkUrl",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebGuestEventsCalendarUtils")
          .__setRef("WAWebSharableEventAddToCalendarAction")
          .load();
      }, "WAWebGuestEventsCalendarUtils"),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebSharableEventAddToCalendarUserJourneyLogger",
        )
          .__setRef("WAWebSharableEventAddToCalendarAction")
          .load();
      }, "WAWebSharableEventAddToCalendarUserJourneyLogger");
    async function c(t, n) {
      if (
        o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("add-to-calendar")
      ) {
        try {
          var a = await s(),
            i = a.downloadGuestEventCalendarICSFile,
            l = a.getGuestEventCalendarDetails,
            c = a.getGuestEventCalendarICSFile,
            d = l(
              {
                description: f(t),
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
          i(c(d));
        } catch (t) {
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
        var m = await u().catch(o("WAWebNullFunc").returnNull);
        m == null || m.logSharableEventAddedToCalendar(t.id, n);
      }
    }
    function d(e, t) {
      return Math.min(
        t,
        e +
          o("WAWebABProps").getABPropConfigValue(
            "events_v2_hide_add_to_calendar_post_start_window_sec",
          ),
      );
    }
    function m(e, t, n) {
      return (
        o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
        o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(
          e,
        ) &&
        !t.isCanceled &&
        n <
          d(
            t.startTsSec,
            o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
              t,
            ),
          )
      );
    }
    function p(e) {
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
        !m(
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
    function _(e, t) {
      return c(
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
    function f(e) {
      var t,
        n,
        r =
          (t = e.callLinkUrl) != null
            ? t
            : o("WAWebVoipCallLinkUrl").getCallLinkUrl(
                e.callLinkToken,
                e.callLinkMediaType !==
                  o("WAWebSharableEventStorageEnums")
                    .SharableEventCallLinkMediaType.Voice,
              ),
        a = (n = e.description) == null ? void 0 : n.trim();
      return [a, r].filter(function (e) {
        return e != null && e !== "";
      }).join(`

`);
    }
    ((l.addSharableEventToCalendar = c),
      (l.getSharableEventAddToCalendarHiddenTsSec = d),
      (l.canAddSharableEventToCalendar = m),
      (l.getSharableEventInviteMenuCalendarFields = p),
      (l.addSharableEventInviteToCalendar = _));
  },
  98,
);
