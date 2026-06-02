__d(
  "WAWebComposeBoxUtils",
  [
    "fbt",
    "WALogger",
    "WAWebChatGetMessage",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMessageEditFlow.react",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebPonyfillsFetch",
    "WAWebQuestions.flow",
    "WAWebStopEvent",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebURLUtils",
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
              new (o("WAWebMiscErrors").MediaFileFailedLoad)()
            );
          return t.blob();
        })
        .then(async function (e) {
          var t = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
              file: e,
              maxDimensions: [o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE],
              debugHint: "handleGif",
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
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "compose-box" },
          title: s._(/*BTDS*/ "Message too long"),
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: s._(
            /*BTDS*/ "The message you're pasting is too long. Try shortening it or sending it in multiple parts.",
          ),
        }),
      );
    }
    function _(e, t) {
      var n = o("WAWebChatGetMessage").getLastSentMsg(e);
      n && o("WAWebMsgActionCapability").canEnterEditingFlow(n)
        ? (o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebMessageEditFlow.react"), { msg: n }),
          ),
          o("WAWebStopEvent").stopEvent(t))
        : o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Message cannot be edited"),
            }),
          );
    }
    function f(e) {
      var t = e.chat,
        n = e.isEditingCaption,
        r = e.questionType;
      return n === !0
        ? s._(/*BTDS*/ "Type a caption")
        : o("WAWebChatGetters").getIsNewsletter(t)
          ? r === o("WAWebQuestions.flow").QuestionType.Question
            ? s._(/*BTDS*/ "Ask followers something")
            : r === o("WAWebQuestions.flow").QuestionType.Response
              ? s._(/*BTDS*/ "Respond to {channel-name}", [
                  s._param("channel-name", t.name),
                ])
              : r === o("WAWebQuestions.flow").QuestionType.Reply
                ? s._(/*BTDS*/ "Reply in {channel-name}", [
                    s._param("channel-name", t.name),
                  ])
                : s._(/*BTDS*/ "Type an update")
          : s._(/*BTDS*/ "Type a message");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("WAWebChatGetters").getIsGroup(e);
      return t
        ? s._(/*BTDS*/ "Type a message to group {chatName}", [
            s._param("chatName", e.formattedTitle),
          ])
        : s._(/*BTDS*/ "Type a message to {chatName}", [
            s._param("chatName", e.formattedTitle),
          ]);
    }
    ((l.getCachedPreview = d),
      (l.fetchGif = m),
      (l.handleMaxPasteExceeded = p),
      (l.editLastMessage = _),
      (l.getComposeBoxPlaceholderText = f),
      (l.getComposeBoxAriaLabelText = g));
  },
  226,
);
