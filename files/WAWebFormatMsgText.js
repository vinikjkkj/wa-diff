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
    "WAWebForwardedBotMaskedText",
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
        g = _.isCallLive,
        h = _.unformat,
        y = h === void 0 ? !0 : h,
        C = _.formatAsLastMsg,
        b = C === void 0 ? !1 : C,
        v = _.formatAsSearchResult,
        S = v === void 0 ? !1 : v,
        R = _.spoilerReplacement,
        L = _.searchQuery,
        E = L === void 0 ? [] : L,
        k = o("WAWebForwardedBotMaskedText").getMaskedForwardedBotCopyText(m);
      if (k != null) return k;
      var I = m.safe(),
        T = !1,
        D;
      if (I.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && I.futureproofType)
        D = o("WAWebMessagePluginFutureproofMsgText").futureproofMsgText({
          msg: m,
        });
      else {
        var x;
        D =
          (x = o("WAWebMessagePluginFormatMsgText").formatMsgText({
            msg: m,
            associatedMessages: l,
            options: {
              callLogCount: f,
              isCallLive: g,
              unformat: y,
              formatAsLastMsg: b,
              formatAsSearchResult: S,
              onSpoilerReplacementHandled: function () {
                T = !0;
              },
              spoilerReplacement: R,
              searchQuery: E,
            },
          })) != null
            ? x
            : o("WAWebSystemMessagePluginFormatMsgText").formatMsgText({
                msg: m,
                options: {
                  callLogCount: f,
                  isCallLive: g,
                  unformat: y,
                  formatAsLastMsg: b,
                  formatAsSearchResult: S,
                  onSpoilerReplacementHandled: function () {
                    T = !0;
                  },
                  spoilerReplacement: R,
                  searchQuery: E,
                },
              });
      }
      if (D != null) return u(D, R, T);
      switch (I.type) {
        case o("WAWebMsgType").MSG_TYPE.HSM:
          return c(m, (t = m.body) != null ? t : "", y, R);
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          if (m.isFromTemplate) {
            var $,
              P = ($ = m.body) != null ? $ : "";
            return m.title
              ? c(m, m.title + " " + P, y, R, "*" + m.title + "* " + P)
              : c(m, P, y, R);
          }
          if (m.isDynamicReplyButtonsMsg && m.title) {
            var N = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.body, m);
            if (N != null)
              return c(m, m.title + "\n" + N, y, R, "*" + m.title + "*\n" + N);
          }
          return c(m, (n = m.body) != null ? n : "", y, R);
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return o("WAWebBizCtwaAGMUtils").isAGMSupported(m)
            ? c(m, (a = m.body) != null ? a : "", y, R)
            : o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
          return o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(
            m,
          )
            ? o("WAWebGalaxyFlowResponseUtils").getGalaxyFlowResponseSubtitle(
                m.id,
              )
            : d(m.body || "", R);
        case o("WAWebMsgType").MSG_TYPE.PTV: {
          if (I.isViewOnce)
            return o("WAWebViewOnceState").isViewed(I)
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
          var M = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.caption, m);
          return M != null && M !== "" ? c(m, M, y, R) : s._(/*BTDS*/ "");
        }
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return r("WAWebFormatGroupNotification")(m, b);
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
          return o(
            "WAWebFormatBroadcastNotification",
          ).formatBroadcastNotification(m);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
          return d((i = m.body) != null ? i : "", R);
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return o("WAWebFormatE2ENotification").formatE2ENotification(I);
        case o("WAWebMsgType").MSG_TYPE.PRODUCT: {
          var w = [o("WAWebFrontendMsgGetters").getText(m), m.caption, m.footer]
            .filter(Boolean)
            .join(" ");
          return w.length ? c(m, w, y, R) : s._(/*BTDS*/ "");
        }
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
          return o("WAWebFormatOversizedMsg").formatOversizedMsgText();
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE: {
          var A = m;
          if (
            A.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName")
                .BOOKING_CONFIRMATION &&
            !o("WAWebBookingConfirmationGating").isBookingConfirmationEnabled()
          )
            return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
          var F = o("WAWebBizFormatInteractiveMsg").formatInteractive(A, {
            formatAsSearchResult: S,
          });
          return R == null ? F : d(F.toString(), R);
        }
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
          return d(
            r("WAWebFormatNotificationTemplateText")(m, b).text.toString(),
            R,
          );
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
          return m.subtype === "ephemeral_setting"
            ? o("WAWebFormatEphemeralSetting").formatEphemeralSetting(m)
            : m.subtype === "share_phone_number"
              ? s._(/*BTDS*/ "")
              : m.subtype === "limit_sharing_system_message"
                ? d(
                    r("WAWebFormatNotificationTemplateText")(
                      m,
                      b,
                    ).text.toString(),
                    R,
                  )
                : "";
        case o("WAWebMsgType").MSG_TYPE.ORDER:
          return d(m.message || "", R);
        case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
          return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return s._(/*BTDS*/ "");
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return o(
            "WAWebFormatMessageHistoryBundleBody",
          ).formatMessageHistoryBundleBody(I);
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
          return o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(I);
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
