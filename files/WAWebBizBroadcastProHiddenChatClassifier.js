__d(
  "WAWebBizBroadcastProHiddenChatClassifier",
  [
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = !1,
        a = !1,
        i,
        l;
      return (
        e.forEach(function (e) {
          if (
            !(
              o("WAWebMsgGetters").getType(e) ===
                o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
              (e.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                  .BizMeAccountTypeIsHostedSystemMsg ||
                e.subtype ===
                  o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                    .BizMeAccountTypeIsHostedSystemMsgTransition)
            )
          ) {
            if (c(e, t)) {
              ((r = !0), (i = u(i, e.t)));
              return;
            }
            ((a = !0),
              (n == null || n.has(e.id.toString())) && (l = u(l, e.t)));
          }
        }),
        {
          hasMarketingPeerCopy: r,
          hasNonMarketingMessage: a,
          latestMarketingPeerCopyTimestamp: i,
          latestNonMarketingTimestamp: l,
        }
      );
    }
    function s(t, n) {
      var r = e(t, n),
        o = r.hasMarketingPeerCopy,
        a = r.hasNonMarketingMessage;
      return o && !a;
    }
    function u(e, t) {
      return e == null ? t : t == null ? e : Math.max(e, t);
    }
    function c(e, t) {
      var n = o("WAWebMsgGetters").getSenderWithDevice(e);
      return (
        e.id.fromMe &&
        o("WAWebMsgGetters").getIsMarketingTemplateTag(e) &&
        e.deliveryContextSourceType === "ads_manager" &&
        (t == null ? void 0 : t.isRegularUser()) === !0 &&
        (n == null ? void 0 : n.isHosted()) === !0 &&
        o("WAWebUserPrefsMeUser").isMeAccount(n) &&
        d()
      );
    }
    function d() {
      return (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
        !r("justknobx")._("6472")
      );
    }
    ((l.classifyBizBroadcastProMessageBatch = e),
      (l.isBizBroadcastProMarketingOnlyBatch = s),
      (l.isBizBroadcastProMarketingPeerCopy = c),
      (l.isBizBroadcastProHiddenChatsEnabled = d));
  },
  98,
);
