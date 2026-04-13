__d(
  "WAWebNewsletterAcceptAdminInviteModal.react",
  [
    "fbt",
    "WAWeb-moment",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterAcceptAdminInviteAction",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterModalsUtils.react",
    "WAWebNewsletterName.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        expirationDate: { textAlign: "x2b8uid", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
      },
      m = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebModalManager").ModalManager.close(), yield p(e));
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      p = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (yield o(
              "WAWebNewsletterAcceptAdminInviteAction",
            ).acceptNewsletterAdminInviteAction(e.id),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: o(
                    "WAWebCommonNewsletterStrings",
                  ).getYouAreNowAnAdminText(),
                }),
              ),
              o("WAWebModalManager").ModalManager.close());
          } catch (t) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebNewsletterErrorPopups.react")
                  .NewsletterCouldNotAcceptInvitePopup,
                {
                  onOK: function () {
                    return m(e);
                  },
                  error: r("getErrorSafe")(t),
                },
              ),
              { transition: "modal-flow" },
            );
          }
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    function _(e) {
      var t = o("react-compiler-runtime").c(20),
        r = e.chat,
        a = e.expiration,
        i = e.extendedNux,
        l;
      t[0] !== r
        ? ((l = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield p(r);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = r),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        c;
      t[2] !== r
        ? ((c = function () {
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebCmd").Cmd.openChatBottom({
                chat: r,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterAdminInviteAcceptModal,
              }));
          }),
          (t[2] = r),
          (t[3] = c))
        : (c = t[3]);
      var m = c,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = h.acceptInvite()), (t[4] = _))
        : (_ = t[4]);
      var y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = h.closeModal()), (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== r
        ? ((C = u.jsx(f, { chat: r })), (t[6] = r), (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== i
        ? ((b = u.jsx(g, { extendedNux: i })), (t[8] = i), (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] !== a
        ? ((v = h.expiration(a)), (t[10] = a), (t[11] = v))
        : (v = t[11]);
      var S;
      t[12] !== v
        ? ((S = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            marginTop: 20,
            xstyle: d.expirationDate,
            children: v,
          })),
          (t[12] = v),
          (t[13] = S))
        : (S = t[13]);
      var R;
      return (
        t[14] !== m || t[15] !== s || t[16] !== C || t[17] !== b || t[18] !== S
          ? ((R = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okText: _,
              onOK: s,
              cancelText: y,
              onCancel: m,
              children: [C, b, S],
            })),
            (t[14] = m),
            (t[15] = s),
            (t[16] = C),
            (t[17] = b),
            (t[18] = S),
            (t[19] = R))
          : (R = t[19]),
        R
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
            xstyle: d.marginBottom12,
          })),
          (t[0] = n.id),
          (t[1] = r))
        : (r = t[1]);
      var a;
      t[2] !== n
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            as: "h1",
            xstyle: d.marginBottom12,
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
            children: h.subtitle(),
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
      var t = o("react-compiler-runtime").c(1),
        n = e.extendedNux;
      if (!n) return null;
      var r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              children: u.jsx(
                o("WAWebNewsletterModalsUtils.react").BulletPointList,
                {
                  bullets: o("WAWebNewsletterModalsUtils.react")
                    .ExtendedBullets,
                },
              ),
            })),
            (t[0] = r))
          : (r = t[0]),
        r
      );
    }
    var h = {
      acceptInvite: function () {
        return s._(/*BTDS*/ "Accept invite");
      },
      closeModal: function () {
        return s._(/*BTDS*/ "View channel");
      },
      expiration: function (t) {
        var e = r("WAWeb-moment").utc(t * 1e3),
          n = e.diff(r("WAWeb-moment")().utc(), "days");
        return n < 0
          ? s._(/*BTDS*/ "Expired")
          : s._(
              /*BTDS*/ '_j{"*":"Expires in {number} days","_1":"Expires in 1 day"}',
              [s._plural(n, "number")],
            );
      },
      subtitle: function () {
        return s._(/*BTDS*/ "Channel admin invite");
      },
    };
    l.default = _;
  },
  226,
);
