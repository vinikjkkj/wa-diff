__d(
  "WAWebCommunitySpeakerIcon.react",
  ["WAWebAnnouncementSpeakerIcon.react", "WAWebShapeIcon.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        announcementSpeaker: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function c(e) {
      var t = e.size,
        n = t === void 0 ? 49 : t;
      return s.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
        theme: o("WAWebShapeIcon.react").ShapeIconTheme.Accent,
        shape: "squircle",
        Icon: o("WAWebAnnouncementSpeakerIcon.react").AnnouncementSpeakerIcon,
        size: n,
        directional: !0,
        iconStyles: u.announcementSpeaker,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
