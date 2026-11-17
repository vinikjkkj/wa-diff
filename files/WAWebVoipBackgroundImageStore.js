__d(
  "WAWebVoipBackgroundImageStore",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebNoop",
    "WAWebVoipBackgroundPreview",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "wa-voip-backgrounds",
      m = "/wa-voip-backgrounds/list",
      p = "/wa-voip-backgrounds/image/",
      _ = "/wa-voip-backgrounds/preview/",
      f = "/wa-voip-backgrounds/used",
      g = "X-WA-Stored-At",
      h = "X-WA-Picture-Version",
      y = "3",
      C = "X-WA-Picture-Layout",
      b = "X-WA-Preview-Version",
      v = 12,
      S = 720 * 60 * 60 * 1e3,
      R = 10080 * 60 * 1e3,
      L = 2e3,
      E = (c || (c = n("Promise"))).resolve();
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return H(
            "read the list",
            null,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.match(m);
                  if (n == null) return null;
                  var r = re(JSON.parse(yield n.text()));
                  return r == null ||
                    r.locale !== e ||
                    !(Date.now() - r.storedAtMs < R)
                    ? null
                    : r.list;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length !== 0 &&
            (yield H(
              "store the list",
              void 0,
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (r) {
                    var o = { list: t, locale: e, storedAtMs: Date.now() };
                    yield r.put(m, new Response(JSON.stringify(o)));
                    var a = new Set(
                        t.map(function (e) {
                          var t = e.id;
                          return t;
                        }),
                      ),
                      i = function (t) {
                        return !a.has(t);
                      },
                      l = yield (c || (c = n("Promise"))).all([
                        G(r, p),
                        G(r, _),
                      ]),
                      s = l[0],
                      u = l[1];
                    yield c.all([j(r, p, s.filter(i)), j(r, _, u.filter(i))]);
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            ));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t === void 0 ? {} : t,
            i = a.countsAsUse,
            l = i === void 0 ? !0 : i;
          return H(
            "read a picture",
            null,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.match(p + e);
                  if (n == null) return null;
                  var a = Number(n.headers.get(g)),
                    i =
                      Date.now() - a < S && n.headers.get(h) === y
                        ? Z(ee(n.headers.get(C)), yield n.blob())
                        : null;
                  if (i == null) return (yield j(t, p, [e]), null);
                  if (!l) return i;
                  try {
                    var s;
                    yield Y(
                      t,
                      babelHelpers.extends(
                        {},
                        yield Q(t),
                        ((s = {}), (s[e] = Date.now()), s),
                      ),
                    );
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] background store could not mark a picture used",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  }
                  return i;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n === void 0 ? {} : n,
            o = r.countsAsUse,
            a = o === void 0 ? !0 : o;
          yield H("store a picture", void 0, function (n) {
            return U(n, e, t, { countsAsUse: a, replace: !0 });
          });
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield H("keep a picture", void 0, function (n) {
            return U(n, e, t, { countsAsUse: !0, replace: !1 });
          });
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return H(
            "read a preview",
            null,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.match(_ + e);
                  if (n == null) return null;
                  var r = Number(n.headers.get(g));
                  return Date.now() - r < S &&
                    n.headers.get(b) ===
                      o("WAWebVoipBackgroundPreview").BACKGROUND_PREVIEW_VERSION
                    ? n.blob()
                    : (yield j(t, _, [e]), null);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield H("store a preview", void 0, function (n) {
            var r;
            return n.put(
              _ + e,
              new Response(t, {
                headers:
                  ((r = {}),
                  (r[b] = o(
                    "WAWebVoipBackgroundPreview",
                  ).BACKGROUND_PREVIEW_VERSION),
                  (r[g] = "" + Date.now()),
                  r),
              }),
            );
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield H("forget a preview", void 0, function (t) {
            return j(t, _, [e]);
          });
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n, r) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = r.countsAsUse,
              a = r.replace,
              i = yield Q(e),
              l = yield G(e, p),
              s = !l.includes(t),
              u = function (t) {
                var e;
                return (e = i[t]) != null ? e : 0;
              },
              c = l
                .filter(function (e) {
                  return e !== t;
                })
                .sort(function (e, t) {
                  return u(e) - u(t);
                }),
              d = s ? c.slice(0, Math.max(0, c.length - (v - 1))) : [];
            if (s || a) {
              var m;
              yield j(e, p, d);
              var _ = {
                columns: n.columns,
                rows: n.rows,
                tiles: n.tiles.map(function (e) {
                  var t = e.size,
                    n = e.type;
                  return { size: t, type: n };
                }),
              };
              yield e.put(
                p + t,
                new Response(new Blob(Array.from(n.tiles)), {
                  headers:
                    ((m = {}),
                    (m[C] = JSON.stringify(_)),
                    (m[h] = y),
                    (m[g] = "" + Date.now()),
                    m),
                }),
              );
            }
            var f = new Set(d),
              b = {};
            for (var S of c) f.has(S) || (b[S] = u(S));
            var R = s ? 0 : u(t);
            ((b[t] = o ? Date.now() : R), yield Y(e, b));
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(t, a, i) {
      var l = E.then(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = self.caches;
          return e == null ? a : i(yield e.open(d));
        }),
      );
      return (
        (E = l.catch(r("WAWebNoop"))),
        o("WAPromiseTimeout")
          .promiseTimeout(l, L)
          .catch(function (n) {
            return (
              n instanceof o("WACustomError").TimeoutError
                ? o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] background store took over ",
                        " ms to ",
                        ", going on without it",
                      ])),
                    L,
                    t,
                  )
                : o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] background store could not ",
                          "",
                        ])),
                      t,
                    )
                    .catching(r("getErrorSafe")(n)),
              a
            );
          })
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.keys();
          return n
            .map(function (e) {
              return new URL(e.url).pathname;
            })
            .filter(function (e) {
              return e.startsWith(t);
            })
            .map(function (e) {
              return decodeURIComponent(e.slice(t.length));
            });
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          yield (c || (c = n("Promise"))).all(
            r.map(function (n) {
              return e.delete(t + n);
            }),
          );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.match(f);
          if (t == null) return {};
          var n;
          try {
            n = JSON.parse(yield t.text());
          } catch (e) {
            return {};
          }
          var r = {};
          if (n != null && typeof n == "object" && !Array.isArray(n))
            for (var o of Object.entries(n)) {
              var a = o[0],
                i = o[1];
              typeof i == "number" && (r[a] = i);
            }
          return r;
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e.put(f, new Response(JSON.stringify(t)));
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      if (e == null) return null;
      var n = 0,
        r = e.tiles.map(function (e) {
          var r = e.size,
            o = e.type,
            a = t.slice(n, n + r, o);
          return ((n += r), a);
        });
      return n === t.size
        ? { columns: e.columns, rows: e.rows, tiles: r }
        : null;
    }
    function ee(e) {
      var t = null;
      try {
        t = JSON.parse(e != null ? e : "");
      } catch (e) {
        return null;
      }
      var n = te(ne(t, "columns")),
        r = te(ne(t, "rows")),
        o = ne(t, "tiles");
      if (n == null || r == null || !Array.isArray(o) || o.length !== n * r)
        return null;
      var a = [];
      for (var i of o) {
        var l = te(ne(i, "size")),
          s = ne(i, "type");
        if (l == null || typeof s != "string") return null;
        a.push({ size: l, type: s });
      }
      return { columns: n, rows: r, tiles: a };
    }
    function te(e) {
      return typeof e == "number" && Number.isInteger(e) && e > 0 ? e : null;
    }
    function ne(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function re(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = e.list,
        n = e.locale,
        r = e.storedAtMs;
      if (
        !Array.isArray(t) ||
        typeof n != "string" ||
        typeof r != "number" ||
        t.length === 0
      )
        return null;
      var o = [];
      for (var a of t) {
        if (a == null || typeof a != "object" || Array.isArray(a)) return null;
        var i = a.description,
          l = a.id,
          s = a.name,
          u = a.packageUrl,
          c = a.thumbnailUrl;
        if (
          typeof i != "string" ||
          typeof l != "string" ||
          typeof s != "string" ||
          typeof u != "string" ||
          (c != null && typeof c != "string")
        )
          return null;
        o.push({
          description: i,
          id: l,
          name: s,
          packageUrl: u,
          thumbnailUrl: c,
        });
      }
      return { list: o, locale: n, storedAtMs: r };
    }
    ((l.readStoredBackgroundList = k),
      (l.storeBackgroundList = T),
      (l.readStoredBackgroundImage = x),
      (l.storeBackgroundImage = P),
      (l.keepStoredBackgroundImage = M),
      (l.readStoredBackgroundPreview = A),
      (l.storeBackgroundPreview = O),
      (l.forgetStoredBackgroundPreview = W));
  },
  98,
);
