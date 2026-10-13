__d(
  "WAWebGroupHistoryShareToggleDefaultAction",
  [
    "Promise",
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupMetadataCollection",
    "WAWebPersistAndSyncGroupHistoryToggle",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (yield o(
            "WAWebPersistAndSyncGroupHistoryToggle",
          ).persistAndSyncGroupHistoryToggle(e, t),
            (n = r("WAWebGroupMetadataCollection").get(e)) == null ||
              n.set({ shouldDefaultGroupHistoryShareOn: t }));
        })),
        c.apply(this, arguments)
      );
    }
    function d(t, a) {
      var i = o("WAWebWidFactory").asGroupWidOrThrow(t);
      return !o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(i) ||
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryPerGroupToggleMdSyncEnabled()
        ? (s || (s = n("Promise"))).resolve()
        : u(i, a).catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] failed to persist share-toggle choice",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("group-history-toggle-persist-failed");
          });
    }
    function m(e, t, r) {
      return r && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(e)
        ? u(e, t)
        : (s || (s = n("Promise"))).resolve();
    }
    ((l.setGroupHistoryShareToggleDefault = u),
      (l.persistGroupHistoryToggleChoice = d),
      (l.persistGroupHistoryShareToggleDefaultOnAdd = m));
  },
  98,
);
