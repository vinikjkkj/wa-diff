__d(
  "WAWebAddContactToGroupFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebGroupsModal.react",
    "WAWebLidMigrationUtils",
    "WAWebModifyParticipantsGroupAction",
    "WAWebNoop",
    "fbs",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = n("$InternalEnum").Mirrored(["SelectGroup", "Confirm"]);
    function _(e) {
      var t = e.contact,
        n = o("useWAWebFlow").useFlow(p.SelectGroup),
        a = n[0],
        i = n[1],
        l = m(),
        c = l[0],
        _ = l[1],
        f = function (n) {
          var e = n.groupMetadata;
          if (
            !o("WAWebContactGetters").getIsGroup(n) ||
            (o("WAWebContactGetters").getIsGroup(n) &&
              !(e != null && e.participants.iAmMember()))
          )
            return !1;
          var a =
            (e == null ? void 0 : e.isLidAddressingMode) === !0
              ? o("WAWebLidMigrationUtils").toLid(t.id)
              : o("WAWebLidMigrationUtils").toPn(t.id);
          return a != null && e != null && e.participants.get(a)
            ? s._(/*BTDS*/ "Already added to group").toString()
            : e != null && e.participants.iAmAdmin()
              ? !0
              : r("fbs")._(/*BTDS*/ "You are not an admin").toString();
        },
        g = function (n) {
          (o("WAWebModifyParticipantsGroupAction")
            .addParticipants(n, [t])
            .then(function () {
              o("WAWebCmd")
                .Cmd.openChatFromUnread({ chat: n })
                .then(function (e) {
                  e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
                });
            })
            .catch(r("WAWebNoop")),
            i.end());
        },
        h = d(null),
        y = function () {
          if (h.current) {
            var e = h.current;
            !e ||
              e.contains(document.activeElement) ||
              r("WAWebFocusTracer").focus(e);
          }
        },
        C = function (t) {
          (y(), _(t), i.push(p.Confirm));
        };
      if (i.step == null) return null;
      var b = null;
      switch (i.step) {
        case p.SelectGroup:
          b = u.jsx(r("WAWebGroupsModal.react"), {
            chats: o("WAWebChatCollection").ChatCollection.filter(function (e) {
              return o("WAWebContactGetters").getIsGroup(e);
            }),
            filter: f,
            onCancel: function () {
              return i.pop();
            },
            onGroup: C,
          });
          break;
        case p.Confirm:
          b = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "add-contact-to-group",
            },
            cancelText: s._(/*BTDS*/ "Cancel"),
            okText: s._(/*BTDS*/ "Add member"),
            onOK: function () {
              return g(r("WANullthrows")(c));
            },
            onCancel: function () {
              return i.pop();
            },
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: s._(/*BTDS*/ 'Add {participant} to "{subject}" group?', [
                s._param(
                  "participant",
                  o("WAWebFrontendContactGetters").getFormattedName(t),
                ),
                s._param("subject", r("WANullthrows")(c).contact.name),
              ]),
            }),
          });
          break;
      }
      return u.jsx(a, { ref: h, flow: i, children: b });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
