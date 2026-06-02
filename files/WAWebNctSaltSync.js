__d(
  "WAWebNctSaltSync",
  [
    "WABase64",
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdAction",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.NctSaltSync;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = await Promise.all(
                n.map(function (e) {
                  return t.$NctSaltSync$p_1(e);
                }),
              ),
              i = r("countWhere")(a, function (e) {
                return (
                  e.actionState === o("WASyncdConst").SyncActionState.Success
                );
              });
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-salt-sync] Processed ",
                    " mutation(s), ",
                    " succeeded",
                  ])),
                n.length,
                i,
              ),
              a
            );
          }),
          (a.$NctSaltSync$p_1 = async function (t) {
            var e;
            if (t.operation === "remove")
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[nct-salt-sync] Removing stored NCT salt",
                    ])),
                ),
                await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
                  o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT,
                ),
                { actionState: o("WASyncdConst").SyncActionState.Success }
              );
            if (t.operation !== "set")
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[nct-salt-sync] Unsupported operation: ",
                      "",
                    ])),
                  t.operation,
                ),
                { actionState: o("WASyncdConst").SyncActionState.Unsupported }
              );
            var n =
              (e = t.value) == null || (e = e.nctSaltSyncAction) == null
                ? void 0
                : e.salt;
            if (n == null)
              return (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[nct-salt-sync] Missing salt in nctSaltSyncAction",
                    ])),
                ),
                this.malformedActionIndex()
              );
            var r = o("WABase64").encodeB64(n);
            return (
              await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT,
                r,
              ),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-salt-sync] Stored NCT salt",
                  ])),
              ),
              { actionState: o("WASyncdConst").SyncActionState.Success }
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
