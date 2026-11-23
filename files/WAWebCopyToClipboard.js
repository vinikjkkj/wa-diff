__d(
  "WAWebCopyToClipboard",
  ["WALogger", "WAWebGetUserMediaErrors", "err", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      try {
        r("nullthrows")(window.getSelection()).removeAllRanges();
        var t = document.createRange();
        (t.selectNode(e), r("nullthrows")(window.getSelection()).addRange(t));
        var n = document.execCommand("copy");
        return (r("nullthrows")(window.getSelection()).removeAllRanges(), n);
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
      return "clipboard" in navigator && "ClipboardItem" in window;
    }
    async function d(e, t) {
      var n = t != null ? t : window,
        r = await u(n);
      if (r)
        try {
          return (await n.navigator.clipboard.writeText(e), !0);
        } catch (e) {
          if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
            return !1;
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
      var n = new window.ClipboardItem({ "image/png": p(t) });
      try {
        return (await navigator.clipboard.write([n]), !0);
      } catch (t) {
        return (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Write image to clipboard failed",
                ])),
            )
            .sendLogs(String(t)),
          !1
        );
      }
    }
    function p(e) {
      if (e.type === "image/png") return Promise.resolve(e);
      var t = URL.createObjectURL(e);
      return new Promise(function (e, n) {
        var o = new Image();
        ((o.onload = function () {
          try {
            var t = document.createElement("canvas");
            ((t.width = o.naturalWidth),
              (t.height = o.naturalHeight),
              r("nullthrows")(t.getContext("2d")).drawImage(o, 0, 0),
              t.toBlob(
                function (t) {
                  t == null ? n(r("err")("PNG conversion failed")) : e(t);
                },
                "image/png",
                1,
              ));
          } catch (e) {
            n(e);
          }
        }),
          (o.onerror = function () {
            return n(r("err")("Image decode failed"));
          }),
          (o.src = t));
      }).finally(function () {
        return URL.revokeObjectURL(t);
      });
    }
    ((l.copyElementContentsToClipboard = s),
      (l.supportsCopyImageToClipboard = c),
      (l.copyTextToClipboard = d),
      (l.copyImageToClipboard = m));
  },
  98,
);
