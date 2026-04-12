__d(
  "WAWebGroupsV4InviteFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebChatSendMessages",
    "WAWebConfirmPopup.react",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupsV4InviteAddComment.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useRef,
      p = n("$InternalEnum").Mirrored(["Confirm", "AddComment"]);
    function _(t) {
      var a = o("useWAWebFlow").useFlow(p.Confirm),
        i = a[0],
        l = a[1],
        c = r("WAWebGroupMetadataCollection").get(t.groupGid),
        _ = !!(c != null && c.isParentGroup) || !!(c != null && c.isCag),
        f = function (t, n) {
          return (
            n === void 0 && (n = !1),
            n
              ? o("WAWebFrontendContactGetters").getFormattedUser(t)
              : d.jsx(o("WAWebName.react").Name, { contact: t })
          );
        },
        g = function (t, n) {
          if ((n === void 0 && (n = !1), !Array.isArray(t))) return f(t, n);
          var e = t.map(function (e) {
            return f(e, n);
          });
          return r("WAWebFbtIntlList")(
            e,
            r("WAWebFbtIntlList").CONJUNCTIONS.AND,
            r("WAWebFbtIntlList").DELIMITERS.COMMA,
          );
        },
        h = m(!1),
        y = function () {
          h.current || ((h.current = !0), t.onFinish == null || t.onFinish());
        },
        C = g(
          t.participantNeedInvite.map(function (e) {
            return e.contact;
          }),
          !0,
        ),
        b = s._(
          /*BTDS*/ '_j{"*":"Couldn\'t add {member}. You can invite them privately to join this group."}',
          [s._plural(t.participantNeedInvite.length), s._param("member", C)],
        ),
        v = s._(
          /*BTDS*/ '_j{"*":"Couldn\'t add {member}. You can invite them privately to join this community."}',
          [s._plural(t.participantNeedInvite.length), s._param("member", C)],
        ),
        S = _ ? v : b,
        R = function (i, l) {
          (i === void 0 && (i = ""),
            o("WAWebModalManager").ModalManager.close(),
            y(),
            (u || (u = n("Promise")))
              .all(
                t.participantNeedInvite.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e.contact,
                          a = e.invite_code,
                          s = e.invite_code_exp,
                          u = yield o(
                            "WAWebFindChatAction",
                          ).findOrCreateLatestChat(n.id, "groupsV4InviteFlow"),
                          c = u.chat,
                          d = t.groupGid.toString(),
                          m = r("WAWebGroupMetadataCollection").assertGet(d),
                          p = yield o(
                            "WAWebChatSendMessages",
                          ).sendGroupInviteMessage(
                            c,
                            d,
                            t.subject,
                            a || "",
                            s,
                            i,
                            l,
                          );
                        return p.messageSendResult ===
                          o("WAWebSendMsgResultAction").SendMsgResult.OK
                          ? (m.pendingParticipants.add({ id: n.id }), !0)
                          : !1;
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              )
              .then(function (e) {
                var t = r("countWhere")(e, Boolean);
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ '_j{"*":"{num} invites sent","_1":"1 invite sent"}',
                      [s._plural(t, "num")],
                    ),
                  }),
                );
              })
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[error] handleSendInvite",
                      ])),
                  )
                  .sendLogs("groups-v4-invite-send-failed");
              }));
        },
        L = s._(/*BTDS*/ "Invite to group"),
        E = s._(/*BTDS*/ "Invite to community"),
        k = _ ? E : L;
      if (l.step == null) return null;
      var I = null;
      switch (l.step) {
        case p.Confirm:
          I = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-invite-flow",
            },
            onOK: function () {
              return l.push(p.AddComment);
            },
            okText: k,
            onCancel: function () {
              (l.pop(), y());
            },
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: S,
          });
          break;
        case p.AddComment:
          I = d.jsx(r("WAWebGroupsV4InviteAddComment.react"), {
            participants: t.participantNeedInvite,
            gid: t.groupGid,
            subject: t.subject,
            groupDesc: t.groupDesc,
            onClose: function () {
              (l.pop(), y());
            },
            onSend: R,
          });
      }
      return d.jsx(i, { flow: l, children: I });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
