__d(
  "getMessageMarketingTopIncompatibleSettingField",
  ["findMessageMarketingIncompatibleSettingFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "objective",
        "promotedObjectType",
        "specialAdCategories",
        "optimizationGoal",
      ],
      s = function (n) {
        return [].concat(n).sort(function (t, n) {
          var r = e.indexOf(t);
          if (r < 0) return 1;
          var o = e.indexOf(n);
          return o < 0 ? -1 : r - o;
        });
      },
      u = function (t, n) {
        if (t == null) return null;
        var e = o(
          "findMessageMarketingIncompatibleSettingFields",
        ).findMessageMarketingIncompatibleSettingFields(t, n);
        return e.length === 0 ? null : s(e)[0];
      };
    l.getMessageMarketingTopIncompatibleSettingField = u;
  },
  98,
);
