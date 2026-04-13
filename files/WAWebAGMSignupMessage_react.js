__d(
  "WAWebAGMSignupMessage.react",
  [
    "fbt",
    "WAWebBizAGMSignupHeader.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSendSignupResponseAction",
    "WAWebSignupCTAExperiment",
    "WAWebStateUtils",
    "WDSIconIcReply.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(44),
        n = e.chat,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.msg,
        c = e.privacyPolicyUrl,
        d,
        m;
      t[0] !== l
        ? ((d = o("WAWebStateUtils").unproxy(l)),
          (m = o("WAWebMsgModelPropUtils").isTrusted(d.unsafe())),
          (t[0] = l),
          (t[1] = d),
          (t[2] = m))
        : ((d = t[1]), (m = t[2]));
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [o("WAWebMsgGetters").getSignupCtaTapped]), (t[3] = _))
        : (_ = t[3]);
      var f = o("useWAWebMsgValues").useMsgValues(l.id, _),
        g = f[0],
        h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebSignupCTAExperiment").getSignupCTAExperiment()),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C;
      t[5] !== d || t[6] !== i || t[7] !== p
        ? ((C = u.jsx(r("WAWebMessageTextBody.react"), {
            msg: d,
            displayType: i,
            handleLinkClick: null,
            trusted: p,
          })),
          (t[5] = d),
          (t[6] = i),
          (t[7] = p),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x78zum5 x13a6bvl" }), (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o("WAWebMessageMeta.react").getAGMTag()), (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== d
        ? ((R = u.jsx(
            "div",
            babelHelpers.extends({}, v, {
              "data-testid": void 0,
              children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: d,
                agmTag: S,
              }),
            }),
          )),
          (t[11] = d),
          (t[12] = R))
        : (R = t[12]);
      var L = R,
        E;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E =
            y === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
              ? s._(/*BTDS*/ "Get offers")
              : s._(/*BTDS*/ "Sign up")),
          (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] !== n || t[15] !== l
        ? ((k = function () {
            return void o("WAWebSendSignupResponseAction").sendSignupResponse(
              n,
              l,
            );
          }),
          (t[14] = n),
          (t[15] = l),
          (t[16] = k))
        : (k = t[16]);
      var I = g === !0,
        T;
      t[17] !== I || t[18] !== k
        ? ((T = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
              {
                label: E,
                onClick: k,
                Icon: r("WDSIconIcReply.react"),
                disabled: I,
              },
            ],
          })),
          (t[17] = I),
          (t[18] = k),
          (t[19] = T))
        : (T = t[19]);
      var D = T,
        x = d.isDynamicReplyButtonsMsg,
        $;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = "x1gxa6cn"), (t[20] = $))
        : ($ = t[20]);
      var P = d.senderObj,
        N;
      t[21] !== d ? ((N = d.unsafe()), (t[21] = d), (t[22] = N)) : (N = t[22]);
      var M;
      t[23] !== n.contact || t[24] !== c
        ? ((M = u.jsx(r("WAWebBizAGMSignupHeader.react"), {
            contact: n.contact,
            experiment: y,
            privacyPolicyUrl: c,
          })),
          (t[23] = n.contact),
          (t[24] = c),
          (t[25] = M))
        : (M = t[25]);
      var w;
      t[26] !== d ? ((w = d.unsafe()), (t[26] = d), (t[27] = w)) : (w = t[27]);
      var A;
      t[28] !== d.id || t[29] !== L || t[30] !== w || t[31] !== b
        ? ((A = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msg: w,
            spacer: !1,
            "data-id": d.id,
            children: [b, L],
          })),
          (t[28] = d.id),
          (t[29] = L),
          (t[30] = w),
          (t[31] = b),
          (t[32] = A))
        : (A = t[32]);
      var F;
      t[33] !== d.senderObj ||
      t[34] !== D ||
      t[35] !== N ||
      t[36] !== M ||
      t[37] !== A
        ? ((F = u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            className: $,
            contact: P,
            msg: N,
            children: [M, A, D],
          })),
          (t[33] = d.senderObj),
          (t[34] = D),
          (t[35] = N),
          (t[36] = M),
          (t[37] = A),
          (t[38] = F))
        : (F = t[38]);
      var O;
      return (
        t[39] !== d || t[40] !== a || t[41] !== i || t[42] !== F
          ? ((O = u.jsx(r("WAWebMessageTextBubble.react"), {
              msg: d,
              displayType: i,
              displayAuthor: a,
              hideMeta: !0,
              useFixedWidth: x,
              children: F,
            })),
            (t[39] = d),
            (t[40] = a),
            (t[41] = i),
            (t[42] = F),
            (t[43] = O))
          : (O = t[43]),
        O
      );
    }
    l.default = c;
  },
  226,
);
