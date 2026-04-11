__d(
  "WAWebMetaAIGreetingUtils",
  ["fbt", "Random"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [s._(/*BTDS*/ "Good morning")],
      u = [s._(/*BTDS*/ "Good afternoon")],
      c = [s._(/*BTDS*/ "Good evening")],
      d = [s._(/*BTDS*/ "Good night")],
      m = [
        s._(/*BTDS*/ "What can I do for you?"),
        s._(/*BTDS*/ "Where should we start?"),
        s._(/*BTDS*/ "How can I help?"),
      ];
    function p(e) {
      return e[Math.floor(o("Random").random() * e.length)];
    }
    function _() {
      var t = new Date().getHours();
      return t >= 5 && t <= 11
        ? p(e)
        : t >= 12 && t <= 16
          ? p(u)
          : t >= 17 && t <= 20
            ? p(c)
            : p(d);
    }
    function f() {
      return p(m);
    }
    ((l.getTimeOfDayGreeting = _), (l.getRandomHeading = f));
  },
  226,
);
