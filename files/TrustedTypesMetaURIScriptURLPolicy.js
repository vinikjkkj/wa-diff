__d(
  "TrustedTypesMetaURIScriptURLPolicy",
  [
    "TrustedTypes",
    "URI",
    "err",
    "isCdnURI",
    "isExternalFBURI",
    "isFacebookDotNetURI",
    "isFacebookURI",
    "isInstagramCDNURI",
    "isInstagramURI",
    "isInternURI",
    "isInternalFBURI",
    "isMetaDotComBlobURI",
    "isOculusDotComURI",
    "isWhatsAppCdnURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        createScriptURL: function (n) {
          if (r("isMetaDotComBlobURI")(n)) return n;
          var t = (e || (e = r("URI"))).tryParseURI(n);
          if (
            t != null &&
            (r("isFacebookURI")(t) ||
              r("isCdnURI")(t) ||
              r("isWhatsAppCdnURI")(t) ||
              r("isFacebookDotNetURI")(t) ||
              r("isExternalFBURI")(t) ||
              r("isOculusDotComURI")(t) ||
              r("isInstagramCDNURI")(t) ||
              r("isInstagramURI")(t) ||
              r("isInternURI")(t) ||
              r("isInternalFBURI")(t))
          )
            return n;
          throw r("err")(
            "Violated policy TrustedTypesMetaURIScriptURLPolicy: " +
              n +
              " is not a Meta URI.",
          );
        },
      },
      u = r("TrustedTypes").createPolicy("meta-uri-script-urls", s),
      c = u;
    l.default = c;
  },
  98,
);
