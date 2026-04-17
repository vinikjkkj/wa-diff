__d(
  "SearchCometBlueHashtagExperiment",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "semibold_blue":
          return {
            color_DEPRECATED: "blueLink",
            weight_DEPRECATED: "semibold",
          };
        case "blue":
          return { color_DEPRECATED: "blueLink", weight_DEPRECATED: "normal" };
      }
      return null;
    }
    function l() {
      return e("blue");
    }
    function s() {
      return e("blue");
    }
    var u = { entityMentionStyle: l(), hashtagStyle: s() };
    i.default = u;
  },
  66,
);
