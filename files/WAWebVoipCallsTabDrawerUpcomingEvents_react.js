__d(
  "WAWebVoipCallsTabDrawerUpcomingEvents.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebCalendarMonthIcon.react",
    "WAWebCmd",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEventResponseCollection",
    "WAWebEventUtils",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebPreCallUserJourneyLogger",
    "WAWebSectionHeader.react",
    "WAWebSingleSelection",
    "WAWebText.react",
    "WAWebUpcomingEventCell.react",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: {
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          height: "x5yr21d",
          $$css: !0,
        },
        emptyState: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          height: "xt7dq6l",
          paddingTop: "x15uerrv",
          paddingInlineEnd: "xx281p9",
          paddingBottom: "x1j3kn9t",
          paddingInlineStart: "x67w97k",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        titleSpacing: {
          marginTop: "x9u28bd",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        textSpacing: { marginTop: "x1380le5", $$css: !0 },
        upcomingEventsContainer: { width: "xh8yej3", $$css: !0 },
        upcomingEventItem: { width: "xh8yej3", $$css: !0 },
        sectionContainer: { width: "xh8yej3", $$css: !0 },
      };
    function f(e) {
      "use no forget";
      var t = e.onBack,
        a = e.ref,
        i = m(),
        l = m(
          new (o("WAWebPreCallUserJourneyLogger").PreCallUserJourneyLogger)(),
        ),
        c = new (r("WAWebSingleSelection"))([], function () {
          return "";
        }),
        f = p([]),
        g = f[0],
        h = f[1],
        y = r("useWAWebStableCallback")(function () {
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = yield o("WAWebEventUtils").getUpcomingEvents();
                h(e);
              } catch (e) {
                h([]);
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()();
        }),
        C = r("useWAWebThrottledCallback")(y, 500, { leading: !0 });
      (o("useWAWebListener").useListener(
        o("WAWebMsgCollection").MsgCollection,
        "add remove",
        C,
      ),
        o("useWAWebListener").useListener(
          o("WAWebEventResponseCollection").EventResponseCollection,
          "add remove change",
          C,
        ));
      var b = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          weight: "semibold",
          children: s._(/*BTDS*/ "Scheduled calls"),
        }),
        v = s._(/*BTDS*/ "Upcoming events drawer");
      d(function () {
        (l.current.clickEventMore(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE),
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = yield o("WAWebEventUtils").getUpcomingEvents();
                h(e);
              } catch (e) {
                h([]);
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()());
      }, []);
      var S = function (t) {
          l.current.clickEventMoreDetail(
            o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE,
          );
          var e = o("WAWebFrontendMsgGetters").getChat(t),
            n = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
          n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(e, n);
        },
        R = function (t) {
          var e = o("WATimeUtils").unixTime(),
            n = new Date(e * 1e3),
            r = new Date(t * 1e3),
            a = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
            i = new Date(r.getFullYear(), r.getMonth(), r.getDate()),
            l = i.getTime() - a.getTime(),
            s =
              l >= 0
                ? o("WATimeUtils").daysDiff(i.getTime(), a.getTime())
                : -o("WATimeUtils").daysDiff(a.getTime(), i.getTime());
          return s === -1
            ? "Yesterday"
            : s === 0
              ? "Today"
              : s === 1
                ? "Tomorrow"
                : r.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
        },
        L = g.reduce(function (e, t) {
          var n = o("WAWebMsgGetters").getEventStartTime(t);
          if (n != null) {
            var r = R(n);
            (e[r] || (e[r] = []), e[r].push(t));
          }
          return e;
        }, {}),
        E = ["Yesterday", "Today", "Tomorrow"],
        k = Object.keys(L).sort(function (e, t) {
          var n = E.indexOf(e),
            r = E.indexOf(t);
          if (n !== -1 && r !== -1) return n - r;
          if (n !== -1) return -1;
          if (r !== -1) return 1;
          var o = new Date(e).getTime(),
            a = new Date(t).getTime();
          return o - a;
        }),
        I =
          g.length > 0
            ? u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: _.upcomingEventsContainer,
                children: k.map(function (e) {
                  return u.jsxs(
                    o("WAWebFlex.react").FlexColumn,
                    {
                      xstyle: _.sectionContainer,
                      children: [
                        u.jsx(r("WAWebSectionHeader.react"), {
                          header: s._(/*BTDS*/ "{date-section}", [
                            s._param("date-section", e),
                          ]),
                        }),
                        L[e].map(function (e) {
                          return u.jsx(
                            o("WAWebFlex.react").FlexItem,
                            {
                              shrink: 0,
                              xstyle: _.upcomingEventItem,
                              children: u.jsx(
                                r("WAWebUpcomingEventCell.react"),
                                {
                                  eventMessage: e,
                                  active: c,
                                  onClick: function () {
                                    return S(e);
                                  },
                                  lobbyEntryPointType: o(
                                    "WAWebWamEnumLobbyEntryPointType",
                                  ).LOBBY_ENTRY_POINT_TYPE
                                    .UPCOMING_SCHEDULE_CALL_LIST,
                                },
                              ),
                            },
                            e.id.toString(),
                          );
                        }),
                      ],
                    },
                    e,
                  );
                }),
              })
            : u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "start",
                xstyle: _.emptyState,
                children: [
                  u.jsx(o("WAWebCalendarMonthIcon.react").CalendarMonthIcon, {
                    width: 120,
                    height: 120,
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextLarge, {
                    weight: "semibold",
                    xstyle: _.titleSpacing,
                    children: s._(/*BTDS*/ "No scheduled calls"),
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: _.textSpacing,
                    children: s._(
                      /*BTDS*/ "Events with call links will appear here when they're scheduled.",
                    ),
                  }),
                ],
              });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: i,
        "aria-label": v,
        "data-testid": void 0,
        children: u.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          theme: "striped",
          testid: void 0,
          tsNavigationData: { surface: "status" },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: b,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: t,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsx(r("WAWebDrawerSection.react"), {
                theme: "full-height",
                animation: !1,
                xstyle: _.container,
                children: I,
              }),
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
