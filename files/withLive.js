__d(
  "withLive",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.metadata.live;
      if (n != null && typeof n == "object") {
        n.polling_interval == null ||
          typeof n.polling_interval == "number" ||
          l(0, 49);
        var r = n.polling_interval;
        if (r != null) {
          var o = t.poll;
          return (
            o == null || o === r || l(0, 151680, o, r),
            babelHelpers.extends({}, t, { poll: r })
          );
        }
        return babelHelpers.extends({}, t, { liveConfigId: "" });
      }
      return t;
    }
    a.exports = e;
  },
  null,
);
