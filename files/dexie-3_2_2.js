__d(
  "dexie-3.2.2",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = {},
      s = { exports: l },
      u;
    function c() {
      (function (e, t) {
        typeof l == "object" && typeof s != "undefined"
          ? (s.exports = t())
          : typeof u == "function" && u.amd
            ? u(t)
            : ((e = typeof globalThis != "undefined" ? globalThis : e || self),
              (e.Dexie = t()));
      })(this, function () {
        var r = function () {
          return (
            (r =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) {
                  e = arguments[n];
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                }
                return t;
              }),
            r.apply(this, arguments)
          );
        };
        function o(e, t, n) {
          if (n || arguments.length === 2)
            for (var r = 0, o = t.length, a; r < o; r++)
              (a || !(r in t)) &&
                (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
          return e.concat(a || Array.prototype.slice.call(t));
        }
        var a =
            typeof globalThis != "undefined"
              ? globalThis
              : typeof self != "undefined"
                ? self
                : typeof window != "undefined"
                  ? window
                  : t,
          i = Object.keys,
          l = Array.isArray;
        typeof (e || (e = n("Promise"))) != "undefined" &&
          !a.Promise &&
          (a.Promise = e || (e = n("Promise")));
        function s(e, t) {
          return (
            typeof t != "object" ||
              i(t).forEach(function (n) {
                e[n] = t[n];
              }),
            e
          );
        }
        var u = Object.getPrototypeOf,
          c = {}.hasOwnProperty;
        function d(e, t) {
          return c.call(e, t);
        }
        function m(e, t) {
          (typeof t == "function" && (t = t(u(e))),
            (typeof Reflect == "undefined" ? i : Reflect.ownKeys)(t).forEach(
              function (n) {
                _(e, n, t[n]);
              },
            ));
        }
        var p = Object.defineProperty;
        function _(e, t, n, r) {
          p(
            e,
            t,
            s(
              n && d(n, "get") && typeof n.get == "function"
                ? { get: n.get, set: n.set, configurable: !0 }
                : { value: n, configurable: !0, writable: !0 },
              r,
            ),
          );
        }
        function f(e) {
          return {
            from: function (n) {
              return (
                (e.prototype = Object.create(n.prototype)),
                _(e.prototype, "constructor", e),
                { extend: m.bind(null, e.prototype) }
              );
            },
          };
        }
        var g = Object.getOwnPropertyDescriptor;
        function h(e, t) {
          var n = g(e, t),
            r;
          return n || ((r = u(e)) && h(r, t));
        }
        var y = [].slice;
        function C(e, t, n) {
          return y.call(e, t, n);
        }
        function b(e, t) {
          return t(e);
        }
        function v(e) {
          if (!e) throw new Error("Assertion Failed");
        }
        function S(e) {
          a.setImmediate ? setImmediate(e) : setTimeout(e, 0);
        }
        function R(e, t) {
          return e.reduce(function (e, n, r) {
            var o = t(n, r);
            return (o && (e[o[0]] = o[1]), e);
          }, {});
        }
        function L(e, t, n) {
          try {
            e.apply(null, n);
          } catch (e) {
            t && t(e);
          }
        }
        function E(e, t) {
          if (d(e, t)) return e[t];
          if (!t) return e;
          if (typeof t != "string") {
            for (var n = [], r = 0, o = t.length; r < o; ++r) {
              var a = E(e, t[r]);
              n.push(a);
            }
            return n;
          }
          var i = t.indexOf(".");
          if (i !== -1) {
            var l = e[t.substr(0, i)];
            return l === void 0 ? void 0 : E(l, t.substr(i + 1));
          }
        }
        function k(e, t, n) {
          if (
            !(!e || t === void 0) &&
            !("isFrozen" in Object && Object.isFrozen(e))
          )
            if (typeof t != "string" && "length" in t) {
              v(typeof n != "string" && "length" in n);
              for (var r = 0, o = t.length; r < o; ++r) k(e, t[r], n[r]);
            } else {
              var a = t.indexOf(".");
              if (a !== -1) {
                var i = t.substr(0, a),
                  s = t.substr(a + 1);
                if (s === "")
                  n === void 0
                    ? l(e) && !isNaN(parseInt(i))
                      ? e.splice(i, 1)
                      : delete e[i]
                    : (e[i] = n);
                else {
                  var u = e[i];
                  ((!u || !d(e, i)) && (u = e[i] = {}), k(u, s, n));
                }
              } else
                n === void 0
                  ? l(e) && !isNaN(parseInt(t))
                    ? e.splice(t, 1)
                    : delete e[t]
                  : (e[t] = n);
            }
        }
        function I(e, t) {
          typeof t == "string"
            ? k(e, t, void 0)
            : "length" in t &&
              [].map.call(t, function (t) {
                k(e, t, void 0);
              });
        }
        function T(e) {
          var t = {};
          for (var n in e) d(e, n) && (t[n] = e[n]);
          return t;
        }
        var D = [].concat;
        function x(e) {
          return D.apply([], e);
        }
        var $ =
            "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
              .split(",")
              .concat(
                x(
                  [8, 16, 32, 64].map(function (e) {
                    return ["Int", "Uint", "Float"].map(function (t) {
                      return t + e + "Array";
                    });
                  }),
                ),
              )
              .filter(function (e) {
                return a[e];
              }),
          P = $.map(function (e) {
            return a[e];
          });
        R($, function (e) {
          return [e, !0];
        });
        var N = null;
        function M(e) {
          N = typeof WeakMap != "undefined" && new WeakMap();
          var t = w(e);
          return ((N = null), t);
        }
        function w(e) {
          if (!e || typeof e != "object") return e;
          var t = N && N.get(e);
          if (t) return t;
          if (l(e)) {
            ((t = []), N && N.set(e, t));
            for (var n = 0, r = e.length; n < r; ++n) t.push(w(e[n]));
          } else if (P.indexOf(e.constructor) >= 0) t = e;
          else {
            var o = u(e);
            ((t = o === Object.prototype ? {} : Object.create(o)),
              N && N.set(e, t));
            for (var a in e) d(e, a) && (t[a] = w(e[a]));
          }
          return t;
        }
        var A = {}.toString;
        function F(e) {
          return A.call(e).slice(8, -1);
        }
        var O =
            typeof Symbol != "undefined" && typeof Symbol == "function"
              ? Symbol.iterator
              : "@@iterator",
          B =
            typeof O == "symbol"
              ? function (e) {
                  var t;
                  return e != null && (t = e[O]) && t.apply(e);
                }
              : function () {
                  return null;
                },
          W = {};
        function q(e) {
          var t, n, r, o;
          if (arguments.length === 1) {
            if (l(e)) return e.slice();
            if (this === W && typeof e == "string") return [e];
            if ((o = B(e))) {
              for (n = []; (r = o.next()), !r.done; ) n.push(r.value);
              return n;
            }
            if (e == null) return [e];
            if (((t = e.length), typeof t == "number")) {
              for (n = new Array(t); t--; ) n[t] = e[t];
              return n;
            }
            return [e];
          }
          for (t = arguments.length, n = new Array(t); t--; )
            n[t] = arguments[t];
          return n;
        }
        var U =
            typeof Symbol != "undefined"
              ? function (e) {
                  return (
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toStringTag
                        : "@@toStringTag"
                    ] === "AsyncFunction"
                  );
                }
              : function () {
                  return !1;
                },
          V =
            typeof location != "undefined" &&
            /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function H(e, t) {
          ((V = e), (G = t));
        }
        var G = function () {
            return !0;
          },
          z = !new Error("").stack;
        function j() {
          if (z)
            try {
              throw new Error();
            } catch (e) {
              return e;
            }
          return new Error();
        }
        function K(e, t) {
          var n = e.stack;
          return n
            ? ((t = t || 0),
              n.indexOf(e.name) === 0 &&
                (t += (e.name + e.message).split("\n").length),
              n
                .split("\n")
                .slice(t)
                .filter(G)
                .map(function (e) {
                  return "\n" + e;
                })
                .join(""))
            : "";
        }
        var Q = [
            "Modify",
            "Bulk",
            "OpenFailed",
            "VersionChange",
            "Schema",
            "Upgrade",
            "InvalidTable",
            "MissingAPI",
            "NoSuchDatabase",
            "InvalidArgument",
            "SubTransaction",
            "Unsupported",
            "Internal",
            "DatabaseClosed",
            "PrematureCommit",
            "ForeignAwait",
          ],
          X = [
            "Unknown",
            "Constraint",
            "Data",
            "TransactionInactive",
            "ReadOnly",
            "Version",
            "NotFound",
            "InvalidState",
            "InvalidAccess",
            "Abort",
            "Timeout",
            "QuotaExceeded",
            "Syntax",
            "DataClone",
          ],
          Y = Q.concat(X),
          J = {
            VersionChanged:
              "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
            MissingAPI:
              "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb",
          };
        function Z(e, t) {
          ((this._e = j()), (this.name = e), (this.message = t));
        }
        f(Z)
          .from(Error)
          .extend({
            stack: {
              get: function () {
                return (
                  this._stack ||
                  (this._stack =
                    this.name + ": " + this.message + K(this._e, 2))
                );
              },
            },
            toString: function () {
              return this.name + ": " + this.message;
            },
          });
        function ee(e, t) {
          return (
            e +
            ". Errors: " +
            Object.keys(t)
              .map(function (e) {
                return t[e].toString();
              })
              .filter(function (e, t, n) {
                return n.indexOf(e) === t;
              })
              .join("\n")
          );
        }
        function te(e, t, n, r) {
          ((this._e = j()),
            (this.failures = t),
            (this.failedKeys = r),
            (this.successCount = n),
            (this.message = ee(e, t)));
        }
        f(te).from(Z);
        function ne(e, t) {
          ((this._e = j()),
            (this.name = "BulkError"),
            (this.failures = Object.keys(t).map(function (e) {
              return t[e];
            })),
            (this.failuresByPos = t),
            (this.message = ee(e, t)));
        }
        f(ne).from(Z);
        var re = Y.reduce(function (e, t) {
            return ((e[t] = t + "Error"), e);
          }, {}),
          oe = Z,
          ae = Y.reduce(function (e, t) {
            var n = t + "Error";
            function r(e, r) {
              ((this._e = j()),
                (this.name = n),
                e
                  ? typeof e == "string"
                    ? ((this.message = "" + e + (r ? "\n " + r : "")),
                      (this.inner = r || null))
                    : typeof e == "object" &&
                      ((this.message = e.name + " " + e.message),
                      (this.inner = e))
                  : ((this.message = J[t] || n), (this.inner = null)));
            }
            return (f(r).from(oe), (e[t] = r), e);
          }, {});
        ((ae.Syntax = SyntaxError),
          (ae.Type = TypeError),
          (ae.Range = RangeError));
        var ie = X.reduce(function (e, t) {
          return ((e[t + "Error"] = ae[t]), e);
        }, {});
        function le(e, t) {
          if (
            !e ||
            e instanceof Z ||
            e instanceof TypeError ||
            e instanceof SyntaxError ||
            !e.name ||
            !ie[e.name]
          )
            return e;
          var n = new ie[e.name](t || e.message, e);
          return (
            "stack" in e &&
              _(n, "stack", {
                get: function () {
                  return this.inner.stack;
                },
              }),
            n
          );
        }
        var se = Y.reduce(function (e, t) {
          return (
            ["Syntax", "Type", "Range"].indexOf(t) === -1 &&
              (e[t + "Error"] = ae[t]),
            e
          );
        }, {});
        ((se.ModifyError = te), (se.DexieError = Z), (se.BulkError = ne));
        function ue() {}
        function ce(e) {
          return e;
        }
        function de(e, t) {
          return e == null || e === ce
            ? t
            : function (n) {
                return t(e(n));
              };
        }
        function me(e, t) {
          return function () {
            (e.apply(this, arguments), t.apply(this, arguments));
          };
        }
        function pe(e, t) {
          return e === ue
            ? t
            : function () {
                var n = e.apply(this, arguments);
                n !== void 0 && (arguments[0] = n);
                var r = this.onsuccess,
                  o = this.onerror;
                ((this.onsuccess = null), (this.onerror = null));
                var a = t.apply(this, arguments);
                return (
                  r &&
                    (this.onsuccess = this.onsuccess
                      ? me(r, this.onsuccess)
                      : r),
                  o && (this.onerror = this.onerror ? me(o, this.onerror) : o),
                  a !== void 0 ? a : n
                );
              };
        }
        function _e(e, t) {
          return e === ue
            ? t
            : function () {
                e.apply(this, arguments);
                var n = this.onsuccess,
                  r = this.onerror;
                ((this.onsuccess = this.onerror = null),
                  t.apply(this, arguments),
                  n &&
                    (this.onsuccess = this.onsuccess
                      ? me(n, this.onsuccess)
                      : n),
                  r && (this.onerror = this.onerror ? me(r, this.onerror) : r));
              };
        }
        function fe(e, t) {
          return e === ue
            ? t
            : function (n) {
                var r = e.apply(this, arguments);
                s(n, r);
                var o = this.onsuccess,
                  a = this.onerror;
                ((this.onsuccess = null), (this.onerror = null));
                var i = t.apply(this, arguments);
                return (
                  o &&
                    (this.onsuccess = this.onsuccess
                      ? me(o, this.onsuccess)
                      : o),
                  a && (this.onerror = this.onerror ? me(a, this.onerror) : a),
                  r === void 0 ? (i === void 0 ? void 0 : i) : s(r, i)
                );
              };
        }
        function ge(e, t) {
          return e === ue
            ? t
            : function () {
                return t.apply(this, arguments) === !1
                  ? !1
                  : e.apply(this, arguments);
              };
        }
        function he(e, t) {
          return e === ue
            ? t
            : function () {
                var n = e.apply(this, arguments);
                if (n && typeof n.then == "function") {
                  for (
                    var r = this, o = arguments.length, a = new Array(o);
                    o--;
                  )
                    a[o] = arguments[o];
                  return n.then(function () {
                    return t.apply(r, a);
                  });
                }
                return t.apply(this, arguments);
              };
        }
        var ye = {},
          Ce = 100,
          be = 20,
          ve = 100,
          Se =
            typeof (e || (e = n("Promise"))) == "undefined"
              ? []
              : (function () {
                  var t = (e || (e = n("Promise"))).resolve();
                  if (typeof crypto == "undefined" || !crypto.subtle)
                    return [t, u(t), t];
                  var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
                  return [r, u(r), t];
                })(),
          Re = Se[0],
          Le = Se[1],
          Ee = Se[2],
          ke = Le && Le.then,
          Ie = Re && Re.constructor,
          Te = !!Ee,
          De = !1,
          xe = Ee
            ? function () {
                Ee.then(Ze);
              }
            : a.setImmediate
              ? setImmediate.bind(null, Ze)
              : a.MutationObserver
                ? function () {
                    var e = document.createElement("div");
                    (new MutationObserver(function () {
                      (Ze(), (e = null));
                    }).observe(e, { attributes: !0 }),
                      e.setAttribute("i", "1"));
                  }
                : function () {
                    setTimeout(Ze, 0);
                  },
          $e = function (t, n) {
            (We.push([t, n]), Ne && (xe(), (Ne = !1)));
          },
          Pe = !0,
          Ne = !0,
          Me = [],
          we = [],
          Ae = null,
          Fe = ce,
          Oe = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: It,
            pgp: !1,
            env: {},
            finalize: function () {
              this.unhandleds.forEach(function (e) {
                try {
                  It(e[0], e[1]);
                } catch (e) {}
              });
            },
          },
          Be = Oe,
          We = [],
          qe = 0,
          Ue = [];
        function Ve(e) {
          if (typeof this != "object")
            throw new TypeError("Promises must be constructed via new");
          ((this._listeners = []), (this.onuncatched = ue), (this._lib = !1));
          var t = (this._PSD = Be);
          if (
            (V &&
              ((this._stackHolder = j()),
              (this._prev = null),
              (this._numPrev = 0)),
            typeof e != "function")
          ) {
            if (e !== ye) throw new TypeError("Not a function");
            ((this._state = arguments[1]),
              (this._value = arguments[2]),
              this._state === !1 && je(this, this._value));
            return;
          }
          ((this._state = null), (this._value = null), ++t.ref, ze(this, e));
        }
        var He = {
          get: function () {
            var e = Be,
              t = mt;
            function n(n, r) {
              var o = this,
                a = !e.global && (e !== Be || t !== mt),
                i = a && !gt(),
                l = new Ve(function (t, l) {
                  Qe(o, new Ge(Lt(n, e, a, i), Lt(r, e, a, i), t, l, e));
                });
              return (V && Je(l, this), l);
            }
            return ((n.prototype = ye), n);
          },
          set: function (t) {
            _(
              this,
              "then",
              t && t.prototype === ye
                ? He
                : {
                    get: function () {
                      return t;
                    },
                    set: He.set,
                  },
            );
          },
        };
        (m(Ve.prototype, {
          then: He,
          _then: function (t, n) {
            Qe(this, new Ge(null, null, t, n, Be));
          },
          catch: function (t) {
            if (arguments.length === 1) return this.then(null, t);
            var e = arguments[0],
              n = arguments[1];
            return typeof e == "function"
              ? this.then(null, function (t) {
                  return t instanceof e ? n(t) : it(t);
                })
              : this.then(null, function (t) {
                  return t && t.name === e ? n(t) : it(t);
                });
          },
          finally: function (t) {
            return this.then(
              function (e) {
                return (t(), e);
              },
              function (e) {
                return (t(), it(e));
              },
            );
          },
          stack: {
            get: function () {
              if (this._stack) return this._stack;
              try {
                De = !0;
                var e = Ye(this, [], be),
                  t = e.join("\nFrom previous: ");
                return (this._state !== null && (this._stack = t), t);
              } finally {
                De = !1;
              }
            },
          },
          timeout: function (t, n) {
            var e = this;
            return t < 1 / 0
              ? new Ve(function (r, o) {
                  var a = setTimeout(function () {
                    return o(new ae.Timeout(n));
                  }, t);
                  e.then(r, o).finally(clearTimeout.bind(null, a));
                })
              : this;
          },
        }),
          typeof Symbol != "undefined" &&
            (typeof Symbol != "function" || Symbol.toStringTag) &&
            _(
              Ve.prototype,
              typeof Symbol == "function"
                ? Symbol.toStringTag
                : "@@toStringTag",
              "Dexie.Promise",
            ),
          (Oe.env = vt()));
        function Ge(e, t, n, r, o) {
          ((this.onFulfilled = typeof e == "function" ? e : null),
            (this.onRejected = typeof t == "function" ? t : null),
            (this.resolve = n),
            (this.reject = r),
            (this.psd = o));
        }
        (m(Ve, {
          all: function () {
            var e = q.apply(null, arguments).map(ht);
            return new Ve(function (t, n) {
              e.length === 0 && t([]);
              var r = e.length;
              e.forEach(function (o, a) {
                return Ve.resolve(o).then(function (n) {
                  ((e[a] = n), --r || t(e));
                }, n);
              });
            });
          },
          resolve: function (t) {
            if (t instanceof Ve) return t;
            if (t && typeof t.then == "function")
              return new Ve(function (e, n) {
                t.then(e, n);
              });
            var e = new Ve(ye, !0, t);
            return (Je(e, Ae), e);
          },
          reject: it,
          race: function () {
            var e = q.apply(null, arguments).map(ht);
            return new Ve(function (t, n) {
              e.map(function (e) {
                return Ve.resolve(e).then(t, n);
              });
            });
          },
          PSD: {
            get: function () {
              return Be;
            },
            set: function (t) {
              return (Be = t);
            },
          },
          totalEchoes: {
            get: function () {
              return mt;
            },
          },
          newPSD: _t,
          usePSD: St,
          scheduler: {
            get: function () {
              return $e;
            },
            set: function (t) {
              $e = t;
            },
          },
          rejectionMapper: {
            get: function () {
              return Fe;
            },
            set: function (t) {
              Fe = t;
            },
          },
          follow: function (t, n) {
            return new Ve(function (e, r) {
              return _t(
                function (e, n) {
                  var r = Be;
                  ((r.unhandleds = []),
                    (r.onunhandled = n),
                    (r.finalize = me(function () {
                      var t = this;
                      rt(function () {
                        t.unhandleds.length === 0 ? e() : n(t.unhandleds[0]);
                      });
                    }, r.finalize)),
                    t());
                },
                n,
                e,
                r,
              );
            });
          },
        }),
          Ie &&
            (Ie.allSettled &&
              _(Ve, "allSettled", function () {
                var e = q.apply(null, arguments).map(ht);
                return new Ve(function (t) {
                  e.length === 0 && t([]);
                  var n = e.length,
                    r = new Array(n);
                  e.forEach(function (e, o) {
                    return Ve.resolve(e)
                      .then(
                        function (e) {
                          return (r[o] = { status: "fulfilled", value: e });
                        },
                        function (e) {
                          return (r[o] = { status: "rejected", reason: e });
                        },
                      )
                      .then(function () {
                        return --n || t(r);
                      });
                  });
                });
              }),
            Ie.any &&
              typeof AggregateError != "undefined" &&
              _(Ve, "any", function () {
                var e = q.apply(null, arguments).map(ht);
                return new Ve(function (t, n) {
                  e.length === 0 && n(new AggregateError([]));
                  var r = e.length,
                    o = new Array(r);
                  e.forEach(function (e, a) {
                    return Ve.resolve(e).then(
                      function (e) {
                        return t(e);
                      },
                      function (e) {
                        ((o[a] = e), --r || n(new AggregateError(o)));
                      },
                    );
                  });
                });
              })));
        function ze(e, t) {
          try {
            t(
              function (t) {
                if (e._state === null) {
                  if (t === e)
                    throw new TypeError(
                      "A promise cannot be resolved with itself.",
                    );
                  var n = e._lib && et();
                  (t && typeof t.then == "function"
                    ? ze(e, function (e, n) {
                        t instanceof Ve ? t._then(e, n) : t.then(e, n);
                      })
                    : ((e._state = !0), (e._value = t), Ke(e)),
                    n && tt());
                }
              },
              je.bind(null, e),
            );
          } catch (t) {
            je(e, t);
          }
        }
        function je(e, t) {
          if ((we.push(t), e._state === null)) {
            var n = e._lib && et();
            ((t = Fe(t)),
              (e._state = !1),
              (e._value = t),
              V &&
                t !== null &&
                typeof t == "object" &&
                !t._promise &&
                L(function () {
                  var n = h(t, "stack");
                  ((t._promise = e),
                    _(t, "stack", {
                      get: function () {
                        return De
                          ? n && (n.get ? n.get.apply(t) : n.value)
                          : e.stack;
                      },
                    }));
                }),
              ot(e),
              Ke(e),
              n && tt());
          }
        }
        function Ke(e) {
          var t = e._listeners;
          e._listeners = [];
          for (var n = 0, r = t.length; n < r; ++n) Qe(e, t[n]);
          var o = e._PSD;
          (--o.ref || o.finalize(),
            qe === 0 &&
              (++qe,
              $e(function () {
                --qe === 0 && nt();
              }, [])));
        }
        function Qe(e, t) {
          if (e._state === null) {
            e._listeners.push(t);
            return;
          }
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          (++t.psd.ref, ++qe, $e(Xe, [n, e, t]));
        }
        function Xe(e, t, n) {
          try {
            Ae = t;
            var r,
              o = t._value;
            (t._state
              ? (r = e(o))
              : (we.length && (we = []),
                (r = e(o)),
                we.indexOf(o) === -1 && at(t)),
              n.resolve(r));
          } catch (e) {
            n.reject(e);
          } finally {
            ((Ae = null), --qe === 0 && nt(), --n.psd.ref || n.psd.finalize());
          }
        }
        function Ye(e, t, n) {
          if (t.length === n) return t;
          var r = "";
          if (e._state === !1) {
            var o = e._value,
              a,
              i;
            (o != null
              ? ((a = o.name || "Error"), (i = o.message || o), (r = K(o, 0)))
              : ((a = o), (i = "")),
              t.push(a + (i ? ": " + i : "") + r));
          }
          return (
            V &&
              ((r = K(e._stackHolder, 2)),
              r && t.indexOf(r) === -1 && t.push(r),
              e._prev && Ye(e._prev, t, n)),
            t
          );
        }
        function Je(e, t) {
          var n = t ? t._numPrev + 1 : 0;
          n < Ce && ((e._prev = t), (e._numPrev = n));
        }
        function Ze() {
          et() && tt();
        }
        function et() {
          var e = Pe;
          return ((Pe = !1), (Ne = !1), e);
        }
        function tt() {
          var e, t, n;
          do
            for (; We.length > 0; )
              for (e = We, We = [], n = e.length, t = 0; t < n; ++t) {
                var r = e[t];
                r[0].apply(null, r[1]);
              }
          while (We.length > 0);
          ((Pe = !0), (Ne = !0));
        }
        function nt() {
          var e = Me;
          ((Me = []),
            e.forEach(function (e) {
              e._PSD.onunhandled.call(null, e._value, e);
            }));
          for (var t = Ue.slice(0), n = t.length; n; ) t[--n]();
        }
        function rt(e) {
          function t() {
            (e(), Ue.splice(Ue.indexOf(t), 1));
          }
          (Ue.push(t),
            ++qe,
            $e(function () {
              --qe === 0 && nt();
            }, []));
        }
        function ot(e) {
          Me.some(function (t) {
            return t._value === e._value;
          }) || Me.push(e);
        }
        function at(e) {
          for (var t = Me.length; t; )
            if (Me[--t]._value === e._value) {
              Me.splice(t, 1);
              return;
            }
        }
        function it(e) {
          return new Ve(ye, !1, e);
        }
        function lt(e, t) {
          var n = Be;
          return function () {
            var r = et(),
              o = Be;
            try {
              return (bt(n, !0), e.apply(this, arguments));
            } catch (e) {
              t && t(e);
            } finally {
              (bt(o, !1), r && tt());
            }
          };
        }
        var st = { awaits: 0, echoes: 0, id: 0 },
          ut = 0,
          ct = [],
          dt = 0,
          mt = 0,
          pt = 0;
        function _t(e, t, n, r) {
          var o = Be,
            a = Object.create(o);
          ((a.parent = o), (a.ref = 0), (a.global = !1), (a.id = ++pt));
          var i = Oe.env;
          ((a.env = Te
            ? {
                Promise: Ve,
                PromiseProp: { value: Ve, configurable: !0, writable: !0 },
                all: Ve.all,
                race: Ve.race,
                allSettled: Ve.allSettled,
                any: Ve.any,
                resolve: Ve.resolve,
                reject: Ve.reject,
                nthen: Et(i.nthen, a),
                gthen: Et(i.gthen, a),
              }
            : {}),
            t && s(a, t),
            ++o.ref,
            (a.finalize = function () {
              --this.parent.ref || this.parent.finalize();
            }));
          var l = St(a, e, n, r);
          return (a.ref === 0 && a.finalize(), l);
        }
        function ft() {
          return (
            st.id || (st.id = ++ut),
            ++st.awaits,
            (st.echoes += ve),
            st.id
          );
        }
        function gt() {
          return st.awaits
            ? (--st.awaits === 0 && (st.id = 0),
              (st.echoes = st.awaits * ve),
              !0)
            : !1;
        }
        ("" + ke).indexOf("[native code]") === -1 && (ft = gt = ue);
        function ht(e) {
          return st.echoes && e && e.constructor === Ie
            ? (ft(),
              e.then(
                function (e) {
                  return (gt(), e);
                },
                function (e) {
                  return (gt(), Tt(e));
                },
              ))
            : e;
        }
        function yt(e) {
          (++mt,
            (!st.echoes || --st.echoes === 0) && (st.echoes = st.id = 0),
            ct.push(Be),
            bt(e, !0));
        }
        function Ct() {
          var e = ct[ct.length - 1];
          (ct.pop(), bt(e, !1));
        }
        function bt(e, t) {
          var n = Be;
          if (
            ((t
              ? st.echoes && (!dt++ || e !== Be)
              : dt && (!--dt || e !== Be)) && Rt(t ? yt.bind(null, e) : Ct),
            e !== Be && ((Be = e), n === Oe && (Oe.env = vt()), Te))
          ) {
            var r = Oe.env.Promise,
              o = e.env;
            ((Le.then = o.nthen),
              (r.prototype.then = o.gthen),
              (n.global || e.global) &&
                (Object.defineProperty(a, "Promise", o.PromiseProp),
                (r.all = o.all),
                (r.race = o.race),
                (r.resolve = o.resolve),
                (r.reject = o.reject),
                o.allSettled && (r.allSettled = o.allSettled),
                o.any && (r.any = o.any)));
          }
        }
        function vt() {
          var e = a.Promise;
          return Te
            ? {
                Promise: e,
                PromiseProp: Object.getOwnPropertyDescriptor(a, "Promise"),
                all: e.all,
                race: e.race,
                allSettled: e.allSettled,
                any: e.any,
                resolve: e.resolve,
                reject: e.reject,
                nthen: Le.then,
                gthen: e.prototype.then,
              }
            : {};
        }
        function St(e, t, n, r, o) {
          var a = Be;
          try {
            return (bt(e, !0), t(n, r, o));
          } finally {
            bt(a, !1);
          }
        }
        function Rt(e) {
          ke.call(Re, e);
        }
        function Lt(e, t, n, r) {
          return typeof e != "function"
            ? e
            : function () {
                var o = Be;
                (n && ft(), bt(t, !0));
                try {
                  return e.apply(this, arguments);
                } finally {
                  (bt(o, !1), r && Rt(gt));
                }
              };
        }
        function Et(e, t) {
          return function (n, r) {
            return e.call(this, Lt(n, t), Lt(r, t));
          };
        }
        var kt = "unhandledrejection";
        function It(e, t) {
          var n;
          try {
            n = t.onuncatched(e);
          } catch (e) {}
          if (n !== !1)
            try {
              var r,
                o = { promise: t, reason: e };
              if (
                (a.document && document.createEvent
                  ? ((r = document.createEvent("Event")),
                    r.initEvent(kt, !0, !0),
                    s(r, o))
                  : a.CustomEvent &&
                    ((r = new CustomEvent(kt, { detail: o })), s(r, o)),
                r &&
                  a.dispatchEvent &&
                  (dispatchEvent(r),
                  !a.PromiseRejectionEvent && a.onunhandledrejection))
              )
                try {
                  a.onunhandledrejection(r);
                } catch (e) {}
              V && r && !r.defaultPrevented && "" + (e.stack || e);
            } catch (e) {}
        }
        var Tt = Ve.reject;
        function Dt(e, t, n, r) {
          if (
            !e.idbdb ||
            (!e._state.openComplete && !Be.letThrough && !e._vip)
          ) {
            if (e._state.openComplete)
              return Tt(new ae.DatabaseClosed(e._state.dbOpenError));
            if (!e._state.isBeingOpened) {
              if (!e._options.autoOpen) return Tt(new ae.DatabaseClosed());
              e.open().catch(ue);
            }
            return e._state.dbReadyPromise.then(function () {
              return Dt(e, t, n, r);
            });
          } else {
            var o = e._createTransaction(t, n, e._dbSchema);
            try {
              (o.create(), (e._state.PR1398_maxLoop = 3));
            } catch (o) {
              return o.name === re.InvalidState &&
                e.isOpen() &&
                --e._state.PR1398_maxLoop > 0
                ? (e._close(),
                  e.open().then(function () {
                    return Dt(e, t, n, r);
                  }))
                : Tt(o);
            }
            return o
              ._promise(t, function (e, t) {
                return _t(function () {
                  return ((Be.trans = o), r(e, t, o));
                });
              })
              .then(function (e) {
                return o._completion.then(function () {
                  return e;
                });
              });
          }
        }
        var xt = "3.2.2",
          $t = "\uFFFF",
          Pt = -1 / 0,
          Nt =
            "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
          Mt = "String expected.",
          wt = [],
          At =
            typeof navigator != "undefined" &&
            /(MSIE|Trident|Edge)/.test(navigator.userAgent),
          Ft = At,
          Ot = At,
          Bt = function (t) {
            return !/(dexie\.js|dexie\.min\.js)/.test(t);
          },
          Wt = "__dbnames",
          qt = "readonly",
          Ut = "readwrite";
        function Vt(e, t) {
          return e
            ? t
              ? function () {
                  return e.apply(this, arguments) && t.apply(this, arguments);
                }
              : e
            : t;
        }
        var Ht = {
          type: 3,
          lower: -1 / 0,
          lowerOpen: !1,
          upper: [[]],
          upperOpen: !1,
        };
        function Gt(e) {
          return typeof e == "string" && !/\./.test(e)
            ? function (t) {
                return (
                  t[e] === void 0 && e in t && ((t = M(t)), delete t[e]),
                  t
                );
              }
            : function (e) {
                return e;
              };
        }
        var zt = (function () {
          function e() {}
          return (
            (e.prototype._trans = function (e, t, n) {
              var r = this._tx || Be.trans,
                o = this.name;
              function a(e, n, r) {
                if (!r.schema[o])
                  throw new ae.NotFound(
                    "Table " + o + " not part of transaction",
                  );
                return t(r.idbtrans, r);
              }
              var i = et();
              try {
                return r && r.db === this.db
                  ? r === Be.trans
                    ? r._promise(e, a, n)
                    : _t(
                        function () {
                          return r._promise(e, a, n);
                        },
                        { trans: r, transless: Be.transless || Be },
                      )
                  : Dt(this.db, e, [this.name], a);
              } finally {
                i && tt();
              }
            }),
            (e.prototype.get = function (e, t) {
              var n = this;
              return e && e.constructor === Object
                ? this.where(e).first(t)
                : this._trans("readonly", function (t) {
                    return n.core.get({ trans: t, key: e }).then(function (e) {
                      return n.hook.reading.fire(e);
                    });
                  }).then(t);
            }),
            (e.prototype.where = function (e) {
              if (typeof e == "string") return new this.db.WhereClause(this, e);
              if (l(e))
                return new this.db.WhereClause(this, "[" + e.join("+") + "]");
              var t = i(e);
              if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
              var n = this.schema.indexes
                .concat(this.schema.primKey)
                .filter(function (e) {
                  return (
                    e.compound &&
                    t.every(function (t) {
                      return e.keyPath.indexOf(t) >= 0;
                    }) &&
                    e.keyPath.every(function (e) {
                      return t.indexOf(e) >= 0;
                    })
                  );
                })[0];
              if (n && this.db._maxKey !== $t)
                return this.where(n.name).equals(
                  n.keyPath.map(function (t) {
                    return e[t];
                  }),
                );
              !n &&
                V &&
                "" +
                  JSON.stringify(e) +
                  this.name +
                  ("compound index [" + t.join("+") + "]");
              var r = this.schema.idxByName,
                o = this.db._deps.indexedDB;
              function a(e, t) {
                try {
                  return o.cmp(e, t) === 0;
                } catch (e) {
                  return !1;
                }
              }
              var s = t.reduce(
                  function (t, n) {
                    var o = t[0],
                      i = t[1],
                      s = r[n],
                      u = e[n];
                    return [
                      o || s,
                      o || !s
                        ? Vt(
                            i,
                            s && s.multi
                              ? function (e) {
                                  var t = E(e, n);
                                  return (
                                    l(t) &&
                                    t.some(function (e) {
                                      return a(u, e);
                                    })
                                  );
                                }
                              : function (e) {
                                  return a(u, E(e, n));
                                },
                          )
                        : i,
                    ];
                  },
                  [null, null],
                ),
                u = s[0],
                c = s[1];
              return u
                ? this.where(u.name).equals(e[u.keyPath]).filter(c)
                : n
                  ? this.filter(c)
                  : this.where(t).equals("");
            }),
            (e.prototype.filter = function (e) {
              return this.toCollection().and(e);
            }),
            (e.prototype.count = function (e) {
              return this.toCollection().count(e);
            }),
            (e.prototype.offset = function (e) {
              return this.toCollection().offset(e);
            }),
            (e.prototype.limit = function (e) {
              return this.toCollection().limit(e);
            }),
            (e.prototype.each = function (e) {
              return this.toCollection().each(e);
            }),
            (e.prototype.toArray = function (e) {
              return this.toCollection().toArray(e);
            }),
            (e.prototype.toCollection = function () {
              return new this.db.Collection(new this.db.WhereClause(this));
            }),
            (e.prototype.orderBy = function (e) {
              return new this.db.Collection(
                new this.db.WhereClause(
                  this,
                  l(e) ? "[" + e.join("+") + "]" : e,
                ),
              );
            }),
            (e.prototype.reverse = function () {
              return this.toCollection().reverse();
            }),
            (e.prototype.mapToClass = function (e) {
              this.schema.mappedClass = e;
              var t = function (n) {
                if (!n) return n;
                var t = Object.create(e.prototype);
                for (var r in n)
                  if (d(n, r))
                    try {
                      t[r] = n[r];
                    } catch (e) {}
                return t;
              };
              return (
                this.schema.readHook &&
                  this.hook.reading.unsubscribe(this.schema.readHook),
                (this.schema.readHook = t),
                this.hook("reading", t),
                e
              );
            }),
            (e.prototype.defineClass = function () {
              function e(e) {
                s(this, e);
              }
              return this.mapToClass(e);
            }),
            (e.prototype.add = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                o = r.auto,
                a = r.keyPath,
                i = e;
              return (
                a && o && (i = Gt(a)(e)),
                this._trans("readwrite", function (e) {
                  return n.core.mutate({
                    trans: e,
                    type: "add",
                    keys: t != null ? [t] : null,
                    values: [i],
                  });
                })
                  .then(function (e) {
                    return e.numFailures
                      ? Ve.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (a)
                      try {
                        k(e, a, t);
                      } catch (e) {}
                    return t;
                  })
              );
            }),
            (e.prototype.update = function (e, t) {
              if (typeof e == "object" && !l(e)) {
                var n = E(e, this.schema.primKey.keyPath);
                if (n === void 0)
                  return Tt(
                    new ae.InvalidArgument(
                      "Given object does not contain its primary key",
                    ),
                  );
                try {
                  typeof t != "function"
                    ? i(t).forEach(function (n) {
                        k(e, n, t[n]);
                      })
                    : t(e, { value: e, primKey: n });
                } catch (e) {}
                return this.where(":id").equals(n).modify(t);
              } else return this.where(":id").equals(e).modify(t);
            }),
            (e.prototype.put = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                o = r.auto,
                a = r.keyPath,
                i = e;
              return (
                a && o && (i = Gt(a)(e)),
                this._trans("readwrite", function (e) {
                  return n.core.mutate({
                    trans: e,
                    type: "put",
                    values: [i],
                    keys: t != null ? [t] : null,
                  });
                })
                  .then(function (e) {
                    return e.numFailures
                      ? Ve.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (a)
                      try {
                        k(e, a, t);
                      } catch (e) {}
                    return t;
                  })
              );
            }),
            (e.prototype.delete = function (e) {
              var t = this;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: [e] });
              }).then(function (e) {
                return e.numFailures ? Ve.reject(e.failures[0]) : void 0;
              });
            }),
            (e.prototype.clear = function () {
              var e = this;
              return this._trans("readwrite", function (t) {
                return e.core.mutate({
                  trans: t,
                  type: "deleteRange",
                  range: Ht,
                });
              }).then(function (e) {
                return e.numFailures ? Ve.reject(e.failures[0]) : void 0;
              });
            }),
            (e.prototype.bulkGet = function (e) {
              var t = this;
              return this._trans("readonly", function (n) {
                return t.core.getMany({ keys: e, trans: n }).then(function (e) {
                  return e.map(function (e) {
                    return t.hook.reading.fire(e);
                  });
                });
              });
            }),
            (e.prototype.bulkAdd = function (e, t, n) {
              var r = this,
                o = Array.isArray(t) ? t : void 0;
              n = n || (o ? void 0 : t);
              var a = n ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = r.schema.primKey,
                  i = n.auto,
                  l = n.keyPath;
                if (l && o)
                  throw new ae.InvalidArgument(
                    "bulkAdd(): keys argument invalid on tables with inbound keys",
                  );
                if (o && o.length !== e.length)
                  throw new ae.InvalidArgument(
                    "Arguments objects and keys must have the same length",
                  );
                var s = e.length,
                  u = l && i ? e.map(Gt(l)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "add",
                    keys: o,
                    values: u,
                    wantResults: a,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      o = e.lastResult,
                      i = e.failures,
                      l = a ? n : o;
                    if (t === 0) return l;
                    throw new ne(
                      r.name +
                        ".bulkAdd(): " +
                        t +
                        " of " +
                        s +
                        " operations failed",
                      i,
                    );
                  });
              });
            }),
            (e.prototype.bulkPut = function (e, t, n) {
              var r = this,
                o = Array.isArray(t) ? t : void 0;
              n = n || (o ? void 0 : t);
              var a = n ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = r.schema.primKey,
                  i = n.auto,
                  l = n.keyPath;
                if (l && o)
                  throw new ae.InvalidArgument(
                    "bulkPut(): keys argument invalid on tables with inbound keys",
                  );
                if (o && o.length !== e.length)
                  throw new ae.InvalidArgument(
                    "Arguments objects and keys must have the same length",
                  );
                var s = e.length,
                  u = l && i ? e.map(Gt(l)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "put",
                    keys: o,
                    values: u,
                    wantResults: a,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      o = e.lastResult,
                      i = e.failures,
                      l = a ? n : o;
                    if (t === 0) return l;
                    throw new ne(
                      r.name +
                        ".bulkPut(): " +
                        t +
                        " of " +
                        s +
                        " operations failed",
                      i,
                    );
                  });
              });
            }),
            (e.prototype.bulkDelete = function (e) {
              var t = this,
                n = e.length;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: e });
              }).then(function (e) {
                var r = e.numFailures,
                  o = e.lastResult,
                  a = e.failures;
                if (r === 0) return o;
                throw new ne(
                  t.name +
                    ".bulkDelete(): " +
                    r +
                    " of " +
                    n +
                    " operations failed",
                  a,
                );
              });
            }),
            e
          );
        })();
        function jt(e) {
          var t = {},
            n = function (r, o) {
              if (o) {
                for (var n = arguments.length, a = new Array(n - 1); --n; )
                  a[n - 1] = arguments[n];
                return (t[r].subscribe.apply(null, a), e);
              } else if (typeof r == "string") return t[r];
            };
          n.addEventType = a;
          for (var r = 1, o = arguments.length; r < o; ++r) a(arguments[r]);
          return n;
          function a(e, r, o) {
            if (typeof e == "object") return s(e);
            (r || (r = ge), o || (o = ue));
            var a = {
              subscribers: [],
              fire: o,
              subscribe: function (t) {
                a.subscribers.indexOf(t) === -1 &&
                  (a.subscribers.push(t), (a.fire = r(a.fire, t)));
              },
              unsubscribe: function (t) {
                ((a.subscribers = a.subscribers.filter(function (e) {
                  return e !== t;
                })),
                  (a.fire = a.subscribers.reduce(r, o)));
              },
            };
            return ((t[e] = n[e] = a), a);
          }
          function s(e) {
            i(e).forEach(function (t) {
              var n = e[t];
              if (l(n)) a(t, e[t][0], e[t][1]);
              else if (n === "asap")
                var r = a(t, ce, function () {
                  for (var e = arguments.length, t = new Array(e); e--; )
                    t[e] = arguments[e];
                  r.subscribers.forEach(function (e) {
                    S(function () {
                      e.apply(null, t);
                    });
                  });
                });
              else throw new ae.InvalidArgument("Invalid event config");
            });
          }
        }
        function Kt(e, t) {
          return (f(t).from({ prototype: e }), t);
        }
        function Qt(e) {
          return Kt(zt.prototype, function (n, r, o) {
            ((this.db = e),
              (this._tx = o),
              (this.name = n),
              (this.schema = r),
              (this.hook = e._allTables[n]
                ? e._allTables[n].hook
                : jt(null, {
                    creating: [pe, ue],
                    reading: [de, ce],
                    updating: [fe, ue],
                    deleting: [_e, ue],
                  })));
          });
        }
        function Xt(e, t) {
          return (
            !(e.filter || e.algorithm || e.or) &&
            (t ? e.justLimit : !e.replayFilter)
          );
        }
        function Yt(e, t) {
          e.filter = Vt(e.filter, t);
        }
        function Jt(e, t, n) {
          var r = e.replayFilter;
          ((e.replayFilter = r
            ? function () {
                return Vt(r(), t());
              }
            : t),
            (e.justLimit = n && !r));
        }
        function Zt(e, t) {
          e.isMatch = Vt(e.isMatch, t);
        }
        function en(e, t) {
          if (e.isPrimKey) return t.primaryKey;
          var n = t.getIndexByKeyPath(e.index);
          if (!n)
            throw new ae.Schema(
              "KeyPath " +
                e.index +
                " on object store " +
                t.name +
                " is not indexed",
            );
          return n;
        }
        function tn(e, t, n) {
          var r = en(e, t.schema);
          return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: e.dir === "prev",
            unique: !!e.unique,
            query: { index: r, range: e.range },
          });
        }
        function nn(t, r, o, a) {
          var i = t.replayFilter ? Vt(t.filter, t.replayFilter()) : t.filter;
          if (t.or) {
            var l = {},
              s = function (t, n, o) {
                if (
                  !i ||
                  i(
                    n,
                    o,
                    function (e) {
                      return n.stop(e);
                    },
                    function (e) {
                      return n.fail(e);
                    },
                  )
                ) {
                  var e = n.primaryKey,
                    a = "" + e;
                  (a === "[object ArrayBuffer]" && (a = "" + new Uint8Array(e)),
                    d(l, a) || ((l[a] = !0), r(t, n, o)));
                }
              };
            return (e || (e = n("Promise"))).all([
              t.or._iterate(s, o),
              rn(tn(t, a, o), t.algorithm, s, !t.keysOnly && t.valueMapper),
            ]);
          } else
            return rn(
              tn(t, a, o),
              Vt(t.algorithm, i),
              r,
              !t.keysOnly && t.valueMapper,
            );
        }
        function rn(e, t, n, r) {
          var o = r
              ? function (e, t, o) {
                  return n(r(e), t, o);
                }
              : n,
            a = lt(o);
          return e.then(function (e) {
            if (e)
              return e.start(function () {
                var n = function () {
                  return e.continue();
                };
                ((!t ||
                  t(
                    e,
                    function (e) {
                      return (n = e);
                    },
                    function (t) {
                      (e.stop(t), (n = ue));
                    },
                    function (t) {
                      (e.fail(t), (n = ue));
                    },
                  )) &&
                  a(e.value, e, function (e) {
                    return (n = e);
                  }),
                  n());
              });
          });
        }
        function on(e, t) {
          try {
            var n = sn(e),
              r = sn(t);
            if (n !== r)
              return n === "Array"
                ? 1
                : r === "Array"
                  ? -1
                  : n === "binary"
                    ? 1
                    : r === "binary"
                      ? -1
                      : n === "string"
                        ? 1
                        : r === "string"
                          ? -1
                          : n === "Date"
                            ? 1
                            : r !== "Date"
                              ? NaN
                              : -1;
            switch (n) {
              case "number":
              case "Date":
              case "string":
                return e > t ? 1 : e < t ? -1 : 0;
              case "binary":
                return ln(un(e), un(t));
              case "Array":
                return an(e, t);
            }
          } catch (e) {}
          return NaN;
        }
        function an(e, t) {
          for (
            var n = e.length, r = t.length, o = n < r ? n : r, a = 0;
            a < o;
            ++a
          ) {
            var i = on(e[a], t[a]);
            if (i !== 0) return i;
          }
          return n === r ? 0 : n < r ? -1 : 1;
        }
        function ln(e, t) {
          for (
            var n = e.length, r = t.length, o = n < r ? n : r, a = 0;
            a < o;
            ++a
          )
            if (e[a] !== t[a]) return e[a] < t[a] ? -1 : 1;
          return n === r ? 0 : n < r ? -1 : 1;
        }
        function sn(e) {
          var t = typeof e;
          if (t !== "object") return t;
          if (ArrayBuffer.isView(e)) return "binary";
          var n = F(e);
          return n === "ArrayBuffer" ? "binary" : n;
        }
        function un(e) {
          return e instanceof Uint8Array
            ? e
            : ArrayBuffer.isView(e)
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              : new Uint8Array(e);
        }
        var cn = (function () {
            function t() {}
            return (
              (t.prototype._read = function (e, t) {
                var n = this._ctx;
                return n.error
                  ? n.table._trans(null, Tt.bind(null, n.error))
                  : n.table._trans("readonly", e).then(t);
              }),
              (t.prototype._write = function (e) {
                var t = this._ctx;
                return t.error
                  ? t.table._trans(null, Tt.bind(null, t.error))
                  : t.table._trans("readwrite", e, "locked");
              }),
              (t.prototype._addAlgorithm = function (e) {
                var t = this._ctx;
                t.algorithm = Vt(t.algorithm, e);
              }),
              (t.prototype._iterate = function (e, t) {
                return nn(this._ctx, e, t, this._ctx.table.core);
              }),
              (t.prototype.clone = function (e) {
                var t = Object.create(this.constructor.prototype),
                  n = Object.create(this._ctx);
                return (e && s(n, e), (t._ctx = n), t);
              }),
              (t.prototype.raw = function () {
                return ((this._ctx.valueMapper = null), this);
              }),
              (t.prototype.each = function (e) {
                var t = this._ctx;
                return this._read(function (n) {
                  return nn(t, e, n, t.table.core);
                });
              }),
              (t.prototype.count = function (e) {
                var t = this;
                return this._read(function (e) {
                  var n = t._ctx,
                    r = n.table.core;
                  if (Xt(n, !0))
                    return r
                      .count({
                        trans: e,
                        query: { index: en(n, r.schema), range: n.range },
                      })
                      .then(function (e) {
                        return Math.min(e, n.limit);
                      });
                  var o = 0;
                  return nn(
                    n,
                    function () {
                      return (++o, !1);
                    },
                    e,
                    r,
                  ).then(function () {
                    return o;
                  });
                }).then(e);
              }),
              (t.prototype.sortBy = function (e, t) {
                var n = e.split(".").reverse(),
                  r = n[0],
                  o = n.length - 1;
                function a(e, t) {
                  return t ? a(e[n[t]], t - 1) : e[r];
                }
                var i = this._ctx.dir === "next" ? 1 : -1;
                function l(e, t) {
                  var n = a(e, o),
                    r = a(t, o);
                  return n < r ? -i : n > r ? i : 0;
                }
                return this.toArray(function (e) {
                  return e.sort(l);
                }).then(t);
              }),
              (t.prototype.toArray = function (e) {
                var t = this;
                return this._read(function (e) {
                  var n = t._ctx;
                  if (n.dir === "next" && Xt(n, !0) && n.limit > 0) {
                    var r = n.valueMapper,
                      o = en(n, n.table.core.schema);
                    return n.table.core
                      .query({
                        trans: e,
                        limit: n.limit,
                        values: !0,
                        query: { index: o, range: n.range },
                      })
                      .then(function (e) {
                        var t = e.result;
                        return r ? t.map(r) : t;
                      });
                  } else {
                    var a = [];
                    return nn(
                      n,
                      function (e) {
                        return a.push(e);
                      },
                      e,
                      n.table.core,
                    ).then(function () {
                      return a;
                    });
                  }
                }, e);
              }),
              (t.prototype.offset = function (e) {
                var t = this._ctx;
                return e <= 0
                  ? this
                  : ((t.offset += e),
                    Xt(t)
                      ? Jt(t, function () {
                          var t = e;
                          return function (e, n) {
                            return t === 0
                              ? !0
                              : t === 1
                                ? (--t, !1)
                                : (n(function () {
                                    (e.advance(t), (t = 0));
                                  }),
                                  !1);
                          };
                        })
                      : Jt(t, function () {
                          var t = e;
                          return function () {
                            return --t < 0;
                          };
                        }),
                    this);
              }),
              (t.prototype.limit = function (e) {
                return (
                  (this._ctx.limit = Math.min(this._ctx.limit, e)),
                  Jt(
                    this._ctx,
                    function () {
                      var t = e;
                      return function (e, n, r) {
                        return (--t <= 0 && n(r), t >= 0);
                      };
                    },
                    !0,
                  ),
                  this
                );
              }),
              (t.prototype.until = function (e, t) {
                return (
                  Yt(this._ctx, function (n, r, o) {
                    return e(n.value) ? (r(o), t) : !0;
                  }),
                  this
                );
              }),
              (t.prototype.first = function (e) {
                return this.limit(1)
                  .toArray(function (e) {
                    return e[0];
                  })
                  .then(e);
              }),
              (t.prototype.last = function (e) {
                return this.reverse().first(e);
              }),
              (t.prototype.filter = function (e) {
                return (
                  Yt(this._ctx, function (t) {
                    return e(t.value);
                  }),
                  Zt(this._ctx, e),
                  this
                );
              }),
              (t.prototype.and = function (e) {
                return this.filter(e);
              }),
              (t.prototype.or = function (e) {
                return new this.db.WhereClause(this._ctx.table, e, this);
              }),
              (t.prototype.reverse = function () {
                return (
                  (this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev"),
                  this._ondirectionchange &&
                    this._ondirectionchange(this._ctx.dir),
                  this
                );
              }),
              (t.prototype.desc = function () {
                return this.reverse();
              }),
              (t.prototype.eachKey = function (e) {
                var t = this._ctx;
                return (
                  (t.keysOnly = !t.isMatch),
                  this.each(function (t, n) {
                    e(n.key, n);
                  })
                );
              }),
              (t.prototype.eachUniqueKey = function (e) {
                return ((this._ctx.unique = "unique"), this.eachKey(e));
              }),
              (t.prototype.eachPrimaryKey = function (e) {
                var t = this._ctx;
                return (
                  (t.keysOnly = !t.isMatch),
                  this.each(function (t, n) {
                    e(n.primaryKey, n);
                  })
                );
              }),
              (t.prototype.keys = function (e) {
                var t = this._ctx;
                t.keysOnly = !t.isMatch;
                var n = [];
                return this.each(function (e, t) {
                  n.push(t.key);
                })
                  .then(function () {
                    return n;
                  })
                  .then(e);
              }),
              (t.prototype.primaryKeys = function (e) {
                var t = this._ctx;
                if (t.dir === "next" && Xt(t, !0) && t.limit > 0)
                  return this._read(function (e) {
                    var n = en(t, t.table.core.schema);
                    return t.table.core.query({
                      trans: e,
                      values: !1,
                      limit: t.limit,
                      query: { index: n, range: t.range },
                    });
                  })
                    .then(function (e) {
                      var t = e.result;
                      return t;
                    })
                    .then(e);
                t.keysOnly = !t.isMatch;
                var n = [];
                return this.each(function (e, t) {
                  n.push(t.primaryKey);
                })
                  .then(function () {
                    return n;
                  })
                  .then(e);
              }),
              (t.prototype.uniqueKeys = function (e) {
                return ((this._ctx.unique = "unique"), this.keys(e));
              }),
              (t.prototype.firstKey = function (e) {
                return this.limit(1)
                  .keys(function (e) {
                    return e[0];
                  })
                  .then(e);
              }),
              (t.prototype.lastKey = function (e) {
                return this.reverse().firstKey(e);
              }),
              (t.prototype.distinct = function () {
                var e = this._ctx,
                  t = e.index && e.table.schema.idxByName[e.index];
                if (!t || !t.multi) return this;
                var n = {};
                return (
                  Yt(this._ctx, function (e) {
                    var t = e.primaryKey.toString(),
                      r = d(n, t);
                    return ((n[t] = !0), !r);
                  }),
                  this
                );
              }),
              (t.prototype.modify = function (t) {
                var r = this,
                  o = this._ctx;
                return this._write(function (a) {
                  var l;
                  if (typeof t == "function") l = t;
                  else {
                    var s = i(t),
                      u = s.length;
                    l = function (n) {
                      for (var e = !1, r = 0; r < u; ++r) {
                        var o = s[r],
                          a = t[o];
                        E(n, o) !== a && (k(n, o, a), (e = !0));
                      }
                      return e;
                    };
                  }
                  var c = o.table.core,
                    d = c.schema.primaryKey,
                    m = d.outbound,
                    p = d.extractKey,
                    _ = r.db._options.modifyChunkSize || 200,
                    f = [],
                    g = 0,
                    h = [],
                    y = function (t, n) {
                      var e = n.failures,
                        r = n.numFailures;
                      g += t - r;
                      for (var o = 0, a = i(e); o < a.length; o++) {
                        var l = a[o];
                        f.push(e[l]);
                      }
                    };
                  return r
                    .clone()
                    .primaryKeys()
                    .then(function (r) {
                      var i = function (u) {
                        var s = Math.min(_, r.length - u);
                        return c
                          .getMany({
                            trans: a,
                            keys: r.slice(u, u + s),
                            cache: "immutable",
                          })
                          .then(function (d) {
                            for (
                              var f = [],
                                g = [],
                                h = m ? [] : null,
                                C = [],
                                b = 0;
                              b < s;
                              ++b
                            ) {
                              var v = d[b],
                                S = { value: M(v), primKey: r[u + b] };
                              l.call(S, S.value, S) !== !1 &&
                                (S.value == null
                                  ? C.push(r[u + b])
                                  : !m && on(p(v), p(S.value)) !== 0
                                    ? (C.push(r[u + b]), f.push(S.value))
                                    : (g.push(S.value), m && h.push(r[u + b])));
                            }
                            var R = Xt(o) &&
                              o.limit === 1 / 0 &&
                              (typeof t != "function" || t === dn) && {
                                index: o.index,
                                range: o.range,
                              };
                            return (e || (e = n("Promise")))
                              .resolve(
                                f.length > 0 &&
                                  c
                                    .mutate({
                                      trans: a,
                                      type: "add",
                                      values: f,
                                    })
                                    .then(function (e) {
                                      for (var t in e.failures)
                                        C.splice(parseInt(t), 1);
                                      y(f.length, e);
                                    }),
                              )
                              .then(function () {
                                return (
                                  (g.length > 0 ||
                                    (R && typeof t == "object")) &&
                                  c
                                    .mutate({
                                      trans: a,
                                      type: "put",
                                      keys: h,
                                      values: g,
                                      criteria: R,
                                      changeSpec: typeof t != "function" && t,
                                    })
                                    .then(function (e) {
                                      return y(g.length, e);
                                    })
                                );
                              })
                              .then(function () {
                                return (
                                  (C.length > 0 || (R && t === dn)) &&
                                  c
                                    .mutate({
                                      trans: a,
                                      type: "delete",
                                      keys: C,
                                      criteria: R,
                                    })
                                    .then(function (e) {
                                      return y(C.length, e);
                                    })
                                );
                              })
                              .then(function () {
                                return r.length > u + s && i(u + _);
                              });
                          });
                      };
                      return i(0).then(function () {
                        if (f.length > 0)
                          throw new te(
                            "Error modifying one or more objects",
                            f,
                            g,
                            h,
                          );
                        return r.length;
                      });
                    });
                });
              }),
              (t.prototype.delete = function () {
                var e = this._ctx,
                  t = e.range;
                return Xt(e) && ((e.isPrimKey && !Ot) || t.type === 3)
                  ? this._write(function (n) {
                      var r = e.table.core.schema.primaryKey,
                        o = t;
                      return e.table.core
                        .count({ trans: n, query: { index: r, range: o } })
                        .then(function (t) {
                          return e.table.core
                            .mutate({ trans: n, type: "deleteRange", range: o })
                            .then(function (e) {
                              var n = e.failures;
                              (e.lastResult, e.results);
                              var r = e.numFailures;
                              if (r)
                                throw new te(
                                  "Could not delete some values",
                                  Object.keys(n).map(function (e) {
                                    return n[e];
                                  }),
                                  t - r,
                                );
                              return t - r;
                            });
                        });
                    })
                  : this.modify(dn);
              }),
              t
            );
          })(),
          dn = function (t, n) {
            return (n.value = null);
          };
        function mn(e) {
          return Kt(cn.prototype, function (n, r) {
            this.db = e;
            var t = Ht,
              o = null;
            if (r)
              try {
                t = r();
              } catch (e) {
                o = e;
              }
            var a = n._ctx,
              i = a.table,
              l = i.hook.reading.fire;
            this._ctx = {
              table: i,
              index: a.index,
              isPrimKey:
                !a.index ||
                (i.schema.primKey.keyPath && a.index === i.schema.primKey.name),
              range: t,
              keysOnly: !1,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: o,
              or: a.or,
              valueMapper: l !== ce ? l : null,
            };
          });
        }
        function pn(e, t) {
          return e < t ? -1 : e === t ? 0 : 1;
        }
        function _n(e, t) {
          return e > t ? -1 : e === t ? 0 : 1;
        }
        function fn(e, t, n) {
          var r = e instanceof Rn ? new e.Collection(e) : e;
          return ((r._ctx.error = n ? new n(t) : new TypeError(t)), r);
        }
        function gn(e) {
          return new e.Collection(e, function () {
            return Sn("");
          }).limit(0);
        }
        function hn(e) {
          return e === "next"
            ? function (e) {
                return e.toUpperCase();
              }
            : function (e) {
                return e.toLowerCase();
              };
        }
        function yn(e) {
          return e === "next"
            ? function (e) {
                return e.toLowerCase();
              }
            : function (e) {
                return e.toUpperCase();
              };
        }
        function Cn(e, t, n, r, o, a) {
          for (
            var i = Math.min(e.length, r.length), l = -1, s = 0;
            s < i;
            ++s
          ) {
            var u = t[s];
            if (u !== r[s])
              return o(e[s], n[s]) < 0
                ? e.substr(0, s) + n[s] + n.substr(s + 1)
                : o(e[s], r[s]) < 0
                  ? e.substr(0, s) + r[s] + n.substr(s + 1)
                  : l >= 0
                    ? e.substr(0, l) + t[l] + n.substr(l + 1)
                    : null;
            o(e[s], u) < 0 && (l = s);
          }
          return i < r.length && a === "next"
            ? e + n.substr(e.length)
            : i < e.length && a === "prev"
              ? e.substr(0, n.length)
              : l < 0
                ? null
                : e.substr(0, l) + r[l] + n.substr(l + 1);
        }
        function bn(e, t, n, r) {
          var o,
            a,
            i,
            l,
            s,
            u,
            c,
            d = n.length;
          if (
            !n.every(function (e) {
              return typeof e == "string";
            })
          )
            return fn(e, Mt);
          function m(e) {
            ((o = hn(e)), (a = yn(e)), (i = e === "next" ? pn : _n));
            var t = n
              .map(function (e) {
                return { lower: a(e), upper: o(e) };
              })
              .sort(function (e, t) {
                return i(e.lower, t.lower);
              });
            ((l = t.map(function (e) {
              return e.upper;
            })),
              (s = t.map(function (e) {
                return e.lower;
              })),
              (u = e),
              (c = e === "next" ? "" : r));
          }
          m("next");
          var p = new e.Collection(e, function () {
            return vn(l[0], s[d - 1] + r);
          });
          p._ondirectionchange = function (e) {
            m(e);
          };
          var _ = 0;
          return (
            p._addAlgorithm(function (e, n, r) {
              var o = e.key;
              if (typeof o != "string") return !1;
              var m = a(o);
              if (t(m, s, _)) return !0;
              for (var p = null, f = _; f < d; ++f) {
                var g = Cn(o, m, l[f], s[f], i, u);
                g === null && p === null
                  ? (_ = f + 1)
                  : (p === null || i(p, g) > 0) && (p = g);
              }
              return (
                n(
                  p !== null
                    ? function () {
                        e.continue(p + c);
                      }
                    : r,
                ),
                !1
              );
            }),
            p
          );
        }
        function vn(e, t, n, r) {
          return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
        }
        function Sn(e) {
          return { type: 1, lower: e, upper: e };
        }
        var Rn = (function () {
          function e() {}
          return (
            Object.defineProperty(e.prototype, "Collection", {
              get: function () {
                return this._ctx.table.db.Collection;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.between = function (e, t, n, r) {
              ((n = n !== !1), (r = r === !0));
              try {
                return this._cmp(e, t) > 0 ||
                  (this._cmp(e, t) === 0 && (n || r) && !(n && r))
                  ? gn(this)
                  : new this.Collection(this, function () {
                      return vn(e, t, !n, !r);
                    });
              } catch (e) {
                return fn(this, Nt);
              }
            }),
            (e.prototype.equals = function (e) {
              return e == null
                ? fn(this, Nt)
                : new this.Collection(this, function () {
                    return Sn(e);
                  });
            }),
            (e.prototype.above = function (e) {
              return e == null
                ? fn(this, Nt)
                : new this.Collection(this, function () {
                    return vn(e, void 0, !0);
                  });
            }),
            (e.prototype.aboveOrEqual = function (e) {
              return e == null
                ? fn(this, Nt)
                : new this.Collection(this, function () {
                    return vn(e, void 0, !1);
                  });
            }),
            (e.prototype.below = function (e) {
              return e == null
                ? fn(this, Nt)
                : new this.Collection(this, function () {
                    return vn(void 0, e, !1, !0);
                  });
            }),
            (e.prototype.belowOrEqual = function (e) {
              return e == null
                ? fn(this, Nt)
                : new this.Collection(this, function () {
                    return vn(void 0, e);
                  });
            }),
            (e.prototype.startsWith = function (e) {
              return typeof e != "string"
                ? fn(this, Mt)
                : this.between(e, e + $t, !0, !0);
            }),
            (e.prototype.startsWithIgnoreCase = function (e) {
              return e === ""
                ? this.startsWith(e)
                : bn(
                    this,
                    function (e, t) {
                      return e.indexOf(t[0]) === 0;
                    },
                    [e],
                    $t,
                  );
            }),
            (e.prototype.equalsIgnoreCase = function (e) {
              return bn(
                this,
                function (e, t) {
                  return e === t[0];
                },
                [e],
                "",
              );
            }),
            (e.prototype.anyOfIgnoreCase = function () {
              var e = q.apply(W, arguments);
              return e.length === 0
                ? gn(this)
                : bn(
                    this,
                    function (e, t) {
                      return t.indexOf(e) !== -1;
                    },
                    e,
                    "",
                  );
            }),
            (e.prototype.startsWithAnyOfIgnoreCase = function () {
              var e = q.apply(W, arguments);
              return e.length === 0
                ? gn(this)
                : bn(
                    this,
                    function (e, t) {
                      return t.some(function (t) {
                        return e.indexOf(t) === 0;
                      });
                    },
                    e,
                    $t,
                  );
            }),
            (e.prototype.anyOf = function () {
              var e = this,
                t = q.apply(W, arguments),
                n = this._cmp;
              try {
                t.sort(n);
              } catch (e) {
                return fn(this, Nt);
              }
              if (t.length === 0) return gn(this);
              var r = new this.Collection(this, function () {
                return vn(t[0], t[t.length - 1]);
              });
              r._ondirectionchange = function (r) {
                ((n = r === "next" ? e._ascending : e._descending), t.sort(n));
              };
              var o = 0;
              return (
                r._addAlgorithm(function (e, r, a) {
                  for (var i = e.key; n(i, t[o]) > 0; )
                    if ((++o, o === t.length)) return (r(a), !1);
                  return n(i, t[o]) === 0
                    ? !0
                    : (r(function () {
                        e.continue(t[o]);
                      }),
                      !1);
                }),
                r
              );
            }),
            (e.prototype.notEqual = function (e) {
              return this.inAnyRange(
                [
                  [Pt, e],
                  [e, this.db._maxKey],
                ],
                { includeLowers: !1, includeUppers: !1 },
              );
            }),
            (e.prototype.noneOf = function () {
              var e = q.apply(W, arguments);
              if (e.length === 0) return new this.Collection(this);
              try {
                e.sort(this._ascending);
              } catch (e) {
                return fn(this, Nt);
              }
              var t = e.reduce(function (e, t) {
                return e ? e.concat([[e[e.length - 1][1], t]]) : [[Pt, t]];
              }, null);
              return (
                t.push([e[e.length - 1], this.db._maxKey]),
                this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 })
              );
            }),
            (e.prototype.inAnyRange = function (e, t) {
              var n = this,
                r = this._cmp,
                o = this._ascending,
                a = this._descending,
                i = this._min,
                l = this._max;
              if (e.length === 0) return gn(this);
              if (
                !e.every(function (e) {
                  return (
                    e[0] !== void 0 && e[1] !== void 0 && o(e[0], e[1]) <= 0
                  );
                })
              )
                return fn(
                  this,
                  "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                  ae.InvalidArgument,
                );
              var s = !t || t.includeLowers !== !1,
                u = t && t.includeUppers === !0;
              function c(e, t) {
                for (var n = 0, o = e.length; n < o; ++n) {
                  var a = e[n];
                  if (r(t[0], a[1]) < 0 && r(t[1], a[0]) > 0) {
                    ((a[0] = i(a[0], t[0])), (a[1] = l(a[1], t[1])));
                    break;
                  }
                }
                return (n === o && e.push(t), e);
              }
              var d = o;
              function m(e, t) {
                return d(e[0], t[0]);
              }
              var p;
              try {
                ((p = e.reduce(c, [])), p.sort(m));
              } catch (e) {
                return fn(this, Nt);
              }
              var _ = 0,
                f = u
                  ? function (e) {
                      return o(e, p[_][1]) > 0;
                    }
                  : function (e) {
                      return o(e, p[_][1]) >= 0;
                    },
                g = s
                  ? function (e) {
                      return a(e, p[_][0]) > 0;
                    }
                  : function (e) {
                      return a(e, p[_][0]) >= 0;
                    };
              function h(e) {
                return !f(e) && !g(e);
              }
              var y = f,
                C = new this.Collection(this, function () {
                  return vn(p[0][0], p[p.length - 1][1], !s, !u);
                });
              return (
                (C._ondirectionchange = function (e) {
                  (e === "next" ? ((y = f), (d = o)) : ((y = g), (d = a)),
                    p.sort(m));
                }),
                C._addAlgorithm(function (e, t, r) {
                  for (var a = e.key; y(a); )
                    if ((++_, _ === p.length)) return (t(r), !1);
                  return h(a)
                    ? !0
                    : (n._cmp(a, p[_][1]) === 0 ||
                        n._cmp(a, p[_][0]) === 0 ||
                        t(function () {
                          d === o ? e.continue(p[_][0]) : e.continue(p[_][1]);
                        }),
                      !1);
                }),
                C
              );
            }),
            (e.prototype.startsWithAnyOf = function () {
              var e = q.apply(W, arguments);
              return e.every(function (e) {
                return typeof e == "string";
              })
                ? e.length === 0
                  ? gn(this)
                  : this.inAnyRange(
                      e.map(function (e) {
                        return [e, e + $t];
                      }),
                    )
                : fn(this, "startsWithAnyOf() only works with strings");
            }),
            e
          );
        })();
        function Ln(e) {
          return Kt(Rn.prototype, function (n, r, o) {
            ((this.db = e),
              (this._ctx = { table: n, index: r === ":id" ? null : r, or: o }));
            var t = e._deps.indexedDB;
            if (!t) throw new ae.MissingAPI();
            ((this._cmp = this._ascending = t.cmp.bind(t)),
              (this._descending = function (e, n) {
                return t.cmp(n, e);
              }),
              (this._max = function (e, n) {
                return t.cmp(e, n) > 0 ? e : n;
              }),
              (this._min = function (e, n) {
                return t.cmp(e, n) < 0 ? e : n;
              }),
              (this._IDBKeyRange = e._deps.IDBKeyRange));
          });
        }
        function En(e) {
          return lt(function (t) {
            return (kn(t), e(t.target.error), !1);
          });
        }
        function kn(e) {
          (e.stopPropagation && e.stopPropagation(),
            e.preventDefault && e.preventDefault());
        }
        var In = "storagemutated",
          Tn = "x-storagemutated-1",
          Dn = jt(null, In),
          xn = (function () {
            function e() {}
            return (
              (e.prototype._lock = function () {
                return (
                  v(!Be.global),
                  ++this._reculock,
                  this._reculock === 1 &&
                    !Be.global &&
                    (Be.lockOwnerFor = this),
                  this
                );
              }),
              (e.prototype._unlock = function () {
                if ((v(!Be.global), --this._reculock === 0))
                  for (
                    Be.global || (Be.lockOwnerFor = null);
                    this._blockedFuncs.length > 0 && !this._locked();
                  ) {
                    var e = this._blockedFuncs.shift();
                    try {
                      St(e[1], e[0]);
                    } catch (e) {}
                  }
                return this;
              }),
              (e.prototype._locked = function () {
                return this._reculock && Be.lockOwnerFor !== this;
              }),
              (e.prototype.create = function (e) {
                var t = this;
                if (!this.mode) return this;
                var n = this.db.idbdb,
                  r = this.db._state.dbOpenError;
                if ((v(!this.idbtrans), !e && !n))
                  switch (r && r.name) {
                    case "DatabaseClosedError":
                      throw new ae.DatabaseClosed(r);
                    case "MissingAPIError":
                      throw new ae.MissingAPI(r.message, r);
                    default:
                      throw new ae.OpenFailed(r);
                  }
                if (!this.active) throw new ae.TransactionInactive();
                return (
                  v(this._completion._state === null),
                  (e = this.idbtrans =
                    e ||
                    (this.db.core
                      ? this.db.core.transaction(this.storeNames, this.mode, {
                          durability: this.chromeTransactionDurability,
                        })
                      : n.transaction(this.storeNames, this.mode, {
                          durability: this.chromeTransactionDurability,
                        }))),
                  (e.onerror = lt(function (n) {
                    (kn(n), t._reject(e.error));
                  })),
                  (e.onabort = lt(function (n) {
                    (kn(n),
                      t.active && t._reject(new ae.Abort(e.error)),
                      (t.active = !1),
                      t.on("abort").fire(n));
                  })),
                  (e.oncomplete = lt(function () {
                    ((t.active = !1),
                      t._resolve(),
                      "mutatedParts" in e &&
                        Dn.storagemutated.fire(e.mutatedParts));
                  })),
                  this
                );
              }),
              (e.prototype._promise = function (e, t, n) {
                var r = this;
                if (e === "readwrite" && this.mode !== "readwrite")
                  return Tt(new ae.ReadOnly("Transaction is readonly"));
                if (!this.active) return Tt(new ae.TransactionInactive());
                if (this._locked())
                  return new Ve(function (o, a) {
                    r._blockedFuncs.push([
                      function () {
                        r._promise(e, t, n).then(o, a);
                      },
                      Be,
                    ]);
                  });
                if (n)
                  return _t(function () {
                    var e = new Ve(function (e, n) {
                      r._lock();
                      var o = t(e, n, r);
                      o && o.then && o.then(e, n);
                    });
                    return (
                      e.finally(function () {
                        return r._unlock();
                      }),
                      (e._lib = !0),
                      e
                    );
                  });
                var o = new Ve(function (e, n) {
                  var o = t(e, n, r);
                  o && o.then && o.then(e, n);
                });
                return ((o._lib = !0), o);
              }),
              (e.prototype._root = function () {
                return this.parent ? this.parent._root() : this;
              }),
              (e.prototype.waitFor = function (e) {
                var t = this._root(),
                  n = Ve.resolve(e);
                if (t._waitingFor)
                  t._waitingFor = t._waitingFor.then(function () {
                    return n;
                  });
                else {
                  ((t._waitingFor = n), (t._waitingQueue = []));
                  var r = t.idbtrans.objectStore(t.storeNames[0]);
                  (function e() {
                    for (++t._spinCount; t._waitingQueue.length; )
                      t._waitingQueue.shift()();
                    t._waitingFor && (r.get(-1 / 0).onsuccess = e);
                  })();
                }
                var o = t._waitingFor;
                return new Ve(function (e, r) {
                  n.then(
                    function (n) {
                      return t._waitingQueue.push(lt(e.bind(null, n)));
                    },
                    function (e) {
                      return t._waitingQueue.push(lt(r.bind(null, e)));
                    },
                  ).finally(function () {
                    t._waitingFor === o && (t._waitingFor = null);
                  });
                });
              }),
              (e.prototype.abort = function () {
                this.active &&
                  ((this.active = !1),
                  this.idbtrans && this.idbtrans.abort(),
                  this._reject(new ae.Abort()));
              }),
              (e.prototype.table = function (e) {
                var t = this._memoizedTables || (this._memoizedTables = {});
                if (d(t, e)) return t[e];
                var n = this.schema[e];
                if (!n)
                  throw new ae.NotFound(
                    "Table " + e + " not part of transaction",
                  );
                var r = new this.db.Table(e, n, this);
                return ((r.core = this.db.core.table(e)), (t[e] = r), r);
              }),
              e
            );
          })();
        function $n(e) {
          return Kt(xn.prototype, function (n, r, o, a, i) {
            var t = this;
            ((this.db = e),
              (this.mode = n),
              (this.storeNames = r),
              (this.schema = o),
              (this.chromeTransactionDurability = a),
              (this.idbtrans = null),
              (this.on = jt(this, "complete", "error", "abort")),
              (this.parent = i || null),
              (this.active = !0),
              (this._reculock = 0),
              (this._blockedFuncs = []),
              (this._resolve = null),
              (this._reject = null),
              (this._waitingFor = null),
              (this._waitingQueue = null),
              (this._spinCount = 0),
              (this._completion = new Ve(function (e, n) {
                ((t._resolve = e), (t._reject = n));
              })),
              this._completion.then(
                function () {
                  ((t.active = !1), t.on.complete.fire());
                },
                function (e) {
                  var n = t.active;
                  return (
                    (t.active = !1),
                    t.on.error.fire(e),
                    t.parent
                      ? t.parent._reject(e)
                      : n && t.idbtrans && t.idbtrans.abort(),
                    Tt(e)
                  );
                },
              ));
          });
        }
        function Pn(e, t, n, r, o, a, i) {
          return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: o,
            compound: a,
            src:
              (n && !i ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + Nn(t),
          };
        }
        function Nn(e) {
          return typeof e == "string"
            ? e
            : e
              ? "[" + [].join.call(e, "+") + "]"
              : "";
        }
        function Mn(e, t, n) {
          return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: R(n, function (e) {
              return [e.name, e];
            }),
          };
        }
        function wn(e) {
          return e.length === 1 ? e[0] : e;
        }
        var An = function (t) {
          try {
            return (
              t.only([[]]),
              (An = function () {
                return [[]];
              }),
              [[]]
            );
          } catch (e) {
            return (
              (An = function () {
                return $t;
              }),
              $t
            );
          }
        };
        function Fn(e) {
          return e == null
            ? function () {}
            : typeof e == "string"
              ? On(e)
              : function (t) {
                  return E(t, e);
                };
        }
        function On(e) {
          var t = e.split(".");
          return t.length === 1
            ? function (t) {
                return t[e];
              }
            : function (t) {
                return E(t, e);
              };
        }
        function Bn(e) {
          return [].slice.call(e);
        }
        var Wn = 0;
        function qn(e) {
          return e == null
            ? ":id"
            : typeof e == "string"
              ? e
              : "[" + e.join("+") + "]";
        }
        function Un(t, r, o) {
          function a(e, t) {
            var n = Bn(e.objectStoreNames);
            return {
              schema: {
                name: e.name,
                tables: n
                  .map(function (e) {
                    return t.objectStore(e);
                  })
                  .map(function (e) {
                    var t = e.keyPath,
                      n = e.autoIncrement,
                      r = l(t),
                      o = t == null,
                      a = {},
                      i = {
                        name: e.name,
                        primaryKey: {
                          name: null,
                          isPrimaryKey: !0,
                          outbound: o,
                          compound: r,
                          keyPath: t,
                          autoIncrement: n,
                          unique: !0,
                          extractKey: Fn(t),
                        },
                        indexes: Bn(e.indexNames)
                          .map(function (t) {
                            return e.index(t);
                          })
                          .map(function (e) {
                            var t = e.name,
                              n = e.unique,
                              r = e.multiEntry,
                              o = e.keyPath,
                              i = l(o),
                              s = {
                                name: t,
                                compound: i,
                                keyPath: o,
                                unique: n,
                                multiEntry: r,
                                extractKey: Fn(o),
                              };
                            return ((a[qn(o)] = s), s);
                          }),
                        getIndexByKeyPath: function (t) {
                          return a[qn(t)];
                        },
                      };
                    return (
                      (a[":id"] = i.primaryKey),
                      t != null && (a[qn(t)] = i.primaryKey),
                      i
                    );
                  }),
              },
              hasGetAll:
                n.length > 0 &&
                "getAll" in t.objectStore(n[0]) &&
                !(
                  typeof navigator != "undefined" &&
                  /Safari/.test(navigator.userAgent) &&
                  !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                  [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
                ),
            };
          }
          function i(e) {
            if (e.type === 3) return null;
            if (e.type === 4)
              throw new Error("Cannot convert never type to IDBKeyRange");
            var t = e.lower,
              n = e.upper,
              o = e.lowerOpen,
              a = e.upperOpen,
              i =
                t === void 0
                  ? n === void 0
                    ? null
                    : r.upperBound(n, !!a)
                  : n === void 0
                    ? r.lowerBound(t, !!o)
                    : r.bound(t, n, !!o, !!a);
            return i;
          }
          function s(t) {
            var r = t.name;
            function o(t) {
              var o = t.trans,
                a = t.type,
                l = t.keys,
                s = t.values,
                u = t.range;
              return new (e || (e = n("Promise")))(function (e, t) {
                e = lt(e);
                var n = o.objectStore(r),
                  c = n.keyPath == null,
                  d = a === "put" || a === "add";
                if (!d && a !== "delete" && a !== "deleteRange")
                  throw new Error("Invalid operation type: " + a);
                var m = (l || s || { length: 1 }).length;
                if (l && s && l.length !== s.length)
                  throw new Error(
                    "Given keys array must have same length as given values array.",
                  );
                if (m === 0)
                  return e({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: void 0,
                  });
                var p,
                  _ = [],
                  f = [],
                  g = 0,
                  h = function (t) {
                    (++g, kn(t));
                  };
                if (a === "deleteRange") {
                  if (u.type === 4)
                    return e({
                      numFailures: g,
                      failures: f,
                      results: [],
                      lastResult: void 0,
                    });
                  u.type === 3
                    ? _.push((p = n.clear()))
                    : _.push((p = n.delete(i(u))));
                } else {
                  var y = d ? (c ? [s, l] : [s, null]) : [l, null],
                    C = y[0],
                    b = y[1];
                  if (d)
                    for (var v = 0; v < m; ++v)
                      (_.push(
                        (p =
                          b && b[v] !== void 0 ? n[a](C[v], b[v]) : n[a](C[v])),
                      ),
                        (p.onerror = h));
                  else
                    for (var v = 0; v < m; ++v)
                      (_.push((p = n[a](C[v]))), (p.onerror = h));
                }
                var S = function (n) {
                  var t = n.target.result;
                  (_.forEach(function (e, t) {
                    return e.error != null && (f[t] = e.error);
                  }),
                    e({
                      numFailures: g,
                      failures: f,
                      results:
                        a === "delete"
                          ? l
                          : _.map(function (e) {
                              return e.result;
                            }),
                      lastResult: t,
                    }));
                };
                ((p.onerror = function (e) {
                  (h(e), S(e));
                }),
                  (p.onsuccess = S));
              });
            }
            function a(t) {
              var o = t.trans,
                a = t.values,
                l = t.query,
                s = t.reverse,
                u = t.unique;
              return new (e || (e = n("Promise")))(function (t, c) {
                t = lt(t);
                var d = l.index,
                  m = l.range,
                  p = o.objectStore(r),
                  _ = d.isPrimaryKey ? p : p.index(d.name),
                  f = s
                    ? u
                      ? "prevunique"
                      : "prev"
                    : u
                      ? "nextunique"
                      : "next",
                  g =
                    a || !("openKeyCursor" in _)
                      ? _.openCursor(i(m), f)
                      : _.openKeyCursor(i(m), f);
                ((g.onerror = En(c)),
                  (g.onsuccess = lt(function (r) {
                    var a = g.result;
                    if (!a) {
                      t(null);
                      return;
                    }
                    ((a.___id = ++Wn), (a.done = !1));
                    var i = a.continue.bind(a),
                      l = a.continuePrimaryKey;
                    l && (l = l.bind(a));
                    var s = a.advance.bind(a),
                      u = function () {
                        throw new Error("Cursor not started");
                      },
                      d = function () {
                        throw new Error("Cursor not stopped");
                      };
                    ((a.trans = o),
                      (a.stop =
                        a.continue =
                        a.continuePrimaryKey =
                        a.advance =
                          u),
                      (a.fail = lt(c)),
                      (a.next = function () {
                        var e = this,
                          t = 1;
                        return this.start(function () {
                          return t-- ? e.continue() : e.stop();
                        }).then(function () {
                          return e;
                        });
                      }),
                      (a.start = function (t) {
                        var r = new (e || (e = n("Promise")))(function (e, t) {
                            ((e = lt(e)),
                              (g.onerror = En(t)),
                              (a.fail = t),
                              (a.stop = function (t) {
                                ((a.stop =
                                  a.continue =
                                  a.continuePrimaryKey =
                                  a.advance =
                                    d),
                                  e(t));
                              }));
                          }),
                          o = function () {
                            if (g.result)
                              try {
                                t();
                              } catch (e) {
                                a.fail(e);
                              }
                            else
                              ((a.done = !0),
                                (a.start = function () {
                                  throw new Error("Cursor behind last entry");
                                }),
                                a.stop());
                          };
                        return (
                          (g.onsuccess = lt(function (e) {
                            ((g.onsuccess = o), o());
                          })),
                          (a.continue = i),
                          (a.continuePrimaryKey = l),
                          (a.advance = s),
                          o(),
                          r
                        );
                      }),
                      t(a));
                  }, c)));
              });
            }
            function l(t) {
              return function (o) {
                return new (e || (e = n("Promise")))(function (e, n) {
                  e = lt(e);
                  var a = o.trans,
                    l = o.values,
                    s = o.limit,
                    u = o.query,
                    c = s === 1 / 0 ? void 0 : s,
                    d = u.index,
                    m = u.range,
                    p = a.objectStore(r),
                    _ = d.isPrimaryKey ? p : p.index(d.name),
                    f = i(m);
                  if (s === 0) return e({ result: [] });
                  if (t) {
                    var g = l ? _.getAll(f, c) : _.getAllKeys(f, c);
                    ((g.onsuccess = function (t) {
                      return e({ result: t.target.result });
                    }),
                      (g.onerror = En(n)));
                  } else {
                    var h = 0,
                      y =
                        l || !("openKeyCursor" in _)
                          ? _.openCursor(f)
                          : _.openKeyCursor(f),
                      C = [];
                    ((y.onsuccess = function (t) {
                      var n = y.result;
                      if (!n) return e({ result: C });
                      if ((C.push(l ? n.value : n.primaryKey), ++h === s))
                        return e({ result: C });
                      n.continue();
                    }),
                      (y.onerror = En(n)));
                  }
                });
              };
            }
            return {
              name: r,
              schema: t,
              mutate: o,
              getMany: function (o) {
                var t = o.trans,
                  a = o.keys;
                return new (e || (e = n("Promise")))(function (e, n) {
                  e = lt(e);
                  for (
                    var o = t.objectStore(r),
                      i = a.length,
                      l = new Array(i),
                      s = 0,
                      u = 0,
                      c,
                      d = function (n) {
                        var t = n.target;
                        ((l[t._pos] = t.result) != null, ++u === s && e(l));
                      },
                      m = En(n),
                      p = 0;
                    p < i;
                    ++p
                  ) {
                    var _ = a[p];
                    _ != null &&
                      ((c = o.get(a[p])),
                      (c._pos = p),
                      (c.onsuccess = d),
                      (c.onerror = m),
                      ++s);
                  }
                  s === 0 && e(l);
                });
              },
              get: function (o) {
                var t = o.trans,
                  a = o.key;
                return new (e || (e = n("Promise")))(function (e, n) {
                  e = lt(e);
                  var o = t.objectStore(r),
                    i = o.get(a);
                  ((i.onsuccess = function (t) {
                    return e(t.target.result);
                  }),
                    (i.onerror = En(n)));
                });
              },
              query: l(d),
              openCursor: a,
              count: function (o) {
                var t = o.query,
                  a = o.trans,
                  l = t.index,
                  s = t.range;
                return new (e || (e = n("Promise")))(function (e, t) {
                  var n = a.objectStore(r),
                    o = l.isPrimaryKey ? n : n.index(l.name),
                    u = i(s),
                    c = u ? o.count(u) : o.count();
                  ((c.onsuccess = lt(function (t) {
                    return e(t.target.result);
                  })),
                    (c.onerror = En(t)));
                });
              },
            };
          }
          var u = a(t, o),
            c = u.schema,
            d = u.hasGetAll,
            m = c.tables.map(function (e) {
              return s(e);
            }),
            p = {};
          return (
            m.forEach(function (e) {
              return (p[e.name] = e);
            }),
            {
              stack: "dbcore",
              transaction: t.transaction.bind(t),
              table: function (t) {
                var e = p[t];
                if (!e) throw new Error("Table '" + t + "' not found");
                return p[t];
              },
              MIN_KEY: -1 / 0,
              MAX_KEY: An(r),
              schema: c,
            }
          );
        }
        function Vn(e, t) {
          return t.reduce(function (e, t) {
            var n = t.create;
            return r(r({}, e), n(e));
          }, e);
        }
        function Hn(e, t, n, r) {
          var o = n.IDBKeyRange;
          n.indexedDB;
          var a = Vn(Un(t, o, r), e.dbcore);
          return { dbcore: a };
        }
        function Gn(e, t) {
          var n = e._novip,
            r = t.db,
            o = Hn(n._middlewares, r, n._deps, t);
          ((n.core = o.dbcore),
            n.tables.forEach(function (e) {
              var t = e.name;
              n.core.schema.tables.some(function (e) {
                return e.name === t;
              }) &&
                ((e.core = n.core.table(t)),
                n[t] instanceof n.Table && (n[t].core = e.core));
            }));
        }
        function zn(e, t, n, r) {
          var o = e._novip;
          n.forEach(function (e) {
            var n = r[e];
            t.forEach(function (t) {
              var r = h(t, e);
              (!r || ("value" in r && r.value === void 0)) &&
                (t === o.Transaction.prototype || t instanceof o.Transaction
                  ? _(t, e, {
                      get: function () {
                        return this.table(e);
                      },
                      set: function (n) {
                        p(this, e, {
                          value: n,
                          writable: !0,
                          configurable: !0,
                          enumerable: !0,
                        });
                      },
                    })
                  : (t[e] = new o.Table(e, n)));
            });
          });
        }
        function jn(e, t) {
          var n = e._novip;
          t.forEach(function (e) {
            for (var t in e) e[t] instanceof n.Table && delete e[t];
          });
        }
        function Kn(e, t) {
          return e._cfg.version - t._cfg.version;
        }
        function Qn(e, t, n, r) {
          var o = e._dbSchema,
            a = e._createTransaction("readwrite", e._storeNames, o);
          (a.create(n), a._completion.catch(r));
          var l = a._reject.bind(a),
            s = Be.transless || Be;
          _t(function () {
            ((Be.trans = a),
              (Be.transless = s),
              t === 0
                ? (i(o).forEach(function (e) {
                    Jn(n, e, o[e].primKey, o[e].indexes);
                  }),
                  Gn(e, n),
                  Ve.follow(function () {
                    return e.on.populate.fire(a);
                  }).catch(l))
                : Xn(e, t, a, n).catch(l));
          });
        }
        function Xn(e, t, n, r) {
          var o = e._novip,
            a = [],
            l = o._versions,
            s = (o._dbSchema = nr(o, o.idbdb, r)),
            u = !1,
            c = l.filter(function (e) {
              return e._cfg.version >= t;
            });
          c.forEach(function (e) {
            (a.push(function () {
              var a = s,
                l = e._cfg.dbschema;
              (ar(o, a, r), ar(o, l, r), (s = o._dbSchema = l));
              var c = Yn(a, l);
              (c.add.forEach(function (e) {
                Jn(r, e[0], e[1].primKey, e[1].indexes);
              }),
                c.change.forEach(function (e) {
                  if (e.recreate)
                    throw new ae.Upgrade(
                      "Not yet support for changing primary key",
                    );
                  var t = r.objectStore(e.name);
                  (e.add.forEach(function (e) {
                    return tr(t, e);
                  }),
                    e.change.forEach(function (e) {
                      (t.deleteIndex(e.name), tr(t, e));
                    }),
                    e.del.forEach(function (e) {
                      return t.deleteIndex(e);
                    }));
                }));
              var d = e._cfg.contentUpgrade;
              if (d && e._cfg.version > t) {
                (Gn(o, r), (n._memoizedTables = {}), (u = !0));
                var m = T(l);
                (c.del.forEach(function (e) {
                  m[e] = a[e];
                }),
                  jn(o, [o.Transaction.prototype]),
                  zn(o, [o.Transaction.prototype], i(m), m),
                  (n.schema = m));
                var p = U(d);
                p && ft();
                var _,
                  f = Ve.follow(function () {
                    if (((_ = d(n)), _ && p)) {
                      var e = gt.bind(null, null);
                      _.then(e, e);
                    }
                  });
                return _ && typeof _.then == "function"
                  ? Ve.resolve(_)
                  : f.then(function () {
                      return _;
                    });
              }
            }),
              a.push(function (t) {
                if (!u || !Ft) {
                  var r = e._cfg.dbschema;
                  er(r, t);
                }
                (jn(o, [o.Transaction.prototype]),
                  zn(o, [o.Transaction.prototype], o._storeNames, o._dbSchema),
                  (n.schema = o._dbSchema));
              }));
          });
          function d() {
            return a.length
              ? Ve.resolve(a.shift()(n.idbtrans)).then(d)
              : Ve.resolve();
          }
          return d().then(function () {
            Zn(s, r);
          });
        }
        function Yn(e, t) {
          var n = { del: [], add: [], change: [] },
            r;
          for (r in e) t[r] || n.del.push(r);
          for (r in t) {
            var o = e[r],
              a = t[r];
            if (!o) n.add.push([r, a]);
            else {
              var i = {
                name: r,
                def: a,
                recreate: !1,
                del: [],
                add: [],
                change: [],
              };
              if (
                "" + (o.primKey.keyPath || "") !=
                  "" + (a.primKey.keyPath || "") ||
                (o.primKey.auto !== a.primKey.auto && !At)
              )
                ((i.recreate = !0), n.change.push(i));
              else {
                var l = o.idxByName,
                  s = a.idxByName,
                  u = void 0;
                for (u in l) s[u] || i.del.push(u);
                for (u in s) {
                  var c = l[u],
                    d = s[u];
                  c ? c.src !== d.src && i.change.push(d) : i.add.push(d);
                }
                (i.del.length > 0 || i.add.length > 0 || i.change.length > 0) &&
                  n.change.push(i);
              }
            }
          }
          return n;
        }
        function Jn(e, t, n, r) {
          var o = e.db.createObjectStore(
            t,
            n.keyPath
              ? { keyPath: n.keyPath, autoIncrement: n.auto }
              : { autoIncrement: n.auto },
          );
          return (
            r.forEach(function (e) {
              return tr(o, e);
            }),
            o
          );
        }
        function Zn(e, t) {
          i(e).forEach(function (n) {
            t.db.objectStoreNames.contains(n) ||
              Jn(t, n, e[n].primKey, e[n].indexes);
          });
        }
        function er(e, t) {
          [].slice.call(t.db.objectStoreNames).forEach(function (n) {
            return e[n] == null && t.db.deleteObjectStore(n);
          });
        }
        function tr(e, t) {
          e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi,
          });
        }
        function nr(e, t, n) {
          var r = {},
            o = C(t.objectStoreNames, 0);
          return (
            o.forEach(function (e) {
              for (
                var t = n.objectStore(e),
                  o = t.keyPath,
                  a = Pn(
                    Nn(o),
                    o || "",
                    !1,
                    !1,
                    !!t.autoIncrement,
                    o && typeof o != "string",
                    !0,
                  ),
                  i = [],
                  l = 0;
                l < t.indexNames.length;
                ++l
              ) {
                var s = t.index(t.indexNames[l]);
                o = s.keyPath;
                var u = Pn(
                  s.name,
                  o,
                  !!s.unique,
                  !!s.multiEntry,
                  !1,
                  o && typeof o != "string",
                  !1,
                );
                i.push(u);
              }
              r[e] = Mn(e, a, i);
            }),
            r
          );
        }
        function rr(e, t, n) {
          var r = e._novip;
          r.verno = t.version / 10;
          var o = (r._dbSchema = nr(r, t, n));
          ((r._storeNames = C(t.objectStoreNames, 0)),
            zn(r, [r._allTables], i(o), o));
        }
        function or(e, t) {
          var n = nr(e, e.idbdb, t),
            r = Yn(n, e._dbSchema);
          return !(
            r.add.length ||
            r.change.some(function (e) {
              return e.add.length || e.change.length;
            })
          );
        }
        function ar(e, t, n) {
          for (
            var r = e._novip, o = n.db.objectStoreNames, i = 0;
            i < o.length;
            ++i
          ) {
            var l = o[i],
              s = n.objectStore(l);
            r._hasGetAll = "getAll" in s;
            for (var u = 0; u < s.indexNames.length; ++u) {
              var c = s.indexNames[u],
                d = s.index(c).keyPath,
                m = typeof d == "string" ? d : "[" + C(d).join("+") + "]";
              if (t[l]) {
                var p = t[l].idxByName[m];
                p &&
                  ((p.name = c),
                  delete t[l].idxByName[m],
                  (t[l].idxByName[c] = p));
              }
            }
          }
          typeof navigator != "undefined" &&
            /Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            a.WorkerGlobalScope &&
            a instanceof a.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
            (r._hasGetAll = !1);
        }
        function ir(e) {
          return e.split(",").map(function (e, t) {
            e = e.trim();
            var n = e.replace(/([&*]|\+\+)/g, ""),
              r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
            return Pn(
              n,
              r || null,
              /\&/.test(e),
              /\*/.test(e),
              /\+\+/.test(e),
              l(r),
              t === 0,
            );
          });
        }
        var lr = (function () {
          function e() {}
          return (
            (e.prototype._parseStoresSpec = function (e, t) {
              i(e).forEach(function (n) {
                if (e[n] !== null) {
                  var r = ir(e[n]),
                    o = r.shift();
                  if (o.multi)
                    throw new ae.Schema("Primary key cannot be multi-valued");
                  (r.forEach(function (e) {
                    if (e.auto)
                      throw new ae.Schema(
                        "Only primary key can be marked as autoIncrement (++)",
                      );
                    if (!e.keyPath)
                      throw new ae.Schema(
                        "Index must have a name and cannot be an empty string",
                      );
                  }),
                    (t[n] = Mn(n, o, r)));
                }
              });
            }),
            (e.prototype.stores = function (e) {
              var t = this.db;
              this._cfg.storesSource = this._cfg.storesSource
                ? s(this._cfg.storesSource, e)
                : e;
              var n = t._versions,
                r = {},
                o = {};
              return (
                n.forEach(function (e) {
                  (s(r, e._cfg.storesSource),
                    (o = e._cfg.dbschema = {}),
                    e._parseStoresSpec(r, o));
                }),
                (t._dbSchema = o),
                jn(t, [t._allTables, t, t.Transaction.prototype]),
                zn(
                  t,
                  [t._allTables, t, t.Transaction.prototype, this._cfg.tables],
                  i(o),
                  o,
                ),
                (t._storeNames = i(o)),
                this
              );
            }),
            (e.prototype.upgrade = function (e) {
              return (
                (this._cfg.contentUpgrade = he(
                  this._cfg.contentUpgrade || ue,
                  e,
                )),
                this
              );
            }),
            e
          );
        })();
        function sr(e) {
          return Kt(lr.prototype, function (n) {
            ((this.db = e),
              (this._cfg = {
                version: n,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null,
              }));
          });
        }
        function ur(e, t) {
          var n = e._dbNamesDB;
          return (
            n ||
              ((n = e._dbNamesDB =
                new Wr(Wt, { addons: [], indexedDB: e, IDBKeyRange: t })),
              n.version(1).stores({ dbnames: "name" })),
            n.table("dbnames")
          );
        }
        function cr(e) {
          return e && typeof e.databases == "function";
        }
        function dr(t) {
          var r = t.indexedDB,
            o = t.IDBKeyRange;
          return cr(r)
            ? (e || (e = n("Promise")))
                .resolve(r.databases())
                .then(function (e) {
                  return e
                    .map(function (e) {
                      return e.name;
                    })
                    .filter(function (e) {
                      return e !== Wt;
                    });
                })
            : ur(r, o).toCollection().primaryKeys();
        }
        function mr(e, t) {
          var n = e.indexedDB,
            r = e.IDBKeyRange;
          !cr(n) && t !== Wt && ur(n, r).put({ name: t }).catch(ue);
        }
        function pr(e, t) {
          var n = e.indexedDB,
            r = e.IDBKeyRange;
          !cr(n) && t !== Wt && ur(n, r).delete(t).catch(ue);
        }
        function _r(e) {
          return _t(function () {
            return ((Be.letThrough = !0), e());
          });
        }
        function fr() {
          var t =
            !navigator.userAgentData &&
            /Safari\//.test(navigator.userAgent) &&
            !/Chrom(e|ium)\//.test(navigator.userAgent);
          if (!t || !indexedDB.databases)
            return (e || (e = n("Promise"))).resolve();
          var r;
          return new (e || (e = n("Promise")))(function (e) {
            var t = function () {
              return indexedDB.databases().finally(e);
            };
            ((r = setInterval(t, 100)), t());
          }).finally(function () {
            return clearInterval(r);
          });
        }
        function gr(e) {
          var t = e._state,
            n = e._deps.indexedDB;
          if (t.isBeingOpened || e.idbdb)
            return t.dbReadyPromise.then(function () {
              return t.dbOpenError ? Tt(t.dbOpenError) : e;
            });
          (V && (t.openCanceller._stackHolder = j()),
            (t.isBeingOpened = !0),
            (t.dbOpenError = null),
            (t.openComplete = !1));
          var r = t.openCanceller;
          function o() {
            if (t.openCanceller !== r)
              throw new ae.DatabaseClosed("db.open() was cancelled");
          }
          var a = t.dbReadyResolve,
            i = null,
            l = !1;
          return Ve.race([
            r,
            (typeof navigator == "undefined" ? Ve.resolve() : fr()).then(
              function () {
                return new Ve(function (r, a) {
                  if ((o(), !n)) throw new ae.MissingAPI();
                  var s = e.name,
                    u = t.autoSchema
                      ? n.open(s)
                      : n.open(s, Math.round(e.verno * 10));
                  if (!u) throw new ae.MissingAPI();
                  ((u.onerror = En(a)),
                    (u.onblocked = lt(e._fireOnBlocked)),
                    (u.onupgradeneeded = lt(function (r) {
                      if (
                        ((i = u.transaction),
                        t.autoSchema && !e._options.allowEmptyDB)
                      ) {
                        ((u.onerror = kn), i.abort(), u.result.close());
                        var o = n.deleteDatabase(s);
                        o.onsuccess = o.onerror = lt(function () {
                          a(
                            new ae.NoSuchDatabase(
                              "Database " + s + " doesnt exist",
                            ),
                          );
                        });
                      } else {
                        i.onerror = En(a);
                        var c =
                          r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion;
                        ((l = c < 1),
                          (e._novip.idbdb = u.result),
                          Qn(e, c / 10, i, a));
                      }
                    }, a)),
                    (u.onsuccess = lt(function () {
                      i = null;
                      var n = (e._novip.idbdb = u.result),
                        o = C(n.objectStoreNames);
                      if (o.length > 0)
                        try {
                          var a = n.transaction(wn(o), "readonly");
                          (t.autoSchema
                            ? rr(e, n, a)
                            : (ar(e, e._dbSchema, a), or(e, a)),
                            Gn(e, a));
                        } catch (e) {}
                      (wt.push(e),
                        (n.onversionchange = lt(function (n) {
                          ((t.vcFired = !0), e.on("versionchange").fire(n));
                        })),
                        (n.onclose = lt(function (t) {
                          e.on("close").fire(t);
                        })),
                        l && mr(e._deps, s),
                        r());
                    }, a)));
                });
              },
            ),
          ])
            .then(function () {
              return (
                o(),
                (t.onReadyBeingFired = []),
                Ve.resolve(
                  _r(function () {
                    return e.on.ready.fire(e.vip);
                  }),
                ).then(function n() {
                  if (t.onReadyBeingFired.length > 0) {
                    var r = t.onReadyBeingFired.reduce(he, ue);
                    return (
                      (t.onReadyBeingFired = []),
                      Ve.resolve(
                        _r(function () {
                          return r(e.vip);
                        }),
                      ).then(n)
                    );
                  }
                })
              );
            })
            .finally(function () {
              ((t.onReadyBeingFired = null), (t.isBeingOpened = !1));
            })
            .then(function () {
              return e;
            })
            .catch(function (n) {
              t.dbOpenError = n;
              try {
                i && i.abort();
              } catch (e) {}
              return (r === t.openCanceller && e._close(), Tt(n));
            })
            .finally(function () {
              ((t.openComplete = !0), a());
            });
        }
        function hr(t) {
          var r = function (n) {
              return t.next(n);
            },
            o = function (n) {
              return t.throw(n);
            },
            a = s(r),
            i = s(o);
          function s(t) {
            return function (r) {
              var o = t(r),
                s = o.value;
              return o.done
                ? s
                : !s || typeof s.then != "function"
                  ? l(s)
                    ? (e || (e = n("Promise"))).all(s).then(a, i)
                    : a(s)
                  : s.then(a, i);
            };
          }
          return s(r)();
        }
        function yr(e, t, n) {
          var r = arguments.length;
          if (r < 2) throw new ae.InvalidArgument("Too few arguments");
          for (var o = new Array(r - 1); --r; ) o[r - 1] = arguments[r];
          n = o.pop();
          var a = x(o);
          return [e, a, n];
        }
        function Cr(e, t, n, r, o) {
          return Ve.resolve().then(function () {
            var a = Be.transless || Be,
              i = e._createTransaction(t, n, e._dbSchema, r),
              l = { trans: i, transless: a };
            if (r) i.idbtrans = r.idbtrans;
            else
              try {
                (i.create(), (e._state.PR1398_maxLoop = 3));
              } catch (r) {
                return r.name === re.InvalidState &&
                  e.isOpen() &&
                  --e._state.PR1398_maxLoop > 0
                  ? (e._close(),
                    e.open().then(function () {
                      return Cr(e, t, n, null, o);
                    }))
                  : Tt(r);
              }
            var s = U(o);
            s && ft();
            var u,
              c = Ve.follow(function () {
                if (((u = o.call(i, i)), u))
                  if (s) {
                    var e = gt.bind(null, null);
                    u.then(e, e);
                  } else
                    typeof u.next == "function" &&
                      typeof u.throw == "function" &&
                      (u = hr(u));
              }, l);
            return (
              u && typeof u.then == "function"
                ? Ve.resolve(u).then(function (e) {
                    return i.active
                      ? e
                      : Tt(
                          new ae.PrematureCommit(
                            "Transaction committed too early. See http://bit.ly/2kdckMn",
                          ),
                        );
                  })
                : c.then(function () {
                    return u;
                  })
            )
              .then(function (e) {
                return (
                  r && i._resolve(),
                  i._completion.then(function () {
                    return e;
                  })
                );
              })
              .catch(function (e) {
                return (i._reject(e), Tt(e));
              });
          });
        }
        function br(e, t, n) {
          for (var r = l(e) ? e.slice() : [e], o = 0; o < n; ++o) r.push(t);
          return r;
        }
        function vr(e) {
          return r(r({}, e), {
            table: function (n) {
              var t = e.table(n),
                o = t.schema,
                a = {},
                i = [];
              function l(e, t, n) {
                var o = qn(e),
                  s = (a[o] = a[o] || []),
                  u = e == null ? 0 : typeof e == "string" ? 1 : e.length,
                  c = t > 0,
                  d = r(r({}, n), {
                    isVirtual: c,
                    keyTail: t,
                    keyLength: u,
                    extractKey: Fn(e),
                    unique: !c && n.unique,
                  });
                if ((s.push(d), d.isPrimaryKey || i.push(d), u > 1)) {
                  var m = u === 2 ? e[0] : e.slice(0, u - 1);
                  l(m, t + 1, n);
                }
                return (
                  s.sort(function (e, t) {
                    return e.keyTail - t.keyTail;
                  }),
                  d
                );
              }
              var s = l(o.primaryKey.keyPath, 0, o.primaryKey);
              a[":id"] = [s];
              for (var u = 0, c = o.indexes; u < c.length; u++) {
                var d = c[u];
                l(d.keyPath, 0, d);
              }
              function m(e) {
                var t = a[qn(e)];
                return t && t[0];
              }
              function p(t, n) {
                return {
                  type: t.type === 1 ? 2 : t.type,
                  lower: br(t.lower, t.lowerOpen ? e.MAX_KEY : e.MIN_KEY, n),
                  lowerOpen: !0,
                  upper: br(t.upper, t.upperOpen ? e.MIN_KEY : e.MAX_KEY, n),
                  upperOpen: !0,
                };
              }
              function _(e) {
                var t = e.query.index;
                return t.isVirtual
                  ? r(r({}, e), {
                      query: { index: t, range: p(e.query.range, t.keyTail) },
                    })
                  : e;
              }
              var f = r(r({}, t), {
                schema: r(r({}, o), {
                  primaryKey: s,
                  indexes: i,
                  getIndexByKeyPath: m,
                }),
                count: function (n) {
                  return t.count(_(n));
                },
                query: function (n) {
                  return t.query(_(n));
                },
                openCursor: function (r) {
                  var n = r.query.index,
                    o = n.keyTail,
                    a = n.isVirtual,
                    i = n.keyLength;
                  if (!a) return t.openCursor(r);
                  function l(t) {
                    function n(n) {
                      n != null
                        ? t.continue(
                            br(n, r.reverse ? e.MAX_KEY : e.MIN_KEY, o),
                          )
                        : r.unique
                          ? t.continue(
                              t.key
                                .slice(0, i)
                                .concat(r.reverse ? e.MIN_KEY : e.MAX_KEY, o),
                            )
                          : t.continue();
                    }
                    var a = Object.create(t, {
                      continue: { value: n },
                      continuePrimaryKey: {
                        value: function (r, a) {
                          t.continuePrimaryKey(br(r, e.MAX_KEY, o), a);
                        },
                      },
                      primaryKey: {
                        get: function () {
                          return t.primaryKey;
                        },
                      },
                      key: {
                        get: function () {
                          var e = t.key;
                          return i === 1 ? e[0] : e.slice(0, i);
                        },
                      },
                      value: {
                        get: function () {
                          return t.value;
                        },
                      },
                    });
                    return a;
                  }
                  return t.openCursor(_(r)).then(function (e) {
                    return e && l(e);
                  });
                },
              });
              return f;
            },
          });
        }
        var Sr = {
          stack: "dbcore",
          name: "VirtualIndexMiddleware",
          level: 1,
          create: vr,
        };
        function Rr(e, t, n, r) {
          return (
            (n = n || {}),
            (r = r || ""),
            i(e).forEach(function (o) {
              if (!d(t, o)) n[r + o] = void 0;
              else {
                var a = e[o],
                  i = t[o];
                if (typeof a == "object" && typeof i == "object" && a && i) {
                  var l = F(a),
                    s = F(i);
                  l !== s
                    ? (n[r + o] = t[o])
                    : l === "Object"
                      ? Rr(a, i, n, r + o + ".")
                      : a !== i && (n[r + o] = t[o]);
                } else a !== i && (n[r + o] = t[o]);
              }
            }),
            i(t).forEach(function (o) {
              d(e, o) || (n[r + o] = t[o]);
            }),
            n
          );
        }
        function Lr(e, t) {
          return t.type === "delete"
            ? t.keys
            : t.keys || t.values.map(e.extractKey);
        }
        var Er = {
          stack: "dbcore",
          name: "HooksMiddleware",
          level: 2,
          create: function (a) {
            return r(r({}, a), {
              table: function (i) {
                var t = a.table(i),
                  l = t.schema.primaryKey,
                  s = r(r({}, t), {
                    mutate: function (s) {
                      var a = Be.trans,
                        u = a.table(i).hook,
                        c = u.deleting,
                        m = u.creating,
                        p = u.updating;
                      switch (s.type) {
                        case "add":
                          if (m.fire === ue) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return _(s);
                            },
                            !0,
                          );
                        case "put":
                          if (m.fire === ue && p.fire === ue) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return _(s);
                            },
                            !0,
                          );
                        case "delete":
                          if (c.fire === ue) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return _(s);
                            },
                            !0,
                          );
                        case "deleteRange":
                          if (c.fire === ue) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return f(s);
                            },
                            !0,
                          );
                      }
                      return t.mutate(s);
                      function _(a) {
                        var i = Be.trans,
                          s = a.keys || Lr(l, a);
                        if (!s) throw new Error("Keys missing");
                        return (
                          (a =
                            a.type === "add" || a.type === "put"
                              ? r(r({}, a), { keys: s })
                              : r({}, a)),
                          a.type !== "delete" &&
                            (a.values = o([], a.values, !0)),
                          a.keys && (a.keys = o([], a.keys, !0)),
                          kr(t, a, s).then(function (r) {
                            var o = s.map(function (e, t) {
                              var n = r[t],
                                o = { onerror: null, onsuccess: null };
                              if (a.type === "delete") c.fire.call(o, e, n, i);
                              else if (a.type === "add" || n === void 0) {
                                var s = m.fire.call(o, e, a.values[t], i);
                                e == null &&
                                  s != null &&
                                  ((e = s),
                                  (a.keys[t] = e),
                                  l.outbound || k(a.values[t], l.keyPath, e));
                              } else {
                                var u = Rr(n, a.values[t]),
                                  _ = p.fire.call(o, u, e, n, i);
                                if (_) {
                                  var f = a.values[t];
                                  Object.keys(_).forEach(function (e) {
                                    d(f, e) ? (f[e] = _[e]) : k(f, e, _[e]);
                                  });
                                }
                              }
                              return o;
                            });
                            return t
                              .mutate(a)
                              .then(function (e) {
                                for (
                                  var t = e.failures,
                                    n = e.results,
                                    i = e.numFailures,
                                    l = e.lastResult,
                                    u = 0;
                                  u < s.length;
                                  ++u
                                ) {
                                  var c = n ? n[u] : s[u],
                                    d = o[u];
                                  c == null
                                    ? d.onerror && d.onerror(t[u])
                                    : d.onsuccess &&
                                      d.onsuccess(
                                        a.type === "put" && r[u]
                                          ? a.values[u]
                                          : c,
                                      );
                                }
                                return {
                                  failures: t,
                                  results: n,
                                  numFailures: i,
                                  lastResult: l,
                                };
                              })
                              .catch(function (t) {
                                return (
                                  o.forEach(function (e) {
                                    return e.onerror && e.onerror(t);
                                  }),
                                  (e || (e = n("Promise"))).reject(t)
                                );
                              });
                          })
                        );
                      }
                      function f(e) {
                        return g(e.trans, e.range, 1e4);
                      }
                      function g(o, a, i) {
                        return t
                          .query({
                            trans: o,
                            values: !1,
                            query: { index: l, range: a },
                            limit: i,
                          })
                          .then(function (t) {
                            var l = t.result;
                            return _({
                              type: "delete",
                              keys: l,
                              trans: o,
                            }).then(function (t) {
                              return t.numFailures > 0
                                ? (e || (e = n("Promise"))).reject(
                                    t.failures[0],
                                  )
                                : l.length < i
                                  ? {
                                      failures: [],
                                      numFailures: 0,
                                      lastResult: void 0,
                                    }
                                  : g(
                                      o,
                                      r(r({}, a), {
                                        lower: l[l.length - 1],
                                        lowerOpen: !0,
                                      }),
                                      i,
                                    );
                            });
                          });
                      }
                    },
                  });
                return s;
              },
            });
          },
        };
        function kr(t, r, o) {
          return r.type === "add"
            ? (e || (e = n("Promise"))).resolve([])
            : t.getMany({ trans: r.trans, keys: o, cache: "immutable" });
        }
        function Ir(e, t, n) {
          try {
            if (!t || t.keys.length < e.length) return null;
            for (
              var r = [], o = 0, a = 0;
              o < t.keys.length && a < e.length;
              ++o
            )
              on(t.keys[o], e[a]) === 0 &&
                (r.push(n ? M(t.values[o]) : t.values[o]), ++a);
            return r.length === e.length ? r : null;
          } catch (e) {
            return null;
          }
        }
        var Tr = {
            stack: "dbcore",
            level: -1,
            create: function (t) {
              return {
                table: function (n) {
                  var e = t.table(n);
                  return r(r({}, e), {
                    getMany: function (n) {
                      if (!n.cache) return e.getMany(n);
                      var t = Ir(n.keys, n.trans._cache, n.cache === "clone");
                      return t
                        ? Ve.resolve(t)
                        : e.getMany(n).then(function (e) {
                            return (
                              (n.trans._cache = {
                                keys: n.keys,
                                values: n.cache === "clone" ? M(e) : e,
                              }),
                              e
                            );
                          });
                    },
                    mutate: function (n) {
                      return (
                        n.type !== "add" && (n.trans._cache = null),
                        e.mutate(n)
                      );
                    },
                  });
                },
              };
            },
          },
          Dr;
        function xr(e) {
          return !("from" in e);
        }
        var $r = function (t, n) {
          if (this)
            s(
              this,
              arguments.length
                ? { d: 1, from: t, to: arguments.length > 1 ? n : t }
                : { d: 0 },
            );
          else {
            var e = new $r();
            return (t && "d" in t && s(e, t), e);
          }
        };
        m(
          $r.prototype,
          ((Dr = {
            add: function (t) {
              return (Nr(this, t), this);
            },
            addKey: function (t) {
              return (Pr(this, t, t), this);
            },
            addKeys: function (t) {
              var e = this;
              return (
                t.forEach(function (t) {
                  return Pr(e, t, t);
                }),
                this
              );
            },
          }),
          (Dr[O] = function () {
            return wr(this);
          }),
          Dr),
        );
        function Pr(e, t, n) {
          var r = on(t, n);
          if (!isNaN(r)) {
            if (r > 0) throw RangeError();
            if (xr(e)) return s(e, { from: t, to: n, d: 1 });
            var o = e.l,
              a = e.r;
            if (on(n, e.from) < 0)
              return (
                o
                  ? Pr(o, t, n)
                  : (e.l = { from: t, to: n, d: 1, l: null, r: null }),
                Ar(e)
              );
            if (on(t, e.to) > 0)
              return (
                a
                  ? Pr(a, t, n)
                  : (e.r = { from: t, to: n, d: 1, l: null, r: null }),
                Ar(e)
              );
            (on(t, e.from) < 0 &&
              ((e.from = t), (e.l = null), (e.d = a ? a.d + 1 : 1)),
              on(n, e.to) > 0 &&
                ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1)));
            var i = !e.r;
            (o && !e.l && Nr(e, o), a && i && Nr(e, a));
          }
        }
        function Nr(e, t) {
          function n(e, t) {
            var r = t.from,
              o = t.to,
              a = t.l,
              i = t.r;
            (Pr(e, r, o), a && n(e, a), i && n(e, i));
          }
          xr(t) || n(e, t);
        }
        function Mr(e, t) {
          var n = wr(t),
            r = n.next();
          if (r.done) return !1;
          for (
            var o = r.value, a = wr(e), i = a.next(o.from), l = i.value;
            !r.done && !i.done;
          ) {
            if (on(l.from, o.to) <= 0 && on(l.to, o.from) >= 0) return !0;
            on(o.from, l.from) < 0
              ? (o = (r = n.next(l.from)).value)
              : (l = (i = a.next(o.from)).value);
          }
          return !1;
        }
        function wr(e) {
          var t = xr(e) ? null : { s: 0, n: e };
          return {
            next: function (n) {
              for (var e = arguments.length > 0; t; )
                switch (t.s) {
                  case 0:
                    if (((t.s = 1), e))
                      for (; t.n.l && on(n, t.n.from) < 0; )
                        t = { up: t, n: t.n.l, s: 1 };
                    else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
                  case 1:
                    if (((t.s = 2), !e || on(n, t.n.to) <= 0))
                      return { value: t.n, done: !1 };
                  case 2:
                    if (t.n.r) {
                      ((t.s = 3), (t = { up: t, n: t.n.r, s: 0 }));
                      continue;
                    }
                  case 3:
                    t = t.up;
                }
              return { done: !0 };
            },
          };
        }
        function Ar(e) {
          var t,
            n,
            o =
              (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) -
              (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0),
            a = o > 1 ? "r" : o < -1 ? "l" : "";
          if (a) {
            var i = a === "r" ? "l" : "r",
              l = r({}, e),
              s = e[a];
            ((e.from = s.from),
              (e.to = s.to),
              (e[a] = s[a]),
              (l[a] = s[i]),
              (e[i] = l),
              (l.d = Fr(l)));
          }
          e.d = Fr(e);
        }
        function Fr(e) {
          var t = e.r,
            n = e.l;
          return (t ? (n ? Math.max(t.d, n.d) : t.d) : n ? n.d : 0) + 1;
        }
        var Or = {
          stack: "dbcore",
          level: 0,
          create: function (t) {
            var e = t.schema.name,
              n = new $r(t.MIN_KEY, t.MAX_KEY);
            return r(r({}, t), {
              table: function (a) {
                var o = t.table(a),
                  s = o.schema,
                  u = s.primaryKey,
                  c = u.extractKey,
                  d = u.outbound,
                  m = r(r({}, o), {
                    mutate: function (r) {
                      var t = r.trans,
                        i = t.mutatedParts || (t.mutatedParts = {}),
                        u = function (n) {
                          var t = "idb://" + e + "/" + a + "/" + n;
                          return i[t] || (i[t] = new $r());
                        },
                        c = u(""),
                        d = u(":dels"),
                        m = r.type,
                        p =
                          r.type === "deleteRange"
                            ? [r.range]
                            : r.type === "delete"
                              ? [r.keys]
                              : r.values.length < 50
                                ? [[], r.values]
                                : [],
                        _ = p[0],
                        f = p[1],
                        g = r.trans._cache;
                      return o.mutate(r).then(function (e) {
                        if (l(_)) {
                          (m !== "delete" && (_ = e.results), c.addKeys(_));
                          var t = Ir(_, g);
                          (!t && m !== "add" && d.addKeys(_),
                            (t || f) && Br(u, s, t, f));
                        } else if (_) {
                          var r = { from: _.lower, to: _.upper };
                          (d.add(r), c.add(r));
                        } else
                          (c.add(n),
                            d.add(n),
                            s.indexes.forEach(function (e) {
                              return u(e.name).add(n);
                            }));
                        return e;
                      });
                    },
                  }),
                  p = function (n) {
                    var e,
                      r,
                      o = n.query,
                      a = o.index,
                      i = o.range;
                    return [
                      a,
                      new $r(
                        (e = i.lower) !== null && e !== void 0 ? e : t.MIN_KEY,
                        (r = i.upper) !== null && r !== void 0 ? r : t.MAX_KEY,
                      ),
                    ];
                  },
                  _ = {
                    get: function (t) {
                      return [u, new $r(t.key)];
                    },
                    getMany: function (t) {
                      return [u, new $r().addKeys(t.keys)];
                    },
                    count: p,
                    query: p,
                    openCursor: p,
                  };
                return (
                  i(_).forEach(function (t) {
                    m[t] = function (i) {
                      var l = Be.subscr;
                      if (l) {
                        var s = function (n) {
                            var t = "idb://" + e + "/" + a + "/" + n;
                            return l[t] || (l[t] = new $r());
                          },
                          u = s(""),
                          m = s(":dels"),
                          p = _[t](i),
                          f = p[0],
                          g = p[1];
                        if ((s(f.name || "").add(g), !f.isPrimaryKey))
                          if (t === "count") m.add(n);
                          else {
                            var h =
                              t === "query" &&
                              d &&
                              i.values &&
                              o.query(r(r({}, i), { values: !1 }));
                            return o[t]
                              .apply(this, arguments)
                              .then(function (e) {
                                if (t === "query") {
                                  if (d && i.values)
                                    return h.then(function (t) {
                                      var n = t.result;
                                      return (u.addKeys(n), e);
                                    });
                                  var n = i.values ? e.result.map(c) : e.result;
                                  i.values ? u.addKeys(n) : m.addKeys(n);
                                } else if (t === "openCursor") {
                                  var r = e,
                                    o = i.values;
                                  return (
                                    r &&
                                    Object.create(r, {
                                      key: {
                                        get: function () {
                                          return (
                                            m.addKey(r.primaryKey),
                                            r.key
                                          );
                                        },
                                      },
                                      primaryKey: {
                                        get: function () {
                                          var e = r.primaryKey;
                                          return (m.addKey(e), e);
                                        },
                                      },
                                      value: {
                                        get: function () {
                                          return (
                                            o && u.addKey(r.primaryKey),
                                            r.value
                                          );
                                        },
                                      },
                                    })
                                  );
                                }
                                return e;
                              });
                          }
                      }
                      return o[t].apply(this, arguments);
                    };
                  }),
                  m
                );
              },
            });
          },
        };
        function Br(e, t, n, r) {
          function o(t) {
            var o = e(t.name || "");
            function a(e) {
              return e != null ? t.extractKey(e) : null;
            }
            var i = function (n) {
              return t.multiEntry && l(n)
                ? n.forEach(function (e) {
                    return o.addKey(e);
                  })
                : o.addKey(n);
            };
            (n || r).forEach(function (e, t) {
              var o = n && a(n[t]),
                l = r && a(r[t]);
              on(o, l) !== 0 && (o != null && i(o), l != null && i(l));
            });
          }
          t.indexes.forEach(o);
        }
        var Wr = (function () {
            function e(t, n) {
              var o = this;
              ((this._middlewares = {}), (this.verno = 0));
              var a = e.dependencies;
              ((this._options = n =
                r(
                  {
                    addons: e.addons,
                    autoOpen: !0,
                    indexedDB: a.indexedDB,
                    IDBKeyRange: a.IDBKeyRange,
                  },
                  n,
                )),
                (this._deps = {
                  indexedDB: n.indexedDB,
                  IDBKeyRange: n.IDBKeyRange,
                }));
              var i = n.addons;
              ((this._dbSchema = {}),
                (this._versions = []),
                (this._storeNames = []),
                (this._allTables = {}),
                (this.idbdb = null),
                (this._novip = this));
              var l = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: ue,
                dbReadyPromise: null,
                cancelOpen: ue,
                openCanceller: null,
                autoSchema: !0,
                PR1398_maxLoop: 3,
              };
              ((l.dbReadyPromise = new Ve(function (e) {
                l.dbReadyResolve = e;
              })),
                (l.openCanceller = new Ve(function (e, t) {
                  l.cancelOpen = t;
                })),
                (this._state = l),
                (this.name = t),
                (this.on = jt(
                  this,
                  "populate",
                  "blocked",
                  "versionchange",
                  "close",
                  { ready: [he, ue] },
                )),
                (this.on.ready.subscribe = b(
                  this.on.ready.subscribe,
                  function (t) {
                    return function (n, r) {
                      e.vip(function () {
                        var e = o._state;
                        if (e.openComplete)
                          (e.dbOpenError || Ve.resolve().then(n), r && t(n));
                        else if (e.onReadyBeingFired)
                          (e.onReadyBeingFired.push(n), r && t(n));
                        else {
                          t(n);
                          var a = o;
                          r ||
                            t(function e() {
                              (a.on.ready.unsubscribe(n),
                                a.on.ready.unsubscribe(e));
                            });
                        }
                      });
                    };
                  },
                )),
                (this.Collection = mn(this)),
                (this.Table = Qt(this)),
                (this.Transaction = $n(this)),
                (this.Version = sr(this)),
                (this.WhereClause = Ln(this)),
                this.on("versionchange", function (e) {
                  (e.newVersion > 0, "" + o.name, o.close());
                }),
                this.on("blocked", function (e) {
                  !e.newVersion || e.newVersion < e.oldVersion
                    ? "" + o.name
                    : "" + o.name + e.oldVersion / 10;
                }),
                (this._maxKey = An(n.IDBKeyRange)),
                (this._createTransaction = function (e, t, n, r) {
                  return new o.Transaction(
                    e,
                    t,
                    n,
                    o._options.chromeTransactionDurability,
                    r,
                  );
                }),
                (this._fireOnBlocked = function (e) {
                  (o.on("blocked").fire(e),
                    wt
                      .filter(function (e) {
                        return (
                          e.name === o.name && e !== o && !e._state.vcFired
                        );
                      })
                      .map(function (t) {
                        return t.on("versionchange").fire(e);
                      }));
                }),
                this.use(Sr),
                this.use(Er),
                this.use(Or),
                this.use(Tr),
                (this.vip = Object.create(this, { _vip: { value: !0 } })),
                i.forEach(function (e) {
                  return e(o);
                }));
            }
            return (
              (e.prototype.version = function (e) {
                if (isNaN(e) || e < 0.1)
                  throw new ae.Type("Given version is not a positive number");
                if (
                  ((e = Math.round(e * 10) / 10),
                  this.idbdb || this._state.isBeingOpened)
                )
                  throw new ae.Schema(
                    "Cannot add version when database is open",
                  );
                this.verno = Math.max(this.verno, e);
                var t = this._versions,
                  n = t.filter(function (t) {
                    return t._cfg.version === e;
                  })[0];
                return (
                  n ||
                  ((n = new this.Version(e)),
                  t.push(n),
                  t.sort(Kn),
                  n.stores({}),
                  (this._state.autoSchema = !1),
                  n)
                );
              }),
              (e.prototype._whenReady = function (e) {
                var t = this;
                return this.idbdb &&
                  (this._state.openComplete || Be.letThrough || this._vip)
                  ? e()
                  : new Ve(function (e, n) {
                      if (t._state.openComplete)
                        return n(new ae.DatabaseClosed(t._state.dbOpenError));
                      if (!t._state.isBeingOpened) {
                        if (!t._options.autoOpen) {
                          n(new ae.DatabaseClosed());
                          return;
                        }
                        t.open().catch(ue);
                      }
                      t._state.dbReadyPromise.then(e, n);
                    }).then(e);
              }),
              (e.prototype.use = function (e) {
                var t = e.stack,
                  n = e.create,
                  r = e.level,
                  o = e.name;
                o && this.unuse({ stack: t, name: o });
                var a = this._middlewares[t] || (this._middlewares[t] = []);
                return (
                  a.push({
                    stack: t,
                    create: n,
                    level: r == null ? 10 : r,
                    name: o,
                  }),
                  a.sort(function (e, t) {
                    return e.level - t.level;
                  }),
                  this
                );
              }),
              (e.prototype.unuse = function (e) {
                var t = e.stack,
                  n = e.name,
                  r = e.create;
                return (
                  t &&
                    this._middlewares[t] &&
                    (this._middlewares[t] = this._middlewares[t].filter(
                      function (e) {
                        return r ? e.create !== r : n ? e.name !== n : !1;
                      },
                    )),
                  this
                );
              }),
              (e.prototype.open = function () {
                return gr(this);
              }),
              (e.prototype._close = function () {
                var e = this._state,
                  t = wt.indexOf(this);
                if ((t >= 0 && wt.splice(t, 1), this.idbdb)) {
                  try {
                    this.idbdb.close();
                  } catch (e) {}
                  this._novip.idbdb = null;
                }
                ((e.dbReadyPromise = new Ve(function (t) {
                  e.dbReadyResolve = t;
                })),
                  (e.openCanceller = new Ve(function (t, n) {
                    e.cancelOpen = n;
                  })));
              }),
              (e.prototype.close = function () {
                this._close();
                var e = this._state;
                ((this._options.autoOpen = !1),
                  (e.dbOpenError = new ae.DatabaseClosed()),
                  e.isBeingOpened && e.cancelOpen(e.dbOpenError));
              }),
              (e.prototype.delete = function () {
                var e = this,
                  t = arguments.length > 0,
                  n = this._state;
                return new Ve(function (r, o) {
                  var a = function () {
                    e.close();
                    var t = e._deps.indexedDB.deleteDatabase(e.name);
                    ((t.onsuccess = lt(function () {
                      (pr(e._deps, e.name), r());
                    })),
                      (t.onerror = En(o)),
                      (t.onblocked = e._fireOnBlocked));
                  };
                  if (t)
                    throw new ae.InvalidArgument(
                      "Arguments not allowed in db.delete()",
                    );
                  n.isBeingOpened ? n.dbReadyPromise.then(a) : a();
                });
              }),
              (e.prototype.backendDB = function () {
                return this.idbdb;
              }),
              (e.prototype.isOpen = function () {
                return this.idbdb !== null;
              }),
              (e.prototype.hasBeenClosed = function () {
                var e = this._state.dbOpenError;
                return e && e.name === "DatabaseClosed";
              }),
              (e.prototype.hasFailed = function () {
                return this._state.dbOpenError !== null;
              }),
              (e.prototype.dynamicallyOpened = function () {
                return this._state.autoSchema;
              }),
              Object.defineProperty(e.prototype, "tables", {
                get: function () {
                  var e = this;
                  return i(this._allTables).map(function (t) {
                    return e._allTables[t];
                  });
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.transaction = function () {
                var e = yr.apply(this, arguments);
                return this._transaction.apply(this, e);
              }),
              (e.prototype._transaction = function (e, t, n) {
                var r = this,
                  o = Be.trans;
                (!o || o.db !== this || e.indexOf("!") !== -1) && (o = null);
                var a = e.indexOf("?") !== -1;
                e = e.replace("!", "").replace("?", "");
                var i, l;
                try {
                  if (
                    ((l = t.map(function (e) {
                      var t = e instanceof r.Table ? e.name : e;
                      if (typeof t != "string")
                        throw new TypeError(
                          "Invalid table argument to Dexie.transaction(). Only Table or String are allowed",
                        );
                      return t;
                    })),
                    e == "r" || e === qt)
                  )
                    i = qt;
                  else if (e == "rw" || e == Ut) i = Ut;
                  else
                    throw new ae.InvalidArgument(
                      "Invalid transaction mode: " + e,
                    );
                  if (o) {
                    if (o.mode === qt && i === Ut)
                      if (a) o = null;
                      else
                        throw new ae.SubTransaction(
                          "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY",
                        );
                    (o &&
                      l.forEach(function (e) {
                        if (o && o.storeNames.indexOf(e) === -1)
                          if (a) o = null;
                          else
                            throw new ae.SubTransaction(
                              "Table " +
                                e +
                                " not included in parent transaction.",
                            );
                      }),
                      a && o && !o.active && (o = null));
                  }
                } catch (e) {
                  return o
                    ? o._promise(null, function (t, n) {
                        n(e);
                      })
                    : Tt(e);
                }
                var s = Cr.bind(null, this, i, l, o, n);
                return o
                  ? o._promise(i, s, "lock")
                  : Be.trans
                    ? St(Be.transless, function () {
                        return r._whenReady(s);
                      })
                    : this._whenReady(s);
              }),
              (e.prototype.table = function (e) {
                if (!d(this._allTables, e))
                  throw new ae.InvalidTable("Table " + e + " does not exist");
                return this._allTables[e];
              }),
              e
            );
          })(),
          qr =
            typeof Symbol != "undefined" &&
            "observable" in Symbol &&
            typeof Symbol == "function"
              ? Symbol.observable
              : "@@observable",
          Ur = (function () {
            function e(e) {
              this._subscribe = e;
            }
            return (
              (e.prototype.subscribe = function (e, t, n) {
                return this._subscribe(
                  !e || typeof e == "function"
                    ? { next: e, error: t, complete: n }
                    : e,
                );
              }),
              (e.prototype[qr] = function () {
                return this;
              }),
              e
            );
          })();
        function Vr(e, t) {
          return (
            i(t).forEach(function (n) {
              var r = e[n] || (e[n] = new $r());
              Nr(r, t[n]);
            }),
            e
          );
        }
        function Hr(t) {
          return new Ur(function (r) {
            var o = U(t);
            function a(e) {
              o && ft();
              var n = function () {
                  return _t(t, { subscr: e, trans: null });
                },
                r = Be.trans ? St(Be.transless, n) : n();
              return (o && r.then(gt, gt), r);
            }
            var l = !1,
              s = {},
              u = {},
              c = {
                get closed() {
                  return l;
                },
                unsubscribe: function () {
                  ((l = !0), Dn.storagemutated.unsubscribe(_));
                },
              };
            r.start && r.start(c);
            var d = !1,
              m = !1;
            function p() {
              return i(u).some(function (e) {
                return s[e] && Mr(s[e], u[e]);
              });
            }
            var _ = function (t) {
                (Vr(s, t), p() && f());
              },
              f = function () {
                if (!(d || l)) {
                  s = {};
                  var t = {},
                    o = a(t);
                  (m || (Dn(In, _), (m = !0)),
                    (d = !0),
                    (e || (e = n("Promise"))).resolve(o).then(
                      function (e) {
                        ((d = !1),
                          !l &&
                            (p()
                              ? f()
                              : ((s = {}), (u = t), r.next && r.next(e))));
                      },
                      function (e) {
                        ((d = !1), r.error && r.error(e), c.unsubscribe());
                      },
                    ));
                }
              };
            return (f(), c);
          });
        }
        var Gr;
        try {
          Gr = {
            indexedDB:
              a.indexedDB ||
              a.mozIndexedDB ||
              a.webkitIndexedDB ||
              a.msIndexedDB,
            IDBKeyRange: a.IDBKeyRange || a.webkitIDBKeyRange,
          };
        } catch (e) {
          Gr = { indexedDB: null, IDBKeyRange: null };
        }
        var zr = Wr;
        (m(
          zr,
          r(r({}, se), {
            delete: function (t) {
              var e = new zr(t, { addons: [] });
              return e.delete();
            },
            exists: function (t) {
              return new zr(t, { addons: [] })
                .open()
                .then(function (e) {
                  return (e.close(), !0);
                })
                .catch("NoSuchDatabaseError", function () {
                  return !1;
                });
            },
            getDatabaseNames: function (t) {
              try {
                return dr(zr.dependencies).then(t);
              } catch (e) {
                return Tt(new ae.MissingAPI());
              }
            },
            defineClass: function () {
              function e(e) {
                s(this, e);
              }
              return e;
            },
            ignoreTransaction: function (t) {
              return Be.trans ? St(Be.transless, t) : t();
            },
            vip: _r,
            async: function (t) {
              return function () {
                try {
                  var e = hr(t.apply(this, arguments));
                  return !e || typeof e.then != "function" ? Ve.resolve(e) : e;
                } catch (e) {
                  return Tt(e);
                }
              };
            },
            spawn: function (t, n, r) {
              try {
                var e = hr(t.apply(r, n || []));
                return !e || typeof e.then != "function" ? Ve.resolve(e) : e;
              } catch (e) {
                return Tt(e);
              }
            },
            currentTransaction: {
              get: function () {
                return Be.trans || null;
              },
            },
            waitFor: function (t, n) {
              var e = Ve.resolve(
                typeof t == "function" ? zr.ignoreTransaction(t) : t,
              ).timeout(n || 6e4);
              return Be.trans ? Be.trans.waitFor(e) : e;
            },
            Promise: Ve,
            debug: {
              get: function () {
                return V;
              },
              set: function (t) {
                H(
                  t,
                  t === "dexie"
                    ? function () {
                        return !0;
                      }
                    : Bt,
                );
              },
            },
            derive: f,
            extend: s,
            props: m,
            override: b,
            Events: jt,
            on: Dn,
            liveQuery: Hr,
            extendObservabilitySet: Vr,
            getByKeyPath: E,
            setByKeyPath: k,
            delByKeyPath: I,
            shallowClone: T,
            deepClone: M,
            getObjectDiff: Rr,
            cmp: on,
            asap: S,
            minKey: Pt,
            addons: [],
            connections: wt,
            errnames: re,
            dependencies: Gr,
            semVer: xt,
            version: xt
              .split(".")
              .map(function (e) {
                return parseInt(e);
              })
              .reduce(function (e, t, n) {
                return e + t / Math.pow(10, n * 2);
              }),
          }),
        ),
          (zr.maxKey = An(zr.dependencies.IDBKeyRange)),
          typeof dispatchEvent != "undefined" &&
            typeof addEventListener != "undefined" &&
            (Dn(In, function (e) {
              if (!Kr) {
                var t;
                (At
                  ? ((t = document.createEvent("CustomEvent")),
                    t.initCustomEvent(Tn, !0, !0, e))
                  : (t = new CustomEvent(Tn, { detail: e })),
                  (Kr = !0),
                  dispatchEvent(t),
                  (Kr = !1));
              }
            }),
            addEventListener(Tn, function (e) {
              var t = e.detail;
              Kr || jr(t);
            })));
        function jr(e) {
          var t = Kr;
          try {
            ((Kr = !0), Dn.storagemutated.fire(e));
          } finally {
            Kr = t;
          }
        }
        var Kr = !1;
        if (typeof BroadcastChannel != "undefined") {
          var Qr = new BroadcastChannel(Tn);
          (Dn(In, function (e) {
            Kr || Qr.postMessage(e);
          }),
            (Qr.onmessage = function (e) {
              e.data && jr(e.data);
            }));
        } else if (
          typeof self != "undefined" &&
          typeof navigator != "undefined"
        ) {
          (Dn(In, function (e) {
            try {
              Kr ||
                (typeof localStorage != "undefined" &&
                  localStorage.setItem(
                    Tn,
                    JSON.stringify({ trig: Math.random(), changedParts: e }),
                  ),
                typeof self.clients == "object" &&
                  o(
                    [],
                    self.clients.matchAll({ includeUncontrolled: !0 }),
                    !0,
                  ).forEach(function (t) {
                    return t.postMessage({ type: Tn, changedParts: e });
                  }));
            } catch (e) {}
          }),
            typeof addEventListener != "undefined" &&
              addEventListener("storage", function (e) {
                if (e.key === Tn) {
                  var t = JSON.parse(e.newValue);
                  t && jr(t.changedParts);
                }
              }));
          var Xr = self.document && navigator.serviceWorker;
          Xr && Xr.addEventListener("message", Yr);
        }
        function Yr(e) {
          var t = e.data;
          t && t.type === Tn && jr(t.changedParts);
        }
        ((Ve.rejectionMapper = le), H(V, Bt));
        var Jr = Object.freeze({
          __proto__: null,
          Dexie: Wr,
          liveQuery: Hr,
          default: Wr,
          RangeSet: $r,
          mergeRanges: Nr,
          rangesOverlap: Mr,
        });
        return (r(Wr, Jr, { default: Wr }), Wr);
      });
    }
    var d = !1;
    function m() {
      return (d || ((d = !0), c()), s.exports);
    }
    function p(e) {
      switch (e) {
        case void 0:
          return m();
      }
    }
    a.exports = p;
  },
  null,
);
