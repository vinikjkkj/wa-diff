__d(
  "useWAWebBizAdCreationSAFRContext",
  ["FBLogger", "WAWebBizAdCreationSAFRContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(r("WAWebBizAdCreationSAFRContext"));
      if (e == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "WAWeb Biz Ad Creation SAFR context not set",
        );
      return e;
    }
    l.default = u;
  },
  98,
);
