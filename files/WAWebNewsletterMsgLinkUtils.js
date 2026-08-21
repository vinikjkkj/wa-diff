__d(
  "WAWebNewsletterMsgLinkUtils",
  [
    "fbt",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebFrontendMsgGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(t) {
      var n = o("WAWebFrontendMsgGetters").getChat(t);
      if (!(n.newsletterMetadata == null || t.serverId == null)) {
        var r = n.newsletterMetadata.inviteCode,
          a = "https://whatsapp.com/channel/" + r + "/" + t.serverId;
        o("WAWebCopyToClipboard")
          .copyTextToClipboard(a)
          .then(function (e) {
            e
              ? o("WAWebToastManager").ToastManager.open(
                  p.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Link copied to clipboard"),
                  }),
                )
              : o("WAWebToastManager").ToastManager.open(
                  p.jsx(o("WAWebToast.react").Toast, {
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
    }
    function f(e) {
      var t,
        n =
          (t = o("WAWebFrontendMsgGetters").getChat(e).newsletterMetadata) ==
          null
            ? void 0
            : t.inviteCode;
      if (n == null || e.serverId == null) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter embed] no invite code or post id for the post snippet",
              ])),
          )
          .tags("newsletter", "embed")
          .sendLogs("newsletter-embed-nothing-to-copy");
        return;
      }
      C(h(n, e.serverId));
    }
    function g(e) {
      var t,
        n = (t = e.newsletterMetadata) == null ? void 0 : t.inviteCode;
      if (n == null) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter embed] no invite code for the channel snippet",
              ])),
          )
          .tags("newsletter", "embed")
          .sendLogs("newsletter-embed-nothing-to-copy");
        return;
      }
      C(h(n, null));
    }
    function h(e, t) {
      var n = "https://whatsapp.com/channel/" + y(e),
        r = t != null ? n + "/" + t : n,
        o = t != null ? '\n  data-wa-channel-post="' + t + '"' : "",
        a =
          t != null
            ? "View this update on WhatsApp"
            : "View this channel on WhatsApp";
      return (
        '<blockquote class="wa-channel-embed"\n' +
        ('  data-wa-channel-permalink="' + n + '"' + o + ">\n") +
        ('  <a href="' + r + '">' + a + "</a>\n") +
        "</blockquote>"
      );
    }
    function y(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/\'/g, "&#039;");
    }
    function C(e) {
      o("WAWebCopyToClipboard")
        .copyTextToClipboard(e)
        .then(function (e) {
          e
            ? o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Embed code copied to clipboard"),
                }),
              )
            : b();
        })
        .catch(function (e) {
          (o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter embed] failed to copy embed code to clipboard",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("newsletter", "embed")
            .sendLogs("newsletter-embed-copy-fail"),
            b());
        });
    }
    function b() {
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't copy to clipboard"),
        }),
      );
    }
    ((l.handleNewsletterMessageLinkCopyClick = _),
      (l.handleNewsletterMsgEmbedClick = f),
      (l.handleNewsletterChannelEmbedClick = g));
  },
  226,
);
