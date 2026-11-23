__d(
  "MAIBABusinessSetupParseProfiles",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return [];
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return [];
      }
      if (!Array.isArray(t)) return [];
      var n = [];
      for (var r of t)
        if (!(r == null || typeof r != "object")) {
          var o = typeof r.id == "string" ? r.id : null;
          if (!(o == null || o === "")) {
            var a = typeof r.name == "string" && r.name !== "" ? r.name : o;
            n.push({
              avatarURI: typeof r.avatar_uri == "string" ? r.avatar_uri : null,
              connected: r.connected === !0,
              id: o,
              name: a,
              type: typeof r.type == "string" ? r.type : null,
            });
          }
        }
      return n;
    }
    i.parseProfiles = e;
  },
  66,
);
