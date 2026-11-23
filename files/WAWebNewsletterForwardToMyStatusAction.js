__d(
  "WAWebNewsletterForwardToMyStatusAction",
  [
    "WALogger",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebIncrementNewsletterForwardCounterAction",
    "WAWebLogNewsletterMessageForward",
    "WAWebLogStatusPost",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterShareToStatusMedia",
    "WAWebNewsletterShareToStatusQPLLogger",
    "WAWebNewsletterShareToStatusToast",
    "WAWebPrepRawMedia",
    "WAWebSendMsgResultAction",
    "WAWebWamEnumStatusPostOrigin",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = t.caption,
        a = t.msgs,
        i = t.retryCount,
        l = t.statusChat,
        s = a.length === 1 ? (n == null ? void 0 : n.trim()) : null;
      return a.reduce(function (t, n) {
        return t.then(function () {
          return d({ caption: s, msg: n, retryCount: i, statusChat: l }).catch(
            function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-forward-to-my-status] could not forward the channel update to My status",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("newsletter-forward-to-my-status-failed");
            },
          );
        });
      }, Promise.resolve());
    }
    async function d(e) {
      var t = e.caption,
        n = e.msg,
        a = e.retryCount,
        i = e.statusChat,
        l = new (r("WAWebNewsletterShareToStatusQPLLogger"))(
          n,
          null,
          "forward",
        ),
        s = await m(n, l);
      if (s == null) {
        (l.logFailed(),
          o(
            "WAWebNewsletterShareToStatusToast",
          ).showShareToStatusFailedToast());
        return;
      }
      var u = p(t, n, s);
      l.addPoint("status_post_start");
      var c = await _({ caption: u, msg: n, share: s, statusChat: i });
      (o("WAWebLogStatusPost").logStatusPost({
        hasCaption: u != null && u !== "",
        hasFilters: !1,
        isReshare: !0,
        mediaType: o("WAWebLogStatusPost").getStatusMediaType(f(s.attachment)),
        msg: c == null ? void 0 : c.msg,
        retryCount: a,
        statusContainsMusic: !1,
        statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN
          .FORWARD_FROM_MESSAGES,
        statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(
          c == null ? void 0 : c.messageSendResult,
        ),
      }),
        g({
          msg: n,
          qplLogger: l,
          sendResult: c == null ? void 0 : c.messageSendResult,
          share: s,
          statusChat: i,
        }));
    }
    async function m(e, t) {
      var n = o("WAWebNewsletterShareToStatusMedia").makesCardVideo(e)
        ? o("WAWebNewsletterShareToStatusToast").showPreparingStatusToast()
        : null;
      try {
        return await o("WAWebNewsletterShareToStatusMedia").loadStatusShare(
          e,
          t,
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-forward-to-my-status] could not make the channel update into status media",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-forward-to-my-status-media-failed"),
          null
        );
      } finally {
        n == null || n();
      }
    }
    function p(e, t, n) {
      var r = n.cardTapAreas;
      return e != null && e !== "" ? e : r == null ? t.caption : null;
    }
    async function _(e) {
      var t = e.caption,
        n = e.msg,
        a = e.share,
        i = a.attachment,
        l = a.cardTapAreas,
        s = e.statusChat;
      try {
        var c = o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).getNewsletterContextForNewsletterMsg(n),
          d = o("WAWebPrepRawMedia").prepRawMedia(
            await r("WAWebMediaOpaqueData").createFromData(i.file, i.file.type),
            {},
          );
        return (
          await d.waitForPrep(),
          await d.sendToChat({
            chat: s,
            options: {
              caption: t,
              forwardedNewsletterMessageInfo: c,
              interactiveAnnotations: l,
              isForwarded: !0,
              statusAttributions: o(
                "WAWebNewsletterShareToStatusMedia",
              ).getChannelAttributions(c),
            },
          })
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-forward-to-my-status] could not post the channel update to My status",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-forward-to-my-status-post-failed"),
          o("WAWebNewsletterShareToStatusToast").showShareToStatusFailedToast(),
          null
        );
      }
    }
    function f(e) {
      return e.file.type.startsWith("video/")
        ? o("WAWebMsgType").MSG_TYPE.VIDEO
        : o("WAWebMsgType").MSG_TYPE.IMAGE;
    }
    function g(e) {
      var t = e.msg,
        n = e.qplLogger,
        r = e.sendResult,
        a = e.share,
        i = e.statusChat;
      if (r === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
        (n.addPoint("status_post_end"),
          n.logPosted(a.cardTapAreas != null),
          h(t, i));
        return;
      }
      if (r === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED) {
        n.logCancelled();
        return;
      }
      (n.logFailed(),
        r != null &&
          o(
            "WAWebNewsletterShareToStatusToast",
          ).showShareToStatusFailedToast());
    }
    function h(e, t) {
      (o(
        "WAWebIncrementNewsletterForwardCounterAction",
      ).incrementNewsletterForwardCounter(e, t),
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterMessageForwardLoggingEnabled() &&
          o("WAWebLogNewsletterMessageForward").logNewsletterMessageForward(e, [
            t,
          ]));
    }
    l.default = c;
  },
  98,
);
