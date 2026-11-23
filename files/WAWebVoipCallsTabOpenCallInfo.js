__d(
  "WAWebVoipCallsTabOpenCallInfo",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCmd",
    "WAWebLazyLoadedRetriable",
    "WAWebNavBarTypes",
    "WAWebVoipCallsTabNavigateTo",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebVoipCallsTabResolveCallInfo",
        )
          .__setRef("WAWebVoipCallsTabOpenCallInfo")
          .load();
        return e;
      }, "WAWebVoipCallsTabResolveCallInfo");
    function c(e) {
      return (
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Calls,
        ),
        o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
        m(e)
      );
    }
    async function d(t) {
      try {
        var n = await u(),
          a = n.openFavoriteCallInfoOrChat;
        await a(t);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebVoipCallsTabOpenCallInfo: failed to open favorite",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("calls-tab-open-favorite-failed");
      }
    }
    async function m(e) {
      try {
        var t = await u(),
          n = t.openCallLogInfoPanelForCallId;
        await n(e);
      } catch (t) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebVoipCallsTabOpenCallInfo: failed to resolve call log ",
                "",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("calls-tab-open-call-info-failed");
      }
    }
    ((l.openVoipCallsTabCallInfo = c), (l.openVoipCallsTabFavorite = d));
  },
  98,
);
