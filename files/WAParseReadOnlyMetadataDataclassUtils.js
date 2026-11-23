__d(
  "WAParseReadOnlyMetadataDataclassUtils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if ((e == null ? void 0 : e.readonlyMetadataDataclass) != null)
        try {
          var t = JSON.parse(e == null ? void 0 : e.readonlyMetadataDataclass);
          return t;
        } catch (e) {
          throw r("err")("Failed to parse readonly metadata dataclass JSON");
        }
      return null;
    }
    function s(t) {
      var n,
        r = e(t);
      return (
        (r == null || (n = r.power_up) == null ? void 0 : n.power_up_style) !=
        null
      );
    }
    function u(t) {
      var n,
        r = e(t),
        o = r == null || (n = r.power_up) == null ? void 0 : n.power_up_style;
      return typeof o == "string" && o.startsWith("AVATAR_");
    }
    function c(t) {
      var n,
        r = e(t);
      return (
        (r == null || (n = r.note_metadata) == null
          ? void 0
          : n.message_type) === "MENTION"
      );
    }
    ((l.isPowerUp = s), (l.isAvatarPowerUp = u), (l.isNoteMention = c));
  },
  98,
);
