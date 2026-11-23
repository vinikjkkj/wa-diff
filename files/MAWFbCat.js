__d(
  "MAWFbCat",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      if (e == null)
        throw r("FBLogger")("messenger_web").mustfixThrow("FBCat is not set");
      return e;
    }
    ((l.setFbCat = s), (l.getFbCat = u));
  },
  98,
);
