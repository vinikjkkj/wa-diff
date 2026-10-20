__d(
  "WAWebRemoveCampaignWithSync",
  ["WALogger", "WAWebSyncdCoreApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["biz-broadcast-campaigns"],
            r,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0];
                  yield n.remove(t);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-storage] Campaign ",
                  " removed and synced",
                ])),
              t,
            ));
        })),
        u.apply(this, arguments)
      );
    }
    l.removeCampaignWithSync = s;
  },
  98,
);
