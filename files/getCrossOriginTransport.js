__d(
  "getCrossOriginTransport",
  ["invariant", "ExecutionEnvironment", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      if (!(e || (e = n("ExecutionEnvironment"))).isInBrowser)
        throw n("err")(
          "getCrossOriginTransport: %s",
          "Cross origin transport unavailable in the server environment.",
        );
      try {
        var t = new XMLHttpRequest();
        return (
          !("withCredentials" in t) &&
            typeof XDomainRequest != "undefined" &&
            (t = new XDomainRequest()),
          t
        );
      } catch (e) {
        throw n("err")("getCrossOriginTransport: %s", e.message);
      }
    }
    ((s.withCredentials = function () {
      var e = s();
      "withCredentials" in e || l(0, 5150);
      var t = e.open;
      return (
        (e.open = function () {
          (t.apply(this, arguments), (this.withCredentials = !0));
        }),
        e
      );
    }),
      (a.exports = s));
  },
  null,
);
