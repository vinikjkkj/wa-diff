__d(
  "WAWebPollsSendPollCreationMsgAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebPollCreationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebWamEnumPollActionType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAXplatTrim",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          return (
            e.contentType ===
              o("WAWebPollCreationUtils").PollContentType.IMAGE &&
              (t = yield (s || (s = n("Promise"))).all(
                e.options.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.image,
                          n = yield t.mediaPrep.waitForPrep();
                        return o(
                          "WAWebPollOptionHashUtils",
                        ).generatePollOptionHash(e.name, n.filehash);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              )),
            e.options.map(function (e, n) {
              var r = e.name,
                a = n,
                i = t[n];
              return { name: o("WAXplatTrim").trim(r), localId: a, hash: i };
            })
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return {
            pollName: o("WAXplatTrim").trim(e.name),
            pollOptions: yield u(e),
            pollSelectableOptionsCount: e.selectableOptionsCount,
            pollContentType: e.contentType,
            pollType: e.pollType,
            correctOptionIndex: e.correctOptionIndex,
            pollEndTime: e.endTime,
            pollHideVoterNames: e.hideVoterNames,
          };
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
          var a = t.chat,
            i = t.isWamoSub,
            l = t.poll,
            u = t.quotedMsg,
            c = yield f({ poll: l, chat: a, quotedMsg: u, isWamoSub: i });
          if (
            l.contentType === o("WAWebPollCreationUtils").PollContentType.IMAGE
          ) {
            var d = {
              associationType: o("WAWebMessageAssociation.flow")
                .MessageAssociationType.MEDIA_POLL,
              parentMsgKey: c.id,
              viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA,
              isWamoSub: i,
            };
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendPollCreation: sending ",
                  " poll options to chat",
                ])),
              l.options.length,
            ),
              l.options.forEach(function (e) {
                var t = e.image,
                  n = babelHelpers.extends({}, d, {
                    type: t.type,
                    caption: e.name,
                  });
                t.sendToChat({ chat: a, options: n });
              }));
          }
          var m = r("WAWebWid").isNewsletter(a.id),
            p = m
              ? yield o(
                  "WAWebNewsletterSendMsgAction",
                ).sendNewsletterPollCreationMsg({ msgData: c, chat: a })
              : yield (s || (s = n("Promise"))).all(
                  o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, c),
                ),
            _ = p[0];
          o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
            action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
              .CREATE_POLL,
            chat: a,
            creationDateInSeconds: _.t,
            pollOptionsCount: l.options.length,
          });
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
            n = e.chat,
            a = e.isWamoSub,
            i = e.poll,
            l = e.quotedMsg,
            s = yield d(i),
            u = s.correctOptionIndex,
            c = s.pollContentType,
            m = s.pollEndTime,
            p = s.pollHideVoterNames,
            _ = s.pollName,
            f = s.pollOptions,
            g = s.pollSelectableOptionsCount,
            h = s.pollType,
            y = r("WAWebWid").isNewsletter(n.id),
            C = n.id,
            b = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            v =
              (t = l == null ? void 0 : l.msgContextInfo(n.id)) != null
                ? t
                : {};
          return babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                from: b,
                to: C,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
                participant: o("WAWebChatGetters").getIsGroup(n)
                  ? o("WAWebWidFactory").asUserWidOrThrow(b)
                  : void 0,
                selfDir: "out",
              }),
              type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
              kind: o("WAWebMsgType").MsgKind.PollCreation,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              isSentCagPollCreation: o("WAWebFrontendChatGetters").getIsCAG(n)
                ? !0
                : void 0,
              t: o("WATimeUtils").unixTime(),
              from: b,
              to: C,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              pollName: _,
              pollOptions: f,
              messageSecret: y
                ? void 0
                : self.crypto.getRandomValues(new Uint8Array(32)),
              pollSelectableOptionsCount: g,
              isWamoSub: a,
              pollContentType: c,
            },
            v,
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
            {
              pollType: h,
              correctOptionIndex: u,
              pollEndTime: m,
              pollHideVoterNames: p,
            },
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.sendPollCreation = p), (l.createPollCreationMsgData = f));
  },
  98,
);
