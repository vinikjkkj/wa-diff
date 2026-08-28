__d(
  "AbstractLinkLynxMode",
  ["FBLynx", "LinkshimHandlerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? [r("LinkshimHandlerConfig").www_safe_js_mode, null]
        : ["hover", null];
    }
    function s() {
      o("FBLynx").setupDelegation();
    }
    ((l.getMode = e), (l.setupDelegation = s));
  },
  98,
);
