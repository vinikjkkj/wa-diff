__d(
  "WAWebMediaCleanFileName",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (!e) return e;
      var t = e.replace(
          /[\u202a-\u202e\u2066-\u2069\u200E\u200F\u061C]/g,
          "\uFFFD",
        ),
        n = t.split(".");
      if (n.length === 1) return t;
      for (var r = n.length - 1; r > 0; r--) {
        var o = n[r].trim();
        if (o.length) return n.slice(0, r).join(".") + "." + o;
      }
      return t;
    }
    function u(t) {
      if (t == null) return t;
      var n = s(t);
      if (t !== n && n) {
        var r = [
            "bat",
            "exe",
            "cmd",
            "com",
            "lnk",
            "pif",
            "scr",
            "vb",
            "vbe",
            "vbs",
            "wsh",
            "js",
            "ps1",
            "hta",
            "sh",
            "csh",
            "msi",
            "app",
            "scpt",
            "applescript",
            "reg",
            "vbe",
            "wsf",
            "sct",
          ],
          a = n.split("."),
          i = a.length >= 2 ? a.pop() : "";
        i != null &&
          r.includes(i) &&
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "cleanIncomingFilename:extension: ",
                  "",
                ])),
              i,
            )
            .verbose();
      }
      return n;
    }
    ((l.cleanFilename = s), (l.cleanIncomingFilename = u));
  },
  98,
);
