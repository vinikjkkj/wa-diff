__d(
  "PaymentLabyrinthEnvelope",
  ["Base64Utils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 12,
      u = 16,
      c = /^[A-Za-z0-9_-]+$/,
      d = /^(?:0|[1-9][0-9]*)$/;
    function m(e) {
      return o("Base64Utils")
        .fromArrayBuffer(e)
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
    }
    function p(e, t) {
      if (typeof e != "string" || !c.test(e) || e.length % 4 === 1)
        throw r("err")("Invalid Payment Labyrinth " + t);
      var n = e.replace(/-/g, "+").replace(/_/g, "/"),
        a = (4 - (n.length % 4)) % 4;
      try {
        return o("Base64Utils").toArrayBuffer(n.padEnd(n.length + a, "="));
      } catch (e) {
        throw r("err")("Invalid Payment Labyrinth " + t, e);
      }
    }
    function _(e) {
      if (typeof e != "string" || !d.test(e))
        throw r("err")("Invalid Payment Labyrinth epoch FBID");
      return e;
    }
    function f(t) {
      if (t !== e)
        throw r("err")("Unsupported Payment Labyrinth envelope version");
      return t;
    }
    function g(e, t) {
      var n = _(e),
        r = f(t);
      return new TextEncoder().encode(JSON.stringify([n, r])).buffer;
    }
    function h(t, n, o) {
      var a = _(t);
      if (n.byteLength !== s)
        throw r("err")("Invalid Payment Labyrinth IV length");
      if (o.byteLength < u)
        throw r("err")("Invalid Payment Labyrinth ciphertext length");
      return JSON.stringify({
        ciphertext: m(o),
        epoch_fbid: a,
        iv: m(n),
        version: e,
      });
    }
    function y(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        throw r("err")("Invalid Payment Labyrinth envelope JSON", e);
      }
      if (t == null || typeof t != "object" || Array.isArray(t))
        throw r("err")("Invalid Payment Labyrinth envelope");
      var n = _(t.epoch_fbid),
        o = f(t.version),
        a = p(t.iv, "IV"),
        i = p(t.ciphertext, "ciphertext");
      if (a.byteLength !== s)
        throw r("err")("Invalid Payment Labyrinth IV length");
      if (i.byteLength < u)
        throw r("err")("Invalid Payment Labyrinth ciphertext length");
      return { ciphertext: i, epochFbid: n, iv: a, version: o };
    }
    ((l.ENVELOPE_VERSION = e),
      (l.IV_LENGTH_BYTES = s),
      (l.createAdditionalAuthenticatedData = g),
      (l.serializeEnvelope = h),
      (l.parseEnvelope = y));
  },
  98,
);
