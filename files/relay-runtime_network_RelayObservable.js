__d(
  "relay-runtime/network/RelayObservable",
  ["Promise", "relay-runtime/util/isPromise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = _,
      s = (function () {
        function t(e) {
          this.$1 = e;
        }
        ((t.create = function (n) {
          return new t(n);
        }),
          (t.onUnhandledError = function (t) {
            l = t;
          }),
          (t.from = function (t) {
            return u(t)
              ? c(t)
              : n("relay-runtime/util/isPromise")(t)
                ? d(t)
                : m(t);
          }));
        var r = t.prototype;
        return (
          (r.catch = function (n) {
            var e = this;
            return t.create(function (t) {
              var r;
              return (
                e.subscribe({
                  start: function (t) {
                    r = t;
                  },
                  next: t.next,
                  complete: t.complete,
                  error: function (o) {
                    try {
                      n(o).subscribe({
                        start: function (t) {
                          r = t;
                        },
                        next: t.next,
                        complete: t.complete,
                        error: t.error,
                      });
                    } catch (e) {
                      t.error(e, !0);
                    }
                  },
                }),
                function () {
                  return r.unsubscribe();
                }
              );
            });
          }),
          (r.concat = function (n) {
            var e = this;
            return t.create(function (t) {
              var r;
              return (
                e.subscribe({
                  start: function (t) {
                    r = t;
                  },
                  next: t.next,
                  error: t.error,
                  complete: function () {
                    r = n.subscribe(t);
                  },
                }),
                function () {
                  r && r.unsubscribe();
                }
              );
            });
          }),
          (r.do = function (n) {
            var e = this;
            return t.create(function (t) {
              var r = function (r) {
                return function () {
                  try {
                    n[r] && n[r].apply(n, arguments);
                  } catch (e) {
                    l(e, !0);
                  }
                  t[r] && t[r].apply(t, arguments);
                };
              };
              return e.subscribe({
                start: r("start"),
                next: r("next"),
                error: r("error"),
                complete: r("complete"),
                unsubscribe: r("unsubscribe"),
              });
            });
          }),
          (r.finally = function (n) {
            var e = this;
            return t.create(function (t) {
              var r = e.subscribe(t);
              return function () {
                (r.unsubscribe(), n());
              };
            });
          }),
          (r.ifEmpty = function (n) {
            var e = this;
            return t.create(function (t) {
              var r = !1,
                o;
              return (
                (o = e.subscribe({
                  next: function (n) {
                    ((r = !0), t.next(n));
                  },
                  error: t.error,
                  complete: function () {
                    r ? t.complete() : (o = n.subscribe(t));
                  },
                })),
                function () {
                  o && o.unsubscribe();
                }
              );
            });
          }),
          (r.subscribe = function (t) {
            return p(this.$1, t);
          }),
          (r.map = function (n) {
            var e = this;
            return t.create(function (t) {
              var r = e.subscribe({
                complete: t.complete,
                error: t.error,
                next: function (r) {
                  try {
                    var e = n(r);
                    t.next(e);
                  } catch (e) {
                    t.error(e, !0);
                  }
                },
              });
              return function () {
                r.unsubscribe();
              };
            });
          }),
          (r.mergeMap = function (n) {
            var e = this;
            return t.create(function (r) {
              var o = [];
              function a(e) {
                ((this.$2 = e), o.push(e));
              }
              function i() {
                (o.splice(o.indexOf(this.$2), 1),
                  o.length === 0 && r.complete());
              }
              return (
                e.subscribe({
                  start: a,
                  next: function (o) {
                    try {
                      r.closed ||
                        t
                          .from(n(o))
                          .subscribe({
                            start: a,
                            next: r.next,
                            error: r.error,
                            complete: i,
                          });
                    } catch (e) {
                      r.error(e, !0);
                    }
                  },
                  error: r.error,
                  complete: i,
                }),
                function () {
                  (o.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    (o.length = 0));
                }
              );
            });
          }),
          (r.poll = function (n) {
            var e = this;
            return t.create(function (t) {
              var r,
                o,
                a = function () {
                  r = e.subscribe({
                    next: t.next,
                    error: t.error,
                    complete: function () {
                      o = setTimeout(a, n);
                    },
                  });
                };
              return (
                a(),
                function () {
                  (clearTimeout(o), r.unsubscribe());
                }
              );
            });
          }),
          (r.toPromise = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var r = !1;
              t.subscribe({
                next: function (n) {
                  r || ((r = !0), e(n));
                },
                error: n,
                complete: e,
              });
            });
          }),
          t
        );
      })();
    function u(e) {
      return (
        typeof e == "object" && e !== null && typeof e.subscribe == "function"
      );
    }
    function c(e) {
      return e instanceof s
        ? e
        : s.create(function (t) {
            return e.subscribe(t);
          });
    }
    function d(e) {
      return s.create(function (t) {
        e.then(function (e) {
          (t.next(e), t.complete());
        }, t.error);
      });
    }
    function m(e) {
      return s.create(function (t) {
        (t.next(e), t.complete());
      });
    }
    function p(e, t) {
      var n = !1,
        r,
        o = function (t) {
          return Object.defineProperty(t, "closed", {
            get: function () {
              return n;
            },
          });
        };
      function a() {
        if (r) {
          if (r.unsubscribe) r.unsubscribe();
          else
            try {
              r();
            } catch (e) {
              l(e, !0);
            }
          r = void 0;
        }
      }
      var i = o({
        unsubscribe: function () {
          if (!n) {
            n = !0;
            try {
              t.unsubscribe && t.unsubscribe(i);
            } catch (e) {
              l(e, !0);
            } finally {
              a();
            }
          }
        },
      });
      try {
        t.start && t.start(i);
      } catch (e) {
        l(e, !0);
      }
      if (n) return i;
      var s = o({
        next: function (r) {
          if (!n && t.next)
            try {
              t.next(r);
            } catch (e) {
              l(e, !0);
            }
        },
        error: function (r, o) {
          if (n || !t.error) ((n = !0), l(r, o || !1), a());
          else {
            n = !0;
            try {
              t.error(r);
            } catch (e) {
              l(e, !0);
            } finally {
              a();
            }
          }
        },
        complete: function () {
          if (!n) {
            n = !0;
            try {
              t.complete && t.complete();
            } catch (e) {
              l(e, !0);
            } finally {
              a();
            }
          }
        },
      });
      try {
        r = e(s);
      } catch (e) {
        s.error(e, !0);
      }
      return (n && a(), i);
    }
    function _(e, t) {}
    a.exports = s;
  },
  null,
);
