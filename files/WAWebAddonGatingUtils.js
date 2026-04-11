__d(
  "WAWebAddonGatingUtils",
  [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebAddonPluginProcessor").hasAddonProcessor(e)
        ? o("WAWebAddonPluginProcessor").getAddonProcessor(e).isEnabled()
        : !1;
    }
    function s(e) {
      var t = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(e);
      return t == null ||
        !o("WAWebAddonCrossWindowUtils").isInfraSupportedAddon(t)
        ? !1
        : o("WAWebAddonPluginProcessor").getAddonProcessor(t).isEnabled();
    }
    ((l.isUnifiedInfraEnabledForType = e), (l.isUnifiedInfraEnabled = s));
  },
  98,
);
