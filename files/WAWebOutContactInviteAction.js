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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    async function m(e, t) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? _(e, t)
        : !1;
    }
    async function p(e, t) {
      return _(e, t);
    }
    async function _(t, n) {
      var r = o("WAWebPhoneNumberSearch").stripInvisibleChars(t);
      if (!o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(r))
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
        var c = await o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(
          r,
          n.toString(),
        );
        c != null
          ? ((a = o("WAWebOutContactInviteUtils").getInviteMessageTextWithCode(
              c,
            )),
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
      return (f(p == null), p != null);
    }
    function f(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Could not open SMS app"),
          }),
        );
    }
    function g(e, t, n) {
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
      return (f(u == null), u != null);
    }
    ((l.sendInvite = m),
      (l.sendDeactivatedUserInvite = p),
      (l.sendMultiGroupInvite = g));
  },
  226,
);
