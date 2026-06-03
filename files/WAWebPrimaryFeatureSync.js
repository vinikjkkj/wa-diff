__d(
  "WAWebPrimaryFeatureSync",
  [
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebPrimaryFeatures",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.PrimaryFeature;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  a,
                  i = 0,
                  l = 0,
                  u = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        i++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var r =
                      (t = e.value.primaryFeature) == null ? void 0 : t.flags;
                    return r == null
                      ? (l++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        ))
                      : ((a == null || e.timestamp > a.timestamp) && (a = e),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        });
                  });
                if (
                  (i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "primary feature sync: ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "primary feature sync: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  a != null)
                ) {
                  var c,
                    d = r("WANullthrows")(
                      (c = a.value.primaryFeature) == null ? void 0 : c.flags,
                    );
                  yield o("WAWebPrimaryFeatures").setPrimaryFeatures(d);
                }
                return u;
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
