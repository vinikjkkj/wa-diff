__d(
  "EnvelopeEncryption",
  ["Promise", "tweetnacl-sealedbox-js"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = window.crypto || window.msCrypto,
      u = 64,
      c = 1,
      d = 1,
      m = 1,
      p = 2,
      _ = 32,
      f = 16,
      g = d + m + p + _ + r("tweetnacl-sealedbox-js").overheadLength + f;
    function h(e) {
      for (var t = [], n = 0; n < e.length; n += 2)
        t.push(parseInt(e.slice(n, n + 2), 16));
      return new Uint8Array(t);
    }
    function y(t, o, a, i) {
      var l = g + a.length;
      if (o.length != u) {
        var y = new Error("public key is not a valid hex sting");
        throw (y.stack, y);
      }
      var C = h(o);
      if (!C) {
        var b = new Error("public key is not a valid hex string");
        throw (b.stack, b);
      }
      var v = new Uint8Array(l),
        S = 0;
      ((v[S] = c), (S += d), (v[S] = t), (S += m));
      var R = { name: "AES-GCM", length: _ * 8 },
        L = {
          name: "AES-GCM",
          iv: new Uint8Array(12),
          additionalData: i,
          tagLen: f,
        };
      return s.subtle
        .generateKey(R, !0, ["encrypt", "decrypt"])
        .then(function (t) {
          var r = s.subtle.exportKey("raw", t),
            o = s.subtle.encrypt(L, t, a.buffer);
          return (e || (e = n("Promise"))).all([r, o]);
        })
        .then(function (e) {
          var t = new Uint8Array(e[0]),
            n = r("tweetnacl-sealedbox-js").seal(t, C);
          if (
            ((v[S] = n.length & 255),
            (v[S + 1] = (n.length >> 8) & 255),
            (S += p),
            v.set(n, S),
            (S += _),
            (S += r("tweetnacl-sealedbox-js").overheadLength),
            n.length !== _ + r("tweetnacl-sealedbox-js").overheadLength)
          ) {
            var o = new Error("encrypted key is the wrong length");
            throw (o.stack, o);
          }
          var a = new Uint8Array(e[1]),
            i = a.slice(-f),
            l = a.slice(0, -f);
          return (v.set(i, S), (S += f), v.set(l, S), v);
        })
        .catch(function (e) {
          throw e;
        });
    }
    l.encrypt = y;
  },
  98,
);
