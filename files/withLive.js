__d(
  "withLive",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.metadata,
        r = n.live;
      if (r != null && typeof r == "object") {
        var o = s(e),
          a = u(e);
        if (
          (o == null || a == null || l(0, 45, o, a),
          o != null || a != null || l(0, 46),
          o != null)
        ) {
          var i = t.poll;
          return (
            i == null || i === o || l(0, 47, i, o),
            babelHelpers.extends({}, t, { poll: o })
          );
        }
        if (a != null) {
          var c = t.liveConfigId;
          return (
            c == null || c === a || l(0, 48, c, a),
            babelHelpers.extends({}, t, { liveConfigId: a })
          );
        }
      }
      return t;
    }
    function s(e) {
      var t = e.metadata,
        n = t.live;
      return n != null && typeof n == "object"
        ? (n.polling_interval == null ||
            typeof n.polling_interval == "number" ||
            l(0, 49),
          n.polling_interval)
        : null;
    }
    function u(e) {
      var t = e.metadata,
        n = t.live;
      return n != null && typeof n == "object"
        ? (n.config_id == null || typeof n.config_id == "string" || l(0, 50),
          n.config_id)
        : null;
    }
    a.exports = e;
  },
  null,
);
