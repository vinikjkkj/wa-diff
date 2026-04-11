__d(
  "oz-player/networks/getOzSegmentStreamableRange",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (!e.length) return null;
      var t = e[0].getURI().toString(),
        n = e[0].getByteRange();
      if (!n) return null;
      for (var r = n, o = 1; o < e.length; o++) {
        var a = e[o];
        if (a.getURI().toString() !== t) return null;
        var i = a.getByteRange();
        if (!r || !i || r.endByte === null || i.startByte !== r.endByte + 1)
          return null;
        r = i;
      }
      return { startByte: n.startByte, endByte: r.endByte };
    }
    i.default = e;
  },
  66,
);
