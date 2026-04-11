__d(
  "WAWebTPPreloadingUtils",
  [
    "WALogger",
    "WAWebMimeTypes",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebTPIframeUtils",
    "WAWebTPPdfViewerGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u() {
      s = !1;
    }
    var c = 50,
      d = 100;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (s) return !0;
          if (!o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled())
            return !1;
          var r = n.source,
            a = n.appStartLimit,
            i = a === void 0 ? d : a,
            l = n.inChatLimit,
            u = l === void 0 ? c : l,
            m = n.force,
            p = m === void 0 ? !1 : m,
            f = !1;
          if (p) f = !0;
          else {
            var g = yield _(t, u, i);
            f = g.some(function (e) {
              return (
                e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                e.mimetype != null &&
                o("WAWebMimeTypes").isPdfDocument(e.mimetype)
              );
            });
          }
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Preloading WebTP iframe for PDFs: ",
                  "",
                ])),
              f,
            ),
            f
              ? (o("WAWebTPIframeUtils").preloadWebTPIframeIfEnabled(
                  "application/pdf",
                  r,
                ),
                (s = !0),
                !0)
              : !1
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e) {
            var r = e.msgs.last();
            return o("WAWebMsgCollection").MsgCollection.getAllDocsMsgs(
              t,
              r == null ? void 0 : r.id,
              "before",
            );
          }
          return o("WAWebMsgCollection").MsgCollection.getAllDocsMsgs(n);
        })),
        f.apply(this, arguments)
      );
    }
    ((l.__resetPreloadingStateForTests = u),
      (l.maybePreloadWebTPIframeForPDFs = m));
  },
  98,
);
