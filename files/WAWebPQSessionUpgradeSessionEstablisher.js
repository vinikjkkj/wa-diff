__d(
  "WAWebPQSessionUpgradeSessionEstablisher",
  [
    "WAWebFetchPrekeysJob",
    "WAWebManageE2ESessionsJob",
    "WAWebPQGatingUtils",
    "WAWebProcessKeyBundle",
    "WAWebRunInBatches",
    "WAWebSessionScope",
    "WAWebWamEnumPrekeysFetchContext",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (!o("WAWebPQGatingUtils").isPq1on1MessageEnabled())
        return {
          upgradedWids: [],
          unavailableWids: [],
          depletedPrekeyCount: 0,
        };
      var t = await o("WAWebFetchPrekeysJob").fetchPrekeys(
          e,
          !1,
          o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
            .PQ_SESSION_UPGRADE,
          { requestPqBundles: !0 },
        ),
        n = t.prekeyBundles,
        r = s(e),
        a = n.filter(function (e) {
          return (
            r.has(e.wid.toString()) &&
            o("WAWebManageE2ESessionsJob").getPrekeyBundleSessionScope(
              e,
              o("WAWebSessionScope").SessionScope.PQ,
            ) === o("WAWebSessionScope").SessionScope.PQ
          );
        }),
        i = s(
          a.map(function (e) {
            return e.wid;
          }),
        );
      await o("WAWebRunInBatches").runInBatches(
        a,
        async function (e) {
          var t = await o("WAWebManageE2ESessionsJob").getSignalSessionWids(
              e.map(function (e) {
                return e.wid;
              }),
            ),
            n = t.pq;
          n.length === 0 &&
            (await o("WAWebProcessKeyBundle").processKeyBundles(
              e,
              o("WAWebSessionScope").SessionScope.PQ,
            ));
        },
        { batchSize: 1 },
      );
      var l = s(
        (
          await o("WAWebManageE2ESessionsJob").getSignalSessionWids(
            a.map(function (e) {
              return e.wid;
            }),
          )
        ).pq,
      );
      return {
        upgradedWids: e.filter(function (e) {
          return l.has(e.toString());
        }),
        unavailableWids: e.filter(function (e) {
          return !i.has(e.toString());
        }),
        depletedPrekeyCount: n.filter(function (e) {
          return e.key == null && !e.wid.isBot();
        }).length,
      };
    }
    function s(e) {
      return new Set(
        e.map(function (e) {
          return e.toString();
        }),
      );
    }
    l.establishPQSessionUpgrades = e;
  },
  98,
);
