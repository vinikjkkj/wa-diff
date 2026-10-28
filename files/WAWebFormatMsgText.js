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
        f = _.callLogCount,
        g = _.unformat,
        h = g === void 0 ? !0 : g,
        y = _.formatAsLastMsg,
        C = y === void 0 ? !1 : y,
        b = _.formatAsSearchResult,
        v = b === void 0 ? !1 : b,
        S = _.spoilerReplacement,
        R = _.searchQuery,
        L = R === void 0 ? [] : R,
        E = m.safe(),
        k = !1,
        I;
      if (E.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && E.futureproofType)
        I = o("WAWebMessagePluginFutureproofMsgText").futureproofMsgText({
          msg: m,
        });
      else {
        var T;
        I =
          (T = o("WAWebMessagePluginFormatMsgText").formatMsgText({
            msg: m,
            associatedMessages: l,
            options: {
              callLogCount: f,
              unformat: h,
              formatAsLastMsg: C,
              formatAsSearchResult: v,
              onSpoilerReplacementHandled: function () {
                k = !0;
              },
              spoilerReplacement: S,
              searchQuery: L,
            },
          })) != null
            ? T
            : o("WAWebSystemMessagePluginFormatMsgText").formatMsgText({
                msg: m,
                options: {
                  callLogCount: f,
                  unformat: h,
                  formatAsLastMsg: C,
                  formatAsSearchResult: v,
                  onSpoilerReplacementHandled: function () {
                    k = !0;
                  },
                  spoilerReplacement: S,
                  searchQuery: L,
                },
              });
      }
      if (I != null) return u(I, S, k);
      switch (E.type) {
        case o("WAWebMsgType").MSG_TYPE.HSM:
          return c(m, (t = m.body) != null ? t : "", h, S);
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          if (m.isFromTemplate) {
            var D,
              x = (D = m.body) != null ? D : "";
            return m.title
              ? c(m, m.title + " " + x, h, S, "*" + m.title + "* " + x)
              : c(m, x, h, S);
          }
          if (m.isDynamicReplyButtonsMsg && m.title) {
            var $ = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.body, m);
            if ($ != null)
              return c(m, m.title + "\n" + $, h, S, "*" + m.title + "*\n" + $);
          }
          return c(m, (n = m.body) != null ? n : "", h, S);
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return o("WAWebBizCtwaAGMUtils").isAGMSupported(m)
            ? c(m, (a = m.body) != null ? a : "", h, S)
            : o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
          return o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(
            m,
          )
            ? o("WAWebGalaxyFlowResponseUtils").getGalaxyFlowResponseSubtitle(
                m.id,
              )
            : d(m.body || "", S);
        case o("WAWebMsgType").MSG_TYPE.PTV: {
          if (E.isViewOnce)
            return o("WAWebViewOnceState").isViewed(E)
              ? s._(/*BTDS*/ "Opened")
              : s._(/*BTDS*/ "Video note");
          var P = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.caption, m);
          return P != null && P !== ""
            ? c(m, P, h, S)
            : s._(/*BTDS*/ "Video note");
        }
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return r("WAWebFormatGroupNotification")(m, C);
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
          return o(
            "WAWebFormatBroadcastNotification",
          ).formatBroadcastNotification(m);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
          return d((i = m.body) != null ? i : "", S);
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return o("WAWebFormatE2ENotification").formatE2ENotification(E);
        case o("WAWebMsgType").MSG_TYPE.PRODUCT: {
          var N = [o("WAWebFrontendMsgGetters").getText(m), m.caption, m.footer]
            .filter(Boolean)
            .join(" ");
          return N.length ? c(m, N, h, S) : s._(/*BTDS*/ "Product");
        }
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
          return o("WAWebFormatOversizedMsg").formatOversizedMsgText();
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE: {
          var M = m;
          if (
            M.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName")
                .BOOKING_CONFIRMATION &&
            !o("WAWebBookingConfirmationGating").isBookingConfirmationEnabled()
          )
            return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
          var w = o("WAWebBizFormatInteractiveMsg").formatInteractive(M, {
            formatAsSearchResult: v,
          });
          return S == null ? w : d(w.toString(), S);
        }
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
          return d(
            r("WAWebFormatNotificationTemplateText")(m, C).text.toString(),
            S,
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
                      C,
                    ).text.toString(),
                    S,
                  )
                : "";
        case o("WAWebMsgType").MSG_TYPE.ORDER:
          return d(m.message || "", S);
        case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return s._(
            /*BTDS*/ "Someone replied to an announcement. Check your phone to see it.",
          );
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return o(
            "WAWebFormatMessageHistoryBundleBody",
          ).formatMessageHistoryBundleBody(E);
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
          return o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(E);
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
