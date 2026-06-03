__d(
  "WAWebNewsletterRepairMsgHistoryAction",
  [
    "WAPromiseDelays",
    "WARaceSignal",
    "WAWebCommonNewsletterEnums",
    "WAWebMsgDataFromModel",
    "WAWebMsgModelFromData",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgHistoryUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterValidationUtils",
    "WAWebNewsletterViewModeUIUtils",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "[news-msg-history][repairMsgHistory]",
      s = 1e3;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebStateUtils").unproxy(e.chat);
          if (
            r("WAWebWid").isNewsletter(n.id) &&
            o("WAWebNewsletterGatingUtils").isProactiveGapFillingEnabled()
          ) {
            var a = (t = e.msgCollection) != null ? t : n.msgs;
            if (a === n.msgs) {
              if (a.repairMsgHistoryPromise != null)
                return a.repairMsgHistoryPromise;
              var i = n.newsletterMetadata;
              if (
                !(
                  i == null ||
                  i.membershipType ===
                    o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                      .Guest
                )
              ) {
                var l = o(
                    "WAWebNewsletterViewModeUIUtils",
                  ).getHiddenMessageServerIdsForChat(n.id),
                  u = a.sort().last();
                if (!(u == null || u.serverId == null)) {
                  var c = new AbortController();
                  try {
                    var d;
                    if (
                      (r("WARaceSignal")(
                        [c.signal, e.unmountSignal],
                        function () {
                          return o("WAPromiseDelays")
                            .delayMs(s, c.signal)
                            .then(function () {
                              a.msgLoadState.isRepairingMsgHistory = !0;
                            })
                            .catch(r("WAWebNoop"));
                        },
                      ),
                      e.fetchLastMessage)
                    ) {
                      var m = yield o(
                          "WAWebNewsletterPullMessagesFromServerAction",
                        ).pullNewsletterMessagesFromServer(n, {
                          messageCount: 1,
                          resetUnreadCount: !0,
                          shouldUpdateMsg: function (t) {
                            return (
                              t.serverId != null &&
                              t.serverId !== u.serverId &&
                              !l.has(t.serverId)
                            );
                          },
                        }),
                        p = m[0];
                      if (p == null) return;
                    }
                    a.repairMsgHistoryPromise = o(
                      "WAWebNewsletterMsgHistoryUtils",
                    )
                      .fillMsgHistoryGaps({
                        jid: o(
                          "WAWebNewsletterValidationUtils",
                        ).toNewsletterJidOrThrow(n.id.toJid()),
                        msgs: a
                          .toArray()
                          .map(o("WAWebMsgDataFromModel").msgDataFromMsgModel),
                        serverIdsToSkip: l,
                      })
                      .then(function (e) {
                        return e.map(
                          o("WAWebMsgModelFromData").msgModelFromMsgData,
                        );
                      });
                    var _ =
                      (d = yield n.msgs.repairMsgHistoryPromise) != null
                        ? d
                        : [];
                    if (a.length === _.length) return;
                    (a.add(_, { silent: !0 }),
                      a.sort({ silent: !0 }),
                      n.trigger("msgs:history_repaired"));
                  } finally {
                    (c.abort(),
                      (a.msgLoadState.isRepairingMsgHistory = !1),
                      (a.repairMsgHistoryPromise = null));
                  }
                }
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.repairNewsletterMsgHistory = u;
  },
  98,
);
