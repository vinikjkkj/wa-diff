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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebGuestEventsCalendarUtils")
            .__setRef("WAWebSharableEventAddToCalendarAction")
            .load();
        }),
        "WAWebGuestEventsCalendarUtils",
      ),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventAddToCalendarUserJourneyLogger",
          )
            .__setRef("WAWebSharableEventAddToCalendarAction")
            .load();
        }),
        "WAWebSharableEventAddToCalendarUserJourneyLogger",
      );
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            o(
              "WAWebSharableEventGatingUtils",
            ).isEventsV2OnCompanionEnabledForAction("add-to-calendar")
          ) {
            try {
              var a = yield s(),
                i = a.downloadGuestEventCalendarICSFile,
                l = a.getGuestEventCalendarDetails,
                c = a.getGuestEventCalendarICSFile,
                d = l(
                  {
                    description: g(t),
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
            var m = yield u().catch(o("WAWebNullFunc").returnNull);
            m == null || m.logSharableEventAddedToCalendar(t.id, n);
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return Math.min(
        t,
        e +
          o("WAWebABProps").getABPropConfigValue(
            "events_v2_hide_add_to_calendar_post_start_window_sec",
          ),
      );
    }
    function p(e, t, n) {
      return (
        o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
        o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(
          e,
        ) &&
        !t.isCanceled &&
        n <
          m(
            t.startTsSec,
            o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
              t,
            ),
          )
      );
    }
    function _(e) {
      var t,
        n,
        a = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          e.sharableEventInviteStartTime,
        ),
        i = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          e.sharableEventInviteEndTime,
        );
      return a == null ||
        !o(
          "WAWebSharableEventGatingUtils",
        ).isSharableEventInviteDatetimeEnabled() ||
        o("WAWebSharableEventInviteStatus").isSharableEventInviteAccessLost(
          e.sharableEventInviteStatus,
        ) ||
        !p(
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
    function f(e, t) {
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
    function g(e) {
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
      return [a, r]
        .filter(function (e) {
          return e != null && e !== "";
        })
        .join("\n\n");
    }
    ((l.addSharableEventToCalendar = c),
      (l.getSharableEventAddToCalendarHiddenTsSec = m),
      (l.canAddSharableEventToCalendar = p),
      (l.getSharableEventInviteMenuCalendarFields = _),
      (l.addSharableEventInviteToCalendar = f));
  },
  98,
);
