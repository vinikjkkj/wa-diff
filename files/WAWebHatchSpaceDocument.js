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
      ].join(""),
      c = "\uFEFF",
      d = "	\n\f\r ",
      m = "<!--",
      p = [">", "->"];
    function _(e) {
      var t = e.startsWith(c) ? e.slice(c.length) : e,
        n = f(t);
      return "" + t.slice(0, n) + u + t.slice(n);
    }
    function f(e) {
      for (var t = 0; ; ) {
        for (; t < e.length && d.includes(e[t]); ) t++;
        if (!e.startsWith(m, t)) break;
        if (((t = g(e, t + m.length)), t < 0)) return 0;
      }
      var n = new RegExp("<!doctype", "iy");
      if (((n.lastIndex = t), !n.test(e))) return 0;
      var r = e.indexOf(">", n.lastIndex);
      return r < 0 ? 0 : r + 1;
    }
    function g(e, t) {
      var n = p.find(function (n) {
        return e.startsWith(n, t);
      });
      if (n != null) return t + n.length;
      var r = /--!?>/g;
      return ((r.lastIndex = t), r.exec(e) == null ? -1 : r.lastIndex);
    }
    i.buildHatchSpaceDocument = _;
  },
  66,
);
