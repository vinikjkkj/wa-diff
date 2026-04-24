__d(
  "WAWebBizAISettingsCategoryRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n) {
      e.set(String(t), n);
    }
    function s(t) {
      return e.get(t);
    }
    ((i.registerCategory = l), (i.getCategoryHandler = s));
  },
  66,
);
