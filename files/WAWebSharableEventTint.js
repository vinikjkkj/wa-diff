__d(
  "WAWebSharableEventTint",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        Green: "green",
        Yellow: "yellow",
        Pink: "pink",
        Purple: "purple",
        SkyBlue: "sky-blue",
        Orange: "orange",
      }),
      l = [e.Green, e.Yellow, e.Pink, e.Purple, e.SkyBlue, e.Orange],
      s = 31,
      u = 2147483647;
    function c(e) {
      for (var t = 0, n = 0; n < e.length; n++)
        t = (t * s + e.charCodeAt(n)) % u;
      return l[t % l.length];
    }
    ((i.SharableEventTint = e), (i.getSharableEventTint = c));
  },
  66,
);
