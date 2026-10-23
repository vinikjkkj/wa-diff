__d(
  "serializeWAWebBizAdTargetingSpec",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["type"];
    function s(e) {
      return r("justknobx")._("6810")
        ? JSON.stringify(
            babelHelpers.extends({}, e, {
              exclusions: u(e.exclusions),
              flexible_spec: u(e.flexible_spec),
            }),
          )
        : JSON.stringify(e);
    }
    function u(t) {
      return t == null
        ? t
        : t.map(function (t) {
            var n = t.type,
              r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return r;
          });
    }
    l.default = s;
  },
  98,
);
