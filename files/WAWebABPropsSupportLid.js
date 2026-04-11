__d(
  "WAWebABPropsSupportLid",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebABProps").getABPropConfigValue("support_lids");
      return t == null || t === "" ? !1 : t.split(",").includes(e);
    }
    function s(e) {
      var t = o("WAWebABProps").getABPropConfigValue("payment_support_lids");
      return t == null || t === "" ? !1 : t.split(",").includes(e);
    }
    function u(t) {
      return e(t) || s(t);
    }
    ((l.getIsWaCAPISupportLid = e), (l.getIsWaSupportLid = u));
  },
  98,
);
