__d(
  "MAWContactRelationshipType",
  ["I64", "LSContactBitOffset", "WADbContact"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = o("LSContactBitOffset").hasWithDefault(64, t, !0),
        r = (e || (e = o("I64"))).ge(
          t.contactViewerRelationship,
          e.of_string("2"),
        );
      return r && n
        ? o("WADbContact").ONE_WAY_CONTACT
        : !r && !n
          ? o("WADbContact").REVERSED_ONE_WAY_CONTACT
          : r && !n
            ? o("WADbContact").TWO_WAY_CONTACT
            : o("WADbContact").NON_CONTACT;
    }
    l.getContactRelationshipType = s;
  },
  98,
);
