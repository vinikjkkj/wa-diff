__d(
  "expandFeedPreviewsByPlatform",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = (e != null ? e : "").split(",").map(function (e) {
        return e.trim();
      });
      return n.length === t
        ? n
        : Array.from({ length: t }, function () {
            return e;
          });
    }
    function l(t) {
      var n = [],
        r = function (r) {
          var t,
            o,
            a = ((t = r.platform) != null ? t : "")
              .split(",")
              .map(function (e) {
                return e.trim();
              }),
            i = e(r.post_id, a.length),
            l = e(r.publish_status, a.length),
            s = (o = r.per_platform) != null ? o : [],
            u = s.length === a.length,
            c = a
              .map(function (e, t) {
                var n,
                  o,
                  a = u ? s[t] : null,
                  c = a != null && a.platform === e ? a : null;
                return {
                  caption:
                    (n = c == null ? void 0 : c.caption) != null
                      ? n
                      : r.caption,
                  image_url:
                    (o = c == null ? void 0 : c.image_url) != null
                      ? o
                      : r.image_url,
                  platform: e,
                  post_id: i[t],
                  publish_status: l[t],
                };
              })
              .filter(function (e) {
                return e.platform === "facebook" || e.platform === "instagram";
              });
          if (c.length > 1)
            for (var d of c) n.push(babelHelpers.extends({}, r, d));
          else n.push(r);
        };
      for (var o of t) r(o);
      return n;
    }
    i.default = l;
  },
  66,
);
