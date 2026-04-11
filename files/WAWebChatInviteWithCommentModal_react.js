__d(
  "WAWebChatInviteWithCommentModal.react",
  [
    "fbt",
    "Promise",
    "WAWebCellFrame.react",
    "WAWebChatParticipantList.react",
    "WAWebConstantsDeprecated",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebPonyfillsFetch",
    "WAWebProfilePicThumbCollection",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = {
        onSendInvite: {
          position: "x10l6tqk",
          insetInlineEnd: "x145d82y",
          left: null,
          right: null,
          bottom: "xn0vg7t",
          zIndex: "xhtitgo",
          textAlign: "x2b8uid",
          $$css: !0,
        },
      };
    function g(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = l.onClose,
        m = l.onSend,
        g = l.wid,
        h = p(null),
        y = p(null),
        C = _(l.initialInviteComment.toString()),
        b = C[0],
        v = C[1],
        S = function () {
          c();
        },
        R = function () {
          var e = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.get(g);
          return new (u || (u = n("Promise")))(function (t) {
            if (!e || !e.img) {
              t(void 0);
              return;
            }
            r("WAWebPonyfillsFetch")(e.img)
              .then(function (e) {
                if (!e.ok) {
                  t(void 0);
                  return;
                }
                return e.blob();
              })
              .then(function (e) {
                if (e) {
                  var n = new FileReader();
                  ((n.onloadend = function () {
                    var e = n.result;
                    if (e == null) {
                      t(void 0);
                      return;
                    }
                    var r = e.toString().split(",")[1];
                    t(r);
                  }),
                    n.readAsDataURL(e));
                }
              })
              .catch(function () {
                return t(void 0);
              });
          });
        },
        L = function () {
          R().then(function (e) {
            m(b, e);
          });
        },
        E = function (t) {
          var e = t.text;
          v(e);
        },
        k = d.jsx(o("WAWebRound.react").Round, {
          testid: void 0,
          large: !0,
          onClick: L,
          label: r("WAWebFbtCommon")("Next"),
          children: d.jsx(
            o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
            { directional: !0 },
          ),
        }),
        I = d.jsx(o("WAWebDetailImage.react").DetailImage, { id: l.wid }),
        T = d.jsx(o("WAWebEmojiText.react").EmojiText, { text: l.chatName });
      return d.jsx(o("WAWebModal.react").Modal, {
        ref: i,
        type: o("WAWebModal.react").ModalTheme.Invite,
        testid: void 0,
        children: d.jsxs(r("WAWebDrawer.react"), {
          theme: "invite",
          tsNavigationData: {
            surface: "unknown",
            viewName: "chat-invite-with-comment",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              title:
                (a = l.customTitle) != null
                  ? a
                  : s._(/*BTDS*/ "Send invite to..."),
              onCancel: S,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                l.customHeader,
                l.hideParticipantList === !0
                  ? null
                  : d.jsx("div", {
                      className:
                        "xkgu5aw xyamay9 xgws4yx xxbrewl xzm8p2n x1odjw0f x1280gxy xso031l x1q0q8m5 x120ee7l",
                      children: d.jsx("div", {
                        "data-list-scroll-container": !0,
                        children: d.jsx(r("WAWebChatParticipantList.react"), {
                          ref: h,
                          theme: "list-names",
                          contacts: l.invitees,
                        }),
                      }),
                    }),
                d.jsx("div", {
                  className: "xdx6fka xvtqlqk x1p57kb1",
                  children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    ref: y,
                    value: b,
                    showRemaining: !0,
                    maxLength: r("WAWebConstantsDeprecated").MAX_CAPTION_LENGTH,
                    onChange: E,
                    theme: "invite-message-caption",
                    emojiBtnPosition: "side",
                    textFormatEnabled: !0,
                  }),
                }),
                d.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "btn",
                  xstyle: f.onSendInvite,
                  children: k,
                }),
                d.jsx("div", {
                  className: "x10l6tqk x1ey2m1c xvue9z x1od0jb8",
                  children: d.jsx(r("WAWebCellFrame.react"), {
                    idle: !0,
                    image: I,
                    primary: T,
                    secondary: l.chatNameSubtitle,
                    theme: "groups_v4_invite",
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
