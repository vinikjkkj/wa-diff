__d(
  "WAWebVoipBackgroundImages",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebGraphQLRemapLocale",
    "WAWebMiscGatingUtils",
    "WAWebNoop",
    "WAWebVoipBackgroundImageStore",
    "WAWebVoipBackgroundSceneTiles",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebGraphQLControllerRouteBuilder",
    "asyncToGeneratorRuntime",
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
      g,
      h = "9147532101969384",
      y = 50,
      C = {
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
      b = new Set(["951917220276272", "1171057737917759", "2294882047595227"]),
      v = new Set(["2363172637481984", "1145289839999199"]);
    function S(e) {
      return !b.has(e) && !v.has(e);
    }
    var R = 3600 * 1e3,
      L = 1e4,
      E = 15e3,
      k = [1e3, 4e3],
      I = new Set([403, 410]),
      T = 67324752,
      D = 33639248,
      x = 101010256,
      $ = 0,
      P = 8,
      N = 2,
      M = 32,
      w = 4096,
      A = null,
      F = null,
      O = !1,
      B = new Map(),
      W = new Map(),
      q = new Set(),
      U = new Set(),
      V = new Set();
    function H() {
      var e = Date.now(),
        t = self.performance.now(),
        n = A;
      if (n != null && G(e - n.atMs) && G(t - n.atMonotonicMs)) return n.list;
      var r = He("backgrounds list", L, le),
        o = { atMonotonicMs: t, atMs: e, list: r };
      return (
        (A = o),
        r.then(
          function (e) {
            F = e;
            var t = new Set(
              e.map(function (e) {
                var t = e.id;
                return t;
              }),
            );
            for (var n of B.keys()) t.has(n) || B.delete(n);
            for (var r of e) {
              var o = r.id;
              U.delete(o);
            }
          },
          function () {
            A === o && (A = null);
          },
        ),
        r
      );
    }
    function G(e) {
      return e >= 0 && e < R;
    }
    function z() {
      (O || ((O = !0), ae()), H().catch(r("WAWebNoop")));
    }
    function j() {
      return F;
    }
    function K(e) {
      var t = B.get(e);
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
      var n = W.get(e),
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
            : de(e, { countsAsUse: !0 });
      return (
        B.set(e, a),
        a.then(
          function () {
            return ee(e);
          },
          function () {
            B.get(e) === a && B.delete(e);
          },
        ),
        a
      );
    }
    function Q(e) {
      var t = X(e);
      if (t != null) return t;
      var n = de(e, { countsAsUse: !1 });
      W.set(e, n);
      var r = function () {
        W.get(e) === n && W.delete(e);
      };
      return (
        n.then(function () {
          (ee(e), r());
        }, r),
        n
      );
    }
    function X(e) {
      var t;
      return (t = B.get(e)) != null ? t : W.get(e);
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield pe(e, { countsAsUse: !1 });
          return (t != null && ee(e), t);
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return (
        V.add(e),
        function () {
          V.delete(e);
        }
      );
    }
    function ee(e) {
      V.forEach(function (t) {
        return t(e);
      });
    }
    function te(e) {
      return q.has(e) || U.has(e);
    }
    function ne() {
      ((A = null),
        (F = null),
        (O = !1),
        B.clear(),
        W.clear(),
        q.clear(),
        U.clear(),
        V.clear());
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBackendApi").frontendSendAndReceive(
            "getFullLocale",
            void 0,
          );
          return o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
            e.replace("-", "_"),
            o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebVoipBackgroundImageStore",
            ).readStoredBackgroundList(yield re());
            e != null &&
              F == null &&
              (F = e.filter(function (e) {
                var t = e.id;
                return S(t);
              }));
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not read the backgrounds kept on the device",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield re(),
            a = yield o("WAWebXControllerFetchUtils").fetchFromXController(
              r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
                .buildUri({})
                .toString(),
              {
                method: "POST",
                additionalParams: {
                  doc_id: h,
                  locale: n,
                  variables: JSON.stringify({
                    device_capabilities: C,
                    effect_categories: ["BACKGROUND"],
                    page_size: y,
                    product_surface: "VIDEO_CALLING",
                    supported_compression_types: ["NONE", "ZIP"],
                  }),
                },
                signal: e,
              },
            );
          if (!a.ok) throw r("err")("background images: HTTP " + a.status);
          t();
          var i = Ie(yield ue(a));
          if (i.length === 0) throw r("err")("background images: none offered");
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] ",
                  " background images offered",
                ])),
              i.length,
            ),
            o("WAWebVoipBackgroundImageStore").storeBackgroundList(n, i),
            i
          );
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.text();
          return JSON.parse(t.replace(/^for\s*\(\s*;;\s*\)\s*;\s*/, ""));
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.countsAsUse;
          if (q.has(e))
            throw r("err")("background " + e + " has no usable image");
          var a = yield pe(e, { countsAsUse: n });
          if (a != null) return a;
          var i = H(),
            l = yield fe(e, i),
            s = yield he(e, l);
          if (s == null) {
            ye(i);
            var u = yield fe(e, H());
            if (((s = u !== l ? yield he(e, u) : null), s == null))
              throw r("err")("background " + e + " package link refused");
          }
          var c = yield ve(e, s);
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] background ",
                  ": ",
                  "",
                  "",
                ])),
              e,
              ke(c),
              n ? "" : ", for its preview",
            ),
            o("WAWebVoipBackgroundImageStore").storeBackgroundImage(e, c, {
              countsAsUse: n,
            }),
            c
          );
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.countsAsUse,
            r = yield o(
              "WAWebVoipBackgroundImageStore",
            ).readStoredBackgroundImage(e, { countsAsUse: n });
          return (
            r != null &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] background ",
                    ": ",
                    ", kept on the device",
                    "",
                  ])),
                e,
                ke(r),
                n ? "" : ", for its preview",
              ),
            r
          );
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = (yield t).find(function (t) {
            return t.id === e;
          });
          if (n == null)
            throw (U.add(e), r("err")("background " + e + " is not offered"));
          return n.packageUrl;
        })),
        ge.apply(this, arguments)
      );
    }
    function he(t, a) {
      return He(
        "background " + t + " package",
        E,
        (function () {
          var i = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, i) {
              var l = yield self.fetch(a, { signal: n });
              if (I.has(l.status))
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] background ",
                        " package link refused: HTTP ",
                        "",
                      ])),
                    t,
                    l.status,
                  ),
                  null
                );
              if (!l.ok) throw r("err")("HTTP " + l.status);
              return Ce(l, i);
            },
          );
          return function (e, t) {
            return i.apply(this, arguments);
          };
        })(),
      );
    }
    function ye(e) {
      var t;
      ((t = A) == null ? void 0 : t.list) === e && (A = null);
    }
    function Ce(e, t) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t();
          var r = e.body;
          if (r == null) return e.arrayBuffer();
          var o = r.getReader(),
            a = [],
            i = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield o.read(),
                    n = e.done,
                    r = e.value;
                  n || r == null || (a.push(r), t(), yield i());
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          yield i();
          var l = 0;
          for (var s of a) l += s.length;
          var u = new Uint8Array(l),
            c = 0;
          for (var d of a) (u.set(d, c), (c += d.length));
          return u.buffer;
        })),
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!We(t))
            throw r("err")(
              "background " +
                e +
                " package is not a zip (" +
                t.byteLength +
                " B)",
            );
          var n,
            o = null;
          try {
            ((n = yield Te(t)), (o = n != null ? yield Re(n) : null));
          } catch (t) {
            throw (
              q.add(e),
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
              q.add(e),
              r("err")(
                "background " +
                  e +
                  " package has no picture its scene lays out",
              )
            );
          if (o != null)
            throw (q.add(e), r("err")("background " + e + " image " + o));
          return n;
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (typeof createImageBitmap != "function") return null;
          var t = yield (g || (g = n("Promise"))).allSettled(
              e.tiles.map(function (e) {
                return createImageBitmap(e);
              }),
            ),
            o = t.flatMap(function (e) {
              return e.status === "fulfilled" ? [e.value] : [];
            });
          try {
            for (var a of t)
              if (a.status === "rejected") throw r("getErrorSafe")(a.reason);
            var i = o[0],
              l = i.height,
              s = i.width;
            if (
              o.some(function (e) {
                return e.width !== s || e.height !== l;
              })
            )
              return "has tiles of different sizes";
            var u = s * e.columns,
              c = l * e.rows;
            return u > w || c > w
              ? "is too large (" + u + "x" + c + ")"
              : e.tiles.some(function (e, t) {
                    return e.type !== "image/jpeg" && Ee(o[t]);
                  })
                ? "has see-through parts"
                : null;
          } finally {
            for (var d of o) d.close();
          }
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e) {
      if (typeof OffscreenCanvas == "function") {
        var t = new OffscreenCanvas(M, M).getContext("2d");
        if (t != null) {
          t.drawImage(e, 0, 0, M, M);
          for (
            var n = t.getImageData(0, 0, M, M), r = n.data, o = 3;
            o < r.length;
            o += 4
          )
            if (r[o] < 255) return !0;
        }
      }
      return !1;
    }
    function ke(e) {
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
    function Ie(e) {
      var t,
        n = (t = ze(e, "payload")) != null ? t : e,
        a = ze(ze(n, "data"), "ar_effect_collection"),
        i = Array.isArray(a) ? a[0] : null,
        l = ze(i, "ar_effects"),
        u = ze(l, "nodes");
      if (!Array.isArray(u))
        throw r("err")("background images: unexpected response");
      ze(ze(l, "page_info"), "has_next_page") === !0 &&
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] the server has more than the ",
              " effects asked for; the rest aren't offered",
            ])),
          y,
        );
      var c = [];
      for (var d of u) {
        var m,
          p,
          _,
          f = je(d, "id"),
          g = (m = je(d, "localized_name")) != null ? m : je(d, "name"),
          h = je(ze(ze(d, "best_instance"), "packaged_file"), "uri");
        f == null ||
          g == null ||
          h == null ||
          !S(f) ||
          c.push({
            description:
              (p =
                (_ = je(d, "localized_description")) != null
                  ? _
                  : je(d, "description")) != null
                ? p
                : "",
            id: f,
            name: g,
            packageUrl: h,
            thumbnailUrl: je(ze(d, "thumbnail"), "uri"),
          });
      }
      return c;
    }
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!We(e)) return null;
          var t = yield xe(e, 0),
            r = t.images,
            a = t.scenes,
            i = yield (g || (g = n("Promise"))).all(
              a.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return {
                        layout: o(
                          "WAWebVoipBackgroundSceneTiles",
                        ).getSceneTileLayout(yield Pe(e)),
                        zip: e.zip,
                      };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            l = i.find(function (e) {
              var t = e.layout;
              return t != null;
            });
          return (l == null ? void 0 : l.layout) == null
            ? null
            : Me(
                l.layout,
                r.filter(function (e) {
                  var t = e.zip;
                  return t === l.zip;
                }),
              );
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e, t) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            o,
            a = qe(e),
            i = {
              images: a
                .filter(function (e) {
                  return Be(e.name) != null;
                })
                .map(function (t) {
                  return { entry: t, zip: e };
                }),
              scenes: a
                .filter(function (e) {
                  return Oe(e.name) === "main.json";
                })
                .map(function (t) {
                  return { entry: t, zip: e };
                }),
            };
          if (t >= N) return i;
          var l = yield (g || (g = n("Promise"))).all(
            a
              .filter(function (e) {
                return /\.(arfx|zip)$/i.test(e.name);
              })
              .map(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = yield Ue(e, n);
                      return We(r) ? xe(r, t + 1) : { images: [], scenes: [] };
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
          );
          return {
            images: (r = i.images).concat.apply(
              r,
              l.map(function (e) {
                var t = e.images;
                return t;
              }),
            ),
            scenes: (o = i.scenes).concat.apply(
              o,
              l.map(function (e) {
                var t = e.scenes;
                return t;
              }),
            ),
          };
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe(e) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entry,
            n = e.zip;
          try {
            return JSON.parse(new TextDecoder().decode(yield Ue(n, t)));
          } catch (e) {
            return null;
          }
        })),
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var o = yield (g || (g = n("Promise"))).all(
            e.tiles.map(function (e) {
              var n = e.fileName,
                o = t.find(function (e) {
                  var t = e.entry;
                  return Oe(t.name) === n;
                });
              if (o == null) throw r("err")("tile " + n + " is missing");
              return Ae(o);
            }),
          );
          return { columns: e.columns, rows: e.rows, tiles: o };
        })),
        we.apply(this, arguments)
      );
    }
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.entry,
            r = e.zip;
          return new Blob([yield Ue(r, n)], {
            type: (t = Be(n.name)) != null ? t : "",
          });
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e) {
      return e.slice(e.lastIndexOf("/") + 1);
    }
    function Be(e) {
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
    function We(e) {
      return e.byteLength >= 4 && new DataView(e).getUint32(0, !0) === T;
    }
    function qe(e) {
      for (
        var t = new DataView(e), n = -1, r = e.byteLength - 22, o = r;
        o >= Math.max(0, r - 65535);
        o--
      )
        if (t.getUint32(o, !0) === x) {
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
        u < a && !(i + 46 > e.byteLength || t.getUint32(i, !0) !== D);
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
    function Ue(e, t) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var o = new DataView(e),
            a = t.localOffset;
          if (a + 30 > e.byteLength || o.getUint32(a, !0) !== T)
            throw r("err")("zip entry " + t.name + ": no local header");
          var i = a + 30 + o.getUint16(a + 26, !0) + o.getUint16(a + 28, !0);
          if (i + t.compressedSize > e.byteLength)
            throw r("err")("zip entry " + t.name + ": truncated");
          var l = new Uint8Array(e, i, t.compressedSize);
          e: {
            if (t.method === $) return l.slice().buffer;
            if (t.method === P) {
              if (typeof DecompressionStream == "function") {
                var s = new DecompressionStream("deflate-raw"),
                  u = s.writable.getWriter(),
                  c = yield (g || (g = n("Promise"))).all([
                    u.write(l),
                    u.close(),
                    new Response(s.readable).arrayBuffer(),
                  ]),
                  d = c[2];
                return d;
              }
              throw r("err")("zip entry " + t.name + ": cannot inflate");
            }
            throw r("err")("zip entry " + t.name + ": method " + t.method);
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e, t, n, r) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            i === void 0 && (i = 1);
            var l = self.performance.now(),
              s = new AbortController(),
              u = self.setTimeout(function () {
                return s.abort();
              }, t),
              c = function () {
                (self.clearTimeout(u),
                  (u = self.setTimeout(function () {
                    return s.abort();
                  }, t)));
              },
              d;
            try {
              d = yield new (g || (g = n("Promise")))(function (e, t) {
                (s.signal.addEventListener("abort", function () {
                  return t(r("err")("cancelled"));
                }),
                  a(s.signal, c).then(e, t));
              });
            } catch (c) {
              self.clearTimeout(u);
              var m = Math.round(self.performance.now() - l),
                h = s.signal.aborted
                  ? r("err")(e + ": nothing received for " + t + " ms")
                  : r("getErrorSafe")(c),
                y = k[i - 1];
              if (y == null)
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
                    m,
                    i,
                    h.message,
                  ),
                  h
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
                  m,
                  i,
                  y,
                  h.message,
                ),
                yield new (g || (g = n("Promise")))(function (e) {
                  self.setTimeout(e, y);
                }),
                He(e, t, a, i + 1)
              );
            }
            return (
              self.clearTimeout(u),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] ",
                    " took ",
                    " ms (attempt ",
                    ")",
                  ])),
                e,
                Math.round(self.performance.now() - l),
                i,
              ),
              d
            );
          },
        )),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function je(e, t) {
      var n = ze(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    ((l.getBackgroundImages = H),
      (l.prefetchBackgroundImages = z),
      (l.peekBackgroundImages = j),
      (l.getBackgroundImage = K),
      (l.getBackgroundImageForPreview = Q),
      (l.peekBackgroundImage = X),
      (l.readStoredBackgroundImageForPreview = Y),
      (l.subscribeToBackgroundImageReady = Z),
      (l.isBackgroundImageUnusable = te),
      (l.resetBackgroundImagesForTesting = ne),
      (l.parseBackgroundImageList = Ie),
      (l.extractBackgroundImage = Te));
  },
  98,
);
