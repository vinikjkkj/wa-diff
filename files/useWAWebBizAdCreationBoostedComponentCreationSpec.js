__d(
  "useWAWebBizAdCreationBoostedComponentCreationSpec",
  [
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationSpecContext",
    "convertWAWebSpecToLWIVariables",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d() {
      var e = u(r("WAWebBizAdCreationConfigContext")),
        t = u(r("WAWebBizAdCreationSpecContext")),
        n = t.currentValue;
      return c(
        function () {
          if (e == null || n == null)
            return {
              creation_spec: {},
              flow_id: "",
              product: "BOOSTED_MESSAGE",
            };
          var t = r("convertWAWebSpecToLWIVariables")(
            n,
            e.flowID,
            e.pageID,
            e.product,
          );
          return t.input;
        },
        [e, n],
      );
    }
    l.default = d;
  },
  98,
);
