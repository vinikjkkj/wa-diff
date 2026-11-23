__d(
  "WAWebSharableEventCoverPhoto",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = 1.7777777777777777,
      s = 1600,
      u = 0.85,
      c = "#ffffff";
    async function d(e) {
      var t = await createImageBitmap(e),
        n = m(t.width, t.height),
        o = document.createElement("canvas");
      ((o.width = n.width), (o.height = n.height));
      var a = o.getContext("2d");
      if (a == null)
        throw r("err")("[sharable_event] no 2d canvas for the cover photo");
      ((a.fillStyle = c),
        a.fillRect(0, 0, n.width, n.height),
        a.drawImage(t, n.sx, n.sy, n.sw, n.sh, 0, 0, n.width, n.height),
        t.close());
      var i = o.toDataURL("image/jpeg", u);
      return { base64Jpeg: i.slice(i.indexOf(",") + 1), previewUrl: i };
    }
    function m(t, n) {
      var r = t / n > e,
        o = r ? n * e : t,
        a = r ? n : t / e,
        i = Math.round(Math.min(o, s));
      return {
        sx: (t - o) / 2,
        sy: (n - a) / 2,
        sw: o,
        sh: a,
        width: i,
        height: Math.round(i / e),
      };
    }
    ((l.makeSharableEventCoverJpeg = d), (l.getSharableEventCoverCrop = m));
  },
  98,
);
