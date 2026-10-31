__d(
  "WAWebSharableEventCoverPhoto",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 1.7777777777777777,
      s = 1600,
      u = 0.85,
      c = "#ffffff";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield createImageBitmap(e),
            n = p(t.width, t.height),
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n) {
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
    ((l.makeSharableEventCoverJpeg = d), (l.getSharableEventCoverCrop = p));
  },
  98,
);
