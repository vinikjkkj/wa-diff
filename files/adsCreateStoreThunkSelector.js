__d(
  "adsCreateStoreThunkSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t;
      return (
        e.addListener(function () {
          n = function () {
            return t.apply(void 0, arguments);
          };
        }),
        r("adsCreateStoreSelector")(
          [e],
          function () {
            return n;
          },
          {
            name:
              "thunkSelector(" +
              (e.__moduleID != null && e.__moduleID !== ""
                ? e.__moduleID
                : "unknownStore") +
              "." +
              (t.name || "unknown") +
              ")",
          },
        )
      );
    }
    l.default = e;
  },
  98,
);
