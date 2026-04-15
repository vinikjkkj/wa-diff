__d(
  "WAWebBizAdCreationTopNotices.react",
  ["WAWebBizAdCreationSectionNotices.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = ["TOP", "ACCOUNT", "CALL_TO_ACTION", "GENERIC", "MESSAGING_APPS"];
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.map(d)), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function d(e) {
      return s.jsx(
        r("WAWebBizAdCreationSectionNotices.react"),
        { specElement: e },
        e,
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
