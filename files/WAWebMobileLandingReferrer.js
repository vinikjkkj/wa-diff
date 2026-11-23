__d(
  "WAWebMobileLandingReferrer",
  ["$InternalEnum", "WAWebSignUpViaWebRequestEntryPoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ Www: "www", MobileLanding: "mobile_landing" });
    function s(t) {
      return t === e.MobileLanding
        ? o("WAWebSignUpViaWebRequestEntryPoint")
            .WhatsappGrowthInvites_SignUpViaWebRequestEntryPoint.MOBILE_LANDING
        : t === e.Www
          ? null
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    function u() {
      var t,
        n = new URLSearchParams(window.location.search);
      return (t = e.cast(n.get("referrer"))) != null ? t : e.MobileLanding;
    }
    ((l.MobileLandingReferrer = e),
      (l.getSourceForReferrer = s),
      (l.getMobileLandingReferrer = u));
  },
  98,
);
