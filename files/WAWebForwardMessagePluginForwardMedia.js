__d(
  "WAWebForwardMessagePluginForwardMedia",
  ["WAWebForwardMessagePluginForwardMediaRegistryForNonGuest"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (var t of r(
        "WAWebForwardMessagePluginForwardMediaRegistryForNonGuest",
      )) {
        var n = t(e);
        if (n != null) return n;
      }
      return null;
    }
    l.maybeForwardMediaMessageFromPlugin = e;
  },
  98,
);
