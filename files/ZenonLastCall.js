__d(
  "ZenonLastCall",
  ["CacheStorage", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("3837"),
      s = "RTC_LAST_CALL_",
      u = "rtc_last_call";
    function c(t) {
      t === void 0 && (t = e);
      var n = new (r("CacheStorage"))("localstorage", s),
        o = n.get(u);
      if (!o || o.length === 0) return null;
      var a = Object.keys(o)[0],
        i = Object.keys(o[a])[0],
        l = o[a][i],
        c = l.__d,
        d = l.__t;
      return d < Date.now() - t ? null : JSON.parse(c);
    }
    ((l.STORAGE_PREFIX = s), (l.STORAGE_KEY = u), (l.useZenonLastCall = c));
  },
  98,
);
