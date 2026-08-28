__d(
  "isValidID",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        !!/^(\d+|pfbid[0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+l)(_(\d+|pfbid[0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+l))?$/.test(
          e,
        )
      );
    }
    i.default = e;
  },
  66,
);
