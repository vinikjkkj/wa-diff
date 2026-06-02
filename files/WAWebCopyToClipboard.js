__d(
  "WAWebCopyToClipboard",
  ["WALogger", "WANullthrows", "WAWebMiscErrors", "WAWebUA", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      try {
        r("WANullthrows")(window.getSelection()).removeAllRanges();
        var t = document.createRange();
        (t.selectNode(e), r("WANullthrows")(window.getSelection()).addRange(t));
        var n = document.execCommand("copy");
        return (r("WANullthrows")(window.getSelection()).removeAllRanges(), n);
      } catch (e) {
        return !1;
      }
    }
    async function u(e) {
      try {
        var t = await e.navigator.permissions.query({
          name: "clipboard-write",
        });
        return t.state === "granted";
      } catch (e) {
        return !1;
      }
    }
    function c() {
      return !(
        !("clipboard" in navigator) ||
        !("ClipboardItem" in window) ||
        o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.SAFARI
      );
    }
    async function d(e, t) {
      var n = t != null ? t : window,
        r = await u(n);
      if (r)
        try {
          return (await n.navigator.clipboard.writeText(e), !0);
        } catch (e) {
          if (e instanceof o("WAWebMiscErrors").NotAllowedError) return !1;
        }
      var a = !1,
        i = n.document,
        l = i.body;
      if (l) {
        var s = i.createElement("textarea");
        ((s.textContent = e), l.appendChild(s), s.focus(), s.select());
        try {
          (i.execCommand("copy"), (a = !0));
        } catch (e) {
          a = !1;
        } finally {
          l.removeChild(s);
        }
      }
      return a;
    }
    async function m(t) {
      if (!c()) throw r("err")("Clipboard API not supported");
      var n =
          t.type === "image/png"
            ? Promise.resolve(t)
            : new Promise(function (e) {
                var n = new Image();
                ((n.onload = function (t) {
                  var n = t.target,
                    r = document.createElement("canvas"),
                    o = r.getContext("2d");
                  ((r.width = n.naturalWidth),
                    (r.height = n.naturalHeight),
                    o.drawImage(n, 0, 0),
                    r.toBlob(e, "image/png", 1));
                }),
                  (n.src = URL.createObjectURL(t)));
              }),
        a = new window.ClipboardItem({ "image/png": n });
      navigator.clipboard.write([a]).catch(function (t) {
        return o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Write image to clipboard failed",
              ])),
          )
          .sendLogs(String(t));
      });
    }
    ((l.copyElementContentsToClipboard = s),
      (l.supportsCopyImageToClipboard = c),
      (l.copyTextToClipboard = d),
      (l.copyImageToClipboard = m));
  },
  98,
);
