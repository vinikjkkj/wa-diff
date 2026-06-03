__d(
  "WAWebSendContactsAction",
  [
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachMediaCollection",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFileUtils",
    "WAWebFrontendVcardUtils",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVcardUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = "text/vcard";
    function m(e, t, n, r, a) {
      var i = e.map(function (e, t) {
          return o("WAWebFrontendVcardUtils").vcardFromContactModel(
            e,
            a == null ? void 0 : a[t],
          );
        }),
        l = i.length === 1 ? i[0] : o("WAWebVcardUtils").mergeVcards(i),
        s = l.displayName.toString() + ".vcf",
        u = o("WAWebFileUtils").createFile([l.vcard], s, { type: d }),
        c = u.size / 1024;
      if (c > o("WAWebServerPropConstants").VCARD_AS_DOCUMENT_SIZE_KB) {
        p(u, e.length, t, n, r);
        return;
      }
      f(i, t, c, n, r);
    }
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = {
                file: e,
                type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                filename: e.name,
                mimetype: d,
                isVcardOverMmsDocument: !0,
                documentPageCount: t,
              },
              u = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: n.getParticipantCount(),
              });
            yield u.processAttachmentsForChat([l], void 0, n);
            var m = u.uiProcessMsgs(1, null),
              p = m.errorMsgs;
            if (p) {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, { msg: p }),
              );
              return;
            }
            var _ = r("WANullthrows")(u.getValidMedias()[0]);
            try {
              yield _.sendToChat({
                chat: n,
                options: { quotedMsg: a, ctwaContext: i },
              });
            } catch (e) {
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Error sending contact: ",
                      "",
                    ])),
                  e,
                ),
                e
              );
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(t, a, i, l, s) {
      var u,
        c,
        d = l && l.msgContextInfo(a.id),
        m = o("WAWebUserPrefsMeUser").getMeUser(),
        p = babelHelpers.extends(
          {
            ack: o("WAWebAck").ACK.CLOCK,
            from: m,
            id: new (r("WAWebMsgKey"))({
              from: m,
              to: a.id,
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              participant: o("WAWebChatGetters").getIsGroup(a) ? m : void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: a.id,
          },
          d,
          { ctwaContext: s },
        ),
        _ = o("WAWebBotUtils").isHatchBot(a.id)
          ? self.crypto.getRandomValues(new Uint8Array(32))
          : void 0,
        f =
          o("WAWebBotUtils").isHatchBot(a.id) &&
          (u =
            (c = o("WAWebBotProfileCollection").BotProfileCollection.get(
              a.id,
            )) == null
              ? void 0
              : c.personaId) != null
            ? u
            : void 0,
        g =
          t.length === 1
            ? babelHelpers.extends(
                {
                  type: "vcard",
                  vcardFormattedName: t[0].displayName.toString(),
                  body: t[0].vcard,
                },
                p,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  a,
                ),
                { messageSecret: _, botPersonaId: f },
              )
            : babelHelpers.extends(
                { type: "multi_vcard", vcardList: t },
                p,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  a,
                ),
                { messageSecret: _, botPersonaId: f },
              );
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, g)[1];
        } catch (t) {
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error sending contact: ",
                  "",
                ])),
              t,
            ),
            t
          );
        }
      })();
    }
    l.default = m;
  },
  98,
);
