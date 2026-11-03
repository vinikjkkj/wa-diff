__d(
  "FbNotesTypeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      switch (e) {
        case "TEXT_NOTE":
          return 1;
        case "MUSIC_NOTE_WITH_TEXT":
          return 2;
        case "MUSIC_NOTE_MUSIC_ONLY":
          return 3;
        case "POLL_NOTE":
          return 4;
        case "GIF_NOTE":
          return 5;
        case "GAME_NOTE":
          return 6;
        case "MARKETPLACE":
          return 7;
        case "FEELINGS_NOTE":
          return 8;
        case "MOODS_NOTE":
          return 9;
        default:
          return null;
      }
    }
    i.getNoteTypeNumericValue = e;
  },
  66,
);
