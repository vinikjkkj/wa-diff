__d(
  "WAWebOutContactInviteAction",
  [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebMexCreateInviteCodeJob",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteUtils",
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
          if (
            !o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(
              t,
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
          var r;
          try {
            var a = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
              t,
              n,
            );
            a != null
              ? (r = o(
                  "WAWebOutContactInviteUtils",
                ).getInviteMessageTextWithCode(a))
              : (r = o("WAWebOutContactInviteUtils").getInviteMessageText());
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
              (r = o("WAWebOutContactInviteUtils").getInviteMessageText()));
          }
          var i = encodeURIComponent(r),
            l = window.open("sms:+" + t + "?body=" + i);
          return (_(l == null), l != null);
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
    function f(e) {
      if (!o("WAWebOutContactInviteGating").isOutContactInviteEnabled())
        return !1;
      var t = e.filter(function (e) {
        return o(
          "WAWebContactlessChatUtils",
        ).PHONE_NUMBER_VALIDATION_REGEX.test(e);
      });
      if (t.length === 0) return !1;
      var n = o("WAWebOutContactInviteUtils").getMultiGroupInviteMessageText(),
        r = encodeURIComponent(n),
        a = t
          .map(function (e) {
            return "+" + e;
          })
          .join(","),
        i = window.open("sms://open?addresses=" + a + "&body=" + r);
      return (_(i == null), i != null);
    }
    ((l.sendInvite = m), (l.sendMultiGroupInvite = f));
  },
  226,
);
