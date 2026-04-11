__d(
  "WAWebBizBroadcastSendContext.react",
  ["err", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null);
    function p() {
      var e = d(m);
      if (e == null)
        throw r("err")(
          "useWAWebBizBroadcastSendContext must be used within a BroadcastSendContext.Provider",
        );
      return e;
    }
    ((l.useWAWebBizBroadcastSendContext = p), (l.BroadcastSendContext = m));
  },
  98,
);
