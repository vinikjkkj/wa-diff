__d(
  "WAWebVoipCallsTabDrawerFlow.react",
  [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebVoipCallsTabDrawer.react",
    "WAWebVoipCallsTabDrawerFavorites.react",
    "WAWebVoipCallsTabDrawerNewCall.react",
    "WAWebVoipCallsTabDrawerUpcomingEvents.react",
    "WAWebVoipCallsTabPanelManager",
    "react",
    "useWAWebFlow",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "CallsTabDrawer",
        "CallsTabNewCall",
        "CallsTabFavorites",
        "CallsTabUpcomingEvents",
      ]);
    function c(e) {
      var t = e.onBack,
        n = function () {
          t != null
            ? t()
            : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        },
        a = function () {
          d.push(u.CallsTabNewCall, "flow-transition-drawer-push");
        },
        i = function () {
          d.pop("flow-transition-drawer-pop");
        },
        l = o("useWAWebFlow").useFlow(u.CallsTabDrawer, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: n,
        }),
        c = l[0],
        d = l[1];
      if (
        (o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "openFavoritesDrawer",
          function () {
            d.push(u.CallsTabFavorites, "flow-transition-drawer-push");
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "openUpcomingEventsDrawer",
          function () {
            d.push(u.CallsTabUpcomingEvents, "flow-transition-drawer-push");
          },
        ),
        d.step == null)
      )
        return null;
      var m =
        d.step === u.CallsTabDrawer
          ? s.jsx(r("WAWebVoipCallsTabDrawer.react"), {
              onClickNewCall: a,
              onBack: n,
            })
          : d.step === u.CallsTabNewCall
            ? s.jsx(r("WAWebVoipCallsTabDrawerNewCall.react"), { onBack: i })
            : d.step === u.CallsTabFavorites
              ? s.jsx(r("WAWebVoipCallsTabDrawerFavorites.react"), {
                  onBack: i,
                })
              : d.step === u.CallsTabUpcomingEvents
                ? s.jsx(r("WAWebVoipCallsTabDrawerUpcomingEvents.react"), {
                    onBack: i,
                  })
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        d.step,
                    );
                  })();
      return s.jsx(c, { flow: d, children: m });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
