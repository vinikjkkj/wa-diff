__d(
  "getTranslatedInput",
  ["Env", "ExecutionEnvironment", "FBLogger", "MakeHasteTranslationsMap"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "JHASH",
      c = new RegExp("__" + u + "__(.+?)__" + u + "__"),
      d = !!(e || (e = r("Env"))).use_fbt_virtual_modules;
    function m(e) {
      var t = e.table;
      if (d && (s || (s = r("ExecutionEnvironment"))).isInBrowser) {
        if (typeof t == "string") {
          var n = t.match(c);
          if (n != null)
            return p(
              babelHelpers.extends({}, e, {
                table: o("MakeHasteTranslationsMap").get(n[1]),
              }),
            );
        }
        r("FBLogger")("binary_transparency", "inlined_translations").warn(
          "Found inlined translated contents in client_fetch_translations experiment! Input: %s",
          JSON.stringify(t),
        );
      }
      return p(e);
    }
    function p(e) {
      var t = e.table;
      return typeof t == "string" &&
        t[0] === "_" &&
        t[1] === "j" &&
        (t[2] === "{" || t[2] === "[")
        ? babelHelpers.extends({}, e, { table: JSON.parse(t.substring(2)) })
        : e;
    }
    l.default = m;
  },
  98,
);
