__d(
  "WAWebAltDeviceLinkingBase32Encode",
  [],
  function (t, n, r, o, a, i) {
    var e = "123456789ABCDEFGHJKLMNPQRSTVWXYZ";
    function l(t) {
      for (
        var n = new DataView(t.buffer, t.byteOffset, t.byteLength),
          r = 0,
          o = 0,
          a = "",
          i = 0;
        i < n.byteLength;
        i++
      )
        for (o = (o << 8) | n.getUint8(i), r += 8; r >= 5; )
          ((a += e[(o >>> (r - 5)) & 31]), (r -= 5));
      return (r > 0 && (a += e[(o << (5 - r)) & 31]), a);
    }
    i.bytesToCrockford = l;
  },
  66,
);
