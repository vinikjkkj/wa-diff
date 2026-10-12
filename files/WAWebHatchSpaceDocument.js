__d(
  "WAWebHatchSpaceDocument",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "default-src 'none'",
        "script-src 'unsafe-inline'",
        "style-src 'unsafe-inline'",
        "img-src data: blob:",
        "font-src data: blob:",
        "media-src data: blob:",
        "connect-src 'none'",
        "frame-src 'none'",
        "child-src 'none'",
        "form-action 'none'",
        "base-uri 'none'",
      ].join("; "),
      l =
        "(function () {\n  'use strict';\n  var names = ['RTCPeerConnection', 'webkitRTCPeerConnection', 'RTCIceGatherer', 'RTCDataChannel'];\n  var blocked = true;\n  names.forEach(function (name) {\n    try {\n      Object.defineProperty(window, name, { value: undefined, writable: false, configurable: false });\n      var descriptor = Object.getOwnPropertyDescriptor(window, name);\n      if (window[name] !== undefined || !descriptor || descriptor.configurable) { blocked = false; }\n    } catch (e) {\n      blocked = false;\n    }\n  });\n  if (blocked) { return; }\n  try { window.stop(); } catch (e) {}\n  try { document.open(); document.close(); } catch (e) {}\n  throw new Error('WebRTC could not be disabled');\n})();",
      s =
        "(function () {\n  'use strict';\n  function hashOf(e) {\n    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) { return null; }\n    var t = e.target, a = t && t.closest ? t.closest('a[href]') : null;\n    var h = a && a.getAttribute('href');\n    return h && h.charAt(0) === '#' ? h : null;\n  }\n  function follow(e) {\n    var h = hashOf(e);\n    if (h) { e.preventDefault(); location.hash = h; }\n  }\n  window.addEventListener('click', function (e) {\n    if (!hashOf(e)) { return; }\n    var stop = e.stopPropagation, stopNow = e.stopImmediatePropagation;\n    function after() { Promise.resolve().then(function () { follow(e); }); }\n    e.stopPropagation = function () { after(); return stop.call(e); };\n    e.stopImmediatePropagation = function () { after(); return stopNow.call(e); };\n  }, true);\n  window.addEventListener('click', follow);\n  window.addEventListener('load', function () {\n    window.removeEventListener('click', follow);\n    window.addEventListener('click', follow);\n  });\n})();",
      u = [
        '<meta http-equiv="Content-Security-Policy" content="' + e + '">',
        '<meta http-equiv="x-dns-prefetch-control" content="off">',
        "<script>" + l + "<\/script>",
        "<script>" + s + "<\/script>",
      ].join("");
    function c(e) {
      return "" + u + e;
    }
    i.buildHatchSpaceDocument = c;
  },
  66,
);
