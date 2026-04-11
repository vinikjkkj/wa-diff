__d(
  "DGWCppBridge",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      var e =
        typeof document != "undefined" && document.currentScript
          ? document.currentScript.src
          : void 0;
      return function (t) {
        t = t || {};
        var t = typeof t != "undefined" ? t : {},
          n = (function () {
            function e() {}
            function t(e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }
            function n(e) {
              if (!(this instanceof n))
                throw new TypeError("Promises must be constructed via new");
              if (typeof e != "function") throw new TypeError("not a function");
              ((this._state = 0),
                (this._handled = !1),
                (this._value = void 0),
                (this._deferreds = []),
                s(e, this));
            }
            function r(e, t) {
              for (; e._state === 3; ) e = e._value;
              if (e._state === 0) {
                e._deferreds.push(t);
                return;
              }
              ((e._handled = !0),
                n._immediateFn(function () {
                  var n = e._state === 1 ? t.onFulfilled : t.onRejected;
                  if (n === null) {
                    (e._state === 1 ? o : a)(t.promise, e._value);
                    return;
                  }
                  var r;
                  try {
                    r = n(e._value);
                  } catch (e) {
                    a(t.promise, e);
                    return;
                  }
                  o(t.promise, r);
                }));
            }
            function o(e, r) {
              try {
                if (r === e)
                  throw new TypeError(
                    "A promise cannot be resolved with itself.",
                  );
                if (r && (typeof r == "object" || typeof r == "function")) {
                  var o = r.then;
                  if (r instanceof n) {
                    ((e._state = 3), (e._value = r), i(e));
                    return;
                  } else if (typeof o == "function") {
                    s(t(o, r), e);
                    return;
                  }
                }
                ((e._state = 1), (e._value = r), i(e));
              } catch (t) {
                a(e, t);
              }
            }
            function a(e, t) {
              ((e._state = 2), (e._value = t), i(e));
            }
            function i(e) {
              e._state === 2 &&
                e._deferreds.length === 0 &&
                n._immediateFn(function () {
                  e._handled || n._unhandledRejectionFn(e._value);
                });
              for (var t = 0, o = e._deferreds.length; t < o; t++)
                r(e, e._deferreds[t]);
              e._deferreds = null;
            }
            function l(e, t, n) {
              ((this.onFulfilled = typeof e == "function" ? e : null),
                (this.onRejected = typeof t == "function" ? t : null),
                (this.promise = n));
            }
            function s(e, t) {
              var n = !1;
              try {
                e(
                  function (e) {
                    n || ((n = !0), o(t, e));
                  },
                  function (e) {
                    n || ((n = !0), a(t, e));
                  },
                );
              } catch (e) {
                if (n) return;
                ((n = !0), a(t, e));
              }
            }
            return (
              (n.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (n.prototype.then = function (t, n) {
                var o = new this.constructor(e);
                return (r(this, new l(t, n, o)), o);
              }),
              (n.all = function (e) {
                return new n(function (t, n) {
                  if (!Array.isArray(e))
                    return n(new TypeError("Promise.all accepts an array"));
                  var r = Array.prototype.slice.call(e);
                  if (r.length === 0) return t([]);
                  var o = r.length;
                  function a(e, i) {
                    try {
                      if (
                        i &&
                        (typeof i == "object" || typeof i == "function")
                      ) {
                        var l = i.then;
                        if (typeof l == "function") {
                          l.call(
                            i,
                            function (t) {
                              a(e, t);
                            },
                            n,
                          );
                          return;
                        }
                      }
                      ((r[e] = i), --o === 0 && t(r));
                    } catch (e) {
                      n(e);
                    }
                  }
                  for (var i = 0; i < r.length; i++) a(i, r[i]);
                });
              }),
              (n.resolve = function (e) {
                return e && typeof e == "object" && e.constructor === n
                  ? e
                  : new n(function (t) {
                      t(e);
                    });
              }),
              (n.reject = function (e) {
                return new n(function (t, n) {
                  n(e);
                });
              }),
              (n.race = function (e) {
                return new n(function (t, r) {
                  if (!Array.isArray(e))
                    return r(new TypeError("Promise.race accepts an array"));
                  for (var o = 0, a = e.length; o < a; o++)
                    n.resolve(e[o]).then(t, r);
                });
              }),
              (n._immediateFn =
                (typeof setImmediate == "function" &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  setTimeout(e, 0);
                }),
              (n._unhandledRejectionFn = function (t) {}),
              n
            );
          })(),
          r,
          o;
        t.ready = new n(function (e, t) {
          ((r = e), (o = t));
        });
        var a = {},
          i;
        for (i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
        var l = [],
          s = "./this.program",
          u = function (t, n) {
            throw n;
          },
          c = !0,
          d = !1,
          m = "";
        function p(e) {
          return t.locateFile ? t.locateFile(e, m) : m + e;
        }
        var _, f, g, h;
        (typeof document != "undefined" &&
          document.currentScript &&
          (m = document.currentScript.src),
          e && (m = e),
          m.indexOf("blob:") !== 0
            ? (m = m.substr(0, m.lastIndexOf("/") + 1))
            : (m = ""),
          (_ = function (t) {
            try {
              var e = new XMLHttpRequest();
              return (e.open("GET", t, !1), e.send(null), e.responseText);
            } catch (e) {
              var n = ge(t);
              if (n) return pe(n);
              throw e;
            }
          }),
          (f = function (t, n, r) {
            var e = new XMLHttpRequest();
            (e.open("GET", t, !0),
              (e.responseType = "arraybuffer"),
              (e.onload = function () {
                if (e.status == 200 || (e.status == 0 && e.response)) {
                  n(e.response);
                  return;
                }
                var o = ge(t);
                if (o) {
                  n(o.buffer);
                  return;
                }
                r();
              }),
              (e.onerror = r),
              e.send(null));
          }),
          (h = function (t) {
            document.title = t;
          }));
        var y = t.print || console.log.bind(console),
          C = t.printErr || console.warn.bind(console);
        for (i in a)
          Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
        ((a = null),
          t.arguments && (l = t.arguments),
          t.thisProgram && (s = t.thisProgram),
          t.quit && (u = t.quit));
        var b;
        t.wasmBinary && (b = t.wasmBinary);
        var v = t.noExitRuntime || !0,
          S = {
            Memory: function (t) {
              this.buffer = new ArrayBuffer(t.initial * 65536);
            },
            Module: function (t) {},
            Instance: function (t, n) {
              this.exports = (function (t) {
                function e(e) {
                  return (
                    (e.set = function (e, t) {
                      this[e] = t;
                    }),
                    (e.get = function (e) {
                      return this[e];
                    }),
                    e
                  );
                }
                for (var n, r = new Uint8Array(123), o = 25; o >= 0; --o)
                  ((r[48 + o] = 52 + o), (r[65 + o] = o), (r[97 + o] = 26 + o));
                ((r[43] = 62), (r[47] = 63));
                function a(e, t, n) {
                  for (
                    var o,
                      a,
                      i = 0,
                      l = t,
                      s = n.length,
                      u =
                        t +
                        ((s * 3) >> 2) -
                        (n[s - 2] == "=") -
                        (n[s - 1] == "=");
                    i < s;
                    i += 4
                  )
                    ((o = r[n.charCodeAt(i + 1)]),
                      (a = r[n.charCodeAt(i + 2)]),
                      (e[l++] = (r[n.charCodeAt(i)] << 2) | (o >> 4)),
                      l < u && (e[l++] = (o << 4) | (a >> 2)),
                      l < u && (e[l++] = (a << 6) | r[n.charCodeAt(i + 3)]));
                }
                function i(e) {
                  (a(
                    n,
                    1024,
                    "U3Q5dHlwZV9pbmZvAAAAAOAEAAAABAAATjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAAAAACAUAABgEAAAQBAAATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAAAACAUAAEgEAAA8BAAATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAAAACAUAAHgEAAA8BAAATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UACAUAAKgEAACcBAAAAAAAAGwEAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAAAAABQBQAAAQAAAAkAAAADAAAABAAAAAUAAAAKAAAACwAAAAwAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAACAUAACgFAABsBA==",
                  ),
                    a(n, 1372, "gAkQ"));
                }
                function l(t) {
                  var r = t.a,
                    o = r.buffer;
                  r.grow = Le;
                  var a = new Int8Array(o),
                    l = new Int16Array(o),
                    s = new Int32Array(o),
                    u = new Uint8Array(o),
                    c = new Uint16Array(o),
                    d = new Uint32Array(o),
                    m = new Float32Array(o),
                    p = new Float64Array(o),
                    _ = Math.imul,
                    f = Math.fround,
                    g = Math.abs,
                    h = Math.clz32,
                    y = Math.min,
                    C = Math.max,
                    b = Math.floor,
                    v = Math.ceil,
                    S = Math.trunc,
                    R = Math.sqrt,
                    L = t.abort,
                    E = NaN,
                    k = 1 / 0,
                    I = t.b,
                    T = 1051008,
                    D = 0;
                  function x(e, t, n, r, o, i) {
                    ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0),
                      (i = i | 0));
                    var m = 0,
                      p = 0,
                      f = 0;
                    ((m = (T - 80) | 0),
                      (T = m),
                      (s[(m + 72) >> 2] = e),
                      (s[(m + 68) >> 2] = t),
                      (s[(m + 64) >> 2] = n),
                      (s[(m + 60) >> 2] = r),
                      (s[(m + 56) >> 2] = o),
                      (s[(m + 52) >> 2] = i));
                    e: {
                      if (
                        !s[(m + 52) >> 2] ||
                        !s[(m + 56) >> 2] |
                          (!s[(m + 72) >> 2] |
                            !s[(m + 68) >> 2] |
                            (!s[(m + 64) >> 2] | !s[(m + 60) >> 2]))
                      ) {
                        s[(m + 76) >> 2] = 5;
                        break e;
                      }
                      ((s[s[(m + 64) >> 2] >> 2] = 0),
                        (s[s[(m + 60) >> 2] >> 2] = 0),
                        (t = s[(m + 68) >> 2]),
                        (n = s[(m + 56) >> 2]),
                        (r = s[(m + 52) >> 2]),
                        (e = (T + -64) | 0),
                        (T = e),
                        (s[(e + 56) >> 2] = s[(m + 72) >> 2]),
                        (s[(e + 52) >> 2] = t),
                        (s[(e + 48) >> 2] = n),
                        (s[(e + 44) >> 2] = r),
                        (s[(e + 40) >> 2] = 0),
                        (s[(e + 36) >> 2] = s[(e + 56) >> 2]));
                      t: {
                        n: {
                          r: {
                            for (;;) {
                              if (!s[(e + 52) >> 2]) break n;
                              if (
                                ((s[(e + 32) >> 2] = s[(e + 36) >> 2]),
                                (a[(e + 31) | 0] = u[s[(e + 36) >> 2]]),
                                (s[(e + 52) >> 2] = s[(e + 52) >> 2] - 1),
                                (s[(e + 36) >> 2] = s[(e + 36) >> 2] + 1),
                                u[(e + 31) | 0] == 10 ||
                                  (u[(e + 31) | 0] == 2) |
                                    (u[(e + 31) | 0] == 4) |
                                    (u[(e + 31) | 0] == 9))
                              ) {
                                s[(e + 40) >> 2] = s[(e + 40) >> 2] + 1;
                                continue;
                              }
                              if (
                                ((s[(e + 24) >> 2] = 1), J(u[(e + 31) | 0]) & 1)
                              ) {
                                if (
                                  ((p = e),
                                  (f = ee(u[(e + 31) | 0]) & 1),
                                  (a[(p + 23) | 0] = f),
                                  (s[(e + 16) >> 2] =
                                    a[(e + 23) | 0] & 1 ? 1 : 2),
                                  d[(e + 52) >> 2] < d[(e + 16) >> 2])
                                ) {
                                  ((s[s[(e + 48) >> 2] >> 2] =
                                    s[(e + 32) >> 2]),
                                    (s[s[(e + 44) >> 2] >> 2] =
                                      s[(e + 52) >> 2] + s[(e + 24) >> 2]));
                                  break t;
                                }
                                if (
                                  ((s[(e + 52) >> 2] =
                                    s[(e + 52) >> 2] - s[(e + 16) >> 2]),
                                  (s[(e + 24) >> 2] =
                                    s[(e + 16) >> 2] + s[(e + 24) >> 2]),
                                  (s[(e + 36) >> 2] =
                                    s[(e + 16) >> 2] + s[(e + 36) >> 2]),
                                  !(
                                    u[(e + 31) | 0] != 14 &&
                                    u[(e + 31) | 0] != 8
                                  ))
                                ) {
                                  s[(e + 40) >> 2] = s[(e + 40) >> 2] + 1;
                                  continue;
                                }
                              }
                              if (d[(e + 52) >> 2] < 3) break r;
                              if (
                                ((s[(e + 12) >> 2] = 0),
                                (t = s[(e + 36) >> 2]),
                                (n = u[t | 0] | (u[(t + 1) | 0] << 8)),
                                (a[(e + 12) | 0] = n),
                                (a[(e + 13) | 0] = n >>> 8),
                                (a[(e + 14) | 0] = u[(t + 2) | 0]),
                                (s[(e + 52) >> 2] = s[(e + 52) >> 2] - 3),
                                (s[(e + 24) >> 2] = s[(e + 24) >> 2] + 3),
                                (s[(e + 36) >> 2] = s[(e + 36) >> 2] + 3),
                                d[(e + 12) >> 2] <= d[(e + 52) >> 2])
                              ) {
                                ((s[(e + 40) >> 2] = s[(e + 40) >> 2] + 1),
                                  (s[(e + 36) >> 2] =
                                    s[(e + 12) >> 2] + s[(e + 36) >> 2]),
                                  (s[(e + 52) >> 2] =
                                    s[(e + 52) >> 2] - s[(e + 12) >> 2]));
                                continue;
                              }
                              break;
                            }
                            ((s[s[(e + 48) >> 2] >> 2] = s[(e + 32) >> 2]),
                              (s[s[(e + 44) >> 2] >> 2] =
                                s[(e + 52) >> 2] + s[(e + 24) >> 2]));
                            break t;
                          }
                          ((s[s[(e + 48) >> 2] >> 2] = s[(e + 32) >> 2]),
                            (s[s[(e + 44) >> 2] >> 2] =
                              s[(e + 52) >> 2] + s[(e + 24) >> 2]));
                          break t;
                        }
                        s[s[(e + 44) >> 2] >> 2] = s[(e + 52) >> 2];
                      }
                      if (
                        ((s[(e + 60) >> 2] = s[(e + 40) >> 2]),
                        (T = (e - -64) | 0),
                        (s[(m + 48) >> 2] = s[(e + 60) >> 2]),
                        !s[(m + 48) >> 2])
                      ) {
                        s[(m + 76) >> 2] = 0;
                        break e;
                      }
                      if (
                        ((p = m),
                        (f = $(_(s[(m + 48) >> 2], 20))),
                        (s[(p + 44) >> 2] = f),
                        !s[(m + 44) >> 2])
                      ) {
                        s[(m + 76) >> 2] = 3;
                        break e;
                      }
                      for (
                        s[(m + 40) >> 2] = s[(m + 44) >> 2],
                          s[(m + 36) >> 2] = s[(m + 72) >> 2],
                          s[(m + 32) >> 2] =
                            s[(m + 68) >> 2] - s[s[(m + 52) >> 2] >> 2],
                          s[(m + 28) >> 2] = 0;
                        ;
                      ) {
                        if (d[(m + 28) >> 2] < d[(m + 48) >> 2]) {
                          if (d[(m + 32) >> 2] < 1) {
                            (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                              (s[(m + 76) >> 2] = 1));
                            break e;
                          }
                          ((a[(m + 27) | 0] = u[s[(m + 36) >> 2]]),
                            (s[(m + 36) >> 2] = s[(m + 36) >> 2] + 1),
                            (s[(m + 32) >> 2] = s[(m + 32) >> 2] - 1));
                          t: {
                            if (
                              !u[(m + 27) | 0] |
                                (u[(m + 27) | 0] == 1) |
                                ((u[(m + 27) | 0] == 2) |
                                  (u[(m + 27) | 0] == 3)) |
                                ((u[(m + 27) | 0] == 4) |
                                  (u[(m + 27) | 0] == 9) |
                                  (u[(m + 27) | 0] == 10)) ||
                              J(u[(m + 27) | 0]) & 1
                            )
                              break t;
                            (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                              (s[(m + 76) >> 2] = 6));
                            break e;
                          }
                          ((e = s[(m + 40) >> 2]),
                            (s[e >> 2] =
                              (u[(m + 27) | 0] & 15) | (s[e >> 2] & -16)));
                          t: {
                            if (
                              u[(m + 27) | 0] == 10 ||
                              (u[(m + 27) | 0] == 2) |
                                (u[(m + 27) | 0] == 4) |
                                (u[(m + 27) | 0] == 9)
                            ) {
                              ((e = s[(m + 40) >> 2]),
                                (s[e >> 2] = s[e >> 2] & -268435441),
                                (s[(m + 40) >> 2] = s[(m + 40) >> 2] + 20));
                              break t;
                            }
                            if (J(u[(m + 27) | 0]) & 1) {
                              ((e = (T - 48) | 0),
                                (T = e),
                                (s[(e + 40) >> 2] = s[(m + 40) >> 2]),
                                (s[(e + 36) >> 2] = m + 36),
                                (s[(e + 32) >> 2] = m + 32));
                              n: {
                                if (!(J(s[s[(e + 40) >> 2] >> 2] & 15) & 1)) {
                                  s[(e + 44) >> 2] = 1;
                                  break n;
                                }
                                if (
                                  ((p = e),
                                  (f = ee(s[s[(e + 40) >> 2] >> 2] & 15) & 1),
                                  (a[(p + 31) | 0] = f),
                                  (s[(e + 24) >> 2] =
                                    a[(e + 31) | 0] & 1 ? 1 : 2),
                                  d[s[(e + 32) >> 2] >> 2] < d[(e + 24) >> 2])
                                ) {
                                  s[(e + 44) >> 2] = 1;
                                  break n;
                                }
                                if (
                                  (ae(
                                    (s[(e + 40) >> 2] + 4) | 0,
                                    s[s[(e + 36) >> 2] >> 2],
                                    s[(e + 24) >> 2],
                                  ),
                                  (t = s[(e + 36) >> 2]),
                                  (s[t >> 2] = s[(e + 24) >> 2] + s[t >> 2]),
                                  (t = s[(e + 32) >> 2]),
                                  (s[t >> 2] = s[t >> 2] - s[(e + 24) >> 2]),
                                  (s[s[(e + 40) >> 2] >> 2] & 15) == 8)
                                ) {
                                  ((t = s[(e + 40) >> 2]),
                                    (s[t >> 2] = s[t >> 2] & -268435441),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 14) {
                                  ((t = s[(e + 40) >> 2]),
                                    (s[t >> 2] = s[t >> 2] & -268435441),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                if (d[s[(e + 32) >> 2] >> 2] < 3) {
                                  s[(e + 44) >> 2] = 11;
                                  break n;
                                }
                                if (
                                  ((s[(e + 20) >> 2] = 0),
                                  (t = s[s[(e + 36) >> 2] >> 2]),
                                  (n = u[t | 0] | (u[(t + 1) | 0] << 8)),
                                  (a[(e + 20) | 0] = n),
                                  (a[(e + 21) | 0] = n >>> 8),
                                  (a[(e + 22) | 0] = u[(t + 2) | 0]),
                                  (t = s[(e + 36) >> 2]),
                                  (s[t >> 2] = s[t >> 2] + 3),
                                  (t = s[(e + 32) >> 2]),
                                  (s[t >> 2] = s[t >> 2] - 3),
                                  (t = s[(e + 40) >> 2]),
                                  (s[t >> 2] =
                                    (s[t >> 2] & -268435441) |
                                    ((s[(e + 20) >> 2] & 16777215) << 4)),
                                  d[s[(e + 32) >> 2] >> 2] < d[(e + 20) >> 2])
                                ) {
                                  s[(e + 44) >> 2] = 11;
                                  break n;
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 15) {
                                  if (
                                    ((s[(s[(e + 40) >> 2] + 12) >> 2] =
                                      s[(e + 20) >> 2]),
                                    (t = $(s[(e + 20) >> 2])),
                                    (s[(s[(e + 40) >> 2] + 8) >> 2] = t),
                                    !s[(s[(e + 40) >> 2] + 8) >> 2])
                                  ) {
                                    s[(e + 44) >> 2] = 3;
                                    break n;
                                  }
                                  (ae(
                                    s[(s[(e + 40) >> 2] + 8) >> 2],
                                    s[s[(e + 36) >> 2] >> 2],
                                    s[(e + 20) >> 2],
                                  ),
                                    (t = s[(e + 36) >> 2]),
                                    (s[t >> 2] = s[(e + 20) >> 2] + s[t >> 2]),
                                    (t = s[(e + 32) >> 2]),
                                    (s[t >> 2] = s[t >> 2] - s[(e + 20) >> 2]),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 5) {
                                  if (
                                    ((s[(s[(e + 40) >> 2] + 12) >> 2] =
                                      s[(e + 20) >> 2]),
                                    (t = $(s[(e + 20) >> 2])),
                                    (s[(s[(e + 40) >> 2] + 8) >> 2] = t),
                                    !s[(s[(e + 40) >> 2] + 8) >> 2])
                                  ) {
                                    s[(e + 44) >> 2] = 3;
                                    break n;
                                  }
                                  (ae(
                                    s[(s[(e + 40) >> 2] + 8) >> 2],
                                    s[s[(e + 36) >> 2] >> 2],
                                    s[(e + 20) >> 2],
                                  ),
                                    (t = s[(e + 36) >> 2]),
                                    (s[t >> 2] = s[(e + 20) >> 2] + s[t >> 2]),
                                    (t = s[(e + 32) >> 2]),
                                    (s[t >> 2] = s[t >> 2] - s[(e + 20) >> 2]),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                r: {
                                  if (
                                    !(
                                      (s[s[(e + 40) >> 2] >> 2] & 15) != 6 &&
                                      (s[s[(e + 40) >> 2] >> 2] & 15) != 7
                                    )
                                  ) {
                                    if (
                                      ((p = e),
                                      (f = G(
                                        s[(e + 36) >> 2],
                                        s[(e + 32) >> 2],
                                        (e + 19) | 0,
                                        (e + 18) | 0,
                                      )),
                                      (s[(p + 12) >> 2] = f),
                                      s[(e + 12) >> 2])
                                    ) {
                                      s[(e + 44) >> 2] = s[(e + 12) >> 2];
                                      break n;
                                    }
                                    break r;
                                  }
                                  if (
                                    !(
                                      (s[s[(e + 40) >> 2] >> 2] & 15) != 13 &&
                                      (s[s[(e + 40) >> 2] >> 2] & 15) != 12
                                    )
                                  ) {
                                    ((n = s[(e + 32) >> 2]),
                                      (t = (T - 32) | 0),
                                      (s[(t + 24) >> 2] = s[(e + 36) >> 2]),
                                      (s[(t + 20) >> 2] = n),
                                      (s[(t + 16) >> 2] = e + 19),
                                      (s[(t + 12) >> 2] = e + 16),
                                      (l[(t + 10) >> 1] = 0));
                                    o: {
                                      if (d[s[(t + 20) >> 2] >> 2] < 2) {
                                        s[(t + 28) >> 2] = 1;
                                        break o;
                                      }
                                      ((n = s[s[(t + 24) >> 2] >> 2]),
                                        (n = u[n | 0] | (u[(n + 1) | 0] << 8)),
                                        (a[(t + 10) | 0] = n),
                                        (a[(t + 11) | 0] = n >>> 8),
                                        (n = s[(t + 24) >> 2]),
                                        (s[n >> 2] = s[n >> 2] + 2),
                                        (n = s[(t + 20) >> 2]),
                                        (s[n >> 2] = s[n >> 2] - 2),
                                        (a[s[(t + 16) >> 2]] =
                                          (c[(t + 10) >> 1] & 32768) == 32768),
                                        (l[s[(t + 12) >> 2] >> 1] =
                                          c[(t + 10) >> 1] & 32767),
                                        (s[(t + 28) >> 2] = 0));
                                    }
                                    if (
                                      ((s[(e + 12) >> 2] = s[(t + 28) >> 2]),
                                      s[(e + 12) >> 2])
                                    ) {
                                      s[(e + 44) >> 2] = s[(e + 12) >> 2];
                                      break n;
                                    }
                                  }
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 12) {
                                  ((t = s[(e + 40) >> 2]),
                                    (l[(t + 8) >> 1] =
                                      (l[(t + 8) >> 1] & 1) |
                                      (c[(e + 16) >> 1] << 1)),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 7) {
                                  ((t = s[(e + 40) >> 2]),
                                    (a[(t + 8) | 0] =
                                      (a[(t + 8) | 0] & 1) |
                                      (u[(e + 18) | 0] << 1)),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 13) {
                                  ((n = s[(e + 32) >> 2]),
                                    (r = s[(e + 20) >> 2]),
                                    (o = (s[(e + 40) >> 2] + 12) | 0),
                                    (i = s[(e + 40) >> 2]),
                                    (t = (T - 32) | 0),
                                    (T = t),
                                    (s[(t + 24) >> 2] = s[(e + 36) >> 2]),
                                    (s[(t + 20) >> 2] = n),
                                    (s[(t + 16) >> 2] = r),
                                    (s[(t + 12) >> 2] = o),
                                    (s[(t + 8) >> 2] = i + 16));
                                  r: {
                                    if (d[(t + 16) >> 2] < 2) {
                                      s[(t + 28) >> 2] = 9;
                                      break r;
                                    }
                                    if (
                                      ((s[s[(t + 8) >> 2] >> 2] =
                                        s[(t + 16) >> 2] - 2),
                                      d[s[(t + 20) >> 2] >> 2] <
                                        d[s[(t + 8) >> 2] >> 2])
                                    ) {
                                      s[(t + 28) >> 2] = 1;
                                      break r;
                                    }
                                    if (
                                      ((n = $(s[s[(t + 8) >> 2] >> 2])),
                                      (s[s[(t + 12) >> 2] >> 2] = n),
                                      !s[s[(t + 12) >> 2] >> 2])
                                    ) {
                                      s[(t + 28) >> 2] = 3;
                                      break r;
                                    }
                                    (ae(
                                      s[s[(t + 12) >> 2] >> 2],
                                      s[s[(t + 24) >> 2] >> 2],
                                      s[s[(t + 8) >> 2] >> 2],
                                    ),
                                      (n = s[(t + 24) >> 2]),
                                      (s[n >> 2] =
                                        s[s[(t + 8) >> 2] >> 2] + s[n >> 2]),
                                      (n = s[(t + 20) >> 2]),
                                      (s[n >> 2] =
                                        s[n >> 2] - s[s[(t + 8) >> 2] >> 2]),
                                      (s[(t + 28) >> 2] = 0));
                                  }
                                  if (
                                    ((T = (t + 32) | 0),
                                    (s[(e + 8) >> 2] = s[(t + 28) >> 2]),
                                    s[(e + 8) >> 2])
                                  ) {
                                    s[(e + 44) >> 2] = s[(e + 8) >> 2];
                                    break n;
                                  }
                                  ((t = s[(e + 40) >> 2]),
                                    (l[(t + 8) >> 1] =
                                      (a[(e + 19) | 0] & 1) |
                                      (c[(t + 8) >> 1] & 65534)),
                                    (t = s[(e + 40) >> 2]),
                                    (l[(t + 8) >> 1] =
                                      (l[(t + 8) >> 1] & 1) |
                                      (c[(e + 16) >> 1] << 1)),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                if ((s[s[(e + 40) >> 2] >> 2] & 15) == 6) {
                                  if (
                                    ((p = e),
                                    (f = q(
                                      s[(e + 36) >> 2],
                                      s[(e + 32) >> 2],
                                      s[(e + 20) >> 2],
                                      (s[(e + 40) >> 2] + 12) | 0,
                                      (s[(e + 40) >> 2] + 16) | 0,
                                    )),
                                    (s[(p + 4) >> 2] = f),
                                    s[(e + 4) >> 2])
                                  ) {
                                    s[(e + 44) >> 2] = s[(e + 4) >> 2];
                                    break n;
                                  }
                                  ((t = s[(e + 40) >> 2]),
                                    (a[(t + 8) | 0] =
                                      (a[(e + 19) | 0] & 1) |
                                      (u[(t + 8) | 0] & 254)),
                                    (t = s[(e + 40) >> 2]),
                                    (a[(t + 8) | 0] =
                                      (a[(t + 8) | 0] & 1) |
                                      (u[(e + 18) | 0] << 1)),
                                    (s[(e + 44) >> 2] = 0));
                                  break n;
                                }
                                s[(e + 44) >> 2] = 1;
                              }
                              if (
                                ((T = (e + 48) | 0),
                                (s[(m + 20) >> 2] = s[(e + 44) >> 2]),
                                !s[(m + 20) >> 2])
                              ) {
                                s[(m + 40) >> 2] = s[(m + 40) >> 2] + 20;
                                break t;
                              }
                              (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                                (s[(m + 76) >> 2] = s[(m + 20) >> 2]));
                              break e;
                            }
                            if (
                              ((s[(m + 16) >> 2] = 0), d[(m + 32) >> 2] < 3)
                            ) {
                              (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                                (s[(m + 76) >> 2] = 1));
                              break e;
                            }
                            if (
                              ((e = s[(m + 36) >> 2]),
                              (t = u[e | 0] | (u[(e + 1) | 0] << 8)),
                              (a[(m + 16) | 0] = t),
                              (a[(m + 17) | 0] = t >>> 8),
                              (a[(m + 18) | 0] = u[(e + 2) | 0]),
                              (s[(m + 36) >> 2] = s[(m + 36) >> 2] + 3),
                              (s[(m + 32) >> 2] = s[(m + 32) >> 2] - 3),
                              !(
                                (s[(m + 16) >> 2] == 1) |
                                (u[(m + 27) | 0] != 1)
                              ))
                            ) {
                              (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                                (s[(m + 76) >> 2] = 7));
                              break e;
                            }
                            if (
                              ((e = s[(m + 40) >> 2]),
                              (s[e >> 2] =
                                (s[e >> 2] & -268435441) |
                                ((s[(m + 16) >> 2] & 16777215) << 4)),
                              u[(m + 27) | 0] == 3)
                            ) {
                              if (s[(m + 16) >> 2] != 1) {
                                (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                                  (s[(m + 76) >> 2] = 10));
                                break e;
                              }
                              if (
                                ((a[(m + 15) | 0] = 0), d[(m + 32) >> 2] < 1)
                              ) {
                                (O(s[(m + 44) >> 2]), (s[(m + 76) >> 2] = 1));
                                break e;
                              }
                              ((a[(m + 15) | 0] = u[s[(m + 36) >> 2]]),
                                (s[(m + 36) >> 2] = s[(m + 36) >> 2] + 1),
                                (s[(m + 32) >> 2] = s[(m + 32) >> 2] - 1));
                              n: {
                                if (u[(m + 15) | 0] <= 4) {
                                  a[(s[(m + 40) >> 2] + 4) | 0] =
                                    u[(m + 15) | 0];
                                  break n;
                                }
                                a[(s[(m + 40) >> 2] + 4) | 0] = 4;
                              }
                              s[(m + 40) >> 2] = s[(m + 40) >> 2] + 20;
                              break t;
                            }
                            if (
                              ((p = m),
                              (f = G(
                                (m + 36) | 0,
                                (m + 32) | 0,
                                (m + 14) | 0,
                                (m + 13) | 0,
                              )),
                              (s[(p + 8) >> 2] = f),
                              s[(m + 8) >> 2])
                            ) {
                              (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                                (s[(m + 76) >> 2] = s[(m + 8) >> 2]));
                              break e;
                            }
                            if (u[(m + 27) | 0] == 1) {
                              ((e = s[(m + 40) >> 2]),
                                (a[(e + 4) | 0] =
                                  (a[(e + 4) | 0] & 1) |
                                  (u[(m + 13) | 0] << 1)),
                                (s[(m + 40) >> 2] = s[(m + 40) >> 2] + 20));
                              break t;
                            }
                            if (!u[(m + 27) | 0]) {
                              if (
                                ((p = m),
                                (f = q(
                                  (m + 36) | 0,
                                  (m + 32) | 0,
                                  s[(m + 16) >> 2],
                                  (s[(m + 40) >> 2] + 8) | 0,
                                  (s[(m + 40) >> 2] + 12) | 0,
                                )),
                                (s[(p + 4) >> 2] = f),
                                s[(m + 4) >> 2])
                              ) {
                                (V(s[(m + 44) >> 2], s[(m + 28) >> 2]),
                                  (s[(m + 76) >> 2] = s[(m + 4) >> 2]));
                                break e;
                              }
                              ((e = s[(m + 40) >> 2]),
                                (a[(e + 4) | 0] =
                                  (a[(m + 14) | 0] & 1) |
                                  (u[(e + 4) | 0] & 254)),
                                (e = s[(m + 40) >> 2]),
                                (a[(e + 4) | 0] =
                                  (a[(e + 4) | 0] & 1) |
                                  (u[(m + 13) | 0] << 1)),
                                (s[(m + 40) >> 2] = s[(m + 40) >> 2] + 20));
                            }
                          }
                          s[(m + 28) >> 2] = s[(m + 28) >> 2] + 1;
                          continue;
                        }
                        break;
                      }
                      if (s[(m + 32) >> 2]) {
                        (V(s[(m + 44) >> 2], s[(m + 48) >> 2]),
                          (s[(m + 76) >> 2] = 1));
                        break e;
                      }
                      ((s[s[(m + 64) >> 2] >> 2] = s[(m + 44) >> 2]),
                        (s[s[(m + 60) >> 2] >> 2] = s[(m + 48) >> 2]),
                        (s[(m + 76) >> 2] = 0));
                    }
                    return ((T = (m + 80) | 0), s[(m + 76) >> 2]);
                  }
                  function $(e) {
                    var t = 0,
                      n = 0,
                      r = 0,
                      o = 0,
                      a = 0,
                      i = 0,
                      l = 0,
                      u = 0,
                      c = 0,
                      d = 0,
                      m = 0;
                    c = 8;
                    e: {
                      t: {
                        if (e >>> 0 > 4294967239) break t;
                        for (;;) {
                          ((c = c >>> 0 > 8 ? c : 8),
                            (n = s[603]),
                            (a = n),
                            (o = s[602]),
                            (l = o),
                            (e = e >>> 0 > 8 ? (e + 3) & -4 : 8));
                          n: {
                            if (e >>> 0 <= 127) {
                              i = (((e >>> 3) | 0) - 1) | 0;
                              break n;
                            }
                            if (
                              ((r = h(e)),
                              (i =
                                (((((e >>> (29 - r)) ^ 4) - (r << 2)) | 0) +
                                  110) |
                                0),
                              e >>> 0 <= 4095)
                            )
                              break n;
                            ((r =
                              (((((e >>> (30 - r)) ^ 2) - (r << 1)) | 0) + 71) |
                              0),
                              (i = r >>> 0 < 63 ? r : 63));
                          }
                          if (
                            ((t = i),
                            (r = t & 31),
                            (t & 63) >>> 0 >= 32
                              ? ((t = 0), (n = (n >>> r) | 0))
                              : ((t = (n >>> r) | 0),
                                (n =
                                  ((((1 << r) - 1) & n) << (32 - r)) |
                                  (l >>> r))),
                            (r = t),
                            n | t)
                          ) {
                            for (;;) {
                              ((a = n), (t = r));
                              n: {
                                if (t | n) {
                                  ((o = (t - 1) | 0),
                                    (u = (o + 1) | 0),
                                    (l = o),
                                    (o = (n - 1) | 0),
                                    (l = (o | 0) != -1 ? u : l),
                                    (o = (h(n ^ o) + 32) | 0),
                                    (n = h(t ^ l)),
                                    (n = (n | 0) == 32 ? o : n),
                                    (t = (63 - n) | 0),
                                    (D = (0 - (n >>> 0 > 63)) | 0));
                                  break n;
                                }
                                ((D = 0), (t = 64));
                              }
                              ((o = t),
                                (t = o),
                                (n = t & 31),
                                (t & 63) >>> 0 >= 32
                                  ? ((t = 0), (l = (r >>> n) | 0))
                                  : ((t = (r >>> n) | 0),
                                    (l =
                                      ((((1 << n) - 1) & r) << (32 - n)) |
                                      (a >>> n))),
                                (r = t),
                                (i = (o + i) | 0),
                                (a = i << 4),
                                (t = s[(a + 1384) >> 2]),
                                (o = (a + 1376) | 0));
                              n: {
                                if ((t | 0) != (o | 0)) {
                                  if (((n = F(t, c, e)), n)) break t;
                                  ((n = s[(t + 4) >> 2]),
                                    (s[(n + 8) >> 2] = s[(t + 8) >> 2]),
                                    (s[(s[(t + 8) >> 2] + 4) >> 2] = n),
                                    (s[(t + 8) >> 2] = o),
                                    (n = (a + 1380) | 0),
                                    (s[(t + 4) >> 2] = s[n >> 2]),
                                    (s[n >> 2] = t),
                                    (s[(s[(t + 4) >> 2] + 8) >> 2] = t),
                                    (i = (i + 1) | 0),
                                    (n = ((r & 1) << 31) | (l >>> 1)),
                                    (r = (r >>> 1) | 0));
                                  break n;
                                }
                                ((d = s[603]),
                                  (t = i),
                                  (u = t & 63),
                                  (n = u),
                                  (a = n & 31),
                                  n >>> 0 >= 32
                                    ? ((n = 0), (o = (-1 >>> a) | 0))
                                    : ((n = (-1 >>> a) | 0),
                                      (o =
                                        (((1 << a) - 1) << (32 - a)) |
                                        (-1 >>> a))),
                                  (o = o & -2),
                                  (a = u & 31),
                                  u >>> 0 >= 32
                                    ? ((n = o << a), (u = 0))
                                    : ((n =
                                        (((1 << a) - 1) & (o >>> (32 - a))) |
                                        (n << a)),
                                      (u = o << a)),
                                  (a = n),
                                  (o = (0 - t) & 63),
                                  (n = o),
                                  (t = n & 31),
                                  n >>> 0 >= 32
                                    ? ((n = -1 << t), (t = 0))
                                    : ((n =
                                        (((1 << t) - 1) & (-1 >>> (32 - t))) |
                                        (-1 << t)),
                                      (t = -1 << t)),
                                  (m = t & -2),
                                  (t = o & 31),
                                  o >>> 0 >= 32
                                    ? ((o = 0), (t = (n >>> t) | 0))
                                    : ((o = (n >>> t) | 0),
                                      (t =
                                        ((((1 << t) - 1) & n) << (32 - t)) |
                                        (m >>> t))),
                                  (n = t | u),
                                  (D = a | o),
                                  (s[602] = s[602] & n),
                                  (s[603] = D & d),
                                  (n = l ^ 1));
                              }
                              if (!(n | r)) break;
                            }
                            ((o = s[602]), (a = s[603]));
                          }
                          n: {
                            if (a | o) {
                              ((r = h(a)),
                                (r =
                                  (63 -
                                    ((r | 0) == 32 ? (h(o) + 32) | 0 : r)) <<
                                  4),
                                (t = (r + 1376) | 0),
                                (r = s[(r + 1384) >> 2]));
                              r: {
                                if (
                                  !a & (o >>> 0 < 1073741824) ||
                                  ((i = 98), (t | 0) == (r | 0))
                                )
                                  break r;
                                for (;;) {
                                  if (((n = F(r, c, e)), n)) break t;
                                  if (((r = s[(r + 8) >> 2]), !i)) break r;
                                  if (((i = (i - 1) | 0), (t | 0) == (r | 0)))
                                    break;
                                }
                              }
                              if (M((e + 48) | 0)) break n;
                              if (!r | ((t | 0) == (r | 0))) break e;
                              for (;;) {
                                if (((n = F(r, c, e)), n)) break t;
                                if (((r = s[(r + 8) >> 2]), (t | 0) == (r | 0)))
                                  break;
                              }
                              break e;
                            }
                            if (!M((e + 48) | 0)) break e;
                          }
                          if (((n = 0), e >>> 0 > 4294967239)) break t;
                          for (r = c, t = 0; ; ) {
                            if (((i = t), r)) {
                              ((r = (r - 1) & r), (t = (t + 1) | 0));
                              continue;
                            }
                            break;
                          }
                          if (!(i >>> 0 <= 1)) break;
                        }
                      }
                      return n;
                    }
                    return 0;
                  }
                  function P(e, t, n, r, o, i, m) {
                    ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0),
                      (i = i | 0),
                      (m = m | 0));
                    var p = 0,
                      _ = 0,
                      f = 0;
                    ((p = (T - 32) | 0),
                      (T = p),
                      (l[(p + 26) >> 1] = e),
                      (s[(p + 20) >> 2] = t),
                      (s[(p + 16) >> 2] = n),
                      (a[(p + 15) | 0] = r),
                      (l[(p + 12) >> 1] = o),
                      (s[(p + 8) >> 2] = i),
                      (s[(p + 4) >> 2] = m));
                    e: {
                      if (
                        !(!(a[(p + 15) | 0] & 1) | (c[(p + 12) >> 1] <= 32767))
                      ) {
                        s[(p + 28) >> 2] = 4;
                        break e;
                      }
                      ((t = s[(p + 20) >> 2]),
                        (n = s[(p + 16) >> 2]),
                        (r = s[(p + 8) >> 2]),
                        (o = s[(p + 4) >> 2]),
                        (i = a[(p + 15) | 0] & 1),
                        (e = (T + -64) | 0),
                        (T = e),
                        (s[(e + 56) >> 2] = p + 26),
                        (s[(e + 52) >> 2] = t),
                        (s[(e + 48) >> 2] = n),
                        (s[(e + 44) >> 2] = r),
                        (s[(e + 40) >> 2] = o),
                        (a[(e + 39) | 0] = 2),
                        (a[(e + 38) | 0] = 13),
                        (s[(e + 32) >> 2] = p + 12),
                        (a[(e + 31) | 0] = i),
                        (a[(e + 30) | 0] = 2));
                      t: {
                        n: {
                          if (
                            !(
                              !s[(e + 52) >> 2] |
                              (!s[(e + 44) >> 2] | !s[(e + 40) >> 2])
                            ) &&
                            d[(e + 48) >> 2] <= 16777215
                          )
                            break n;
                          s[(e + 60) >> 2] = 5;
                          break t;
                        }
                        if (
                          ((s[(e + 24) >> 2] =
                            s[(e + 48) >> 2] +
                            ((u[(e + 39) | 0] + ((u[(e + 30) | 0] + 4) | 0)) |
                              0)),
                          (_ = e),
                          (f = $(s[(e + 24) >> 2])),
                          (s[(_ + 20) >> 2] = f),
                          !s[(e + 20) >> 2])
                        ) {
                          s[(e + 60) >> 2] = 3;
                          break t;
                        }
                        if (
                          ((s[(e + 16) >> 2] = s[(e + 20) >> 2]),
                          (a[s[(e + 16) >> 2]] = u[(e + 38) | 0]),
                          (s[(e + 16) >> 2] = s[(e + 16) >> 2] + 1),
                          ae(
                            s[(e + 16) >> 2],
                            s[(e + 56) >> 2],
                            u[(e + 30) | 0],
                          ),
                          (s[(e + 16) >> 2] =
                            u[(e + 30) | 0] + s[(e + 16) >> 2]),
                          (s[(e + 12) >> 2] =
                            u[(e + 39) | 0] + s[(e + 48) >> 2]),
                          d[(e + 12) >> 2] < d[(e + 48) >> 2])
                        ) {
                          (O(s[(e + 20) >> 2]), (s[(e + 60) >> 2] = 9));
                          break t;
                        }
                        if (
                          ((t = s[(e + 16) >> 2]),
                          (n = u[(e + 12) | 0] | (u[(e + 13) | 0] << 8)),
                          (a[t | 0] = n),
                          (a[(t + 1) | 0] = n >>> 8),
                          (a[(t + 2) | 0] = u[(e + 14) | 0]),
                          (s[(e + 16) >> 2] = s[(e + 16) >> 2] + 3),
                          a[(e + 31) | 0] & 1)
                        )
                          n: {
                            if (u[(e + 38) | 0] == 6) {
                              ((t = s[(e + 32) >> 2]),
                                (a[t | 0] = u[t | 0] | 128));
                              break n;
                            }
                            r: {
                              if (u[(e + 38) | 0] == 13) {
                                ((t = s[(e + 32) >> 2]),
                                  (l[t >> 1] = c[t >> 1] | 32768));
                                break r;
                              }
                              (O(s[(e + 20) >> 2]), (s[(e + 60) >> 2] = 1));
                              break t;
                            }
                          }
                        (ae(
                          s[(e + 16) >> 2],
                          s[(e + 32) >> 2],
                          u[(e + 39) | 0],
                        ),
                          (s[(e + 16) >> 2] =
                            u[(e + 39) | 0] + s[(e + 16) >> 2]),
                          ae(
                            s[(e + 16) >> 2],
                            s[(e + 52) >> 2],
                            s[(e + 48) >> 2],
                          ),
                          (s[s[(e + 44) >> 2] >> 2] = s[(e + 20) >> 2]),
                          (s[s[(e + 40) >> 2] >> 2] = s[(e + 24) >> 2]),
                          (s[(e + 60) >> 2] = 0));
                      }
                      ((T = (e - -64) | 0),
                        (s[(p + 28) >> 2] = s[(e + 60) >> 2]));
                    }
                    return ((T = (p + 32) | 0), s[(p + 28) >> 2]);
                  }
                  function N(e, t, n, r, o) {
                    ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0));
                    var i = 0,
                      c = 0,
                      m = 0;
                    ((i = (T - 32) | 0),
                      (T = i),
                      (l[(i + 30) >> 1] = e),
                      (s[(i + 24) >> 2] = t),
                      (s[(i + 20) >> 2] = n),
                      (s[(i + 16) >> 2] = r),
                      (s[(i + 12) >> 2] = o),
                      (t = s[(i + 24) >> 2]),
                      (n = s[(i + 20) >> 2]),
                      (r = s[(i + 16) >> 2]),
                      (o = s[(i + 12) >> 2]),
                      (e = (T - 48) | 0),
                      (T = e),
                      (s[(e + 40) >> 2] = i + 30),
                      (s[(e + 36) >> 2] = t),
                      (s[(e + 32) >> 2] = n),
                      (s[(e + 28) >> 2] = r),
                      (s[(e + 24) >> 2] = o),
                      (a[(e + 23) | 0] = 2),
                      (a[(e + 22) | 0] = 15));
                    e: {
                      if (!(s[(e + 24) >> 2] && s[(e + 28) >> 2])) {
                        s[(e + 44) >> 2] = 5;
                        break e;
                      }
                      if (
                        ((s[s[(e + 28) >> 2] >> 2] = 0),
                        (s[s[(e + 24) >> 2] >> 2] = 0),
                        !(d[(e + 32) >> 2] <= 16777215 && s[(e + 36) >> 2]))
                      ) {
                        s[(e + 44) >> 2] = 5;
                        break e;
                      }
                      if (
                        ((s[(e + 16) >> 2] =
                          s[(e + 32) >> 2] + ((u[(e + 23) | 0] + 4) | 0)),
                        (c = e),
                        (m = $(s[(e + 16) >> 2])),
                        (s[(c + 12) >> 2] = m),
                        !s[(e + 12) >> 2])
                      ) {
                        s[(e + 44) >> 2] = 3;
                        break e;
                      }
                      ((s[(e + 8) >> 2] = s[(e + 12) >> 2]),
                        (a[s[(e + 8) >> 2]] = u[(e + 22) | 0]),
                        (s[(e + 8) >> 2] = s[(e + 8) >> 2] + 1),
                        ae(s[(e + 8) >> 2], s[(e + 40) >> 2], u[(e + 23) | 0]),
                        (s[(e + 8) >> 2] = u[(e + 23) | 0] + s[(e + 8) >> 2]),
                        (t = s[(e + 8) >> 2]),
                        (n = u[(e + 32) | 0] | (u[(e + 33) | 0] << 8)),
                        (a[t | 0] = n),
                        (a[(t + 1) | 0] = n >>> 8),
                        (a[(t + 2) | 0] = u[(e + 34) | 0]),
                        (s[(e + 8) >> 2] = s[(e + 8) >> 2] + 3),
                        ae(s[(e + 8) >> 2], s[(e + 36) >> 2], s[(e + 32) >> 2]),
                        (s[(e + 8) >> 2] = s[(e + 32) >> 2] + s[(e + 8) >> 2]),
                        (s[s[(e + 28) >> 2] >> 2] = s[(e + 12) >> 2]),
                        (s[s[(e + 24) >> 2] >> 2] = s[(e + 16) >> 2]),
                        (s[(e + 44) >> 2] = 0));
                    }
                    return (
                      (T = (e + 48) | 0),
                      (T = (i + 32) | 0),
                      s[(e + 44) >> 2]
                    );
                  }
                  function M(e) {
                    var t = 0,
                      n = 0,
                      r = 0,
                      o = 0,
                      i = 0,
                      l = 0;
                    ((r = s[343]), (n = (e + 3) & -4), (t = (r + n) | 0));
                    e: {
                      t: {
                        if (
                          (t >>> 0 <= r >>> 0 && n) ||
                          (t >>> 0 > (Re() << 16) >>> 0 && !(I(t | 0) | 0))
                        )
                          break t;
                        s[343] = t;
                        break e;
                      }
                      ((s[604] = 48), (r = -1));
                    }
                    if ((r | 0) != -1) {
                      ((n = (e + r) | 0),
                        (t = (n - 16) | 0),
                        (s[(t + 12) >> 2] = 16),
                        (s[t >> 2] = 16),
                        (e = s[600]),
                        e ? (l = s[(e + 8) >> 2]) : (l = 0));
                      e: {
                        t: {
                          if ((l | 0) == (r | 0)) {
                            if (
                              ((o = (r - (s[(r - 4) >> 2] & -2)) | 0),
                              (i = s[(o - 4) >> 2]),
                              (s[(e + 8) >> 2] = n),
                              (e = (o - (i & -2)) | 0),
                              (n = -16),
                              !(a[(((e + s[e >> 2]) | 0) - 4) | 0] & 1))
                            )
                              break t;
                            ((n = s[(e + 4) >> 2]),
                              (s[(n + 8) >> 2] = s[(e + 8) >> 2]),
                              (s[(s[(e + 8) >> 2] + 4) >> 2] = n),
                              (t = (t - e) | 0),
                              (s[e >> 2] = t));
                            break e;
                          }
                          ((s[(r + 12) >> 2] = 16),
                            (s[r >> 2] = 16),
                            (s[(r + 8) >> 2] = n),
                            (s[(r + 4) >> 2] = e),
                            (s[600] = r),
                            (n = 16));
                        }
                        ((e = (r + n) | 0), (t = (t - e) | 0), (s[e >> 2] = t));
                      }
                      ((s[((((t & -4) + e) | 0) - 4) >> 2] = t | 1),
                        (l = e),
                        (o = (s[e >> 2] - 8) | 0));
                      e: {
                        if (o >>> 0 <= 127) {
                          t = (((o >>> 3) | 0) - 1) | 0;
                          break e;
                        }
                        if (
                          ((i = h(o)),
                          (t =
                            (((((o >>> (29 - i)) ^ 4) - (i << 2)) | 0) + 110) |
                            0),
                          o >>> 0 <= 4095)
                        )
                          break e;
                        ((t =
                          (((((o >>> (30 - i)) ^ 2) - (i << 1)) | 0) + 71) | 0),
                          (t = t >>> 0 < 63 ? t : 63));
                      }
                      ((n = t << 4),
                        (s[(l + 4) >> 2] = n + 1376),
                        (n = (n + 1384) | 0),
                        (s[(e + 8) >> 2] = s[n >> 2]),
                        (s[n >> 2] = e),
                        (s[(s[(e + 8) >> 2] + 4) >> 2] = e),
                        (n = s[603]),
                        (e = t & 31),
                        (t & 63) >>> 0 >= 32
                          ? ((t = 1 << e), (e = 0))
                          : ((t = ((1 << e) - 1) & (1 >>> (32 - e))),
                            (e = 1 << e)),
                        (s[602] = e | s[602]),
                        (s[603] = t | n));
                    }
                    return (r | 0) != -1;
                  }
                  function w(e, t, n, r) {
                    ((e = e | 0), (t = t | 0), (n = n | 0), (r = r | 0));
                    var o = 0,
                      i = 0,
                      d = 0;
                    ((o = (T - 16) | 0),
                      (T = o),
                      (l[(o + 10) >> 1] = e),
                      (l[(o + 8) >> 1] = t),
                      (s[(o + 4) >> 2] = n),
                      (s[o >> 2] = r));
                    e: {
                      if (c[(o + 8) >> 1] > 32767) {
                        s[(o + 12) >> 2] = 4;
                        break e;
                      }
                      ((t = s[(o + 4) >> 2]),
                        (n = s[o >> 2]),
                        (e = (T - 48) | 0),
                        (T = e),
                        (s[(e + 40) >> 2] = o + 10),
                        (s[(e + 36) >> 2] = t),
                        (s[(e + 32) >> 2] = n),
                        (a[(e + 31) | 0] = 2),
                        (a[(e + 30) | 0] = 12),
                        (s[(e + 24) >> 2] = o + 8),
                        (a[(e + 23) | 0] = 2));
                      t: {
                        if (!(s[(e + 32) >> 2] && s[(e + 36) >> 2])) {
                          s[(e + 44) >> 2] = 5;
                          break t;
                        }
                        if (
                          ((s[(e + 16) >> 2] =
                            u[(e + 31) | 0] + ((u[(e + 23) | 0] + 4) | 0)),
                          (i = e),
                          (d = $(s[(e + 16) >> 2])),
                          (s[(i + 12) >> 2] = d),
                          !s[(e + 12) >> 2])
                        ) {
                          s[(e + 44) >> 2] = 3;
                          break t;
                        }
                        ((s[(e + 8) >> 2] = s[(e + 12) >> 2]),
                          (a[s[(e + 8) >> 2]] = u[(e + 30) | 0]),
                          (s[(e + 8) >> 2] = s[(e + 8) >> 2] + 1),
                          ae(
                            s[(e + 8) >> 2],
                            s[(e + 40) >> 2],
                            u[(e + 23) | 0],
                          ),
                          (s[(e + 8) >> 2] = u[(e + 23) | 0] + s[(e + 8) >> 2]),
                          (s[(e + 4) >> 2] = u[(e + 31) | 0]),
                          (t = s[(e + 8) >> 2]),
                          (n = u[(e + 4) | 0] | (u[(e + 5) | 0] << 8)),
                          (a[t | 0] = n),
                          (a[(t + 1) | 0] = n >>> 8),
                          (a[(t + 2) | 0] = u[(e + 6) | 0]),
                          (s[(e + 8) >> 2] = s[(e + 8) >> 2] + 3),
                          ae(
                            s[(e + 8) >> 2],
                            s[(e + 24) >> 2],
                            u[(e + 31) | 0],
                          ),
                          (s[s[(e + 32) >> 2] >> 2] = s[(e + 16) >> 2]),
                          (s[s[(e + 36) >> 2] >> 2] = s[(e + 12) >> 2]),
                          (s[(e + 44) >> 2] = 0));
                      }
                      ((T = (e + 48) | 0),
                        (s[(o + 12) >> 2] = s[(e + 44) >> 2]));
                    }
                    return ((T = (o + 16) | 0), s[(o + 12) >> 2]);
                  }
                  function A(e, t, n) {
                    ((e = e | 0), (t = t | 0), (n = n | 0));
                    var r = 0,
                      o = 0,
                      a = 0,
                      i = 0,
                      l = 0;
                    ((a = (T + -64) | 0), (T = a), (o = 1));
                    e: {
                      if (j(e, t, 0) || ((o = 0), !t)) break e;
                      ((r = (T + -64) | 0),
                        (T = r),
                        (o = s[t >> 2]),
                        (i = s[(o - 4) >> 2]),
                        (l = s[(o - 8) >> 2]),
                        (s[(r + 20) >> 2] = 0),
                        (s[(r + 16) >> 2] = 1084),
                        (s[(r + 12) >> 2] = t),
                        (s[(r + 8) >> 2] = 1132),
                        (o = 0),
                        ie((r + 24) | 0, 39),
                        (t = (t + l) | 0));
                      t: {
                        if (j(i, 1132, 0)) {
                          ((s[(r + 56) >> 2] = 1),
                            Se[s[(s[i >> 2] + 20) >> 2]](
                              i,
                              (r + 8) | 0,
                              t,
                              t,
                              1,
                              0,
                            ),
                            (o = s[(r + 32) >> 2] == 1 ? t : 0));
                          break t;
                        }
                        Se[s[(s[i >> 2] + 24) >> 2]](i, (r + 8) | 0, t, 1, 0);
                        n: switch (s[(r + 44) >> 2]) {
                          case 0:
                            o =
                              s[(r + 48) >> 2] == 1 &&
                              s[(r + 36) >> 2] == 1 &&
                              s[(r + 40) >> 2] == 1
                                ? s[(r + 28) >> 2]
                                : 0;
                            break t;
                          case 1:
                            break n;
                          default:
                            break t;
                        }
                        if (
                          s[(r + 48) >> 2] |
                            (s[(r + 36) >> 2] != 1) |
                            (s[(r + 40) >> 2] != 1) &&
                          s[(r + 32) >> 2] != 1
                        )
                          break t;
                        o = s[(r + 24) >> 2];
                      }
                      if (((T = (r - -64) | 0), (t = o), (o = 0), !t)) break e;
                      (ie((a + 8) | 4, 52),
                        (s[(a + 56) >> 2] = 1),
                        (s[(a + 20) >> 2] = -1),
                        (s[(a + 16) >> 2] = e),
                        (s[(a + 8) >> 2] = t),
                        Se[s[(s[t >> 2] + 28) >> 2]](
                          t,
                          (a + 8) | 0,
                          s[n >> 2],
                          1,
                        ),
                        (e = s[(a + 32) >> 2]),
                        (e | 0) == 1 && (s[n >> 2] = s[(a + 24) >> 2]),
                        (o = (e | 0) == 1));
                    }
                    return ((e = o), (T = (a - -64) | 0), e | 0);
                  }
                  function F(e, t, n) {
                    var r = 0,
                      o = 0,
                      a = 0,
                      i = 0;
                    if (
                      ((r = (e + 4) | 0),
                      (o = (((r + t) | 0) - 1) & (0 - t)),
                      (t = s[e >> 2]),
                      (o + n) >>> 0 <= (((t + e) | 0) - 4) >>> 0)
                    ) {
                      ((a = s[(e + 4) >> 2]),
                        (s[(a + 8) >> 2] = s[(e + 8) >> 2]),
                        (s[(s[(e + 8) >> 2] + 4) >> 2] = a),
                        (r | 0) != (o | 0) &&
                          ((o = (o - r) | 0),
                          (a = (e - (s[(e - 4) >> 2] & -2)) | 0),
                          (r = (o + s[a >> 2]) | 0),
                          (s[a >> 2] = r),
                          (s[(((a + (r & -4)) | 0) - 4) >> 2] = r),
                          (e = (e + o) | 0),
                          (t = (t - o) | 0),
                          (s[e >> 2] = t)));
                      e: {
                        if ((n + 24) >>> 0 <= t >>> 0) {
                          ((r = (((e + n) | 0) + 8) | 0),
                            (t = (((t - n) | 0) - 8) | 0),
                            (s[r >> 2] = t),
                            (s[(((r + (t & -4)) | 0) - 4) >> 2] = t | 1),
                            (i = r),
                            (a = (s[r >> 2] - 8) | 0));
                          t: {
                            if (a >>> 0 <= 127) {
                              o = (((a >>> 3) | 0) - 1) | 0;
                              break t;
                            }
                            if (
                              ((t = h(a)),
                              (o =
                                (((((a >>> (29 - t)) ^ 4) - (t << 2)) | 0) +
                                  110) |
                                0),
                              a >>> 0 <= 4095)
                            )
                              break t;
                            ((t =
                              (((((a >>> (30 - t)) ^ 2) - (t << 1)) | 0) + 71) |
                              0),
                              (o = t >>> 0 < 63 ? t : 63));
                          }
                          ((t = o),
                            (o = t << 4),
                            (s[(i + 4) >> 2] = o + 1376),
                            (o = (o + 1384) | 0),
                            (s[(r + 8) >> 2] = s[o >> 2]),
                            (s[o >> 2] = r),
                            (s[(s[(r + 8) >> 2] + 4) >> 2] = r),
                            (o = s[603]),
                            (r = t & 31),
                            (t & 63) >>> 0 >= 32
                              ? ((t = 1 << r), (i = 0))
                              : ((t = ((1 << r) - 1) & (1 >>> (32 - r))),
                                (i = 1 << r)),
                            (s[602] = i | s[602]),
                            (s[603] = t | o),
                            (t = (n + 8) | 0),
                            (s[e >> 2] = t),
                            (s[((((t & -4) + e) | 0) - 4) >> 2] = t));
                          break e;
                        }
                        s[(((e + t) | 0) - 4) >> 2] = t;
                      }
                      e = (e + 4) | 0;
                    } else e = 0;
                    return e;
                  }
                  function O(e) {
                    var t = 0,
                      n = 0,
                      r = 0,
                      o = 0,
                      a = 0;
                    if (e) {
                      ((n = (e - 4) | 0),
                        (o = s[n >> 2]),
                        (r = o),
                        (t = n),
                        (a = s[(e - 8) >> 2]),
                        (e = a & -2),
                        (e | 0) != (a | 0) &&
                          ((t = (n - e) | 0),
                          (r = s[(t + 4) >> 2]),
                          (s[(r + 8) >> 2] = s[(t + 8) >> 2]),
                          (s[(s[(t + 8) >> 2] + 4) >> 2] = r),
                          (r = (e + o) | 0)),
                        (e = (n + o) | 0),
                        (n = s[e >> 2]),
                        (n | 0) != s[(((e + n) | 0) - 4) >> 2] &&
                          ((o = s[(e + 4) >> 2]),
                          (s[(o + 8) >> 2] = s[(e + 8) >> 2]),
                          (s[(s[(e + 8) >> 2] + 4) >> 2] = o),
                          (r = (r + n) | 0)),
                        (s[t >> 2] = r),
                        (s[((((r & -4) + t) | 0) - 4) >> 2] = r | 1),
                        (a = t),
                        (r = (s[t >> 2] - 8) | 0));
                      e: {
                        if (r >>> 0 <= 127) {
                          e = (((r >>> 3) | 0) - 1) | 0;
                          break e;
                        }
                        if (
                          ((o = h(r)),
                          (e =
                            (((((r >>> (29 - o)) ^ 4) - (o << 2)) | 0) + 110) |
                            0),
                          r >>> 0 <= 4095)
                        )
                          break e;
                        ((e =
                          (((((r >>> (30 - o)) ^ 2) - (o << 1)) | 0) + 71) | 0),
                          (e = e >>> 0 < 63 ? e : 63));
                      }
                      ((n = e << 4),
                        (s[(a + 4) >> 2] = n + 1376),
                        (n = (n + 1384) | 0),
                        (s[(t + 8) >> 2] = s[n >> 2]),
                        (s[n >> 2] = t),
                        (s[(s[(t + 8) >> 2] + 4) >> 2] = t),
                        (n = s[603]),
                        (t = e & 31),
                        (e & 63) >>> 0 >= 32
                          ? ((e = 1 << t), (t = 0))
                          : ((e = ((1 << t) - 1) & (1 >>> (32 - t))),
                            (t = 1 << t)),
                        (s[602] = t | s[602]),
                        (s[603] = e | n));
                    }
                  }
                  function B(e, t, n) {
                    ((e = e | 0), (t = t | 0), (n = n | 0));
                    var r = 0,
                      o = 0,
                      i = 0;
                    ((r = (T - 48) | 0),
                      (T = r),
                      (s[(r + 40) >> 2] = e),
                      (s[(r + 36) >> 2] = t),
                      (s[(r + 32) >> 2] = n));
                    e: {
                      if (!(s[(r + 32) >> 2] && s[(r + 36) >> 2])) {
                        s[(r + 44) >> 2] = 5;
                        break e;
                      }
                      if (d[(r + 40) >> 2] > 4) {
                        s[(r + 44) >> 2] = 8;
                        break e;
                      }
                      if (
                        ((s[(r + 28) >> 2] = 5),
                        (o = r),
                        (i = $(s[(r + 28) >> 2])),
                        (s[(o + 24) >> 2] = i),
                        !s[(r + 24) >> 2])
                      ) {
                        s[(r + 44) >> 2] = 3;
                        break e;
                      }
                      ((s[(r + 20) >> 2] = s[(r + 24) >> 2]),
                        (a[(r + 19) | 0] = 3),
                        (a[s[(r + 20) >> 2]] = u[(r + 19) | 0]),
                        (s[(r + 20) >> 2] = s[(r + 20) >> 2] + 1),
                        (s[(r + 12) >> 2] = 1),
                        (e = s[(r + 20) >> 2]),
                        (t = u[(r + 12) | 0] | (u[(r + 13) | 0] << 8)),
                        (a[e | 0] = t),
                        (a[(e + 1) | 0] = t >>> 8),
                        (a[(e + 2) | 0] = u[(r + 14) | 0]),
                        (s[(r + 20) >> 2] = s[(r + 20) >> 2] + 3),
                        (a[(r + 11) | 0] = s[(r + 40) >> 2]),
                        (a[s[(r + 20) >> 2]] = u[(r + 11) | 0]),
                        (s[s[(r + 36) >> 2] >> 2] = s[(r + 24) >> 2]),
                        (s[s[(r + 32) >> 2] >> 2] = s[(r + 28) >> 2]),
                        (s[(r + 44) >> 2] = 0));
                    }
                    return ((T = (r + 48) | 0), s[(r + 44) >> 2]);
                  }
                  function W(e, t, n, r, o) {
                    if (
                      ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0),
                      j(e, s[(t + 8) >> 2], o))
                    ) {
                      se(t, n, r);
                      return;
                    }
                    e: {
                      if (j(e, s[t >> 2], o)) {
                        if (
                          !(
                            s[(t + 20) >> 2] != (n | 0) &&
                            s[(t + 16) >> 2] != (n | 0)
                          )
                        ) {
                          if ((r | 0) != 1) break e;
                          s[(t + 32) >> 2] = 1;
                          return;
                        }
                        s[(t + 32) >> 2] = r;
                        t: {
                          if (s[(t + 44) >> 2] == 4) break t;
                          if (
                            ((l[(t + 52) >> 1] = 0),
                            (e = s[(e + 8) >> 2]),
                            Se[s[(s[e >> 2] + 20) >> 2]](e, t, n, n, 1, o),
                            u[(t + 53) | 0])
                          ) {
                            if (((s[(t + 44) >> 2] = 3), !u[(t + 52) | 0]))
                              break t;
                            break e;
                          }
                          s[(t + 44) >> 2] = 4;
                        }
                        if (
                          ((s[(t + 20) >> 2] = n),
                          (s[(t + 40) >> 2] = s[(t + 40) >> 2] + 1),
                          (s[(t + 36) >> 2] != 1) | (s[(t + 24) >> 2] != 2))
                        )
                          break e;
                        a[(t + 54) | 0] = 1;
                        return;
                      }
                      ((e = s[(e + 8) >> 2]),
                        Se[s[(s[e >> 2] + 24) >> 2]](e, t, n, r, o));
                    }
                  }
                  function q(e, t, n, r, o) {
                    var a = 0;
                    ((a = (T - 32) | 0),
                      (T = a),
                      (s[(a + 24) >> 2] = e),
                      (s[(a + 20) >> 2] = t),
                      (s[(a + 16) >> 2] = n),
                      (s[(a + 12) >> 2] = r),
                      (s[(a + 8) >> 2] = o));
                    e: {
                      if (d[(a + 16) >> 2] < 1) {
                        s[(a + 28) >> 2] = 9;
                        break e;
                      }
                      if (
                        ((s[s[(a + 8) >> 2] >> 2] = s[(a + 16) >> 2] - 1),
                        d[s[(a + 20) >> 2] >> 2] < d[s[(a + 8) >> 2] >> 2])
                      ) {
                        s[(a + 28) >> 2] = 1;
                        break e;
                      }
                      if (
                        ((e = $(s[s[(a + 8) >> 2] >> 2])),
                        (s[s[(a + 12) >> 2] >> 2] = e),
                        !s[s[(a + 12) >> 2] >> 2])
                      ) {
                        s[(a + 28) >> 2] = 3;
                        break e;
                      }
                      (ae(
                        s[s[(a + 12) >> 2] >> 2],
                        s[s[(a + 24) >> 2] >> 2],
                        s[s[(a + 8) >> 2] >> 2],
                      ),
                        (e = s[(a + 24) >> 2]),
                        (s[e >> 2] = s[s[(a + 8) >> 2] >> 2] + s[e >> 2]),
                        (e = s[(a + 20) >> 2]),
                        (s[e >> 2] = s[e >> 2] - s[s[(a + 8) >> 2] >> 2]),
                        (s[(a + 28) >> 2] = 0));
                    }
                    return ((T = (a + 32) | 0), s[(a + 28) >> 2]);
                  }
                  function U(e, t, n) {
                    ((e = e | 0), (t = t | 0), (n = n | 0));
                    var r = 0,
                      o = 0,
                      i = 0;
                    ((r = (T - 32) | 0),
                      (T = r),
                      (l[(r + 26) >> 1] = e),
                      (s[(r + 20) >> 2] = t),
                      (s[(r + 16) >> 2] = n),
                      (s[s[(r + 16) >> 2] >> 2] = 3),
                      (o = r),
                      (i = $(s[s[(r + 16) >> 2] >> 2])),
                      (s[(o + 12) >> 2] = i));
                    e: {
                      if (!s[(r + 12) >> 2]) {
                        s[(r + 28) >> 2] = 3;
                        break e;
                      }
                      ((s[s[(r + 20) >> 2] >> 2] = s[(r + 12) >> 2]),
                        (a[(r + 11) | 0] = 14),
                        (a[s[(r + 12) >> 2]] = u[(r + 11) | 0]),
                        (s[(r + 12) >> 2] = s[(r + 12) >> 2] + 1),
                        (e = s[(r + 12) >> 2]),
                        (t = u[(r + 26) | 0] | (u[(r + 27) | 0] << 8)),
                        (a[e | 0] = t),
                        (a[(e + 1) | 0] = t >>> 8),
                        (s[(r + 28) >> 2] = 0));
                    }
                    return ((T = (r + 32) | 0), s[(r + 28) >> 2]);
                  }
                  function V(e, t) {
                    var n = 0;
                    for (
                      n = (T - 16) | 0,
                        T = n,
                        s[(n + 12) >> 2] = e,
                        s[(n + 8) >> 2] = t,
                        s[(n + 4) >> 2] = 0;
                      ;
                    ) {
                      if (d[(n + 4) >> 2] < d[(n + 8) >> 2]) {
                        s[n >> 2] = s[(n + 12) >> 2] + _(s[(n + 4) >> 2], 20);
                        e: {
                          if (!(s[s[n >> 2] >> 2] & 15)) {
                            O(s[(s[n >> 2] + 8) >> 2]);
                            break e;
                          }
                          t: {
                            if ((s[s[n >> 2] >> 2] & 15) == 5) {
                              O(s[(s[n >> 2] + 8) >> 2]);
                              break t;
                            }
                            (s[s[n >> 2] >> 2] & 15) == 6 &&
                              O(s[(s[n >> 2] + 12) >> 2]);
                          }
                        }
                        s[(n + 4) >> 2] = s[(n + 4) >> 2] + 1;
                        continue;
                      }
                      break;
                    }
                    (O(s[(n + 12) >> 2]), (T = (n + 16) | 0));
                  }
                  function H(e, t, n, r) {
                    a[(e + 53) | 0] = 1;
                    e: {
                      if (s[(e + 4) >> 2] != (n | 0)) break e;
                      if (((a[(e + 52) | 0] = 1), (n = s[(e + 16) >> 2]), !n)) {
                        if (
                          ((s[(e + 36) >> 2] = 1),
                          (s[(e + 24) >> 2] = r),
                          (s[(e + 16) >> 2] = t),
                          ((r | 0) != 1) | (s[(e + 48) >> 2] != 1))
                        )
                          break e;
                        a[(e + 54) | 0] = 1;
                        return;
                      }
                      if ((t | 0) == (n | 0)) {
                        if (
                          ((n = s[(e + 24) >> 2]),
                          (n | 0) == 2 && ((s[(e + 24) >> 2] = r), (n = r)),
                          (s[(e + 48) >> 2] != 1) | ((n | 0) != 1))
                        )
                          break e;
                        a[(e + 54) | 0] = 1;
                        return;
                      }
                      ((a[(e + 54) | 0] = 1),
                        (s[(e + 36) >> 2] = s[(e + 36) >> 2] + 1));
                    }
                  }
                  function G(e, t, n, r) {
                    var o = 0;
                    ((o = (T - 32) | 0),
                      (s[(o + 24) >> 2] = e),
                      (s[(o + 20) >> 2] = t),
                      (s[(o + 16) >> 2] = n),
                      (s[(o + 12) >> 2] = r),
                      (a[(o + 11) | 0] = 0));
                    e: {
                      if (d[s[(o + 20) >> 2] >> 2] < 1) {
                        s[(o + 28) >> 2] = 1;
                        break e;
                      }
                      ((a[(o + 11) | 0] = u[s[s[(o + 24) >> 2] >> 2]]),
                        (e = s[(o + 24) >> 2]),
                        (s[e >> 2] = s[e >> 2] + 1),
                        (e = s[(o + 20) >> 2]),
                        (s[e >> 2] = s[e >> 2] - 1),
                        (a[s[(o + 16) >> 2]] = (u[(o + 11) | 0] & 128) == 128),
                        (a[s[(o + 12) >> 2]] = u[(o + 11) | 0] & 127),
                        (s[(o + 28) >> 2] = 0));
                    }
                    return s[(o + 28) >> 2];
                  }
                  function z(e, t, n, r, o) {
                    if (
                      ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0),
                      j(e, s[(t + 8) >> 2], o))
                    ) {
                      se(t, n, r);
                      return;
                    }
                    e: {
                      if (!j(e, s[t >> 2], o)) break e;
                      if (
                        !(
                          s[(t + 20) >> 2] != (n | 0) &&
                          s[(t + 16) >> 2] != (n | 0)
                        )
                      ) {
                        if ((r | 0) != 1) break e;
                        s[(t + 32) >> 2] = 1;
                        return;
                      }
                      ((s[(t + 20) >> 2] = n),
                        (s[(t + 32) >> 2] = r),
                        (s[(t + 40) >> 2] = s[(t + 40) >> 2] + 1),
                        (s[(t + 36) >> 2] != 1) | (s[(t + 24) >> 2] != 2) ||
                          (a[(t + 54) | 0] = 1),
                        (s[(t + 44) >> 2] = 4));
                    }
                  }
                  function j(e, t, n) {
                    var r = 0;
                    if (!n) return s[(e + 4) >> 2] == s[(t + 4) >> 2];
                    if ((e | 0) == (t | 0)) return 1;
                    ((n = s[(e + 4) >> 2]),
                      (e = u[n | 0]),
                      (t = s[(t + 4) >> 2]),
                      (r = u[t | 0]));
                    e: {
                      if (!e | ((r | 0) != (e | 0))) break e;
                      for (;;) {
                        if (((r = u[(t + 1) | 0]), (e = u[(n + 1) | 0]), !e))
                          break e;
                        if (
                          ((t = (t + 1) | 0),
                          (n = (n + 1) | 0),
                          (e | 0) != (r | 0))
                        )
                          break;
                      }
                    }
                    return (e | 0) == (r | 0);
                  }
                  function K(e, t) {
                    ((e = e | 0), (t = t | 0));
                    var n = 0,
                      r = 0,
                      o = 0;
                    ((n = (T - 32) | 0),
                      (T = n),
                      (s[(n + 24) >> 2] = e),
                      (s[(n + 20) >> 2] = t),
                      (r = n),
                      (o = $(1)),
                      (s[(r + 16) >> 2] = o));
                    e: {
                      if (!s[(n + 16) >> 2]) {
                        s[(n + 28) >> 2] = 3;
                        break e;
                      }
                      ((a[(n + 15) | 0] = 9),
                        (a[s[(n + 16) >> 2]] = u[(n + 15) | 0]),
                        (s[s[(n + 24) >> 2] >> 2] = s[(n + 16) >> 2]),
                        (s[s[(n + 20) >> 2] >> 2] = 1),
                        (s[(n + 28) >> 2] = 0));
                    }
                    return ((T = (n + 32) | 0), s[(n + 28) >> 2]);
                  }
                  function Q(e, t) {
                    ((e = e | 0), (t = t | 0));
                    var n = 0,
                      r = 0,
                      o = 0;
                    ((n = (T - 32) | 0),
                      (T = n),
                      (s[(n + 24) >> 2] = e),
                      (s[(n + 20) >> 2] = t),
                      (r = n),
                      (o = $(1)),
                      (s[(r + 16) >> 2] = o));
                    e: {
                      if (!s[(n + 16) >> 2]) {
                        s[(n + 28) >> 2] = 3;
                        break e;
                      }
                      ((a[(n + 15) | 0] = 10),
                        (a[s[(n + 16) >> 2]] = u[(n + 15) | 0]),
                        (s[s[(n + 24) >> 2] >> 2] = s[(n + 16) >> 2]),
                        (s[s[(n + 20) >> 2] >> 2] = 1),
                        (s[(n + 28) >> 2] = 0));
                    }
                    return ((T = (n + 32) | 0), s[(n + 28) >> 2]);
                  }
                  function X(e, t) {
                    ((e = e | 0), (t = t | 0));
                    var n = 0,
                      r = 0,
                      o = 0;
                    ((n = (T - 32) | 0),
                      (T = n),
                      (s[(n + 24) >> 2] = e),
                      (s[(n + 20) >> 2] = t),
                      (r = n),
                      (o = $(1)),
                      (s[(r + 16) >> 2] = o));
                    e: {
                      if (!s[(n + 16) >> 2]) {
                        s[(n + 28) >> 2] = 3;
                        break e;
                      }
                      ((a[(n + 15) | 0] = 2),
                        (a[s[(n + 16) >> 2]] = u[(n + 15) | 0]),
                        (s[s[(n + 24) >> 2] >> 2] = s[(n + 16) >> 2]),
                        (s[s[(n + 20) >> 2] >> 2] = 1),
                        (s[(n + 28) >> 2] = 0));
                    }
                    return ((T = (n + 32) | 0), s[(n + 28) >> 2]);
                  }
                  function Y(e, t) {
                    ((e = e | 0), (t = t | 0));
                    var n = 0,
                      r = 0,
                      o = 0;
                    ((n = (T - 32) | 0),
                      (T = n),
                      (s[(n + 24) >> 2] = e),
                      (s[(n + 20) >> 2] = t),
                      (r = n),
                      (o = $(1)),
                      (s[(r + 16) >> 2] = o));
                    e: {
                      if (!s[(n + 16) >> 2]) {
                        s[(n + 28) >> 2] = 3;
                        break e;
                      }
                      ((a[(n + 15) | 0] = 4),
                        (a[s[(n + 16) >> 2]] = u[(n + 15) | 0]),
                        (s[s[(n + 24) >> 2] >> 2] = s[(n + 16) >> 2]),
                        (s[s[(n + 20) >> 2] >> 2] = 1),
                        (s[(n + 28) >> 2] = 0));
                    }
                    return ((T = (n + 32) | 0), s[(n + 28) >> 2]);
                  }
                  function J(e) {
                    var t = 0;
                    ((t = (T - 16) | 0),
                      (T = t),
                      (s[(t + 12) >> 2] = e),
                      (e = 1));
                    e: {
                      if (
                        ee(s[(t + 12) >> 2]) & 1 ||
                        ((e = 1), s[(t + 12) >> 2] == 15) ||
                        ((e = 1), s[(t + 12) >> 2] == 13) ||
                        ((e = 1), s[(t + 12) >> 2] == 12)
                      )
                        break e;
                      e = s[(t + 12) >> 2] == 14;
                    }
                    return ((T = (t + 16) | 0), e);
                  }
                  function Z(e, t, n) {
                    var r = 0;
                    if (((r = s[(e + 16) >> 2]), !r)) {
                      ((s[(e + 36) >> 2] = 1),
                        (s[(e + 24) >> 2] = n),
                        (s[(e + 16) >> 2] = t));
                      return;
                    }
                    e: {
                      if ((t | 0) == (r | 0)) {
                        if (s[(e + 24) >> 2] != 2) break e;
                        s[(e + 24) >> 2] = n;
                        return;
                      }
                      ((a[(e + 54) | 0] = 1),
                        (s[(e + 24) >> 2] = 2),
                        (s[(e + 36) >> 2] = s[(e + 36) >> 2] + 1));
                    }
                  }
                  function ee(e) {
                    var t = 0;
                    ((t = (T - 16) | 0), (s[(t + 12) >> 2] = e), (e = 1));
                    e: {
                      if (
                        s[(t + 12) >> 2] == 5 ||
                        ((e = 1), s[(t + 12) >> 2] == 6) ||
                        ((e = 1), s[(t + 12) >> 2] == 7)
                      )
                        break e;
                      e = s[(t + 12) >> 2] == 8;
                    }
                    return e;
                  }
                  function te(e, t, n, r, o, a) {
                    if (
                      ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0),
                      (a = a | 0),
                      j(e, s[(t + 8) >> 2], a))
                    ) {
                      H(t, n, r, o);
                      return;
                    }
                    ((e = s[(e + 8) >> 2]),
                      Se[s[(s[e >> 2] + 20) >> 2]](e, t, n, r, o, a));
                  }
                  function ne() {
                    for (
                      var e = 0, t = 0, n = 0;
                      (t = e << 4),
                        (n = (t + 1376) | 0),
                        (s[(t + 1380) >> 2] = n),
                        (s[(t + 1384) >> 2] = n),
                        (e = (e + 1) | 0),
                        (e | 0) != 64;
                    );
                    M(48);
                  }
                  function re(e, t, n, r) {
                    if (
                      ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      j(e, s[(t + 8) >> 2], 0))
                    ) {
                      Z(t, n, r);
                      return;
                    }
                    ((e = s[(e + 8) >> 2]),
                      Se[s[(s[e >> 2] + 28) >> 2]](e, t, n, r));
                  }
                  function oe(e, t, n, r, o, a) {
                    ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      (o = o | 0),
                      (a = a | 0),
                      j(e, s[(t + 8) >> 2], a) && H(t, n, r, o));
                  }
                  function ae(e, t, n) {
                    if (n)
                      for (
                        ;
                        (a[e | 0] = u[t | 0]),
                          (e = (e + 1) | 0),
                          (t = (t + 1) | 0),
                          (n = (n - 1) | 0),
                          !!n;
                      );
                  }
                  function ie(e, t) {
                    if (t)
                      for (
                        ;
                        (a[e | 0] = 0),
                          (e = (e + 1) | 0),
                          (t = (t - 1) | 0),
                          !!t;
                      );
                  }
                  function le(e, t, n, r) {
                    ((e = e | 0),
                      (t = t | 0),
                      (n = n | 0),
                      (r = r | 0),
                      j(e, s[(t + 8) >> 2], 0) && Z(t, n, r));
                  }
                  function se(e, t, n) {
                    (s[(e + 28) >> 2] == 1) | (s[(e + 4) >> 2] != (t | 0)) ||
                      (s[(e + 28) >> 2] = n);
                  }
                  function ue(e, t) {
                    return ((e = e | 0), (t = t | 0), (_(t, 20) + e) | 0);
                  }
                  function ce(e) {
                    return ((e = e | 0), (c[(e + 8) >> 1] >>> 1) | 0);
                  }
                  function de(e) {
                    return ((e = e | 0), l[(e + 8) >> 1] & 1);
                  }
                  function me(e) {
                    return ((e = e | 0), s[(e + 12) >> 2]);
                  }
                  function pe(e) {
                    return ((e = e | 0), s[e >> 2] & 15);
                  }
                  function _e(e) {
                    return ((e = e | 0), s[(e + 16) >> 2]);
                  }
                  function fe(e) {
                    return ((e = e | 0), c[(e + 4) >> 1]);
                  }
                  function ge(e) {
                    return ((e = e | 0), s[(e + 8) >> 2]);
                  }
                  function he(e) {
                    return ((e = e | 0), u[(e + 4) | 0]);
                  }
                  function ye(e) {
                    return ((e = e | 0), e | 0);
                  }
                  function Ce(e) {
                    return $(e);
                  }
                  function be(e) {
                    ((e = e | 0), O(e));
                  }
                  function ve(e) {
                    e = e | 0;
                  }
                  ((n = u), i(t));
                  var Se = e([
                    null,
                    ye,
                    be,
                    ve,
                    ve,
                    A,
                    oe,
                    z,
                    le,
                    be,
                    te,
                    W,
                    re,
                  ]);
                  function Re() {
                    return (o.byteLength / 65536) | 0;
                  }
                  function Le(e) {
                    e = e | 0;
                    var t = Re() | 0,
                      i = (t + e) | 0;
                    if (t < i && i < 65536) {
                      var f = new ArrayBuffer(_(i, 65536)),
                        g = new Int8Array(f);
                      (g.set(a),
                        (a = new Int8Array(f)),
                        (l = new Int16Array(f)),
                        (s = new Int32Array(f)),
                        (u = new Uint8Array(f)),
                        (c = new Uint16Array(f)),
                        (d = new Uint32Array(f)),
                        (m = new Float32Array(f)),
                        (p = new Float64Array(f)),
                        (o = f),
                        (r.buffer = o),
                        (n = u));
                    }
                    return t;
                  }
                  return {
                    c: ne,
                    d: Ce,
                    e: be,
                    f: X,
                    g: Y,
                    h: B,
                    i: N,
                    j: U,
                    k: P,
                    l: w,
                    m: K,
                    n: Q,
                    o: x,
                    p: pe,
                    q: he,
                    r: ue,
                    s: fe,
                    t: ge,
                    u: me,
                    v: me,
                    w: _e,
                    x: ce,
                    y: de,
                    z: ce,
                    A: Se,
                  };
                }
                return l(t);
              })(he);
            },
            instantiate: function (t, n) {
              return {
                then: function (n) {
                  var e = new S.Module(t);
                  n({ instance: new S.Instance(e) });
                },
              };
            },
            RuntimeError: Error,
          };
        ((b = []),
          typeof S != "object" && ne("no native wasm support detected"));
        var R,
          L = !1,
          E;
        function k(e, t) {
          e || ne("Assertion failed: " + t);
        }
        function I(e, t) {
          return (e % t > 0 && (e += t - (e % t)), e);
        }
        var T, D, x, $, P, N, M, w, A;
        function F(e) {
          ((T = e),
            (t.HEAP8 = D = new Int8Array(e)),
            (t.HEAP16 = $ = new Int16Array(e)),
            (t.HEAP32 = N = new Int32Array(e)),
            (t.HEAPU8 = x = new Uint8Array(e)),
            (t.HEAPU16 = P = new Uint16Array(e)),
            (t.HEAPU32 = M = new Uint32Array(e)),
            (t.HEAPF32 = w = new Float32Array(e)),
            (t.HEAPF64 = A = new Float64Array(e)));
        }
        var O = t.INITIAL_MEMORY || 2097152;
        (t.wasmMemory
          ? (R = t.wasmMemory)
          : (R = new S.Memory({ initial: O / 65536, maximum: 32768 })),
          R && (T = R.buffer),
          (O = T.byteLength),
          F(T));
        var B,
          W = [],
          q = [],
          U = [],
          V = !1;
        function H() {
          if (t.preRun)
            for (
              typeof t.preRun == "function" && (t.preRun = [t.preRun]);
              t.preRun.length;
            )
              j(t.preRun.shift());
          ue(W);
        }
        function G() {
          ((V = !0), ue(q));
        }
        function z() {
          if (t.postRun)
            for (
              typeof t.postRun == "function" && (t.postRun = [t.postRun]);
              t.postRun.length;
            )
              Q(t.postRun.shift());
          ue(U);
        }
        function j(e) {
          W.unshift(e);
        }
        function K(e) {
          q.unshift(e);
        }
        function Q(e) {
          U.unshift(e);
        }
        if (
          ((!Math.imul || Math.imul(4294967295, 5) !== -5) &&
            (Math.imul = function (t, n) {
              var e = t >>> 16,
                r = t & 65535,
                o = n >>> 16,
                a = n & 65535;
              return (r * a + ((e * a + r * o) << 16)) | 0;
            }),
          !Math.fround)
        ) {
          var X = new Float32Array(1);
          Math.fround = function (e) {
            return ((X[0] = e), X[0]);
          };
        }
        (Math.clz32 ||
          (Math.clz32 = function (e) {
            var t = 32,
              n = e >> 16;
            return (
              n && ((t -= 16), (e = n)),
              (n = e >> 8),
              n && ((t -= 8), (e = n)),
              (n = e >> 4),
              n && ((t -= 4), (e = n)),
              (n = e >> 2),
              n && ((t -= 2), (e = n)),
              (n = e >> 1),
              n ? t - 2 : t - e
            );
          }),
          Math.trunc ||
            (Math.trunc = function (e) {
              return e < 0 ? Math.ceil(e) : Math.floor(e);
            }));
        var Y = 0,
          J = null,
          Z = null;
        function ee(e) {
          (Y++, t.monitorRunDependencies && t.monitorRunDependencies(Y));
        }
        function te(e) {
          if (
            (Y--,
            t.monitorRunDependencies && t.monitorRunDependencies(Y),
            Y == 0 && (J !== null && (clearInterval(J), (J = null)), Z))
          ) {
            var n = Z;
            ((Z = null), n());
          }
        }
        ((t.preloadedImages = {}), (t.preloadedAudios = {}));
        function ne(e) {
          (t.onAbort && t.onAbort(e),
            (e += ""),
            C(e),
            (L = !0),
            (E = 1),
            (e =
              "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."));
          var n = new S.RuntimeError(e);
          throw (o(n), n);
        }
        var re = "data:application/octet-stream;base64,";
        function oe(e) {
          return e.startsWith(re);
        }
        var ae = "dgwcppbridge.wasm";
        oe(ae) || (ae = p(ae));
        function ie(e) {
          try {
            if (e == ae && b) return new Uint8Array(b);
            var t = ge(e);
            if (t) return t;
            if (g) return g(e);
            throw "both async and sync fetching of the wasm failed";
          } catch (e) {
            ne(e);
          }
        }
        function le() {
          return !b && (c || d) && typeof fetch == "function"
            ? fetch(ae, { credentials: "same-origin" })
                .then(function (e) {
                  if (!e.ok)
                    throw "failed to load wasm binary file at '" + ae + "'";
                  return e.arrayBuffer();
                })
                .catch(function () {
                  return ie(ae);
                })
            : n.resolve().then(function () {
                return ie(ae);
              });
        }
        function se() {
          var e = { a: he };
          function n(e, n) {
            var r = e.exports;
            ((t.asm = r), (B = t.asm.A), K(t.asm.c), te("wasm-instantiate"));
          }
          ee("wasm-instantiate");
          function r(e) {
            n(e.instance);
          }
          function a(t) {
            return le()
              .then(function (t) {
                var n = S.instantiate(t, e);
                return n;
              })
              .then(t, function (e) {
                (C("failed to asynchronously prepare wasm: " + e), ne(e));
              });
          }
          function i() {
            return !b &&
              typeof S.instantiateStreaming == "function" &&
              !oe(ae) &&
              typeof fetch == "function"
              ? fetch(ae, { credentials: "same-origin" }).then(function (t) {
                  var n = S.instantiateStreaming(t, e);
                  return n.then(r, function (e) {
                    return (
                      C("wasm streaming compile failed: " + e),
                      C("falling back to ArrayBuffer instantiation"),
                      a(r)
                    );
                  });
                })
              : a(r);
          }
          if (t.instantiateWasm)
            try {
              var l = t.instantiateWasm(e, n);
              return l;
            } catch (e) {
              return (
                C("Module.instantiateWasm callback failed with error: " + e),
                !1
              );
            }
          return (i().catch(o), {});
        }
        function ue(e) {
          for (; e.length > 0; ) {
            var n = e.shift();
            if (typeof n == "function") {
              n(t);
              continue;
            }
            var r = n.func;
            typeof r == "number"
              ? n.arg === void 0
                ? B.get(r)()
                : B.get(r)(n.arg)
              : r(n.arg === void 0 ? null : n.arg);
          }
        }
        function ce(e) {
          try {
            return (R.grow((e - T.byteLength + 65535) >>> 16), F(R.buffer), 1);
          } catch (e) {}
        }
        function de(e) {
          var t = x.length;
          e = e >>> 0;
          var n = 2147483648;
          if (e > n) return !1;
          for (var r = 1; r <= 4; r *= 2) {
            var o = t * (1 + 0.2 / r);
            o = Math.min(o, e + 100663296);
            var a = Math.min(n, I(Math.max(e, o), 65536)),
              i = ce(a);
            if (i) return !0;
          }
          return !1;
        }
        var me = !1;
        function pe(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            (r > 255 && (r &= 255), t.push(String.fromCharCode(r)));
          }
          return t.join("");
        }
        var _e =
          typeof atob == "function"
            ? atob
            : function (e) {
                var t =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  n = "",
                  r,
                  o,
                  a,
                  i,
                  l,
                  s,
                  u,
                  c = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do
                  ((i = t.indexOf(e.charAt(c++))),
                    (l = t.indexOf(e.charAt(c++))),
                    (s = t.indexOf(e.charAt(c++))),
                    (u = t.indexOf(e.charAt(c++))),
                    (r = (i << 2) | (l >> 4)),
                    (o = ((l & 15) << 4) | (s >> 2)),
                    (a = ((s & 3) << 6) | u),
                    (n = n + String.fromCharCode(r)),
                    s !== 64 && (n = n + String.fromCharCode(o)),
                    u !== 64 && (n = n + String.fromCharCode(a)));
                while (c < e.length);
                return n;
              };
        function fe(e) {
          try {
            for (
              var t = _e(e), n = new Uint8Array(t.length), r = 0;
              r < t.length;
              ++r
            )
              n[r] = t.charCodeAt(r);
            return n;
          } catch (e) {
            throw new Error("Converting base64 string to bytes failed.");
          }
        }
        function ge(e) {
          if (oe(e)) return fe(e.slice(re.length));
        }
        var he = { b: de, a: R },
          ye = se(),
          Ce = (t.___wasm_call_ctors = function () {
            return (Ce = t.___wasm_call_ctors = t.asm.c).apply(null, arguments);
          }),
          be = (t.__malloc = function () {
            return (be = t.__malloc = t.asm.d).apply(null, arguments);
          }),
          ve = (t.__free = function () {
            return (ve = t.__free = t.asm.e).apply(null, arguments);
          }),
          Se = (t.__DgwCodecEncodeEmpty = function () {
            return (Se = t.__DgwCodecEncodeEmpty = t.asm.f).apply(
              null,
              arguments,
            );
          }),
          Re = (t.__DgwCodecEncodeDeauth = function () {
            return (Re = t.__DgwCodecEncodeDeauth = t.asm.g).apply(
              null,
              arguments,
            );
          }),
          Le = (t.__DgwCodecEncodeDrain = function () {
            return (Le = t.__DgwCodecEncodeDrain = t.asm.h).apply(
              null,
              arguments,
            );
          }),
          Ee = (t.__DgwCodecEncodeStreamGroup_EstabStream = function () {
            return (Ee = t.__DgwCodecEncodeStreamGroup_EstabStream =
              t.asm.i).apply(null, arguments);
          }),
          ke = (t.__DgwCodecEncodeStreamGroup_EndOfData = function () {
            return (ke = t.__DgwCodecEncodeStreamGroup_EndOfData =
              t.asm.j).apply(null, arguments);
          }),
          Ie = (t.__DgwCodecEncodeStreamGroup_Data = function () {
            return (Ie = t.__DgwCodecEncodeStreamGroup_Data = t.asm.k).apply(
              null,
              arguments,
            );
          }),
          Te = (t.__DgwCodecEncodeStreamGroup_Ack = function () {
            return (Te = t.__DgwCodecEncodeStreamGroup_Ack = t.asm.l).apply(
              null,
              arguments,
            );
          }),
          De = (t.__DgwCodecEncodePing = function () {
            return (De = t.__DgwCodecEncodePing = t.asm.m).apply(
              null,
              arguments,
            );
          }),
          xe = (t.__DgwCodecEncodePong = function () {
            return (xe = t.__DgwCodecEncodePong = t.asm.n).apply(
              null,
              arguments,
            );
          }),
          $e = (t.__DgwCodecDecode = function () {
            return ($e = t.__DgwCodecDecode = t.asm.o).apply(null, arguments);
          }),
          Pe = (t.__getFrameType = function () {
            return (Pe = t.__getFrameType = t.asm.p).apply(null, arguments);
          }),
          Ne = (t.__getDrainReasonFromDrainFrame = function () {
            return (Ne = t.__getDrainReasonFromDrainFrame = t.asm.q).apply(
              null,
              arguments,
            );
          }),
          Me = (t.__getDGWFramePtr = function () {
            return (Me = t.__getDGWFramePtr = t.asm.r).apply(null, arguments);
          }),
          we = (t.__getStreamIdFromStreamGroupFrame = function () {
            return (we = t.__getStreamIdFromStreamGroupFrame = t.asm.s).apply(
              null,
              arguments,
            );
          }),
          Ae = (t.__getEncodedParamsFromEstablishStreamFrame = function () {
            return (Ae = t.__getEncodedParamsFromEstablishStreamFrame =
              t.asm.t).apply(null, arguments);
          }),
          Fe = (t.__getEncodedParamsSizeFromEstablishStreamFrame = function () {
            return (Fe = t.__getEncodedParamsSizeFromEstablishStreamFrame =
              t.asm.u).apply(null, arguments);
          }),
          Oe = (t.__getDataFromGroupedStreamDataFrame = function () {
            return (Oe = t.__getDataFromGroupedStreamDataFrame = t.asm.v).apply(
              null,
              arguments,
            );
          }),
          Be = (t.__getDataSizeFromGroupedStreamDataFrame = function () {
            return (Be = t.__getDataSizeFromGroupedStreamDataFrame =
              t.asm.w).apply(null, arguments);
          }),
          We = (t.__getAckIdFromGroupedStreamDataFrame = function () {
            return (We = t.__getAckIdFromGroupedStreamDataFrame =
              t.asm.x).apply(null, arguments);
          }),
          qe = (t.__getRequiresAckFromGroupedStreamDataFrame = function () {
            return (qe = t.__getRequiresAckFromGroupedStreamDataFrame =
              t.asm.y).apply(null, arguments);
          }),
          Ue = (t.__getAckIdFromGroupedStreamAckFrame = function () {
            return (Ue = t.__getAckIdFromGroupedStreamAckFrame = t.asm.z).apply(
              null,
              arguments,
            );
          }),
          Ve;
        Z = function e() {
          (Ve || He(), Ve || (Z = e));
        };
        function He(e) {
          if (((e = e || l), Y > 0 || (H(), Y > 0))) return;
          function n() {
            Ve ||
              ((Ve = !0),
              (t.calledRun = !0),
              !L &&
                (G(),
                r(t),
                t.onRuntimeInitialized && t.onRuntimeInitialized(),
                z()));
          }
          t.setStatus
            ? (t.setStatus("Running..."),
              setTimeout(function () {
                (setTimeout(function () {
                  t.setStatus("");
                }, 1),
                  n());
              }, 1))
            : n();
        }
        if (((t.run = He), t.preInit))
          for (
            typeof t.preInit == "function" && (t.preInit = [t.preInit]);
            t.preInit.length > 0;
          )
            t.preInit.pop()();
        return (He(), t.ready);
      };
    })();
    typeof i == "object" && typeof a == "object"
      ? (a.exports = e)
      : typeof define == "function" && define.amd
        ? define([], function () {
            return e;
          })
        : typeof i == "object" && (i.Module = e);
  },
  null,
);
