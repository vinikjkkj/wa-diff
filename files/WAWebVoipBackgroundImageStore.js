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
      f = "/wa-voip-backgrounds/custom/",
      g = "/wa-voip-backgrounds/used",
      h = "X-WA-Stored-At",
      y = "X-WA-Picture-Version",
      C = "3",
      b = "X-WA-Picture-Layout",
      v = "X-WA-Preview-Version",
      S = 12,
      R = 720 * 60 * 60 * 1e3,
      L = 10080 * 60 * 1e3,
      E = 2e3,
      k = (c || (c = n("Promise"))).resolve();
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return Y(
            "read the list",
            null,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.match(m);
                  if (n == null) return null;
                  var r = ce(JSON.parse(yield n.text()));
                  return r == null ||
                    r.locale !== e ||
                    !(Date.now() - r.storedAtMs < L)
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length !== 0 &&
            (yield Y(
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
                        J(r, p),
                        J(r, _),
                      ]),
                      s = l[0],
                      u = l[1];
                    yield c.all([ee(r, p, s.filter(i)), ee(r, _, u.filter(i))]);
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            ));
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t === void 0 ? {} : t,
            i = a.countsAsUse,
            l = i === void 0 ? !0 : i;
          return Y(
            "read a picture",
            null,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.match(p + e);
                  if (n == null) return null;
                  var a = Number(n.headers.get(h)),
                    i =
                      Date.now() - a < R && n.headers.get(y) === C
                        ? ie(le(n.headers.get(b)), yield n.blob())
                        : null;
                  if (i == null) return (yield ee(t, p, [e]), null);
                  if (!l) return i;
                  try {
                    var s;
                    yield oe(
                      t,
                      babelHelpers.extends(
                        {},
                        yield ne(t),
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
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n === void 0 ? {} : n,
            o = r.countsAsUse,
            a = o === void 0 ? !0 : o;
          yield Y("store a picture", void 0, function (n) {
            return Q(n, e, t, { countsAsUse: a, replace: !0 });
          });
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield Y("keep a picture", void 0, function (n) {
            return Q(n, e, t, { countsAsUse: !0, replace: !1 });
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return Y(
            "read a preview",
            null,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.match(_ + e);
                  if (n == null) return null;
                  var r = Number(n.headers.get(h));
                  return Date.now() - r < R &&
                    n.headers.get(v) ===
                      o("WAWebVoipBackgroundPreview").BACKGROUND_PREVIEW_VERSION
                    ? n.blob()
                    : (yield ee(t, _, [e]), null);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield Y("store a preview", void 0, function (n) {
            var r;
            return n.put(
              _ + e,
              new Response(t, {
                headers:
                  ((r = {}),
                  (r[v] = o(
                    "WAWebVoipBackgroundPreview",
                  ).BACKGROUND_PREVIEW_VERSION),
                  (r[h] = "" + Date.now()),
                  r),
              }),
            );
          });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield Y("forget a preview", void 0, function (t) {
            return ee(t, _, [e]);
          });
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return Y(
            "read the custom picture",
            { status: "unreadable" },
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield J(e, f),
                    n = t[t.length - 1],
                    r = n == null ? null : yield e.match(f + n);
                  return n == null || r == null
                    ? { status: "none" }
                    : { id: n, picture: yield r.blob(), status: "kept" };
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            { hasDeadline: !1 },
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return Y(
            "store the custom picture",
            !1,
            (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  var r = (yield J(n, f)).filter(function (t) {
                    return t !== e;
                  });
                  return (
                    yield ee(n, f, r),
                    yield n.put(f + e, new Response(t)),
                    !0
                  );
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
            { hasDeadline: !1 },
          );
        })),
        z.apply(this, arguments)
      );
    }
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.caches == null
            ? !0
            : Y(
                "forget the custom picture",
                !1,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield J(e, f);
                      return (yield ee(e, f, t), !0);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                { hasDeadline: !1 },
              );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n, r) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = r.countsAsUse,
              a = r.replace,
              i = yield ne(e),
              l = yield J(e, p),
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
              d = s ? c.slice(0, Math.max(0, c.length - (S - 1))) : [];
            if (s || a) {
              var m;
              yield ee(e, p, d);
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
                    (m[b] = JSON.stringify(_)),
                    (m[y] = C),
                    (m[h] = "" + Date.now()),
                    m),
                }),
              );
            }
            var f = new Set(d),
              g = {};
            for (var v of c) f.has(v) || (g[v] = u(v));
            var R = s ? 0 : u(t);
            ((g[t] = o ? Date.now() : R), yield oe(e, g));
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y(t, a, i, l) {
      var u = l === void 0 ? {} : l,
        c = u.hasDeadline,
        m = c === void 0 ? !0 : c,
        p = k.then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = self.caches;
            return e == null ? a : i(yield e.open(d));
          }),
        );
      k = p.catch(r("WAWebNoop"));
      var _ = m ? o("WAPromiseTimeout").promiseTimeout(p, E) : p;
      return _.catch(function (n) {
        return (
          n instanceof o("WACustomError").TimeoutError
            ? o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] background store took over ",
                    " ms to ",
                    ", going on without it",
                  ])),
                E,
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
      });
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        Z.apply(this, arguments)
      );
    }
    function ee(e, t, n) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            yield (c || (c = n("Promise"))).all(
              r.map(function (n) {
                return e.delete(t + n);
              }),
            );
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.match(g);
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
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e.put(g, new Response(JSON.stringify(t)));
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
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
    function le(e) {
      var t = null;
      try {
        t = JSON.parse(e != null ? e : "");
      } catch (e) {
        return null;
      }
      var n = se(ue(t, "columns")),
        r = se(ue(t, "rows")),
        o = ue(t, "tiles");
      if (n == null || r == null || !Array.isArray(o) || o.length !== n * r)
        return null;
      var a = [];
      for (var i of o) {
        var l = se(ue(i, "size")),
          s = ue(i, "type");
        if (l == null || typeof s != "string") return null;
        a.push({ size: l, type: s });
      }
      return { columns: n, rows: r, tiles: a };
    }
    function se(e) {
      return typeof e == "number" && Number.isInteger(e) && e > 0 ? e : null;
    }
    function ue(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function ce(e) {
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
    ((l.readStoredBackgroundList = I),
      (l.storeBackgroundList = D),
      (l.readStoredBackgroundImage = $),
      (l.storeBackgroundImage = N),
      (l.keepStoredBackgroundImage = w),
      (l.readStoredBackgroundPreview = F),
      (l.storeBackgroundPreview = B),
      (l.forgetStoredBackgroundPreview = q),
      (l.readStoredCustomBackground = V),
      (l.storeCustomBackground = G),
      (l.forgetStoredCustomBackground = j));
  },
  98,
);
