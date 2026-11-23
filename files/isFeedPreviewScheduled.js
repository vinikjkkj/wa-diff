__d(
  "isFeedPreviewScheduled",
  ["isStringNotNullAndNotWhitespaceOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "asap",
      "immediately",
      "no date",
      "no date set",
      "none",
      "now",
      "publish now",
      "right away",
    ]);
    function s(t) {
      return r("isStringNotNullAndNotWhitespaceOnly")(t)
        ? !e.has(t.trim().toLowerCase())
        : !1;
    }
    l.default = s;
  },
  98,
);
