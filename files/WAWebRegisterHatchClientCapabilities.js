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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored(["HatchVmClientId"]),
      d = c.HatchVmClientId;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebHatchVmConnection").connectHatchVmApi();
            if (t == null) return { kind: "NoSession" };
            var n = _(),
              r = n.capabilities.rendering.supported_presentations,
              a = yield t.registerCapabilities(n);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return {
        capabilities: { rendering: { supported_presentations: f() } },
        client_id: "whatsapp:" + g(),
        display_name: "WhatsApp Web",
        platform: "whatsapp",
        version: o("WAWebBuildConstants").VERSION_STR,
      };
    }
    function f() {
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
      );
    }
    function g() {
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
