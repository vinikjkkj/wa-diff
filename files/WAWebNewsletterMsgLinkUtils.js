__d(
  "WAWebNewsletterMsgLinkUtils",
  [
    "fbt",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebFrontendMsgGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = function (n) {
        var t = o("WAWebFrontendMsgGetters").getChat(n);
        if (!(t.newsletterMetadata == null || n.serverId == null)) {
          var r = t.newsletterMetadata.inviteCode,
            a = "https://whatsapp.com/channel/" + r + "/" + n.serverId;
          o("WAWebCopyToClipboard")
            .copyTextToClipboard(a)
            .then(function (e) {
              e
                ? o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Link copied to clipboard"),
                    }),
                  )
                : o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Couldn't copy to clipboard"),
                    }),
                  );
            })
            .catch(function () {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter msg link] failed to copy link to clipboard",
                  ])),
              );
            });
        }
      };
    l.handleNewsletterMessageLinkCopyClick = d;
  },
  226,
);
