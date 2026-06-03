__d(
  "WAWebApiAbPropConfig",
  [
    "Promise",
    "WALogger",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebSchemaAbPropConfig",
    "asyncToGeneratorRuntime",
    "cr:21223",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
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
    function d(t) {
      var a = o("WAWebABPropsConfigs").ABPropConfigs[t];
      if (a == null)
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
          (u || (u = n("Promise"))).reject(
            r("err")("invalid ABProps config name"),
          )
        );
      var i = a[0],
        l = a[1],
        s = a[2],
        c = a[3],
        d = s;
      return o("WAWebModelStorageInitialize")
        .initializeWithoutGKs()
        .then(function () {
          return o("WAWebSchemaAbPropConfig")
            .getAbpropConfigsTable()
            .get(String(i))
            .then(function (e) {
              var t = e
                ? o("WAWebABPropsParseConfigValue").parseConfigValue(
                    e.configValue,
                    l,
                    d,
                  )
                : d;
              return t;
            });
        });
    }
    function m(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["abpropConfigs"],
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n[0],
                  a = yield r.all(),
                  i = new Map();
                a.forEach(function (e) {
                  (e.configExpoKey != null ||
                    e.overriddenConfigValue != null) &&
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
                    ? yield r.bulkCreateOrReplace(s)
                    : (yield r.clear(), yield r.bulkCreate(s)),
                  a
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        )
        .then(
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                if (n("cr:21223") && !t)
                  try {
                    yield n("cr:21223") == null
                      ? void 0
                      : n("cr:21223").processAbpropChangelog(r, e);
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
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaAbPropConfig")
            .getAbpropConfigsTable()
            .get(String(e));
          t == null ||
            (t == null ? void 0 : t.hasAccessed) === !0 ||
            (yield o("WAWebSchemaAbPropConfig")
              .getAbpropConfigsTable()
              .merge(String(e), { hasAccessed: !0 }));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getABPropConfigs = c),
      (l.parseConfigValue = o("WAWebABPropsParseConfigValue").parseConfigValue),
      (l.getConfigValue = d),
      (l.updateABPropConfigs = m),
      (l.setConfigAccessed = p));
  },
  98,
);
