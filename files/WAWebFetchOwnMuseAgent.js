__d(
  "WAWebFetchOwnMuseAgent",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebHatchLinkedStatusManager",
    "WAWebReconcileBotSupportFields",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5e3;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(yield p()) ||
            !o("WAWebBotGroupGatingUtils").isMuseGroupAddEnabled()
          )
            return null;
          var e = yield o(
            "WAWebFetchWassBotListProfilesGQL",
          ).fetchWassBotListProfilesGQL();
          if (e.type !== "success") return null;
          var t = g(
            e.profiles,
            o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user,
          );
          return t == null
            ? null
            : o("WAWebReconcileBotSupportFields").upsertListedAgentProfile(
                t,
                Date.now(),
              );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
          if (
            r("WAWebHatchLinkedStatusManager").isLinked() ||
            (e !== "failed" && e !== "not_loaded") ||
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_integration_enabled",
            ) !== !0
          )
            return r("WAWebHatchLinkedStatusManager").isLinked();
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              f(),
              c,
              "Hatch linked status refresh timed out",
            );
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[fetchOwnMuseAgent] Hatch linked status refresh failed: ",
                  "",
                ])),
              String(e),
            );
          }
          return r("WAWebHatchLinkedStatusManager").isLinked();
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return new (u || (u = n("Promise")))(function (e) {
        var t = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function () {
            (t(), e());
          },
        );
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus();
      });
    }
    function g(t, n) {
      var r,
        a = t.filter(function (e) {
          return (
            o("WAWebBotProduct").botProductFromServerValue(e.product) ===
              o("WAWebBotProduct").BotProduct.MUSE &&
            e.isDeprecated !== !0 &&
            e.creatorLid === n
          );
        });
      return a.length > 1
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[fetchOwnMuseAgent] ",
                  " live Muse agents listed, offering none",
                ])),
              a.length,
            )
            .sendLogs("fetch-own-muse-agent-multiple-live"),
          null)
        : (r = a[0]) != null
          ? r
          : null;
    }
    ((l.fetchOwnMuseAgent = d), (l.selectOwnMuseAgentProfile = g));
  },
  98,
);
