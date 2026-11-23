__d(
  "WAWebRegisterHatchClientCapabilities",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBotUtils",
    "WAWebBuildConstants",
    "WAWebHatchFrontendGating",
    "WAWebHatchVmConnection",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored(["HatchVmClientId"]),
      d = c.HatchVmClientId;
    async function m() {
      try {
        var t = await o("WAWebHatchVmConnection").connectHatchVmApi();
        if (t == null) return { kind: "NoSession" };
        var n = p(),
          r = n.capabilities.rendering.supported_presentations,
          a = await t.registerCapabilities(n);
        return (
          a.kind === "Ok"
            ? o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-capabilities: registered presentations=",
                    "",
                  ])),
                r.join(","),
              )
            : o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-capabilities: register failed kind=",
                      "",
                    ])),
                  a.kind,
                )
                .sendLogs("hatch-capabilities-register-failed"),
          { call: a, kind: "Sent", presentations: r }
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-capabilities: register threw",
                ])),
            )
            .sendLogs("hatch-capabilities-register-threw"),
          { kind: "Threw" }
        );
      }
    }
    function p() {
      return {
        capabilities: { rendering: { supported_presentations: _() } },
        client_id: "whatsapp:" + f(),
        display_name: "WhatsApp Web",
        platform: "whatsapp",
        version: o("WAWebBuildConstants").VERSION_STR,
      };
    }
    function _() {
      return [].concat(
        o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()
          ? ["connector_action_card"]
          : [],
        o("WAWebHatchFrontendGating").isHatchSecureCredentialsEnabled()
          ? ["secure_credential_card"]
          : [],
        o("WAWebHatchFrontendGating").isHatchBrowserEnabled(
          o("WAWebBotUtils").HATCH_BOT_FBID_WID,
        )
          ? ["browser_task_card"]
          : [],
        o("WAWebHatchFrontendGating").isHatchJarvisRendererEnabled()
          ? ["jarvis_schema"]
          : [],
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled()
          ? ["pairing_launcher"]
          : [],
      );
    }
    function f() {
      var e = r("WAWebUserPrefsStore").get(d);
      if (typeof e == "string" && e !== "") return e;
      var t = r("WAWebPonyfillsCryptoRandomUUID")();
      return (r("WAWebUserPrefsStore").set(d, t), t);
    }
    ((l.HatchClientCapabilitiesUserPrefs = c),
      (l.registerHatchClientCapabilities = m));
  },
  98,
);
