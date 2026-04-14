__d(
  "WAWebDeleteRevokeMsgFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAArrayUtils",
    "WATimeUtils",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebCheckBox.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDeleteNewsletterMsgModal.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEnforcementActionLogging",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebRevokeMetricUtils",
    "WDSButtonGroup.react",
    "react",
    "useWAWebFlow",
    "useWAWebListener",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = n("$InternalEnum").Mirrored(["DeleteRevoke", "RevokeConfirm"]);
    function p(e) {
      var t = e.chat,
        n = e.chats,
        a = e.commentList,
        i = e.fromChannelAlerts,
        l = e.isMsgVisible,
        s = e.msgList,
        u = e.onDelete,
        c = e.onEnd,
        p = e.theme,
        f = e.toastPosition,
        g = o("useWAWebFlow").useFlow(m.DeleteRevoke),
        b = g[0],
        v = g[1],
        S = r("useWAWebToggle")(!0),
        R = S[0],
        L = S[1],
        E = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        k;
      (a != null && a.length > 0 ? (k = _(a)) : (k = _(s)),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          function () {
            r("WAWebEnforcementActionLogging").logDismissModalClick();
          },
        ));
      var I = o("WAArrayUtils").groupBy(s, function (e) {
          return o("WAWebFrontendMsgGetters").getChat(e);
        }),
        T = o("WAArrayUtils").groupBy(a != null ? a : [], function (e) {
          return o("WAWebFrontendMsgGetters").getChat(e);
        }),
        D = (n != null ? n : [t]).filter(Boolean),
        x = D.some(function (e) {
          return e != null ? o("WAWebChatGetters").getIsNewsletter(e) : !1;
        }),
        $ = function () {
          (I.forEach(function (e, t) {
            if (e.length > 0) {
              var n;
              o("WAWebCmd").Cmd.sendDeleteMsgs(
                t,
                { type: "message", list: e },
                R,
                null,
                f,
                p,
              );
              var r = (n = E.existsDrawer()) != null ? n : !1;
              r &&
                l &&
                e.forEach(function (e) {
                  l(e.id, !0) &&
                    o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                });
            }
          }),
            T.forEach(function (e, t) {
              e != null &&
                e.length > 0 &&
                o("WAWebCmd").Cmd.sendDeleteMsgs(
                  t,
                  { type: "addon", list: e },
                  R,
                  null,
                  f,
                  p,
                );
            }),
            u == null || u(),
            c == null || c(),
            v.end());
        },
        P = function () {
          (r("WAWebEnforcementActionLogging").isSessionStarted() &&
            r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick(),
            I.forEach(function (e, t) {
              (k.admin > 0 &&
                o(
                  "WAWebRevokeMetricUtils",
                ).UiRevokeActionHelper.revokeConfirmed(),
                e.length > 0 &&
                  o("WAWebCmd").Cmd.sendRevokeMsgs(
                    t,
                    { type: "message", list: e },
                    { clearMedia: R, toastPosition: f },
                  ));
            }),
            T.forEach(function (e, t) {
              e != null &&
                e.length > 0 &&
                o("WAWebCmd").Cmd.sendRevokeMsgs(
                  t,
                  { type: "addon", list: e },
                  { clearMedia: R, toastPosition: f },
                );
            }),
            c == null || c(),
            v.end());
        },
        N = function () {
          (k.admin === 0 && k.sender > 0
            ? o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke()
            : k.admin > 0 && k.sender === 0
              ? o("WAWebRevokeMetricUtils").UiRevokeActionHelper.adminRevoke()
              : o(
                  "WAWebRevokeMetricUtils",
                ).UiRevokeActionHelper.adminAndSenderRevoke(),
            k.admin > 0 && !x ? v.push(m.RevokeConfirm) : P());
        },
        M = function () {
          (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(),
            v.end());
        };
      if (v.step) {
        var w =
            a != null && a.length > 0
              ? d.jsx(h, {
                  commentList: a,
                  revokable: k,
                  onDelete: $,
                  onRevoke: N,
                  onCancel: v.end,
                  theme: p,
                })
              : d.jsx(y, {
                  msgList: s,
                  revokable: k,
                  clearMedia: R,
                  onDelete: $,
                  onRevoke: N,
                  onCancel: v.end,
                  onToggleClearMedia: L,
                  theme: p,
                }),
          A;
        switch (v.step) {
          case m.DeleteRevoke:
            A = x
              ? d.jsx(r("WAWebDeleteNewsletterMsgModal.react"), {
                  msgList: s,
                  onRevoke: N,
                  onCancel: v.end,
                  fromChannelAlerts: i,
                })
              : w;
            break;
          case m.RevokeConfirm: {
            var F;
            a != null && a.length > 0
              ? (F = a.filter(function (e) {
                  return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
                })[0])
              : (F = s.filter(function (e) {
                  return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
                })[0]);
            var O = o("WAWebMsgGetters").getSender(F);
            if (O == null) return;
            var B = o("WAWebContactCollection").ContactCollection.assertGet(O);
            A = d.jsx(C, {
              onConfirm: P,
              onCancel: function () {
                return v.pop();
              },
              contact: B,
            });
            break;
          }
        }
        return d.jsx(b, { requestDismiss: M, flow: v, children: A });
      }
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return e.reduce(
        function (e, t) {
          var n = o("WAWebMsgActionCapability").canSenderRevokeMsg(t),
            r = o("WAWebMsgActionCapability").canAdminRevokeMsg(t),
            a = o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(
              t,
            ),
            i = e.sender + (n || a ? 1 : 0),
            l = e.admin + (r && !a ? 1 : 0),
            s = n || r || a,
            u = e.canRevoke && s && l <= 1,
            c = [].concat(e.revokeDurations, [
              o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t),
            ]);
          return { sender: i, admin: l, canRevoke: u, revokeDurations: c };
        },
        { sender: 0, admin: 0, canRevoke: !0, revokeDurations: [] },
      );
    }
    var f = function (t, n) {
        var e;
        if (t.canRevoke && t.admin > 0) {
          var r = n.filter(function (e) {
              return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
            })[0],
            a = o("WAWebMsgGetters").getSender(r);
          if (a == null) return;
          var i = o("WAWebContactCollection").ContactCollection.assertGet(a);
          e = s._(/*BTDS*/ "Delete message from {name}?", [
            s._param(
              "name",
              d.jsx(o("WAWebName.react").ContactName, { contact: i }),
            ),
          ]);
        } else
          e = s._(
            /*BTDS*/ '_j{"*":"Delete messages?","_1":"Delete message?"}',
            [s._plural(n.length)],
          );
        return e;
      },
      g = function (t, n, a, i, l) {
        var e = null,
          u = null,
          c = l === "mediaHub" ? "negative-destructive" : "primary",
          m = d.jsx(
            o("WAWebButton.react").Button,
            {
              testid: void 0,
              type: t.canRevoke ? "secondary" : c,
              onClick: n,
              children: s._(/*BTDS*/ "Delete for me"),
            },
            2,
          ),
          p = d.jsx(
            o("WAWebButton.react").Button,
            { type: "secondary", onClick: a, children: s._(/*BTDS*/ "Cancel") },
            0,
          );
        return (
          t.canRevoke &&
            (e = d.jsx(
              o("WAWebButton.react").Button,
              {
                testid: void 0,
                type: "secondary",
                onClick: i,
                children: s._(/*BTDS*/ "Delete for everyone"),
              },
              1,
            )),
          e
            ? (u = d.jsxs(o("WAWebButton.react").ButtonGroup, {
                direction: "vertical",
                align: "end",
                children: [e, m, p],
              }))
            : l !== "mediaHub"
              ? (u = d.jsx(r("WDSButtonGroup.react"), {
                  orientation: "horizontal",
                  width: "hug",
                  tertiaryButtonProps: {
                    variant: "borderless",
                    type: "default",
                    onPress: a,
                    label: s._(/*BTDS*/ "Cancel"),
                  },
                  primaryButtonProps: {
                    variant: "filled",
                    type: "default",
                    onPress: n,
                    testid: "popup-controls-delete",
                    label: s._(/*BTDS*/ "Delete for me"),
                  },
                }))
              : (u = d.jsxs(o("WAWebButton.react").ButtonGroup, {
                  direction: "horizontal",
                  children: [p, m],
                })),
          u
        );
      };
    function h(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.commentList,
        i = r.onCancel,
        l = r.onDelete,
        s = r.onRevoke,
        u = r.revokable,
        c = r.theme,
        m = f(u, a),
        p = g(u, l, i, s, c),
        _ = { escape: i };
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: n,
        handlers: _,
        children: d.jsx(o("WAWebModal.react").Modal, {
          actions: p,
          title: m,
          tsNavigationData: {
            surface: "delete-message",
            viewName: "delete-revoke-msg",
          },
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        r = n.clearMedia,
        a = n.msgList,
        i = n.onCancel,
        l = n.onDelete,
        c = n.onRevoke,
        m = n.onToggleClearMedia,
        p = n.revokable,
        _ = n.theme,
        f,
        h = function () {
          m();
        };
      if (
        a.some(function (e) {
          return (
            o("WAWebFrontendMsgGetters").getAsMms(e) &&
            e.type !== o("WAWebMsgType").MSG_TYPE.STICKER
          );
        })
      ) {
        var y = s._(/*BTDS*/ "Delete file from your phone");
        f = d.jsxs(
          "div",
          {
            className: "x78zum5 x1f6kntn xo5v014 x14z9mp x14vqqas x18d9i69",
            children: [
              d.jsx("div", {
                "data-testid": void 0,
                className:
                  "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x1sa5p1d x1uuroth x19991ni x1d8287x xwji4o3",
                children: d.jsx(o("WAWebCheckBox.react").CheckBox, {
                  ariaLabel: y,
                  onChange: h,
                  checked: r,
                }),
              }),
              d.jsx("div", {
                className:
                  "x1iyjqo2 xs83m0k xdl72j9 xc26acl x19991ni x1d8287x xwji4o3",
                onClick: h,
                children: y,
              }),
            ],
          },
          0,
        );
      }
      var C;
      if (p.canRevoke && p.admin > 0) {
        var b = a.filter(function (e) {
            return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
          })[0],
          v = o("WAWebMsgGetters").getSender(b);
        if (v == null) return;
        var S = o("WAWebContactCollection").ContactCollection.assertGet(v);
        C = s._(/*BTDS*/ "Delete message from {name}?", [
          s._param(
            "name",
            d.jsx(o("WAWebName.react").ContactName, { contact: S }),
          ),
        ]);
      } else
        a.length === 1 &&
        o("WAWebMsgGetters").getIsEdited(a[0]) &&
        o("WAWebMsgGetters").getIsFailed(a[0])
          ? (C = s._(
              /*BTDS*/ "Your edited message was not sent. You can always delete the message.",
            ))
          : (C = s._(
              /*BTDS*/ '_j{"*":"Delete messages?","_1":"Delete message?"}',
              [s._plural(a.length)],
            ));
      var R = g(p, l, i, c, _),
        L = { escape: i };
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: t,
        handlers: L,
        children: d.jsx(o("WAWebModal.react").Modal, {
          actions: R,
          title: C,
          tsNavigationData: {
            surface: "delete-message",
            viewName: "delete-revoke-msg",
          },
          children: f,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.contact,
        n = e.onCancel,
        r = e.onConfirm,
        a = e.ref;
      return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "delete-message",
          viewName: "revoke-confirm",
        },
        ref: a,
        okText: s._(/*BTDS*/ "Delete for everyone"),
        onOK: r,
        okButtonType: "solid-warning",
        cancelText: s._(/*BTDS*/ "Cancel"),
        onCancel: n,
        children: s._(
          /*BTDS*/ "As an admin, you are deleting {name}'s message for everyone in this chat. They will see that you deleted the message.",
          [
            s._param(
              "name",
              d.jsx(o("WAWebName.react").ContactName, { contact: t }),
            ),
          ],
        ),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
