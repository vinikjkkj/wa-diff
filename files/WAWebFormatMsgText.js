__d(
  "WAWebFormatMsgText",
  [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizFormatInteractiveMsg",
    "WAWebFormatBroadcastNotification",
    "WAWebFormatE2ENotification",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatGroupNotification",
    "WAWebFormatMessageHistoryBundleBody",
    "WAWebFormatMessageHistoryNoticeBody",
    "WAWebFormatMsgTextUtils",
    "WAWebFormatNotificationTemplateText",
    "WAWebFormatOversizedMsg",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowResponseUtils",
    "WAWebMessagePluginFormatMsgText",
    "WAWebMessagePluginFutureproofMsgText",
    "WAWebMiscGatingUtils",
    "WAWebMsgType",
    "WAWebSystemMessagePluginFormatMsgText",
    "WAWebUnformatMsg",
    "WAWebViewOnceState",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        a,
        i,
        l = e.msg,
        u = e.associatedMessages,
        c = e.options,
        d = c === void 0 ? {} : c,
        m = d.unformat,
        p = m === void 0 ? !0 : m,
        _ = d.formatAsLastMsg,
        f = _ === void 0 ? !1 : _,
        g = d.formatAsSearchResult,
        h = g === void 0 ? !1 : g,
        y = d.searchQuery,
        C = y === void 0 ? [] : y,
        b = l.safe();
      if (
        o("WAWebMiscGatingUtils").messagePluginFrontendRegistrationEnabled()
      ) {
        var v;
        if (b.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && b.futureproofType)
          v = o("WAWebMessagePluginFutureproofMsgText").futureproofMsgText({
            msg: l,
          });
        else {
          var S;
          v =
            (S = o("WAWebMessagePluginFormatMsgText").formatMsgText({
              msg: l,
              associatedMessages: u,
              options: {
                unformat: p,
                formatAsLastMsg: f,
                formatAsSearchResult: h,
                searchQuery: C,
              },
            })) != null
              ? S
              : o("WAWebSystemMessagePluginFormatMsgText").formatMsgText({
                  msg: l,
                  options: {
                    unformat: p,
                    formatAsLastMsg: f,
                    formatAsSearchResult: h,
                    searchQuery: C,
                  },
                });
        }
        if (v != null) return v;
      }
      switch (b.type) {
        case o("WAWebMsgType").MSG_TYPE.HSM:
          return p
            ? r("WAWebUnformatMsg")(l, l.body)
            : (t = l.body) != null
              ? t
              : "";
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          if (l.isFromTemplate) {
            var R,
              L = (R = l.body) != null ? R : "";
            return l.title
              ? p
                ? r("WAWebUnformatMsg")(l, l.title + " " + L)
                : "*" + l.title + "* " + L
              : p
                ? r("WAWebUnformatMsg")(l, L)
                : L;
          }
          if (l.isDynamicReplyButtonsMsg && l.title) {
            var E = o("WAWebFormatMsgTextUtils").maybeAddFooter(l.body, l);
            if (E != null)
              return p
                ? r("WAWebUnformatMsg")(l, l.title + "\n" + E)
                : "*" + l.title + "*\n" + E;
          }
          return p
            ? r("WAWebUnformatMsg")(l, l.body)
            : (n = l.body) != null
              ? n
              : "";
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return o("WAWebBizCtwaAGMUtils").isAGMSupported(l)
            ? p
              ? r("WAWebUnformatMsg")(l, l.body)
              : (a = l.body) != null
                ? a
                : ""
            : o("WAWebFormatUnknownMsg").formatUnknownMsgText(l);
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
          return o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(
            l,
          )
            ? s._(/*BTDS*/ "Response sent")
            : l.body || "";
        case o("WAWebMsgType").MSG_TYPE.PTV: {
          if (b.isViewOnce)
            return o("WAWebViewOnceState").isViewed(b)
              ? s._(/*BTDS*/ "Opened")
              : s._(/*BTDS*/ "Video note");
          var k = o("WAWebFormatMsgTextUtils").maybeAddFooter(l.caption, l);
          return k != null && k !== ""
            ? p
              ? r("WAWebUnformatMsg")(l, k)
              : k
            : s._(/*BTDS*/ "Video note");
        }
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return r("WAWebFormatGroupNotification")(l, f);
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
          return o(
            "WAWebFormatBroadcastNotification",
          ).formatBroadcastNotification(l);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
          return (i = l.body) != null ? i : "";
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return o("WAWebFormatE2ENotification").formatE2ENotification(b);
        case o("WAWebMsgType").MSG_TYPE.PRODUCT: {
          var I = [o("WAWebFrontendMsgGetters").getText(l), l.caption, l.footer]
            .filter(Boolean)
            .join(" ");
          return I.length
            ? p
              ? r("WAWebUnformatMsg")(l, I)
              : I
            : s._(/*BTDS*/ "Product");
        }
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
          return o("WAWebFormatOversizedMsg").formatOversizedMsgText(l);
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE: {
          var T = l;
          return o("WAWebBizFormatInteractiveMsg").formatInteractive(T, {
            formatAsSearchResult: h,
          });
        }
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(l);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
          return r("WAWebFormatNotificationTemplateText")(l, f).text.toString();
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
          return l.subtype === "ephemeral_setting"
            ? o("WAWebFormatEphemeralSetting").formatEphemeralSetting(l)
            : l.subtype === "share_phone_number"
              ? s._(/*BTDS*/ "Share phone number")
              : l.subtype === "limit_sharing_system_message"
                ? r("WAWebFormatNotificationTemplateText")(l, f).text.toString()
                : "";
        case o("WAWebMsgType").MSG_TYPE.ORDER:
          return l.message || "";
        case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(l);
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return s._(
            /*BTDS*/ "Someone replied to an announcement. Check your phone to see it.",
          );
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return o(
            "WAWebFormatMessageHistoryBundleBody",
          ).formatMessageHistoryBundleBody(b);
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
          return o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(b);
        default:
          return "";
      }
    }
    l.default = e;
  },
  226,
);
