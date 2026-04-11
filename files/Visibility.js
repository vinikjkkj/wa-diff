__d(
  "Visibility",
  ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
      (document.hidden !== void 0
        ? ((s = "hidden"), (u = "visibilitychange"))
        : document.mozHidden !== void 0
          ? ((s = "mozHidden"), (u = "mozvisibilitychange"))
          : document.msHidden !== void 0
            ? ((s = "msHidden"), (u = "msvisibilitychange"))
            : document.webkitHidden !== void 0 &&
              ((s = "webkitHidden"), (u = "webkitvisibilitychange")));
    var c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.HIDDEN = "hidden"),
            (e.VISIBLE = "visible"),
            (e.hiddenKey = s),
            (e.hiddenEvent = u),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.isHidden = function () {
            return s ? document[s] : !1;
          }),
          (o.isSupported = function () {
            return (
              (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              document.addEventListener &&
              u !== void 0
            );
          }),
          n
        );
      })(r("BaseEventEmitter")),
      d = new c();
    d.isSupported() &&
      document.addEventListener(
        d.hiddenEvent,
        r("TimeSlice").guard(function (t) {
          d.emit(d.isHidden() ? d.HIDDEN : d.VISIBLE, {
            changeTime: t.timeStamp,
          });
        }, "visibility change"),
      );
    var m = d;
    l.default = m;
  },
  98,
);
