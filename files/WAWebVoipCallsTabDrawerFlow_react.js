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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = e.onBack,
        a;
      t[0] !== n
        ? ((a = function () {
            n != null
              ? n()
              : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = function () {
          f.push(u.CallsTabNewCall, "flow-transition-drawer-push");
        },
        c = function () {
          f.pop("flow-transition-drawer-pop");
        },
        d;
      t[2] !== i
        ? ((d = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: i,
          }),
          (t[2] = i),
          (t[3] = d))
        : (d = t[3]);
      var m = o("useWAWebFlow").useFlow(u.CallsTabDrawer, d),
        p = m[0],
        _ = m[1],
        f = _,
        g;
      (t[4] !== f
        ? ((g = function () {
            f.push(u.CallsTabFavorites, "flow-transition-drawer-push");
          }),
          (t[4] = f),
          (t[5] = g))
        : (g = t[5]),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "openFavoritesDrawer",
          g,
        ));
      var h;
      if (
        (t[6] !== f
          ? ((h = function () {
              f.push(u.CallsTabUpcomingEvents, "flow-transition-drawer-push");
            }),
            (t[6] = f),
            (t[7] = h))
          : (h = t[7]),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "openUpcomingEventsDrawer",
          h,
        ),
        f.step == null)
      )
        return null;
      var y;
      t[8] !== i || t[9] !== f.step || t[10] !== c || t[11] !== l
        ? ((y =
            f.step === u.CallsTabDrawer
              ? s.jsx(r("WAWebVoipCallsTabDrawer.react"), {
                  onClickNewCall: l,
                  onBack: i,
                })
              : f.step === u.CallsTabNewCall
                ? s.jsx(r("WAWebVoipCallsTabDrawerNewCall.react"), {
                    onBack: c,
                  })
                : f.step === u.CallsTabFavorites
                  ? s.jsx(r("WAWebVoipCallsTabDrawerFavorites.react"), {
                      onBack: c,
                    })
                  : f.step === u.CallsTabUpcomingEvents
                    ? s.jsx(r("WAWebVoipCallsTabDrawerUpcomingEvents.react"), {
                        onBack: c,
                      })
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            f.step,
                        );
                      })()),
          (t[8] = i),
          (t[9] = f.step),
          (t[10] = c),
          (t[11] = l),
          (t[12] = y))
        : (y = t[12]);
      var C = y,
        b;
      return (
        t[13] !== p || t[14] !== C || t[15] !== f
          ? ((b = s.jsx(p, { flow: f, children: C })),
            (t[13] = p),
            (t[14] = C),
            (t[15] = f),
            (t[16] = b))
          : (b = t[16]),
        b
      );
    }
    l.default = c;
  },
  98,
);
