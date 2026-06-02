__d(
  "CometTimeSpentUtils",
  ["forEachObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["session_ids"],
      s = function (t, n, o) {
        var e,
          a = (e = t.timeSpentConfig) == null ? void 0 : e.session_ids;
        return (
          o == null ||
            a == null ||
            r("forEachObject")(a, function (e, t) {
              var r = e.extradata_key;
              if (r != null) {
                var a;
                n[r] = (a = o[t]) != null ? a : void 0;
              }
            }),
          n
        );
      },
      u = function (n, r, o) {
        if (o == null) return r;
        var t = o || Object.freeze({}),
          a = t.session_ids,
          i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return s(n, babelHelpers.extends({}, r, i), a);
      };
    l.addTimeSpentMetaData = u;
  },
  98,
);
