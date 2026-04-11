__d(
  "WAWebBizToolsSessionModel",
  [],
  function (t, n, r, o, a, i) {
    var e = function () {
        var e = new Uint32Array(1),
          t = self.crypto.getRandomValues(e);
        return t[0].toString();
      },
      l = e(),
      s = 0;
    function u() {
      return l;
    }
    function c() {
      return ++s;
    }
    ((i.getSession = u), (i.getSequence = c));
  },
  66,
);
