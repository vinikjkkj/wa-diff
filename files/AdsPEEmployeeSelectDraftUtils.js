__d(
  "AdsPEEmployeeSelectDraftUtils",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t;
      return typeof window == "undefined"
        ? !1
        : !!new (e || (e = r("URI")))(
            ((t = window) == null ? void 0 : t.location).href,
          ).getQueryData().use_loginas_active;
    }
    l.isUseLoginAsActiveUrlParamPresent = s;
  },
  98,
);
