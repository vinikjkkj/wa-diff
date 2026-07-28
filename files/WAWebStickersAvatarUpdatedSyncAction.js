__d(
  "WAWebStickersAvatarUpdatedSyncAction",
  [
    "WALogger",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.AvatarUpdated;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: avatar updated sync: mutation not supported",
                      ])),
                  ),
                  t.map(function () {
                    return {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    };
                  })
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
