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
      d = babelHelpers.extends({}, c, { isHistoryUnavailable: !0 }),
      m = new Map(),
      p = null,
      _ = null,
      f = 0;
    function g(e) {
      var t = y(
        e,
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).getProRecipientActivityAccountKey(),
      );
      return (
        v(),
        (t.keepLoading =
          t.keepLoading || t.request != null || t.completed == null),
        x(t)
      );
    }
    function h(e, t) {
      var n = Array.from(new Set(e)).sort(),
        r = n.join(","),
        a = m.get(r);
      return t ===
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).getProRecipientActivityAccountKey() &&
        a != null &&
        a.accountKey === t
        ? a.store
        : C(n, t, r);
    }
    function y(e, t) {
      t !== _ &&
        (m.forEach(function (e) {
          ((e.context = null), T(e));
        }),
        m.clear(),
        (_ = t));
      var n = Array.from(new Set(e)).sort(),
        r = n.join(","),
        o = m.get(r);
      if (o != null) return ((o.lastAccess = ++f), o);
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
        lastAccess: ++f,
        store: C(n, t, r),
      };
      return (m.set(r, a), b(), a);
    }
    function C(e, t, n) {
      var r = function () {
        if (
          t !==
          o(
            "WAWebBizBroadcastProRecipientActivityEvents",
          ).getProRecipientActivityAccountKey()
        )
          return null;
        var r = m.get(n);
        return r != null && r.accountKey === t
          ? ((r.lastAccess = ++f), r)
          : y(e, t);
      };
      return {
        getSnapshot: function () {
          if (
            !o(
              "WAWebBizBroadcastProRecipientActivityEvents",
            ).isProRecipientActivityReadAvailable(t)
          )
            return t !== "" &&
              t ===
                o(
                  "WAWebBizBroadcastProRecipientActivityEvents",
                ).getProRecipientActivityAccountKey()
              ? d
              : c;
          var e = m.get(n);
          return e != null && e.accountKey === t ? e.state : c;
        },
        subscribe: function (t) {
          var e = r();
          return e == null ? function () {} : R(e, t);
        },
        retry: function () {
          var e = r();
          e != null &&
            (k(e),
            T(e),
            e.keepLoading || ((e.context = null), (e.request = null)),
            L(e),
            b());
        },
      };
    }
    function b() {
      var e = Array.from(m)
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
          T(r),
          m.delete(n));
      }
    }
    function v() {
      p == null &&
        (p = o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).subscribeProRecipientActivityEvents(I));
    }
    function S() {
      var e = p;
      e == null ||
        Array.from(m.values()).some(function (e) {
          return e.listeners.size > 0 || e.keepLoading;
        }) ||
        ((p = null),
        e(),
        m.forEach(function (e) {
          ((e.context = null), (e.request = null), k(e), T(e));
        }),
        b());
    }
    function R(e, t) {
      return (
        e.listeners.add(t),
        v(),
        L(e),
        function () {
          (e.listeners.delete(t),
            e.listeners.size === 0 &&
              (T(e),
              e.keepLoading || ((e.context = null), (e.request = null)),
              b(),
              S()));
        }
      );
    }
    function L(e) {
      e.listeners.size > 0 && x(e).catch(function () {});
    }
    function E(e, t) {
      ((e.state = t),
        e.listeners.forEach(function (e) {
          return e();
        }));
    }
    function k(e) {
      (e.version++, (e.completed = null), E(e, c));
    }
    function I(e, t) {
      var n = e == null ? null : new Set(e);
      m.forEach(function (e) {
        if (
          !(
            n != null &&
            !e.candidateLids.some(function (e) {
              return n.has(e);
            })
          )
        ) {
          k(e);
          var r =
            t &&
            e.request == null &&
            (!e.hasReceivedClear || Date.now() - e.completedAt >= s);
          if (((e.hasReceivedClear = e.hasReceivedClear || t), r)) {
            (T(e), L(e));
            return;
          }
          D(e);
        }
      });
    }
    function T(e) {
      var t = e.timer;
      t != null && ((e.timer = null), window.clearTimeout(t.id), t.wake());
    }
    function D(e) {
      if (
        !(
          e.timer != null ||
          e.request != null ||
          e.listeners.size === 0 ||
          !e.state.isLoading
        )
      ) {
        var t = window.setTimeout(function () {
          ((e.timer = null), L(e));
        }, s);
        e.timer = { id: t, wake: function () {} };
      }
    }
    function x(t) {
      if (t.request != null) return t.request;
      if (
        !o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(t.accountKey)
      )
        return (
          (t.keepLoading = !1),
          b(),
          S(),
          (e || (e = n("Promise"))).reject(
            r("err")("Pro recipient activity history unavailable"),
          )
        );
      if (t.completed != null) return t.completed;
      (T(t), E(t, c));
      var a = {};
      t.context = a;
      var i = t.version,
        l = o("WAWebBizBroadcastProRecipientActivityRequest")
          .runProRecipientActivityRequest(t, a, function (r) {
            ((i = t.version),
              r.error == null &&
                (t.completed = (e || (e = n("Promise"))).resolve(r.activity)),
              E(t, r));
          })
          .finally(function () {
            t.request === l &&
              ((t.context = null),
              T(t),
              (t.request = null),
              (t.keepLoading = !1),
              (t.completedAt = Date.now()),
              (t.lastAccess = ++f),
              D(t),
              b());
            try {
              o(
                "WAWebBizBroadcastProRecipientActivityRequest",
              ).assertProRecipientActivityResultCurrent(t, i);
            } finally {
              S();
            }
          });
      return ((t.request = l), l);
    }
    ((l.getProRecipientActivitySnapshot = g),
      (l.getProRecipientActivityStore = h));
  },
  98,
);
