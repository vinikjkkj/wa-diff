__d(
  "WATaskScheduleApi",
  [
    "MAWTransactionMode",
    "Promise",
    "WADbTransactor",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = o("WADbTransactor").makeSignalTransactor(
        { tasks: o("MAWTransactionMode").READONLY },
        "getTasksScheduledTime",
        function (e) {
          return function (t) {
            return e.tasks.get(t).then(function (e) {
              return e == null ? null : e.scheduledTime;
            });
          };
        },
      ),
      c = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (s.has(t)) return (e || (e = n("Promise"))).resolve(s.get(t));
          var r = yield u(t);
          return (r != null && s.set(t, r), r);
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      d = o("WADbTransactor").makeSignalTransactor(
        { tasks: o("MAWTransactionMode").READWRITE },
        "setTaskScheduledTime",
        function (e) {
          return function (t, n) {
            return (
              s.set(t, n),
              e.tasks
                .put({ scheduledTime: n, taskName: t })
                .then(function () {})
            );
          };
        },
      );
    function m() {
      return s;
    }
    function p(e, t) {
      s.set(e, t);
    }
    function _() {
      s.clear();
    }
    ((l.getTaskScheduledTime = c),
      (l.setTaskScheduledTime = d),
      (l.getTaskScheduleCache = m),
      (l.setTaskScheduleCache = p),
      (l.clearTaskScheduleCache = _));
  },
  98,
);
