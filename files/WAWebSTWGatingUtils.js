__d(
  "WAWebSTWGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "search_the_web_text_search",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("search_the_web_url_offer");
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "search_the_web_design_experiment_v1",
      );
    }
    ((l.isSearchTheWebTextSearchEnabled = e),
      (l.isSearchTheWebURLSearchEnabled = s),
      (l.isSearchTheWebDesignExperimentV1Enabled = u));
  },
  98,
);
