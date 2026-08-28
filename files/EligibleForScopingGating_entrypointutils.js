__d(
  "EligibleForScopingGating.entrypointutils",
  ["BizKitConfigDynamicFields", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("BizKitConfigDynamicFields").is_ig_login_multi_admin;
    }
    function s() {
      return o("BizKitConfigDynamicFields").is_ig_login;
    }
    function u() {
      return !(
        !o("BizKitConfigDynamicFields").is_ig_login ||
        o("BizKitConfigDynamicFields").is_ig_login_multi_admin
      );
    }
    function c() {
      return !m();
    }
    function d() {
      return o("BizKitConfigDynamicFields").is_ig_login ? r("gkx")("7570") : !1;
    }
    function m() {
      return r("gkx")("22644");
    }
    ((l.genIsIGLoginMultiAdmin = e),
      (l.getIsIGLogin = s),
      (l.getIsInEnableSettingsForIGLoginUsers = u),
      (l.getIsEligibleForScoping = c),
      (l.genIsIGLogin25Q3PhaseUser = d));
  },
  98,
);
