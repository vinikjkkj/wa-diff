__d(
  "WAWebSharableEventIdeas",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return [
        {
          category: "casual",
          emoji: String.fromCodePoint(127837),
          key: "dinner",
          name: s._(/*BTDS*/ "Dinner").toString(),
        },
        {
          category: "birthday",
          emoji: String.fromCodePoint(127874),
          key: "birthday",
          name: s._(/*BTDS*/ "Birthday party").toString(),
        },
        {
          category: "hobby",
          emoji: String.fromCodePoint(127922),
          key: "game-night",
          name: s._(/*BTDS*/ "Game night").toString(),
        },
        {
          category: "celebration",
          emoji: String.fromCodePoint(127881),
          key: "party",
          name: s._(/*BTDS*/ "Party").toString(),
        },
        {
          category: "scheduled_call",
          emoji: String.fromCodePoint(128187),
          key: "team-call",
          name: s._(/*BTDS*/ "Team call").toString(),
        },
        {
          category: "soccer",
          emoji: String.fromCodePoint(9917),
          key: "soccer",
          name: s._(/*BTDS*/ "Pickup soccer").toString(),
        },
      ];
    }
    function u(e, t, n, r) {
      var o = babelHelpers.extends({}, e, { name: t.name }),
        a = new Set(
          n.map(function (e) {
            var t = e.category;
            return t;
          }),
        ),
        i = e.cover,
        l =
          i == null ||
          (i.kind === "preset" &&
            r.some(function (e) {
              return e.handle === i.handle && a.has(e.category);
            })),
        s = r.find(function (e) {
          var n = e.category;
          return n === t.category;
        });
      return !l || s == null
        ? o
        : babelHelpers.extends({}, o, {
            cover: { kind: "preset", handle: s.handle, url: s.url },
          });
    }
    ((l.getSharableEventIdeas = e), (l.applySharableEventIdea = u));
  },
  226,
);
