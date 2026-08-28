__d(
  "GeoPrivateModalContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext(function () {
        r("FBLogger")("geodesic_web")
          .blameToPreviousFrame()
          .mustfix("Trying to render modal without GeoTransientModalProvider");
      });
    u.displayName = "GeoPrivateModalContext";
    var c = u;
    l.default = c;
  },
  98,
);
