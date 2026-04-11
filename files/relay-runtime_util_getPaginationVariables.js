__d(
  "relay-runtime/util/getPaginationVariables",
  ["invariant", "warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r, o, a, i) {
      var s,
        u = i.backward,
        c = i.forward;
      if (e === "backward") {
        var d;
        ((u != null && u.count != null && u.cursor != null) || l(0, 19801),
          n("warning")(
            !Object.prototype.hasOwnProperty.call(a, u.cursor),
            "Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.",
            u.cursor,
          ),
          n("warning")(
            !Object.prototype.hasOwnProperty.call(a, u.count),
            "Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.",
            u.count,
          ));
        var m = babelHelpers.extends(
          {},
          o,
          a,
          ((d = {}), (d[u.cursor] = r), (d[u.count] = t), d),
        );
        return (
          c && c.cursor && (m[c.cursor] = null),
          c && c.count && (m[c.count] = null),
          m
        );
      }
      ((c != null && c.count != null && c.cursor != null) || l(0, 19802),
        n("warning")(
          !Object.prototype.hasOwnProperty.call(a, c.cursor),
          "Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.",
          c.cursor,
        ),
        n("warning")(
          !Object.prototype.hasOwnProperty.call(a, c.count),
          "Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.",
          c.count,
        ));
      var p = babelHelpers.extends(
        {},
        o,
        a,
        ((s = {}), (s[c.cursor] = r), (s[c.count] = t), s),
      );
      return (
        u && u.cursor && (p[u.cursor] = null),
        u && u.count && (p[u.count] = null),
        p
      );
    }
    a.exports = e;
  },
  null,
);
