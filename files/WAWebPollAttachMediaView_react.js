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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(34),
        a = e.activeOptionIndex,
        i = e.allowMultipleMedia,
        l = e.chat,
        u = e.correctOptionKey,
        c = e.getComposeBoxEditorRef,
        d = e.mediaCollection,
        m = e.onCancel,
        p = e.onComplete,
        _ = e.onSend,
        f = e.options,
        g = e.pollType,
        h = e.question,
        y,
        C;
      t[0] !== l ||
      t[1] !== u ||
      t[2] !== c ||
      t[3] !== d.mediaPickerStatsLogger ||
      t[4] !== m ||
      t[5] !== p ||
      t[6] !== f ||
      t[7] !== g ||
      t[8] !== h
        ? ((C = function (t) {
            var e = t === void 0 ? !0 : t;
            (e && y(),
              p == null || p(!1),
              m == null || m(),
              d.mediaPickerStatsLogger.logCancel(),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
                  chat: l,
                  getComposeBoxEditorRef: c,
                  initialOptions: f,
                  initialQuestion: h,
                  initialCheckedKey: u,
                  pollType: g,
                }),
              ),
              o("WAWebModalManager").ModalManager.closeMedia());
          }),
          (y = function () {
            l && l.setAttachMediaContents(null);
          }),
          (t[0] = l),
          (t[1] = u),
          (t[2] = c),
          (t[3] = d.mediaPickerStatsLogger),
          (t[4] = m),
          (t[5] = p),
          (t[6] = f),
          (t[7] = g),
          (t[8] = h),
          (t[9] = y),
          (t[10] = C))
        : ((y = t[9]), (C = t[10]));
      var b;
      t[11] !== a ||
      t[12] !== l ||
      t[13] !== y ||
      t[14] !== u ||
      t[15] !== c ||
      t[16] !== d.mediaPickerStatsLogger ||
      t[17] !== _ ||
      t[18] !== f ||
      t[19] !== g ||
      t[20] !== h
        ? ((b = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (o("WAWebModalManager").ModalManager.open(
                  s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
                    chat: l,
                    getComposeBoxEditorRef: c,
                    initialOptions: o(
                      "WAWebPollOptionsRenderUtils",
                    ).getNewOptions({
                      medias: e,
                      originalOptions: f,
                      activeOptionIndex: a,
                    }),
                    initialCheckedKey: u,
                    initialQuestion: h,
                    pollType: g,
                    onSend: function () {
                      d.mediaPickerStatsLogger.logSend({ isViewOnce: !1 });
                    },
                  }),
                ),
                  o("WAWebModalManager").ModalManager.closeMedia(),
                  y(),
                  _ == null || _());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[11] = a),
          (t[12] = l),
          (t[13] = y),
          (t[14] = u),
          (t[15] = c),
          (t[16] = d.mediaPickerStatsLogger),
          (t[17] = _),
          (t[18] = f),
          (t[19] = g),
          (t[20] = h),
          (t[21] = b))
        : (b = t[21]);
      var v = b,
        S;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o("WAWebPollsGatingUtils").getMaxPollOptionCount()),
          (t[22] = S))
        : (S = t[22]);
      var R = S,
        L;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className:
              "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn x1y61xfy x78zum5",
          }),
          (t[23] = L))
        : (L = t[23]);
      var E;
      t[24] !== l.id
        ? ((E = {
            surface: "channel-producer-media-editor",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
              channelWid: l.id,
            },
          }),
          (t[24] = l.id),
          (t[25] = E))
        : (E = t[25]);
      var k;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o("WAWebPollsGatingUtils").getMaxPollOptionLength()),
          (t[26] = k))
        : (k = t[26]);
      var I;
      return (
        t[27] !== i ||
        t[28] !== l ||
        t[29] !== C ||
        t[30] !== d ||
        t[31] !== v ||
        t[32] !== E
          ? ((I = s.jsx(
              "div",
              babelHelpers.extends({}, L, {
                children: s.jsx(
                  o("WAWebMediaEditorForChatLoadable.react")
                    .MediaEditorForChatLoadable,
                  {
                    theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL,
                    chat: l,
                    allowMultipleMedia: i,
                    onClose: C,
                    initCaption: null,
                    onSendMedia: v,
                    mediaCollection: d,
                    sendAsSticker: !1,
                    onDropText: r("WAWebNoop"),
                    tsNavigationData: E,
                    maxNumberOfMedia: R,
                    mimes: o("WAWebMimeTypes").IMAGE_MIMES,
                    maxCaptionLength: k,
                  },
                ),
              }),
            )),
            (t[27] = i),
            (t[28] = l),
            (t[29] = C),
            (t[30] = d),
            (t[31] = v),
            (t[32] = E),
            (t[33] = I))
          : (I = t[33]),
        I
      );
    }
    l.PollAttachMediaView = u;
  },
  98,
);
