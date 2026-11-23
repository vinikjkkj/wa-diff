__d(
  "WAWebDeveloperMenuLabyrinthDebugAddOnPresentation",
  ["WAWebDeveloperMenuLabyrinthDebugTimeFormat", "WAWebNullFunc"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = "You",
      u = { going: "going", maybe: "maybe", notGoing: "not going" },
      c = ["going", "maybe", "notGoing"];
    function d(t) {
      var n = new Map();
      t.forEach(function (e) {
        var t,
          r = e.emoji;
        return n.set(r, ((t = n.get(r)) != null ? t : 0) + 1);
      });
      var r = Array.from(n.entries()).sort(function (e, t) {
          var n = e[1],
            r = t[1];
          return r - n;
        }),
        o = r.slice(0, e).map(function (e) {
          var t = e[0],
            n = e[1];
          return t + " " + n;
        }),
        a = r.length - e;
      return []
        .concat(o, [a > 0 ? "+" + a : null])
        .filter(Boolean)
        .join("  ");
    }
    function m(e) {
      return e
        .map(function (e) {
          var t = e.emoji,
            n = e.reactedAtMs,
            r = e.senderJid;
          return [
            t,
            r != null ? r : s,
            n != null
              ? o(
                  "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
                ).formatLabyrinthDebugDateTime(n)
              : null,
          ]
            .filter(Boolean)
            .join(" \xB7 ");
        })
        .join("; ");
    }
    function p(e) {
      var t = e.flatMap(function (e) {
        var t;
        return (t = e.optionNames) != null ? t : [];
      });
      if (t.length === 0)
        return e.length === 1 ? "1 voter" : e.length + " voters";
      var n = new Map(),
        r = 0;
      t.forEach(function (e) {
        if (e == null) r++;
        else {
          var t;
          n.set(e, ((t = n.get(e)) != null ? t : 0) + 1);
        }
      });
      var o = Array.from(n.entries())
        .sort(function (e, t) {
          var n = e[1],
            r = t[1];
          return r - n;
        })
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return t + " " + n;
        });
      return (
        "Votes: " +
        []
          .concat(o, [r > 0 ? r + " unknown" : null])
          .filter(Boolean)
          .join(" \xB7 ")
      );
    }
    function _(e) {
      return e
        .map(function (e) {
          var t = e.optionNames,
            n = e.selectedOptionHashes,
            r = e.senderJid,
            a = e.votedAtMs,
            i = (t != null ? t : n.map(o("WAWebNullFunc").returnNull)).map(
              function (e, t) {
                return e != null
                  ? e
                  : "Unknown option (" + n[t].slice(0, 6) + "\u2026)";
              },
            );
          return [
            (r != null ? r : s) +
              ": " +
              (i.length > 0 ? i.join(", ") : "No option"),
            a != null
              ? o(
                  "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
                ).formatLabyrinthDebugDateTime(a)
              : null,
          ]
            .filter(Boolean)
            .join(" \xB7 ");
        })
        .join("; ");
    }
    function f(e) {
      var t = c.map(function (t) {
        return [
          t,
          e.filter(function (e) {
            return e.response === t;
          }).length,
        ];
      });
      return (
        "RSVP: " +
        t
          .filter(function (e) {
            var t = e[1];
            return t > 0;
          })
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return n + " " + u[t];
          })
          .join(" \xB7 ")
      );
    }
    function g(e) {
      return e
        .map(function (e) {
          var t = e.respondedAtMs,
            n = e.response,
            r = e.senderJid;
          return [
            (r != null ? r : s) + ": " + u[n],
            t != null
              ? o(
                  "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
                ).formatLabyrinthDebugDateTime(t)
              : null,
          ]
            .filter(Boolean)
            .join(" \xB7 ");
        })
        .join("; ");
    }
    ((l.formatReactionSummary = d),
      (l.formatReactionDetails = m),
      (l.formatVoteSummary = p),
      (l.formatVoteDetails = _),
      (l.formatRsvpSummary = f),
      (l.formatRsvpDetails = g));
  },
  98,
);
