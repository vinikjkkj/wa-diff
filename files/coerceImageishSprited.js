__d(
  "coerceImageishSprited",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return !e || typeof e != "object" || !e.sprited
        ? null
        : e.sprited === 1
          ? {
              type: "css",
              className: e.spriteMapCssClass + " " + e.spriteCssClass,
              identifier: e.loggingID,
            }
          : {
              type: "cssless",
              style: {
                backgroundImage: "url('" + e.spi + "')",
                backgroundPosition: e.p,
                backgroundSize: e.sz,
                width: e.w + "px",
                height: e.h + "px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              },
              identifier: e.loggingID,
            };
    }
    i.default = e;
  },
  66,
);
