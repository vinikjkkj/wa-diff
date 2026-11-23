__d(
  "WAWebAddonDeleteAddons",
  [
    "WALogger",
    "WAWebAddonProcessDeleteForMe",
    "WAWebDeleteMessageForMeSync",
    "WAWebSyncd",
    "WAWebSyncdDb",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      var n = await r("WAWebDeleteMessageForMeSync").getDeleteForMeMutations(
        e,
        t,
      );
      await o("WAWebSyncdDb").appendPendingMutationsRows(n);
      var a = n.map(function (e) {
        return e.collection;
      });
      o("WAWebSyncd").markCollectionsForSync(a);
    }
    async function u(t, n) {
      try {
        (await s(t, n),
          await o("WAWebAddonProcessDeleteForMe").processDeleteForMe(
            [].concat(t),
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "failed outgoing addons delete for me  ",
                "",
              ])),
            t,
          )
          .tags("addons", "messaging")
          .sendLogs("sendDeleteAddonsForMe");
      }
    }
    l.sendDeleteAddonsForMe = u;
  },
  98,
);
