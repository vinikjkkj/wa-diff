__d(
  "replaceNativeTimer",
  [
    "Hyperion",
    "cancelAnimationFrame",
    "clearInterval",
    "clearTimeout",
    "requestAnimationFrame",
    "setInterval",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    (n("Hyperion"),
      (t.__fbNativeSetTimeout = t.setTimeout),
      (t.__fbNativeClearTimeout = t.clearTimeout),
      (t.__fbNativeSetInterval = t.setInterval),
      (t.__fbNativeClearInterval = t.clearInterval),
      (t.__fbNativeRequestAnimationFrame = t.requestAnimationFrame),
      (t.__fbNativeCancelAnimationFrame = t.cancelAnimationFrame),
      (r("setTimeout").nativeBackup = t.setTimeout),
      (r("clearTimeout").nativeBackup = t.clearTimeout),
      (r("setInterval").nativeBackup = t.setInterval),
      (r("clearInterval").nativeBackup = t.clearInterval),
      (r("requestAnimationFrame").nativeBackup = t.requestAnimationFrame),
      (r("cancelAnimationFrame").nativeBackup = t.cancelAnimationFrame),
      (t.setTimeout = r("setTimeout")),
      (t.clearTimeout = r("clearTimeout")),
      (t.setInterval = r("setInterval")),
      (t.clearInterval = r("clearInterval")),
      (t.requestAnimationFrame = r("requestAnimationFrame")),
      (t.cancelAnimationFrame = r("cancelAnimationFrame")));
    function e() {}
    l.default = e;
  },
  98,
);
