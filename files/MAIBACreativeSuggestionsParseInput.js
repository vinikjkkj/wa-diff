__d(
  "MAIBACreativeSuggestionsParseInput",
  ["MAIBACreativeSuggestionsTypes", "MAIBAWorkspaceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.attrs.id;
      if (t == null || t === "") return null;
      var n = e.attrs.image_url,
        r = e.attrs.video_url,
        o = e.attrs.adgroup_id;
      return {
        adgroupID: o != null && o !== "" ? o : null,
        creativeID: t,
        imageURL: n != null && n !== "" ? n : null,
        mediaType: e.attrs.media_type === "VIDEO" ? "VIDEO" : "IMAGE",
        videoURL: r != null && r !== "" ? r : null,
      };
    }
    function s(t) {
      var n,
        r = t.attrs.id;
      if (r == null || r === "") return null;
      var a = [];
      for (var i of t.children)
        if (i.tag === o("MAIBACreativeSuggestionsTypes").CS_CREATIVE_TAG) {
          var l = e(i);
          l != null && a.push(l);
        }
      return {
        creatives: a,
        ideaID: r,
        title: (n = t.attrs.title) != null ? n : "",
      };
    }
    function u(e) {
      var t = o("MAIBAWorkspaceTypes").parseAttributesJSON(e.attributes_json),
        n = o("MAIBAWorkspaceTypes").parseBlocksJSON(e.blocks_json),
        r = [];
      for (var a of n)
        if (a.tag === o("MAIBACreativeSuggestionsTypes").CS_IDEA_TAG) {
          var i = s(a);
          i != null && r.push(i);
        }
      var l = t.account_id,
        u = t.unit_id,
        c = l != null && l !== "" ? l : null,
        d = u != null && u !== "" ? u : null;
      return d == null && r.length === 0
        ? null
        : { accountID: c, ideas: r, unitID: d };
    }
    l.parseInput = u;
  },
  98,
);
