__d(
  "WAFlowsUseDataSourceFormValueReset",
  ["WAFlowsFormContext", "WAFlowsTypes", "react", "useDeepEqualMemo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = [],
      c = new Set([
        o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP,
        o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR,
      ]);
    function d(e, t, n) {
      var a = o("WAFlowsFormContext").useWAFlowsForm(),
        i = a.getValue,
        l = a.setValue,
        d = r("useDeepEqualMemo")(t != null ? t : []),
        m = i(e),
        p = c.has(n);
      s(
        function () {
          var t =
            (d == null ? void 0 : d.length) > 0 &&
            m != null &&
            m !== "" &&
            !(Array.isArray(m) ? m : [m]).every(function (e) {
              return (
                d.find(function (t) {
                  return t.id === e;
                }) != null
              );
            });
          t && l(e, p ? u : "");
        },
        [e, d, l, i, m, n, p],
      );
    }
    l.useWAFlowsDataSourceFormReset = d;
  },
  98,
);
