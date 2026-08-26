__d(
  "WAWebUserPrefsExperienceIds",
  ["$InternalEnum", "WALogger", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["ReceivedExperienceIds"]),
      u = s.ReceivedExperienceIds,
      c = 1e3;
    function d(t) {
      if (t.length !== 0) {
        var n = new Set(p()),
          r = n.size,
          a = 0;
        for (var i of t)
          if (!(!Number.isInteger(i) || i <= 0 || n.has(i))) {
            if (n.size >= c) {
              a++;
              continue;
            }
            n.add(i);
          }
        (a > 0 &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "accumulateReceivedExperienceIds: dropped ",
                " ids at capacity",
              ])),
            a,
          ),
          n.size !== r && _(Array.from(n)));
      }
    }
    function m() {
      var e = p();
      return e.length === 0 ? [] : (_([]), e);
    }
    function p() {
      var e = r("WAWebUserPrefsStore").getUser(u);
      return Array.isArray(e)
        ? e.filter(function (e) {
            return typeof e == "number" && Number.isInteger(e) && e > 0;
          })
        : [];
    }
    function _(e) {
      r("WAWebUserPrefsStore").setUser(u, e.length > 0 ? e : null);
    }
    ((l.MAX_RECEIVED_IDS = c),
      (l.accumulateReceivedExperienceIds = d),
      (l.extractAndClearCurrentReceiverExperienceIds = m));
  },
  98,
);
