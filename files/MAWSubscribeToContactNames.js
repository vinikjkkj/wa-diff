__d(
  "MAWSubscribeToContactNames",
  ["fbt", "$InternalEnum", "Env", "MAWLocalizationType", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = n("$InternalEnum").Mirrored(["FIRST_NAME", "FULL_NAME"]),
      c = [
        o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_MENTIONED_STORY_IG,
        o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LEFT_GROUP,
      ],
      d = (e || (e = r("Env"))).isMessengerDotComOnComet
        ? "Messenger"
        : r("gkx")("22979")
          ? "Instagram"
          : "Facebook";
    function m() {
      return s
        ._(/*BTDS*/ "{Platform Name} User", [s._param("Platform Name", d)])
        .toString();
    }
    function p(e, t) {
      var n;
      return (n = e.get(t)) != null ? n : m();
    }
    function _(e) {
      return c.includes(e) ? u.FULL_NAME : u.FIRST_NAME;
    }
    ((l.ContactNameMode = u),
      (l.getUnknownUser = m),
      (l.getContactNameFromLookup = p),
      (l.getContactNameModeFromLocalizationType = _));
  },
  226,
);
