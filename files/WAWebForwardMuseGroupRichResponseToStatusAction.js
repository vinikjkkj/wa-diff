__d(
  "WAWebForwardMuseGroupRichResponseToStatusAction",
  [
    "WALogger",
    "WAWebForwardMuseGroupGeneratedMediaAction",
    "WAWebLogStatusPost",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseForward",
    "WAWebSendStatusMsgAction",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStatusPostOrigin",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = e.appendedText,
        n = e.msg,
        r = e.retryCount,
        a = e.statusChat;
      return o(
        "WAWebMuseGroupRichResponseForward",
      ).isMuseGroupAgentRichResponse(n)
        ? d({ appendedText: t, msg: n, retryCount: r, statusChat: a })
        : null;
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            n = e.msg,
            r = e.retryCount,
            o = e.statusChat;
          (yield p({ msg: n, retryCount: r, statusChat: o }),
            t != null && t !== "" && (yield h(t, r)));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msg,
            r = t.retryCount,
            a = t.statusChat,
            i = o("WAWebMuseGroupRichResponseForward").getMuseGroupForwardMedia(
              n,
            );
          if (
            !(
              i != null &&
              (yield f({ media: i, msg: n, retryCount: r, statusChat: a }))
            )
          ) {
            var l = o(
              "WAWebMuseGroupRichResponseForward",
            ).getMuseGroupForwardText(n);
            if (l === "") {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[forward-message-modal] Muse group media status post failed with no text fallback",
                    ])),
                )
                .sendLogs("status-forward-muse-media-no-text-fallback");
              return;
            }
            yield h(l, r);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = e.media,
            a = e.msg,
            i = e.retryCount,
            l = e.statusChat,
            u = null;
          try {
            if (
              ((u = yield o(
                "WAWebForwardMuseGroupGeneratedMediaAction",
              ).forwardMuseGroupGeneratedMedia({
                chat: l,
                media: r,
                msg: a,
                multicast: !1,
              })),
              u == null)
            )
              return !1;
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to forward Muse group media as status ",
                    "",
                  ])),
                e,
              )
              .sendLogs("status-forward-muse-media-failed", { sampling: 0.01 });
          }
          return (
            o("WAWebLogStatusPost").logStatusPost({
              statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(
                (t = u) == null ? void 0 : t.messageSendResult,
              ),
              msg: (n = u) == null ? void 0 : n.msg,
              statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
                .STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
              mediaType: o("WAWebLogStatusPost").getStatusMediaType(
                r.kind === "video"
                  ? o("WAWebMsgType").MSG_TYPE.VIDEO
                  : o("WAWebMsgType").MSG_TYPE.IMAGE,
              ),
              hasCaption:
                o(
                  "WAWebMuseGroupRichResponseForward",
                ).getMuseGroupForwardCaption(a) !== "",
              hasFilters: !1,
              retryCount: i,
              statusContainsMusic: !1,
            }),
            !0
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r, a;
          try {
            a = yield o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
              text: e,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to forward message as status ",
                    "",
                  ])),
                e,
              )
              .sendLogs("status-forward-failed", { sampling: 0.01 });
          }
          o("WAWebLogStatusPost").logStatusPost({
            statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(
              (n = a) == null ? void 0 : n.messageSendResult,
            ),
            msg: (r = a) == null ? void 0 : r.msg,
            statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
              .STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
            mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT,
            hasCaption: !1,
            hasFilters: !1,
            retryCount: t,
            statusContainsMusic: !1,
          });
        })),
        y.apply(this, arguments)
      );
    }
    l.forwardMuseGroupRichResponseToStatus = c;
  },
  98,
);
