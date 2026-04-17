__d(
  "StoryAttachmentContext",
  [
    "CometRelay",
    "StoryAttachmentContext_story.graphql",
    "react",
    "react-compiler-runtime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useMemo,
      p = u.createContext({
        postId: null,
        storyActor: null,
        storyMessage: null,
        videoPlayerSessionID: null,
      });
    function _(t) {
      var a,
        i,
        l,
        s,
        c = o("react-compiler-runtime").c(8),
        d = t.children,
        m = t.story,
        _ = o("CometRelay").useFragment(
          e !== void 0 ? e : (e = n("StoryAttachmentContext_story.graphql")),
          m,
        ),
        f = (a = _ == null ? void 0 : _.post_id) != null ? a : null,
        g =
          (i = _ == null || (l = _.actors) == null ? void 0 : l[0]) != null
            ? i
            : null,
        h = (s = _ == null ? void 0 : _.message) != null ? s : null,
        y;
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = r("uuidv4")()), (c[0] = y))
        : (y = c[0]);
      var C;
      c[1] !== f || c[2] !== g || c[3] !== h
        ? ((C = {
            postId: f,
            storyActor: g,
            storyMessage: h,
            videoPlayerSessionID: y,
          }),
          (c[1] = f),
          (c[2] = g),
          (c[3] = h),
          (c[4] = C))
        : (C = c[4]);
      var b = C,
        v;
      return (
        c[5] !== d || c[6] !== b
          ? ((v = u.jsx(p.Provider, { value: b, children: d })),
            (c[5] = d),
            (c[6] = b),
            (c[7] = v))
          : (v = c[7]),
        v
      );
    }
    function f() {
      return d(p);
    }
    ((l.StoryAttachmentContextProvider = _), (l.useStoryAttachmentContext = f));
  },
  98,
);
