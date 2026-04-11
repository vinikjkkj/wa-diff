__d(
  "WAWebSyncdCryptoUtils",
  ["WACryptoUtils", "WASyncdKeyTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.length === 0) throw r("err")("buffers length is zero");
      if (e.length === 1) return e[0];
      var t = e.map(function (e) {
          return e.byteLength;
        }),
        n = t.reduce(function (e, t) {
          return e + t;
        }),
        o = new Uint8Array(n),
        a = 0,
        i;
      for (i = 0; i < e.length; i++)
        (o.set(new Uint8Array(e[i]), a), (a += e[i].byteLength));
      return o.buffer;
    }
    function s(e, t, n) {
      if (t < 0 || n < 0) throw r("err")("buffers length is zero");
      var o = new Array(3),
        a = new Uint8Array(e);
      return (
        (o[0] = a.slice(0, t).buffer),
        (o[1] = a.slice(t, t + n).buffer),
        (o[2] = a.slice(t + n).buffer),
        o
      );
    }
    function u(e) {
      return Uint8Array.from(
        e.split(" ").map(function (e) {
          return parseInt(e, 16);
        }),
      );
    }
    function c(e) {
      return Array.from(
        new Uint8Array(o("WASyncdKeyTypes").fromSyncKeyId(e)),
        function (e) {
          return e.toString(16);
        },
      )
        .toString()
        .replace(/,/g, " ");
    }
    function d(e) {
      return Array.from(new Uint8Array(e), function (e) {
        return e.toString(16).padStart(2, "0");
      }).join("");
    }
    function m(e) {
      var t = new ArrayBuffer(8);
      return (new DataView(t).setUint32(4, e, !1), t);
    }
    function p(e, t) {
      return o("WACryptoUtils").arrayBuffersEqual(
        o("WASyncdKeyTypes").fromSyncKeyId(e),
        o("WASyncdKeyTypes").fromSyncKeyId(t),
      );
    }
    ((l.combine = e),
      (l.split = s),
      (l.hexToUint8Array = u),
      (l.syncKeyIdToHex = c),
      (l.arrayBufferToHexPadded = d),
      (l.to64BitNetworkOrder = m),
      (l.syncKeyIdsEqual = p));
  },
  98,
);
