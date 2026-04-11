__d(
  "WAWebCopyToClipboard",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebMiscErrors",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
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
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield navigator.permissions.query({
              name: "clipboard-write",
            });
            return e.state === "granted";
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c();
          if (t)
            try {
              return (yield navigator.clipboard.writeText(e), !0);
            } catch (e) {
              if (e instanceof o("WAWebMiscErrors").NotAllowedError) return !1;
            }
          var n = !1,
            r = document.body;
          if (r) {
            var a = document.createElement("textarea");
            ((a.textContent = e), r.appendChild(a), a.focus(), a.select());
            try {
              (document.execCommand("copy"), (n = !0));
            } catch (e) {
              n = !1;
            } finally {
              r.removeChild(a);
            }
          }
          return n;
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
          var a =
              t.type === "image/png"
                ? (s || (s = n("Promise"))).resolve(t)
                : new (s || (s = n("Promise")))(function (e) {
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
            i = new window.ClipboardItem({ "image/png": a });
          navigator.clipboard.write([i]).catch(function (t) {
            return o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Write image to clipboard failed",
                  ])),
              )
              .sendLogs(String(t));
          });
        })),
        g.apply(this, arguments)
      );
    }
    ((l.copyElementContentsToClipboard = u),
      (l.supportsCopyImageToClipboard = m),
      (l.copyTextToClipboard = p),
      (l.copyImageToClipboard = f));
  },
  98,
);
