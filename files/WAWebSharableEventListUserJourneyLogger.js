__d(
  "WAWebSharableEventListUserJourneyLogger",
  [
    "WAWebEventV2ListUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSharableEventListFilters",
    "WAWebSharableEventListNavBarOpen",
    "WAWebSharableEventWamActionTs",
    "WAWebWamEnumEventV2ListActionType",
    "WAWebWamEnumEventV2ListEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      var t = o(
          "WAWebSharableEventListNavBarOpen",
        ).consumeSharableEventListOpeningFromNavBar()
          ? o("WAWebWamEnumEventV2ListEntryPoint").EVENT_V2_LIST_ENTRY_POINT
              .NAV_BAR_EVENTS_TAB
          : null,
        n = e;
      if ((n == null ? void 0 : n.isInComposer) === !0 && t == null) {
        n.isInComposer = !1;
        return;
      }
      (n != null &&
        _(
          o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
            .LIST_PAGE_DISMISSED,
        ),
        (e = {
          entryPoint: t,
          hasLoggedListPageShown: !1,
          id: r("WAWebPonyfillsCryptoRandomUUID")(),
          isInComposer: !1,
        }),
        _(
          o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
            .ENTRY_POINT_STARTED,
        ));
    }
    function u() {
      var t;
      ((t = e) == null ? void 0 : t.isInComposer) === !1 &&
        (_(
          o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
            .LIST_PAGE_DISMISSED,
        ),
        (e = null));
    }
    function c(t) {
      var n = e;
      n == null ||
        n.hasLoggedListPageShown ||
        ((n.hasLoggedListPageShown = !0),
        _(
          o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
            .LIST_PAGE_SHOWN,
          t,
        ));
    }
    function d(e) {
      _(
        e === o("WAWebSharableEventListFilters").SharableEventListFilter.All
          ? o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
              .ALL_TAPPED
          : e ===
              o("WAWebSharableEventListFilters").SharableEventListFilter
                .ScheduledCalls
            ? o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
                .SCHEDULED_CALL_TAPPED
            : e ===
                o("WAWebSharableEventListFilters").SharableEventListFilter
                  .NotResponded
              ? o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
                  .NOT_RESPONDED_TAPPED
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })(),
      );
    }
    function m() {
      var t = e;
      t != null &&
        (_(
          o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
            .NEW_EVENT_TAPPED,
        ),
        (t.isInComposer = !0));
    }
    function p() {
      _(
        o("WAWebWamEnumEventV2ListActionType").EVENT_V2_LIST_ACTION_TYPE
          .EVENT_CELL_TAPPED,
      );
    }
    function _(t, n) {
      var r = e;
      if (r != null) {
        var a = {
          actionTs: o(
            "WAWebSharableEventWamActionTs",
          ).getSharableEventWamActionTs(),
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          eventV2ListActionType: t,
          userJourneyFunnelId: r.id,
        };
        (r.entryPoint != null && (a.eventV2ListEntryPoint = r.entryPoint),
          n != null && (a.eventV2ListIsNullState = n),
          new (o(
            "WAWebEventV2ListUserJourneyWamEvent",
          ).EventV2ListUserJourneyWamEvent)(a).commit());
      }
    }
    ((l.startSharableEventListJourney = s),
      (l.endSharableEventListJourney = u),
      (l.logSharableEventListPageShown = c),
      (l.logSharableEventListFilterTapped = d),
      (l.logSharableEventListNewEventTapped = m),
      (l.logSharableEventListEventCellTapped = p));
  },
  98,
);
