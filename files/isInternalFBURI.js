__d(
  "isInternalFBURI",
  [],
  function (t, n, r, o, a, i) {
    var e = "(^|\\.)internalfb\\.com$",
      l = new RegExp(e, "i");
    function s(e) {
      return l.test(e.getDomain());
    }
    i.default = s;
  },
  66,
);
