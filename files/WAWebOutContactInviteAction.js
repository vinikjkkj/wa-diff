__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebLazyLoadedRetriable",
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
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $ = x || (x = o("react")),
      P = "server_sent_false";
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            return O({
              entryPoint: t,
              isNewContact: o,
              isOutContactInvite: !0,
              name: n,
              onSendStart: r,
              phoneNumber: e,
            });
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return O({
              canSend: r,
              entryPoint: t,
              isOutContactInvite: !1,
              name: n,
              phoneNumber: e,
            });
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
      return (
        o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(t) &&
        (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable() ||
          o(
            "WAWebOutContactServerSentInviteEligibility",
          ).isServerSentInviteEligible(t))
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          if (!d && !U(a)) return !1;
          var m = W(a);
          o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
            entryPoint: n,
            isServerSentInvite: d,
            sessionId: m.sessionId,
          });
          var p = i != null ? i : c;
          return d
            ? V({
                canSend: t,
                entryPoint: n,
                inviteContext: m,
                isNewContact: r,
                name: p,
                onSendStart: l,
                phoneNumber: c,
              })
            : (t == null ? void 0 : t()) === !1
              ? !1
              : (l == null || l(), Y(c, n, m, void 0, t));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
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
    function q(e) {
      var t = e.pickerSessionId;
      t != null &&
        o("WAWebOutContactInviteJourney").getOutContactInviteSessionId() ===
          t &&
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
    }
    function U(e) {
      return e
        ? o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        : o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable();
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canSend,
            r = e.entryPoint,
            a = e.inviteContext,
            i = e.isNewContact,
            l = e.name,
            s = e.onSendStart,
            u = e.phoneNumber;
          if ((t == null ? void 0 : t()) === !1) return !1;
          (o(
            "WAWebMexLogServerSentInviteIntentJob",
          ).mexLogServerSentInviteIntent(u, r.toString()),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][ssi] confirm shown: entryPoint=",
                  "",
                ])),
              String(r),
            ));
          var p = !1,
            _ = yield o(
              "WAWebOutContactInviteConfirmDialog.react",
            ).waitForOutContactInviteConfirmDialog(
              l,
              u,
              function () {
                return (
                  (p = !0),
                  (t == null ? void 0 : t()) === !1 ||
                  !o(
                    "WAWebOutContactServerSentInviteEligibility",
                  ).isServerSentInviteEligible(u)
                    ? (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[out-contact-invite][ssi] not sent: no longer available",
                          ])),
                      ),
                      (D || (D = n("Promise"))).resolve(!1))
                    : (s == null || s(), G(u, r, l, a, t))
                );
              },
              i,
            );
          return (
            p ||
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][ssi] confirm dismissed",
                  ])),
              ),
            _
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n, r, o) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l, u;
            try {
              u = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
                e,
                t.toString(),
                !0,
              );
            } catch (l) {
              return (
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[out-contact-invite][ssi] request failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(l))
                  .sendLogs("out-contact-server-sent-invite-failed"),
                j(e, t, String(l), n, a, void 0, i)
              );
            }
            var c =
                ((l = u) == null ? void 0 : l.errorReason) != null &&
                u.errorReason !== ""
                  ? u.errorReason
                  : null,
              d = u != null && (u.code == null || u.code === "") && c == null;
            if (!d) {
              var m,
                h =
                  c != null
                    ? c
                    : u == null
                      ? "missing server response"
                      : "invite code returned";
              return (
                u == null
                  ? o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[out-contact-invite][ssi] missing server response",
                          ])),
                      )
                      .sendLogs("out-contact-server-sent-invite-failed")
                  : o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[out-contact-invite][ssi] server did not send: reason=",
                          "",
                        ])),
                      h,
                    ),
                j(e, t, h, n, a, (m = u) == null ? void 0 : m.code, i)
              );
            }
            return (
              o("WAWebToastManager").ToastManager.open(
                $.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Invite sent"),
                }),
              ),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][ssi] sent: entryPoint=",
                    "",
                  ])),
                String(t),
              ),
              o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                entryPoint: t,
                isServerSentInvite: !0,
                sessionId: a.sessionId,
                validInviteCode: !1,
              }),
              q(a),
              !0
            );
          },
        )),
        z.apply(this, arguments)
      );
    }
    function j(e, t, n, r, o, a, i) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            if ((l == null ? void 0 : l()) === !1) return !1;
            var s = o(
              "WAWebOutContactInviteGating",
            ).isNativeSmsFallbackAvailable();
            if (
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][ssi] fallback: nativeSms=",
                    "",
                  ])),
                String(s),
              ),
              s)
            )
              return Y(e, t, a, n, l);
            var u = yield Q(e, t, i);
            return (
              (l == null ? void 0 : l()) === !1 ||
                (o(
                  "WAWebOutContactInviteFailureDialog.react",
                ).showOutContactInviteFailureDialog(r, u),
                o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                  entryPoint: t,
                  inviteCodeError: n,
                  isServerSentInvite: !0,
                  sessionId: a.sessionId,
                  validInviteCode: !1,
                }),
                q(a)),
              !1
            );
          },
        )),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n != null && n !== "")
            return o("WAWebOutContactInviteUtils").getInviteUrl(n);
          try {
            var a = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              e,
              t.toString(),
              !1,
            );
            return o("WAWebOutContactInviteUtils").getInviteUrl(
              a == null ? void 0 : a.code,
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][ssi] recovery invite link failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              o("WAWebOutContactInviteUtils").getInviteUrl()
            );
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n, r, o) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] MEX invite failed, fallback: ",
                    "",
                  ])),
                e,
              ),
                o("WAWebToastManager").ToastManager.open(
                  $.jsx(o("WAWebToast.react").Toast, {
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
              q(n));
            var m = encodeURIComponent(i),
              p = window.open("sms:+" + e + "?body=" + m);
            return (Z(p == null), p != null);
          },
        )),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          $.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function ee(e, t, n, r) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? te(e, t, n, r)
        : !1;
    }
    function te(e, t, n, r) {
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
      return (Z(c == null), c != null);
    }
    var ne = new Set(),
      re = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupInviteConfirmDialog.react",
        )
          .__setRef("WAWebOutContactInviteAction")
          .load();
      }, "GroupInviteConfirmDialog");
    function oe(e, t, n, r) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = e.map(function (e) {
              return o("WAWebPhoneNumberSearch").stripInvisibleChars(
                e.phoneNumber,
              );
            });
            if (ne.has(t))
              return (
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] skipped: already in progress",
                    ])),
                ),
                !1
              );
            if (
              !i.every(function (e) {
                return o(
                  "WAWebContactlessChatUtils",
                ).PHONE_NUMBER_VALIDATION_REGEX.test(e);
              })
            )
              return (
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] invalid phone number format",
                    ])),
                ),
                !1
              );
            if (
              !o(
                "WAWebGroupServerSentInviteEligibility",
              ).isGroupServerSentInviteEligible(i)
            )
              return (
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] skipped: not eligible",
                    ])),
                ),
                !1
              );
            ne.add(t);
            try {
              o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
                entryPoint: a,
                isServerSentInvite: !0,
              });
              var l = yield re(),
                s = l.waitForGroupInviteConfirmDialog;
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][group-ssi] confirm shown: invitees=",
                    " entryPoint=",
                    "",
                  ])),
                String(i.length),
                String(a),
              );
              var u = !1,
                c = yield s(e, r, function () {
                  return (
                    (u = !0),
                    o(
                      "WAWebGroupServerSentInviteEligibility",
                    ).isGroupServerSentInviteEligible(i)
                      ? ie(i, t, a)
                      : (o("WALogger").LOG(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "[out-contact-invite][group-ssi] not sent: no longer eligible",
                            ])),
                        ),
                        (D || (D = n("Promise"))).resolve(!1))
                  );
                });
              return (
                u ||
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[out-contact-invite][group-ssi] confirm dismissed",
                      ])),
                  ),
                c
              );
            } finally {
              ne.delete(t);
            }
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a = o(
                "WAWebOutContactInviteJourney",
              ).getOutContactInviteSessionId(),
              i;
            try {
              i = yield o(
                "WAWebMexGroupStoreAndSendInviteSmsJob",
              ).mexGroupStoreAndSendInviteSms(
                t,
                e.map(function (e) {
                  return o("WAWebWidToJid")
                    .widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(e))
                    .toString();
                }),
                n,
              );
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[out-contact-invite][group-ssi] request failed: invitees=",
                        "",
                      ])),
                    String(e.length),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("out-contact-group-server-sent-invite-failed"),
                e.forEach(function () {
                  return o("WAWebOutContactLoggingUtils").logGroupInviteContact(
                    {
                      entryPoint: n,
                      inviteCodeError: String(t),
                      isServerSentInvite: !0,
                      sessionId: a,
                    },
                  );
                }),
                o(
                  "WAWebOutContactInviteJourney",
                ).clearOutContactInviteJourney(),
                de(
                  s._(
                    /*BTDS*/ '_j{"*":"Couldn\'t confirm if the invites were sent","_1":"Couldn\'t confirm if the invite was sent"}',
                    [s._plural(e.length)],
                  ),
                ),
                !1
              );
            }
            var l = i.filter(function (e) {
                return e.serverSent;
              }).length,
              u = e.flatMap(function (e, t) {
                var n, r;
                return ((n = i[t]) == null ? void 0 : n.serverSent) === !0
                  ? []
                  : [
                      {
                        errorCode: (r = i[t]) == null ? void 0 : r.errorCode,
                        phoneNumber: e,
                      },
                    ];
              });
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][group-ssi] result: requested=",
                  " sent=",
                  "",
                ])),
              String(e.length),
              String(l),
            ),
              u.length > 0 &&
                o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] server did not send: errorCodes=",
                      "",
                    ])),
                  u
                    .map(function (e) {
                      var t;
                      return String((t = e.errorCode) != null ? t : "none");
                    })
                    .join(","),
                ),
              se(l, n, a));
            var c = ue(u, t, n, a);
            return (
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
              (l > 0 || !c) && de(ce(l, e.length)),
              l > 0
            );
          },
        )),
        le.apply(this, arguments)
      );
    }
    function se(e, t, n) {
      for (var r = 0; r < e; r++)
        o("WAWebOutContactLoggingUtils").logGroupInviteContact({
          entryPoint: t,
          isServerSentInvite: !0,
          sessionId: n,
        });
    }
    function ue(t, n, r, a) {
      return t.length === 0
        ? !1
        : o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][group-ssi] unsent handed to native SMS: count=",
                  "",
                ])),
              String(t.length),
            ),
            te(
              t.map(function (e) {
                return e.phoneNumber;
              }),
              n,
              r,
              P,
            ))
          : (t.forEach(function (e) {
              var t = e.errorCode;
              return o("WAWebOutContactLoggingUtils").logGroupInviteContact({
                entryPoint: r,
                inviteCodeError: t != null ? String(t) : P,
                isServerSentInvite: !0,
                sessionId: a,
              });
            }),
            !1);
    }
    function ce(e, t) {
      return e === t
        ? s._(/*BTDS*/ '_j{"*":"Invites sent","_1":"Invite sent"}', [
            s._plural(t),
          ])
        : e === 0
          ? s._(
              /*BTDS*/ '_j{"*":"Couldn\'t send invites","_1":"Couldn\'t send invite"}',
              [s._plural(t)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"Sent {sent_count} of {total_count} invites","_1":"Sent {sent_count} of 1 invite"}',
              [s._plural(t, "total_count"), s._param("sent_count", e)],
            );
    }
    function de(e) {
      o("WAWebToastManager").ToastManager.open(
        $.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    ((l.sendInvite = N),
      (l.sendDeactivatedUserInvite = w),
      (l.isDeactivatedUserInviteAvailable = F),
      (l.sendMultiGroupInvite = ee),
      (l.confirmAndSendServerSentGroupInvites = oe),
      (l.sendServerSentGroupInvites = ie));
  },
  226,
);
