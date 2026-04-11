__d(
  "CacheStorage",
  [
    "ErrorGuard",
    "ExecutionEnvironment",
    "WebStorage",
    "cr:6943",
    "cr:8958",
    "emptyFunction",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "_@_",
      m = "3b",
      p = "CacheStorageVersion",
      _ = {
        length: 0,
        getItem: (c = r("emptyFunction")),
        setItem: c,
        clear: c,
        removeItem: c,
        key: c,
      },
      f = (function () {
        function e(e) {
          this._store = e;
        }
        var t = e.prototype;
        return (
          (t.getStore = function () {
            return this._store;
          }),
          (t.keys = function () {
            for (var e = [], t = 0; t < this._store.length; t++) {
              var n = this._store.key(t);
              n != null && e.push(n);
            }
            return e;
          }),
          (t.get = function (t) {
            return this._store.getItem(t);
          }),
          (t.set = function (t, n) {
            this._store.setItem(t, n);
          }),
          (t.remove = function (t) {
            this._store.removeItem(t);
          }),
          (t.clear = function () {
            this._store.clear();
          }),
          (t.clearWithPrefix = function (t) {
            t = t || "";
            for (var e = this.keys(), n = 0; n < e.length; n++) {
              var r = e[n];
              r != null && r.startsWith(t) && this.remove(r);
            }
          }),
          e
        );
      })(),
      g = (function (t) {
        function n() {
          var n;
          return (
            t.call(
              this,
              (n = (e || (e = r("WebStorage"))).getLocalStorage()) != null
                ? n
                : _,
            ) || this
          );
        }
        return (
          babelHelpers.inheritsLoose(n, t),
          (n.available = function () {
            return !!(e || (e = r("WebStorage"))).getLocalStorage();
          }),
          n
        );
      })(f),
      h = (function (t) {
        function n() {
          var n;
          return (
            t.call(
              this,
              (n = (e || (e = r("WebStorage"))).getSessionStorage()) != null
                ? n
                : _,
            ) || this
          );
        }
        return (
          babelHelpers.inheritsLoose(n, t),
          (n.available = function () {
            return !!(e || (e = r("WebStorage"))).getSessionStorage();
          }),
          n
        );
      })(f),
      y = (function () {
        function e() {
          this._store = {};
        }
        var t = e.prototype;
        return (
          (t.getStore = function () {
            return this._store;
          }),
          (t.keys = function () {
            return Object.keys(this._store);
          }),
          (t.get = function (t) {
            return this._store[t] === void 0 ? null : this._store[t];
          }),
          (t.set = function (t, n) {
            this._store[t] = n;
          }),
          (t.remove = function (t) {
            t in this._store && delete this._store[t];
          }),
          (t.clear = function () {
            this._store = {};
          }),
          (t.clearWithPrefix = function (t) {
            t = t || "";
            for (var e = this.keys(), n = 0; n < e.length; n++) {
              var r = e[n];
              r.startsWith(t) && this.remove(r);
            }
          }),
          (e.available = function () {
            return !0;
          }),
          e
        );
      })(),
      C = { memory: y, localstorage: g, sessionstorage: h },
      b = (function () {
        function t(e, t) {
          ((this._changeCallbacks = []), (this._key_prefix = "_cs_"));
          var o;
          ((this._exception = null),
            t && (this._key_prefix = t),
            e === "AUTO" || !e ? (o = "memory") : (o = e),
            o &&
              (!C[o] || !C[o].available()
                ? ((s || (s = r("ExecutionEnvironment"))).canUseDOM,
                  (this._backend = new y()))
                : (this._backend = new C[o]())));
          var a = this.useBrowserStorage();
          a &&
            n("cr:6943").listen(
              window,
              "storage",
              this._onBrowserValueChanged.bind(this),
            );
          var i = a
            ? this._backend.getStore().getItem(p)
            : this._backend.getStore()[p];
          i !== m && this.clearOwnKeys();
        }
        var o = t.prototype;
        return (
          (o.useBrowserStorage = function () {
            return (
              this._backend.getStore() ===
                (e || (e = r("WebStorage"))).getLocalStorage() ||
              this._backend.getStore() ===
                (e || (e = r("WebStorage"))).getSessionStorage()
            );
          }),
          (o.addValueChangeCallback = function (t) {
            var e = this;
            return (
              this._changeCallbacks.push(t),
              {
                remove: function () {
                  e._changeCallbacks.slice(e._changeCallbacks.indexOf(t), 1);
                },
              }
            );
          }),
          (o._onBrowserValueChanged = function (t) {
            this._changeCallbacks &&
              String(t.key).startsWith(this._key_prefix) &&
              this._changeCallbacks.forEach(function (e) {
                e(t.key, t.oldValue, t.newValue);
              });
          }),
          (o.keys = function () {
            var e = this,
              t = [];
            return (
              (u || (u = r("ErrorGuard"))).guard(
                function () {
                  if (e._backend)
                    for (
                      var n = e._backend.keys(),
                        r = e._key_prefix.length,
                        o = 0;
                      o < n.length;
                      o++
                    )
                      n[o].substr(0, r) == e._key_prefix &&
                        t.push(n[o].substr(r));
                },
                { name: "CacheStorage" },
              )(),
              t
            );
          }),
          (o.set = function (o, a, i) {
            if (this._backend) {
              if (this.useBrowserStorage() && t._persistentWritesDisabled)
                return ((this._exception = r("err")("writes disabled")), !1);
              var e;
              typeof a == "string"
                ? (e = d + a)
                : i
                  ? (e = n("cr:8958").stringify(a))
                  : ((e = { __t: Date.now(), __v: a }),
                    (e = n("cr:8958").stringify(e)));
              for (
                var l = this._backend,
                  s = this._key_prefix + o,
                  u = !0,
                  c = null;
                u;
              )
                try {
                  ((c = null), l.set(s, e), (u = !1));
                } catch (e) {
                  c = r("getErrorSafe")(e);
                  var m = l.keys().length;
                  (this._evictCacheEntries(), (u = l.keys().length < m));
                }
              return c !== null
                ? ((this._exception = c), !1)
                : ((this._exception = null), !0);
            }
            return ((this._exception = r("err")("no back end")), !1);
          }),
          (o.getLastSetExceptionMessage = function () {
            return this._exception ? this._exception.message : null;
          }),
          (o.getLastSetException = function () {
            return this._exception;
          }),
          (o.getStorageKeyCount = function () {
            var e = this._backend;
            return e ? e.keys().length : 0;
          }),
          (o._evictCacheEntries = function () {
            var e = [],
              r = this._backend;
            (r.keys().forEach(function (o) {
              if (o !== p) {
                var a = r.get(o);
                if (a === void 0) {
                  r.remove(o);
                  return;
                }
                if (!t._hasMagicPrefix(a)) {
                  try {
                    a = n("cr:8958").parse(a);
                  } catch (e) {
                    r.remove(o);
                    return;
                  }
                  a &&
                    a.__t !== void 0 &&
                    a.__v !== void 0 &&
                    e.push([o, a.__t]);
                }
              }
            }),
              e.sort(function (e, t) {
                return e[1] - t[1];
              }));
            for (var o = 0; o < Math.ceil(e.length / 2); o++) r.remove(e[o][0]);
          }),
          (o.get = function (o, a) {
            var e;
            if (this._backend)
              if (
                ((u || (u = r("ErrorGuard"))).applyWithGuard(
                  function () {
                    e = this._backend.get(this._key_prefix + o);
                  },
                  this,
                  [],
                  {
                    onError: function () {
                      e = null;
                    },
                    name: "CacheStorage:get",
                  },
                ),
                e != null)
              )
                if (t._hasMagicPrefix(e)) e = e.substr(d.length);
                else
                  try {
                    ((e = n("cr:8958").parse(e)),
                      e && e.__t !== void 0 && e.__v !== void 0 && (e = e.__v));
                  } catch (t) {
                    e = void 0;
                  }
              else e = void 0;
            return (
              e === void 0 && a !== void 0 && ((e = a), this.set(o, e)),
              e
            );
          }),
          (o.remove = function (t) {
            this._backend &&
              (u || (u = r("ErrorGuard"))).applyWithGuard(
                this._backend.remove,
                this._backend,
                [this._key_prefix + t],
                { name: "CacheStorage:remove" },
              );
          }),
          (o._setVersion = function () {
            var e = this;
            (u || (u = r("ErrorGuard"))).applyWithGuard(
              function () {
                e.useBrowserStorage()
                  ? e._backend.getStore().setItem(p, m)
                  : (e._backend.getStore()[p] = m);
              },
              this,
              [],
              { name: "CacheStorage:setVersion" },
            );
          }),
          (o.clear = function () {
            this._backend &&
              ((u || (u = r("ErrorGuard"))).applyWithGuard(
                this._backend.clear,
                this._backend,
                [],
                { name: "CacheStorage:clear" },
              ),
              this._setVersion());
          }),
          (o.clearOwnKeys = function () {
            this._backend &&
              ((u || (u = r("ErrorGuard"))).applyWithGuard(
                this._backend.clearWithPrefix,
                this._backend,
                [this._key_prefix],
                { name: "CacheStorage:clearOwnKeys" },
              ),
              this._setVersion());
          }),
          (t.getAllStorageTypes = function () {
            return Object.keys(C);
          }),
          (t._hasMagicPrefix = function (t) {
            return t.substr(0, d.length) === d;
          }),
          (t.disablePersistentWrites = function () {
            t._persistentWritesDisabled = !0;
          }),
          t
        );
      })();
    ((b._persistentWritesDisabled = !1), (l.default = b));
  },
  98,
);
