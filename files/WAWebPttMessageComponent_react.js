__d(
  "WAWebPttMessageComponent.react",
  [
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebPttAudioBubble.react",
    "WAWebPttAudioMediaState.react",
    "WAWebPttAudioPlayedStatus",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(t) {
      var n = o("react-compiler-runtime").c(28),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.enableKbSeekSpeedChange,
        c = l.msg,
        p = s === void 0 ? !1 : s,
        _;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebMsgGetters").getId,
            o("WAWebFrontendMsgGetters").getMsgSenderId,
          ]),
          (n[3] = _))
        : (_ = n[3]);
      var f = o("useWAWebMsgValues").useMsgValues(a.msg.id, _),
        g = f[0],
        h = f[2],
        y = m(null);
      o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(c);
      var C;
      (n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            return {
              handleKeyActivation: function (t) {
                if (
                  !o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
                ) {
                  var e;
                  (e = y.current) == null || e.handleKeyActivation(t);
                }
              },
            };
          }),
          (n[4] = C))
        : (C = n[4]),
        d(i, C));
      var b;
      n[5] !== c ||
      n[6] !== a.displayAuthor ||
      n[7] !== a.displayType ||
      n[8] !== g
        ? ((b = a.displayAuthor
            ? u.jsx(r("WAWebMessageAuthor.react"), {
                msg: c,
                contact: g,
                displayType: a.displayType,
              })
            : null),
          (n[5] = c),
          (n[6] = a.displayAuthor),
          (n[7] = a.displayType),
          (n[8] = g),
          (n[9] = b))
        : (b = n[9]);
      var v = b,
        S;
      n[10] !== c
        ? ((S = u.jsx(r("WAWebPttAudioPlayedStatus"), { msg: c })),
          (n[10] = c),
          (n[11] = S))
        : (S = n[11]);
      var R;
      n[12] !== p ||
      n[13] !== a.displayType ||
      n[14] !== a.getSequentialMsg ||
      n[15] !== a.mediaData ||
      n[16] !== a.msg
        ? ((R = u.jsx(r("WAWebPttAudioMediaState.react"), {
            ref: y,
            msg: a.msg,
            mediaData: a.mediaData,
            displayType: a.displayType,
            getSequentialMsg: a.getSequentialMsg,
            enableKbSeekSpeedChange: p,
          })),
          (n[12] = p),
          (n[13] = a.displayType),
          (n[14] = a.getSequentialMsg),
          (n[15] = a.mediaData),
          (n[16] = a.msg),
          (n[17] = R))
        : (R = n[17]);
      var L;
      n[18] !== h
        ? ((L = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: h,
            size: 55,
          })),
          (n[18] = h),
          (n[19] = L))
        : (L = n[19]);
      var E;
      return (
        n[20] !== v ||
        n[21] !== c ||
        n[22] !== a.displayType ||
        n[23] !== a.quotedMsg ||
        n[24] !== S ||
        n[25] !== R ||
        n[26] !== L
          ? ((E = u.jsx(r("WAWebPttAudioBubble.react"), {
              msg: c,
              quotedMsg: a.quotedMsg,
              author: v,
              status: S,
              player: R,
              avatar: L,
              displayType: a.displayType,
            })),
            (n[20] = v),
            (n[21] = c),
            (n[22] = a.displayType),
            (n[23] = a.quotedMsg),
            (n[24] = S),
            (n[25] = R),
            (n[26] = L),
            (n[27] = E))
          : (E = n[27]),
        E
      );
    }
    var _ = p;
    l.Ptt = _;
  },
  98,
);
