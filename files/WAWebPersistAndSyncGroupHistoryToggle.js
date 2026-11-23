__d(
  "WAWebPersistAndSyncGroupHistoryToggle",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebGroupHistoryToggleModeStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebSendGroupHistoryToggleMutation",
      ).__setRef("WAWebPersistAndSyncGroupHistoryToggle");
    async function u(t, n) {
      var a = await o(
        "WAWebGroupHistoryToggleModeStore",
      ).setGroupHistoryToggleMode(t, n);
      if (!a) return a;
      try {
        var i = await s.load(),
          l = i.sendGroupHistoryToggleMutation;
        await l(t, n);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "persistAndSyncGroupHistoryToggle: sending the toggle mutation failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("group-history-toggle-sync-send-failed");
      }
      return a;
    }
    l.persistAndSyncGroupHistoryToggle = u;
  },
  98,
);
