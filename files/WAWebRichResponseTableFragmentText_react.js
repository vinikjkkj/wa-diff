__d(
  "WAWebRichResponseTableFragmentText.react",
  ["WAWebRichResponse.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.type !==
        o("WAWebRichResponse.flow").RichResponseFragmentType.Table
        ? ""
        : e.table
            .map(function (e, t) {
              var n = " | " + e.items.join(" | ") + " |";
              if ((t === 0 && (n = n.slice(1)), e.isHeading)) {
                var r =
                  " | " +
                  e.items
                    .map(function () {
                      return " --- ";
                    })
                    .join("|") +
                  " |";
                n += r;
              }
              return n;
            })
            .join("");
    }
    l.getTableFragmentText = e;
  },
  98,
);
