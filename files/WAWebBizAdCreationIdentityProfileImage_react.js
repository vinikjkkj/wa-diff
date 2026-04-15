__d(
  "WAWebBizAdCreationIdentityProfileImage.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationIdentityProfileImage_facebookProfile.graphql",
    "WAWebDetailImage.react",
    "WAWebImg.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationIdentityContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdCreationIdentityProfileImage_facebookProfile.graphql",
            ));
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.facebookProfileRef,
        a = e.size,
        i = n === void 0 ? null : n,
        l = a === void 0 ? 24 : a,
        u = r("useWAWebBizAdCreationIdentityContext")(),
        d = u == null ? void 0 : u.accountType,
        p;
      e: {
        if (d === "WAA") {
          var _;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = o("WAWebUserPrefsMeUser").getMeUser()), (t[0] = _))
            : (_ = t[0]),
            (p = _));
          break e;
        }
        p = null;
      }
      var f = p,
        g = o("CometRelay").useFragment(m, i),
        h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Profile picture")), (t[1] = h))
        : (h = t[1]);
      var y = String(h);
      if (d === "WAA" && f != null) {
        var C;
        return (
          t[2] !== f || t[3] !== l
            ? ((C = c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: f,
                size: l,
                alt: y,
              })),
              (t[2] = f),
              (t[3] = l),
              (t[4] = C))
            : (C = t[4]),
          C
        );
      }
      if (d === "FB") {
        var b,
          v =
            g == null || (b = g.profile_picture) == null
              ? void 0
              : b.downloadable_uri;
        if (v == null) return null;
        var S;
        t[5] !== l
          ? ((S = { 0: "x1xvr5cs x1nqnulx", 1: "x100vrsf x1vqgdyp" }[
              (l > 24) << 0
            ]),
            (t[5] = l),
            (t[6] = S))
          : (S = t[6]);
        var R;
        return (
          t[7] !== v || t[8] !== S
            ? ((R = c.jsx(r("WAWebImg.react"), {
                src: v,
                className: S,
                alt: y,
              })),
              (t[7] = v),
              (t[8] = S),
              (t[9] = R))
            : (R = t[9]),
          R
        );
      }
      return null;
    }
    l.default = p;
  },
  226,
);
