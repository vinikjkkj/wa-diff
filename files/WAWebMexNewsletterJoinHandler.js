__d(
  "WAWebMexNewsletterJoinHandler",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterCommonGatingUtils",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            (yield (u || (u = n("Promise"))).all([
              o("WAWebNewsletterQueues").newsletterCreationQueue.wait(),
              o("WAWebNewsletterQueues").newsletterSubscribeQueue.wait(),
            ]),
            !!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
          ) {
            var i = o(
              "WAWebMexNewsletterParseUtils",
            ).parseMexNewsletterResponse(a.xwa2_notify_newsletter_on_join);
            if (i == null)
              throw r("err")(
                "cannot parse xwa2_notify_newsletter_on_join response",
              );
            var l = o("WAWebNewsletterModelUtils").mapNewsletterToModels(i),
              s = l.chat,
              c = l.metadata,
              d = l.pic;
            return o(
              "WAWebNewsletterQueues",
            ).newsletterJoinNotificationQueue.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  return yield m({
                    chat: s,
                    metadata: c,
                    newsletterJid: i.idJid,
                    pic: d,
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
              }),
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.metadata,
            r = e.newsletterJid,
            a = e.pic,
            i = yield _({ chat: t, metadata: n, newsletterJid: r }),
            l = i.msgsToStore,
            s = i.noEarlierMsgs;
          (yield o(
            "WAWebNewsletterUpdateNewslettersRecordsJob",
          ).updateNewsletterChatRecords([
            o("WAWebCreateChat").createNewsletterObjectForStorage(t),
          ]),
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
              o(
                "WAWebNewsletterStorageUtils",
              ).createNewsletterMetadataObjectForStorage(n),
            ),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "joinNewsletter",
              { newsletter: t, metadata: n, pic: a, msgs: l, noEarlierMsgs: s },
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              l = yield o(
                "WAWebNewsletterGetMessagesJob",
              ).getNewsletterMessages(a, 1),
              u = l.msgs,
              c = u.length === 0,
              d = u.every(function (e) {
                return !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                  o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                  e.viewMode,
                );
              }),
              m = u.length > 0 && !d ? u : [].concat(i, u);
            return (
              (t.t = g(n.creationTime, m)),
              u.length > 0 &&
                (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).updateAddOnDbRecords(l)),
              yield o(
                "WAWebNewsletterUpdateMsgsRecordsJob",
              ).addNewsletterMsgsRecords(m),
              { msgsToStore: m, noEarlierMsgs: c }
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
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
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
    l.mexHandleNewsletterJoin = c;
  },
  98,
);
