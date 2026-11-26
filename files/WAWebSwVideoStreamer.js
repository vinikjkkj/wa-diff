__d(
  "WAWebSwVideoStreamer",
  [
    "WACryptoUtils",
    "WALogger",
    "WAPromiseTimeout",
    "WATypedArraysConcat",
    "WAWebCryptoDecryptPartialMedia",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSwUtils",
    "err",
    "getErrorSafe",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 1024,
      _ = 5 * 1e3,
      f = 16,
      g = 64 * p,
      h = g * 24,
      y = new Set([
        "text/html",
        "application/xhtml+xml",
        "image/svg+xml",
        "text/xml",
        "application/xml",
      ]);
    function C(t) {
      var n = t.get("Content-Type"),
        r = n == null ? void 0 : n.split(";")[0].trim().toLowerCase();
      r != null &&
        y.has(r) &&
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sw] Neutralized document Content-Type on decrypted stream",
              ])),
          )
          .sendLogs("sw-unsafe-video-stream-content-type"),
        t.set("Content-Type", "application/octet-stream"),
        t.set("X-Content-Type-Options", "nosniff"));
    }
    function b() {
      return new Response("", {
        status: 403,
        statusText: "Forbidden",
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
    function v() {
      try {
        return !r("justknobx")._("8512");
      } catch (e) {
        return !0;
      }
    }
    var S = (function () {
      function e(e) {
        var t = e.chunkDecrypt,
          n = t === void 0 ? !1 : t,
          r = e.clientId,
          a = e.cryptoKeys,
          i = e.screenedStreams,
          l = e.streamData;
        this.generation = 0;
        for (
          var s = a.sidecar, u = [], c = 0;
          c < s.byteLength;
          c += o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE
        )
          u.push(s.slice(c, c + o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE));
        ((this.cryptoKeys = {
          iv: a.iv,
          sidecar: u,
          encKey: a.encKey,
          macKey: a.macKey,
        }),
          (this.streamData = l),
          (this.clientId = r),
          (this.chunkDecrypt = n),
          (this.screenedStreams = i));
      }
      var t = e.prototype;
      return (
        (t.fetchAndDecrypt = async function (t) {
          var e = this,
            n = this.streamData,
            a = n.clientUrl,
            i = n.msgKey,
            l = R(t),
            d = l.clientRangeEnd,
            m = l.clientRangeStart,
            p = k(m, d),
            _ = p.serverRangeEnd,
            f = p.serverRangeStart,
            g = E(t, f, _, a),
            h = await self.fetch(g);
          if (h.status === 404) return this.handleRMR(t, i);
          if (h.status >= 400)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sw] videoStreaming processRequest server returns ",
                    " error",
                  ])),
                h.status,
              ),
              this.generation++,
              r("WAWebSWBus")
                .request(this.clientId, r("WAWebSWBusActions").EXP_BACKOFF, {
                  generation: this.generation,
                })
                .then(function () {
                  return e.fetchAndDecrypt(t);
                })
            );
          if (((this.generation = 0), this.canChunkDecrypt(m, d, _))) {
            var y = await this.chunkDecryptScreened(h, _);
            if (y != null) return y;
          }
          var C = await h.arrayBuffer(),
            S = C.byteLength;
          if (!C || S < o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE)
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sw] videoStreaming ciphertext too short ",
                    "B",
                  ])),
                S,
              ),
              new Response("Ciphertext is too short - " + S + " bytes", {
                status: 500,
              })
            );
          var L;
          try {
            L = await this.decryptRange(f, C);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] Range check failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sw-range-check-failed"),
              new Response("Range check failed", { status: 500 })
            );
          }
          if (v() && !(await this.isStreamAllowed(f, _, L, t))) return b();
          var I = this.cleanupPlaintext({
              clientRangeEnd: d,
              clientRangeStart: m,
              plaintext: L,
              serverRangeEnd: _,
              serverRangeStart: f,
            }),
            T = this.createClientResponse({
              body: I,
              byteLength: I.byteLength,
              clientRangeStart: m,
              serverResponse: h,
            });
          return (this.sendBackArrayBuffer(m, I), T);
        }),
        (t.chunkDecryptScreened = async function (t, n) {
          var e;
          if (!v()) return this.chunkDecryptStream(t, n);
          var o = this.screenedStreams.get(this.streamKey());
          return o == null
            ? null
            : (await o)
              ? this.chunkDecryptStream(t, n)
              : ((e = t.body) == null || e.cancel().catch(r("WAWebNoop")), b());
        }),
        (t.isStreamAllowed = function (t, n, a, i) {
          var e = this,
            l = this.streamData.msgKey,
            s = this.streamKey(),
            u = this.screenedStreams.get(s);
          if (u != null) return u;
          var c = this.screenStream(t, n, a, i).catch(function (t) {
            return (
              e.screenedStreams.get(s) === c && e.screenedStreams.delete(s),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] videoStreaming screening unavailable",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sw-video-stream-screening-unavailable"),
              r("WAWebSWBus")
                .request(e.clientId, r("WAWebSWBusActions").REQUEST_RMR, {
                  key: l,
                })
                .catch(r("WAWebNoop")),
              !1
            );
          });
          return (this.rememberVerdict(s, c), c);
        }),
        (t.screenStream = async function (t, n, a, i) {
          var e = this,
            l = this.streamData.msgKey,
            s = t === 0 && n >= h - 1,
            u = s ? a.slice(0, h) : await this.fetchFirstWindow(i);
          if (u == null) throw r("err")("first window unavailable");
          var c = r("WAWebSWBus").request(
            this.clientId,
            r("WAWebSWBusActions").SCREEN_VIDEO_STREAM,
            { firstWindow: u, msgKey: l },
          );
          c.then(function (t) {
            (t === !0 || t === !1) &&
              (e.screenedStreams.has(e.streamKey()) ||
                e.screenedStreams.size < f) &&
              e.rememberVerdict(e.streamKey(), Promise.resolve(t));
          }).catch(r("WAWebNoop"));
          var d = await o("WAPromiseTimeout").promiseTimeout(c, _);
          if (d === !0) return !0;
          if (d === !1) return !1;
          throw r("err")("the stream screening request was not answered");
        }),
        (t.rememberVerdict = function (t, n) {
          if (!this.screenedStreams.has(t)) {
            var e = this.screenedStreams.keys().next().value;
            this.screenedStreams.size >= f &&
              e != null &&
              this.screenedStreams.delete(e);
          }
          this.screenedStreams.set(t, n);
        }),
        (t.fetchFirstWindow = async function (t) {
          var e = E(t, 0, h - 1, this.streamData.clientUrl),
            n = await self.fetch(e);
          if (n.status >= 400) return null;
          var r = await n.arrayBuffer();
          return r.byteLength < o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE
            ? null
            : this.decryptRange(0, r);
        }),
        (t.streamKey = function () {
          var e = this.streamData,
            t = e.msgKey,
            n = e.size;
          return t + "|" + n + "|" + D(this.cryptoKeys.iv);
        }),
        (t.canChunkDecrypt = function (t, n, r) {
          return (
            this.chunkDecrypt &&
            t === 0 &&
            n == null &&
            r < this.streamData.size
          );
        }),
        (t.chunkDecryptStream = async function (t, n) {
          var e = this,
            a = Math.ceil((n + 1) / g),
            i = r("nullthrows")(t.body).getReader(),
            l = I(i),
            s = 0,
            u = new ReadableStream({
              pull: async function (n) {
                if (s === a) {
                  (n.close(), await i.cancel().catch(r("WAWebNoop")));
                  return;
                }
                n.enqueue(
                  await e.decryptChunk(l, s++).catch(async function (e) {
                    throw (await i.cancel(e).catch(r("WAWebNoop")), e);
                  }),
                );
              },
              cancel: function (t) {
                return i.cancel(t);
              },
            }),
            c = u.tee(),
            d = c[0],
            p = c[1],
            _ = [],
            f = new Promise(function (t, n) {
              p.pipeTo(
                new WritableStream({
                  write: function (n) {
                    (_.push(n), t());
                  },
                  close: function () {
                    (t(),
                      e.sendBackArrayBuffer(
                        0,
                        o("WATypedArraysConcat").concatTypedArrays(
                          Uint8Array,
                          _,
                        ).buffer,
                      ));
                  },
                }),
              ).catch(function (e) {
                (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[sw] Chunk decrypt failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sw-chunk-decrypt-failed"),
                  n(e));
              });
            });
          return (
            await f.catch(async function (e) {
              throw (await d.cancel(e), e);
            }),
            this.createClientResponse({
              body: d,
              byteLength: n + 1,
              clientRangeStart: 0,
              serverResponse: t,
            })
          );
        }),
        (t.decryptRange = async function (t, n) {
          await this.validateSidecar(t, n);
          var e = await o(
              "WAWebCryptoDecryptPartialMedia",
            ).cleanupCiphertextAndIv({
              serverRangeStart: t,
              ciphertext: n,
              mediaKeys: this.cryptoKeys,
            }),
            r = e.ciphertext,
            a = e.iv;
          return o("WAWebCryptoDecryptPartialMedia").decrypt({
            ciphertext: r,
            iv: a,
            mediaKeys: this.cryptoKeys,
          });
        }),
        (t.decryptChunk = async function (t, n) {
          var e = k(n * g, (n + 1) * g - 1),
            o = e.serverRangeStart,
            a = await t(n),
            i = await this.decryptRange(o, a.buffer);
          if (i.byteLength !== g)
            throw r("err")("Chunk decrypt: a chunk did not decrypt to 64 kB");
          return new Uint8Array(i);
        }),
        (t.handleRMR = async function (t, n) {
          var e = await r("WAWebSWBus").request(
            this.clientId,
            r("WAWebSWBusActions").REQUEST_RMR,
            { key: n },
          );
          return (
            (this.cryptoKeys.encKey = e.encKey),
            (this.cryptoKeys.iv = e.iv),
            (this.streamData.clientUrl = e.clientUrl),
            (this.streamData.size = e.size),
            this.fetchAndDecrypt(t)
          );
        }),
        (t.cleanupPlaintext = function (t) {
          var e = t.clientRangeEnd,
            n = t.clientRangeStart,
            r = t.plaintext,
            a = t.serverRangeEnd,
            i = t.serverRangeStart,
            l =
              i === 0
                ? 0
                : n - (i + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE),
            s = e != null ? a - e : 0;
          return r.slice(l, r.byteLength - s);
        }),
        (t.validateSidecar = async function (t, n) {
          var e = n,
            r = this.cryptoKeys,
            a = r.iv,
            i = r.macKey,
            l = r.sidecar,
            s = { name: "HMAC", hash: { name: "SHA-256" } },
            u,
            c;
          t === 0
            ? ((u = 0), (c = a))
            : ((u = (t + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE) / g),
              (c = e.slice(0, o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE)),
              (e = e.slice(o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE)));
          for (
            var d = e.byteLength / g,
              m = await self.crypto.subtle.importKey(
                "raw",
                new Uint8Array(i),
                s,
                !1,
                ["sign"],
              ),
              p = [],
              _ = 0;
            _ < d;
            _++
          ) {
            var f = u + _,
              h = l[f],
              y = _ * g,
              C = e.slice(y, y + g),
              b = c;
            c = C.slice(
              g - o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE,
              g -
                o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE +
                o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE,
            );
            var v = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
              new Uint8Array(b),
              new Uint8Array(C),
            ]);
            p.push(this.validateChunk(v, m, h));
          }
          return Promise.all(p);
        }),
        (t.validateChunk = async function (t, n, a) {
          var e = await self.crypto.subtle.sign({ name: "HMAC" }, n, t),
            i = e.slice(0, o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE);
          if (!o("WACryptoUtils").arrayBuffersEqual(i, a))
            return Promise.reject(
              r("err")("Invalid Chunk: Does not match sidecar."),
            );
        }),
        (t.createClientResponse = function (t) {
          var e = t.body,
            n = t.byteLength,
            r = t.clientRangeStart,
            o = t.serverResponse,
            a = this.streamData.size,
            i = this.getContentRange(r, n),
            l = i.contentRangeEnd,
            s = i.contentRangeStart,
            u = "bytes " + s + "-" + l + "/" + a,
            c = new Headers(o.headers);
          (c.set("Content-Range", u), c.set("Content-Length", "" + n), C(c));
          var d = new Response(e, {
            status: o.status === 200 ? 206 : o.status,
            statusText: o.statusText,
            headers: c,
          });
          return d;
        }),
        (t.getContentRange = function (t, n) {
          var e = t,
            r = t + n - 1;
          return { contentRangeStart: e, contentRangeEnd: r };
        }),
        (t.sendBackArrayBuffer = function (t, n) {
          var e = this.getContentRange(t, n.byteLength),
            o = e.contentRangeEnd,
            a = e.contentRangeStart,
            i = { start: a, end: o, buffer: n };
          r("WAWebSWBus").request(
            this.clientId,
            r("WAWebSWBusActions").SEND_STREAMING_CHUNK,
            { msgKey: this.streamData.msgKey, data: i },
          );
        }),
        e
      );
    })();
    function R(e) {
      var t = L(e),
        n = t.clientRangeEndString,
        r = t.clientRangeStartString,
        o = parseInt(String(r), 10),
        a = parseInt(String(n), 10);
      return {
        clientRangeStart: isNaN(o) ? 0 : o,
        clientRangeEnd: isNaN(a) ? null : a,
      };
    }
    function L(e) {
      var t = e.headers.get("Range");
      if (t != null && t !== "") {
        var n = t.replace("bytes=", "").split("-"),
          r = n[0],
          o = n[1];
        return { clientRangeStartString: r, clientRangeEndString: o };
      }
      var a = new URL(e.url);
      return {
        clientRangeStartString: a.searchParams.get("bytesstart"),
        clientRangeEndString: a.searchParams.get("bytesend"),
      };
    }
    function E(e, t, n, r) {
      var a = new URL(r);
      (a.searchParams.set("bytestart", t.toString()),
        a.searchParams.set("byteend", n.toString()));
      var i = o("WAWebSwUtils").manuallyCloneRequest(e, a.toString(), {
        credentials: "omit",
        headers: new Headers({}),
        mode: "cors",
        referrer: e.referrer,
      });
      return i;
    }
    function k(e, t) {
      var n = e,
        r = t;
      return (
        e ? (n = $(e, g)) : (n = 0),
        t != null && t !== 0 ? (r = x(t, g) - 1) : (r = n + h - 1),
        n > 0 && (n -= o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE),
        { serverRangeStart: n, serverRangeEnd: r }
      );
    }
    function I(e) {
      var t = [],
        n = new Uint8Array(0);
      return async function (r) {
        var a = await T(e, t, g),
          i = a.slice(0, g);
        t = [a.slice(g)];
        var l =
          r === 0
            ? i
            : o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [n, i]);
        return (
          (n = i.slice(g - o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE)),
          l
        );
      };
    }
    async function T(e, t, n) {
      var a = t.reduce(function (e, t) {
        return e + t.byteLength;
      }, 0);
      if (a >= n)
        return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, t);
      var i = await e.read(),
        l = i.value;
      if (l == null) throw r("err")("Video range ended inside a chunk");
      return T(e, [].concat(t, [l]), n);
    }
    function D(e) {
      return Array.from(new Uint8Array(e), function (e) {
        return e.toString(16).padStart(2, "0");
      }).join("");
    }
    function x(e, t) {
      return Math.ceil(e / t) * t;
    }
    function $(e, t) {
      return Math.floor(e / t) * t;
    }
    ((l.enforceSafeMediaContentType = C),
      (l.rejectUnscreenedStreamRequest = b),
      (l.VideoStreamer = S),
      (l.createServerRequest = E),
      (l.computeServerRange = k),
      (l.createChunkCiphertextReader = I));
  },
  98,
);
