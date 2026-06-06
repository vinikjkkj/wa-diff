__d(
  "WAWebLinkJoinedMembersUtils",
  [
    "WATimeUtils",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebGetSharedSessionId",
    "WAWebGroupBulkRemovalWamEvent",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupLinkJoinUtils",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebWamEnumGroupBulkRemovalEntryPoint",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      new (o("WAWebGroupBulkRemovalWamEvent").GroupBulkRemovalWamEvent)({
        appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
        bulkRemovalGroupId: o(
          "WAWebGroupJoinRequestMetricUtils",
        ).getSanitizedJid(t),
        groupBulkRemovalAction: e,
        groupBulkRemovalEntryPoint: o("WAWebWamEnumGroupBulkRemovalEntryPoint")
          .GROUP_BULK_REMOVAL_ENTRY_POINT.FLOOD_SYSTEM_MESSAGE,
        removedMembersCount: n,
      }).commit();
    }
    function c(e) {
      return {
        startTime: e - o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS,
        endTime: e + o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_COOLDOWN_SECS,
      };
    }
    function d(e, t) {
      var n = r("WAWebL10N").getFullLocale().replace("_", "-"),
        o = new Date(e * 1e3),
        a = new Date(t * 1e3),
        i =
          o.getFullYear() === a.getFullYear() &&
          o.getMonth() === a.getMonth() &&
          o.getDate() === a.getDate(),
        l = new Intl.DateTimeFormat(n, {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
        s = new Intl.DateTimeFormat(n, { hour: "numeric", minute: "2-digit" });
      if (i) {
        var u = l.format(o),
          c = s.format(a);
        return "\n" + u + " - " + c;
      }
      var d = l.format(o),
        m = l.format(a);
      return "\n" + d + " - " + m;
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
              n != null
                ? o("WATimeUtils").castToUnixTime(
                    n - o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS,
                  )
                : void 0,
            a =
              n != null
                ? o("WATimeUtils").castToUnixTime(
                    n + o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_COOLDOWN_SECS,
                  )
                : void 0,
            i = yield o("WAWebGroupLinkJoinUtils").getParticipantsJoinedViaLink(
              e.id.toString(),
              r,
              a,
            ),
            l = t.participants;
          return i.filter(function (e) {
            var t = o("WAWebWidFactory").createWid(e);
            return l.get(t) != null;
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      (o("WAWebModalManager").closeModalManager(),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "existing_group_permissions",
                chat: e,
                groupMetadata: t,
              }
            : s.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
                chat: e,
                groupMetadata: t,
                onClose: o("WAWebDrawerManager").closeDrawerRight,
              }),
          {
            transition: "slide-left",
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          },
        ));
    }
    ((l.logGroupBulkRemovalWamEvent = u),
      (l.calculateTimeRange = c),
      (l.formatJoinTimeRange = d),
      (l.fetchRemainingParticipants = m),
      (l.openGroupPermissionsDrawer = _));
  },
  98,
);
