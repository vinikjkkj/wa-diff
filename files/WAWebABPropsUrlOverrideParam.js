__d(
  "WAWebABPropsUrlOverrideParam",
  ["WAWebABPropsConfigs"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = o("WAWebABPropsConfigs").ABPropConfigs[t],
        a = r[0];
      return (n = e.get(t)) != null ? n : e.get("abprop_" + a);
    }
    l.getABPropUrlOverrideParam = e;
  },
  98,
);
