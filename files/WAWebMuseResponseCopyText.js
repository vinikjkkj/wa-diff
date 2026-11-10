__d(
  "WAWebMuseResponseCopyText",
  ["JSResourceForInteraction", "WAWebCopyToClipboard", "WAWebNoop", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "WAWebMuseResponsePlainText",
      ).__setRef("WAWebMuseResponseCopyText"),
      s = "XMSGGenAIJarvisPayload",
      u = "text/plain";
    function c(e) {
      return (function (e) {
        return (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "__typename" in e &&
          e.__typename === s
        );
      })(e == null ? void 0 : e.passthrough_payload);
    }
    function d() {
      e.load().catch(r("WAWebNoop"));
    }
    function m(t, n) {
      var r = e.getModuleIfRequired();
      if (r != null) {
        var a = r.getResponsePlainText(t);
        a !== "" && o("WAWebCopyToClipboard").copyTextToClipboard(a);
        return;
      }
      p(t, n);
    }
    function p(t, n) {
      var o;
      if (typeof window.ClipboardItem != "function") {
        _(n);
        return;
      }
      var a = e.load().then(
        function (e) {
          var n = e.getResponsePlainText,
            o = n(t);
          if (o === "") throw r("err")("Muse reply draws no text to copy");
          return new Blob([o], { type: u });
        },
        function (e) {
          throw (_(n), e);
        },
      );
      navigator.clipboard
        .write([new window.ClipboardItem(((o = {}), (o[u] = a), o))])
        .catch(r("WAWebNoop"));
    }
    function _(e) {
      var t = e();
      t != null && t !== "" && o("WAWebCopyToClipboard").copyTextToClipboard(t);
    }
    ((l.isMuseResponse = c),
      (l.preloadMuseResponseCopyText = d),
      (l.copyMuseResponseText = m));
  },
  98,
);
