__d(
  "RelayAsyncStreamPool",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 0,
      u = 1,
      c = 2,
      d = (function () {
        function t() {
          ((this.$1 = 0), (this.$2 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.forceComplete = function (n) {
            var t = this.$3(n);
            if (t.status === e) {
              var r = t.observers;
              ((t.status = c),
                t.events.push({
                  kind: "complete",
                  sequenceNumber: t.events.length,
                }),
                (t.observers = new Map()),
                r.forEach(function (e) {
                  return e.complete();
                }));
            }
          }),
          (n.forceError = function (n, r) {
            var t = this.$3(n);
            if (t.status === e) {
              var o = t.observers;
              ((t.status = c),
                t.events.push({
                  kind: "error",
                  error: r,
                  sequenceNumber: t.events.length,
                }),
                (t.observers = new Map()),
                o.forEach(function (e) {
                  return e.error(r);
                }));
            }
          }),
          (n.complete = function (n, r) {
            (Number.isInteger(r) && r >= 0) || s(0, 14878, r);
            var t = this.$3(n);
            if (t.status === e) {
              var o = t.events.length;
              if (r === o) {
                var a = t.observers;
                ((t.status = c),
                  t.events.push({ kind: "complete", sequenceNumber: r }),
                  (t.observers = new Map()),
                  a.forEach(function (e) {
                    return e.complete();
                  }));
              } else
                ((r > o &&
                  !Object.prototype.hasOwnProperty.call(t.pendingEvents, r)) ||
                  s(0, 89563, r, n, o, t.pendingEvents.length),
                  (t.status = u),
                  (t.pendingEvents[r] = {
                    kind: "complete",
                    sequenceNumber: r,
                  }));
            }
          }),
          (n.error = function (n, r, o) {
            (Number.isInteger(o) && o >= 0) || s(0, 14878, o);
            var t = this.$3(n);
            if (t.status === e) {
              var a = t.events.length;
              if (o === a) {
                var i = t.observers;
                ((t.status = c),
                  t.events.push({ kind: "error", error: r, sequenceNumber: o }),
                  (t.observers = new Map()),
                  i.forEach(function (e) {
                    return e.error(r);
                  }));
              } else
                ((o > a &&
                  !Object.prototype.hasOwnProperty.call(t.pendingEvents, o)) ||
                  s(0, 14879, o, n),
                  (t.status = u),
                  (t.pendingEvents[o] = {
                    kind: "error",
                    error: r,
                    sequenceNumber: o,
                  }));
            }
          }),
          (n.next = function (t, n, r) {
            (Number.isInteger(r) && r >= 0) || s(0, 14878, r);
            var e = this.$3(t);
            if (e.status !== c) {
              var o = e.events.length;
              if (r === o) {
                var a = e.observers;
                (e.events.push({ kind: "next", data: n, sequenceNumber: r }),
                  a.forEach(function (e) {
                    return e.next(n);
                  }));
                for (
                  var i = e.pendingEvents,
                    l = function () {
                      var n = i[d];
                      if (n == null) return 0;
                      switch ((e.events.push(n), n.kind)) {
                        case "complete":
                          return (
                            (e.status = c),
                            (e.observers = new Map()),
                            a.forEach(function (e) {
                              return e.complete();
                            }),
                            { v: void 0 }
                          );
                        case "error":
                          return (
                            (e.status = c),
                            (e.observers = new Map()),
                            a.forEach(function (e) {
                              return e.error(n.error);
                            }),
                            { v: void 0 }
                          );
                        case "next":
                          a.forEach(function (e) {
                            return e.next(n.data);
                          });
                          break;
                        default:
                          (n.kind, s(0, 14593, n.kind, t));
                      }
                    },
                    u,
                    d = o + 1;
                  d < i.length && ((u = l()), u !== 0);
                  d++
                )
                  if (u) return u.v;
              } else
                ((r > o &&
                  !Object.prototype.hasOwnProperty.call(e.pendingEvents, r)) ||
                  s(0, 14879, r, t),
                  (e.pendingEvents[r] = {
                    kind: "next",
                    data: n,
                    sequenceNumber: r,
                  }));
            }
          }),
          (n.clear = function (t) {
            this.$2.delete(t);
          }),
          (n.has = function (t) {
            return this.$2.has(t);
          }),
          (n.subscribe = function (t, n) {
            var e = this.$3(t),
              r = this.$1++,
              o = e.events;
            o.length !== 0 &&
              o.forEach(function (e) {
                switch (e.kind) {
                  case "complete":
                    n.complete();
                    break;
                  case "error":
                    n.error(e.error);
                    break;
                  case "next":
                    n.next(e.data);
                    break;
                  default:
                    (e.kind, s(0, 14593, e.kind, t));
                }
              });
            var a = e.observers;
            a.set(r, n);
            var i = {
              unsubscribe: function () {
                a.delete(r);
              },
            };
            return (n.start(i), i);
          }),
          (n.$3 = function (n) {
            var t = this.$2.get(n);
            return (
              t == null &&
                ((t = {
                  status: e,
                  events: [],
                  observers: new Map(),
                  pendingEvents: [],
                }),
                this.$2.set(n, t)),
              t
            );
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
