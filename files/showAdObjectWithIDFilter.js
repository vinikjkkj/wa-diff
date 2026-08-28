__d(
  "showAdObjectWithIDFilter",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "AdsNavigationChangeNavigationStateDataAction",
    "AdsPERouterHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (r("AdsGenericFilterSet"))([
        new (r("AdsGenericFilter"))(
          new (r("AdsGenericFilterField"))(
            "SEARCH_BY_ADGROUP_ID",
            r("AdsGenericFilterFieldType").STRING,
          ),
          "EQUAL",
          e.join(","),
        ),
      ]);
      r("AdsPERouterHelper")
        .getRouteBuilder()
        .section("L1")
        .filters(t)
        .closeTray("EDITOR_DRAWER")
        .action(function () {
          return r("AdsNavigationChangeNavigationStateDataAction").dispatch(
            { navState: { tool: "MANAGE_ADS", section: "L1" } },
            {
              line: "43",
              module: "showAdObjectWithIDFilter.js",
              moduleID: i.id,
            },
          );
        })
        .navigate();
    }
    l.default = e;
  },
  98,
);
