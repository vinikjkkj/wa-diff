__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebMexCreateInviteCodeJob",
    "WAWebOutContactInviteConfirmDialog.react",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactLoggingUtils",
    "WAWebOutContactServerSentInviteEligibility",
    "WAWebPhoneNumberSearch",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return g(e, t, !0, n);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return g(e, t, !1, n);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = o("WAWebPhoneNumberSearch").stripInvisibleChars(t);
            if (
              !o(
                "WAWebContactlessChatUtils",
              ).PHONE_NUMBER_VALIDATION_REGEX.test(i)
            )
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "sendInvite: invalid phone number format",
                    ])),
                ),
                !1
              );
            var l =
              r &&
              o(
                "WAWebOutContactServerSentInviteEligibility",
              ).isServerSentInviteEligible(i);
            if (
              r &&
              !l &&
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
            )
              return !1;
            if (l) {
              var c = yield o(
                "WAWebOutContactInviteConfirmDialog.react",
              ).waitForOutContactInviteConfirmDialog(a != null ? a : i, i);
              if (!c) return !1;
            }
            var m,
              p = !1,
              _;
            try {
              var f = yield o(
                "WAWebMexCreateInviteCodeJob",
              ).mexCreateInviteCode(i, n.toString(), !1);
              f != null
                ? ((m = o(
                    "WAWebOutContactInviteUtils",
                  ).getInviteMessageTextWithCode(f)),
                  (p = !0))
                : (m = o("WAWebOutContactInviteUtils").getInviteMessageText());
            } catch (e) {
              (o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] MEX invite failed, fallback: ",
                    "",
                  ])),
                e,
              ),
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Could not generate invite link. Sending with default link.",
                    ),
                  }),
                ),
                (_ = String(e)),
                (m = o("WAWebOutContactInviteUtils").getInviteMessageText()));
            }
            (o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
              entryPoint: n,
              inviteCodeError: _,
              validInviteCode: p,
            }),
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
            var g = encodeURIComponent(m),
              h = window.open("sms:+" + i + "?body=" + g);
            return (y(h == null), h != null);
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function C(e, t, n) {
      if (!o("WAWebOutContactInviteGating").isOutContactInviteEnabled())
        return !1;
      var r = e
        .map(function (e) {
          return o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
        })
        .filter(function (e) {
          return o(
            "WAWebContactlessChatUtils",
          ).PHONE_NUMBER_VALIDATION_REGEX.test(e);
        });
      if (r.length === 0) return !1;
      var a = o("WAWebOutContactInviteUtils").getMultiGroupInviteMessageText(),
        i = encodeURIComponent(a),
        l = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId();
      (o("WAWebOutContactLoggingUtils").logMultiGroupInviteContacts({
        entryPoint: n,
        groupJid: t,
        sessionId: l,
        validNumbers: r,
      }),
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
      var s = r
          .map(function (e) {
            return "+" + e;
          })
          .join(","),
        u = window.open("sms://open?addresses=" + s + "&body=" + i);
      return (y(u == null), u != null);
    }
    ((l.sendInvite = m),
      (l.sendDeactivatedUserInvite = _),
      (l.sendMultiGroupInvite = C));
  },
  226,
);
