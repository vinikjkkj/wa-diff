__d(
  "SimpleInterfaceGetMessengerURI",
  [
    "BusinessSupportPage",
    "ConstUriUtils",
    "XVanityURLControllerRouteBuilder",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
        e == null
          ? "t/" + r("BusinessSupportPage").pageAlias
          : "support/t/" + e;
      return r("nullthrows")(
        r("XVanityURLControllerRouteBuilder")
          .buildUri({ vanity: t })
          .qualifyDomain(o("ConstUriUtils").getUri("https://messenger.com/")),
      );
    }
    l.getMessengerURI = e;
  },
  98,
);
