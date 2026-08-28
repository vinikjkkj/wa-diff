__d(
  "adAccountAccountControlInfoSelectorUtils",
  ["AdAccountBusinessConstraintsFalcoEvent", "LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.mapValue(function (e) {
        return e.account_id == null
          ? r("LoadObject").empty({ creatorModuleID: i.id })
          : t.get(e.account_id);
      });
    }
    function s(e, t) {
      var n,
        o = t.getError();
      return o != null
        ? (r("AdAccountBusinessConstraintsFalcoEvent").log(function () {
            return {
              ad_account_id: e != null ? e : "",
              event: "get_account_contraints_frontend_fail",
              extra_info: JSON.stringify({
                message: o.message,
                stack_trace: o.stack,
              }),
            };
          }),
          {})
        : (n = t.getValue()) != null
          ? n
          : {
              audience_controls: {},
              placement_controls: {},
              campaigns_with_error: [],
              status: "",
            };
    }
    ((l.adAccountAccountControlInfoLoadObject = e),
      (l.adAccountAccountControlInfo = s));
  },
  98,
);
