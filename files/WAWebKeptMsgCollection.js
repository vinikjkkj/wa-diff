__d(
  "WAWebKeptMsgCollection",
  ["WAWebBaseCollection", "WAWebMsgModel", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.isSynced = !0),
          (t.syncPromise = null),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.process = function () {}),
        (r.sync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.updateMsgs = function () {}),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebMsgModel").Msg),
      (e.comparator = function (e, t) {
        return t.t - e.t;
      }),
      (l.KeptMsgCollection = e));
  },
  98,
);
