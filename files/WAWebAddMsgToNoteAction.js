__d(
  "WAWebAddMsgToNoteAction",
  [
    "fbt",
    "invariant",
    "WAJids",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMobilePlatforms",
    "WAWebNoteAction",
    "WAWebNotesLogEvents",
    "WAWebNotesUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = { type: "error-other", loggingInfo: { action_status: "ERROR" } };
    async function g(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Adding text to note."),
        ),
        n = h(e).then(function (t) {
          var n = o("WAWebFrontendMsgGetters").getChat(e),
            r = n.contact;
          return t.type === "success"
            ? (o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(
                r,
                t.loggingInfo,
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Added text to note."),
                {
                  actionText: s._(/*BTDS*/ "View"),
                  actionHandler: function () {
                    return new Promise(function () {
                      (o(
                        "WAWebNotesLogEvents",
                      ).logViewInAddMsgToNoteToastClicked(r),
                        o("WAWebCmd").Cmd.openProfile(n));
                    });
                  },
                },
              ))
            : t.type === "error-too-long"
              ? (o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(
                  r,
                  t.loggingInfo,
                ),
                new (o("WAWebActionToast.react").ActionType)(
                  s._(
                    /*BTDS*/ "Can't add text to note: character limit exceeded.",
                  ),
                ))
              : (o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(
                  r,
                  t.loggingInfo,
                ),
                new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Failed to add text to note."),
                ));
        });
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: t,
          pendingAction: n,
        }),
      );
    }
    async function h(t) {
      var n, r;
      o("WAWebMobilePlatforms").isSMB() || u(0, 78461);
      var a = o("WAWebFrontendMsgGetters").getChat(t);
      if (a == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "addMsgToNoteAction: msg has null chat",
              ])),
          ),
          f
        );
      var i = o("WAJids").validateChatJid(
        (n = (r = a.id) == null ? void 0 : r.toJid()) != null ? n : "",
      );
      if (i == null)
        return (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "addMsgToNoteAction: invalid chatJid",
              ])),
          ),
          f
        );
      var l = o("WAWebFrontendMsgGetters").getText(t);
      if (l == null)
        return (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "addMsgToNoteAction: msg is empty",
              ])),
          ),
          f
        );
      try {
        var s,
          p = await o("WAWebNoteAction").retrieveOnlyNoteForChatJid(i),
          _ = (s = p == null ? void 0 : p.content) != null ? s : "",
          g =
            p == null || _.trim() === ""
              ? l
              : _ +
                `

` +
                l;
        if (g.length > o("WAWebNotesUtils").MAX_NOTE_LENGTH)
          return {
            type: "error-too-long",
            loggingInfo: {
              action_status: "ERROR",
              content_existed: _ !== "",
              previous_length: _.length,
            },
          };
        var h =
          p == null
            ? {
                actionType: "add",
                noteType: "unstructured",
                chatJid: i,
                content: g,
              }
            : {
                actionType: "edit",
                id: p.id,
                noteType: p.type,
                chatJid: i,
                content: g,
                createdAt: p.createdAt,
              };
        return (
          await o("WAWebNoteAction").addOrEditNoteAction(h, !0),
          {
            type: "success",
            loggingInfo: {
              action_status: "SUCCESS",
              content_existed: _ !== "",
              previous_length: _.length,
              has_content: !0,
              length: g.length,
            },
          }
        );
      } catch (e) {
        return (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "addMsgToNoteAction: failed to add msg to note: ",
                "",
              ])),
            e,
          ),
          f
        );
      }
    }
    l.default = g;
  },
  226,
);
