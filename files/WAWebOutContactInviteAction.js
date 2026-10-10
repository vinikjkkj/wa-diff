__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebMexCreateInviteCodeJob",
    "WAWebMexGroupStoreAndSendInviteSmsJob",
    "WAWebMexLogServerSentInviteIntentJob",
    "WAWebOutContactInviteConfirmDialog.react",
    "WAWebOutContactInviteFailureDialog.react",
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
      p,
      _ = p || (p = o("react"));
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            return C({
              entryPoint: t,
              isNewContact: o,
              isOutContactInvite: !0,
              name: n,
              onSendStart: r,
              phoneNumber: e,
            });
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return C({
            entryPoint: t,
            isOutContactInvite: !1,
            name: n,
            phoneNumber: e,
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            n = e.isNewContact,
            r = e.isOutContactInvite,
            a = e.name,
            i = e.onSendStart,
            l = e.phoneNumber,
            s = o("WAWebPhoneNumberSearch").stripInvisibleChars(l);
          if (
            !o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(
              s,
            )
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
          var c =
            r &&
            o(
              "WAWebOutContactServerSentInviteEligibility",
            ).isServerSentInviteEligible(s);
          if (
            r &&
            !c &&
            !o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
          )
            return !1;
          if (
            (r &&
              o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
                entryPoint: t,
                isServerSentInvite: c,
              }),
            r && c)
          ) {
            o(
              "WAWebMexLogServerSentInviteIntentJob",
            ).mexLogServerSentInviteIntent(s, t.toString());
            var d = yield n === !0
              ? o(
                  "WAWebOutContactInviteConfirmDialog.react",
                ).waitForOutContactInviteConfirmDialog(a != null ? a : s, s, !0)
              : o(
                  "WAWebOutContactInviteConfirmDialog.react",
                ).waitForOutContactInviteConfirmDialog(a != null ? a : s, s);
            if (!d) return !1;
          }
          return (i == null || i(), c ? v(s, t, a != null ? a : s) : I(s, t));
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
          var r, a;
          try {
            a = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              e,
              t.toString(),
              !0,
            );
          } catch (r) {
            return R(e, t, String(r), n);
          }
          var i =
              ((r = a) == null ? void 0 : r.errorReason) != null &&
              a.errorReason !== ""
                ? a.errorReason
                : null,
            l = a != null && (a.code == null || a.code === "") && i == null;
          if (!l) {
            var u;
            return R(
              e,
              t,
              i != null
                ? i
                : a == null
                  ? "missing server response"
                  : "invite code returned",
              n,
              (u = a) == null ? void 0 : u.code,
            );
          }
          return (
            o("WAWebToastManager").ToastManager.open(
              _.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Invite sent"),
              }),
            ),
            o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
              entryPoint: t,
              isServerSentInvite: !0,
              validInviteCode: !0,
            }),
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
            !0
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite] Server-sent invite unsuccessful: ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("out-contact-server-sent-invite-failed"),
              o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable())
            )
              return I(e, t, n);
            var i = yield E(e, t, a);
            return (
              o(
                "WAWebOutContactInviteFailureDialog.react",
              ).showOutContactInviteFailureDialog(r, i),
              o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                entryPoint: t,
                inviteCodeError: n,
                isServerSentInvite: !0,
                validInviteCode: !1,
              }),
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
              !1
            );
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n != null && n !== "")
            return o("WAWebOutContactInviteUtils").getInviteUrl(n);
          try {
            var r = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              e,
              t.toString(),
              !1,
            );
            return o("WAWebOutContactInviteUtils").getInviteUrl(
              r == null ? void 0 : r.code,
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite] Could not generate recovery invite link: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "out-contact-server-sent-invite-recovery-link-failed",
                ),
              o("WAWebOutContactInviteUtils").getInviteUrl()
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite] MEX invite failed, fallback: ",
                  "",
                ])),
              e,
            ),
              o("WAWebToastManager").ToastManager.open(
                _.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Couldn't generate invite link. Sending with default link.",
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
            d = window.open("sms:+" + e + "?body=" + c);
          return (D(d == null), d != null);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          _.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function x(e, t, n, r) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? $(e, t, n, r)
        : !1;
    }
    function $(e, t, n, r) {
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
      return (D(c == null), c != null);
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            return x(r, t, n);
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
                _.jsx(o("WAWebToast.react").Toast, {
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
            : M(r, t, n, i, u);
        })),
        N.apply(this, arguments)
      );
    }
    function M(t, n, r, a, i) {
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
          ? $(t, n, r, i)
          : (o("WAWebToastManager").ToastManager.open(
              _.jsx(o("WAWebToast.react").Toast, {
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
    ((l.sendInvite = f),
      (l.sendDeactivatedUserInvite = h),
      (l.sendMultiGroupInvite = x),
      (l.sendServerSentGroupInvite = P));
  },
  226,
);
