__d(
  "AdsUserSettingsCreatedDataReducerPlugin",
  ["CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.userSettingsID,
            o = r("CurrentUser").getAccountID(),
            a = t.getCached(o);
          if (a.isDone() && a.hasValue()) {
            var i = babelHelpers.extends({}, a.getValueEnforcing(), {
              ads_user_settings: { id: e },
            });
            return t.setSingleValueOrError(o, i);
          } else return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
