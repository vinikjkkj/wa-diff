__d(
  "WAWebApiGroupAbPropConfig",
  [
    "WALogger",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsGlobals",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupAbPropConfig",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaGroupAbPropConfig")
            .getGroupAbpropConfigsTable()
            .all();
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaGroupAbPropConfig")
            .getGroupAbpropConfigsTable()
            .equals(["groupJid"], [e]);
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, r) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["abpropGroupConfigs"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  a = yield n.equals(["groupJid"], [t]),
                  i = new Map();
                a.forEach(function (e) {
                  (e.configExpoKey != null ||
                    e.overriddenConfigValue != null) &&
                    i.set(e.configCode, {
                      groupJid: e.groupJid,
                      configCode: e.configCode,
                      configValue: e.configValue,
                      configExpoKey: e.configExpoKey,
                      hasAccessed: e.hasAccessed,
                      overriddenConfigValue: e.overriddenConfigValue,
                    });
                });
                var l = !1,
                  s = r.map(function (e) {
                    var n = !1,
                      r = i.get(e.configCode);
                    if (r) {
                      var a = r.configExpoKey;
                      if (a != null && e.configExpoKey !== a) {
                        var s = o(
                          "WAWebGroupABPropsGlobals",
                        ).groupExposureKeys.get(t);
                        s != null && (s.delete(a), (l = !0));
                        var u = o(
                          "WAWebGroupABPropsCache",
                        ).groupAccessedConfigs.get(t);
                        u != null && u.delete(Number(e.configCode));
                      } else a != null && (n = r.hasAccessed);
                    }
                    return babelHelpers.extends({}, e, {
                      hasAccessed: n,
                      overriddenConfigValue:
                        r == null ? void 0 : r.overriddenConfigValue,
                    });
                  });
                (l && o("WAWebGroupABPropsGlobals").updateGroupExpoKey(t),
                  yield n.bulkRemoveByIndex(["groupJid"], [t]),
                  yield n.bulkCreate(s));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .catch(function (t) {
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "update GroupABProps config table failed",
                  ])),
              )
              .verbose()
              .sendLogs(
                "update GroupABProps config table failed when syncing GroupABProps",
              ),
            t
          );
        });
    }
    ((l.getAllGroupABPropConfigs = s),
      (l.getGroupABPropConfigs = c),
      (l.updateGroupABPropConfigs = m));
  },
  98,
);
