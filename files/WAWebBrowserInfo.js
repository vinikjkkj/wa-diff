__d(
  "WAWebBrowserInfo",
  ["WAWebUA"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = s();
      return {
        os: e.os.name,
        version: e.os.version,
        name: e.browser.name,
        ua: e.browser.name + " " + e.browser.version,
      };
    }
    function s() {
      var e = o("WAWebUA").UA.parser.getResult();
      if (e != null && e.browser.name === "Chrome") {
        var t,
          n =
            (t = self.navigator) == null || (t = t.userAgentData) == null
              ? void 0
              : t.brands;
        if (n != null) {
          var r = n.some(function (e) {
            return e.brand === "Microsoft Edge";
          });
          r && (e.browser.name = "Edge");
        }
      }
      return e;
    }
    l.default = e;
  },
  98,
);
