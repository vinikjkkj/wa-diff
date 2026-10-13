__d(
  "WAWebVoipCallsTabOpenCallInfo",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCmd",
    "WAWebLazyLoadedRetriable",
    "WAWebNavBarTypes",
    "WAWebVoipCallsTabNavigateTo",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebVoipCallsTabResolveCallInfo",
          )
            .__setRef("WAWebVoipCallsTabOpenCallInfo")
            .load();
          return e;
        }),
        "WAWebVoipCallsTabResolveCallInfo",
      );
    function c(e) {
      return (
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Calls,
        ),
        o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
        p(e)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield u(),
              a = n.openFavoriteCallInfoOrChat;
            yield a(t);
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield u(),
              n = t.openCallLogInfoPanelForCallId;
            yield n(e);
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
        })),
        _.apply(this, arguments)
      );
    }
    ((l.openVoipCallsTabCallInfo = c), (l.openVoipCallsTabFavorite = d));
  },
  98,
);
