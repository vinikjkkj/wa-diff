__d(
  "WAWebBizAiHomeChat",
  [],
  function (t, n, r, o, a, i) {
    var e = "17015557208",
      l = new Set([e, "12015557844", "12015557998", "12345550587"]),
      s = new Set(["201706562429002", "27807614779560", "179733509742666"]);
    function u(t) {
      return t.isAiHub() || (t.server === "c.us" && t.user === e);
    }
    function c(e) {
      return (
        e.isAiHub() ||
        (e.server === "c.us" && l.has(e.user)) ||
        (e.isLid() && s.has(e.user))
      );
    }
    ((i.isProductionBizAiHub = u), (i.isBizAiHomeChat = c));
  },
  66,
);
