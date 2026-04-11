__d(
  "WAWebAddMsgToNoteAction",
  [
    "fbt",
    "invariant",
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBizGatingUtils",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebNoteAction",
    "WAWebNotesLogEvents",
    "WAWebNotesUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = { type: "error-other", loggingInfo: { action_status: "ERROR" } };
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Adding text to note."),
            ),
            r = C(e).then(function (t) {
              var r = o("WAWebFrontendMsgGetters").getChat(e),
                a = r.contact;
              return t.type === "success"
                ? (o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(
                    a,
                    t.loggingInfo,
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Added text to note."),
                    {
                      actionText: s._(/*BTDS*/ "View"),
                      actionHandler: function () {
                        return new (p || (p = n("Promise")))(function () {
                          (o(
                            "WAWebNotesLogEvents",
                          ).logViewInAddMsgToNoteToastClicked(a),
                            o("WAWebCmd").Cmd.openProfile(r));
                        });
                      },
                    },
                  ))
                : t.type === "error-too-long"
                  ? (o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(
                      a,
                      t.loggingInfo,
                    ),
                    new (o("WAWebActionToast.react").ActionType)(
                      s._(
                        /*BTDS*/ "Can't add text to note: character limit exceeded.",
                      ),
                    ))
                  : (o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(
                      a,
                      t.loggingInfo,
                    ),
                    new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "Failed to add text to note."),
                    ));
            });
          o("WAWebToastManager").ToastManager.open(
            f.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: t,
              pendingAction: r,
            }),
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n, r;
          o("WAWebBizGatingUtils").smbNotesV1Enabled() || u(0, 78461);
          var a = o("WAWebFrontendMsgGetters").getChat(t);
          if (a == null)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "addMsgToNoteAction: msg has null chat",
                  ])),
              ),
              g
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
              g
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
              g
            );
          try {
            var s,
              p = yield o("WAWebNoteAction").retrieveOnlyNoteForChatJid(i),
              _ = (s = p == null ? void 0 : p.content) != null ? s : "",
              f = p == null || _.trim() === "" ? l : _ + "\n\n" + l;
            if (f.length > o("WAWebNotesUtils").MAX_NOTE_LENGTH)
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
                    content: f,
                  }
                : {
                    actionType: "edit",
                    id: p.id,
                    noteType: p.type,
                    chatJid: i,
                    content: f,
                    createdAt: p.createdAt,
                  };
            return (
              yield o("WAWebNoteAction").addOrEditNoteAction(h, !0),
              {
                type: "success",
                loggingInfo: {
                  action_status: "SUCCESS",
                  content_existed: _ !== "",
                  previous_length: _.length,
                  has_content: !0,
                  length: f.length,
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
              g
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    l.default = h;
  },
  226,
);
