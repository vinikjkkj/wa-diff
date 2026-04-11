__d(
  "WAWebNewsletterAddOnsUtils",
  ["WAWebNewsletterReactionCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebNewsletterReactionCollection",
      ).NewsletterMessageReactionsCollection.get(e.id);
    }
    e.key = "reactions";
    var s = [e];
    function u(e) {
      return e.reduce(
        function (e, t) {
          return (
            s.forEach(function (n) {
              var r = n(t);
              r != null && e[n.key].push(r);
            }),
            e
          );
        },
        { reactions: [] },
      );
    }
    l.getAddOnsFromMessages = u;
  },
  98,
);
