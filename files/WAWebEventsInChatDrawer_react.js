__d(
  "WAWebEventsInChatDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEventUtils",
    "WAWebEventsDrawerEventCell.react",
    "WAWebFlex.react",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "nullthrows",
    "react",
    "useWAWebAllEvents",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        footer: {
          position: "x7wzq59",
          bottom: "x1ey2m1c",
          flexGrow: "x1iyjqo2",
          display: "x78zum5",
          alignItems: "xuk3077",
          $$css: !0,
        },
        footerRow: { width: "xh8yej3", $$css: !0 },
      };
    function d(e) {
      var t = e.chat,
        n = e.onBack,
        a = e.onCommunityEventsClick,
        i = e.onEventClick,
        l = e.ref,
        d = o("useWAWebAllEvents").useAllEvents(t),
        m = d.reduce(
          function (e, t) {
            var n = t.msg;
            return (
              n.isEventCanceled ||
              o("WAWebEventUtils").shouldShowEventAsPassed(
                n.eventStartTime,
                n.eventEndTime,
              )
                ? e[1].push(t)
                : e[0].push(t),
              e
            );
          },
          [[], []],
        ),
        p = m[0],
        _ = m[1],
        f = _.sort(function (e, t) {
          return (
            o("WAWebMsgGetters").getEventStartTime(t.msg) -
            o("WAWebMsgGetters").getEventStartTime(e.msg)
          );
        }),
        g = p.map(function (e) {
          return u.jsx(
            r("WAWebEventsDrawerEventCell.react"),
            { msg: e.msg, chat: e.chat, onClick: i },
            "event-cell-" + e.msg.id.toString(),
          );
        }),
        h = f.map(function (e) {
          return u.jsx(
            r("WAWebEventsDrawerEventCell.react"),
            { msg: e.msg, chat: e.chat, passed: !0, onClick: i },
            "event-cell-" + e.msg.id.toString(),
          );
        }),
        y =
          h.length > 0
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: o("WAWebUISpacing").uiPadding.start16,
                    children: s._(/*BTDS*/ "Past and canceled events"),
                  }),
                  h,
                ],
              })
            : null,
        C = o("WAWebGroupType").getGroupTypeFromGroupMetadata(
          o("WAWebStateUtils").unproxy(r("nullthrows")(t.groupMetadata)),
        ),
        b,
        v;
      switch (C) {
        case o("WAWebGroupType").GroupType.COMMUNITY:
          b = s._(/*BTDS*/ "Community events");
          break;
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          ((b = s._(/*BTDS*/ "Events in announcements")),
            (v = u.jsx(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              xstyle: [
                c.footer,
                o("WAWebUISpacing").uiPadding.all16,
                o("WAWebUISpacing").uiPadding.bottom6,
              ],
              children: u.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                xstyle: c.footerRow,
                children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                  testid: void 0,
                  onClick: a,
                  children: s._(/*BTDS*/ "See all community events"),
                }),
              }),
            })));
          break;
        default:
          b = s._(/*BTDS*/ "Events");
          break;
      }
      return u.jsxs(r("WAWebDrawer.react"), {
        theme: "striped",
        ref: l,
        tsNavigationData: {
          surface: "events-in-group",
          extras: { typeOfGroup: o("WAWebGroupType").groupTypeToWamEnum(C) },
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: b,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: n,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: [g, y],
              }),
              v,
            ],
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
