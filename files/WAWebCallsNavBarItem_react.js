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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = r("useWAWebEventTargetValue")(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "all",
          p,
        ),
        l =
          o(
            "useWAWebIsWinHybridJoinableCallsEnabled",
          ).useIsWinHybridJoinableCallsEnabled() && i,
        c = o("useWAWebMissedCallCount").useWAWebMissedCallCount(),
        m = c.clearMissedCallCount,
        _ = c.missedCallCount,
        f;
      t[0] !== n || t[1] !== m || t[2] !== a
        ? ((f = function () {
            n !== o("WAWebNavBarTypes").NavBarItems.Calls &&
              (a(o("WAWebNavBarTypes").NavBarItems.Calls),
              o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({
                clearUnreadActivity: m,
              }),
              d.resume());
          }),
          (t[0] = n),
          (t[1] = m),
          (t[2] = a),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      t[4] !== n
        ? ((h =
            n === o("WAWebNavBarTypes").NavBarItems.Calls
              ? u.jsx(r("WDSIconIcCallFilled.react"), {})
              : u.jsx(r("WDSIconIcCall.react"), {})),
          (t[4] = n),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Calls")), (t[6] = C))
        : (C = t[6]);
      var b = C,
        v,
        S;
      if (l) {
        var R;
        (t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = u.jsx(r("WAWebUnreadActivityIndicator.react"), {
              pulse: !0,
            })),
            (t[7] = R))
          : (R = t[7]),
          (v = R),
          (S = o("WAWebNavBarItem.react").InlineActivityIndicatorType.Dot));
      } else if (_ > 0) {
        var L;
        (t[8] !== _
          ? ((L = u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
              theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                .MissedCalls,
              maxCount: 100,
              count: _,
            })),
            (t[8] = _),
            (t[9] = L))
          : (L = t[9]),
          (v = L),
          (S = o("WAWebNavBarItem.react").InlineActivityIndicatorType.Counter));
      }
      var E = n === o("WAWebNavBarTypes").NavBarItems.Calls,
        k;
      t[10] !== y || t[11] !== g || t[12] !== v || t[13] !== S || t[14] !== E
        ? ((k = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: y,
            title: b,
            testid: void 0,
            isActive: E,
            onClick: g,
            inlineActivityIndicator: v,
            inlineActivityIndicatorType: S,
          })),
          (t[10] = y),
          (t[11] = g),
          (t[12] = v),
          (t[13] = S),
          (t[14] = E),
          (t[15] = k))
        : (k = t[15]);
      var I = k;
      return I;
    }
    function p() {
      return o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls();
    }
    l.default = m;
  },
  226,
);
