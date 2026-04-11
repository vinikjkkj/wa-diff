__d(
  "SetActiveLayerIfAttached.react",
  [
    "CometKeyCommandUtilsContext",
    "CometLayerKeyCommandWidget",
    "FBLogger",
    "HiddenSubtreeContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = u(r("HiddenSubtreeContext")),
        a = u(r("CometKeyCommandUtilsContext")),
        i = a && a.setActiveLayer,
        l = u(r("CometLayerKeyCommandWidget").Context),
        s,
        d;
      return (
        t[0] !== l || t[1] !== n || t[2] !== i
          ? ((s = function () {
              if (!i) {
                r("FBLogger")("comet_ax").mustfix(
                  "The current layer is not wrapped in a *KeyCommandListener",
                );
                return;
              }
              if (!l) {
                r("FBLogger")("comet_ax").mustfix(
                  "setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper",
                );
                return;
              }
              n.hiddenOrBackgrounded || i(l);
            }),
            (d = [l, n, i]),
            (t[0] = l),
            (t[1] = n),
            (t[2] = i),
            (t[3] = s),
            (t[4] = d))
          : ((s = t[3]), (d = t[4])),
        c(s, d),
        null
      );
    }
    l.default = d;
  },
  98,
);
