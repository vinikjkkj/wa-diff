__d(
  "WAWebTPPreloadingUtils",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebMimeTypes",
    "WAWebMsgQueryUtils",
    "WAWebMsgType",
    "WAWebTPIframeUtils",
    "WAWebTPPdfViewerGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1,
      c = !1,
      d = 50,
      m = 100;
    async function p(t, n) {
      if (u) return !0;
      if (
        !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled() ||
        !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerPreloadEnabled()
      )
        return !1;
      if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
        if (!c) {
          ((c = !0),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Deferring WebTP iframe preload until offline delivery ends",
                ])),
            ));
          var r = function () {
            ((c = !1), p(t, n));
          };
          o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(r);
        }
        return !1;
      }
      var a = n.source,
        i = n.appStartLimit,
        l = i === void 0 ? m : i,
        f = n.inChatLimit,
        g = f === void 0 ? d : f,
        h = n.force,
        y = h === void 0 ? !1 : h,
        C = !1;
      if (y) C = !0;
      else {
        var b = await _(t, g, l);
        C = b.some(function (e) {
          return (
            e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            e.mimetype != null &&
            o("WAWebMimeTypes").isPdfDocument(e.mimetype)
          );
        });
      }
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Preloading WebTP iframe for PDFs: ",
              "",
            ])),
          C,
        ),
        C
          ? (o("WAWebTPIframeUtils").preloadWebTPIframeIfEnabled(
              "application/pdf",
              a,
            ),
            (u = !0),
            !0)
          : !1
      );
    }
    async function _(e, t, n) {
      if (e) {
        var r = e.msgs.last();
        return o("WAWebMsgQueryUtils").getAllDocsMsgs({
          count: t,
          direction: "before",
          msgKey: r == null ? void 0 : r.id,
        });
      }
      return o("WAWebMsgQueryUtils").getAllDocsMsgs({ count: n });
    }
    l.maybePreloadWebTPIframeForPDFs = p;
  },
  98,
);
