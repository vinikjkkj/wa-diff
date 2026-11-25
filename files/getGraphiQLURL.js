__d(
  "getGraphiQLURL",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o) {
      var a = new (e || (e = r("URI")))("https://www.internalfb.com");
      return (
        o != null ? a.setPath("/graphiql/" + o + "/") : a.setPath("/graphiql/"),
        t.id != null
          ? a.addQueryData("query_id", t.id)
          : a.addQueryData("query", t.text),
        a.addQueryData("variables", JSON.stringify(n)),
        a.toString()
      );
    }
    l.default = s;
  },
  98,
);
