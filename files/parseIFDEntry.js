__d(
  "parseIFDEntry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.readU16(),
        n = e.readU16(),
        r = e.readU32(),
        o = Object.freeze({ offset: e.peekU32(), type: "offset" });
      switch (n) {
        case 1:
        case 2:
        case 7:
          if (r < 5) {
            o = { type: "data", values: [] };
            for (var a = 0; a < r; a++) o.values.push(e.readU8());
          }
          break;
        case 6:
          if (r < 5) {
            o = { type: "data", values: [] };
            for (var i = 0; i < r; i++) o.values.push(e.readI8());
          }
          break;
        case 3:
          if (r < 3) {
            o = { type: "data", values: [] };
            for (var l = 0; l < r; l++) o.values.push(e.readU16());
          }
          break;
        case 8:
          if (r < 3) {
            o = { type: "data", values: [] };
            for (var s = 0; s < r; s++) o.values.push(e.readI16());
          }
          break;
        case 4:
          r < 2 && (o = { type: "data", values: [e.readU32()] });
          break;
        case 9:
          r < 2 && (o = { type: "data", values: [e.readI32()] });
          break;
        case 11:
          r < 2 && (o = { type: "data", values: [e.readF32()] });
          break;
        case 5:
        case 10:
        case 12:
          e.seekRelative(4);
          break;
      }
      return { format: n, tag: t, value: o };
    }
    i.default = e;
  },
  66,
);
