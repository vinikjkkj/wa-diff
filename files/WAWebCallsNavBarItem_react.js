__d(
  "WAWebCallsNavBarItem.react",
  [
    "fbt",
    "WAWebChatUnreadCount.react",
    "WAWebLazyPoll",
    "WAWebNavBarItem.react",
    "WAWebNavBarTypes",
    "WAWebUnreadActivityIndicator.react",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "WDSIconIcCall.react",
    "WDSIconIcCallFilled.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebIsWinHybridJoinableCallsEnabled",
    "useWAWebMissedCallCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 300,
      d = new (r("WAWebLazyPoll"))({
        name: "checkOngoingCalls",
        interval: c,
        restingInterval: c * 2,
        sleepWhileResting: !1,
        handler: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (e == null) return !0;
            var t = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getModelsArray();
            if (t.length === 0) return !0;
            var n = [],
              r = [];
            for (var a of t) {
              var i,
                l = (i = a.id) == null ? void 0 : i.id,
                s = a.callCreator;
              l != null && s != null && (n.push(l), r.push(s.toString()));
            }
            return (n.length > 0 && (yield e.checkOngoingCalls(n, r)), !0);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      });
    function m(e) {
      var t = e.activeNavBarItem,
        n = e.updateActiveNavBarItem,
        a = r("useWAWebEventTargetValue")(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "all",
          function () {
            return o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls();
          },
        ),
        i =
          o(
            "useWAWebIsWinHybridJoinableCallsEnabled",
          ).useIsWinHybridJoinableCallsEnabled() && a,
        l = o("useWAWebMissedCallCount").useWAWebMissedCallCount(),
        c = l.clearMissedCallCount,
        m = l.missedCallCount,
        p = function () {
          t !== o("WAWebNavBarTypes").NavBarItems.Calls &&
            (n(o("WAWebNavBarTypes").NavBarItems.Calls),
            o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({
              clearUnreadActivity: c,
            }),
            d.resume());
        },
        _ =
          t === o("WAWebNavBarTypes").NavBarItems.Calls
            ? u.jsx(r("WDSIconIcCallFilled.react"), {})
            : u.jsx(r("WDSIconIcCall.react"), {}),
        f = s._(/*BTDS*/ "Calls"),
        g,
        h;
      i
        ? ((g = u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: !0 })),
          (h = o("WAWebNavBarItem.react").InlineActivityIndicatorType.Dot))
        : m > 0 &&
          ((g = u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
            theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.MissedCalls,
            maxCount: 100,
            count: m,
          })),
          (h = o("WAWebNavBarItem.react").InlineActivityIndicatorType.Counter));
      var y = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
        icon: _,
        title: f,
        testid: void 0,
        isActive: t === o("WAWebNavBarTypes").NavBarItems.Calls,
        onClick: p,
        inlineActivityIndicator: g,
        inlineActivityIndicatorType: h,
      });
      return y;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
