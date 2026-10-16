__d(
  "WAWebCopyToClipboard",
  [
    "Promise",
    "WALogger",
    "WAWebGetUserMediaErrors",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield e.navigator.permissions.query({
              name: "clipboard-write",
            });
            return t.state === "granted";
          } catch (e) {
            return !1;
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return !(
        !("clipboard" in navigator) ||
        !("ClipboardItem" in window) ||
        o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.SAFARI
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t != null ? t : window,
            r = yield c(n);
          if (r)
            try {
              return (yield n.navigator.clipboard.writeText(e), !0);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!m()) throw r("err")("Clipboard API not supported");
          var n = new window.ClipboardItem({ "image/png": h(t) });
          try {
            return (yield navigator.clipboard.write([n]), !0);
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      if (e.type === "image/png") return (s || (s = n("Promise"))).resolve(e);
      var t = URL.createObjectURL(e);
      return new (s || (s = n("Promise")))(function (e, n) {
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
    ((l.copyElementContentsToClipboard = u),
      (l.supportsCopyImageToClipboard = m),
      (l.copyTextToClipboard = p),
      (l.copyImageToClipboard = f));
  },
  98,
);
