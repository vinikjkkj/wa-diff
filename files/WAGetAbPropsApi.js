__d(
  "WAGetAbPropsApi",
  ["WAGetMetaApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WAGetMetaApi")
        .getMeta()
        .then(function (e) {
          var t = e.abProps;
          return t;
        });
    };
    l.getAbProps = e;
  },
  98,
);
