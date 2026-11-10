__d(
  "WAWebHatchIdeasFeedCache",
  ["WAWebHatchIdeasAccount", "WAWebHatchIdeasIconAccount"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = !1;
    function c() {
      u ||
        ((u = !0),
        (s = g(o("WAWebHatchIdeasAccount").readHatchIdeasFeedAccount())),
        o("WAWebHatchIdeasAccount").subscribeToHatchIdeasAccount({
          onAccountReset: _,
          onLinkedStatus: d,
        }));
    }
    function d() {
      var t = o("WAWebHatchIdeasAccount").readHatchIdeasFeedAccount();
      if (t.kind === "unlinked") {
        _();
        return;
      }
      var n = g(t);
      n != null &&
        (s == null
          ? e != null &&
            e.channel == null &&
            (e = babelHelpers.extends({}, e, { channel: n }))
          : s !== n && _(),
        (s = n));
    }
    function m(t) {
      var n = e;
      return n == null || t.kind !== "readable"
        ? null
        : n.owner ===
              o("WAWebHatchIdeasIconAccount").readHatchIdeasOwnerToken() &&
            n.channel === g(t)
          ? n.sections
          : null;
    }
    function p(t, n) {
      t.kind === "readable" &&
        (e = {
          channel: f(t),
          owner: o("WAWebHatchIdeasIconAccount").readHatchIdeasOwnerToken(),
          sections: n,
        });
    }
    function _() {
      ((e = null), (s = null));
    }
    function f(e) {
      var t;
      return (t = g(e)) != null ? t : s;
    }
    function g(e) {
      var t;
      return e.kind === "readable" && (t = e.channel) != null ? t : null;
    }
    ((l.watchHatchIdeasFeedCacheAccount = c),
      (l.readCachedHatchIdeasFeed = m),
      (l.storeHatchIdeasFeed = p),
      (l.clearHatchIdeasFeedCache = _));
  },
  98,
);
