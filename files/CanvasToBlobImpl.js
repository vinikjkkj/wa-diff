__d(
  "CanvasToBlobImpl",
  ["BlobFactory"],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      for (
        var r = atob(e.substr(e.indexOf(",") + 1)),
          o = new Uint8Array(r.length),
          a = 0;
        a < r.length;
        a++
      )
        o[a] = r.charCodeAt(a);
      return n("BlobFactory").getBlob([o], { type: t });
    }
    a.exports = { getBlob: e };
  },
  null,
);
