__d(
  "WAWebDebugCommandSearchModel",
  ["WAWebDebugCommandCollection", "WAWebSearchModel", "WAWebSearchUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(o)) || this),
          (t.commands = r("WAWebDebugCommandCollection")),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.queryFn = function (t) {
          var e = this.commands
            .query(o("WAWebSearchUtils").normalizeString(t))
            .map(function (e) {
              return { id: e.id, type: "debug-command", data: e };
            });
          return { results: e, type: "debug-command" };
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    l.DebugCommandSearch = e;
  },
  98,
);
