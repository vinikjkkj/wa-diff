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
            return b({
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
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return b({
              canSend: r,
              entryPoint: t,
              isOutContactInvite: !1,
              name: n,
              phoneNumber: e,
            });
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
      return (
        o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(t) &&
        (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable() ||
          o(
            "WAWebOutContactServerSentInviteEligibility",
          ).isServerSentInviteEligible(t))
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canSend,
            n = e.entryPoint,
            r = e.isNewContact,
            a = e.isOutContactInvite,
            i = e.name,
            l = e.onSendStart,
            s = e.phoneNumber,
            c = o("WAWebPhoneNumberSearch").stripInvisibleChars(s);
          if (
            !o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(
              c,
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
          var d = o(
            "WAWebOutContactServerSentInviteEligibility",
          ).isServerSentInviteEligible(c);
          if (!d && !L(a)) return !1;
          var m = S(a);
          o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
            entryPoint: n,
            isServerSentInvite: d,
            sessionId: m.sessionId,
          });
          var p = i != null ? i : c,
            _ = d ? yield E(c, n, p, r, t) : (t == null ? void 0 : t()) !== !1;
          return _
            ? (l == null || l(), d ? I(c, n, p, m, t) : N(c, n, m, void 0, t))
            : !1;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = e
        ? o("WAWebOutContactInviteJourney").getOutContactInviteSessionId()
        : null;
      return {
        sessionId:
          t != null
            ? t
            : o(
                "WAWebOutContactInviteJourney",
              ).createCompanionInviteSessionId(),
        pickerSessionId: t,
      };
    }
    function R(e) {
      var t = e.pickerSessionId;
      t != null &&
        o("WAWebOutContactInviteJourney").getOutContactInviteSessionId() ===
          t &&
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
    }
    function L(e) {
      return e
        ? o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        : o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable();
    }
    function E(e, t, n, r, o) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if ((a == null ? void 0 : a()) === !1) return !1;
            o(
              "WAWebMexLogServerSentInviteIntentJob",
            ).mexLogServerSentInviteIntent(e, t.toString());
            var i = yield r === !0
              ? o(
                  "WAWebOutContactInviteConfirmDialog.react",
                ).waitForOutContactInviteConfirmDialog(n, e, !0)
              : o(
                  "WAWebOutContactInviteConfirmDialog.react",
                ).waitForOutContactInviteConfirmDialog(n, e);
            return (
              i &&
              (a == null ? void 0 : a()) !== !1 &&
              o(
                "WAWebOutContactServerSentInviteEligibility",
              ).isServerSentInviteEligible(e)
            );
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r, o) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i, l;
            try {
              l = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
                e,
                t.toString(),
                !0,
              );
            } catch (o) {
              return D(e, t, String(o), n, r, void 0, a);
            }
            var u =
                ((i = l) == null ? void 0 : i.errorReason) != null &&
                l.errorReason !== ""
                  ? l.errorReason
                  : null,
              c = l != null && (l.code == null || l.code === "") && u == null;
            if (!c) {
              var d;
              return D(
                e,
                t,
                u != null
                  ? u
                  : l == null
                    ? "missing server response"
                    : "invite code returned",
                n,
                r,
                (d = l) == null ? void 0 : d.code,
                a,
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
                sessionId: r.sessionId,
                validInviteCode: !1,
              }),
              R(r),
              !0
            );
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r, o, a, i) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            if ((l == null ? void 0 : l()) === !1) return !1;
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
              return N(e, t, a, n, l);
            var s = yield $(e, t, i);
            return (
              (l == null ? void 0 : l()) === !1 ||
                (o(
                  "WAWebOutContactInviteFailureDialog.react",
                ).showOutContactInviteFailureDialog(r, s),
                o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                  entryPoint: t,
                  inviteCodeError: n,
                  isServerSentInvite: !0,
                  sessionId: a.sessionId,
                  validInviteCode: !1,
                }),
                R(a)),
              !1
            );
          },
        )),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i,
              l = !1,
              u = r;
            try {
              var c = yield o(
                  "WAWebMexCreateInviteCodeJob",
                ).mexCreateInviteCode(e, t.toString(), !1),
                d = c == null ? void 0 : c.code;
              d != null && d !== ""
                ? ((i = o(
                    "WAWebOutContactInviteUtils",
                  ).getInviteMessageTextWithCode(d)),
                  (l = !0))
                : (i = o("WAWebOutContactInviteUtils").getInviteMessageText());
            } catch (e) {
              if ((a == null ? void 0 : a()) === !1) return !1;
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
                (u = String(e)),
                (i = o("WAWebOutContactInviteUtils").getInviteMessageText()));
            }
            if ((a == null ? void 0 : a()) === !1) return !1;
            (o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
              entryPoint: t,
              inviteCodeError: u,
              sessionId: n.sessionId,
              validInviteCode: l,
            }),
              R(n));
            var p = encodeURIComponent(i),
              f = window.open("sms:+" + e + "?body=" + p);
            return (w(f == null), f != null);
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          _.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function A(e, t, n, r) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? F(e, t, n, r)
        : !1;
    }
    function F(e, t, n, r) {
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
      return (w(c == null), c != null);
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            return A(r, t, n);
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
            : W(r, t, n, i, u);
        })),
        B.apply(this, arguments)
      );
    }
    function W(t, n, r, a, i) {
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
          ? F(t, n, r, i)
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
      (l.isDeactivatedUserInviteAvailable = C),
      (l.sendMultiGroupInvite = A),
      (l.sendServerSentGroupInvite = O));
  },
  226,
);
