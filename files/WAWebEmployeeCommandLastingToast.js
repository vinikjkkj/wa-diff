__d(
  "WAWebEmployeeCommandLastingToast",
  ["WDSToastImperativeHost", "uniqueID"],
  function (t, n, r, o, a, i, l) {
    var e = 3e3,
      s = 4e3,
      u = 7e3,
      c = 75,
      d = 1050,
      m = [],
      p = null,
      _ = null;
    function f(e) {
      var t = e.action,
        n = e.durationMs,
        o = e.msg;
      (b(),
        m.push({
          action: t,
          acted: !1,
          dedupId: r("uniqueID")("employee-command-toast"),
          msg: o,
          remainingMs: n,
          shownRefreshes: 0,
        }),
        g());
    }
    function g() {
      var t = m.at(-1);
      if (t != null) {
        if (t.remainingMs <= 0) {
          (m.pop(), g());
          return;
        }
        ((t.shownRefreshes = 0),
          C(t),
          (p = window.setInterval(function () {
            (t.shownRefreshes++,
              t.shownRefreshes * e >= t.remainingMs ? h(t) : C(t));
          }, e)));
      }
    }
    function h(t) {
      (m.pop(), S(), m.length > 0 && (_ = window.setTimeout(g, y(t.msg) - e)));
    }
    function y(e) {
      return (String(e).length >= c ? u : s) + d;
    }
    function C(e) {
      o("WDSToastImperativeHost").showWDSToast({
        type: "default",
        message: e.msg,
        dedupId: e.dedupId,
        isAnchoredToBottom: !0,
        testid: "toast-body",
        action: {
          label: e.action.actionText,
          onPress: function () {
            e.acted || ((e.acted = !0), v(e), e.action.onAction());
          },
          testid: e.action.testid,
        },
      });
    }
    function b() {
      var t = m.at(-1);
      (t != null &&
        ((t.remainingMs -= t.shownRefreshes * e), (t.shownRefreshes = 0)),
        S());
    }
    function v(e) {
      var t = m.indexOf(e);
      t !== -1 && (m.splice(t, 1), t === m.length && (S(), g()));
    }
    function S() {
      (p != null && (window.clearInterval(p), (p = null)),
        _ != null && (window.clearTimeout(_), (_ = null)));
    }
    l.showLastingToast = f;
  },
  98,
);
