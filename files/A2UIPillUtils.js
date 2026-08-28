__d(
  "A2UIPillUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      error: "red",
      "error-emphasized": "red",
      info: "blue",
      "info-advantage-plus": "blue",
      "info-generative-ai": "blue",
      progress: "gray",
      success: "green",
      "success-advantage-plus": "green",
      "value-proven-recommendation": "blue",
      warning: "yellow",
      "warning-emphasized": "yellow",
    };
    function l(e) {
      switch (e) {
        case "error":
        case "error-emphasized":
        case "info":
        case "info-advantage-plus":
        case "info-generative-ai":
        case "progress":
        case "success":
        case "success-advantage-plus":
        case "value-proven-recommendation":
        case "warning":
        case "warning-emphasized":
          return e;
      }
      switch (e) {
        case "blue":
          return "info";
        case "green":
          return "success";
        case "red":
          return "error";
        case "yellow":
          return "warning";
        case "gray":
          return "progress";
        default:
          return "info";
      }
    }
    function s(e) {
      if (e == null || typeof e != "object") return null;
      var t = null,
        n = null,
        r = null;
      for (var o of Object.entries(e)) {
        var a = o[0],
          i = o[1];
        a === "label" && typeof i == "string"
          ? (t = i)
          : a === "color" && typeof i == "string"
            ? (n = i)
            : a === "showIcon" && typeof i == "boolean" && (r = i);
      }
      return t == null
        ? null
        : { color: n != null ? n : "gray", label: t, showIcon: r !== !1 };
    }
    ((i.PILL_STATUS_TO_COLOR = e),
      (i.resolvePillStatus = l),
      (i.parseBadgeData = s));
  },
  66,
);
