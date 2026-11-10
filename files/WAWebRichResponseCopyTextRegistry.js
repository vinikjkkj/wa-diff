__d(
  "WAWebRichResponseCopyTextRegistry",
  ["JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")("WAWebHatchJarvisCopyText").__setRef(
        "WAWebRichResponseCopyTextRegistry",
      ),
      s = null,
      u = 0;
    function c(e) {
      ((u = e != null && e === s ? u + 1 : 1), (s = e));
    }
    function d(e) {
      s === e && ((u -= 1), u <= 0 && ((s = null), (u = 0)));
    }
    function m(t) {
      var n,
        r =
          s != null
            ? s
            : (n = e.getModuleIfRequired()) == null
              ? void 0
              : n.getHatchJarvisCopyText;
      return r != null ? r(t) : null;
    }
    ((l.registerRichResponseCopyText = c),
      (l.unregisterRichResponseCopyText = d),
      (l.getRegisteredRichResponseCopyText = m));
  },
  98,
);
