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
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebVoipCallsTabResolveCallInfo",
          )
            .__setRef("WAWebVoipCallsTabOpenCallInfo")
            .load();
          return e.openCallLogInfoPanelForCallId;
        }),
        "WAWebVoipCallsTabResolveCallInfo",
      );
    function u(e) {
      return (
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Calls,
        ),
        o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
        c(e)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield s();
            yield n(t);
          } catch (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebVoipCallsTabOpenCallInfo: failed to resolve call log ",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("calls-tab-open-call-info-failed");
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.openVoipCallsTabCallInfo = u;
  },
  98,
);
