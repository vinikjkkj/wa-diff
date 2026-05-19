__d(
  "WAWebMetaConfigDebugOverrides",
  ["MetaConfigMap"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        n = t;
      }
      r("MetaConfigMap").applyOverride_DO_NOT_USE(e, { value: n });
    }
    function s(e) {
      r("MetaConfigMap").clearOverride_DO_NOT_USE(e);
    }
    function u() {
      r("MetaConfigMap").clearAllOverrides_DO_NOT_USE();
    }
    function c(e) {
      return r("MetaConfigMap").hasOverride_DO_NOT_USE(e);
    }
    function d(e) {
      var t;
      return (t = r("MetaConfigMap").getBase_DO_NOT_USE(e)) != null ? t : null;
    }
    ((l.overrideMetaConfig = e),
      (l.resetMetaConfig = s),
      (l.resetAllMetaConfigs = u),
      (l.isOverridden = c),
      (l.getOriginalValue = d));
  },
  98,
);
