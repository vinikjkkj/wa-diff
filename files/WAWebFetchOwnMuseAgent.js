__d(
  "WAWebFetchOwnMuseAgent",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebHatchLinkedStatusManager",
    "WAWebReconcileBotSupportFields",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3;
    async function c() {
      if (
        !(await d()) ||
        !o("WAWebBotGroupGatingUtils").isMuseGroupAddEnabled()
      )
        return null;
      var e = await o(
        "WAWebFetchWassBotListProfilesGQL",
      ).fetchWassBotListProfilesGQL();
      if (e.type !== "success") return null;
      var t = p(e.profiles, o("WAWebUserUtils").getMeLidUserOrThrow().user);
      return t == null
        ? null
        : o("WAWebReconcileBotSupportFields").upsertListedAgentProfile(
            t,
            Date.now(),
          );
    }
    async function d() {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (
        r("WAWebHatchLinkedStatusManager").isLinked() ||
        (t !== "failed" && t !== "not_loaded") ||
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_integration_enabled",
        ) !== !0
      )
        return r("WAWebHatchLinkedStatusManager").isLinked();
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          m(),
          u,
          "Hatch linked status refresh timed out",
        );
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[fetchOwnMuseAgent] Hatch linked status refresh failed: ",
              "",
            ])),
          String(t),
        );
      }
      return r("WAWebHatchLinkedStatusManager").isLinked();
    }
    function m() {
      return new Promise(function (e) {
        var t = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function () {
            (t(), e());
          },
        );
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus();
      });
    }
    function p(e, t) {
      var n,
        r = e.filter(function (e) {
          return (
            o("WAWebBotProduct").botProductFromServerValue(e.product) ===
              o("WAWebBotProduct").BotProduct.MUSE &&
            e.isDeprecated !== !0 &&
            e.creatorLid === t
          );
        });
      return r.length > 1
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[fetchOwnMuseAgent] ",
                  " live Muse agents listed, offering none",
                ])),
              r.length,
            )
            .sendLogs("fetch-own-muse-agent-multiple-live"),
          null)
        : (n = r[0]) != null
          ? n
          : null;
    }
    ((l.fetchOwnMuseAgent = c), (l.selectOwnMuseAgentProfile = p));
  },
  98,
);
