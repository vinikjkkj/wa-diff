__d(
  "CometUserActivityMonitor",
  [
    "ErrorGuard",
    "ExecutionEnvironment",
    "SubscriptionsHandler",
    "UFI2UserActivityIdleTimeout",
    "UserActivity",
    "Visibility",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [],
      c = !1,
      d =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        r("UserActivity").isOnTab() &&
        r("UserActivity").isActive(r("UFI2UserActivityIdleTimeout"))
          ? "ACTIVE"
          : "INACTIVE",
      m = [],
      p;
    function _(e) {
      ((c = !0), m.push.apply(m, u));
      for (
        var t = function () {
          var t = m.shift();
          t != null &&
            (s || (s = r("ErrorGuard"))).applyWithGuard(
              function () {
                return t(e);
              },
              null,
              [],
              { name: "CometUserActivityMonitor" },
            );
        };
        m.length;
      )
        t();
      c = !1;
    }
    function f(e) {
      var t = d;
      ((d = e), t !== e && _(e));
    }
    function g() {
      return d;
    }
    var h = function () {
      p == null &&
        ((p = new (r("SubscriptionsHandler"))()),
        p.addSubscriptions(
          r("UserActivity").subscribe(function (e, t) {
            var n = t.event;
            (/^mouse(enter|leave|move|over|out)$/.test(n.type) &&
              r("UserActivity").isOnTab() === !1) ||
              f("ACTIVE");
          }),
          (function () {
            var e = function () {
              f("INACTIVE");
            };
            return (
              window.addEventListener("blur", e, { passive: !0 }),
              {
                remove: function () {
                  return window.removeEventListener(e);
                },
              }
            );
          })(),
          r("Visibility").addListener(r("Visibility").HIDDEN, function () {
            f("INACTIVE");
          }),
        ));
    };
    function y(e) {
      (u.push(e), c && m.push(e));
      var t = !1;
      return {
        remove: function () {
          if (!t) {
            var n = u.indexOf(e);
            if ((n !== -1 && u.splice(n, 1), c)) {
              var r = m.indexOf(e);
              r !== -1 && m.splice(r, 1);
            }
            t = !0;
          }
        },
      };
    }
    ((e || (e = r("ExecutionEnvironment"))).canUseDOM && h(),
      (l.getActivityState = g),
      (l.init = h),
      (l.subscribe = y));
  },
  98,
);
