__d(
  "cometComposerQPLLogger",
  ["QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e.type) {
        case "COMPOSER_ENTRY":
          break;
        case "COMPOSER_FEATURE_INTENT":
          break;
        case "COMPOSER_POST":
          break;
        case "COMPOSER_POST_MUTATION_START":
          break;
        case "COMPOSER_POST_SUCCESS":
          s(e.fields);
          break;
        case "COMPOSER_POST_FAILURE":
          u(e.fields);
          break;
        case "COMPOSER_POST_CANCEL":
          c(e.fields);
          break;
        case "COMPOSER_POST_TERMINAL":
          break;
        case "COMPOSER_POST_SERVER_CONTENT_RENDERED":
          break;
        case "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS":
          break;
        default:
          break;
      }
    }
    function s(e) {
      var t,
        n = (t = e.payload) == null ? void 0 : t.qplEvent;
      if (n != null)
        switch (n) {
          case r("qpl")._(37631558, "4977"):
            (r("QPLUserFlow").addPoint(
              r("qpl")._(37631558, "4977"),
              "composer_post_success",
            ),
              r("QPLUserFlow").endSuccess(r("qpl")._(37631558, "4977")));
            break;
          default:
            break;
        }
    }
    function u(e) {
      var t,
        n = (t = e.payload) == null ? void 0 : t.qplEvent;
      if (n != null) {
        var o = e.errorDescription != null ? e.errorDescription : "";
        switch (n) {
          case r("qpl")._(37631558, "4977"):
            r("QPLUserFlow").endFailure(
              r("qpl")._(37631558, "4977"),
              "composer_post_cancel",
              { debugInfo: o },
            );
            break;
          default:
            break;
        }
      }
    }
    function c(e) {
      var t,
        n = (t = e.payload) == null ? void 0 : t.qplEvent;
      if (n != null)
        switch (n) {
          case r("qpl")._(37631558, "4977"):
            (r("QPLUserFlow").addPoint(
              r("qpl")._(37631558, "4977"),
              "composer_post_cancel",
            ),
              r("QPLUserFlow").endCancel(r("qpl")._(37631558, "4977")));
            break;
          default:
            break;
        }
    }
    l.default = e;
  },
  98,
);
