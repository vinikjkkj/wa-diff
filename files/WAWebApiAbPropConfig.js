__d(
  "WAWebApiAbPropConfig",
  [
    "WALogger",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebSchemaAbPropConfig",
    "cr:21223",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return o("WAWebModelStorageInitialize")
        .initializeWithoutGKs()
        .then(function () {
          return o("WAWebSchemaAbPropConfig")
            .getAbpropConfigsTable()
            .all()
            .then(function (e) {
              return e;
            });
        });
    }
    function c(t) {
      var n = o("WAWebABPropsConfigs").ABPropConfigs[t];
      if (n == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "invalid ABProps config name",
                ])),
            )
            .verbose()
            .sendLogs("invalid ABProps config name: " + t),
          Promise.reject(r("err")("invalid ABProps config name"))
        );
      var a = n[0],
        i = n[1],
        l = n[2],
        s = n[3],
        u = l;
      return o("WAWebModelStorageInitialize")
        .initializeWithoutGKs()
        .then(function () {
          return o("WAWebSchemaAbPropConfig")
            .getAbpropConfigsTable()
            .get(String(a))
            .then(function (e) {
              var t = e
                ? o("WAWebABPropsParseConfigValue").parseConfigValue(
                    e.configValue,
                    i,
                    u,
                  )
                : u;
              return t;
            });
        });
    }
    function d(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["abpropConfigs"], async function (n) {
          var r = n[0],
            a = await r.all(),
            i = new Map();
          a.forEach(function (e) {
            (e.configExpoKey != null || e.overriddenConfigValue != null) &&
              i.set(e.configCode, {
                configCode: e.configCode,
                configValue: e.configValue,
                configExpoKey: e.configExpoKey,
                hasAccessed: e.hasAccessed,
                overriddenConfigValue: e.overriddenConfigValue,
              });
          });
          var l = !1,
            s = [];
          return (
            e.forEach(function (e, t) {
              var n = !1,
                r = i.get(String(t));
              if (r) {
                var a = r.configExpoKey;
                a != null && e.configExpoKey !== a
                  ? (o("WAWebABPropsGlobals").exposureKeys.delete(a),
                    (l = !0),
                    o("WAWebABPropsGlobals").accessedConfigs.delete(t))
                  : a != null && (n = r.hasAccessed);
              }
              s.push({
                configCode: String(t),
                configValue: e.configValue,
                configExpoKey: e.configExpoKey,
                hasAccessed: n,
                overriddenConfigValue:
                  r == null ? void 0 : r.overriddenConfigValue,
              });
            }),
            l && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
            t
              ? await r.bulkCreateOrReplace(s)
              : (await r.clear(), await r.bulkCreate(s)),
            a
          );
        })
        .then(async function (r) {
          if (n("cr:21223") && !t)
            try {
              await (n("cr:21223") == null
                ? void 0
                : n("cr:21223").processAbpropChangelog(r, e));
            } catch (e) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to record ABProp diff ",
                    "",
                  ])),
                e,
              );
            }
        });
    }
    async function m(e) {
      var t = await o("WAWebSchemaAbPropConfig")
        .getAbpropConfigsTable()
        .get(String(e));
      t == null ||
        (t == null ? void 0 : t.hasAccessed) === !0 ||
        (await o("WAWebSchemaAbPropConfig")
          .getAbpropConfigsTable()
          .merge(String(e), { hasAccessed: !0 }));
    }
    ((l.getABPropConfigs = u),
      (l.parseConfigValue = o("WAWebABPropsParseConfigValue").parseConfigValue),
      (l.getConfigValue = c),
      (l.updateABPropConfigs = d),
      (l.setConfigAccessed = m));
  },
  98,
);
