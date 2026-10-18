__d(
  "WAWebVoipWasmFetchTarget",
  ["WAWebVoipWebWasmBxRefs", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t = e.useContentAddressedWasm
          ? o("WAWebVoipWebWasmBxRefs").getContentAddressedVoipWasmBxRef()
          : o("WAWebVoipWebWasmBxRefs").getUnversionedVoipWasmBxRef();
        return { init: { credentials: "same-origin" }, url: r("bx").getURL(t) };
      } catch (e) {
        return null;
      }
    }
    l.getVoipWasmFetchTarget = e;
  },
  98,
);
