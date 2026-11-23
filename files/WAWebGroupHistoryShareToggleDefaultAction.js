__d(
  "WAWebGroupHistoryShareToggleDefaultAction",
  [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupMetadataCollection",
    "WAWebPersistAndSyncGroupHistoryToggle",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e, t) {
      var n;
      (await o(
        "WAWebPersistAndSyncGroupHistoryToggle",
      ).persistAndSyncGroupHistoryToggle(e, t),
        (n = r("WAWebGroupMetadataCollection").get(e)) == null ||
          n.set({ shouldDefaultGroupHistoryShareOn: t }));
    }
    function u(t, n) {
      var a = o("WAWebWidFactory").asGroupWidOrThrow(t);
      return o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(a)
        ? s(a, n).catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] failed to persist share-toggle choice",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("group-history-toggle-persist-failed");
          })
        : Promise.resolve();
    }
    function c(e, t, n) {
      return n && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(e)
        ? s(e, t)
        : Promise.resolve();
    }
    ((l.setGroupHistoryShareToggleDefault = s),
      (l.persistGroupHistoryToggleChoice = u),
      (l.persistGroupHistoryShareToggleDefaultOnAdd = c));
  },
  98,
);
