__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebMexCreateInviteCodeJob",
    "WAWebMexGroupStoreAndSendInviteSmsJob",
    "WAWebOutContactInviteConfirmDialog.react",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactLoggingUtils",
    "WAWebOutContactServerSentInviteEligibility",
    "WAWebPhoneNumberSearch",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return y(e, t, !0, n, r);
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return y(e, t, !1, n);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
            if (
              !o(
                "WAWebContactlessChatUtils",
              ).PHONE_NUMBER_VALIDATION_REGEX.test(i)
            )
              return (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "sendInvite: invalid phone number format",
                    ])),
                ),
                !1
              );
            var l =
              n &&
              o(
                "WAWebOutContactServerSentInviteEligibility",
              ).isServerSentInviteEligible(i);
            if (
              n &&
              !l &&
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
            )
              return !1;
            if (n && l) {
              var s = yield o(
                "WAWebOutContactInviteConfirmDialog.react",
              ).waitForOutContactInviteConfirmDialog(r != null ? r : i, i);
              if (!s) return !1;
            }
            return (a == null || a(), l ? b(i, t) : L(i, t));
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          try {
            r = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              e,
              t.toString(),
              !0,
            );
          } catch (n) {
            return S(e, t, String(n));
          }
          var a =
              ((n = r) == null ? void 0 : n.errorReason) != null &&
              r.errorReason !== ""
                ? r.errorReason
                : null,
            i = r != null && (r.code == null || r.code === "") && a == null;
          return i
            ? (o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
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
            : S(
                e,
                t,
                a != null
                  ? a
                  : r == null
                    ? "missing server response"
                    : "invite code returned",
              );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return (
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] Server-sent invite unsuccessful: ",
                    "",
                  ])),
                n,
              )
              .sendLogs("out-contact-server-sent-invite-failed"),
            o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()
              ? L(e, t, n)
              : (o("WAWebToastManager").ToastManager.open(
                  p.jsx(o("WAWebToast.react").Toast, {
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite] MEX invite failed, fallback: ",
                  "",
                ])),
              e,
            ),
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
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
          var c = encodeURIComponent(r),
            m = window.open("sms:+" + e + "?body=" + c);
          return (k(m == null), m != null);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          p.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function I(e, t, n, r) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? T(e, t, n, r)
        : !1;
    }
    function T(e, t, n, r) {
      var a = e
        .map(function (e) {
          return o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
        })
        .filter(function (e) {
          return o(
            "WAWebContactlessChatUtils",
          ).PHONE_NUMBER_VALIDATION_REGEX.test(e);
        });
      if (a.length === 0) return !1;
      var i = o("WAWebOutContactInviteUtils").getMultiGroupInviteMessageText(),
        l = encodeURIComponent(i),
        s = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId();
      (o("WAWebOutContactLoggingUtils").logMultiGroupInviteContacts({
        entryPoint: n,
        groupJid: t,
        serverSendFailureReason: r,
        sessionId: s,
        validNumbers: a,
      }),
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
      var u = a
          .map(function (e) {
            return "+" + e;
          })
          .join(","),
        c = window.open("sms://open?addresses=" + u + "&body=" + l);
      return (k(c == null), c != null);
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e
            .map(function (e) {
              return o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
            })
            .filter(function (e) {
              return o(
                "WAWebContactlessChatUtils",
              ).PHONE_NUMBER_VALIDATION_REGEX.test(e);
            });
          if (
            !o(
              "WAWebGroupServerSentInviteEligibility",
            ).isGroupServerSentInviteEligible(r)
          )
            return I(r, t, n);
          var a = r[0],
            i = o(
              "WAWebOutContactInviteJourney",
            ).getOutContactInviteSessionId(),
            l = !1,
            u = "unknown server error";
          try {
            var c = yield o(
              "WAWebMexGroupStoreAndSendInviteSmsJob",
            ).mexGroupStoreAndSendInviteSms(
              t,
              o("WAWebWidToJid")
                .widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(a))
                .toString(),
              n.toString(),
            );
            ((l = c.serverSent),
              c.errorCode != null && (u = String(c.errorCode)));
          } catch (e) {
            u = String(e);
          }
          return l
            ? (o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Invite sent"),
                }),
              ),
              o("WAWebOutContactLoggingUtils").logGroupInviteContact({
                entryPoint: n,
                isServerSentInvite: !0,
                sessionId: i,
              }),
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
              !0)
            : $(r, t, n, i, u);
        })),
        x.apply(this, arguments)
      );
    }
    function $(t, n, r, a, i) {
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite] Server-sent group invite unsuccessful: ",
                "",
              ])),
            i,
          )
          .sendLogs("out-contact-group-server-sent-invite-failed"),
        o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()
          ? T(t, n, r, i)
          : (o("WAWebToastManager").ToastManager.open(
              p.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Could not send invite"),
              }),
            ),
            o("WAWebOutContactLoggingUtils").logGroupInviteContact({
              entryPoint: r,
              inviteCodeError: i,
              isServerSentInvite: !0,
              sessionId: a,
            }),
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
            !1)
      );
    }
    ((l.sendInvite = _),
      (l.sendDeactivatedUserInvite = g),
      (l.sendMultiGroupInvite = I),
      (l.sendServerSentGroupInvite = D));
  },
  226,
);
