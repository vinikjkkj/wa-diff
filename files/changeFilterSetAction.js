__d(
  "changeFilterSetAction",
  ["AdsPEFilterChangedAction", "AdsPERouterHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { ad_page_id: 0, adset_page_id: 0, campaign_page_id: 0 },
      s = { adset_ids_with_warning: null, recommendation_type: null };
    function u(t, n, o, a) {
      var l = babelHelpers.extends({}, e, { filter_set: t });
      (t || (l = babelHelpers.extends({}, l, s)),
        r("AdsPERouterHelper")
          .getRouter()
          .updateParams(l, {
            replaceState: !0,
            onComplete: function () {
              var e = {
                filterSet: t,
                rootLevel: o,
                type: n,
                filterAuxiliaryData: a,
              };
              r("AdsPEFilterChangedAction").dispatch(
                { data: e },
                {
                  line: "64",
                  module: "changeFilterSetAction.js",
                  moduleID: i.id,
                },
              );
            },
          }));
    }
    l.default = u;
  },
  98,
);
