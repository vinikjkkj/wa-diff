__d(
  "AdsEventsManagerDomainControlModalDeeplinkTriggerReducerPlugin",
  ["AdsEventsManagerDialogTypesEnum", "AdsEventsManagerRoutingDatasetICERoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, o;
          return ((e = n.params) == null ? void 0 : e.showModal) !==
            "DOMAIN_CONTROL"
            ? t
            : ((o = n.routes) == null
                  ? void 0
                  : o.includes(
                      r("AdsEventsManagerRoutingDatasetICERoute").givenName,
                    )) === !0
              ? babelHelpers.extends({}, t, {
                  currentDialogType: r("AdsEventsManagerDialogTypesEnum")
                    .CONSOLIDATION_DOMAIN_CONTROL_SETTINGS,
                })
              : babelHelpers.extends({}, t, {
                  currentDialogType: r("AdsEventsManagerDialogTypesEnum")
                    .DOMAIN_CONTROL_SETTINGS,
                });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
