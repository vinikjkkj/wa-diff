__d(
  "WAWebCopyUtils",
  [
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebCopyPasteClipboard",
    "WAWebCopyToClipboard",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMsgActionCapability",
    "WAWebMsgType",
    "WAWebRichResponseCopyText",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(
        e,
        o("WAWebFrontendMsgGetters").getChat(e),
      )
        ? !!(
            e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
            o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
              (t = e.ctwaContext) == null ? void 0 : t.sourceApp,
              e.type,
              (n = e.ctwaContext) == null
                ? void 0
                : n.automatedGreetingMessageShown,
              e.subtype,
            ) ||
            (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
              !e.mediaData.isViewOnce &&
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                e.filehash,
              ) != null &&
              o("WAWebCopyToClipboard").supportsCopyImageToClipboard()) ||
            (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              (e == null ? void 0 : e.nativeFlowName) ===
                r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) ||
            (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
              o("WAWebRichResponseCopyText").canCopyRichResponseMessage(e))
          )
        : !1;
    }
    function s() {
      var e = window.getSelection();
      return (e == null ? void 0 : e.toString()) !== "";
    }
    function u(e) {
      e.body != null && o("WAWebCopyToClipboard").copyTextToClipboard(e.body);
    }
    function c(e) {
      var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
        e.filehash,
      );
      t != null && o("WAWebCopyToClipboard").copyImageToClipboard(t);
    }
    function d(e) {
      var t,
        n = [];
      (((t = e.interactiveHeader) == null ? void 0 : t.title) != null &&
        n.push(e.interactiveHeader.title),
        e.caption != null && n.push(e.caption),
        e.footer != null && n.push(e.footer));
      var r = n.join("\n");
      o("WAWebCopyToClipboard").copyTextToClipboard(r);
    }
    function m(e) {
      var t = e.unifiedResponse;
      if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
        var n = r("getPlainTextFromUnifiedResponse")(t);
        if (n !== "") {
          o("WAWebCopyToClipboard").copyTextToClipboard(n);
          return;
        }
      }
      var a = e.richResponse;
      if (a != null) {
        var i = o("WAWebRichResponseCopyText").getRichResponseCopyText(a);
        i != null && o("WAWebCopyToClipboard").copyTextToClipboard(i);
      }
    }
    function p(e) {
      var t, n;
      ((e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          (t = e.ctwaContext) == null ? void 0 : t.sourceApp,
          e.type,
          (n = e.ctwaContext) == null
            ? void 0
            : n.automatedGreetingMessageShown,
          e.subtype,
        )) &&
        u(e),
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          (e == null ? void 0 : e.nativeFlowName) ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
          d(e),
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && c(e),
        e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          o("WAWebRichResponseCopyText").canCopyRichResponseMessage(e) &&
          m(e));
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return null;
          var t = e
            .filter(function (e) {
              return e.body != null;
            })
            .sort(
              o("WAWebAllMsgTypeCollectionUtils").sortMsgsByInputComparator(
                "asc",
              ),
            );
          if (t.length === 0) return null;
          var n = t
            .map(function (e) {
              return e.body;
            })
            .join("\n");
          return (
            yield o("WAWebCopyToClipboard").copyTextToClipboard(n),
            t.length
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = window.getSelection();
      if (t != null) {
        var n = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(e, t);
        o("WAWebCopyToClipboard").copyTextToClipboard(n.toPlainString());
      }
    }
    ((l.canCopyMessage = e),
      (l.canCopySelection = s),
      (l.copyMessageToClipboard = p),
      (l.copyMessagesToClipboard = _),
      (l.copySelection = g));
  },
  98,
);
