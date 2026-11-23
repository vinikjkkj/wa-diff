__d(
  "ZenonGenericWasmHelper",
  ["RequestStreamBodyUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t < 0 ? 0 : e._malloc(t);
    }
    function s(t) {
      var n = e(t, 4);
      return (t.setValue(n, 0, "i32"), n);
    }
    function u(t, n) {
      var r = e(t, n.length);
      return (d(t, n, r), r);
    }
    function c(t, n) {
      var r = e(t, n.length);
      return (m(t, n, r), [r, n.length]);
    }
    function d(e, t, n) {
      for (var r = 0; r < t.length; r++) e.setValue(n + r, t[r], "i8");
    }
    function m(e, t, n) {
      d(e, o("RequestStreamBodyUtils").stringToUint8Array(t), n);
    }
    function p(e, t, n) {
      var r = f(e, t, n);
      return o("RequestStreamBodyUtils").uint8ArrayToString(r);
    }
    function _(e, t, n) {
      var r = e.getValue(n, "i32"),
        o = f(e, t, r);
      return o.buffer;
    }
    function f(e, t, n) {
      for (var r = new Uint8Array(n), o = 0; o < n; ++o)
        r[o] = e.getValue(o + t, "i8");
      return r;
    }
    ((l.allocateWasmMemory = e),
      (l.allocateWasmInteger = s),
      (l.allocateWasmBuffer = u),
      (l.allocateWasmBufferFromString = c),
      (l.writeBytesIntoWasmBuffer = d),
      (l.writeStringIntoWasmBuffer = m),
      (l.readStringFromWasmBuffer = p),
      (l.transferDataFromWasmBufferToArrayBuffer = _),
      (l.readBytesFromWasmBuffer = f));
  },
  98,
);
