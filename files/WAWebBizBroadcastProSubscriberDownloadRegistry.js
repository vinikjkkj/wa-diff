__d(
  "WAWebBizBroadcastProSubscriberDownloadRegistry",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "subscriber_downloads_changed",
      s = 100,
      u = new (r("WAWebEventEmitter"))(),
      c = new Map();
    function d() {
      return Array.from(c.values());
    }
    function m(e) {
      return c.get(e);
    }
    function p() {
      for (var e of c.values()) if (e.status === "preparing") return !0;
      return !1;
    }
    function _() {
      var t = !1;
      for (var n of Array.from(c.values()))
        n.status !== "preparing" && (t = y(n.key) || t);
      t && u.trigger(e);
    }
    function f(t) {
      (c.set(t.key, t), u.trigger(e));
    }
    function g(t, n) {
      var r = c.get(t);
      if (r != null) {
        var o = babelHelpers.extends({}, r, n);
        (c.set(t, o), C(r, o) || u.trigger(e));
      }
    }
    function h(t) {
      y(t) && u.trigger(e);
    }
    function y(e) {
      return c.delete(e);
    }
    function C(e, t) {
      return (
        e.cdnUrl === t.cdnUrl &&
        e.completionPercentage === t.completionPercentage &&
        e.exportId === t.exportId &&
        e.filename === t.filename &&
        e.key === t.key &&
        e.poolName === t.poolName &&
        e.status === t.status
      );
    }
    function b(e, t) {
      var n,
        r,
        o =
          (n = (r = c.get(e)) == null ? void 0 : r.completionPercentage) != null
            ? n
            : 0;
      return Math.min(Math.max(o, t), s);
    }
    ((l.SUBSCRIBER_DOWNLOADS_CHANGED = e),
      (l.COMPLETE_PERCENTAGE = s),
      (l.SubscriberDownloadEmitter = u),
      (l.getSubscriberDownloads = d),
      (l.getSubscriberDownload = m),
      (l.hasPreparingDownload = p),
      (l.removeSettledDownloads = _),
      (l.putSubscriberDownload = f),
      (l.patchSubscriberDownload = g),
      (l.removeSubscriberDownload = h),
      (l.clampProgress = b));
  },
  98,
);
