__d(
  "WAWebPollsSendPollCreationMsgAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMeUserForChat",
    "WAWebMessageAssociation.flow",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebPollCreationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsLoggingIdUtils",
    "WAWebSendMsgChatAction",
    "WAWebSpoilerFormatRegex",
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
      var t = e.pollName,
        n = e.pollOptions;
      return (
        o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(t) ||
        n.some(function (e) {
          return o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(e.name);
        })
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chat,
            i = t.isWamoSub,
            l = t.poll,
            u = t.quotedMsg,
            c = yield g({ poll: l, chat: a, quotedMsg: u, isWamoSub: i });
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
            hideVoterName: l.hideVoterNames,
            pollDurationMs: l.endTime == null ? void 0 : l.endTime - _.t * 1e3,
            pollOptionsCount: l.options.length,
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.chat,
            a = e.isWamoSub,
            i = e.poll,
            l = e.quotedMsg,
            s = yield d(i),
            u = s.correctOptionIndex,
            c = s.pollContentType,
            m = s.pollEndTime,
            _ = s.pollHideVoterNames,
            f = s.pollName,
            g = s.pollOptions,
            h = s.pollSelectableOptionsCount,
            y = s.pollType,
            C = r("WAWebWid").isNewsletter(n.id),
            b = n.id,
            v = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            S =
              (t = l == null ? void 0 : l.msgContextInfo(n.id)) != null
                ? t
                : {};
          return babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                from: v,
                to: b,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
                participant: o("WAWebChatGetters").getIsGroup(n)
                  ? o("WAWebWidFactory").asUserWidOrThrow(v)
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
              from: v,
              to: b,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              pollName: f,
              pollLoggingId: o(
                "WAWebPollsLoggingIdUtils",
              ).generatePollLoggingId(),
              pollOptions: g,
              messageSecret: C
                ? void 0
                : self.crypto.getRandomValues(new Uint8Array(32)),
              isSpoiler:
                p({ pollName: f, pollOptions: g }) &&
                o("WAWebABProps").getABPropConfigValue(
                  "is_spoiler_rich_format_sender_enabled",
                ),
              pollSelectableOptionsCount: h,
              isWamoSub: a,
              pollContentType: c,
            },
            S,
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
            {
              pollType: y,
              correctOptionIndex: u,
              pollEndTime: m,
              pollHideVoterNames: _,
            },
          );
        })),
        h.apply(this, arguments)
      );
    }
    ((l.sendPollCreation = _), (l.createPollCreationMsgData = g));
  },
  98,
);
