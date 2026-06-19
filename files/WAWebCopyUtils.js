__d(
  "WAWebCopyUtils",
  [
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebCopyPasteClipboard",
    "WAWebCopyToClipboard",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMentionDisplayUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgType",
    "WAWebRichResponseCopyText",
    "WAWebRichTextInputConst",
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
            o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
              isAGMShown:
                (t = e.ctwaContext) == null
                  ? void 0
                  : t.automatedGreetingMessageShown,
              msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
              msgSubtype: e.subtype,
              msgType: e.type,
            }) ||
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
      if (e.body != null) {
        var t = c(e),
          n = t.appText,
          r = t.hasMentions,
          a = t.plainText;
        if (!r) {
          o("WAWebCopyToClipboard").copyTextToClipboard(a);
          return;
        }
        p(a, n) || o("WAWebCopyToClipboard").copyTextToClipboard(a);
      }
    }
    function c(e) {
      var t,
        n = (t = e.body) != null ? t : "",
        r = d(e);
      return {
        appText: m(n, r, "app"),
        hasMentions: r.length > 0,
        plainText: m(n, r, "plain"),
      };
    }
    function d(e) {
      var t = [],
        n = e.mentionMap();
      n != null &&
        Object.entries(n).forEach(function (e) {
          var n = e[0],
            r = e[1];
          t.push({
            app:
              "" +
              o("WAWebRichTextInputConst").ZWS +
              r.id.toString() +
              o("WAWebRichTextInputConst").ZWS,
            plain: o("WAWebMentionDisplayUtils").addAtPrefixForMention(
              o("WAWebFrontendContactGetters").getDisplayName(r),
            ),
            token: n,
          });
        });
      var r = e.groupMentionMap();
      return (
        r != null &&
          Object.entries(r).forEach(function (e) {
            var n = e[0],
              r = e[1],
              a = n.startsWith("@") ? n.slice(1) : n;
            t.push({
              app:
                "" +
                o("WAWebRichTextInputConst").ZWS +
                a +
                o("WAWebRichTextInputConst").ZWS,
              plain:
                r != null && r !== ""
                  ? o("WAWebMentionDisplayUtils").addAtPrefixForMention(r)
                  : n,
              token: n,
            });
          }),
        t
      );
    }
    function m(e, t, n) {
      var r = [].concat(t).sort(function (e, t) {
          return t.token.length - e.token.length;
        }),
        o = e;
      for (var a of r) {
        var i = n === "app" ? a.app : a.plain;
        o = o.split(a.token).join(i);
      }
      return o;
    }
    function p(e, t) {
      var n = document.body;
      if (n == null) return !1;
      var r = function (r) {
          var n = r.clipboardData;
          if (n != null) {
            n.setData("text/plain", e);
            try {
              n.setData(o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE, t);
            } catch (e) {}
            r.preventDefault();
          }
        },
        a = document.createElement("textarea");
      ((a.value = e),
        n.appendChild(a),
        a.focus(),
        a.select(),
        document.addEventListener("copy", r));
      var i = !1;
      try {
        i = document.execCommand("copy");
      } catch (e) {
        i = !1;
      } finally {
        (document.removeEventListener("copy", r), n.removeChild(a));
      }
      return i;
    }
    function _(e) {
      var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
        e.filehash,
      );
      t != null && o("WAWebCopyToClipboard").copyImageToClipboard(t);
    }
    function f(e) {
      var t,
        n = [];
      (((t = e.interactiveHeader) == null ? void 0 : t.title) != null &&
        n.push(e.interactiveHeader.title),
        e.caption != null && n.push(e.caption),
        e.footer != null && n.push(e.footer));
      var r = n.join("\n");
      o("WAWebCopyToClipboard").copyTextToClipboard(r);
    }
    function g(e) {
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
    function h(e) {
      var t, n;
      ((e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
          isAGMShown:
            (t = e.ctwaContext) == null
              ? void 0
              : t.automatedGreetingMessageShown,
          msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
          msgSubtype: e.subtype,
          msgType: e.type,
        })) &&
        u(e),
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          (e == null ? void 0 : e.nativeFlowName) ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
          f(e),
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && _(e),
        e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          o("WAWebRichResponseCopyText").canCopyRichResponseMessage(e) &&
          g(e));
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var n = t.map(c),
            r = n
              .map(function (e) {
                return e.plainText;
              })
              .join("\n"),
            a = n.some(function (e) {
              return e.hasMentions;
            });
          return (
            (!a ||
              !p(
                r,
                n
                  .map(function (e) {
                    return e.appText;
                  })
                  .join("\n"),
              )) &&
              (yield o("WAWebCopyToClipboard").copyTextToClipboard(r)),
            t.length
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = window.getSelection();
      if (t != null) {
        var n = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(e, t);
        o("WAWebCopyToClipboard").copyTextToClipboard(n.toPlainString());
      }
    }
    ((l.canCopyMessage = e),
      (l.canCopySelection = s),
      (l.getMentionAwareClipboardContent = c),
      (l.copyMessageToClipboard = h),
      (l.copyMessagesToClipboard = y),
      (l.copySelection = b));
  },
  98,
);
