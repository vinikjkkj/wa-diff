__d(
  "getAvailableMimeCodecsFromDashManifest",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = /^(audio|video)\/.*$/;
      return t.test(e);
    }
    function l(t, n) {
      var r = [],
        o = n ? window.ManagedMediaSource : window.MediaSource;
      if (t != null) {
        for (
          var a = /mimeType=\"([^\"]*)\"[^\>]*codecs=\"([^\"]*)\"/g,
            i = /codecs=\"([^\"]*)\"[^\>]*mimeType=\"([^\"]*)\"/g,
            l,
            s = [];
          (l = a.exec(t));
        )
          s.push([l[1], l[2]]);
        for (; (l = i.exec(t)); ) s.push([l[2], l[1]]);
        for (var u of s) {
          var c = u[0],
            d = u[1],
            m = c + '; codecs="' + d + '"',
            p = c.startsWith("audio")
              ? "audio"
              : c.startsWith("video")
                ? "video"
                : "other",
            _ = !0,
            f = !1;
          (e(m) && ((f = !0), (_ = o ? o.isTypeSupported(m) : !1)),
            r.push({
              codecs: d,
              isRequiredForPlayback: f,
              isTypeSupported: _,
              mimeCodec: m,
              mimeType: c,
              representationType: p,
            }));
        }
      }
      return r;
    }
    i.default = l;
  },
  66,
);
