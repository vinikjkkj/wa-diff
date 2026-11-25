__d(
  "WAWebComposeBoxUtils",
  [
    "fbt",
    "WALogger",
    "WAWebChatGetMessage",
    "WAWebChatGetters",
    "WAWebFbtCommon",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMessageEditFlow.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebPonyfillsFetch",
    "WAWebQuestions.flow",
    "WAWebStopEvent",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebURLUtils",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = {
        mediaKey: e.data.mediaKey,
        mediaKeyTimestamp: e.data.mediaKeyTimestamp,
        thumbnailDirectPath: e.data.thumbnailDirectPath,
        thumbnailSha256: e.data.thumbnailSha256,
        thumbnailEncSha256: e.data.thumbnailEncSha256,
      };
      return babelHelpers.extends({}, e, {
        data: babelHelpers.extends({}, e.data, t),
      });
    }
    function m(t) {
      var n = t.accessibilityLabel,
        a = t.attribution,
        i = t.filename,
        l = t.gifUrl;
      return r("WAWebPonyfillsFetch")(l, { headers: { Accept: "video/mp4" } })
        .then(function (t) {
          if (!t.ok)
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed loading gif (status: ",
                    ")",
                  ])),
                t.status,
              ),
              new (o("WAWebMediaFileErrors").MediaFileFailedLoad)()
            );
          return t.blob();
        })
        .then(async function (e) {
          var t = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
              file: e,
              maxDimensions: [o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE],
              debugHint: "handleGif",
              logContext: { callsite: "HANDLE_GIF", mediaType: "GIF" },
            }),
            l = t.thumbs,
            s = l[0],
            u = t.duration;
          return {
            file: e,
            filename: i,
            mimetype: e.type,
            isGif: !0,
            gifAttribution: a,
            fullPreview: window.URL.createObjectURL(e),
            fullPreviewSize: { width: s.fullWidth, height: s.fullHeight },
            preview: r("WAWebURLUtils").parseDataURL(s.url).data,
            duration: u,
            accessibilityLabel: n,
          };
        });
    }
    function p() {
      o("WDSDialogBridge").openWDSDialog(c.jsx(_, {}));
    }
    function _() {
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "unknown",
          viewName: "compose-box",
        }),
        c.jsx(r("WDSDialog.react"), {
          closeButton: !1,
          description: s._(/*BTDS*/ ""),
          footer: c.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            primaryButtonProps: {
              label: r("WAWebFbtCommon")("OK"),
              onPress: o("WDSDialogBridge").closeWDSDialog,
              testid: "popup-controls-ok",
            },
            width: "fill",
          }),
          headerType: "expressive",
          layoutType: "expressive",
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          size: "sm",
          testid: "confirm-popup",
          title: s._(/*BTDS*/ ""),
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      var n = o("WAWebChatGetMessage").getLastSentMsg(e);
      n && o("WAWebMsgActionCapability").canEnterEditingFlow(n)
        ? (o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebMessageEditFlow.react"), { msg: n }),
          ),
          o("WAWebStopEvent").stopEvent(t))
        : o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          );
    }
    function g(e) {
      var t = e.chat,
        n = e.isEditingCaption,
        r = e.questionType;
      return n === !0
        ? s._(/*BTDS*/ "")
        : o("WAWebChatGetters").getIsNewsletter(t)
          ? r === o("WAWebQuestions.flow").QuestionType.Question
            ? s._(/*BTDS*/ "")
            : r === o("WAWebQuestions.flow").QuestionType.Response
              ? s._(/*BTDS*/ "", [s._param("channel-name", t.name)])
              : r === o("WAWebQuestions.flow").QuestionType.Reply
                ? s._(/*BTDS*/ "", [s._param("channel-name", t.name)])
                : s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        n = e.questionType;
      if (o("WAWebChatGetters").getIsBot(t)) return s._(/*BTDS*/ "");
      if (!(n == null || !o("WAWebChatGetters").getIsNewsletter(t)))
        return g({ chat: t, questionType: n });
    }
    function y(e) {
      var t = o("WAWebChatGetters").getIsGroup(e);
      return t
        ? s._(/*BTDS*/ "", [s._param("chatName", e.formattedTitle)])
        : s._(/*BTDS*/ "", [s._param("chatName", e.formattedTitle)]);
    }
    ((l.getCachedPreview = d),
      (l.fetchGif = m),
      (l.handleMaxPasteExceeded = p),
      (l.editLastMessage = f),
      (l.getComposeBoxPlaceholderText = g),
      (l.getMediaCaptionPlaceholderText = h),
      (l.getComposeBoxAriaLabelText = y));
  },
  226,
);
