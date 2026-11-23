__d(
  "WAWebMuseResponseCopyText",
  [
    "JSResourceForInteraction",
    "WAWebCopyToClipboard",
    "WAWebNoop",
    "WAWebUnifiedResponseUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "WAWebMuseResponsePlainText",
      ).__setRef("WAWebMuseResponseCopyText"),
      s = r("JSResourceForInteraction")("WAWebHatchJarvisCopyText").__setRef(
        "WAWebMuseResponseCopyText",
      ),
      u = "XMSGGenAIJarvisPayload",
      c = "text/plain";
    function d(e) {
      return (function (e) {
        return (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "__typename" in e &&
          e.__typename === u
        );
      })(e == null ? void 0 : e.passthrough_payload);
    }
    function m() {
      (e.load().catch(r("WAWebNoop")), s.load().catch(r("WAWebNoop")));
    }
    async function p(t) {
      var n = t.unifiedResponse;
      if (
        n == null ||
        !d(n) ||
        !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t)
      )
        return null;
      var r = await s.load(),
        a = r.getHatchJarvisCopyText,
        i = a(t);
      if (i != null) return i;
      var l = await e.load(),
        u = l.getResponsePlainText;
      return u(n);
    }
    function _(t, n) {
      var r = e.getModuleIfRequired();
      if (r != null) {
        var a = r.getResponsePlainText(t);
        a !== "" && o("WAWebCopyToClipboard").copyTextToClipboard(a);
        return;
      }
      f(t, n);
    }
    function f(t, n) {
      var o;
      if (typeof window.ClipboardItem != "function") {
        g(n);
        return;
      }
      var a = e.load().then(
        function (e) {
          var n = e.getResponsePlainText,
            o = n(t);
          if (o === "") throw r("err")("Muse reply draws no text to copy");
          return new Blob([o], { type: c });
        },
        function (e) {
          throw (g(n), e);
        },
      );
      navigator.clipboard
        .write([new window.ClipboardItem(((o = {}), (o[c] = a), o))])
        .catch(r("WAWebNoop"));
    }
    function g(e) {
      var t = e();
      t != null && t !== "" && o("WAWebCopyToClipboard").copyTextToClipboard(t);
    }
    ((l.isMuseResponse = d),
      (l.preloadMuseResponseCopyText = m),
      (l.genMuseResponseCopyText = p),
      (l.copyMuseResponseText = _));
  },
  98,
);
