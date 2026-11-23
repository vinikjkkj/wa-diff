__d(
  "MAIBACreatorDiscoveryParseInput",
  ["FBLogger", "MAIBAWorkspaceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "creators",
      s = 25;
    function u(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function c(e) {
      return (
        r("FBLogger")("cam_discovery").warn(
          "creator_discovery envelope rejected: %s",
          e,
        ),
        null
      );
    }
    function d(e) {
      if (e == null || e === "") return c("missing_creators_block");
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return c("malformed_json");
      }
      if (
        t == null ||
        typeof t != "object" ||
        Array.isArray(t) ||
        !Array.isArray(t.creators)
      )
        return c("no_creators_array");
      var n = [],
        r = new Set();
      for (var o of t.creators) {
        if (n.length >= s) break;
        if (!(o == null || typeof o != "object" || Array.isArray(o))) {
          var a = u(o.fbid);
          a == null ||
            !/^\d+$/.test(a) ||
            r.has(a) ||
            (r.add(a), n.push({ explanation: u(o.explanation), fbid: a }));
        }
      }
      return n.length === 0
        ? c("no_hydratable_creators")
        : { brand_ig_user_id: u(t.brand_ig_user_id), creators: n };
    }
    function m(e, t) {
      var n = new Map();
      for (var r of t)
        (r == null ? void 0 : r.creator_user_id) != null &&
          n.set(r.creator_user_id, r);
      var o = [],
        a = new Set();
      for (var i of e)
        if (!a.has(i.fbid)) {
          var l = n.get(i.fbid);
          if (l != null) {
            var s;
            (a.add(i.fbid),
              o.push({
                explanation: (s = i.explanation) != null ? s : "",
                node: l,
              }));
          }
        }
      return o;
    }
    function p(t) {
      var n = o("MAIBAWorkspaceTypes")
        .parseBlocksJSON(t.blocks_json)
        .find(function (t) {
          return t.tag === e;
        });
      return d(n == null ? void 0 : n.text);
    }
    ((l.CREATORS_BLOCK_TAG = e),
      (l.parseCreatorsJSON = d),
      (l.pairHydratedCreators = m),
      (l.getCreatorDiscoveryInput = p));
  },
  98,
);
