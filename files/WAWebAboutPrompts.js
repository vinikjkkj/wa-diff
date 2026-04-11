__d(
  "WAWebAboutPrompts",
  ["fbs"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        share_thought: (e = r("fbs"))._(/*BTDS*/ "Share a thought"),
        whats_happening: e._(/*BTDS*/ "What's happening?"),
        current_mood: e._(/*BTDS*/ "Current mood"),
        monday_motivation: e._(/*BTDS*/ "Monday motivation"),
      },
      u = ["share_thought", "whats_happening", "current_mood"];
    function c() {
      return new Date().getDay() === 1
        ? [].concat(u, ["monday_motivation"])
        : u;
    }
    function d(e) {
      return s[e];
    }
    function m() {
      var e = c();
      return e[Math.floor(Math.random() * e.length)];
    }
    function p() {
      return d(m());
    }
    ((l.getAboutPromptText = d),
      (l.getRandomAboutPromptKey = m),
      (l.getRandomAboutPrompt = p));
  },
  226,
);
