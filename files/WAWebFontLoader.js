__d(
  "WAWebFontLoader",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WANullthrows",
    "bx",
    "err",
    "gkx",
    "webfontloader",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (u = r("bx")).getURL(u("9544")),
      d = u.getURL(u("9545")),
      m = n("$InternalEnum")({
        SANS_SERIF: 0,
        SERIF: 1,
        NORICAN_REGULAR: 2,
        BRYNDAN_WRITE: 3,
        BEBASNEUE_REGULAR: 4,
        OSWALD_HEAVY: 5,
        NOTO_EMOJI: 6,
      }),
      p = {};
    ((p[m.SERIF] = { google: { families: ["Roboto"] } }),
      (p[m.SANS_SERIF] = { google: { families: ["Droid Serif"] } }),
      (p[m.NORICAN_REGULAR] = { google: { families: ["Norican"] } }),
      (p[m.BRYNDAN_WRITE] = { custom: { families: ["Bryndan-Write"] } }),
      (p[m.OSWALD_HEAVY] = { google: { families: ["Oswald:bold"] } }));
    var _ = {};
    ((_[m.BRYNDAN_WRITE] =
      '@font-face {font-family:"Bryndan-Write"; src:url("' +
      c +
      '") format("truetype");}'),
      (_[m.NOTO_EMOJI] =
        '@font-face {font-family:"Noto-Emoji"; src:url("' +
        d +
        '") format("truetype");}'));
    var f = (function () {
        function t() {
          ((this.loadedFonts = {}), (this.loadingPromise = {}));
        }
        var a = t.prototype;
        return (
          (a.load = function (t) {
            var e = this;
            if (this.loadedFonts[t]) return (s || (s = n("Promise"))).resolve();
            if (this.loadingPromise[t]) return this.loadingPromise[t];
            var o = p[t],
              a = _[t],
              i;
            a
              ? (i = new (s || (s = n("Promise")))(function (e, t) {
                  var n = document.createElement("style");
                  (n.appendChild(document.createTextNode(a)),
                    (n.onload = e),
                    (n.onerror = t),
                    document.head && document.head.appendChild(n));
                }))
              : (i = (s || (s = n("Promise"))).resolve());
            var l = i.then(function () {
              return new (s || (s = n("Promise")))(function (n, a) {
                var i = babelHelpers.extends({}, o, {
                  active: function () {
                    ((e.loadedFonts[t] = !0), n());
                  },
                  inactive: function () {
                    ((e.loadingPromise[t] = void 0),
                      a(r("err")("Failed to load font: " + m.getName(t))));
                  },
                });
                r("webfontloader").load(i);
              });
            });
            return ((this.loadingPromise[t] = l), l);
          }),
          (a.loadMessageFont = function (n) {
            if (r("gkx")("26256") && !n)
              return this.load(r("WANullthrows")(m.cast(0)));
            var t = m.cast(n);
            return t == null
              ? (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported font: ",
                      "",
                    ])),
                  n,
                ),
                this.load(m.SANS_SERIF))
              : this.load(t);
          }),
          (a.loadAllFonts = function () {
            var e = this;
            return (s || (s = n("Promise"))).all(
              Array.from(m.members(), function (t) {
                return e.load(t);
              }),
            );
          }),
          t
        );
      })(),
      g = new f();
    ((l.Font = m), (l.FontLoader = g));
  },
  98,
);
