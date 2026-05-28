__d(
  "isInternalMetaURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)internalmeta\\.com$", "i");
    function l(t) {
      return e.test(t.getDomain());
    }
    i.default = l;
  },
  66,
);
