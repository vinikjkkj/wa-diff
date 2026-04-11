__d(
  "isExternalFBURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)externalfb\\.com$", "i");
    function l(t) {
      return e.test(t.getDomain());
    }
    i.default = l;
  },
  66,
);
