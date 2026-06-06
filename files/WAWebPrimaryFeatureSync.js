__d(
  "WAWebPrimaryFeatureSync",
  [
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebPrimaryFeatures",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.PrimaryFeature;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a,
              i = 0,
              l = 0,
              u = n.map(function (e) {
                var n;
                if (e.operation !== "set")
                  return (
                    i++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var r = (n = e.value.primaryFeature) == null ? void 0 : n.flags;
                return r == null
                  ? (l++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : ((a == null || e.timestamp > a.timestamp) && (a = e),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
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
              await o("WAWebPrimaryFeatures").setPrimaryFeatures(d);
            }
            return u;
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
