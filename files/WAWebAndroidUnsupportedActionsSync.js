__d(
  "WAWebAndroidUnsupportedActionsSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsAppStateSync",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 4;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.AndroidUnsupportedActions;
          }),
          (a.applyMutations = function (r) {
            var t = this,
              a = 0,
              i = 0,
              l = (c || (c = n("Promise"))).all(
                r.map(function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.value,
                        r = n.androidUnsupportedActions;
                      if (!r)
                        return (
                          a++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var l = r.allowed;
                      return (
                        l === !0 &&
                          t.updatePrimaryAllowsAllMutationsFlag(
                            "allow_unsupported_mutation",
                          ),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      i++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "android unsupported actions: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "locale setting sync: ",
                      " operations not supported",
                    ])),
                  i,
                ),
              l
            );
          }),
          (a.updatePrimaryAllowsAllMutationsFlag = function (t) {
            o("WAWebUserPrefsAppStateSync").getPrimaryAllowsAllMutations() ||
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] primary allows all mutations flag set: ",
                    "",
                  ])),
                t,
              ),
              o("WAWebUserPrefsAppStateSync").setPrimaryAllowsAllMutations());
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
