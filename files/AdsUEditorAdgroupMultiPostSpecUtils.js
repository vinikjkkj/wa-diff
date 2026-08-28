__d(
  "AdsUEditorAdgroupMultiPostSpecUtils",
  ["AdsPagePostUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { body: "", title: "" };
    function s(e, t) {
      if (t == null || t === "") return null;
      if (e) return "ig:" + t;
      var n = o("AdsPagePostUtils").isPagePostId_BROKEN(t)
        ? o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(t)
        : t;
      return n != null && n !== "" ? "fb:" + n : null;
    }
    function u(e) {
      var t, n;
      return s(
        e.source_instagram_media_id != null,
        (t = (n = e.source_instagram_media_id) != null ? n : e.post_id) == null
          ? void 0
          : t.toString(),
      );
    }
    function c(e) {
      var t,
        n,
        r,
        o = e.is_instagram_post === !0,
        a = o
          ? e.id
          : (t =
                (n = (r = e.promotable_id) != null ? r : e.id) == null
                  ? void 0
                  : n.toString()) != null
            ? t
            : null;
      return s(o, a);
    }
    function d(e, t) {
      var n,
        r = t != null ? c(t) : null;
      return r != null &&
        (n = e.find(function (e) {
          return e.identityKey === r;
        })) != null
        ? n
        : null;
    }
    function m(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e) {
          var t = u(e);
          t != null && n.set(t, e);
        }),
        t.map(function (e) {
          var t,
            r = e.isInstagramPost
              ? { source_instagram_media_id: e.postId }
              : {
                  post_id:
                    o("AdsPagePostUtils").isPagePostId_BROKEN(e.postId) &&
                    (t = o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(
                      e.postId,
                    )) != null
                      ? t
                      : e.postId,
                },
            a = s(e.isInstagramPost, e.postId),
            i = a != null ? n.get(a) : null;
          return (
            (i == null ? void 0 : i.title) != null && (r.title = i.title),
            (i == null ? void 0 : i.body) != null && (r.body = i.body),
            (i == null ? void 0 : i.call_to_action) != null &&
              (r.call_to_action = i.call_to_action),
            r
          );
        })
      );
    }
    function p(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = u(e);
          if (n != null) {
            var r, o;
            t.set(n, {
              body: (r = e.body) != null ? r : "",
              title: (o = e.title) != null ? o : "",
            });
          }
        }),
        t
      );
    }
    function _(e) {
      var t, n;
      return {
        body: (t = e == null ? void 0 : e.body) != null ? t : "",
        title: (n = e == null ? void 0 : e.title) != null ? n : "",
      };
    }
    function f(t, n) {
      var r = new Map();
      n.forEach(function (e) {
        r.set(e, _(t.get(e)));
      });
      var o = n[0],
        a = o != null ? _(t.get(o)) : babelHelpers.extends({}, e);
      return { cagByIdentity: r, creative: a };
    }
    ((l.getPostIdentityKey = s),
      (l.getPostIdentityKeyFromCagPost = u),
      (l.getPostIdentityKeyFromPagePost = c),
      (l.findTextEntryForPost = d),
      (l.buildMultiPostsWithPreservedOverrides = m),
      (l.getMultiPostTextByIdentity = p),
      (l.resolveMultiPostText = f));
  },
  98,
);
