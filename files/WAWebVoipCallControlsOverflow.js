__d(
  "WAWebVoipCallControlsOverflow",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 620,
      l = 550,
      s = 490,
      u = 450,
      c = 410,
      d = 370;
    function m(t) {
      return t == null
        ? 0
        : t < d
          ? 6
          : t < c
            ? 5
            : t < u
              ? 4
              : t < s
                ? 3
                : t < l
                  ? 2
                  : t < e
                    ? 1
                    : 0;
    }
    function p(e) {
      var t = e.hasAddPeopleAction,
        n = e.hasLayoutToggleAction,
        r = e.hasParticipantsAction,
        o = e.isGroupCall,
        a = e.level;
      if (a < 1) return [];
      if (a >= 6) return [];
      var i = [];
      return (
        a >= 2 && i.push("screen-share"),
        a >= 3 && o && i.push("raise-hand"),
        a >= 4 && (r && i.push("participants"), t && i.push("add-people")),
        i.push("return-to-whatsapp"),
        n && i.push("layout-toggle"),
        i
      );
    }
    ((i.getPopoutOverflowLevel = m), (i.getActionsInOverflow = p));
  },
  66,
);
