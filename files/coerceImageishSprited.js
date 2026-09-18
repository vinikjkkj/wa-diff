__d(
  "coerceImageishSprited",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || typeof e != "object" || !e.sprited) return null;
      var t = e;
      return t.sprited === 1
        ? {
            type: "css",
            className: t.spriteMapCssClass + " " + t.spriteCssClass,
            identifier: t.loggingID,
          }
        : {
            type: "cssless",
            style: {
              backgroundImage: "url('" + t.spi + "')",
              backgroundPosition: t.p,
              backgroundSize: t.sz,
              width: t.w + "px",
              height: t.h + "px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            },
            identifier: t.loggingID,
          };
    }
    i.default = e;
  },
  66,
);
