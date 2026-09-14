__d(
  "WAWebBizAdCreationCreativeMediaCap",
  ["WAWebBizAdCreationMediaValidationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = n.keyOf,
        a = n.kindOf,
        i = [],
        l = new Set(
          e.map(function (e) {
            return e.key;
          }),
        ),
        u = t.filter(function (e) {
          var t = r(e);
          return l.has(t) ? !1 : (l.add(t), !0);
        }),
        c = u.filter(function (e) {
          return a(e) === "video";
        }),
        d = u.filter(function (e) {
          return a(e) === "image";
        });
      return c.length > 0 && d.length > 0
        ? (i.push("MIXED_MEDIA_VIDEO_DROPPED"), s(e, d, i))
        : c.length > 0
          ? e.length > 0
            ? (i.push("VIDEO_REJECTED_WITH_EXISTING_MEDIA"),
              { accepted: [], actions: i })
            : (c.length >
                o("WAWebBizAdCreationMediaValidationUtils").MAX_VIDEO_COUNT &&
                i.push("TOO_MANY_VIDEOS"),
              {
                accepted: c.slice(
                  0,
                  o("WAWebBizAdCreationMediaValidationUtils").MAX_VIDEO_COUNT,
                ),
                actions: i,
              })
          : s(e, d, i);
    }
    function s(e, t, n) {
      if (
        e.some(function (e) {
          return e.kind === "video";
        })
      )
        return (
          t.length > 0 && n.push("IMAGES_REJECTED_WITH_EXISTING_VIDEO"),
          { accepted: [], actions: n }
        );
      var r = Math.max(
        0,
        o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT - e.length,
      );
      return (
        t.length > r && n.push("TOO_MANY_IMAGES"),
        { accepted: t.slice(0, r), actions: n }
      );
    }
    l.applyCreativeMediaCap = e;
  },
  98,
);
