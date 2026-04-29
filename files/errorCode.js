__d(
  "errorCode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new Error(
        'errorCode("' + e + '"): This should not happen. Oh noes!',
      );
      throw (t.stack, t);
    }
    i.default = e;
  },
  66,
);
