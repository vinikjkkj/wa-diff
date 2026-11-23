__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "JSResourceForInteraction",
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
    "getErrorSafe",
    "justknobx",
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
    async function N(e, t, n, r, o, a) {
      return A({
        dialogObservers: a,
        entryPoint: t,
        isNewContact: o,
        isOutContactInvite: !0,
        name: n,
        onSendStart: r,
        phoneNumber: e,
      });
    }
    async function M(e, t, n, r) {
      return A({
        canSend: r,
        entryPoint: t,
        isOutContactInvite: !1,
        name: n,
        phoneNumber: e,
      });
    }
    function w(e) {
      var t = o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
      return (
        o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(t) &&
        (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable() ||
          o(
            "WAWebOutContactServerSentInviteEligibility",
          ).isServerSentInviteEligible(t))
      );
    }
    async function A(t) {
      var n = t.canSend,
        r = t.dialogObservers,
        a = t.entryPoint,
        i = t.isNewContact,
        l = t.isOutContactInvite,
        s = t.name,
        u = t.onSendStart,
        c = t.phoneNumber,
        d = o("WAWebPhoneNumberSearch").stripInvisibleChars(c);
      if (!o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(d))
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendInvite: invalid phone number format",
              ])),
          ),
          !1
        );
      var m = o(
        "WAWebOutContactServerSentInviteEligibility",
      ).isServerSentInviteEligible(d);
      if (!m && !B(l)) return !1;
      var p = F(l, r);
      o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
        entryPoint: a,
        isServerSentInvite: m,
        sessionId: p.sessionId,
      });
      var _ = s != null ? s : d;
      return m
        ? W({
            canSend: n,
            entryPoint: a,
            inviteContext: p,
            isNewContact: i,
            name: _,
            onSendStart: u,
            phoneNumber: d,
          })
        : (n == null ? void 0 : n()) === !1
          ? !1
          : (u == null || u(), H(d, a, p, void 0, n));
    }
    function F(e, t) {
      var n = e
        ? o("WAWebOutContactInviteJourney").getOutContactInviteSessionId()
        : null;
      return {
        dialogObservers: t,
        sessionId:
          n != null
            ? n
            : o(
                "WAWebOutContactInviteJourney",
              ).createCompanionInviteSessionId(),
        pickerSessionId: n,
      };
    }
    function O(e) {
      var t = e.pickerSessionId;
      t != null &&
        o("WAWebOutContactInviteJourney").getOutContactInviteSessionId() ===
          t &&
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
    }
    function B(e) {
      return e
        ? o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        : o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable();
    }
    async function W(e) {
      var t = e.canSend,
        n = e.entryPoint,
        r = e.inviteContext,
        a = e.isNewContact,
        i = e.name,
        l = e.onSendStart,
        s = e.phoneNumber;
      if ((t == null ? void 0 : t()) === !1) return !1;
      (o("WAWebMexLogServerSentInviteIntentJob").mexLogServerSentInviteIntent(
        s,
        n.toString(),
      ),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite][ssi] confirm shown: entryPoint=",
              "",
            ])),
          String(n),
        ));
      var m = !1,
        p = await o(
          "WAWebOutContactInviteConfirmDialog.react",
        ).waitForOutContactInviteConfirmDialog.apply(
          void 0,
          [
            i,
            s,
            function () {
              return (
                (m = !0),
                (t == null ? void 0 : t()) === !1 ||
                !o(
                  "WAWebOutContactServerSentInviteEligibility",
                ).isServerSentInviteEligible(s)
                  ? (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[out-contact-invite][ssi] not sent: no longer available",
                        ])),
                    ),
                    Promise.resolve(!1))
                  : (l == null || l(), q(s, n, i, r, t))
              );
            },
            a,
          ].concat(r.dialogObservers != null ? [r.dialogObservers] : []),
        );
      return (
        m ||
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][ssi] confirm dismissed",
              ])),
          ),
        p
      );
    }
    async function q(e, t, n, a, i) {
      var l, u;
      try {
        u = await o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
          e,
          t.toString(),
          !0,
        );
      } catch (l) {
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][ssi] request failed",
                ])),
            )
            .catching(r("getErrorSafe")(l))
            .sendLogs("out-contact-server-sent-invite-failed"),
          U(e, t, String(l), n, a, void 0, i)
        );
      }
      var c =
          ((l = u) == null ? void 0 : l.errorReason) != null &&
          u.errorReason !== ""
            ? u.errorReason
            : null,
        d = u != null && (u.code == null || u.code === "") && c == null;
      if (!d) {
        var g,
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][ssi] missing server response",
                    ])),
                )
                .sendLogs("out-contact-server-sent-invite-failed")
            : o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][ssi] server did not send: reason=",
                    "",
                  ])),
                h,
              ),
          U(e, t, h, n, a, (g = u) == null ? void 0 : g.code, i)
        );
      }
      return (
        o("WAWebToastManager").ToastManager.open(
          $.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
        ),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
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
        O(a),
        !0
      );
    }
    async function U(e, t, n, r, a, i, l) {
      if ((l == null ? void 0 : l()) === !1) return !1;
      var s = o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable();
      if (
        (o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite][ssi] fallback: nativeSms=",
              "",
            ])),
          String(s),
        ),
        s)
      )
        return H(e, t, a, n, l);
      var u = await V(e, t, i);
      return (
        (l == null ? void 0 : l()) === !1 ||
          (o(
            "WAWebOutContactInviteFailureDialog.react",
          ).showOutContactInviteFailureDialog.apply(
            void 0,
            [r, u].concat(a.dialogObservers != null ? [a.dialogObservers] : []),
          ),
          o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
            entryPoint: t,
            inviteCodeError: n,
            isServerSentInvite: !0,
            sessionId: a.sessionId,
            validInviteCode: !1,
          }),
          O(a)),
        !1
      );
    }
    async function V(e, t, n) {
      if (n != null && n !== "")
        return o("WAWebOutContactInviteUtils").getInviteUrl(n);
      try {
        var a = await o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][ssi] recovery invite link failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          o("WAWebOutContactInviteUtils").getInviteUrl()
        );
      }
    }
    async function H(e, t, n, r, a) {
      var i,
        l = !1,
        u = r;
      try {
        var c = await o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
            e,
            t.toString(),
            !1,
          ),
          d = c == null ? void 0 : c.code;
        d != null && d !== ""
          ? ((i = o("WAWebOutContactInviteUtils").getInviteMessageTextWithCode(
              d,
            )),
            (l = !0))
          : (i = o("WAWebOutContactInviteUtils").getInviteMessageText());
      } catch (e) {
        if ((a == null ? void 0 : a()) === !1) return !1;
        (o("WALogger").ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite] MEX invite failed, fallback: ",
              "",
            ])),
          e,
        ),
          o("WAWebToastManager").ToastManager.open(
            $.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
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
        O(n));
      var m = encodeURIComponent(i),
        p = window.open("sms:+" + e + "?body=" + m);
      return (G(p == null), p != null);
    }
    function G(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          $.jsx(o("WAWebToast.react").Toast, {
            msg: r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          }),
        );
    }
    function z(e, t, n, r) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? j(
            e.map(function (e) {
              return { phoneNumber: e, serverSendFailureReason: r };
            }),
            t,
            n,
          )
        : !1;
    }
    function j(e, t, n) {
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
      return (G(d == null), d != null);
    }
    var K = new Set(),
      Q = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupInviteConfirmDialog.react",
        )
          .__setRef("WAWebOutContactInviteAction")
          .load();
      }, "GroupInviteConfirmDialog");
    async function X(e, t, n, a, i) {
      i === void 0 && (i = []);
      var l = ee(e),
        s = ee(i),
        u = l.map(function (e) {
          return e.phoneNumber;
        });
      if (K.has(t))
        return (
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][group-ssi] skipped: already in progress",
              ])),
          ),
          !1
        );
      if (
        !u.every(function (e) {
          return o(
            "WAWebContactlessChatUtils",
          ).PHONE_NUMBER_VALIDATION_REGEX.test(e);
        })
      )
        return (
          o("WALogger").ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][group-ssi] invalid phone number format",
              ])),
          ),
          !1
        );
      if (
        !o(
          "WAWebGroupServerSentInviteEligibility",
        ).isGroupServerSentInviteEligible(u)
      )
        return (
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][group-ssi] skipped: not eligible",
              ])),
          ),
          !1
        );
      K.add(t);
      try {
        o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
          entryPoint: a,
          isServerSentInvite: !0,
        });
        var c;
        try {
          var d = await Q();
          c = d.waitForGroupInviteConfirmDialog;
        } catch (e) {
          return (
            o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite][group-ssi] confirm dialog failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("out-contact-group-invite-confirm-load-failed"),
            Z(
              [].concat(l, s).map(function (e) {
                return { invitee: e, wasRequested: !1 };
              }),
              t,
              a,
              o("WAWebOutContactInviteJourney").getOutContactInviteSessionId(),
            ),
            !1
          );
        }
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite][group-ssi] confirm shown: invitees=",
              " entryPoint=",
              "",
            ])),
          String(u.length),
          String(a),
        );
        var m = !1,
          p = null,
          _ = await c(e, n, async function () {
            if (
              ((m = !0),
              !o(
                "WAWebGroupServerSentInviteEligibility",
              ).isGroupServerSentInviteEligible(u))
            )
              return (
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] not sent: no longer eligible",
                    ])),
                ),
                !1
              );
            var e = await Y(l, t, a, s);
            return ((p = e.showResult), e.sent);
          });
        return (
          m ||
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][group-ssi] confirm dismissed",
                ])),
            ),
          p == null || p(),
          _
        );
      } finally {
        K.delete(t);
      }
    }
    async function Y(e, t, n, a) {
      a === void 0 && (a = []);
      var i = e.map(function (e) {
          return e.phoneNumber;
        }),
        l = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId(),
        s;
      try {
        s = await o(
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
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][group-ssi] request failed: invitees=",
                "",
              ])),
            String(i.length),
          )
          .catching(r("getErrorSafe")(s))
          .sendLogs("out-contact-group-server-sent-invite-failed"),
          i.forEach(function () {
            return o("WAWebOutContactLoggingUtils").logGroupInviteContact({
              entryPoint: n,
              inviteCodeError: String(s),
              isServerSentInvite: !0,
              sessionId: l,
            });
          }));
        var u = a.map(function (e) {
          return { invitee: e, wasRequested: !1 };
        });
        return (
          u.length === 0 &&
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
          {
            sent: !1,
            showResult: function () {
              return o(
                "WAWebGroupInviteFailureDialog.react",
              ).showGroupInviteFailureDialog(e, "unconfirmed", function () {
                Z(u, t, n, l);
              });
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
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite][group-ssi] result: requested=",
              " sent=",
              "",
            ])),
          String(i.length),
          String(c),
        ),
        d.length > 0 &&
          o("WALogger").WARN(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
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
        J(c, n, l),
        {
          sent: c > 0,
          showResult: function () {
            var e = Z(
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
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
              (e === "none" || (e === "native_sms" && c > 0)) &&
                ne(te(c, i.length + a.length)));
          },
        }
      );
    }
    function J(e, t, n) {
      for (var r = 0; r < e; r++)
        o("WAWebOutContactLoggingUtils").logGroupInviteContact({
          entryPoint: t,
          isServerSentInvite: !0,
          sessionId: n,
        });
    }
    function Z(e, t, n, a) {
      if (e.length === 0) return "none";
      var i = function () {
        return e.forEach(function (e) {
          var t = e.errorCode,
            r = e.wasRequested;
          r &&
            o("WAWebOutContactLoggingUtils").logGroupInviteContact({
              entryPoint: n,
              inviteCodeError: t != null ? String(t) : P,
              isServerSentInvite: !0,
              sessionId: a,
            });
        });
      };
      if (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()) {
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "[out-contact-invite][group-ssi] offering native SMS for failed invites: count=",
              "",
            ])),
          String(e.length),
        );
        var l = !1,
          s = function () {
            l ||
              ((l = !0),
              i(),
              o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
          };
        return (
          o("WAWebModalManager").ModalManager.open(
            $.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
              names: e.map(function (e) {
                var t = e.invitee;
                return t.name;
              }),
              onConfirm: function () {
                ((l = !0),
                  j(
                    e.map(function (e) {
                      var t = e.invitee,
                        n = e.wasRequested;
                      return {
                        phoneNumber: t.phoneNumber,
                        serverSendFailureReason: n ? P : void 0,
                      };
                    }),
                    t,
                    n,
                  ),
                  o("WAWebModalManager").closeModalManager());
              },
              onCancel: function () {
                (s(), o("WAWebModalManager").closeModalManager());
              },
              onUnmount: s,
            }),
          ),
          "native_sms"
        );
      }
      return (
        i(),
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney(),
        o("WAWebGroupInviteFailureDialog.react").showGroupInviteFailureDialog(
          e.map(function (e) {
            var t = e.invitee;
            return t;
          }),
          "not_sent",
        ),
        "failure_dialog"
      );
    }
    function ee(e) {
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          phoneNumber: o("WAWebPhoneNumberSearch").stripInvisibleChars(
            e.phoneNumber,
          ),
        });
      });
    }
    function te(e, t) {
      return e === t
        ? s._(/*BTDS*/ "", [s._plural(t)])
        : s._(/*BTDS*/ "", [
            s._plural(t, "total_count"),
            s._param("sent_count", e),
          ]);
    }
    function ne(e) {
      o("WAWebToastManager").ToastManager.open(
        $.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    ((l.sendInvite = N),
      (l.sendDeactivatedUserInvite = M),
      (l.isDeactivatedUserInviteAvailable = w),
      (l.sendMultiGroupInvite = z),
      (l.confirmAndSendServerSentGroupInvites = X),
      (l.sendServerSentGroupInvites = Y));
  },
  226,
);
