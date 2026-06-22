__d(
  "DTSGUtils",
  [
    "SprinkleConfig",
    "isCdnURI",
    "isFacebookURI",
    "isInstagramURI",
    "isMessengerDotComURI",
    "isMetaDotComURI",
    "isOculusDotComURI",
    "isWorkplaceDotComURI",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      getNumericValue: function (t) {
        for (var e = 0, r = 0; r < t.length; r++) e += t.charCodeAt(r);
        var o = e.toString();
        return n("SprinkleConfig").should_randomize
          ? o
          : n("SprinkleConfig").version + o;
      },
      shouldAppendToken: function (t) {
        return (
          !n("isCdnURI")(t) &&
          !t.isSubdomainOfDomain("fbsbx.com") &&
          (n("isFacebookURI")(t) ||
            n("isInstagramURI")(t) ||
            n("isMessengerDotComURI")(t) ||
            n("isMetaDotComURI")(t) ||
            n("isWorkplaceDotComURI")(t) ||
            n("isOculusDotComURI")(t) ||
            t.isSubdomainOfDomain("freebasics.com") ||
            t.isSubdomainOfDomain("discoverapp.com"))
        );
      },
    };
    a.exports = e;
  },
  null,
);
