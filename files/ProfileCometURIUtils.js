__d(
  "ProfileCometURIUtils",
  [
    "FBLogger",
    "ProfileCometContext",
    "XCometProfileControllerRouteBuilder",
    "XCometProfileVanityControllerRouteBuilder",
    "XCometProfileVanityTributesControllerRouteBuilder",
    "XCometVanityTabControllerRouteBuilder",
    "XCometVanityTimelineControllerRouteBuilder",
    "XCometVanityWoodhengeSupportersURLControllerRouteBuilder",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useCurrentRouteEntityKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      var t = s(r("ProfileCometContext")),
        n = t.profileID,
        o = r("useCurrentRouteEntityKey")();
      return (
        o != null &&
        o.entity_type === "profile" &&
        o.entity_id === n &&
        o.section === e
      );
    }
    function c() {
      var e = o("react-compiler-runtime").c(4),
        t = s(r("ProfileCometContext")),
        n = t.profileID,
        a = t.profileVanity;
      if (!r("isStringNullOrEmpty")(a)) {
        var i;
        return (
          e[0] !== a
            ? ((i = r("XCometProfileVanityControllerRouteBuilder").buildURL({
                vanity: a,
              })),
              (e[0] = a),
              (e[1] = i))
            : (i = e[1]),
          i
        );
      }
      if (n != null) {
        var l;
        return (
          e[2] !== n
            ? ((l = r("XCometProfileControllerRouteBuilder").buildURL({
                id: n,
              })),
              (e[2] = n),
              (e[3] = l))
            : (l = e[3]),
          l
        );
      }
      throw r("FBLogger")("profile_comet").mustfixThrow(
        "Cannot generate URI for profile when id and vanity are both null",
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = s(r("ProfileCometContext")),
        a = n.profileID,
        i = n.profileVanity;
      if (e === "supporters") {
        var l;
        return (
          t[0] !== a || t[1] !== i
            ? ((l = r(
                "XCometVanityWoodhengeSupportersURLControllerRouteBuilder",
              ).buildURL({
                entrypoint_surface: "supporter_hub_tab_on_profile_plus_surface",
                surface: "supporter_hub_tab_on_profile_plus_surface",
                vanity: r("isStringNullOrEmpty")(i) ? a : i,
              })),
              (t[0] = a),
              (t[1] = i),
              (t[2] = l))
            : (l = t[2]),
          l
        );
      }
      if (!r("isStringNullOrEmpty")(i)) {
        if (e === "timeline") {
          var u;
          return (
            t[3] !== i
              ? ((u = r("XCometVanityTimelineControllerRouteBuilder").buildURL({
                  vanity: i,
                })),
                (t[3] = i),
                (t[4] = u))
              : (u = t[4]),
            u
          );
        }
        if (e === "pretributestimeline") {
          var c;
          return (
            t[5] !== i
              ? ((c = r("XCometVanityTimelineControllerRouteBuilder").buildURL({
                  vanity: i,
                })),
                (t[5] = i),
                (t[6] = c))
              : (c = t[6]),
            c
          );
        }
        if (e === "tributes") {
          var d;
          return (
            t[7] !== i
              ? ((d = r(
                  "XCometProfileVanityTributesControllerRouteBuilder",
                ).buildURL({ vanity: i })),
                (t[7] = i),
                (t[8] = d))
              : (d = t[8]),
            d
          );
        }
        var m;
        return (
          t[9] !== i || t[10] !== e
            ? ((m = r("XCometVanityTabControllerRouteBuilder").buildURL({
                sk: e,
                vanity: i,
              })),
              (t[9] = i),
              (t[10] = e),
              (t[11] = m))
            : (m = t[11]),
          m
        );
      }
      if (a != null) {
        var p;
        return (
          t[12] !== a || t[13] !== e
            ? ((p = r("XCometProfileControllerRouteBuilder").buildURL({
                id: a,
                sk: e,
              })),
              (t[12] = a),
              (t[13] = e),
              (t[14] = p))
            : (p = t[14]),
          p
        );
      }
      throw r("FBLogger")("profile_comet").mustfixThrow(
        "Cannot generate URI for profile section when id and vanity are both null",
      );
    }
    ((l.useIsProfileSectionActive = u),
      (l.useURIForProfile = c),
      (l.useURIForProfileSection = d));
  },
  98,
);
