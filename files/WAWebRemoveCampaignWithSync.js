__d(
  "WAWebRemoveCampaignWithSync",
  ["WALogger", "WAWebSyncdCoreApi"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["biz-broadcast-campaigns"],
        n,
        async function (e) {
          var n = e[0];
          await n.remove(t);
        },
      ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-storage] Campaign ",
              " removed and synced",
            ])),
          t,
        ));
    }
    l.removeCampaignWithSync = s;
  },
  98,
);
