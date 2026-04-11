__d(
  "isInternURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)intern(mc)?\\.facebook\\.com$", "i");
    function l(t) {
      return e.test(t.getDomain());
    }
    i.default = l;
  },
  66,
);
