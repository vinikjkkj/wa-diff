__d(
  "assignMediaStream",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.URL || window.webkitURL,
      s = "srcObject" in window.HTMLMediaElement.prototype,
      u = "mozSrcObject" in window.HTMLMediaElement.prototype;
    function c(e, t) {
      if (s)
        try {
          (m(e), (e.srcObject = t));
        } catch (e) {
          throw (
            r("FBLogger")("rt_web")
              .catching(r("getErrorSafe")(e))
              .warn(
                "Failed to assign media stream. Stream object is: %s",
                String(t),
              ),
            e
          );
        }
      else u ? (e.mozSrcObject = t) : d(e, t);
    }
    function d(t, n) {
      (m(t), (t.src = n != null ? e.createObjectURL(n) : ""));
    }
    function m(t) {
      try {
        typeof t.src == "string" && e.revokeObjectURL(t.src);
      } catch (e) {
        r("FBLogger")("rt_web")
          .catching(r("getErrorSafe")(e))
          .warn("error revoking object URL");
      }
    }
    l.default = c;
  },
  98,
);
