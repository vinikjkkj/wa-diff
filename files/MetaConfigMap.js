__d(
  "MetaConfigMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = {},
      s = {
        add: function (n, r) {
          for (var t in n)
            (r && r.entry++, t in e ? r && r.dup_entry++ : (e[t] = n[t]));
        },
        get: function (n) {
          return e[n];
        },
        getAll_DO_NOT_USE: function () {
          return babelHelpers.extends({}, e, l);
        },
        applyOverride_DO_NOT_USE: function (t, n) {
          l[t] = n;
        },
        clearOverride_DO_NOT_USE: function (t) {
          delete l[t];
        },
        clearAllOverrides_DO_NOT_USE: function () {
          for (var e in l) delete l[e];
        },
        hasOverride_DO_NOT_USE: function (t) {
          return t in l;
        },
        getBase_DO_NOT_USE: function (n) {
          return e[n];
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
