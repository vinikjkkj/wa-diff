__d(
  "WAWebVoipBackgroundImageStore",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebNoop",
    "WAWebVoipBackgroundPreview",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "wa-voip-backgrounds",
      d = "/wa-voip-backgrounds/list",
      m = "/wa-voip-backgrounds/image/",
      p = "/wa-voip-backgrounds/preview/",
      _ = "/wa-voip-backgrounds/custom/",
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
      E = Promise.resolve();
    async function k(e) {
      return O("read the list", null, async function (t) {
        var n = await t.match(d);
        if (n == null) return null;
        var r = j(JSON.parse(await n.text()));
        return r == null || r.locale !== e || !(Date.now() - r.storedAtMs < R)
          ? null
          : r.list;
      });
    }
    async function I(e, t) {
      t.length !== 0 &&
        (await O("store the list", void 0, async function (n) {
          var r = { list: t, locale: e, storedAtMs: Date.now() };
          await n.put(d, new Response(JSON.stringify(r)));
          var o = new Set(
              t.map(function (e) {
                var t = e.id;
                return t;
              }),
            ),
            a = function (t) {
              return !o.has(t);
            },
            i = await Promise.all([B(n, m), B(n, p)]),
            l = i[0],
            s = i[1];
          await Promise.all([W(n, m, l.filter(a)), W(n, p, s.filter(a))]);
        }));
    }
    async function T(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.countsAsUse,
        l = i === void 0 ? !0 : i;
      return O("read a picture", null, async function (n) {
        var a = await n.match(m + t);
        if (a == null) return null;
        var i = Number(a.headers.get(g)),
          s =
            Date.now() - i < S && a.headers.get(h) === y
              ? V(H(a.headers.get(C)), await a.blob())
              : null;
        if (s == null) return (await W(n, m, [t]), null);
        if (!l) return s;
        try {
          var u;
          await U(
            n,
            babelHelpers.extends(
              {},
              await q(n),
              ((u = {}), (u[t] = Date.now()), u),
            ),
          );
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] background store could not mark a picture used",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
        return s;
      });
    }
    async function D(e, t, n) {
      var r = n === void 0 ? {} : n,
        o = r.countsAsUse,
        a = o === void 0 ? !0 : o;
      await O("store a picture", void 0, function (n) {
        return F(n, e, t, { countsAsUse: a, replace: !0 });
      });
    }
    async function x(e, t) {
      await O("keep a picture", void 0, function (n) {
        return F(n, e, t, { countsAsUse: !0, replace: !1 });
      });
    }
    async function $(e) {
      return O("read a preview", null, async function (t) {
        var n = await t.match(p + e);
        if (n == null) return null;
        var r = Number(n.headers.get(g));
        return Date.now() - r < S &&
          n.headers.get(b) ===
            o("WAWebVoipBackgroundPreview").BACKGROUND_PREVIEW_VERSION
          ? n.blob()
          : (await W(t, p, [e]), null);
      });
    }
    async function P(e, t) {
      await O("store a preview", void 0, function (n) {
        var r;
        return n.put(
          p + e,
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
    }
    async function N(e) {
      await O("forget a preview", void 0, function (t) {
        return W(t, p, [e]);
      });
    }
    async function M() {
      return O(
        "read the custom picture",
        { status: "unreadable" },
        async function (e) {
          var t = await B(e, _),
            n = t[t.length - 1],
            r = n == null ? null : await e.match(_ + n);
          return n == null || r == null
            ? { status: "none" }
            : { id: n, picture: await r.blob(), status: "kept" };
        },
        { hasDeadline: !1 },
      );
    }
    async function w(e, t) {
      return O(
        "store the custom picture",
        !1,
        async function (n) {
          var r = (await B(n, _)).filter(function (t) {
            return t !== e;
          });
          return (await W(n, _, r), await n.put(_ + e, new Response(t)), !0);
        },
        { hasDeadline: !1 },
      );
    }
    async function A() {
      return self.caches == null
        ? !0
        : O(
            "forget the custom picture",
            !1,
            async function (e) {
              var t = await B(e, _);
              return (await W(e, _, t), !0);
            },
            { hasDeadline: !1 },
          );
    }
    async function F(e, t, n, r) {
      var o = r.countsAsUse,
        a = r.replace,
        i = await q(e),
        l = await B(e, m),
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
        var p;
        await W(e, m, d);
        var _ = {
          columns: n.columns,
          rows: n.rows,
          tiles: n.tiles.map(function (e) {
            var t = e.size,
              n = e.type;
            return { size: t, type: n };
          }),
        };
        await e.put(
          m + t,
          new Response(new Blob(Array.from(n.tiles)), {
            headers:
              ((p = {}),
              (p[C] = JSON.stringify(_)),
              (p[h] = y),
              (p[g] = "" + Date.now()),
              p),
          }),
        );
      }
      var f = new Set(d),
        b = {};
      for (var S of c) f.has(S) || (b[S] = u(S));
      var R = s ? 0 : u(t);
      ((b[t] = o ? Date.now() : R), await U(e, b));
    }
    function O(e, t, n, a) {
      var i = a === void 0 ? {} : a,
        l = i.hasDeadline,
        d = l === void 0 ? !0 : l,
        m = E.then(async function () {
          var e = self.caches;
          return e == null ? t : n(await e.open(c));
        });
      E = m.catch(r("WAWebNoop"));
      var p = d ? o("WAPromiseTimeout").promiseTimeout(m, L) : m;
      return p.catch(function (n) {
        return (
          n instanceof o("WACustomError").TimeoutError
            ? o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] background store took over ",
                    " ms to ",
                    ", going on without it",
                  ])),
                L,
                e,
              )
            : o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [effects] background store could not ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(n)),
          t
        );
      });
    }
    async function B(e, t) {
      var n = await e.keys();
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
    }
    async function W(e, t, n) {
      await Promise.all(
        n.map(function (n) {
          return e.delete(t + n);
        }),
      );
    }
    async function q(e) {
      var t = await e.match(f);
      if (t == null) return {};
      var n;
      try {
        n = JSON.parse(await t.text());
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
    }
    async function U(e, t) {
      await e.put(f, new Response(JSON.stringify(t)));
    }
    function V(e, t) {
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
    function H(e) {
      var t = null;
      try {
        t = JSON.parse(e != null ? e : "");
      } catch (e) {
        return null;
      }
      var n = G(z(t, "columns")),
        r = G(z(t, "rows")),
        o = z(t, "tiles");
      if (n == null || r == null || !Array.isArray(o) || o.length !== n * r)
        return null;
      var a = [];
      for (var i of o) {
        var l = G(z(i, "size")),
          s = z(i, "type");
        if (l == null || typeof s != "string") return null;
        a.push({ size: l, type: s });
      }
      return { columns: n, rows: r, tiles: a };
    }
    function G(e) {
      return typeof e == "number" && Number.isInteger(e) && e > 0 ? e : null;
    }
    function z(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function j(e) {
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
      (l.storeBackgroundList = I),
      (l.readStoredBackgroundImage = T),
      (l.storeBackgroundImage = D),
      (l.keepStoredBackgroundImage = x),
      (l.readStoredBackgroundPreview = $),
      (l.storeBackgroundPreview = P),
      (l.forgetStoredBackgroundPreview = N),
      (l.readStoredCustomBackground = M),
      (l.storeCustomBackground = w),
      (l.forgetStoredCustomBackground = A));
  },
  98,
);
