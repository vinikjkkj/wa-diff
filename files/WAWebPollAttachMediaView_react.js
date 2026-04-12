__d(
  "WAWebPollAttachMediaView.react",
  [
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsCreatePollModal",
    "WAWebPollsGatingUtils",
    "WAWebWamEnumThreadType",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.activeOptionIndex,
        a = e.allowMultipleMedia,
        i = e.chat,
        l = e.correctOptionKey,
        u = e.getComposeBoxEditorRef,
        c = e.mediaCollection,
        d = e.onCancel,
        m = e.onComplete,
        p = e.onSend,
        _ = e.options,
        f = e.pollType,
        g = e.question,
        h = function (t) {
          (t === void 0 && (t = !0),
            t && y(),
            m == null || m(!1),
            d == null || d(),
            c.mediaPickerStatsLogger.logCancel(),
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
                chat: i,
                getComposeBoxEditorRef: u,
                initialOptions: _,
                initialQuestion: g,
                initialCheckedKey: l,
                pollType: f,
              }),
            ),
            o("WAWebModalManager").ModalManager.closeMedia());
        },
        y = function () {
          i && i.setAttachMediaContents(null);
        },
        C = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
                chat: i,
                getComposeBoxEditorRef: u,
                initialOptions: o("WAWebPollOptionsRenderUtils").getNewOptions({
                  medias: e,
                  originalOptions: _,
                  activeOptionIndex: t,
                }),
                initialCheckedKey: l,
                initialQuestion: g,
                pollType: f,
                onSend: function () {
                  c.mediaPickerStatsLogger.logSend({ isViewOnce: !1 });
                },
              }),
            ),
              o("WAWebModalManager").ModalManager.closeMedia(),
              y(),
              p == null || p());
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        b = o("WAWebPollsGatingUtils").getMaxPollOptionCount();
      return s.jsx("div", {
        className:
          "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn x1y61xfy x78zum5",
        children: s.jsx(
          o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable,
          {
            theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL,
            chat: i,
            allowMultipleMedia: a,
            onClose: h,
            initCaption: null,
            onSendMedia: C,
            mediaCollection: c,
            sendAsSticker: !1,
            onDropText: r("WAWebNoop"),
            tsNavigationData: {
              surface: "channel-producer-media-editor",
              extras: {
                threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
                channelWid: i.id,
              },
            },
            maxNumberOfMedia: b,
            mimes: o("WAWebMimeTypes").IMAGE_MIMES,
            maxCaptionLength: o(
              "WAWebPollsGatingUtils",
            ).getMaxPollOptionLength(),
          },
        ),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.PollAttachMediaView = u));
  },
  98,
);
