__d(
  "AutoLoggingComponentNameValidator",
  ["AutoLoggingComponentValidatorListSitevarConfig.experimental", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        COMPONENT_ALLOW_LIST: r(
          "AutoLoggingComponentValidatorListSitevarConfig.experimental",
        ).COMPONENT_ALLOW_LIST,
        COMPONENT_BLOCK_LIST: r(
          "AutoLoggingComponentValidatorListSitevarConfig.experimental",
        ).COMPONENT_BLOCK_LIST,
      },
      s = function (t) {
        return t.join("|");
      },
      u = null;
    function c(t) {
      var n, o;
      (u != null &&
        u !== t &&
        r("FBLogger")("auto_logging").warn(
          "Config name used to get validator changed, ensure you are using consistent init config across AutoLogging",
          u,
          t,
        ),
        (u = t));
      var a =
          (n =
            (o = r(
              "AutoLoggingComponentValidatorListSitevarConfig.experimental",
            ).TOOL_CONFIG) == null
              ? void 0
              : o[t]) != null
            ? n
            : e,
        i = s(a.COMPONENT_ALLOW_LIST),
        l = s(a.COMPONENT_BLOCK_LIST);
      return function (e) {
        return e.match(i) != null && e.match(l) == null;
      };
    }
    l.getComponentNameValidator = c;
  },
  98,
);
