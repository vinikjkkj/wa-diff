__d(
  "getGroupsSeoContainerIdFromRoute",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e,
          n,
          r,
          o,
          a,
          i = { groupID: null, postID: null };
        if (t == null) return i;
        var l = (e = t.entityKeyConfig) == null ? void 0 : e.entity_type;
        if (l == null) return i;
        switch (l.value) {
          case "group":
            return {
              groupID:
                (n = t.hostableView) == null || (n = n.props) == null
                  ? void 0
                  : n.groupID,
              postID: null,
            };
          case "group_post":
            return {
              groupID:
                (r = t.hostableView) == null || (r = r.props) == null
                  ? void 0
                  : r.groupID,
              postID:
                (o = t.hostableView) == null || (o = o.props) == null
                  ? void 0
                  : o.storyFBID,
            };
          case "post":
            if (
              t.tracePolicy === "comet.post.single_dialog" &&
              ((a = t.params) == null ? void 0 : a.story_id) != null
            ) {
              var s, u;
              return {
                groupID: String((s = t.params) == null ? void 0 : s.idorvanity),
                postID: String((u = t.params) == null ? void 0 : u.story_id),
              };
            } else return i;
          default:
            return i;
        }
      },
      l = e;
    i.default = l;
  },
  66,
);
