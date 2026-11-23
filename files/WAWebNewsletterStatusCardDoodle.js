__d(
  "WAWebNewsletterStatusCardDoodle",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCanvasUtils",
    "WAWebMediaLoad",
    "bx",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { width: 412.5, height: 749.25 },
      u = r("bx").getURL(r("bx")("89515")),
      c = "#EAE0D3",
      d = 2e3;
    async function m(t) {
      var n;
      try {
        n = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebMediaLoad").loadImage(u),
          d,
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-card] drawing the card without its doodles, which did not load",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
      var a = Math.round(s.width * t),
        i = Math.round(s.height * t),
        l = o("WAWebCanvasUtils").createCanvas(a, i),
        m = l.getContext("2d");
      return m == null
        ? null
        : (m.drawImage(n, 0, 0, a, i),
          (m.globalCompositeOperation = "source-in"),
          (m.fillStyle = c),
          m.fillRect(0, 0, a, i),
          { source: l, width: a, height: i });
    }
    ((l.CARD_DOODLE_TILE = s), (l.loadNewsletterStatusCardDoodle = m));
  },
  98,
);
