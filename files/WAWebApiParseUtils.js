__d(
  "WAWebApiParseUtils",
  ["WAWebBuildConstants"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return t.replace(/\/+$/, "");
      },
      s = e(o("WAWebBuildConstants").BUILD_URL).replace(/[\/\.]/g, "\\$&"),
      u = "((?:/\\w+)*)",
      c = "(?:(?:/\\w+)*)";
    function d(e) {
      var t = e.hostname;
      return t === "whatsapp.com" || t === "www.whatsapp.com" || t === "wa.me";
    }
    ((l.ORIGIN = s),
      (l.OPTIONAL_PATH_PART = u),
      (l.OPTIONAL_NON_CAPTURING_PATH_PART = c),
      (l.isWhatsappHost = d));
  },
  98,
);
