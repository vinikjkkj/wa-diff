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
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(e) {
      var t = e.chat,
        n = e.linkShareLoggingNavigationParams,
        a = o("useWAWebModelValues").useModelValues(t, ["formattedTitle"]),
        i = a.formattedTitle,
        l = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["membershipType", "inviteCode"],
        ),
        u = l || {},
        m = u.inviteCode,
        f = m != null ? _(m) : null,
        g = d(
          function () {
            if (f != null) {
              o("WAWebNewsletterLinkShareLogging").logNewsletterLinkShare({
                shareDirection: o("WAWebWamEnumChannelLinkShareDirection")
                  .CHANNEL_LINK_SHARE_DIRECTION.WHATSAPP,
                linkShareScreen: n.linkShareScreen,
                newsletter: o("WAWebWidFactory").asNewsletterWidOrThrow(t.id),
                linkShareScreenEntryPoint: n.linkShareScreenEntryPoint,
              });
              var e = s._(
                  /*BTDS*/ "Follow the {newsletter_name} channel on WhatsApp: {link}",
                  [s._param("newsletter_name", i), s._param("link", f)],
                ),
                a = s._(/*BTDS*/ "Send channel link to");
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebSendTextFlow.react"), {
                  title: a,
                  text: e.toString(),
                  origin: t.id,
                }),
                { transition: "modal-flow" },
              );
            }
          },
          [f, n, t.id, i],
        ),
        h = d(
          function () {
            f != null && p(f);
          },
          [f],
        );
      return [f, h, g];
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
