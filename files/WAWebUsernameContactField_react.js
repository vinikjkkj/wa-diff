__d(
  "WAWebUsernameContactField.react",
  [
    "fbt",
    "WALogger",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactLogging",
    "WAWebContactSyncLogger",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebQueryExistsJob",
    "WAWebRichTextField.react",
    "WAWebUsernameUtils",
    "WAWebUsernameValidationUtils",
    "WAWebWidFactory",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        iconSection: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          justifyContent: "x1nhvcw1",
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          $$css: !0,
        },
        marginTop28: { marginTop: "xevwqry", $$css: !0 },
        marginStart12: { marginInlineStart: "x1uvdrpn", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function p(t) {
      var a = t.contactLid,
        i = t.onInvalidUsername,
        l = t.origin,
        u = t.setContactLid,
        p = t.setUsernameInput,
        _ = t.setUsernameState,
        f = t.usernameInput,
        g = t.usernameState,
        h = d(!1),
        y = h[0],
        C = h[1],
        b = r("useLazyRef")(function () {
          return new AbortController();
        }),
        v = s._(/*BTDS*/ "Username"),
        S = function (t) {
          p(t);
          var e = o("WAWebUsernameValidationUtils").validateUsernameLocally(t),
            n = e.isValid;
          if (t.length < 3 || !n) {
            _(null);
            return;
          }
          (b.current.abort(),
            (b.current = new AbortController()),
            C(!0),
            _(null));
          var r = b.current.signal;
          window.setTimeout(function () {
            return void R(t, r);
          }, 750);
        },
        R = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if ((r("isStringNullOrEmpty")(e) && C(!1), t.aborted)) {
                C(!1);
                return;
              }
              var n = yield o("WAWebQueryExistsJob").queryUsernameExists(
                e,
                null,
                o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE,
              );
              if (n != null && n.wid) {
                var a = o("WAWebContactCollection").ContactCollection.get(
                    n.wid,
                  ),
                  l =
                    a != null &&
                    o("WAWebFrontendContactGetters").getIsMyContact(a);
                (_(l ? "already-contact" : "exists"),
                  u(o("WAWebWidFactory").asUserLidOrThrow(n.wid)));
              } else
                n != null && n.keyRequired
                  ? _("key-required")
                  : (_("does-not-exist"), i());
              C(!1);
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        L = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (a) {
              var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                  a,
                  "createContact",
                ),
                n = t.chat;
              (yield o("WAWebCmd").Cmd.openChatAt({
                chat: n,
                msgContext: null,
              }),
                o("WAWebCmd").Cmd.chatInfoDrawer(n, {
                  showFullGroupDescription: !1,
                  scrollToParticipantList: !1,
                }));
            } else
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[UsernameContactField] view contact: no LID",
                    ])),
                )
                .sendLogs("view-existing-contact-no-lid-found", {
                  sampling: 0.01,
                });
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        E = o("WAWebUsernameUtils").usernameInputStateIsValid(g),
        k = f != null && E,
        I = s._(/*BTDS*/ "This username is not on WhatsApp."),
        T = s._(/*BTDS*/ "This username is on WhatsApp."),
        D = s._(/*BTDS*/ "This person is already in your contacts."),
        x = c.jsx(r("WAWebClickableLink.react"), {
          onClick: L,
          children: c.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentActionEmphasized",
            textAlign: "start",
            children: s._(/*BTDS*/ "View contact"),
          }),
        }),
        $ =
          g === "already-contact" &&
          l === o("WAWebContactLogging").ContactSourceType.NewChat,
        P = !y && E,
        N;
      return (
        P ? (N = $ ? D : T) : !y && g === "does-not-exist" && (N = I),
        c.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: m.paddingHoriz24,
          children: [
            c.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: m.iconSection,
              children: c.jsx(
                o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
                { width: 26, height: 26, xstyle: m.marginTop28 },
              ),
            }),
            c.jsxs(o("WAWebFlex.react").FlexItem, {
              xstyle: m.marginStart12,
              grow: 1,
              shrink: 1,
              children: [
                c.jsx(o("WAWebRichTextField.react").RichTextField, {
                  pending: y,
                  onChange: function (t) {
                    var e = t.text;
                    S(e);
                  },
                  theme: "text-input",
                  focusOnMount: !0,
                  value: f,
                  placeholder: v,
                  maxLength: 30,
                  showRemaining: !0,
                  charLimit: 4,
                  spellCheck: !1,
                  showValidateIcon: y || k,
                  showSuccessIcon: k,
                  contextMsg: N,
                }),
                P && $ ? x : null,
              ],
            }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
