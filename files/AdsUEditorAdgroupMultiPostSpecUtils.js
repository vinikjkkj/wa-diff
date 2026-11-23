__d(
  "AdsUEditorAdgroupMultiPostSpecUtils",
  ["AdsPagePostUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null || t === "") return null;
      if (e) return "ig:" + t;
      var n = o("AdsPagePostUtils").isPagePostId_BROKEN(t)
        ? o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(t)
        : t;
      return n != null && n !== "" ? "fb:" + n : null;
    }
    function s(t) {
      var n, r;
      return e(
        t.source_instagram_media_id != null,
        (n = (r = t.source_instagram_media_id) != null ? r : t.post_id) == null
          ? void 0
          : n.toString(),
      );
    }
    function u(t) {
      var n,
        r,
        o,
        a = t.is_instagram_post === !0,
        i = a
          ? t.id
          : (n =
                (r = (o = t.promotable_id) != null ? o : t.id) == null
                  ? void 0
                  : r.toString()) != null
            ? n
            : null;
      return e(a, i);
    }
    function c(e) {
      return e.slice(e.indexOf(":") + 1);
    }
    function d(e, t) {
      var n,
        r = t != null ? u(t) : null;
      return r != null &&
        (n = e.find(function (e) {
          return e.identityKey === r;
        })) != null
        ? n
        : null;
    }
    function m(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = s(e);
          n != null &&
            t.set(n, {
              body: e.body,
              call_to_action: e.call_to_action,
              title: e.title,
            });
        }),
        t
      );
    }
    function p(t, n) {
      return n.map(function (n) {
        var r,
          a = n.isInstagramPost
            ? { source_instagram_media_id: n.postId }
            : {
                post_id:
                  o("AdsPagePostUtils").isPagePostId_BROKEN(n.postId) &&
                  (r = o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(
                    n.postId,
                  )) != null
                    ? r
                    : n.postId,
              },
          i = e(n.isInstagramPost, n.postId),
          l = i != null ? t.get(i) : null;
        return (
          (l == null ? void 0 : l.title) != null && (a.title = l.title),
          (l == null ? void 0 : l.body) != null && (a.body = l.body),
          (l == null ? void 0 : l.call_to_action) != null &&
            (a.call_to_action = l.call_to_action),
          a
        );
      });
    }
    ((l.getPostIdentityKey = e),
      (l.getPostIdentityKeyFromCagPost = s),
      (l.getPostIdentityKeyFromPagePost = u),
      (l.getDisplayPostIDFromIdentityKey = c),
      (l.findTextEntryForPost = d),
      (l.getMultiPostCustomizationsFromCagSpec = m),
      (l.buildMultiPostsWithPreservedOverrides = p));
  },
  98,
);
