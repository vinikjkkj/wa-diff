__d(
  "NetworkErrors",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var t,
        n =
          (t =
            (e || (e = r("performance"))) == null
              ? void 0
              : (e || (e = r("performance"))).getEntries()) != null
            ? t
            : [];
      return n.filter(function (e) {
        return (
          e.responseStatus === 0 &&
          e.transferSize <= 0 &&
          e.initiatorType === "script"
        );
      }).length;
    }
    function u() {
      var t,
        n =
          (t =
            (e || (e = r("performance"))) == null
              ? void 0
              : (e || (e = r("performance"))).getEntries()) != null
            ? t
            : [];
      return n.filter(function (e) {
        return (
          e.responseStatus === 0 &&
          e.transferSize <= 0 &&
          e.initiatorType === "xmlhttprequest" &&
          e.name.indexOf("/api/graphql/") >= 0
        );
      }).length;
    }
    function c() {
      var t,
        n =
          (t =
            (e || (e = r("performance"))) == null
              ? void 0
              : (e || (e = r("performance"))).getEntries()) != null
            ? t
            : [];
      return n.filter(function (e) {
        return (
          e.responseStatus === 0 &&
          e.transferSize <= 0 &&
          e.initiatorType === "xmlhttprequest" &&
          e.name.indexOf("/ajax/bootloader-endpoint/") >= 0
        );
      }).length;
    }
    ((l.getScriptErrorCounts = s),
      (l.getRelayErrorCounts = u),
      (l.getBootloaderErrorCounts = c));
  },
  98,
);
