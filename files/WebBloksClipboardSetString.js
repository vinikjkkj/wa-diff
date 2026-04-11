__d(
  "WebBloksClipboardSetString",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = window.navigator;
      n && n.clipboard && "writeText" in n.clipboard
        ? n.clipboard.writeText(t)
        : l(t) ||
          e.bloksContext.objectSet.environment.logger.warn(
            "clipboard.SetString not supported on this browser",
          );
    }
    function l(e) {
      var t = document.body;
      if (!t) return !1;
      var n = document.activeElement,
        r = !0,
        o = document.createElement("textarea");
      if (
        (t.appendChild(o),
        (o.value = e),
        navigator.userAgent.match(/ipad|ipod|iphone/i))
      ) {
        var a = document.createRange();
        a.selectNodeContents(o);
        var i = window.getSelection();
        (i != null && (i.removeAllRanges(), i.addRange(a)),
          o.setSelectionRange(0, 999999));
      } else o.select();
      try {
        r = document.execCommand("copy");
      } catch (e) {
        r = !1;
      }
      return (t.removeChild(o), n != null && n.focus(), r);
    }
    i.default = e;
  },
  66,
);
