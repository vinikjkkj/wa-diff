__d(
  "stablelib-chacha20poly1305-1.0.1",
  [
    "stablelib-chacha-1.0.1",
    "stablelib-poly1305-1.0.1",
    "stablelib-wipe-1.0.1",
    "stablelib-binary-1.0.1",
    "stablelib-constant-time-1.0.1",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("stablelib-chacha-1.0.1")),
      s = e(n("stablelib-poly1305-1.0.1")),
      u = e(n("stablelib-wipe-1.0.1")),
      c = e(n("stablelib-binary-1.0.1")),
      d = e(n("stablelib-constant-time-1.0.1")),
      m = {},
      p = { exports: m };
    function _() {
      Object.defineProperty(m, "__esModule", { value: !0 });
      var e = l(),
        t = s(),
        n = u(),
        r = c(),
        o = d();
      ((m.KEY_LENGTH = 32), (m.NONCE_LENGTH = 12), (m.TAG_LENGTH = 16));
      var a = new Uint8Array(16),
        i = (function () {
          function i(e) {
            if (
              ((this.nonceLength = m.NONCE_LENGTH),
              (this.tagLength = m.TAG_LENGTH),
              e.length !== m.KEY_LENGTH)
            )
              throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(e);
          }
          return (
            (i.prototype.seal = function (t, r, o, a) {
              if (t.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              var i = new Uint8Array(16);
              i.set(t, i.length - t.length);
              var l = new Uint8Array(32);
              e.stream(this._key, i, l, 4);
              var s = r.length + this.tagLength,
                u;
              if (a) {
                if (a.length !== s)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length",
                  );
                u = a;
              } else u = new Uint8Array(s);
              return (
                e.streamXOR(this._key, i, r, u, 4),
                this._authenticate(
                  u.subarray(u.length - this.tagLength, u.length),
                  l,
                  u.subarray(0, u.length - this.tagLength),
                  o,
                ),
                n.wipe(i),
                u
              );
            }),
            (i.prototype.open = function (t, r, a, i) {
              if (t.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              if (r.length < this.tagLength) return null;
              var l = new Uint8Array(16);
              l.set(t, l.length - t.length);
              var s = new Uint8Array(32);
              e.stream(this._key, l, s, 4);
              var u = new Uint8Array(this.tagLength);
              if (
                (this._authenticate(
                  u,
                  s,
                  r.subarray(0, r.length - this.tagLength),
                  a,
                ),
                !o.equal(u, r.subarray(r.length - this.tagLength, r.length)))
              )
                return null;
              var c = r.length - this.tagLength,
                d;
              if (i) {
                if (i.length !== c)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length",
                  );
                d = i;
              } else d = new Uint8Array(c);
              return (
                e.streamXOR(
                  this._key,
                  l,
                  r.subarray(0, r.length - this.tagLength),
                  d,
                  4,
                ),
                n.wipe(l),
                d
              );
            }),
            (i.prototype.clean = function () {
              return (n.wipe(this._key), this);
            }),
            (i.prototype._authenticate = function (e, o, i, l) {
              var s = new t.Poly1305(o);
              (l &&
                (s.update(l),
                l.length % 16 > 0 && s.update(a.subarray(l.length % 16))),
                s.update(i),
                i.length % 16 > 0 && s.update(a.subarray(i.length % 16)));
              var u = new Uint8Array(8);
              (l && r.writeUint64LE(l.length, u),
                s.update(u),
                r.writeUint64LE(i.length, u),
                s.update(u));
              for (var c = s.digest(), d = 0; d < c.length; d++) e[d] = c[d];
              (s.clean(), n.wipe(c), n.wipe(u));
            }),
            i
          );
        })();
      m.ChaCha20Poly1305 = i;
    }
    var f = !1;
    function g() {
      return (f || ((f = !0), _()), p.exports);
    }
    function h(e) {
      switch (e) {
        case void 0:
          return g();
      }
    }
    a.exports = h;
  },
  null,
);
