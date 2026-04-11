__d(
  "WAWebNctSaltSync",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdAction",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.NctSaltSync;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = yield (m || (m = n("Promise"))).all(
                    t.map(function (e) {
                      return a.$NctSaltSync$p_1(e);
                    }),
                  ),
                  l = r("countWhere")(i, function (e) {
                    return (
                      e.actionState ===
                      o("WASyncdConst").SyncActionState.Success
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
                    t.length,
                    l,
                  ),
                  i
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$NctSaltSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (e.operation === "remove")
                  return (
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[nct-salt-sync] Removing stored NCT salt",
                        ])),
                    ),
                    yield o(
                      "WAWebUserPrefsIndexedDBStorage",
                    ).userPrefsIdb.remove(
                      o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT,
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Success }
                  );
                if (e.operation !== "set")
                  return (
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[nct-salt-sync] Unsupported operation: ",
                          "",
                        ])),
                      e.operation,
                    ),
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var n =
                  (t = e.value) == null || (t = t.nctSaltSyncAction) == null
                    ? void 0
                    : t.salt;
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
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
