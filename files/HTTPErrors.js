__d(
  "HTTPErrors",
  ["emptyFunction"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return { summary: "HTTP Error", description: "Unknown HTTP error #" + e };
    }
    var s = { get: e, getAll: r("emptyFunction").thatReturns(new Map()) },
      u = s;
    l.default = u;
  },
  98,
);
