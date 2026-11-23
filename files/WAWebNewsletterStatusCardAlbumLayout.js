__d(
  "WAWebNewsletterStatusCardAlbumLayout",
  [
    "WAWebNewsletterShareToStatusEligibility",
    "WAWebNewsletterStatusCardTypography",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebNewsletterStatusCardTypography").fromAndroidDp(4),
      s = 2,
      u = 3;
    function c(e) {
      var t = e.album,
        n = e.area,
        r = e.font,
        a = e.measure,
        i = d(n, t),
        l =
          i[
            o("WAWebNewsletterShareToStatusEligibility")
              .NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS - 1
          ],
        s = t.moreText;
      return l == null || s == null
        ? { tiles: i, more: null }
        : {
            tiles: i,
            more: {
              tile: l,
              run: {
                text: s,
                x: l.x + (l.width - a(s, r)) / 2,
                y: l.y + l.height / 2,
                font: r,
                align: "left",
                isRtl: !1,
              },
            },
          };
    }
    function d(t, n) {
      var r = n.count,
        a = n.isFirstLandscape,
        i = t.x,
        l = t.y,
        c = (t.width - e) / 2,
        d = (t.height - e) / 2,
        m = i + c + e,
        p = l + d + e,
        _ = { width: t.width, height: t.height },
        f = { x: i, y: l, width: c, height: t.height },
        g = { x: i, y: l, width: t.width, height: d },
        h = function (t, n) {
          return { x: t, y: n, width: c, height: d };
        };
      return r >=
        o("WAWebNewsletterShareToStatusEligibility")
          .NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS
        ? [h(i, l), h(m, l), h(i, p), h(m, p)]
        : r === u
          ? a
            ? [g, h(i, p), h(m, p)]
            : [f, h(m, l), h(m, p)]
          : r === s
            ? a
              ? [g, babelHelpers.extends({}, g, { y: p })]
              : [f, babelHelpers.extends({}, f, { x: m })]
            : [babelHelpers.extends({ x: i, y: l }, _)];
    }
    l.layoutCardAlbum = c;
  },
  98,
);
