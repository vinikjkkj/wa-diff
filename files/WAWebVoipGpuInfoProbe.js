__d(
  "WAWebVoipGpuInfoProbe",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e == "string" ? e.trim() : "";
    }
    function s() {
      var t = globalThis.OffscreenCanvas;
      if (t == null) return null;
      var n = null;
      try {
        var r = new t(1, 1);
        if (((n = r.getContext("webgl")), n == null)) return null;
        var o = n.getExtension("WEBGL_debug_renderer_info");
        if (o == null) return null;
        var a = e(n.getParameter(o.UNMASKED_RENDERER_WEBGL)),
          i = e(n.getParameter(o.UNMASKED_VENDOR_WEBGL));
        return a === "" && i === "" ? null : { gpuName: a, gpuVendorRaw: i };
      } catch (e) {
        return null;
      } finally {
        var l,
          s = (l = n) == null ? void 0 : l.getExtension("WEBGL_lose_context");
        s == null || s.loseContext();
      }
    }
    l.detectGpuInfo = s;
  },
  98,
);
