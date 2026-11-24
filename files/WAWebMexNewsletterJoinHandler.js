__d(
  "WAWebMexNewsletterJoinHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterQueues",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      if (
        (await Promise.all([
          o("WAWebNewsletterQueues").newsletterCreationQueue.wait(),
          o("WAWebNewsletterQueues").newsletterSubscribeQueue.wait(),
        ]),
        !!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
      ) {
        var a = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
          n.xwa2_notify_newsletter_on_join,
        );
        if (a == null)
          throw r("err")(
            "cannot parse xwa2_notify_newsletter_on_join response",
          );
        var i = o("WAWebNewsletterModelUtils").mapNewsletterToModels(a),
          l = i.chat,
          s = i.metadata,
          u = i.pic;
        return o(
          "WAWebNewsletterQueues",
        ).newsletterJoinNotificationQueue.enqueue(async function () {
          try {
            return await c({
              chat: l,
              metadata: s,
              newsletterJid: a.idJid,
              pic: u,
            });
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter][notification][join]",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs("mex-newsletter-notification-join-fail");
          }
        });
      }
    }
    async function c(e) {
      var t = e.chat,
        n = e.metadata,
        r = e.newsletterJid,
        a = e.pic,
        i = await d({ chat: t, metadata: n, newsletterJid: r }),
        l = i.msgsToStore,
        s = i.noEarlierMsgs;
      (await o(
        "WAWebNewsletterUpdateNewslettersRecordsJob",
      ).updateNewsletterChatRecords([
        o("WAWebCreateChat").createNewsletterObjectForStorage(
          babelHelpers.extends({}, t, { unreadCount: 0 }),
        ),
      ]),
        await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
          o(
            "WAWebNewsletterStorageUtils",
          ).createNewsletterMetadataObjectForStorage(n),
        ),
        await o("WAWebBackendApi").frontendSendAndReceive("joinNewsletter", {
          newsletter: t,
          metadata: n,
          pic: a,
          msgs: l,
          noEarlierMsgs: s,
        }),
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterStatusFetchOnJoinNotificationEnabled() &&
          o("WAWebBackendApi").frontendFireAndForget(
            "fillNewsletterStatusGap",
            { newsletterJid: r },
          ));
    }
    async function d(e) {
      var t = e.chat,
        n = e.metadata,
        a = e.newsletterJid;
      try {
        var i = o(
            "WAWebNewsletterSystemMessages",
          ).genNewsletterCreationSystemMessages({
            id: t.id,
            name: t.name,
            t: n.creationTime,
            role: n.membershipType,
          }),
          l = await o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(
            a,
            1,
          ),
          u = l.msgs,
          c = u.length === 0,
          d = u.every(function (e) {
            return !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              e.viewMode,
            );
          }),
          p = u.length > 0 && !d ? u : [].concat(i, u);
        return (
          (t.t = m(n.creationTime, p)),
          u.length > 0 &&
            (await o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(
              l,
            )),
          await o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).addNewsletterMsgsRecords(p),
          { msgsToStore: p, noEarlierMsgs: c }
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][newsletter][join] fetchLastMessage failed",
                ])),
            )
            .tags("mex", "newsletter")
            .catching(r("getErrorSafe")(e))
            .sendLogs("mex-newsletter-join-fetch-last-message-fail"),
          { msgsToStore: [], noEarlierMsgs: !1 }
        );
      }
    }
    function m(e, t) {
      return o("WATimeUtils").castToUnixTime(
        Math.min(
          Math.max(
            e != null ? e : 0,
            Math.max.apply(
              Math,
              t.map(function (e) {
                var t;
                return (t = e.t) != null ? t : 0;
              }),
            ),
          ),
          Date.now() / 1e3,
        ),
      );
    }
    l.mexHandleNewsletterJoin = u;
  },
  98,
);
