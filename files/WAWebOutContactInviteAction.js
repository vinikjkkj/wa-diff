__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebMexCreateInviteCodeJob",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteUtils",
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
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebOutContactInviteGating").isOutContactInviteEnabled())
            return !1;
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
          var a;
          try {
            var i = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              r,
              n,
            );
            i != null
              ? (a = o(
                  "WAWebOutContactInviteUtils",
                ).getInviteMessageTextWithCode(i))
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
              (a = o("WAWebOutContactInviteUtils").getInviteMessageText()));
          }
          var l = encodeURIComponent(a),
            c = window.open("sms:+" + r + "?body=" + l);
          return (_(c == null), c != null);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function f(e, t, n) {
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
        i = encodeURIComponent(a);
      o("WAWebOutContactInviteUtils").storeMultiGroupInviteSms(t, r, n);
      var l = r
          .map(function (e) {
            return "+" + e;
          })
          .join(","),
        s = window.open("sms://open?addresses=" + l + "&body=" + i);
      return (_(s == null), s != null);
    }
    ((l.sendInvite = m), (l.sendMultiGroupInvite = f));
  },
  226,
);
