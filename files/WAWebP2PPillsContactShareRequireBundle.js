__d(
  "WAWebP2PPillsContactShareRequireBundle",
  ["JSResourceForInteraction", "WALogger", "WAPromiseDelays", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")("WAWebP2PPillsContactShare").__setRef(
        "WAWebP2PPillsContactShareRequireBundle",
      );
    async function c(t, n, r) {
      if (
        t.length !== 1 ||
        !t[0].isBusiness ||
        !o("WAWebABProps").getABPropConfigValue("p2p_pills_enabled")
      )
        return null;
      try {
        return await o("WAPromiseDelays").withTimeout(
          d(t[0], n, r == null ? void 0 : r[0]),
          o("WAWebABProps").getABPropConfigValue(
            "p2p_pills_max_wait_on_contact_card_send",
          ) * 1e3,
          function () {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Timed out loading contact card pills",
                    ])),
                )
                .sendLogs("p2p-pills-contact-share-timeout"),
              null
            );
          },
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Error loading contact card pills: ",
                  "",
                ])),
              e,
            )
            .sendLogs("p2p-pills-contact-share-load-failed"),
          null
        );
      }
    }
    async function d(e, t, n) {
      var r = await m(),
        o = r.getContactCardPillsToShare;
      return o(e, t, n);
    }
    function m() {
      return u.load();
    }
    l.getContactCardPillsForSend = c;
  },
  98,
);
