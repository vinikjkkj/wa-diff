__d(
  "WAWebWDSProfilePhotoSize",
  [],
  function (t, n, r, o, a, i) {
    var e = [
      ["xxxSmall", 20],
      ["xxSmall", 24],
      ["extraSmall", 36],
      ["small", 40],
      ["medium", 48],
      ["large", 64],
      ["extraLarge", 88],
      ["xxLarge", 120],
    ];
    function l(t) {
      var n = e[0],
        r = n[0],
        o = n[1];
      for (var a of e) {
        var i = a[0],
          l = a[1];
        Math.abs(l - t) < Math.abs(o - t) && ((r = i), (o = l));
      }
      return r;
    }
    function s(t) {
      var n = e[0],
        r = n[0];
      for (var o of e) {
        var a = o[0],
          i = o[1];
        i <= t && (r = a);
      }
      return r;
    }
    ((i.getNearestWDSProfilePhotoSize = l),
      (i.getLargestFittingWDSProfilePhotoSize = s));
  },
  66,
);
