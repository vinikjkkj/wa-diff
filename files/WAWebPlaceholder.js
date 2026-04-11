__d(
  "WAWebPlaceholder",
  [
    "fbt",
    "WAWebCiphertextIcon.react",
    "WAWebFaqUrl",
    "WAWebUnknownIcon.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      t === void 0 && (t = null);
      var n, a, i;
      return (
        e === "fanout"
          ? ((n = s._(/*BTDS*/ "Waiting for this message. Check your phone.")),
            (a = o("WAWebFaqUrl").getFanoutPlaceholderFaqUrl()),
            (i = u.jsx(o("WAWebCiphertextIcon.react").CiphertextIcon, {})))
          : e === "bot_unavailable_fanout" || e === "hosted_unavailable_fanout"
            ? ((n = s._(
                /*BTDS*/ "This message can't be displayed here. Please open WhatsApp on your phone to view the message.",
              )),
              (i = u.jsx(o("WAWebUnknownIcon.react").UnknownIcon, {})))
            : e === "view_once_unavailable_fanout"
              ? (t === !0
                  ? (n = s._(
                      /*BTDS*/ "You sent a view once message from another device.",
                    ))
                  : ((n = s._(
                      /*BTDS*/ "You received a view once message. For added privacy, you can only open it on your phone.",
                    )),
                    (a =
                      o("WAWebFaqUrl").getViewOnceScreenshotProtectionUrl())),
                (i = u.jsx(r("WDSIconWdsIcViewOnce.react"), {})))
              : ((n = s._(
                  /*BTDS*/ "Waiting for this message. This may take a while.",
                )),
                (a = o("WAWebFaqUrl").getCiphertextFaqUrl()),
                (i = u.jsx(o("WAWebCiphertextIcon.react").CiphertextIcon, {}))),
        { placeholderMsg: n, placeholderIcon: i, externalLink: a }
      );
    }
    l.getPlaceholderDetails = c;
  },
  226,
);
