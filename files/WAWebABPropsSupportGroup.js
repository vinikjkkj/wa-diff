__d(
  "WAWebABPropsSupportGroup",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "in_app_support_v2_number_prefixes",
      );
      return t == null || t === ""
        ? !1
        : t.split(",").some(function (t) {
            return e.startsWith(t);
          });
    }
    l.default = e;
  },
  98,
);
