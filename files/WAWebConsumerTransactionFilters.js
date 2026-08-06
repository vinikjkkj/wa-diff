__d(
  "WAWebConsumerTransactionFilters",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return t === "you_requested"
        ? e.filter(function (e) {
            return e.direction === "incoming";
          })
        : t === "they_requested"
          ? e.filter(function (e) {
              return e.direction === "outgoing";
            })
          : e;
    }
    function l(e, t) {
      var n = t.start != null ? c(t.start) : null,
        r = t.end != null ? c(t.end) : null;
      return n == null && r == null
        ? e
        : e.filter(function (e) {
            var t = u(e.timestampMs);
            return !((n != null && t < n) || (r != null && t > r));
          });
    }
    var s = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "America/Sao_Paulo",
    });
    function u(e) {
      return Number(s.format(new Date(e)).replace(/-/g, ""));
    }
    function c(e) {
      return e.getFullYear() * 1e4 + (e.getMonth() + 1) * 100 + e.getDate();
    }
    ((i.filterByTab = e), (i.filterByDateRange = l));
  },
  66,
);
