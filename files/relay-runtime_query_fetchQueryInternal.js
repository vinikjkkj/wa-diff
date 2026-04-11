__d(
  "relay-runtime/query/fetchQueryInternal",
  [
    "invariant",
    "Promise",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/util/RelayReplaySubject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = typeof WeakMap == "function",
      u = s ? new WeakMap() : new Map();
    function c(e, t) {
      return d(e, t.request.identifier, function () {
        return e.execute({ operation: t });
      });
    }
    function d(e, t, r) {
      return n("relay-runtime/network/RelayObservable").create(function (o) {
        var a = g(e),
          i = a.get(t);
        return (
          i ||
            r()
              .finally(function () {
                return a.delete(t);
              })
              .subscribe({
                start: function (r) {
                  ((i = {
                    identifier: t,
                    subject: new (n("relay-runtime/util/RelayReplaySubject"))(),
                    subjectForInFlightStatus: new (n(
                      "relay-runtime/util/RelayReplaySubject",
                    ))(),
                    subscription: r,
                    promise: null,
                  }),
                    a.set(t, i));
                },
                next: function (n) {
                  var e = h(a, t);
                  (e.subject.next(n), e.subjectForInFlightStatus.next(n));
                },
                error: function (n) {
                  var e = h(a, t);
                  (e.subject.error(n), e.subjectForInFlightStatus.error(n));
                },
                complete: function () {
                  var e = h(a, t);
                  (e.subject.complete(), e.subjectForInFlightStatus.complete());
                },
                unsubscribe: function (n) {
                  var e = h(a, t);
                  (e.subject.unsubscribe(),
                    e.subjectForInFlightStatus.unsubscribe());
                },
              }),
          i != null || l(0, 15078),
          m(a, i).subscribe(o)
        );
      });
    }
    function m(e, t) {
      return n("relay-runtime/network/RelayObservable").create(function (n) {
        var r = t.subject.subscribe(n);
        return function () {
          r.unsubscribe();
          var n = e.get(t.identifier);
          if (n) {
            var o = n.subscription;
            o != null &&
              n.subject.getObserverCount() === 0 &&
              (o.unsubscribe(), e.delete(t.identifier));
          }
        };
      });
    }
    function p(e, t, r) {
      return n("relay-runtime/network/RelayObservable").create(function (t) {
        var n = r.subjectForInFlightStatus.subscribe({
          error: t.error,
          next: function (o) {
            if (!e.isRequestActive(r.identifier)) {
              t.complete();
              return;
            }
            t.next();
          },
          complete: t.complete,
          unsubscribe: t.complete,
        });
        return function () {
          n.unsubscribe();
        };
      });
    }
    function _(t, r) {
      var o = g(t),
        a = o.get(r.identifier);
      if (!a || !t.isRequestActive(a.identifier)) return null;
      var i = new (e || (e = n("Promise")))(function (e, n) {
        var r = !1;
        (p(t, o, a).subscribe({
          complete: e,
          error: n,
          next: function (n) {
            r && e(n);
          },
        }),
          (r = !0));
      });
      return i;
    }
    function f(e, t) {
      var n = g(e),
        r = n.get(t.identifier);
      return !r || !e.isRequestActive(r.identifier) ? null : p(e, n, r);
    }
    function g(e) {
      var t = u.get(e);
      if (t != null) return t;
      var n = new Map();
      return (u.set(e, n), n);
    }
    function h(e, t) {
      var n = e.get(t);
      return (n != null || l(0, 15079), n);
    }
    a.exports = {
      fetchQuery: c,
      fetchQueryDeduped: d,
      getPromiseForActiveRequest: _,
      getObservableForActiveRequest: f,
    };
  },
  null,
);
