__d(
  "WAWebBizAdCreationTopNotices.react",
  ["WAWebBizAdCreationSectionNotices.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = ["TOP", "ACCOUNT", "CALL_TO_ACTION", "GENERIC", "MESSAGING_APPS"];
    function c() {
      return u.map(function (e) {
        return s.jsx(
          r("WAWebBizAdCreationSectionNotices.react"),
          { specElement: e },
          e,
        );
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
