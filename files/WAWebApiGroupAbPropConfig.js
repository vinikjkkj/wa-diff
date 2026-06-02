__d(
  "WAWebApiGroupAbPropConfig",
  [
    "WALogger",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsGlobals",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupAbPropConfig",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      return o("WAWebSchemaGroupAbPropConfig")
        .getGroupAbpropConfigsTable()
        .all();
    }
    async function u(e) {
      return o("WAWebSchemaGroupAbPropConfig")
        .getGroupAbpropConfigsTable()
        .equals(["groupJid"], [e]);
    }
    function c(t, n) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["abpropGroupConfigs"], async function (e) {
          var r = e[0],
            a = await r.equals(["groupJid"], [t]),
            i = new Map();
          a.forEach(function (e) {
            (e.configExpoKey != null || e.overriddenConfigValue != null) &&
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
            s = n.map(function (e) {
              var n = !1,
                r = i.get(e.configCode);
              if (r) {
                var a = r.configExpoKey;
                if (a != null && e.configExpoKey !== a) {
                  var s = o("WAWebGroupABPropsGlobals").groupExposureKeys.get(
                    t,
                  );
                  s != null && (s.delete(a), (l = !0));
                  var u = o("WAWebGroupABPropsCache").groupAccessedConfigs.get(
                    t,
                  );
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
            await r.bulkRemoveByIndex(["groupJid"], [t]),
            await r.bulkCreate(s));
        })
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
      (l.getGroupABPropConfigs = u),
      (l.updateGroupABPropConfigs = c));
  },
  98,
);
