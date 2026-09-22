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
      d,
      m = d || (d = o("react"));
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return h(e, t, !0, n);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return h(e, t, !1, n);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
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
            if (r && l) {
              var s = yield o(
                "WAWebOutContactInviteConfirmDialog.react",
              ).waitForOutContactInviteConfirmDialog(a != null ? a : i, i);
              if (!s) return !1;
            }
            return l ? C(i, n) : R(i, n);
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          try {
            r = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              e,
              t.toString(),
              !0,
            );
          } catch (n) {
            return v(e, t, String(n));
          }
          var a =
              ((n = r) == null ? void 0 : n.errorReason) != null &&
              r.errorReason !== ""
                ? r.errorReason
                : null,
            i = r != null && (r.code == null || r.code === "") && a == null;
          return i
            ? (o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Invite sent"),
                }),
              ),
              o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                entryPoint: t,
                isServerSentInvite: !0,
                validInviteCode: !0,
              }),
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
              !0)
            : v(
                e,
                t,
                a != null
                  ? a
                  : r == null
                    ? "missing server response"
                    : "invite code returned",
              );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] Server-sent invite unsuccessful: ",
                    "",
                  ])),
                n,
              )
              .sendLogs("out-contact-server-sent-invite-failed"),
            o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()
              ? R(e, t, n)
              : (o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not send invite"),
                  }),
                ),
                o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                  entryPoint: t,
                  inviteCodeError: n,
                  isServerSentInvite: !0,
                  validInviteCode: !1,
                }),
                o(
                  "WAWebOutContactInviteJourney",
                ).clearOutContactInviteJourney(),
                !1)
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = !1,
            i = n;
          try {
            var l = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
                e,
                t.toString(),
                !1,
              ),
              u = l == null ? void 0 : l.code;
            u != null
              ? ((r = o(
                  "WAWebOutContactInviteUtils",
                ).getInviteMessageTextWithCode(u)),
                (a = !0))
              : (r = o("WAWebOutContactInviteUtils").getInviteMessageText());
          } catch (e) {
            (o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite] MEX invite failed, fallback: ",
                  "",
                ])),
              e,
            ),
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Could not generate invite link. Sending with default link.",
                  ),
                }),
              ),
              (i = String(e)),
              (r = o("WAWebOutContactInviteUtils").getInviteMessageText()));
          }
          (o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
            entryPoint: t,
            inviteCodeError: i,
            validInviteCode: a,
          }),
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
          var d = encodeURIComponent(r),
            p = window.open("sms:+" + e + "?body=" + d);
          return (E(p == null), p != null);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function k(e, t, n) {
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
      return (E(u == null), u != null);
    }
    ((l.sendInvite = p),
      (l.sendDeactivatedUserInvite = f),
      (l.sendMultiGroupInvite = k));
  },
  226,
);
