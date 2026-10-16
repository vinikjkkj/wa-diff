__d(
  "WAWebBizAiHomeChat",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set([
        "17015557208",
        "12015557844",
        "12015557998",
        "12345550587",
      ]),
      l = new Set(["201706562429002", "27807614779560", "179733509742666"]);
    function s(t) {
      return (
        t.isAiHub() ||
        (t.server === "c.us" && e.has(t.user)) ||
        (t.isLid() && l.has(t.user))
      );
    }
    i.isBizAiHomeChat = s;
  },
  66,
);
