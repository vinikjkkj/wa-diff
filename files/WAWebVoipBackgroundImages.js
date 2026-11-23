__d(
  "WAWebVoipBackgroundImages",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGraphQLRemapLocale",
    "WAWebMiscGatingUtils",
    "WAWebNoop",
    "WAWebVoipBackgroundImageStore",
    "WAWebVoipBackgroundSceneTiles",
    "WAWebVoipColorBackground",
    "WAWebVoipCustomBackground",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebGraphQLControllerRouteBuilder",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = "9147532101969384",
      h = 50,
      y = {
        manifest_capabilities: [
          "componentEvaluation",
          "composedMaterial",
          "renderPasses",
          "segmentation",
          "shaderCode",
          "supportedOrientations",
          "variadicMath",
          "visualShaders",
        ],
        supported_beta_sdk_versions: { max_version: 400, min_version: 0 },
        supported_sdk_versions: { max_version: 400, min_version: 0 },
        supported_texture_formats: ["UNCOMPRESSED"],
        texture_compression: "UNCOMPRESSED",
      },
      C = new Set(["951917220276272", "1171057737917759", "2294882047595227"]),
      b = new Set(["2363172637481984", "1145289839999199"]);
    function v(e) {
      return !C.has(e) && !b.has(e);
    }
    var S = 3600 * 1e3,
      R = 1e4,
      L = 15e3,
      E = [1e3, 4e3],
      k = new Set([403, 410]),
      I = 67324752,
      T = 33639248,
      D = 101010256,
      x = 0,
      $ = 8,
      P = 2,
      N = 32,
      M = 4096,
      w = null,
      A = null,
      F = !1,
      O = new Map(),
      B = new Map(),
      W = new Set(),
      q = new Set(),
      U = new Set();
    function V() {
      var e = Date.now(),
        t = self.performance.now(),
        n = w;
      if (n != null && H(e - n.atMs) && H(t - n.atMonotonicMs)) return n.list;
      var r = Te("backgrounds list", R, ae),
        o = { atMonotonicMs: t, atMs: e, list: r };
      return (
        (w = o),
        r.then(
          function (e) {
            A = e;
            var t = new Set(
              e.map(function (e) {
                var t = e.id;
                return t;
              }),
            );
            for (var n of O.keys()) t.has(n) || O.delete(n);
            for (var r of e) {
              var o = r.id;
              q.delete(o);
            }
          },
          function () {
            w === o && (w = null);
          },
        ),
        r
      );
    }
    function H(e) {
      return e >= 0 && e < S;
    }
    function G() {
      (F || ((F = !0), oe()), V().catch(r("WAWebNoop")));
    }
    function z() {
      return A;
    }
    function j(e) {
      if (o("WAWebVoipCustomBackground").isCustomBackgroundId(e)) return K(e);
      if (o("WAWebVoipColorBackground").isColorBackgroundId(e)) return Q(e);
      var t = O.get(e);
      if (t != null)
        return (
          t.then(function (t) {
            (ee(e),
              o("WAWebVoipBackgroundImageStore").keepStoredBackgroundImage(
                e,
                t,
              ));
          }, r("WAWebNoop")),
          t
        );
      var n = B.get(e),
        a =
          n != null
            ? n.then(function (t) {
                return (
                  o("WAWebVoipBackgroundImageStore").keepStoredBackgroundImage(
                    e,
                    t,
                  ),
                  t
                );
              })
            : le(e, { countsAsUse: !0 });
      return (
        O.set(e, a),
        a.then(
          function () {
            return ee(e);
          },
          function () {
            O.get(e) === a && O.delete(e);
          },
        ),
        a
      );
    }
    function K(e) {
      return o("WAWebVoipCustomBackground")
        .getCustomBackgroundImage(e)
        .then(function (t) {
          if (t == null)
            throw (
              W.add(e),
              r("err")("background " + e + " is no longer kept")
            );
          return (ee(e), t);
        });
    }
    function Q(e) {
      var t = o("WAWebVoipColorBackground").getBackgroundColor(e);
      return t == null
        ? (W.add(e),
          Promise.reject(
            r("err")("background " + e + " is not a color offered"),
          ))
        : o("WAWebVoipColorBackground")
            .getColorBackgroundImage(t)
            .then(function (t) {
              return (ee(e), t);
            });
    }
    function X(e) {
      if (o("WAWebVoipColorBackground").isColorBackgroundId(e)) return Q(e);
      var t = Y(e);
      if (t != null) return t;
      var n = le(e, { countsAsUse: !1 });
      B.set(e, n);
      var r = function () {
        B.get(e) === n && B.delete(e);
      };
      return (
        n.then(function () {
          (ee(e), r());
        }, r),
        n
      );
    }
    function Y(e) {
      var t;
      return (t = O.get(e)) != null ? t : B.get(e);
    }
    async function J(e) {
      var t = await se(e, { countsAsUse: !1 });
      return (t != null && ee(e), t);
    }
    function Z(e) {
      U.add(e);
      var t = o("WAWebVoipCustomBackground").subscribeToCustomBackgroundRead(e);
      return function () {
        (U.delete(e), t());
      };
    }
    function ee(e) {
      U.forEach(function (t) {
        return t(e);
      });
    }
    function te(e) {
      return W.has(e) || q.has(e);
    }
    function ne() {
      ((w = null),
        (A = null),
        (F = !1),
        O.clear(),
        B.clear(),
        W.clear(),
        q.clear(),
        U.clear());
    }
    async function re() {
      var e = await o("WAWebBackendApi").frontendSendAndReceive(
        "getFullLocale",
        void 0,
      );
      return o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
        e.replace("-", "_"),
        o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
      );
    }
    async function oe() {
      try {
        var t = await o(
          "WAWebVoipBackgroundImageStore",
        ).readStoredBackgroundList(await re());
        t != null &&
          A == null &&
          (A = t.filter(function (e) {
            var t = e.id;
            return v(t);
          }));
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] could not read the backgrounds kept on the device",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    async function ae(e, t) {
      var n = await re(),
        a = await o("WAWebXControllerFetchUtils").fetchFromXController(
          r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
            .buildUri({})
            .toString(),
          {
            method: "POST",
            additionalParams: {
              doc_id: g,
              locale: n,
              variables: JSON.stringify({
                device_capabilities: y,
                effect_categories: ["BACKGROUND"],
                page_size: h,
                product_surface: "VIDEO_CALLING",
                supported_compression_types: ["NONE", "ZIP"],
              }),
            },
            signal: e,
          },
        );
      if (!a.ok) throw r("err")("background images: HTTP " + a.status);
      t();
      var i = he(await ie(a));
      if (i.length === 0) throw r("err")("background images: none offered");
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] ",
              " background images offered",
            ])),
          i.length,
        ),
        o("WAWebVoipBackgroundImageStore").storeBackgroundList(n, i),
        i
      );
    }
    async function ie(e) {
      var t = await e.text();
      return JSON.parse(t.replace(/^for\s*\(\s*;;\s*\)\s*;\s*/, ""));
    }
    async function le(e, t) {
      var n = t.countsAsUse;
      if (W.has(e)) throw r("err")("background " + e + " has no usable image");
      var a = await se(e, { countsAsUse: n });
      if (a != null) return a;
      var i = V(),
        l = await ue(e, i),
        s = await ce(e, l);
      if (s == null) {
        de(i);
        var c = await ue(e, V());
        if (((s = c !== l ? await ce(e, c) : null), s == null))
          throw r("err")("background " + e + " package link refused");
      }
      var d = await pe(e, s);
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] background ",
              ": ",
              "",
              "",
            ])),
          e,
          ge(d),
          n ? "" : ", for its preview",
        ),
        o("WAWebVoipBackgroundImageStore").storeBackgroundImage(e, d, {
          countsAsUse: n,
        }),
        d
      );
    }
    async function se(e, t) {
      var n = t.countsAsUse,
        r = await o("WAWebVoipBackgroundImageStore").readStoredBackgroundImage(
          e,
          { countsAsUse: n },
        );
      return (
        r != null &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] background ",
                ": ",
                ", kept on the device",
                "",
              ])),
            e,
            ge(r),
            n ? "" : ", for its preview",
          ),
        r
      );
    }
    async function ue(e, t) {
      var n = (await t).find(function (t) {
        return t.id === e;
      });
      if (n == null)
        throw (q.add(e), r("err")("background " + e + " is not offered"));
      return n.packageUrl;
    }
    function ce(e, t) {
      return Te("background " + e + " package", L, async function (n, a) {
        var i = await self.fetch(t, { signal: n });
        if (k.has(i.status))
          return (
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] background ",
                  " package link refused: HTTP ",
                  "",
                ])),
              e,
              i.status,
            ),
            null
          );
        if (!i.ok) throw r("err")("HTTP " + i.status);
        return me(i, a);
      });
    }
    function de(e) {
      var t;
      ((t = w) == null ? void 0 : t.list) === e && (w = null);
    }
    async function me(e, t) {
      t();
      var n = e.body;
      if (n == null) return e.arrayBuffer();
      var r = n.getReader(),
        o = [],
        a = async function () {
          var e = await r.read(),
            n = e.done,
            i = e.value;
          n || i == null || (o.push(i), t(), await a());
        };
      await a();
      var i = 0;
      for (var l of o) i += l.length;
      var s = new Uint8Array(i),
        u = 0;
      for (var c of o) (s.set(c, u), (u += c.length));
      return s.buffer;
    }
    async function pe(e, t) {
      if (!Ee(t))
        throw r("err")(
          "background " + e + " package is not a zip (" + t.byteLength + " B)",
        );
      var n,
        o = null;
      try {
        ((n = await ye(t)), (o = n != null ? await _e(n) : null));
      } catch (t) {
        throw (
          W.add(e),
          r("err")(
            "background " +
              e +
              " package can't be unpacked: " +
              r("getErrorSafe")(t).message,
          )
        );
      }
      if (n == null)
        throw (
          W.add(e),
          r("err")(
            "background " + e + " package has no picture its scene lays out",
          )
        );
      if (o != null)
        throw (W.add(e), r("err")("background " + e + " image " + o));
      return n;
    }
    async function _e(e) {
      if (typeof createImageBitmap != "function") return null;
      var t = await Promise.allSettled(
          e.tiles.map(function (e) {
            return createImageBitmap(e);
          }),
        ),
        n = t.flatMap(function (e) {
          return e.status === "fulfilled" ? [e.value] : [];
        });
      try {
        for (var o of t)
          if (o.status === "rejected") throw r("getErrorSafe")(o.reason);
        var a = n[0],
          i = a.height,
          l = a.width;
        if (
          n.some(function (e) {
            return e.width !== l || e.height !== i;
          })
        )
          return "has tiles of different sizes";
        var s = l * e.columns,
          u = i * e.rows;
        return s > M || u > M
          ? "is too large (" + s + "x" + u + ")"
          : e.tiles.some(function (e, t) {
                return e.type !== "image/jpeg" && fe(n[t]);
              })
            ? "has see-through parts"
            : null;
      } finally {
        for (var c of n) c.close();
      }
    }
    function fe(e) {
      if (typeof OffscreenCanvas == "function") {
        var t = new OffscreenCanvas(N, N).getContext("2d");
        if (t != null) {
          t.drawImage(e, 0, 0, N, N);
          for (
            var n = t.getImageData(0, 0, N, N), r = n.data, o = 3;
            o < r.length;
            o += 4
          )
            if (r[o] < 255) return !0;
        }
      }
      return !1;
    }
    function ge(e) {
      var t,
        n,
        r = e.columns,
        o = e.rows,
        a = e.tiles,
        i = 0;
      for (var l of a) i += l.size;
      return (
        r +
        "x" +
        o +
        " tiles, " +
        i +
        " B " +
        ((t = (n = a[0]) == null ? void 0 : n.type) != null ? t : "")
      );
    }
    function he(e) {
      var t,
        n = (t = De(e, "payload")) != null ? t : e,
        a = De(De(n, "data"), "ar_effect_collection"),
        i = Array.isArray(a) ? a[0] : null,
        l = De(i, "ar_effects"),
        s = De(l, "nodes");
      if (!Array.isArray(s))
        throw r("err")("background images: unexpected response");
      De(De(l, "page_info"), "has_next_page") === !0 &&
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] the server has more than the ",
              " effects asked for; the rest aren't offered",
            ])),
          h,
        );
      var u = [];
      for (var c of s) {
        var d,
          p,
          _,
          f = xe(c, "id"),
          g = (d = xe(c, "localized_name")) != null ? d : xe(c, "name"),
          y = xe(De(De(c, "best_instance"), "packaged_file"), "uri");
        f == null ||
          g == null ||
          y == null ||
          !v(f) ||
          u.push({
            description:
              (p =
                (_ = xe(c, "localized_description")) != null
                  ? _
                  : xe(c, "description")) != null
                ? p
                : "",
            id: f,
            name: g,
            packageUrl: y,
            thumbnailUrl: xe(De(c, "thumbnail"), "uri"),
          });
      }
      return u;
    }
    async function ye(e) {
      if (!Ee(e)) return null;
      var t = await Ce(e, 0),
        n = t.images,
        r = t.scenes,
        a = await Promise.all(
          r.map(async function (e) {
            return {
              layout: o("WAWebVoipBackgroundSceneTiles").getSceneTileLayout(
                await be(e),
              ),
              zip: e.zip,
            };
          }),
        ),
        i = a.find(function (e) {
          var t = e.layout;
          return t != null;
        });
      return (i == null ? void 0 : i.layout) == null
        ? null
        : ve(
            i.layout,
            n.filter(function (e) {
              var t = e.zip;
              return t === i.zip;
            }),
          );
    }
    async function Ce(e, t) {
      var n,
        r,
        o = ke(e),
        a = {
          images: o
            .filter(function (e) {
              return Le(e.name) != null;
            })
            .map(function (t) {
              return { entry: t, zip: e };
            }),
          scenes: o
            .filter(function (e) {
              return Re(e.name) === "main.json";
            })
            .map(function (t) {
              return { entry: t, zip: e };
            }),
        };
      if (t >= P) return a;
      var i = await Promise.all(
        o
          .filter(function (e) {
            return /\.(arfx|zip)$/i.test(e.name);
          })
          .map(async function (n) {
            var r = await Ie(e, n);
            return Ee(r) ? Ce(r, t + 1) : { images: [], scenes: [] };
          }),
      );
      return {
        images: (n = a.images).concat.apply(
          n,
          i.map(function (e) {
            var t = e.images;
            return t;
          }),
        ),
        scenes: (r = a.scenes).concat.apply(
          r,
          i.map(function (e) {
            var t = e.scenes;
            return t;
          }),
        ),
      };
    }
    async function be(e) {
      var t = e.entry,
        n = e.zip;
      try {
        return JSON.parse(new TextDecoder().decode(await Ie(n, t)));
      } catch (e) {
        return null;
      }
    }
    async function ve(e, t) {
      var n = await Promise.all(
        e.tiles.map(function (e) {
          var n = e.fileName,
            o = t.find(function (e) {
              var t = e.entry;
              return Re(t.name) === n;
            });
          if (o == null) throw r("err")("tile " + n + " is missing");
          return Se(o);
        }),
      );
      return { columns: e.columns, rows: e.rows, tiles: n };
    }
    async function Se(e) {
      var t,
        n = e.entry,
        r = e.zip;
      return new Blob([await Ie(r, n)], {
        type: (t = Le(n.name)) != null ? t : "",
      });
    }
    function Re(e) {
      return e.slice(e.lastIndexOf("/") + 1);
    }
    function Le(e) {
      var t,
        n =
          (t = /\.(png|jpe?g|webp)$/i.exec(e)) == null || (t = t[1]) == null
            ? void 0
            : t.toLowerCase();
      return n === "png"
        ? "image/png"
        : n === "jpg" || n === "jpeg"
          ? "image/jpeg"
          : n === "webp"
            ? "image/webp"
            : null;
    }
    function Ee(e) {
      return e.byteLength >= 4 && new DataView(e).getUint32(0, !0) === I;
    }
    function ke(e) {
      for (
        var t = new DataView(e), n = -1, r = e.byteLength - 22, o = r;
        o >= Math.max(0, r - 65535);
        o--
      )
        if (t.getUint32(o, !0) === D) {
          n = o;
          break;
        }
      if (n < 0) return [];
      for (
        var a = t.getUint16(n + 10, !0),
          i = t.getUint32(n + 16, !0),
          l = new TextDecoder(),
          s = [],
          u = 0;
        u < a && !(i + 46 > e.byteLength || t.getUint32(i, !0) !== T);
        u++
      ) {
        var c = t.getUint16(i + 28, !0),
          d = i + 46 + c + t.getUint16(i + 30, !0) + t.getUint16(i + 32, !0);
        if (d > e.byteLength) break;
        (s.push({
          compressedSize: t.getUint32(i + 20, !0),
          localOffset: t.getUint32(i + 42, !0),
          method: t.getUint16(i + 10, !0),
          name: l.decode(new Uint8Array(e, i + 46, c)),
          size: t.getUint32(i + 24, !0),
        }),
          (i = d));
      }
      return s;
    }
    async function Ie(e, t) {
      var n = new DataView(e),
        o = t.localOffset;
      if (o + 30 > e.byteLength || n.getUint32(o, !0) !== I)
        throw r("err")("zip entry " + t.name + ": no local header");
      var a = o + 30 + n.getUint16(o + 26, !0) + n.getUint16(o + 28, !0);
      if (a + t.compressedSize > e.byteLength)
        throw r("err")("zip entry " + t.name + ": truncated");
      var i = new Uint8Array(e, a, t.compressedSize);
      e: {
        if (t.method === x) return i.slice().buffer;
        if (t.method === $) {
          if (typeof DecompressionStream == "function") {
            var l = new DecompressionStream("deflate-raw"),
              s = l.writable.getWriter(),
              u = await Promise.all([
                s.write(i),
                s.close(),
                new Response(l.readable).arrayBuffer(),
              ]),
              c = u[2];
            return c;
          }
          throw r("err")("zip entry " + t.name + ": cannot inflate");
        }
        throw r("err")("zip entry " + t.name + ": method " + t.method);
      }
    }
    async function Te(e, t, n, a) {
      a === void 0 && (a = 1);
      var i = self.performance.now(),
        l = new AbortController(),
        s = self.setTimeout(function () {
          return l.abort();
        }, t),
        u = function () {
          (self.clearTimeout(s),
            (s = self.setTimeout(function () {
              return l.abort();
            }, t)));
        },
        c;
      try {
        c = await new Promise(function (e, t) {
          (l.signal.addEventListener("abort", function () {
            return t(r("err")("cancelled"));
          }),
            n(l.signal, u).then(e, t));
        });
      } catch (u) {
        self.clearTimeout(s);
        var d = Math.round(self.performance.now() - i),
          m = l.signal.aborted
            ? r("err")(e + ": nothing received for " + t + " ms")
            : r("getErrorSafe")(u),
          g = E[a - 1];
        if (g == null)
          throw (
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] ",
                  " failed after ",
                  " ms (attempt ",
                  ", giving up): ",
                  "",
                ])),
              e,
              d,
              a,
              m.message,
            ),
            m
          );
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] ",
                " failed after ",
                " ms (attempt ",
                ", retrying in ",
                " ms): ",
                "",
              ])),
            e,
            d,
            a,
            g,
            m.message,
          ),
          await new Promise(function (e) {
            self.setTimeout(e, g);
          }),
          Te(e, t, n, a + 1)
        );
      }
      return (
        self.clearTimeout(s),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] ",
              " took ",
              " ms (attempt ",
              ")",
            ])),
          e,
          Math.round(self.performance.now() - i),
          a,
        ),
        c
      );
    }
    function De(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function xe(e, t) {
      var n = De(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    ((l.getBackgroundImages = V),
      (l.prefetchBackgroundImages = G),
      (l.peekBackgroundImages = z),
      (l.getBackgroundImage = j),
      (l.getBackgroundImageForPreview = X),
      (l.peekBackgroundImage = Y),
      (l.readStoredBackgroundImageForPreview = J),
      (l.subscribeToBackgroundImageReady = Z),
      (l.isBackgroundImageUnusable = te),
      (l.resetBackgroundImagesForTesting = ne),
      (l.parseBackgroundImageList = he),
      (l.extractBackgroundImage = ye));
  },
  98,
);
