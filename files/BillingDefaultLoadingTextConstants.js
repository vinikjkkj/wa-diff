__d(
  "BillingDefaultLoadingTextConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 20,
      u = 8,
      c = {
        progression: []
          .concat(Array.from(Array(e).keys()))
          .map(function (t) {
            return {
              atSec: t,
              text:
                Math.round(
                  100 *
                    (((e - 1 + u) / u - (e - 1 + u) / (t + u)) /
                      ((e - 1 + u) / u - 1)),
                ).toString() + "%",
            };
          })
          .concat([
            {
              atSec: e,
              text: s._(
                /*BTDS*/ "This could take a few minutes. Don't close this screen...",
              ),
            },
          ]),
        text: "0%",
      };
    l.PERCENTAGE_LOADING_TEXT = c;
  },
  226,
);
