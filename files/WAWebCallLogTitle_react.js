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
        n = e.callLogMsg,
        r = e.filterPreset,
        a = e.isCallInfoHeader,
        i = a === void 0 ? !1 : a,
        l = n.displayName(),
        d = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getLabels,
          o("WAWebMsgGetters").getCallParticipants,
          o("WAWebMsgGetters").getIsCallLink,
          o("WAWebMsgGetters").getCallOutcome,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4],
        h =
          (t =
            p == null
              ? void 0
              : p.some(function (e) {
                  return e.participant.isLid();
                })) != null
            ? t
            : !1,
        y = h
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        C =
          p == null
            ? void 0
            : p.filter(function (e) {
                return !e.participant.equals(y);
              }),
        b = o("WAWebFrontendMsgGetters").getChat(n);
      if (C != null && !b.id.isGroup()) {
        var v = o("WAWebCallLogUtils").sortCallParticipantWids(
            C.map(function (e) {
              return e.participant;
            }),
            n,
          ),
          S = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
            v,
            !0,
          ),
          R;
        return (
          f !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
            ? (R = S)
            : _ != null && _
              ? C.length === 0
                ? (R = s._(/*BTDS*/ "Waiting for others..."))
                : (R = g
                    ? s._(/*BTDS*/ "Your call")
                    : s
                        ._(/*BTDS*/ "{call-link-creator-name}'s call", [
                          s._param("call-link-creator-name", l),
                        ])
                        .toString())
              : C.length > 1
                ? (R = g
                    ? s._(/*BTDS*/ "Your group call")
                    : s
                        ._(/*BTDS*/ "{call-creator-name}'s group call", [
                          s._param("call-creator-name", l),
                        ])
                        .toString())
                : (R = S),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: R,
            titlify: !0,
            ellipsify: !0,
            direction: "auto",
            inlineblock: !0,
            xstyle: i ? c.headerTitle : void 0,
          })
        );
      }
      return u.jsx(o("WAWebName.react").Name, {
        chat: b,
        labels: m,
        firstLabel: r == null ? void 0 : r.label,
        showLabelIcon: o("WAWebBizGatingUtils").canDisplayLabel(),
        titlify: !0,
        ellipsify: !0,
        xstyle: i ? c.headerTitle : void 0,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
