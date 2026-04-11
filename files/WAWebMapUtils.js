__d(
  "WAWebMapUtils",
  ["WAWebAssetLoaderDpiChangeDispatch", "WAWebL10N", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 17,
      s = 15,
      u = 36,
      c = 6378137,
      d = "0x4285F433",
      m = "0x4285F488",
      p = 1,
      _ = "https://maps.googleapis.com/maps/api/staticmap",
      f = "https://maps.google.com/maps/search",
      g = "https://maps.google.com/maps",
      h =
        "style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d",
      y = 50;
    function C(e) {
      for (
        var t = e.lat,
          n = e.lng,
          r = e.numPoints,
          o = e.radiusMeters,
          a = [],
          i = (t * Math.PI) / 180,
          l = 0;
        l <= r;
        l++
      ) {
        var s = (2 * Math.PI * l) / r,
          u = (o * Math.cos(s)) / c,
          d = (o * Math.sin(s)) / (c * Math.cos(i));
        a.push([t + (u * 180) / Math.PI, n + (d * 180) / Math.PI]);
      }
      return a;
    }
    function b(e) {
      var t = "",
        n = 0,
        r = 0;
      for (var o of e) {
        var a = o[0],
          i = o[1],
          l = Math.round(a * 1e5),
          s = Math.round(i * 1e5);
        ((t += v(l - n)), (t += v(s - r)), (n = l), (r = s));
      }
      return t;
    }
    function v(e) {
      for (var t = e < 0 ? -e * 2 - 1 : e * 2, n = ""; t >= 32; )
        ((n += String.fromCharCode((t % 32) + 32 + 63)),
          (t = Math.floor(t / 32)));
      return ((n += String.fromCharCode(t + 63)), n);
    }
    function S(e, t, n, r) {
      var o = (2 * Math.PI * c) / 256,
        a = Math.cos((t * Math.PI) / 180),
        i = Math.min(n, r),
        l = Math.floor(Math.log2((i * o * a) / (2.5 * e)));
      return Math.max(1, Math.min(l, s));
    }
    function R(t, n, o) {
      var a = r("WAWebL10N").getNormalizedLocale();
      return o
        ? f +
            "/" +
            encodeURIComponent(o) +
            "/@" +
            t +
            "," +
            n +
            "," +
            e +
            "z?hl=" +
            a
        : r("WAWebURLUtils").build(g, { q: t + "," + n, z: e, hl: a });
    }
    function L(e) {
      var t = e.height,
        n = e.isDarkTheme,
        o = e.lat,
        a = e.lng,
        i = e.radiusMeters,
        l = e.showMarker,
        c = e.width,
        _ = e.zoom,
        f = t + y,
        g =
          r("WAWebAssetLoaderDpiChangeDispatch").currentRes ===
          r("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH
            ? 2
            : 1,
        h = r("WAWebL10N").getNormalizedLocale(),
        v = o + ", " + a,
        R = "color:red|" + v,
        L = c + "x" + f,
        k;
      _ != null ? (k = _) : i != null && i > 0 ? (k = S(i, o, c, f)) : (k = s);
      var I = { zoom: k.toString(), size: L, scale: g.toString(), language: h };
      ((I.key = r("WAWebURLUtils").GSM_API_KEY),
        l ? (I.markers = R) : (I.center = v));
      var T = E(I, n);
      if (i != null && i > 0) {
        var D = C({ lat: o, lng: a, numPoints: u, radiusMeters: i }),
          x = b(D),
          $ = "fillcolor:" + d + "|color:" + m + ("|weight:" + p + "|enc:" + x);
        T += "&path=" + encodeURIComponent($);
      }
      return T;
    }
    function E(e, t) {
      var n = r("WAWebURLUtils").build(_, e);
      return t ? n + "&" + h : n;
    }
    ((l.getMapUrl = R), (l.getMapImgSrcUrl = L));
  },
  98,
);
