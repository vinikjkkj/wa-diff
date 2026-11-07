__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebGroupInviteFailureDialog.react",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebLazyLoadedRetriable",
    "WAWebMexCreateInviteCodeJob",
    "WAWebMexGroupStoreAndSendInviteSmsJob",
    "WAWebMexLogServerSentInviteIntentJob",
    "WAWebModalManager",
    "WAWebOutContactInviteConfirmDialog.react",
    "WAWebOutContactInviteFailureDialog.react",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactLoggingUtils",
    "WAWebOutContactServerSentInviteEligibility",
    "WAWebOutContactSmsInviteConfirmModal.react",
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
      $,
      P = $ || ($ = o("react")),
      N = "server_sent_false";
    function M(e, t, n, r, o) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            return B({
              entryPoint: t,
              isNewContact: o,
              isOutContactInvite: !0,
              name: n,
              onSendStart: r,
              phoneNumber: e,
            });
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return B({
              canSend: r,
              entryPoint: t,
              isOutContactInvite: !1,
              name: n,
              phoneNumber: e,
            });
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      var t = o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
      return (
        o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(t) &&
        (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable() ||
          o(
            "WAWebOutContactServerSentInviteEligibility",
          ).isServerSentInviteEligible(t))
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          if (!d && !V(a)) return !1;
          var m = q(a);
          o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
            entryPoint: n,
            isServerSentInvite: d,
            sessionId: m.sessionId,
          });
          var p = i != null ? i : c;
          return d
            ? H({
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
              : (l == null || l(), J(c, n, m, void 0, t));
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
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
    function U(e) {
      var t = e.pickerSessionId;
      t != null &&
        o("WAWebOutContactInviteJourney").getOutContactInviteSessionId() ===
          t &&
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
    }
    function V(e) {
      return e
        ? o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        : o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable();
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                      (x || (x = n("Promise"))).resolve(!1))
                    : (s == null || s(), z(u, r, l, a, t))
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
        G.apply(this, arguments)
      );
    }
    function z(e, t, n, r, o) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                K(e, t, String(l), n, a, void 0, i)
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
                K(e, t, h, n, a, (m = u) == null ? void 0 : m.code, i)
              );
            }
            return (
              o("WAWebToastManager").ToastManager.open(
                P.jsx(o("WAWebToast.react").Toast, {
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
              U(a),
              !0
            );
          },
        )),
        j.apply(this, arguments)
      );
    }
    function K(e, t, n, r, o, a, i) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              return J(e, t, a, n, l);
            var u = yield X(e, t, i);
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
                U(a)),
              !1
            );
          },
        )),
        Q.apply(this, arguments)
      );
    }
    function X(e, t, n) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r, o) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  P.jsx(o("WAWebToast.react").Toast, {
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
              U(n));
            var m = encodeURIComponent(i),
              p = window.open("sms:+" + e + "?body=" + m);
            return (ee(p == null), p != null);
          },
        )),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          P.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function te(e, t, n, r) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? ne(
            e.map(function (e) {
              return { phoneNumber: e, serverSendFailureReason: r };
            }),
            t,
            n,
          )
        : !1;
    }
    function ne(e, t, n) {
      var r = e
        .map(function (e) {
          return babelHelpers.extends({}, e, {
            phoneNumber: o("WAWebPhoneNumberSearch").stripInvisibleChars(
              e.phoneNumber,
            ),
          });
        })
        .filter(function (e) {
          return o(
            "WAWebContactlessChatUtils",
          ).PHONE_NUMBER_VALIDATION_REGEX.test(e.phoneNumber);
        });
      if (r.length === 0) return !1;
      var a = o("WAWebOutContactInviteUtils").getMultiGroupInviteMessageText(),
        i = encodeURIComponent(a),
        l = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId(),
        s = new Set(
          r.map(function (e) {
            return e.serverSendFailureReason;
          }),
        );
      (s.forEach(function (e) {
        o("WAWebOutContactLoggingUtils").logMultiGroupInviteContacts({
          entryPoint: n,
          groupJid: t,
          serverSendFailureReason: e,
          sessionId: l,
          validNumbers: r
            .filter(function (t) {
              return t.serverSendFailureReason === e;
            })
            .map(function (e) {
              return e.phoneNumber;
            }),
        });
      }),
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
      var u = r.map(function (e) {
          return e.phoneNumber;
        }),
        c = u
          .map(function (e) {
            return "+" + e;
          })
          .join(","),
        d = window.open("sms://open?addresses=" + c + "&body=" + i);
      return (ee(d == null), d != null);
    }
    var re = new Set(),
      oe = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupInviteConfirmDialog.react",
        )
          .__setRef("WAWebOutContactInviteAction")
          .load();
      }, "GroupInviteConfirmDialog");
    function ae(e, t, n, r, o) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            l === void 0 && (l = []);
            var s = de(e),
              u = de(l),
              c = s.map(function (e) {
                return e.phoneNumber;
              });
            if (re.has(t))
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
              !c.every(function (e) {
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
              ).isGroupServerSentInviteEligible(c)
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
            re.add(t);
            try {
              o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
                entryPoint: i,
                isServerSentInvite: !0,
              });
              var d;
              try {
                var m = yield oe();
                d = m.waitForGroupInviteConfirmDialog;
              } catch (e) {
                return (
                  o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[out-contact-invite][group-ssi] confirm dialog failed to load",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("out-contact-group-invite-confirm-load-failed"),
                  ce(
                    [].concat(s, u).map(function (e) {
                      return { invitee: e, wasRequested: !1 };
                    }),
                    t,
                    i,
                    o(
                      "WAWebOutContactInviteJourney",
                    ).getOutContactInviteSessionId(),
                  ),
                  !1
                );
              }
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][group-ssi] confirm shown: invitees=",
                    " entryPoint=",
                    "",
                  ])),
                String(c.length),
                String(i),
              );
              var p = !1,
                _ = null,
                f = yield d(
                  e,
                  a,
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (
                      ((p = !0),
                      !o(
                        "WAWebGroupServerSentInviteEligibility",
                      ).isGroupServerSentInviteEligible(c))
                    )
                      return (
                        o("WALogger").LOG(
                          E ||
                            (E = babelHelpers.taggedTemplateLiteralLoose([
                              "[out-contact-invite][group-ssi] not sent: no longer eligible",
                            ])),
                        ),
                        !1
                      );
                    var e = yield le(s, t, i, u);
                    return ((_ = e.showResult), e.sent);
                  }),
                );
              return (
                p ||
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[out-contact-invite][group-ssi] confirm dismissed",
                      ])),
                  ),
                _ == null || _(),
                f
              );
            } finally {
              re.delete(t);
            }
          },
        )),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n, r) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            a === void 0 && (a = []);
            var i = e.map(function (e) {
                return e.phoneNumber;
              }),
              l = o(
                "WAWebOutContactInviteJourney",
              ).getOutContactInviteSessionId(),
              s;
            try {
              s = yield o(
                "WAWebMexGroupStoreAndSendInviteSmsJob",
              ).mexGroupStoreAndSendInviteSms(
                t,
                i.map(function (e) {
                  return o("WAWebWidToJid")
                    .widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(e))
                    .toString();
                }),
                n,
              );
            } catch (s) {
              (o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] request failed: invitees=",
                      "",
                    ])),
                  String(i.length),
                )
                .catching(r("getErrorSafe")(s))
                .sendLogs("out-contact-group-server-sent-invite-failed"),
                i.forEach(function () {
                  return o("WAWebOutContactLoggingUtils").logGroupInviteContact(
                    {
                      entryPoint: n,
                      inviteCodeError: String(s),
                      isServerSentInvite: !0,
                      sessionId: l,
                    },
                  );
                }));
              var u = a.map(function (e) {
                return { invitee: e, wasRequested: !1 };
              });
              return (
                u.length === 0 &&
                  o(
                    "WAWebOutContactInviteJourney",
                  ).clearOutContactInviteJourney(),
                {
                  sent: !1,
                  showResult: function () {
                    return o(
                      "WAWebGroupInviteFailureDialog.react",
                    ).showGroupInviteFailureDialog(
                      e,
                      "unconfirmed",
                      function () {
                        ce(u, t, n, l);
                      },
                    );
                  },
                }
              );
            }
            var c = s.filter(function (e) {
                return e.serverSent;
              }).length,
              d = e.flatMap(function (e, t) {
                var n, r;
                return ((n = s[t]) == null ? void 0 : n.serverSent) === !0
                  ? []
                  : [
                      {
                        errorCode: (r = s[t]) == null ? void 0 : r.errorCode,
                        invitee: e,
                        wasRequested: !0,
                      },
                    ];
              });
            return (
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][group-ssi] result: requested=",
                    " sent=",
                    "",
                  ])),
                String(i.length),
                String(c),
              ),
              d.length > 0 &&
                o("WALogger").WARN(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] server did not send: errorCodes=",
                      "",
                    ])),
                  d
                    .map(function (e) {
                      var t;
                      return String((t = e.errorCode) != null ? t : "none");
                    })
                    .join(","),
                ),
              ue(c, n, l),
              {
                sent: c > 0,
                showResult: function () {
                  var e = ce(
                    [].concat(
                      d,
                      a.map(function (e) {
                        return { invitee: e, wasRequested: !1 };
                      }),
                    ),
                    t,
                    n,
                    l,
                  );
                  (e === "none" &&
                    o(
                      "WAWebOutContactInviteJourney",
                    ).clearOutContactInviteJourney(),
                    (e === "none" || (e === "native_sms" && c > 0)) &&
                      pe(me(c, i.length + a.length)));
                },
              }
            );
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n) {
      for (var r = 0; r < e; r++)
        o("WAWebOutContactLoggingUtils").logGroupInviteContact({
          entryPoint: t,
          isServerSentInvite: !0,
          sessionId: n,
        });
    }
    function ce(t, n, a, i) {
      if (t.length === 0) return "none";
      var l = function () {
        return t.forEach(function (e) {
          var t = e.errorCode,
            n = e.wasRequested;
          n &&
            o("WAWebOutContactLoggingUtils").logGroupInviteContact({
              entryPoint: a,
              inviteCodeError: t != null ? String(t) : N,
              isServerSentInvite: !0,
              sessionId: i,
            });
        });
      };
      if (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite][group-ssi] offering native SMS for failed invites: count=",
              "",
            ])),
          String(t.length),
        );
        var s = !1,
          u = function () {
            s ||
              ((s = !0),
              l(),
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
          };
        return (
          o("WAWebModalManager").ModalManager.open(
            P.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
              names: t.map(function (e) {
                var t = e.invitee;
                return t.name;
              }),
              onConfirm: function () {
                ((s = !0),
                  ne(
                    t.map(function (e) {
                      var t = e.invitee,
                        n = e.wasRequested;
                      return {
                        phoneNumber: t.phoneNumber,
                        serverSendFailureReason: n ? N : void 0,
                      };
                    }),
                    n,
                    a,
                  ),
                  o("WAWebModalManager").closeModalManager());
              },
              onCancel: function () {
                (u(), o("WAWebModalManager").closeModalManager());
              },
              onUnmount: u,
            }),
          ),
          "native_sms"
        );
      }
      return (
        l(),
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
        o("WAWebGroupInviteFailureDialog.react").showGroupInviteFailureDialog(
          t.map(function (e) {
            var t = e.invitee;
            return t;
          }),
          "not_sent",
        ),
        "failure_dialog"
      );
    }
    function de(e) {
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          phoneNumber: o("WAWebPhoneNumberSearch").stripInvisibleChars(
            e.phoneNumber,
          ),
        });
      });
    }
    function me(e, t) {
      return e === t
        ? s._(/*BTDS*/ '_j{"*":"Invites sent","_1":"Invite sent"}', [
            s._plural(t),
          ])
        : s._(
            /*BTDS*/ '_j{"*":"Sent {sent_count} of {total_count} invites","_1":"Sent {sent_count} of 1 invite"}',
            [s._plural(t, "total_count"), s._param("sent_count", e)],
          );
    }
    function pe(e) {
      o("WAWebToastManager").ToastManager.open(
        P.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    ((l.sendInvite = M),
      (l.sendDeactivatedUserInvite = A),
      (l.isDeactivatedUserInviteAvailable = O),
      (l.sendMultiGroupInvite = te),
      (l.confirmAndSendServerSentGroupInvites = ae),
      (l.sendServerSentGroupInvites = le));
  },
  226,
);
