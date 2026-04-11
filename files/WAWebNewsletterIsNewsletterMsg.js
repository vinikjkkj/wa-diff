__d(
  "WAWebNewsletterIsNewsletterMsg",
  ["WAWebWid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("WAWebWid").isNewsletter(e.from) || r("WAWebWid").isNewsletter(e.to)
      );
    }
    l.default = e;
  },
  98,
);
