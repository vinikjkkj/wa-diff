__d(
  "WAWebHatchNoiseApplicationCodec",
  ["WAWebHatchNoiseProtobuf", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = 6;
    function u(t) {
      if (t < e || t > s)
        throw r("err")("WAWebHatchNoiseApplicationCodec: invalid reset code");
    }
    function c(e) {
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      return (
        t.writeString(1, e.key, !1),
        t.writeString(2, e.value, !1),
        t.finish()
      );
    }
    function d(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = "",
          r = "",
          a = t.nextField();
        a != null;
        a = t.nextField()
      )
        e: {
          if (a.number === 1) {
            n = t.readString(a.wireType);
            break e;
          }
          if (a.number === 2) {
            r = t.readString(a.wireType);
            break e;
          }
          {
            t.skip(a.wireType);
            break e;
          }
        }
      return { key: n, value: r };
    }
    function m(e) {
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      (t.writeString(1, e.verb, !1), t.writeString(2, e.path, !1));
      for (var n of e.headers) t.writeBytes(3, c(n), !0);
      return (
        t.writeBytes(4, e.body, !1),
        t.writeVarint(5, e.endBody ? 1 : 0, !1),
        t.finish()
      );
    }
    function p(e) {
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      t.writeVarint(1, e.status, !1);
      for (var n of e.headers) t.writeBytes(2, c(n), !0);
      return (
        t.writeBytes(3, e.body, !1),
        t.writeVarint(4, e.endBody ? 1 : 0, !1),
        t.finish()
      );
    }
    function _(e) {
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      return (
        t.writeBytes(1, e.data, !1),
        t.writeVarint(2, e.endBody ? 1 : 0, !1),
        t.finish()
      );
    }
    function f(e) {
      u(e.code);
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      return (
        t.writeVarint(1, e.code, !1),
        t.writeString(2, e.reason, !1),
        t.finish()
      );
    }
    function g(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = "",
          r = "",
          a = [],
          i = new Uint8Array(0),
          l = !1,
          s = t.nextField();
        s != null;
        s = t.nextField()
      )
        e: {
          if (s.number === 1) {
            n = t.readString(s.wireType);
            break e;
          }
          if (s.number === 2) {
            r = t.readString(s.wireType);
            break e;
          }
          if (s.number === 3) {
            a.push(d(t.readBytes(s.wireType)));
            break e;
          }
          if (s.number === 4) {
            i = t.readBytes(s.wireType);
            break e;
          }
          if (s.number === 5) {
            l = t.readVarint(s.wireType) !== 0;
            break e;
          }
          {
            t.skip(s.wireType);
            break e;
          }
        }
      return { body: i, endBody: l, headers: a, path: r, verb: n };
    }
    function h(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = 0,
          r = [],
          a = new Uint8Array(0),
          i = !1,
          l = t.nextField();
        l != null;
        l = t.nextField()
      )
        e: {
          if (l.number === 1) {
            n = t.readVarint(l.wireType);
            break e;
          }
          if (l.number === 2) {
            r.push(d(t.readBytes(l.wireType)));
            break e;
          }
          if (l.number === 3) {
            a = t.readBytes(l.wireType);
            break e;
          }
          if (l.number === 4) {
            i = t.readVarint(l.wireType) !== 0;
            break e;
          }
          {
            t.skip(l.wireType);
            break e;
          }
        }
      return { body: a, endBody: i, headers: r, status: n };
    }
    function y(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = new Uint8Array(0),
          r = !1,
          a = t.nextField();
        a != null;
        a = t.nextField()
      )
        e: {
          if (a.number === 1) {
            n = t.readBytes(a.wireType);
            break e;
          }
          if (a.number === 2) {
            r = t.readVarint(a.wireType) !== 0;
            break e;
          }
          {
            t.skip(a.wireType);
            break e;
          }
        }
      return { data: n, endBody: r };
    }
    function C(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = 0,
          r = "",
          a = t.nextField();
        a != null;
        a = t.nextField()
      )
        e: {
          if (a.number === 1) {
            ((n = t.readVarint(a.wireType)), u(n));
            break e;
          }
          if (a.number === 2) {
            r = t.readString(a.wireType);
            break e;
          }
          {
            t.skip(a.wireType);
            break e;
          }
        }
      return { code: n, reason: r };
    }
    ((l.encodeApplicationRequest = m),
      (l.encodeApplicationResponse = p),
      (l.encodeBodyChunk = _),
      (l.encodeReset = f),
      (l.decodeApplicationRequest = g),
      (l.decodeApplicationResponse = h),
      (l.decodeBodyChunk = y),
      (l.decodeReset = C));
  },
  98,
);
