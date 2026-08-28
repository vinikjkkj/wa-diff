__d(
  "adsNotImplementedSelector",
  ["adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [],
        function () {
          var e = new Error("Not Implemented");
          throw (e.stack, e);
        },
        { name: i.id },
      ),
      s = e;
    l.default = s;
  },
  98,
);
