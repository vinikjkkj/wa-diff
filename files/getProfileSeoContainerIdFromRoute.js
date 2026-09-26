__d(
  "getProfileSeoContainerIdFromRoute",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e,
          n,
          r,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m = { postID: null, profileID: null };
        if (t == null) return m;
        var p = (e = t.entityKeyConfig) == null ? void 0 : e.entity_type;
        if (p == null) return m;
        switch (p.value) {
          case "user":
          case "profile":
            return {
              postID: null,
              profileID:
                (n =
                  (r = t.hostableView) == null || (r = r.props) == null
                    ? void 0
                    : r.userID) != null
                  ? n
                  : String(
                      (o = (a = t.params) == null ? void 0 : a.idorvanity) !=
                        null
                        ? o
                        : "",
                    ),
            };
          case "profile_post":
            return {
              postID:
                (i = t.hostableView) == null || (i = i.props) == null
                  ? void 0
                  : i.storyFBID,
              profileID:
                (l =
                  (s = t.hostableView) == null || (s = s.props) == null
                    ? void 0
                    : s.userID) != null
                  ? l
                  : String(
                      (u = (c = t.params) == null ? void 0 : c.idorvanity) !=
                        null
                        ? u
                        : "",
                    ),
            };
          case "post":
            if (
              (t.tracePolicy === "comet.post.single_dialog" ||
                t.tracePolicy === "comet.post.single") &&
              ((d = t.params) == null ? void 0 : d.story_token) != null
            ) {
              var _, f;
              return {
                postID: String(
                  t == null ||
                    (_ = t.hostableView) == null ||
                    (_ = _.props) == null
                    ? void 0
                    : _.storyID,
                ),
                profileID: String(
                  t == null ||
                    (f = t.hostableView) == null ||
                    (f = f.props) == null
                    ? void 0
                    : f.actorID,
                ),
              };
            } else return m;
          default:
            return m;
        }
      },
      l = e;
    i.default = l;
  },
  66,
);
