__d(
  "WebAsyncStorage",
  ["Deferred", "Promise", "err", "mergeDeepInto", "mergeHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = typeof window != "undefined" ? window : self,
      u = s.indexedDB,
      c = 1,
      d = "data",
      m = !1,
      p,
      _ = Date.now(),
      f = new (r("Deferred"))(),
      g = 3;
    function h() {
      var e = u.open("AsyncStorage", c);
      ((e.onerror = function () {
        var t,
          n =
            (t = e.error) != null
              ? t
              : r("err")("Failed to open AsyncStorage IndexedDB instance.");
        if (n.name === "UnknownError" && g > 0) return (g--, h());
        f.reject(n);
      }),
        (e.onsuccess = function (e) {
          ((p = e.target.result),
            f.resolve({ db: p }),
            (p.onerror = function (e) {
              var t = r("err")("AsyncStorage error: " + e.target.error.message);
              (t.message, f.reject(t));
            }));
        }),
        (e.onupgradeneeded = function (e) {
          var t = e.currentTarget.result;
          (t.objectStoreNames && t.objectStoreNames.contains(d)) ||
            t.createObjectStore(d, { keyPath: "key" });
        }));
    }
    u && h();
    function y(e, t) {
      if (p)
        try {
          e();
        } catch (e) {
          t && t(e);
        }
      else
        f.getPromise().then(
          function () {
            (m && "" + (Date.now() - _), y(e, t));
          },
          function (e) {
            t && t(e);
          },
        );
    }
    var C = {
        setItem: function (t, n, r) {
          this.multiSet([[t, n]], function (e) {
            r((e && e[0]) || null);
          });
        },
        getItem: function (t, n) {
          this.multiGet([t], function (e, t) {
            var r =
              t !== void 0 && t[0] !== void 0 && t[0][1] !== void 0
                ? t[0][1]
                : null;
            n((e && e[0]) || null, r);
          });
        },
        removeItem: function (t, n) {
          this.multiRemove([t], function (e) {
            n((e && e[0]) || null);
          });
        },
        getOrSetItem: function (t, n, r) {
          this.multiGetOrSet([[t, n]], function (e, t) {
            var n =
              t !== void 0 && t[0] !== void 0 && t[0][1] !== void 0
                ? t[0][1]
                : null;
            r((e && e[0]) || null, n);
          });
        },
        upsertAndSaveAtomic: function (t, n, r) {
          var e = null;
          this._multiOp(
            [t],
            "readwrite",
            function (t) {
              return r(t, e);
            },
            function (e) {
              return e;
            },
            function (t, r, o) {
              if (r && t === r.key) {
                var a = n(r.value.value);
                if (a != null) {
                  var i = r.value;
                  ((i.value = a), (e = a), r.update(i));
                }
              } else {
                var l = n(null);
                l != null && ((e = l), o.push([t, l]));
              }
            },
          );
        },
        multiGet: function (t, n) {
          var e = [];
          this._multiOp(
            t,
            "readonly",
            function (t) {
              return n(t, e);
            },
            function (e) {
              return e;
            },
            function (t, n) {
              n && t === n.key
                ? (m && "" + t, e.push([t, n.value.value]))
                : e.push([t, null]);
            },
          );
        },
        multiSet: function (t, n) {
          if (this._persistentWritesDisabled) {
            n(new Array(t.length).fill("writes disabled"));
            return;
          }
          this._multiOp(
            t,
            "readwrite",
            n,
            function (e) {
              return e[0];
            },
            function (e, t, n) {
              if (t && e[0] === t.key) {
                var r = t.value;
                ((r.value = e[1]), m && "" + t.key + r.value, t.update(r));
              } else n.push(e);
            },
          );
        },
        multiGetOrSet: function (t, n) {
          if (this._persistentWritesDisabled) {
            n(new Array(t.length).fill("writes disabled"));
            return;
          }
          var e = [];
          this._multiOp(
            t,
            "readwrite",
            function (t) {
              return n(t, e);
            },
            function (e) {
              return e[0];
            },
            function (t, n, r) {
              n && t[0] === n.key
                ? (e.push([t, n.value.value]), m && "" + n.key)
                : r.push(t);
            },
          );
        },
        multiMerge: function (t, n) {
          this._multiOp(
            t,
            "readwrite",
            n,
            function (e) {
              return e[0];
            },
            function (e, t, n) {
              if (t && e[0] === t.key) {
                var o = t.value,
                  a = JSON.parse(o.value);
                (r("mergeDeepInto")(
                  a,
                  JSON.parse(e[1]),
                  r("mergeHelpers").ArrayStrategies.Clobber,
                ),
                  m && "" + e[0] + e[1] + o.value + JSON.stringify(a),
                  (o.value = JSON.stringify(a)),
                  t.update(o));
              } else (m && "" + e[0], n.push(e));
            },
          );
        },
        multiRemove: function (t, n) {
          this._multiOp(
            t,
            "readwrite",
            n,
            function (e) {
              return e;
            },
            function (e, t) {
              t && e === t.key && (m && "" + t.value, t.delete());
            },
          );
        },
        getAllKeys: function (t) {
          y(
            function () {
              var e = p.transaction([d], "readonly"),
                n = e.objectStore(d).openCursor(),
                r = [];
              n.onsuccess = function (e) {
                var n = e.target.result;
                if (!n) {
                  t(null, r);
                  return;
                }
                (r.push(n.key), n.continue());
              };
            },
            function (e) {
              return t(null, []);
            },
          );
        },
        clear: function (t) {
          y(
            function () {
              var e = p.transaction([d], "readwrite"),
                n = e.objectStore(d).openCursor();
              n.onsuccess = function (e) {
                var n = e.target.result;
                if (!n) {
                  t(null);
                  return;
                }
                (n.delete(), n.continue());
              };
            },
            function (e) {
              return t(null);
            },
          );
        },
        _multiOp: function (t, n, o, a, i) {
          y(
            function () {
              var e = !1,
                l = t.slice().sort(function (t, n) {
                  var i = a(t),
                    l = a(n);
                  if (i === l) {
                    var s = r("err")(
                      "AsyncStorage._multiOp cannot process duplicate keys.",
                    );
                    return (s.message, o && o([s]), (e = !0), 0);
                  }
                  return i < l ? -1 : 1;
                });
              if (e) return;
              var s = p.transaction([d], n),
                u = s.objectStore(d).openCursor(),
                c = [],
                _ = 0;
              u.onsuccess = function (e) {
                var t = e.target.result;
                if (!t) {
                  for (; _ < l.length; ) (i(l[_], t, c), _++);
                  f();
                  return;
                }
                var n = t.key;
                for (m && "" + n; a(l[_]) <= n; )
                  if ((m && "" + l[_], i(l[_], t, c), _++, _ === l.length)) {
                    f();
                    return;
                  }
                var r = a(l[_]);
                t.continue(r);
              };
              function f() {
                var e = s.objectStore(d);
                c.forEach(function (t) {
                  (m && "" + t[0] + t[1], e.add({ key: t[0], value: t[1] }));
                });
              }
              ((s.oncomplete = function () {
                o && o(null);
              }),
                (s.onerror = function (e) {
                  var t = r("err")(
                    "IndexedDB error: " + e.target.error.message,
                  );
                  ("" + t.message + t.stack, o && o([t]));
                }));
            },
            function (e) {
              o && o([e]);
            },
          );
        },
        _persistentWritesDisabled: !1,
        disablePersistentWrites: function () {
          this._persistentWritesDisabled = !0;
        },
        isOpenPromiseSettled: function () {
          return f.isSettled();
        },
        isOperational: function () {
          return u == null
            ? (e || (e = n("Promise"))).resolve({
                success: !1,
                error: r("err")("IDB interface not available"),
              })
            : f
                .getPromise()
                .then(function () {
                  return { success: !0 };
                })
                .catch(function (e) {
                  return { success: !1, error: e };
                });
        },
      },
      b = C;
    l.default = b;
  },
  98,
);
