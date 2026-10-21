__d(
  "WAWebFormatMsgText",
  [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizFormatInteractiveMsg",
    "WAWebBookingConfirmationGating",
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
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMessagePluginFormatMsgText",
    "WAWebMessagePluginFutureproofMsgText",
    "WAWebMsgType",
    "WAWebSystemMessagePluginFormatMsgText",
    "WAWebViewOnceState",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        a,
        i,
        l = e.associatedMessages,
        m = e.msg,
        p = e.options,
        _ = p != null ? p : {},
        f = _.unformat,
        g = f === void 0 ? !0 : f,
        h = _.formatAsLastMsg,
        y = h === void 0 ? !1 : h,
        C = _.formatAsSearchResult,
        b = C === void 0 ? !1 : C,
        v = _.spoilerReplacement,
        S = _.searchQuery,
        R = S === void 0 ? [] : S,
        L = m.safe(),
        E = !1,
        k;
      if (L.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && L.futureproofType)
        k = o("WAWebMessagePluginFutureproofMsgText").futureproofMsgText({
          msg: m,
        });
      else {
        var I;
        k =
          (I = o("WAWebMessagePluginFormatMsgText").formatMsgText({
            msg: m,
            associatedMessages: l,
            options: {
              unformat: g,
              formatAsLastMsg: y,
              formatAsSearchResult: b,
              onSpoilerReplacementHandled: function () {
                E = !0;
              },
              spoilerReplacement: v,
              searchQuery: R,
            },
          })) != null
            ? I
            : o("WAWebSystemMessagePluginFormatMsgText").formatMsgText({
                msg: m,
                options: {
                  unformat: g,
                  formatAsLastMsg: y,
                  formatAsSearchResult: b,
                  onSpoilerReplacementHandled: function () {
                    E = !0;
                  },
                  spoilerReplacement: v,
                  searchQuery: R,
                },
              });
      }
      if (k != null) return u(k, v, E);
      switch (L.type) {
        case o("WAWebMsgType").MSG_TYPE.HSM:
          return c(m, (t = m.body) != null ? t : "", g, v);
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          if (m.isFromTemplate) {
            var T,
              D = (T = m.body) != null ? T : "";
            return m.title
              ? c(m, m.title + " " + D, g, v, "*" + m.title + "* " + D)
              : c(m, D, g, v);
          }
          if (m.isDynamicReplyButtonsMsg && m.title) {
            var x = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.body, m);
            if (x != null)
              return c(m, m.title + "\n" + x, g, v, "*" + m.title + "*\n" + x);
          }
          return c(m, (n = m.body) != null ? n : "", g, v);
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return o("WAWebBizCtwaAGMUtils").isAGMSupported(m)
            ? c(m, (a = m.body) != null ? a : "", g, v)
            : o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
          return o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(
            m,
          )
            ? o("WAWebGalaxyFlowResponseUtils").getGalaxyFlowResponseSubtitle(
                m.id,
              )
            : d(m.body || "", v);
        case o("WAWebMsgType").MSG_TYPE.PTV: {
          if (L.isViewOnce)
            return o("WAWebViewOnceState").isViewed(L)
              ? s._(/*BTDS*/ "Opened")
              : s._(/*BTDS*/ "Video note");
          var $ = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.caption, m);
          return $ != null && $ !== ""
            ? c(m, $, g, v)
            : s._(/*BTDS*/ "Video note");
        }
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return r("WAWebFormatGroupNotification")(m, y);
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
          return o(
            "WAWebFormatBroadcastNotification",
          ).formatBroadcastNotification(m);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
          return d((i = m.body) != null ? i : "", v);
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return o("WAWebFormatE2ENotification").formatE2ENotification(L);
        case o("WAWebMsgType").MSG_TYPE.PRODUCT: {
          var P = [o("WAWebFrontendMsgGetters").getText(m), m.caption, m.footer]
            .filter(Boolean)
            .join(" ");
          return P.length ? c(m, P, g, v) : s._(/*BTDS*/ "Product");
        }
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
          return o("WAWebFormatOversizedMsg").formatOversizedMsgText();
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE: {
          var N = m;
          if (
            N.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName")
                .BOOKING_CONFIRMATION &&
            !o("WAWebBookingConfirmationGating").isBookingConfirmationEnabled()
          )
            return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
          var M = o("WAWebBizFormatInteractiveMsg").formatInteractive(N, {
            formatAsSearchResult: b,
          });
          return v == null ? M : d(M.toString(), v);
        }
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
          return d(
            r("WAWebFormatNotificationTemplateText")(m, y).text.toString(),
            v,
          );
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
          return m.subtype === "ephemeral_setting"
            ? o("WAWebFormatEphemeralSetting").formatEphemeralSetting(m)
            : m.subtype === "share_phone_number"
              ? s._(/*BTDS*/ "Share phone number")
              : m.subtype === "limit_sharing_system_message"
                ? d(
                    r("WAWebFormatNotificationTemplateText")(
                      m,
                      y,
                    ).text.toString(),
                    v,
                  )
                : "";
        case o("WAWebMsgType").MSG_TYPE.ORDER:
          return d(m.message || "", v);
        case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return s._(
            /*BTDS*/ "Someone replied to an announcement. Check your phone to see it.",
          );
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return o(
            "WAWebFormatMessageHistoryBundleBody",
          ).formatMessageHistoryBundleBody(L);
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
          return o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(L);
        default:
          return "";
      }
    }
    function u(e, t, n) {
      return t == null || n
        ? e
        : o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(e.toString(), {
            spoilerReplacement: t,
          });
    }
    function c(e, t, n, r, a) {
      return (
        a === void 0 && (a = t),
        n
          ? o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
              e,
              t,
              { spoilerReplacement: r },
            )
          : d(a, r)
      );
    }
    function d(e, t) {
      return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(e, {
        spoilerReplacement: t,
      });
    }
    l.default = e;
  },
  226,
);
