__d(
  "useWAWebNewsletterInviteLink",
  [
    "fbt",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebModalManager",
    "WAWebNewsletterLinkShareLogging",
    "WAWebSendTextFlow.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumChannelLinkShareDirection",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.chat,
        a = e.linkShareLoggingNavigationParams,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["formattedTitle"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        u = l.formattedTitle,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["membershipType", "inviteCode"]), (t[1] = d))
        : (d = t[1]);
      var m = o("useWAWebModelValues").useOptionalModelValues(
          n.newsletterMetadata,
          d,
        ),
        f;
      t[2] !== m ? ((f = m || {}), (t[2] = m), (t[3] = f)) : (f = t[3]);
      var g = f,
        h = g.inviteCode,
        y;
      t[4] !== h
        ? ((y = h != null ? _(h) : null), (t[4] = h), (t[5] = y))
        : (y = t[5]);
      var C = y,
        b;
      t[6] !== n.id || t[7] !== C || t[8] !== a || t[9] !== u
        ? ((b = function () {
            if (C != null) {
              o("WAWebNewsletterLinkShareLogging").logNewsletterLinkShare({
                shareDirection: o("WAWebWamEnumChannelLinkShareDirection")
                  .CHANNEL_LINK_SHARE_DIRECTION.WHATSAPP,
                linkShareScreen: a.linkShareScreen,
                newsletter: o("WAWebWidFactory").asNewsletterWidOrThrow(n.id),
                linkShareScreenEntryPoint: a.linkShareScreenEntryPoint,
              });
              var e = s._(
                  /*BTDS*/ "Follow the {newsletter_name} channel on WhatsApp: {link}",
                  [s._param("newsletter_name", u), s._param("link", C)],
                ),
                t = s._(/*BTDS*/ "Send channel link to");
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebSendTextFlow.react"), {
                  title: t,
                  text: e.toString(),
                  origin: n.id,
                }),
                { transition: "modal-flow" },
              );
            }
          }),
          (t[6] = n.id),
          (t[7] = C),
          (t[8] = a),
          (t[9] = u),
          (t[10] = b))
        : (b = t[10]);
      var v = b,
        S;
      t[11] !== C
        ? ((S = function () {
            C != null && p(C);
          }),
          (t[11] = C),
          (t[12] = S))
        : (S = t[12]);
      var R = S,
        L;
      return (
        t[13] !== R || t[14] !== v || t[15] !== C
          ? ((L = [C, R, v]),
            (t[13] = R),
            (t[14] = v),
            (t[15] = C),
            (t[16] = L))
          : (L = t[16]),
        L
      );
    }
    function p(t) {
      o("WAWebCopyToClipboard")
        .copyTextToClipboard(t)
        .then(function (e) {
          e
            ? o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Link copied to clipboard."),
                }),
              )
            : o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't copy to clipboard."),
                }),
              );
        })
        .catch(function () {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][invite link] failed to copy text to clipboard",
                ])),
            )
            .sendLogs(
              "newsletter-invite-link-failed-to-copy-text-to-clipboard",
            );
        });
    }
    function _(e) {
      return "https://whatsapp.com/channel/" + e;
    }
    ((l.useNewsletterInviteLink = m),
      (l.copyInviteLink = p),
      (l.getInviteLink = _));
  },
  226,
);
