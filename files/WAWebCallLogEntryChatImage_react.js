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
      var t,
        n,
        a = e.msg,
        i = e.size,
        l = i === void 0 ? "small" : i,
        c = u(r("WAWebVoipUiContext")),
        m = c.uiHeight,
        p = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getCallParticipants,
          o("WAWebMsgGetters").getCallOutcome,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = o("WAWebFrontendMsgGetters").getChat(a),
        y =
          (t =
            f == null
              ? void 0
              : f.some(function (e) {
                  return e.participant.isLid();
                })) != null
            ? t
            : !1,
        C = y
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        b =
          l === "small"
            ? 49
            : l === "large"
              ? 100
              : l === "auto"
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        l,
                    );
                  })(),
        v =
          (n =
            f == null
              ? void 0
              : f
                  .map(function (e) {
                    return e.participant;
                  })
                  .filter(function (e) {
                    return !e.equals(C);
                  })) != null
            ? n
            : [];
      if (
        v.length > 0 &&
        !h.id.isGroup() &&
        g !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
      ) {
        var S = o("WAWebCallLogUtils").sortCallParticipantWids(v, a);
        return s.jsx("div", {
          className: "x47corl",
          children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
            participantWids: S,
            size: b != null ? b : "auto",
          }),
        });
      }
      var R =
          l === "small"
            ? o("WAWebDetailImage.react").DetailImageQuality.Low
            : l === "large" || l === "auto"
              ? o("WAWebDetailImage.react").DetailImageQuality.High
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      l,
                  );
                })(),
        L = s.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: h.id,
          size: b,
          quality: R,
          customDimensionsStyle: l === "auto",
          waitIdle: !0,
          xstyle: l === "auto" && d.sizeAuto(m),
        });
      return _
        ? s.jsx("div", {
            className: "x47corl",
            children: s.jsx(r("WAWebGroupChatImage.react"), {
              chat: h,
              regularChatImage: L,
              selection: null,
              showCommunityInfo: !1,
              size: b != null ? b : 49,
              theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                .CHAT_LIST,
            }),
          })
        : s.jsx("div", { className: "x47corl", children: L });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
