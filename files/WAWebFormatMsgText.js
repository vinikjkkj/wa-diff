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
        k = m.safe(),
        I = !1,
        T;
      if (k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && k.futureproofType)
        T = o("WAWebMessagePluginFutureproofMsgText").futureproofMsgText({
          msg: m,
        });
      else {
        var D;
        T =
          (D = o("WAWebMessagePluginFormatMsgText").formatMsgText({
            msg: m,
            associatedMessages: l,
            options: {
              callLogCount: f,
              isCallLive: g,
              unformat: y,
              formatAsLastMsg: b,
              formatAsSearchResult: S,
              onSpoilerReplacementHandled: function () {
                I = !0;
              },
              spoilerReplacement: R,
              searchQuery: E,
            },
          })) != null
            ? D
            : o("WAWebSystemMessagePluginFormatMsgText").formatMsgText({
                msg: m,
                options: {
                  callLogCount: f,
                  isCallLive: g,
                  unformat: y,
                  formatAsLastMsg: b,
                  formatAsSearchResult: S,
                  onSpoilerReplacementHandled: function () {
                    I = !0;
                  },
                  spoilerReplacement: R,
                  searchQuery: E,
                },
              });
      }
      if (T != null) return u(T, R, I);
      switch (k.type) {
        case o("WAWebMsgType").MSG_TYPE.HSM:
          return c(m, (t = m.body) != null ? t : "", y, R);
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          if (m.isFromTemplate) {
            var x,
              $ = (x = m.body) != null ? x : "";
            return m.title
              ? c(m, m.title + " " + $, y, R, "*" + m.title + "* " + $)
              : c(m, $, y, R);
          }
          if (m.isDynamicReplyButtonsMsg && m.title) {
            var P = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.body, m);
            if (P != null)
              return c(m, m.title + "\n" + P, y, R, "*" + m.title + "*\n" + P);
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
          if (k.isViewOnce)
            return o("WAWebViewOnceState").isViewed(k)
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
          var N = o("WAWebFormatMsgTextUtils").maybeAddFooter(m.caption, m);
          return N != null && N !== "" ? c(m, N, y, R) : s._(/*BTDS*/ "");
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
          return o("WAWebFormatE2ENotification").formatE2ENotification(k);
        case o("WAWebMsgType").MSG_TYPE.PRODUCT: {
          var M = [o("WAWebFrontendMsgGetters").getText(m), m.caption, m.footer]
            .filter(Boolean)
            .join(" ");
          return M.length ? c(m, M, y, R) : s._(/*BTDS*/ "");
        }
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
          return o("WAWebFormatOversizedMsg").formatOversizedMsgText();
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE: {
          var w = m;
          if (
            w.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName")
                .BOOKING_CONFIRMATION &&
            !o("WAWebBookingConfirmationGating").isBookingConfirmationEnabled()
          )
            return o("WAWebFormatUnknownMsg").formatUnknownMsgText(m);
          var A = o("WAWebBizFormatInteractiveMsg").formatInteractive(w, {
            formatAsSearchResult: S,
          });
          return R == null ? A : d(A.toString(), R);
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
          ).formatMessageHistoryBundleBody(k);
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
          return o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(k);
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
