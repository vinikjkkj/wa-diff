__d(
  "BrowserCrashConfig",
  ["BrowserCrashStaticConfig", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = babelHelpers.extends({}, r("BrowserCrashStaticConfig"), {
        SHOULD_CAPTURE_RESPONSIVE_STATS: (e = r("gkx"))("10841"),
        SHOULD_CAPTURE_GRAPH_API_DATA: e("10841"),
        SHOULD_CAPTURE_BOOTLOAD_DATA: e("10841"),
        SHOULD_CAPTURE_INTERACTION_DATA: r("justknobx")._("4004"),
        SHOULD_CAPTURE_REACT_COMPONENT_DATA: e("10841"),
        SHOULD_CAPTURE_RELAY_RESPONSE_SIZE: e("11141"),
        SHOULD_CAPTURE_AL_SESSION_DATA: r("justknobx")._("5108"),
        SHOULD_CAPTURE_INTERACTION_ELEMENT_TEXT:
          r("justknobx")._("4704") || r("gkx")("15466"),
      }),
      u = s;
    l.default = u;
  },
  98,
);
