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
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getNumericValue: function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t.charCodeAt(n);
        var o = e.toString();
        return r("SprinkleConfig").should_randomize
          ? o
          : r("SprinkleConfig").version + o;
      },
      shouldAppendToken: function (t) {
        return (
          !r("isCdnURI")(t) &&
          !t.isSubdomainOfDomain("fbsbx.com") &&
          (r("isFacebookURI")(t) ||
            r("isInstagramURI")(t) ||
            r("isMessengerDotComURI")(t) ||
            r("isMetaDotComURI")(t) ||
            r("isWorkplaceDotComURI")(t) ||
            r("isOculusDotComURI")(t) ||
            t.isSubdomainOfDomain("freebasics.com") ||
            t.isSubdomainOfDomain("discoverapp.com"))
        );
      },
    };
    i.exports = e;
  },
  34,
);
