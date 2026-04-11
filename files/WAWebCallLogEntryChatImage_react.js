__d(
  "WAWebCallLogEntryChatImage.react",
  [
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebGroupChatImage.react",
    "WAWebMsgGetters",
    "WAWebMultiParticipantCallImage.react",
    "WAWebStackedCirclesImage.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipUiContext",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      d = {
        sizeAuto: function (t) {
          return [
            c,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
            },
          ];
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.msg,
        a = e.size,
        i = a === void 0 ? "small" : a,
        l = u(r("WAWebVoipUiContext")),
        c = l.uiHeight,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebMsgGetters").getIsGroupMsg,
            o("WAWebMsgGetters").getCallParticipants,
            o("WAWebMsgGetters").getCallOutcome,
          ]),
          (t[0] = m))
        : (m = t[0]);
      var f = o("useWAWebMsgValues").useMsgValues(n.id, m),
        g = f[0],
        h = f[1],
        y = f[2],
        C,
        b,
        v;
      if (t[1] !== y || t[2] !== n || t[3] !== h || t[4] !== i) {
        v = Symbol.for("react.early_return_sentinel");
        e: {
          var S, R;
          C = o("WAWebFrontendMsgGetters").getChat(n);
          var L = (S = h == null ? void 0 : h.some(_)) != null ? S : !1,
            E = L
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            k;
          (t[8] !== i
            ? ((k =
                i === "small"
                  ? 49
                  : i === "large"
                    ? 100
                    : i === "auto"
                      ? null
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              i,
                          );
                        })()),
              (t[8] = i),
              (t[9] = k))
            : (k = t[9]),
            (b = k));
          var I =
            (R =
              h == null
                ? void 0
                : h.map(p).filter(function (e) {
                    return !e.equals(E);
                  })) != null
              ? R
              : [];
          if (
            I.length > 0 &&
            !C.id.isGroup() &&
            y !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
          ) {
            var T = o("WAWebCallLogUtils").sortCallParticipantWids(I, n),
              D;
            t[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = { className: "x47corl" }), (t[10] = D))
              : (D = t[10]);
            var x = b != null ? b : "auto",
              $;
            (t[11] !== T || t[12] !== x
              ? (($ = s.jsx(
                  "div",
                  babelHelpers.extends({}, D, {
                    children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
                      participantWids: T,
                      size: x,
                    }),
                  }),
                )),
                (t[11] = T),
                (t[12] = x),
                (t[13] = $))
              : ($ = t[13]),
              (v = $));
            break e;
          }
        }
        ((t[1] = y),
          (t[2] = n),
          (t[3] = h),
          (t[4] = i),
          (t[5] = C),
          (t[6] = b),
          (t[7] = v));
      } else ((C = t[5]), (b = t[6]), (v = t[7]));
      if (v !== Symbol.for("react.early_return_sentinel")) return v;
      var P;
      t[14] !== i
        ? ((P =
            i === "small"
              ? o("WAWebDetailImage.react").DetailImageQuality.Low
              : i === "large" || i === "auto"
                ? o("WAWebDetailImage.react").DetailImageQuality.High
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        i,
                    );
                  })()),
          (t[14] = i),
          (t[15] = P))
        : (P = t[15]);
      var N = P,
        M = i === "auto",
        w;
      t[16] !== i || t[17] !== c
        ? ((w = i === "auto" && d.sizeAuto(c)),
          (t[16] = i),
          (t[17] = c),
          (t[18] = w))
        : (w = t[18]);
      var A;
      t[19] !== C.id || t[20] !== N || t[21] !== b || t[22] !== M || t[23] !== w
        ? ((A = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: C.id,
            size: b,
            quality: N,
            customDimensionsStyle: M,
            waitIdle: !0,
            xstyle: w,
          })),
          (t[19] = C.id),
          (t[20] = N),
          (t[21] = b),
          (t[22] = M),
          (t[23] = w),
          (t[24] = A))
        : (A = t[24]);
      var F = A;
      if (g) {
        var O;
        t[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = { className: "x47corl" }), (t[25] = O))
          : (O = t[25]);
        var B = b != null ? b : 49,
          W;
        return (
          t[26] !== C || t[27] !== F || t[28] !== B
            ? ((W = s.jsx(
                "div",
                babelHelpers.extends({}, O, {
                  children: s.jsx(r("WAWebGroupChatImage.react"), {
                    chat: C,
                    regularChatImage: F,
                    selection: null,
                    showCommunityInfo: !1,
                    size: B,
                    theme: o("WAWebStackedCirclesImage.react")
                      .SubgroupImageTheme.CHAT_LIST,
                  }),
                }),
              )),
              (t[26] = C),
              (t[27] = F),
              (t[28] = B),
              (t[29] = W))
            : (W = t[29]),
          W
        );
      }
      var q;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = { className: "x47corl" }), (t[30] = q))
        : (q = t[30]);
      var U;
      return (
        t[31] !== F
          ? ((U = s.jsx("div", babelHelpers.extends({}, q, { children: F }))),
            (t[31] = F),
            (t[32] = U))
          : (U = t[32]),
        U
      );
    }
    function p(e) {
      return e.participant;
    }
    function _(e) {
      return e.participant.isLid();
    }
    l.default = m;
  },
  98,
);
