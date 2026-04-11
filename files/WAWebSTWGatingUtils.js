__d(
  "WAWebSTWGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "search_the_web_dialog_redesign",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "search_the_web_text_search",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("search_the_web_url_offer");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "search_the_web_image_search",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "search_the_web_design_experiment_v1",
      );
    }
    ((l.isSearchTheWebEnabled = e),
      (l.isSearchTheWebTextSearchEnabled = s),
      (l.isSearchTheWebURLSearchEnabled = u),
      (l.isSearchTheWebImageSearchEnabled = c),
      (l.isSearchTheWebDesignExperimentV1Enabled = d));
  },
  98,
);
