__d(
  "supportsModuleWorker",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      if (e != null || e != null) return e;
      if (r("UserAgent").isEngine("Blink"))
        return (
          (e = t
            ? r("UserAgent").isEngine_DEPRECATED_DANGEROUS("Blink > 83")
            : r("UserAgent").isEngine_DEPRECATED_DANGEROUS("Blink > 80.1")),
          e
        );
      if (r("UserAgent").isBrowser("Safari"))
        return ((e = r("UserAgent").isBrowser("Safari > 14.9")), e);
      if (r("UserAgent").isBrowser("Firefox"))
        return ((e = r("UserAgent").isBrowser("Firefox > 113")), e);
      if (r("UserAgent").isEngine("WebKit"))
        return (
          (e = r("UserAgent").isEngine_DEPRECATED_DANGEROUS("WebKit > 606")),
          e
        );
      if (r("UserAgent").isBrowser("IE")) return ((e = !1), e);
      var n = {
        get type() {
          e = !0;
        },
      };
      try {
        if (t) var o = new SharedWorker("blob://", n);
        else var a = new Worker("blob://", n);
      } finally {
        return ((e = e != null ? e : !1), e);
      }
    }
    l.default = s;
  },
  98,
);
