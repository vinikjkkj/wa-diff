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
      var t = e.facebookProfileRef,
        n = t === void 0 ? null : t,
        a = e.size,
        i = a === void 0 ? 24 : a,
        l = r("useWAWebBizAdCreationIdentityContext")(),
        u = l == null ? void 0 : l.accountType,
        p = d(
          function () {
            return u === "WAA" ? o("WAWebUserPrefsMeUser").getMeUser() : null;
          },
          [u],
        ),
        _ = o("CometRelay").useFragment(m, n),
        f = String(s._(/*BTDS*/ "Profile picture"));
      if (u === "WAA" && p != null)
        return c.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: p,
          size: i,
          alt: f,
        });
      if (u === "FB") {
        var g,
          h =
            _ == null || (g = _.profile_picture) == null
              ? void 0
              : g.downloadable_uri;
        return h == null
          ? null
          : c.jsx(r("WAWebImg.react"), {
              src: h,
              className: { 0: "x1xvr5cs x1nqnulx", 1: "x100vrsf x1vqgdyp" }[
                (i > 24) << 0
              ],
              alt: f,
            });
      }
      return null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
