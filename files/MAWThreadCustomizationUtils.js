__d(
  "MAWThreadCustomizationUtils",
  ["MAWLocalizationType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .CURRENT_USER_CUSTOMIZE_NICKNAME ||
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .PARTICIPANT_SET_OWN_NICKNAME ||
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .CURRENT_USER_SET_OWN_NICKNAME ||
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .PARTICIPANT_CLEAR_OWN_NICKNAME ||
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .CURRENT_USER_CLEAR_PARTICIPANT_NICKNAME
      );
    }
    function s(e) {
      return (
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .PARTICIPANT_CUSTOMIZE_PARTICIPANT_NICKNAME ||
        e ===
          o("MAWLocalizationType").LOCALIZATION_TYPE
            .PARTICIPANT_CLEAR_PARTICIPANT_NICKNAME
      );
    }
    ((l.skipNicknameCheck = e),
      (l.nicknameOnlyForFirstParticipantChecking = s));
  },
  98,
);
