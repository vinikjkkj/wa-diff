__d(
  "WAWebHatchVmRedialScheduler",
  ["Random"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 6e4,
      u = 1e3,
      c = 0.3,
      d = 3e4;
    function m(t) {
      var n = null,
        o = !1,
        a = null,
        i = null,
        l = !1,
        m = !1,
        f = new Set();
      function g(e, t) {
        a = t;
        e: {
          if (e === "ready") {
            b();
            break e;
          }
          if (e === "final") {
            ((o = !1), I(), v());
            break e;
          }
          if (e === "retryable") {
            C();
            break e;
          }
          if (e === "other") {
            n != null && (n.lastEndAt = Date.now());
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      }
      function h() {
        S() || (w("visible", t.isVisible) ? R("visible") : I());
      }
      function y() {
        !S() && P() && R("online");
      }
      function C() {
        if (!S()) {
          var e =
            n != null
              ? n
              : {
                  attempts: 0,
                  lastEndAt: 0,
                  offsetMs: r("Random").random() * d,
                };
          ((e.lastEndAt = Date.now()), (n = e), (o = !0), v());
        }
      }
      function b() {
        (I(), (n = null), (o = !1), (l = !1), v());
      }
      function v() {
        var r = o && n != null && (i != null || l || n.attempts < e);
        r !== m &&
          ((m = r),
          p(function () {
            return t.onListeningChange(r);
          }));
      }
      function S() {
        return M() ? !1 : (b(), !0);
      }
      function R(e) {
        var t = n;
        t == null ||
          x() ||
          !E(t) ||
          !$() ||
          L({ episode: t, n: t.attempts + 1, trigger: e });
      }
      function L(e) {
        var t = e.episode,
          n = 1 + c * (2 * r("Random").random() - 1),
          o = t.lastEndAt + s - Date.now(),
          a = Math.max(0, o) + u * n + t.offsetMs,
          l = self.setTimeout(function () {
            return k(e);
          }, a);
        i = {
          attempt: e,
          clear: function () {
            return self.clearTimeout(l);
          },
        };
      }
      function E(t) {
        return o && i == null && !l && t.attempts < e;
      }
      function k(e) {
        if (((i = null), x() || S())) {
          D(e, "stopped");
          return;
        }
        var t = n,
          r = a;
        if (t == null || t !== e.episode || !o || r == null || !$()) {
          D(e, "stopped");
          return;
        }
        if (!_(t)) {
          L(e);
          return;
        }
        (t.attempts++, (l = !0));
        var s = function () {
            return n === t && o && P() && N();
          },
          u;
        try {
          u = r.dial(s);
        } catch (t) {
          T(e, "exhausted");
          return;
        }
        u.then(
          function (t) {
            return T(e, t);
          },
          function () {
            return T(e, "exhausted");
          },
        );
      }
      function I() {
        var e = i;
        e != null && ((i = null), e.clear(), D(e.attempt, "stopped"));
      }
      function T(e, t) {
        D(e, t);
        var r = n;
        r == null ||
          r !== e.episode ||
          ((l = !1), (r.lastEndAt = Date.now()), S() || v());
      }
      function D(e, n) {
        p(function () {
          return t.onAttempt(n, e.n, e.trigger);
        });
      }
      function x() {
        var e = a;
        return e == null || !w("session", e.hasSession) ? !1 : (b(), !0);
      }
      function $() {
        var e = a;
        return e != null && !w("connecting", e.isConnecting, !0) && P() && N();
      }
      function P() {
        return w("online", t.isOnline);
      }
      function N() {
        return (
          w("visible", t.isVisible) && M() && w("account", t.isAccountReady)
        );
      }
      function M() {
        return w("knob", t.isEnabled);
      }
      function w(e, n, r) {
        r === void 0 && (r = !1);
        try {
          return n();
        } catch (n) {
          return (
            f.has(e) ||
              (f.add(e),
              p(function () {
                return t.onCheckFailed(e, n);
              })),
            r
          );
        }
      }
      return {
        noteCycleEnd: g,
        noteOnlineChange: y,
        noteVisibilityChange: h,
        stop: b,
      };
    }
    function p(e) {
      try {
        e();
      } catch (e) {}
    }
    function _(e) {
      return Date.now() - e.lastEndAt >= s;
    }
    l.createHatchVmRedialScheduler = m;
  },
  98,
);
