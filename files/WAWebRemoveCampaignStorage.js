__d(
  "WAWebRemoveCampaignStorage",
  ["WALogger", "WAWebSchemaBusinessBroadcastCampaign", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .remove(t);
      } catch (n) {
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-storage] Failed to remove campaign ",
                ": ",
                "",
              ])),
            t,
            r("getErrorSafe")(n),
          ),
          n
        );
      }
    }
    l.removeCampaignStorage = s;
  },
  98,
);
