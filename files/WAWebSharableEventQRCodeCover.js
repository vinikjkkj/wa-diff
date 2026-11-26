__d(
  "WAWebSharableEventQRCodeCover",
  ["WAWebQRCodeCardImage"],
  function (t, n, r, o, a, i, l) {
    var e = 60,
      s = 106,
      u = 12;
    async function c(t, n) {
      var r = d(t),
        a = await Promise.all([
          m(n),
          r != null ? o("WAWebQRCodeCardImage").loadSvgImage(r.icon) : null,
        ]),
        i = a[0],
        l = a[1];
      return i != null
        ? { type: "image", height: e, image: i, radius: u, width: s }
        : r == null || l == null
          ? null
          : {
              type: "icon",
              color: getComputedStyle(r.circle).backgroundColor,
              icon: l,
              iconSize: r.icon.getBoundingClientRect().width,
              size: e,
            };
    }
    function d(e) {
      if (e.querySelector("img") != null) return null;
      var t = e.firstElementChild,
        n = t == null ? void 0 : t.querySelector("svg");
      return t != null && n != null ? { circle: t, icon: n } : null;
    }
    async function m(e) {
      if (e == null || e === "") return null;
      try {
        var t = await window.fetch(e);
        return t.ok ? await createImageBitmap(await t.blob()) : null;
      } catch (e) {
        return null;
      }
    }
    l.loadSharableEventQRCodeCover = c;
  },
  98,
);
