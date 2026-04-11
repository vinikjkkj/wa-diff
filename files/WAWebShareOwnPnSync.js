__d(
  "WAWebShareOwnPnSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebABProps",
    "WAWebSyncdAction",
    "WAWebUpdateLidMetadataJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 8;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.ShareOwnPn;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (
                  o("WAWebABProps").getABPropConfigValue(
                    "share_own_pn_sync",
                  ) !== !0
                )
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "share_own_pn sync: operation not supported",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    })
                  );
                var r = [],
                  a = 0,
                  i = 0,
                  l = t.map(function (e) {
                    if (e.operation !== "set")
                      return (
                        a++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var t = e.indexParts[1];
                    if (!o("WAWebWidFactory").isWidlike(t))
                      return (i++, n.malformedActionIndex());
                    var l = o("WAWebWidFactory").createUserLidOrThrow(t);
                    return (
                      r.push({ lid: l, data: { shareOwnPn: !0 } }),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  });
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "share_own_pn sync: ",
                          " operations not supported",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "share_own_pn sync: ",
                          " malformed mutations - invalid key",
                        ])),
                      i,
                    ),
                  yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(r),
                  l
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
      d = new c();
    l.default = d;
  },
  98,
);
