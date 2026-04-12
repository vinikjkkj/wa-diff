__d(
  "WAWebSubgroupSendRequestModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebConstantsDeprecated",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebGroupJoinModalBase.react",
    "WAWebGroupJoinModalUtils",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebSendTextMsgChatAction",
    "WAWebWamEnumChatFilterActionTypes",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState;
    function _(e) {
      var t = e.requestReason,
        n = e.setRequestReason,
        a = m(null),
        i = s._(/*BTDS*/ "Reason for request").toString(),
        l = function (t) {
          var e = t.text;
          n(e.trim());
        };
      return c.jsx("div", {
        className: "x1h678fw",
        children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
          ref: a,
          placeholder: i,
          value: t,
          showRemaining: !0,
          maxLength: r("WAWebConstantsDeprecated").MAX_TXT_MSG_SIZE,
          onChange: l,
          theme: "request-reason",
          multiline: !0,
          textFormatEnabled: !0,
          selectOnMount: !0,
          maxVisibleLines: 3,
          minVisibleLines: 3,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var a = t.adminContact,
        i = t.participants,
        l = t.source,
        u = t.subgroupInfo,
        d = p(s._(/*BTDS*/ "Can you please add me to the group?").toString()),
        m = d[0],
        f = d[1],
        h = {
          text: s._(/*BTDS*/ "Request will be sent in a chat to {admin-name}", [
            s._param(
              "admin-name",
              c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o("WAWebFrontendContactGetters").getDisplayName(a),
              }),
            ),
          ]),
          isError: !1,
        },
        y = s._(/*BTDS*/ "Send request"),
        C = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                t,
                "subgroupSendRequest",
              ),
              r = n.chat;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatAndSendMsg inside WAWebSubgroupSendRequestModal",
                ])),
            ),
              yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, m, {
                quotedMsgAdminGroupJid: u.id,
                quotedMsgAdminGroupSubject: u.subject,
                quotedMsgAdminParentGroupJid: u.parentGroupId,
              }),
              yield o("WAWebCmd").Cmd.openChatBottom({ chat: r }));
            var a = o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent.inviteModalSourceToSurface(l);
            a &&
              new (o(
                "WAWebCommunityGroupJourneyEventImpl",
              ).CommunityGroupJourneyEvent)({
                action: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
                surface: a,
              }).commit();
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })();
      return c.jsx(r("WAWebGroupJoinModalBase.react"), {
        image: { groupId: u.id },
        title: u.subject,
        subtitle: o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({
          groupMetadata: u,
        }),
        contacts: i,
        description: u.displayedDesc,
        actionText: y,
        onAction: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebModalManager").ModalManager.close(), yield C(a.id));
        }),
        actionDisabled: !m.trim(),
        onCancel: g,
        cancelText: r("WAWebFbtCommon")("Cancel"),
        finePrint: h,
        groupType: u.groupType,
        textInput: c.jsx(_, { requestReason: m, setRequestReason: f }),
        source: l,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = f;
  },
  226,
);
