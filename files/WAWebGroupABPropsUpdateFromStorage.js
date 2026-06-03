__d(
  "WAWebGroupABPropsUpdateFromStorage",
  [
    "WALogger",
    "WAWebABPropsParseConfigValue",
    "WAWebApiGroupAbPropConfig",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsConfigs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      for (var t of Object.keys(o("WAWebGroupABPropsConfigs").ABPropConfigs))
        if (o("WAWebGroupABPropsConfigs").ABPropConfigs[t][0] === e) return t;
      return null;
    }
    function u(e) {
      var t = Number(e.configCode),
        n = s(t);
      if (n == null) return null;
      var r = o("WAWebGroupABPropsConfigs").ABPropConfigs[n],
        a = r[1],
        i = r[2],
        l = r[3],
        u = i,
        c = o("WAWebABPropsParseConfigValue").parseConfigValue(
          e.configValue,
          a,
          u,
        ),
        d =
          e.overriddenConfigValue != null
            ? o("WAWebABPropsParseConfigValue").parseConfigValue(
                e.overriddenConfigValue,
                a,
                u,
              )
            : null;
      return {
        configCode: t,
        configValue: c,
        configExpoKey: e.configExpoKey,
        hasAccessed: e.hasAccessed,
        overriddenConfigValue: d,
      };
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o(
                "WAWebApiGroupAbPropConfig",
              ).getAllGroupABPropConfigs(),
              n = new Map();
            for (var r of t) {
              var a = u(r);
              if (a != null) {
                var i = n.get(r.groupJid);
                (i == null && ((i = []), n.set(r.groupJid, i)), i.push(a));
              }
            }
            for (var l of n) {
              var s = l[0],
                c = l[1];
              o("WAWebGroupABPropsCache").bulkCreateOrReplaceGroupABPropConfigs(
                s,
                c,
              );
            }
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-abprops] cache update from storage failed: ",
                    "",
                  ])),
                t,
              )
              .verbose()
              .sendLogs(
                "[group-abprops] Failed to update group ABProps cache from storage",
              );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = [];
      for (var r of t) {
        var a = u(r);
        a != null && n.push(a);
      }
      o("WAWebGroupABPropsCache").bulkCreateOrReplaceGroupABPropConfigs(e, n);
    }
    ((l.updateGroupABPropsFromStorage = c),
      (l.updateSingleGroupABPropsCache = m));
  },
  98,
);
