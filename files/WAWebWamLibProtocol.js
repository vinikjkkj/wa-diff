__d(
  "WAWebWamLibProtocol",
  ["WABinary"],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 0,
      u = 1,
      c = 2,
      d = 4;
    function m(e, t, n) {
      return f(e, t, n, s);
    }
    function p(e, t, n, r) {
      var o = r ? u : u | d;
      return f(e, t, n, o);
    }
    function _(e, t, n, r) {
      var o = r ? c : c | d;
      return f(e, t, n, o);
    }
    function f(e, t, n, r) {
      if (n == null) r === s && g(e, t, r);
      else if (typeof n == "number" && n === (n | 0))
        n === 0
          ? g(e, t, r | 16)
          : n === 1
            ? g(e, t, r | 32)
            : -128 <= n && n < 128
              ? (g(e, t, r | 48), e.writeInt8(n))
              : -32768 <= n && n < 32768
                ? (g(e, t, r | 64), e.writeInt16(n))
                : (g(e, t, r | 80), e.writeInt32(n));
      else if (typeof n == "number") (g(e, t, r | 112), e.writeFloat64(n));
      else if (typeof n == "string") {
        var a = o("WABinary").numUtf8Bytes(n);
        (a < 256
          ? (g(e, t, r | 128), e.writeUint8(a))
          : a < 65536
            ? (g(e, t, r | 144), e.writeUint16(a))
            : (g(e, t, r | 160), e.writeUint32(a)),
          e.writeString(n));
      }
    }
    function g(t, n, r) {
      n < 256
        ? (t.writeUint8(r), t.writeUint8(n))
        : (t.writeUint8(r | e), t.writeUint16(n));
    }
    ((l.writeGlobalAttribute = m), (l.writeEvent = p), (l.writeField = _));
  },
  98,
);
