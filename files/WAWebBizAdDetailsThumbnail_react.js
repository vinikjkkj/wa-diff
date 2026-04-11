__d(
  "WAWebBizAdDetailsThumbnail.react",
  [
    "fbt",
    "FBLogger",
    "WAWebImg.react",
    "WAWebProfilePicThumbCollection",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "bx",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = r("bx")("78840"),
      m = r("bx").getURL(d);
    function p(e) {
      var t,
        n = e.onClick,
        a = e.thumbnailUrl,
        i = c(function () {
          try {
            var e,
              t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              n = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(t);
            return (e = n == null ? void 0 : n.img) != null
              ? e
              : n == null
                ? void 0
                : n.imgFull;
          } catch (e) {
            return (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .warn("Failed to get profile pic thumbnail for ad details"),
              null
            );
          }
        }, []),
        l = (t = a != null ? a : i) != null ? t : m;
      return n != null
        ? u.jsx("div", {
            className: "xh8yej3 x78zum5 xl56j7k",
            children: u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: n,
              children: u.jsx(r("WAWebImg.react"), {
                src: l,
                alt: s._(/*BTDS*/ "Ad thumbnail").toString(),
                className:
                  "x1wkxgih xygnafs x1g83kfv x3qq2k7 x2x8art x1qor8vf xl1xv1r",
              }),
            }),
          })
        : u.jsx("div", {
            className: "xh8yej3 x78zum5 xl56j7k",
            children: u.jsx(r("WAWebImg.react"), {
              src: l,
              alt: s._(/*BTDS*/ "Ad thumbnail").toString(),
              className:
                "x1wkxgih xygnafs x1g83kfv x3qq2k7 x2x8art x1qor8vf xl1xv1r",
            }),
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
