__d(
  "WAWebHybridABProps",
  ["WALogger", "WAWebABPropsCache", "WAWebHybridABPropsConfigs", "compactMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = o("WAWebABPropsCache").getAllABPropsMap(),
        a = 0,
        i = [],
        l = r("compactMap")(
          Object.keys(o("WAWebHybridABPropsConfigs").ABPropConfigs),
          function (e) {
            var r = o("WAWebHybridABPropsConfigs").ABPropConfigs[e],
              l = n.get(r[0]);
            return l == null
              ? (a++, i.length < 3 && i.push(r[0]), null)
              : t && l.configValue === r[2]
                ? null
                : l;
          },
        );
      return (
        a > 0 &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[abprops] missing config for ",
                " hybrid abprops => ",
                "",
              ])),
            a,
            i,
          ),
        l
      );
    }
    function u() {
      var e = new Map();
      return (
        s(!1).forEach(function (t) {
          t.configExpoKey != null && e.set(t.configExpoKey, t.configCode);
        }),
        e
      );
    }
    ((l.getAllHybridAbProps = s), (l.getAllHybridExpoKeys = u));
  },
  98,
);
