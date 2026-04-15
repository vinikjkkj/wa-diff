__d(
  "WAWebNewsletterRevokeInvitePopup.react",
  [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterName.react",
    "WAWebParticipantListUtils",
    "WAWebRevokeNewsletterAdminInviteAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = { buttonGroup: { justifyContent: "xl56j7k", $$css: !0 } };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.contact,
            a = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (o("WAWebModalManager").closeModalManager(),
                    yield m({ chat: t, contact: r }));
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          try {
            (yield o(
              "WAWebRevokeNewsletterAdminInviteAction",
            ).revokeNewsletterAdminInviteAction(t, r),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: o("WAWebCommonNewsletterStrings").getInviteRevokedText(),
                }),
              ),
              o("WAWebModalManager").closeModalManager());
          } catch (e) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebNewsletterErrorPopups.react")
                  .NewsletterCouldNotRevokeInvitePopup,
                { onOK: a, contact: r },
              ),
              { transition: "modal-flow" },
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(16),
        r = e.chat,
        a = e.contact,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield m({ chat: r, contact: a });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] !== a
        ? ((c = o("WAWebParticipantListUtils").getFirstNameForContact(a)),
          (t[3] = a),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        p;
      t[5] !== d
        ? ((p = s._(/*BTDS*/ "Revoke the admin invite for {contact-name}?", [
            s._param("contact-name", d),
          ])),
          (t[5] = d),
          (t[6] = p))
        : (p = t[6]);
      var _ = p,
        f;
      t[7] !== d
        ? ((f = s._(
            /*BTDS*/ "If you revoke the invite, {contact-name} won't be able to use it to become an admin of this channel.",
            [s._param("contact-name", d)],
          )),
          (t[7] = d),
          (t[8] = f))
        : (f = t[8]);
      var g = f,
        h;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebCommonNewsletterStrings").getRevokeButtonFullText()),
          (t[9] = h))
        : (h = t[9]);
      var y;
      t[10] !== g
        ? ((y = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            color: "secondary",
            children: g,
          })),
          (t[10] = g),
          (t[11] = y))
        : (y = t[11]);
      var C;
      return (
        t[12] !== l || t[13] !== y || t[14] !== _
          ? ((C = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: _,
              onOK: l,
              onCancel: o("WAWebModalManager").closeModalManager,
              okText: h,
              children: y,
            })),
            (t[12] = l),
            (t[13] = y),
            (t[14] = _),
            (t[15] = C))
          : (C = t[15]),
        C
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.chat,
        r;
      t[0] !== n.id
        ? ((r = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: o("WAWebDetailImage.react").DetailImageSize.Medium,
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            showOutline: !0,
          })),
          (t[0] = n.id),
          (t[1] = r))
        : (r = t[1]);
      var a;
      t[2] !== n
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            as: "h1",
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            children: u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chat: n,
              checkmarkLarge: !0,
            }),
          })),
          (t[2] = n),
          (t[3] = a))
        : (a = t[3]);
      var i;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getChannelAdminInviteText(),
          })),
          (t[4] = i))
        : (i = t[4]);
      var l;
      return (
        t[5] !== r || t[6] !== a
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              marginBottom: 12,
              children: [r, a, i],
            })),
            (t[5] = r),
            (t[6] = a),
            (t[7] = l))
          : (l = t[7]),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(10),
        r = e.chat,
        a = e.contact,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield m({ chat: r, contact: a });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] !== r
        ? ((s = u.jsx(f, { chat: r })), (t[3] = r), (t[4] = s))
        : (s = t[4]);
      var c = s,
        p,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WAWebCommonNewsletterStrings").getRevokeButtonFullText()),
          (_ = [d.buttonGroup, o("WAWebUISpacing").uiPadding.all0]),
          (t[5] = p),
          (t[6] = _))
        : ((p = t[5]), (_ = t[6]));
      var g;
      return (
        t[7] !== l || t[8] !== c
          ? ((g = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: c,
              onOK: l,
              onCancel: o("WAWebModalManager").closeModalManager,
              okText: p,
              buttonGroupStyle: _,
            })),
            (t[7] = l),
            (t[8] = c),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    ((l.NewsletterRevokeInvitePopupWithContactName = _),
      (l.NewsletterRevokeInvitePopupWithNewsletterInformation = g));
  },
  226,
);
