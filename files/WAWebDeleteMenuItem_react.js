__d(
  "WAWebDeleteMenuItem.react",
  [
    "fbt",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFrontendChatGetters",
    "WAWebGroupIntegrityUtils",
    "WAWebMiscGatingUtils",
    "WAWebSuspendedGroupUtils",
    "WDSIconIcDelete.react",
    "WDSIconIcLogout.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.memo;
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.chat,
        a = e.disabled,
        i = e.onDeleteOrExit,
        l;
      t[0] !== n
        ? ((l = function () {
            o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(n);
          }),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            o("WAWebChatGetters").getIsReadOnly,
            o("WAWebFrontendChatGetters").getKind,
          ]),
          (t[2] = d))
        : (d = t[2]);
      var m = o("useWAWebChatValues").useChatValues(n.id, d),
        p = m[0],
        _ = m[1],
        f,
        g = i,
        h = r("WDSIconIcDelete.react");
      if (_ != null)
        e: switch (_) {
          case o("WAWebChatFlowTypes").ChatKindType.Group: {
            if (p) {
              var y;
              (t[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((y = s._(/*BTDS*/ "Delete group")), (t[3] = y))
                : (y = t[3]),
                (f = y));
            } else if (
              !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) &&
              o("WAWebChatGroupUtils").isSuspendedGroup(n) &&
              o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
            ) {
              var C;
              (t[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((C = s._(/*BTDS*/ "Exit group and delete")), (t[4] = C))
                : (C = t[4]),
                (f = C),
                (g = c));
            } else {
              var b;
              (t[5] !== n
                ? ((b = o("WAWebGroupIntegrityUtils").getLeaveGroupString(n)),
                  (t[5] = n),
                  (t[6] = b))
                : (b = t[6]),
                (f = b),
                (h = r("WDSIconIcLogout.react")));
            }
            break e;
          }
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast: {
            var v;
            (t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getDeleteBroadcastAudienceLabel()),
                (t[7] = v))
              : (v = t[7]),
              (f = v));
            break e;
          }
          case o("WAWebChatFlowTypes").ChatKindType.Chat: {
            var S;
            (t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = s._(/*BTDS*/ "Delete chat")), (t[8] = S))
              : (S = t[8]),
              (f = S));
            break e;
          }
          default:
        }
      var R;
      return (
        t[9] !== h || t[10] !== a || t[11] !== g || t[12] !== f
          ? ((R = u.jsx(r("WDSMenuItem.react"), {
              Icon: h,
              title: f,
              onPress: g,
              testid: void 0,
              disabled: a,
              destructive: !0,
            })),
            (t[9] = h),
            (t[10] = a),
            (t[11] = g),
            (t[12] = f),
            (t[13] = R))
          : (R = t[13]),
        R
      );
    }
    var m = c(d);
    l.default = m;
  },
  226,
);
