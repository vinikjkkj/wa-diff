__d(
  "WAWebCallLogTitle.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebParticipantListUtils",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        headerTitle: {
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          minWidth: "xeuugli",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(11),
        r = e.callLogMsg,
        a = e.filterPreset,
        i = e.isCallInfoHeader,
        l = i === void 0 ? !1 : i,
        d = r.displayName(),
        _;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var f;
        ((_ = [
          (f = o("WAWebMsgGetters")).getLabels,
          f.getCallParticipants,
          f.getIsCallLink,
          f.getCallOutcome,
          f.getIsSentByMe,
        ]),
          (n[0] = _));
      } else _ = n[0];
      var g = o("useWAWebMsgValues").useMsgValues(r.id, _),
        h = g[0],
        y = g[1],
        C = g[2],
        b = g[3],
        v = g[4],
        S = (t = y == null ? void 0 : y.some(p)) != null ? t : !1,
        R = S
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        L =
          y == null
            ? void 0
            : y.filter(function (e) {
                return !e.participant.equals(R);
              }),
        E = o("WAWebFrontendMsgGetters").getChat(r);
      if (L != null && !E.id.isGroup()) {
        var k = o("WAWebCallLogUtils").sortCallParticipantWids(L.map(m), r),
          I = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
            k,
            !0,
          ),
          T;
        if (b !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing) T = I;
        else if (C != null && C)
          if (L.length === 0) {
            var D;
            (n[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = s._(/*BTDS*/ "Waiting for others...")), (n[1] = D))
              : (D = n[1]),
              (T = D));
          } else
            T = v
              ? s._(/*BTDS*/ "Your call")
              : s
                  ._(/*BTDS*/ "{call-link-creator-name}'s call", [
                    s._param("call-link-creator-name", d),
                  ])
                  .toString();
        else
          L.length > 1
            ? (T = v
                ? s._(/*BTDS*/ "Your group call")
                : s
                    ._(/*BTDS*/ "{call-creator-name}'s group call", [
                      s._param("call-creator-name", d),
                    ])
                    .toString())
            : (T = I);
        var x = l ? c.headerTitle : void 0,
          $;
        return (
          n[2] !== T || n[3] !== x
            ? (($ = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: T,
                titlify: !0,
                ellipsify: !0,
                direction: "auto",
                inlineblock: !0,
                xstyle: x,
              })),
              (n[2] = T),
              (n[3] = x),
              (n[4] = $))
            : ($ = n[4]),
          $
        );
      }
      var P = a == null ? void 0 : a.label,
        N;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = o("WAWebBizGatingUtils").canDisplayLabel()), (n[5] = N))
        : (N = n[5]);
      var M = l ? c.headerTitle : void 0,
        w;
      return (
        n[6] !== E || n[7] !== h || n[8] !== P || n[9] !== M
          ? ((w = u.jsx(o("WAWebName.react").Name, {
              chat: E,
              labels: h,
              firstLabel: P,
              showLabelIcon: N,
              titlify: !0,
              ellipsify: !0,
              xstyle: M,
            })),
            (n[6] = E),
            (n[7] = h),
            (n[8] = P),
            (n[9] = M),
            (n[10] = w))
          : (w = n[10]),
        w
      );
    }
    function m(e) {
      return e.participant;
    }
    function p(e) {
      return e.participant.isLid();
    }
    l.default = d;
  },
  226,
);
