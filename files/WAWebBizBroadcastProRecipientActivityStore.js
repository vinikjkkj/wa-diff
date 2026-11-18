__d(
  "WAWebBizBroadcastProRecipientActivityStore",
  [
    "Promise",
    "WAWebBizBroadcastProRecipientActivityEvents",
    "WAWebBizBroadcastProRecipientActivityRequest",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 4,
      c = { activity: [], isLoading: !0, error: null },
      d = new Map(),
      m = null,
      p = null,
      _ = 0;
    function f(e) {
      var t = h(
        e,
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).getProRecipientActivityAccountKey(),
      );
      return (
        b(),
        (t.keepLoading =
          t.keepLoading || t.request != null || t.completed == null),
        D(t)
      );
    }
    function g(e, t) {
      var n = Array.from(new Set(e)).sort(),
        r = n.join(","),
        a = d.get(r);
      return t ===
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).getProRecipientActivityAccountKey() &&
        a != null &&
        a.accountKey === t
        ? a.store
        : y(n, t, r);
    }
    function h(e, t) {
      t !== p &&
        (d.forEach(function (e) {
          ((e.context = null), I(e));
        }),
        d.clear(),
        (p = t));
      var n = Array.from(new Set(e)).sort(),
        r = n.join(","),
        o = d.get(r);
      if (o != null) return ((o.lastAccess = ++_), o);
      var a = {
        accountKey: t,
        candidateLids: n,
        listeners: new Set(),
        state: c,
        version: 0,
        context: null,
        request: null,
        completed: null,
        timer: null,
        keepLoading: !1,
        hasReceivedClear: !1,
        completedAt: 0,
        lastAccess: ++_,
        store: y(n, t, r),
      };
      return (d.set(r, a), C(), a);
    }
    function y(e, t, n) {
      var r = function () {
        if (
          t !==
          o(
            "WAWebBizBroadcastProRecipientActivityEvents",
          ).getProRecipientActivityAccountKey()
        )
          return null;
        var r = d.get(n);
        return r != null && r.accountKey === t
          ? ((r.lastAccess = ++_), r)
          : h(e, t);
      };
      return {
        getSnapshot: function () {
          if (
            !o(
              "WAWebBizBroadcastProRecipientActivityEvents",
            ).isProRecipientActivityReadAvailable(t)
          )
            return c;
          var e = d.get(n);
          return e != null && e.accountKey === t ? e.state : c;
        },
        subscribe: function (t) {
          var e = r();
          return e == null ? function () {} : S(e, t);
        },
        retry: function () {
          var e = r();
          e != null &&
            (E(e),
            I(e),
            e.keepLoading || ((e.context = null), (e.request = null)),
            R(e),
            C());
        },
      };
    }
    function C() {
      var e = Array.from(d)
        .filter(function (e) {
          var t = e[0],
            n = e[1];
          return n.listeners.size === 0 && n.request == null && !n.keepLoading;
        })
        .sort(function (e, t) {
          var n = e[0],
            r = e[1],
            o = t[0],
            a = t[1];
          return r.lastAccess - a.lastAccess;
        });
      for (var t of e.slice(0, Math.max(0, e.length - u))) {
        var n = t[0],
          r = t[1];
        ((r.context = null),
          (r.completed = null),
          (r.state = c),
          I(r),
          d.delete(n));
      }
    }
    function b() {
      m == null &&
        (m = o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).subscribeProRecipientActivityEvents(k));
    }
    function v() {
      var e = m;
      e == null ||
        Array.from(d.values()).some(function (e) {
          return e.listeners.size > 0 || e.keepLoading;
        }) ||
        ((m = null),
        e(),
        d.forEach(function (e) {
          ((e.context = null), (e.request = null), E(e), I(e));
        }),
        C());
    }
    function S(e, t) {
      return (
        e.listeners.add(t),
        b(),
        R(e),
        function () {
          (e.listeners.delete(t),
            e.listeners.size === 0 &&
              (I(e),
              e.keepLoading || ((e.context = null), (e.request = null)),
              C(),
              v()));
        }
      );
    }
    function R(e) {
      e.listeners.size > 0 && D(e).catch(function () {});
    }
    function L(e, t) {
      ((e.state = t),
        e.listeners.forEach(function (e) {
          return e();
        }));
    }
    function E(e) {
      (e.version++, (e.completed = null), L(e, c));
    }
    function k(e, t) {
      var n = e == null ? null : new Set(e);
      d.forEach(function (e) {
        if (
          !(
            n != null &&
            !e.candidateLids.some(function (e) {
              return n.has(e);
            })
          )
        ) {
          E(e);
          var r =
            t &&
            e.request == null &&
            (!e.hasReceivedClear || Date.now() - e.completedAt >= s);
          if (((e.hasReceivedClear = e.hasReceivedClear || t), r)) {
            (I(e), R(e));
            return;
          }
          T(e);
        }
      });
    }
    function I(e) {
      var t = e.timer;
      t != null && ((e.timer = null), window.clearTimeout(t.id), t.wake());
    }
    function T(e) {
      if (
        !(
          e.timer != null ||
          e.request != null ||
          e.listeners.size === 0 ||
          !e.state.isLoading
        )
      ) {
        var t = window.setTimeout(function () {
          ((e.timer = null), R(e));
        }, s);
        e.timer = { id: t, wake: function () {} };
      }
    }
    function D(t) {
      if (t.request != null) return t.request;
      if (
        !o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(t.accountKey)
      )
        return (
          (t.keepLoading = !1),
          C(),
          v(),
          (e || (e = n("Promise"))).reject(
            r("err")("Pro recipient activity history unavailable"),
          )
        );
      if (t.completed != null) return t.completed;
      (I(t), L(t, c));
      var a = {};
      t.context = a;
      var i = t.version,
        l = o("WAWebBizBroadcastProRecipientActivityRequest")
          .runProRecipientActivityRequest(t, a, function (r) {
            ((i = t.version),
              r.error == null &&
                (t.completed = (e || (e = n("Promise"))).resolve(r.activity)),
              L(t, r));
          })
          .finally(function () {
            t.request === l &&
              ((t.context = null),
              I(t),
              (t.request = null),
              (t.keepLoading = !1),
              (t.completedAt = Date.now()),
              (t.lastAccess = ++_),
              T(t),
              C());
            try {
              o(
                "WAWebBizBroadcastProRecipientActivityRequest",
              ).assertProRecipientActivityResultCurrent(t, i);
            } finally {
              v();
            }
          });
      return ((t.request = l), l);
    }
    ((l.getProRecipientActivitySnapshot = f),
      (l.getProRecipientActivityStore = g));
  },
  98,
);
