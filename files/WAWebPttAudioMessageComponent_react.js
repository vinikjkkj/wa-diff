__d(
  "WAWebPttAudioMessageComponent.react",
  [
    "WAWebAudioFileIcon.react",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMsgGetters",
    "WAWebPttAudioBubble.react",
    "WAWebPttAudioMediaState.react",
    "WAWebPttAudioPlayedStatus",
    "WAWebPttFileIcon.react",
    "WAWebPttMessageComponent.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["enableKbSeekSpeedChange"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef;
    function _(t) {
      var n = o("react-compiler-runtime").c(32),
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
        u = l.msg,
        d;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            o("WAWebMsgGetters").getIsForwarded,
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
          ]),
          (n[3] = d))
        : (d = n[3]);
      var _ = o("useWAWebMsgValues").useMsgValues(a.msg.id, d),
        g = _[0],
        h = _[1],
        y = _[2],
        C = _[3],
        b = p(null);
      o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(u);
      var v;
      if (
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = function () {
              return {
                handleKeyActivation: function (t) {
                  var e;
                  (e = b.current) == null || e.handleKeyActivation(t);
                },
              };
            }),
            (n[4] = v))
          : (v = n[4]),
        m(i, v),
        y != null && !g)
      ) {
        var S;
        if (n[5] !== a) {
          var R = a,
            L = R.enableKbSeekSpeedChange,
            E = babelHelpers.objectWithoutPropertiesLoose(R, s);
          ((S = E), (n[5] = a), (n[6] = S));
        } else S = n[6];
        var k;
        return (
          n[7] !== S
            ? ((k = c.jsx(
                o("WAWebPttMessageComponent.react").Ptt,
                babelHelpers.extends({}, S),
              )),
              (n[7] = S),
              (n[8] = k))
            : (k = n[8]),
          k
        );
      }
      var I;
      n[9] !== u ||
      n[10] !== a.displayAuthor ||
      n[11] !== a.displayType ||
      n[12] !== h
        ? ((I =
            a.displayAuthor && h
              ? c.jsx(r("WAWebMessageAuthor.react"), {
                  msg: u,
                  contact: h,
                  displayType: a.displayType,
                })
              : null),
          (n[9] = u),
          (n[10] = a.displayAuthor),
          (n[11] = a.displayType),
          (n[12] = h),
          (n[13] = I))
        : (I = n[13]);
      var T = I,
        D;
      n[14] !== C || n[15] !== u
        ? ((D = C ? c.jsx(r("WAWebPttAudioPlayedStatus"), { msg: u }) : null),
          (n[14] = C),
          (n[15] = u),
          (n[16] = D))
        : (D = n[16]);
      var x;
      n[17] !== a.displayType ||
      n[18] !== a.enableKbSeekSpeedChange ||
      n[19] !== a.mediaData ||
      n[20] !== a.msg
        ? ((x = c.jsx(r("WAWebPttAudioMediaState.react"), {
            ref: b,
            msg: a.msg,
            mediaData: a.mediaData,
            displayType: a.displayType,
            enableKbSeekSpeedChange: a.enableKbSeekSpeedChange,
          })),
          (n[17] = a.displayType),
          (n[18] = a.enableKbSeekSpeedChange),
          (n[19] = a.mediaData),
          (n[20] = a.msg),
          (n[21] = x))
        : (x = n[21]);
      var $;
      n[22] !== u
        ? (($ = c.jsx(f, { msg: u })), (n[22] = u), (n[23] = $))
        : ($ = n[23]);
      var P;
      return (
        n[24] !== T ||
        n[25] !== u ||
        n[26] !== a.displayType ||
        n[27] !== a.quotedMsg ||
        n[28] !== D ||
        n[29] !== x ||
        n[30] !== $
          ? ((P = c.jsx(r("WAWebPttAudioBubble.react"), {
              msg: u,
              quotedMsg: a.quotedMsg,
              author: T,
              status: D,
              player: x,
              avatar: $,
              displayType: a.displayType,
            })),
            (n[24] = T),
            (n[25] = u),
            (n[26] = a.displayType),
            (n[27] = a.quotedMsg),
            (n[28] = D),
            (n[29] = x),
            (n[30] = $),
            (n[31] = P))
          : (P = n[31]),
        P
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getIsForwarded,
            o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
            o("WAWebFrontendMsgGetters").getMsgSenderId,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3],
        d;
      t[1] !== u
        ? ((d = c.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: u,
            size: 55,
          })),
          (t[1] = u),
          (t[2] = d))
        : (d = t[2]);
      var m = d;
      if (s) return m;
      if (i == null) {
        var p;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = c.jsx("div", {
                className:
                  "xnfjc3l x14h49td x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                children: c.jsx(
                  o("WAWebAudioFileIcon.react").AudioFileIcon,
                  {},
                ),
              })),
              (t[3] = p))
            : (p = t[3]),
          p
        );
      }
      if (l) {
        var _;
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = c.jsx("div", {
                className:
                  "xnfjc3l x14h49td x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                children: c.jsx(o("WAWebPttFileIcon.react").PttFileIcon, {}),
              })),
              (t[4] = _))
            : (_ = t[4]),
          _
        );
      }
      return m;
    }
    var g = _;
    l.Audio = g;
  },
  98,
);
