__d(
  "MAIBABusinessSetupParseAssets",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e;
      if (typeof e == "string")
        try {
          t = JSON.parse(e);
        } catch (e) {
          return [];
        }
      if (!Array.isArray(t)) return [];
      var n = [];
      for (var r of t)
        if (!(r == null || typeof r != "object")) {
          var o = typeof r.name == "string" ? r.name : null,
            a = typeof r.type == "string" ? r.type : null;
          if (!(o == null || o === "" || a == null || a === "")) {
            var i = typeof r.id == "string" && r.id !== "" ? r.id : null;
            n.push({
              avatarURI: typeof r.avatar_uri == "string" ? r.avatar_uri : null,
              id: i,
              name: o,
              status: typeof r.status == "string" ? r.status : null,
              type: a,
            });
          }
        }
      return n;
    }
    i.parseAssets = e;
  },
  66,
);
