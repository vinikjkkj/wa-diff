__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebMexCreateInviteCodeJob",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactLoggingUtils",
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
            ? g(e, t)
            : !1;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return g(e, t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebPhoneNumberSearch").stripInvisibleChars(t);
          if (
            !o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(
              r,
            )
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
          var a,
            i = !1,
            l;
          try {
            var c = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              r,
              n.toString(),
            );
            c != null
              ? ((a = o(
                  "WAWebOutContactInviteUtils",
                ).getInviteMessageTextWithCode(c)),
                (i = !0))
              : (a = o("WAWebOutContactInviteUtils").getInviteMessageText());
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
              (l = String(e)),
              (a = o("WAWebOutContactInviteUtils").getInviteMessageText()));
          }
          (o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
            entryPoint: n,
            inviteCodeError: l,
            validInviteCode: i,
          }),
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney());
          var m = encodeURIComponent(a),
            p = window.open("sms:+" + r + "?body=" + m);
          return (y(p == null), p != null);
        })),
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
      (o("WAWebOutContactLoggingUtils").logMultiGroupInviteContacts(t, r, n, l),
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
