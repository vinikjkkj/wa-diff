__d(
  "WebStorageLockManager",
  [
    "FBLogger",
    "LocalStorageWrapper",
    "LockManager",
    "Promise",
    "Run",
    "asyncToGeneratorRuntime",
    "clearInterval",
    "err",
    "promiseDone",
    "setInterval",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      r("FBLogger")("messenger_web").mustfix(e);
    }
    function u(t, a) {
      var i = "Failed to execute 'request' on 'LockManager'",
        l = "Lock broken by another request with the 'steal' option.",
        u = function (t, n, r) {
          var e = t.get(n);
          if (e != null) return e;
          var o = r();
          return (t.set(n, o), o);
        };
      try {
        var c = o("LocalStorageWrapper").getStorage(s),
          d = function (t, n) {
            o("LocalStorageWrapper").setItemGuarded(
              c,
              t,
              n,
              s,
              a == null ? void 0 : a.onQuotaExceeded,
            );
          },
          m = function (t) {
            o("LocalStorageWrapper").removeItemGuarded(c, t, s);
          },
          p = function (t) {
            return o("LocalStorageWrapper").getItemGuarded(c, t, s);
          },
          _ = (function () {
            function t(e, t) {
              ((this.lockName = e),
                (this.tabId = t),
                (this.lockA = this.lockName + "-a"),
                (this.lockB = this.lockName + "-b"));
            }
            var o = t.prototype;
            return (
              (o.run = function (t) {
                return this.$1(t, 0);
              }),
              (o.$1 = function (o, a) {
                var t = this,
                  i = function (n) {
                    return window.requestAnimationFrame(function () {
                      return t.$1(o, a + 1).then(n);
                    });
                  },
                  l = function (t) {
                    return p(t) == null;
                  };
                return (
                  d(this.lockA, this.tabId),
                  new (e || (e = n("Promise")))(function (e) {
                    var n = function () {
                      try {
                        (o(), e());
                      } finally {
                        (m(t.lockB), m(t.lockA));
                      }
                    };
                    l(t.lockB) || a > 10
                      ? (a > 10 &&
                          r("FBLogger")("messenger_web").warn(
                            "web-lock polyfill: Had to steal lock",
                          ),
                        d(t.lockB, t.tabId),
                        p(t.lockA) === t.tabId
                          ? n()
                          : window.requestAnimationFrame(function () {
                              p(t.lockB) === t.tabId ? n() : i(e);
                            }))
                      : i(e);
                  })
                );
              }),
              t
            );
          })(),
          f = (function () {
            function e(t) {
              ((this.tabId = t),
                (this.lock = new _(e.tabsKey, t)),
                r("promiseDone")(this.$1()),
                this.$2(),
                this.keepOnlyTabs(function (t) {
                  return e.isAlive(t);
                }));
            }
            e.isAlive = function (n) {
              var t = p(e.$3(n));
              return t == null ? !1 : Date.now() - parseFloat(t) < 1e3;
            };
            var t = e.prototype;
            return (
              (t.keepOnlyTabs = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    yield this.lock.run(function () {
                      var n,
                        r = JSON.parse(
                          (n = p(e.tabsKey)) != null ? n : "[]",
                        ).filter(t);
                      r.length > 0
                        ? d(e.tabsKey, JSON.stringify(r))
                        : m(e.tabsKey);
                    });
                  },
                );
                function r(e) {
                  return t.apply(this, arguments);
                }
                return r;
              })()),
              (t.$2 = function () {
                var t = e.$3(this.tabId);
                d(t, Date.now().toString());
                var n = r("setInterval")(function () {
                  d(t, Date.now().toString());
                }, 500);
                o("Run").onUnload(function () {
                  (r("clearInterval")(n), m(t));
                });
              }),
              (t.$1 = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var t = this;
                    (yield this.lock.run(function () {
                      var n,
                        r = JSON.parse((n = p(e.tabsKey)) != null ? n : "[]");
                      d(e.tabsKey, JSON.stringify([].concat(r, [t.tabId])));
                    }),
                      o("Run").onUnload(function () {
                        return r("promiseDone")(
                          t.keepOnlyTabs(function (e) {
                            return e !== t.tabId;
                          }),
                        );
                      }));
                  },
                );
                function a() {
                  return t.apply(this, arguments);
                }
                return a;
              })()),
              (e.$3 = function (t) {
                return "$navigator.heartbeat-" + t;
              }),
              e
            );
          })();
        f.tabsKey = "$navigator.heartbeat-tabs";
        var g = (function () {
          function e(t, n) {
            var a = this;
            ((this.requests = new Map()),
              (this.name = t),
              (this.tabId = n),
              (this.queueKey = e.storagePrefix + "-" + t + "-q"),
              (this.currentOwnerKey = e.storagePrefix + "-" + t + "-o"),
              (this.lock = new _(e.storagePrefix + "-" + t, this.tabId)),
              o("Run").onUnload(function () {
                r("promiseDone")(
                  a.keepOnlyRequests(function (e) {
                    return (e == null ? void 0 : e.t) !== a.tabId;
                  }),
                );
              }));
          }
          var t = e.prototype;
          return (
            (t.enqueue = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  var o = this,
                    a = r("uuidv4")().toString(),
                    i = { t: this.tabId, u: a },
                    l = function () {
                      (e(null), o.markRequestReleased(a));
                    },
                    s = function () {
                      (e(a), o.markRequestReleased(a));
                    };
                  if (
                    (this.requests.set(a, [
                      function () {
                        return e(a);
                      },
                      function () {
                        (t(), o.markRequestReleased(a));
                      },
                    ]),
                    (n == null ? void 0 : n.signal) != null &&
                      ((n.signal.onabort = function () {
                        (r("promiseDone")(
                          o.keepOnlyRequests(function (e) {
                            return (e == null ? void 0 : e.u) !== a;
                          }),
                        ),
                          s());
                      }),
                      n.signal.aborted))
                  )
                    return s();
                  yield this.lock.run(function () {
                    var e = o.getOwner();
                    if (
                      ((n == null ? void 0 : n.steal) === !0 &&
                        o.$1(e == null ? void 0 : e.u),
                      e == null ||
                        (n == null ? void 0 : n.steal) === !0 ||
                        !f.isAlive(e.t))
                    )
                      (o.$2(
                        o.currentOwnerKey,
                        babelHelpers.extends(
                          {},
                          i,
                          (n == null ? void 0 : n.steal) === !0
                            ? { s: !0 }
                            : {},
                        ),
                      ),
                        o.$3(a));
                    else if ((n == null ? void 0 : n.ifAvailable) !== !0) {
                      var t = o.getQueue();
                      (t.push(i), o.$2(o.queueKey, t));
                    } else l();
                  });
                },
              );
              function t(t, n, r) {
                return e.apply(this, arguments);
              }
              return t;
            })()),
            (t.dequeue = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = this,
                    r,
                    o = null;
                  (yield this.lock.run(function () {
                    var r = n.getOwner();
                    if (
                      !(
                        (r == null ? void 0 : r.t) !== n.tabId ||
                        (r == null ? void 0 : r.u) !== t
                      )
                    ) {
                      var a = n.getQueue(),
                        i = e.getNextOwner(a),
                        l = i[0],
                        s = i[1];
                      ((o = l),
                        n.$2(n.currentOwnerKey, l),
                        n.$2(n.queueKey, s));
                    }
                  }),
                    this.$3((r = o) == null ? void 0 : r.u));
                },
              );
              function r(e) {
                return t.apply(this, arguments);
              }
              return r;
            })()),
            (t.storageChangedOnOtherTab = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  var n = this;
                  e === "o" &&
                    (yield this.lock.run(function () {
                      var e = n.getOwner();
                      if (
                        e != null &&
                        (n.$3(e == null ? void 0 : e.u), e.s === !0)
                      ) {
                        var r = t == null ? void 0 : t.oldValue;
                        if (r != null) {
                          var o = JSON.parse(r);
                          o.t === n.tabId && n.$1(o.u);
                        }
                      }
                    }));
                },
              );
              function t(t, n) {
                return e.apply(this, arguments);
              }
              return t;
            })()),
            (t.getQueue = function () {
              var e;
              return (e = this.$4(this.queueKey)) != null ? e : [];
            }),
            (t.getOwner = function () {
              return this.$4(this.currentOwnerKey);
            }),
            (e.getQueueNameAndStorageType = function (n) {
              if (!n.startsWith(e.storagePrefix)) return null;
              var t = n.slice(e.storagePrefix.length + 1, n.length - 2),
                o = n.charAt(n.length - 1);
              switch (o) {
                case "q":
                case "o":
                case "a":
                case "b":
                  break;
                default:
                  throw r("err")(
                    "Queue was stored with a suffix other than q or o. This is either a bug in the web lock api polyfill code, or it means that something overwrote localStorage with a weird key. Key: " +
                      n,
                  );
              }
              return [t, o];
            }),
            (e.getNextOwner = function (t) {
              for (var e = 0; e < t.length; e += 1)
                if (f.isAlive(t[e].t)) return [t[e], t.slice(e + 1)];
              return [null, []];
            }),
            (t.$4 = function (t) {
              var e = p(t);
              return e != null ? JSON.parse(e) : null;
            }),
            (t.$2 = function (t, n) {
              var e =
                n == null || (Array.isArray(n) && n.length === 0)
                  ? null
                  : JSON.stringify(n);
              e == null ? m(t) : d(t, e);
            }),
            (t.keepOnlyRequests = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = this;
                  yield this.lock.run(function () {
                    var r = n.getOwner(),
                      o = n.getQueue().filter(t);
                    if (t(r)) n.$2(n.queueKey, o);
                    else {
                      var a = e.getNextOwner(o),
                        i = a[0],
                        l = a[1];
                      (n.$2(n.currentOwnerKey, i), n.$2(n.queueKey, l));
                    }
                  });
                },
              );
              function r(e) {
                return t.apply(this, arguments);
              }
              return r;
            })()),
            (t.markRequestReleased = function (t) {
              t != null && this.requests.delete(t);
            }),
            (t.$3 = function (t) {
              if (t != null) {
                var e = this.requests.get(t);
                if (e != null) {
                  var n = e[0];
                  n();
                }
              }
            }),
            (t.$1 = function (t) {
              if (t != null) {
                var e = this.requests.get(t);
                if (e != null) {
                  var n = e[0],
                    r = e[1];
                  r();
                }
              }
            }),
            e
          );
        })();
        g.storagePrefix = "$navigator.locks";
        var h = (function () {
          function t(e) {
            ((this.$1 = new Map()),
              (this.storage = o("LocalStorageWrapper").getStorage(s)),
              (this.tabId = e));
            var t = new f(this.tabId);
            (r("promiseDone")(this.$2()), this.$3());
          }
          var a = t.prototype;
          return (
            (a.request = function () {
              for (
                var t = this, a = arguments.length, s = new Array(a), u = 0;
                u < a;
                u++
              )
                s[u] = arguments[u];
              return new (e || (e = n("Promise")))(function (a, u) {
                r("promiseDone")(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var a,
                      c = s[0],
                      d = s.length === 3 ? s[1] : null,
                      m = s.length === 2 ? s[1] : s[2];
                    if (c.startsWith("-"))
                      throw new DOMException("Names cannot start with '-'.", i);
                    if (
                      (d == null ? void 0 : d.ifAvailable) === !0 &&
                      (d == null ? void 0 : d.signal) != null
                    )
                      throw new DOMException(
                        "The 'signal' and 'ifAvailable' options cannot be used together.",
                        i,
                      );
                    var p = t.$4(c),
                      _ = yield new (e || (e = n("Promise")))(function (e) {
                        r("promiseDone")(
                          p.enqueue(
                            e,
                            function () {
                              u(new DOMException(l, i));
                            },
                            d,
                          ),
                        );
                      });
                    if (
                      (d == null || (a = d.signal) == null
                        ? void 0
                        : a.aborted) === !0
                    )
                      throw new DOMException("The request was aborted.", i);
                    try {
                      var f;
                      yield m(
                        _ != null
                          ? {
                              mode:
                                (f = d == null ? void 0 : d.mode) != null
                                  ? f
                                  : o("LockManager").LockMode.Exclusive,
                              name: c,
                            }
                          : null,
                      );
                    } finally {
                      (_ != null && (yield p.dequeue(_)),
                        p.markRequestReleased(_));
                    }
                  })(),
                  a,
                  u,
                );
              });
            }),
            (a.query = function () {
              var t = [],
                r = [];
              for (var a of this.$5())
                if (a != null) {
                  var i = {
                    mode: o("LockManager").LockMode.Exclusive,
                    name: a.name,
                  };
                  if (a.getOwner() != null) t.push(i);
                  else for (var l of a.getQueue()) r.push(i);
                }
              return (e || (e = n("Promise"))).resolve({ held: t, pending: r });
            }),
            (a.$4 = function (t) {
              var e = this;
              return u(this.$1, t, function () {
                return new g(t, e.tabId);
              });
            }),
            (a.$3 = function () {
              var e = this;
              window.addEventListener("storage", function (t) {
                var n,
                  o = t.key;
                if (!(t.storageArea !== e.storage || o == null)) {
                  var a = g.getQueueNameAndStorageType(o);
                  if (a != null) {
                    var i = a[0],
                      l = a[1];
                    r("promiseDone")(
                      (n = e.$4(i)) == null
                        ? void 0
                        : n.storageChangedOnOtherTab(l, t),
                    );
                  }
                }
              });
            }),
            (a.$2 = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  yield (e || (e = n("Promise"))).all(
                    this.$5().map(function (e) {
                      return e == null
                        ? void 0
                        : e.keepOnlyRequests(function (e) {
                            return e == null ? !1 : f.isAlive(e.t);
                          });
                    }),
                  );
                },
              );
              function r() {
                return t.apply(this, arguments);
              }
              return r;
            })()),
            (a.$5 = function () {
              var e = this;
              return c == null
                ? []
                : Object.keys(c).map(function (t) {
                    var n = g.getQueueNameAndStorageType(t);
                    if (n != null) {
                      var r = n[0];
                      return e.$4(r);
                    }
                  });
            }),
            t
          );
        })();
        return new h(t);
      } catch (e) {
        return null;
      }
    }
    l.make = u;
  },
  98,
);
