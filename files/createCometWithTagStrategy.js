__d(
  "createCometWithTagStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.minMatchLength;
      return {
        findMentionableString: function (n) {
          return n.length >= t
            ? { leadOffset: n.length, matchingString: n, replaceableString: n }
            : null;
        },
        name: "WithTagStrategy(" + t.toString() + ")",
      };
    }
    i.default = e;
  },
  66,
);
