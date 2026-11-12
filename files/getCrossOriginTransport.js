__d(
  "getCrossOriginTransport",
  ["invariant", "ExecutionEnvironment", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u() {
      if (!(e || (e = r("ExecutionEnvironment"))).isInBrowser)
        throw r("err")(
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
        throw r("err")(
          "getCrossOriginTransport: %s",
          e instanceof Error ? e.message : String(e),
        );
      }
    }
    ((u.withCredentials = function () {
      var e = u();
      "withCredentials" in e || s(0, 5150);
      var t = e.open;
      return (
        (e.open = function () {
          (t.apply(this, arguments), (this.withCredentials = !0));
        }),
        e
      );
    }),
      (l.default = u));
  },
  98,
);
