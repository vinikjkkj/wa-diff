__d(
  "WAWebMuseResponseCopyText",
  [
    "JSResourceForInteraction",
    "WAWebCopyToClipboard",
    "WAWebNoop",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime",
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.unifiedResponse;
          if (
            n == null ||
            !d(n) ||
            !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t)
          )
            return null;
          var r = yield s.load(),
            a = r.getHatchJarvisCopyText,
            i = a(t);
          if (i != null) return i;
          var l = yield e.load(),
            u = l.getResponsePlainText;
          return u(n);
        })),
        _.apply(this, arguments)
      );
    }
    function f(t, n) {
      var r = e.getModuleIfRequired();
      if (r != null) {
        var a = r.getResponsePlainText(t);
        a !== "" && o("WAWebCopyToClipboard").copyTextToClipboard(a);
        return;
      }
      g(t, n);
    }
    function g(t, n) {
      var o;
      if (typeof window.ClipboardItem != "function") {
        h(n);
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
          throw (h(n), e);
        },
      );
      navigator.clipboard
        .write([new window.ClipboardItem(((o = {}), (o[c] = a), o))])
        .catch(r("WAWebNoop"));
    }
    function h(e) {
      var t = e();
      t != null && t !== "" && o("WAWebCopyToClipboard").copyTextToClipboard(t);
    }
    ((l.isMuseResponse = d),
      (l.preloadMuseResponseCopyText = m),
      (l.genMuseResponseCopyText = p),
      (l.copyMuseResponseText = f));
  },
  98,
);
