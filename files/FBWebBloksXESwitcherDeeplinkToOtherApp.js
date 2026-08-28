__d(
  "FBWebBloksXESwitcherDeeplinkToOtherApp",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var o,
        a = (e || (e = r("URI"))).tryParseURI(n);
      if (
        !(
          !a ||
          a.getProtocol() !== "https" ||
          a.getDomain() !== "www.instagram.com"
        )
      ) {
        var i = (o = a.getPath()) == null ? void 0 : o.split("/");
        (i.length !== 3 && i[1] !== "inter_app" && i[2] !== "redirect") ||
          e.goURIOnWindow(n, window.open("", "_blank"));
      }
    }
    l.default = s;
  },
  98,
);
