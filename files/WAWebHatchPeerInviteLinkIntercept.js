__d(
  "WAWebHatchPeerInviteLinkIntercept",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebExternalLink.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchPeerInviteUrl",
    "WDSToastImperativeHost",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = r("JSResourceForInteraction")("WAWebHatchPeerInviteActions").__setRef(
        "WAWebHatchPeerInviteLinkIntercept",
      );
    function _(t) {
      var n;
      try {
        n = g(t);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-peer-invite] link check threw",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-peer-invite-check-threw"),
          !1
        );
      }
      return n === "not_invite_host"
        ? !1
        : n !== "claim"
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-peer-invite] link not claimed: ",
                  "",
                ])),
              n,
            ),
            !1)
          : (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-peer-invite] link claimed",
                ])),
            ),
            p.load().then(
              function (e) {
                e.openHatchPeerInviteInMuse(t).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-peer-invite: open threw",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("hatch-peer-invite-open-threw");
                });
              },
              function (e) {
                (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-peer-invite: actions failed to load",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("hatch-peer-invite-load-failed"),
                  f(t));
              },
            ),
            !0);
    }
    function f(e) {
      o("WDSToastImperativeHost").showWDSToast({
        action: {
          label: s._(/*BTDS*/ "Open link"),
          onPress: function () {
            return o("WAWebExternalLink.react").openExternalLink(e, {
              noApiCmdHandling: !0,
            });
          },
        },
        message: s._(/*BTDS*/ "Couldn't open this invite"),
        type: "error",
      });
    }
    function g(e) {
      var t = o("WAWebHatchPeerInviteUrl").getHatchPeerInviteUrlMismatch(e);
      if (t === "not_url" || t === "other_host") return "not_invite_host";
      if (t != null) return t;
      var n = (function (e) {
        if (e === "linked") return null;
        if (e === "unlinked") return "not_linked";
        if (e == null) return "linked_status_unknown";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getKnownConfirmedLinkedStatusState(),
      );
      return n != null
        ? n
        : o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled()
          ? "claim"
          : "gate_off";
    }
    l.maybeOpenHatchPeerInviteInMuse = _;
  },
  226,
);
