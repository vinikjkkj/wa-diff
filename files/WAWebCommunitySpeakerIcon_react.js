__d(
  "WAWebCommunitySpeakerIcon.react",
  [
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebShapeIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        announcementSpeaker: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.size,
        r = n === void 0 ? 49 : n,
        a;
      return (
        t[0] !== r
          ? ((a = s.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
              theme: o("WAWebShapeIcon.react").ShapeIconTheme.Accent,
              shape: "squircle",
              Icon: o("WAWebAnnouncementSpeakerIcon.react")
                .AnnouncementSpeakerIcon,
              size: r,
              directional: !0,
              iconStyles: u.announcementSpeaker,
            })),
            (t[0] = r),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = c;
  },
  98,
);
