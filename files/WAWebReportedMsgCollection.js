__d(
  "WAWebReportedMsgCollection",
  ["WAWebBaseCollection", "WAWebMsgModel"],
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
      var n = t.prototype;
      return (
        (n.process = function () {}),
        (n.sync = async function () {}),
        (n.updateMsgs = function () {}),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebMsgModel").Msg),
      (e.comparator = function (e, t) {
        return t.t - e.t;
      }),
      (l.ReportedMsgCollection = e));
  },
  98,
);
