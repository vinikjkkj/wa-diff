__d(
  "WAWebSignalCommonUtils",
  ["WAByteBuffer", "WAWebSignalAddress", "err", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Uint8Array(1);
      (self.crypto.getRandomValues(t), s(e, (t[0] & 15) + 1));
    }
    function s(e, t) {
      for (var n = 0; n < t; n++) e.writeUint8(t);
    }
    function u(e) {
      return c(e);
    }
    function c(e) {
      if (typeof e == "string") return o("WAByteBuffer").wrapString(e);
      if (e instanceof Uint8Array) return o("WAByteBuffer").wrapUint8Array(e);
      if (e instanceof ArrayBuffer) return o("WAByteBuffer").wrapArrayBuffer(e);
      throw r("err")("[wrapToArrayBuffer] Unknown input type " + typeof e);
    }
    function d(e) {
      return o("WAByteBuffer").wrapBufferToString(e);
    }
    function m(e, t) {
      if (!e || !t || e.byteLength !== t.byteLength) return !1;
      for (
        var n = new DataView(e), r = new DataView(t), o = 0;
        o < n.byteLength;
        o++
      )
        if (n.getUint8(o) !== r.getUint8(o)) return !1;
      return !0;
    }
    function p(e) {
      if (typeof e != "string" || !e.match(/.*\.\d+/)) {
        var t =
          "Invalid SignalLikeProtocolAddress string - regex does not match";
        throw (r("gkx")("26258") || (t += " " + e), r("err")(t));
      }
      var n = e.split(".");
      if (n.length !== 2) {
        var o =
          "Invalid SignalLikeProtocolAddress string - wrong number of parts";
        throw (r("gkx")("26258") || (o += " " + e), r("err")(o));
      }
      var a = "_deprecated",
        i = "_status";
      return n[0].includes(a)
        ? n[0].substr(0, n[0].length - a.length)
        : n[0].includes(i)
          ? n[0].substr(0, n[0].length - i.length)
          : n[0];
    }
    function _(e, t) {
      var n = 0,
        r = new (o("WAWebSignalAddress").SignalAddress)(e, t),
        a = r.toString();
      return a + "." + n;
    }
    function f(e, t) {
      if (!(e.isUser() || e.isServer() || e.isPSA()))
        throw r("err")(
          "Jid " +
            e.toString({ legacy: !0 }) +
            ' is not fully qualified, jid.server should be "s.whatsapp.net"',
        );
      return _(e, t);
    }
    function g(e, t, n) {
      return e + "::" + f(t, n);
    }
    var h = { name: "AES-CTR", length: 128, counter: new Uint8Array(16) };
    function y(e) {
      return self.crypto.subtle
        .generateKey({ name: h.name, length: h.length }, !1, [
          "encrypt",
          "decrypt",
        ])
        .then(function (t) {
          return self.crypto.subtle.encrypt(h, t, e).then(function (e) {
            return { encKey: t, value: e };
          });
        });
    }
    function C(e) {
      return self.crypto.subtle.decrypt(h, e.encKey, e.value);
    }
    ((l.writeRandomPadMax16 = e),
      (l.strToBuffer = u),
      (l.bufferToStr = d),
      (l.bufferEqual = m),
      (l.getSignalLikeAddressName = p),
      (l.createSignalLikeAddress = _),
      (l.createSignalAddress = f),
      (l.createSignalLikeSenderKeyName = g),
      (l.encryptRegistrationMaterial = y),
      (l.decryptRegistrationMaterial = C));
  },
  98,
);
