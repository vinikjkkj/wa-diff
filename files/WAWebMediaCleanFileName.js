__d(
  "WAWebMediaCleanFileName",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
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
        "wsf",
        "sct",
      ]);
    function u(e) {
      for (var t = e.length; t > 0 && (e[t - 1] === "." || e[t - 1] === " "); )
        t--;
      var n = e.slice(0, t),
        r = n.lastIndexOf(".");
      return r !== -1 && s.has(n.slice(r + 1).toLowerCase());
    }
    function c(e) {
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
    function d(t) {
      if (t == null) return t;
      var n = c(t);
      if (t !== n && n) {
        var r = n.split("."),
          a = r.length >= 2 ? r.pop() : "";
        a != null &&
          s.has(a) &&
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "cleanIncomingFilename:extension: ",
                  "",
                ])),
              a,
            )
            .verbose();
      }
      return n;
    }
    ((l.hasExecutableExtension = u),
      (l.cleanFilename = c),
      (l.cleanIncomingFilename = d));
  },
  98,
);
