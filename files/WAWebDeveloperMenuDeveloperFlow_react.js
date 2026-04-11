__d(
  "WAWebDeveloperMenuDeveloperFlow.react",
  [
    "WALogger",
    "WAWebDeveloperMenuAbPropsDrawer.react",
    "WAWebDeveloperMenuConstants",
    "WAWebDeveloperMenuDebugCommandsDrawer.react",
    "WAWebDeveloperMenuDeveloperDrawer.react",
    "WAWebDeveloperMenuGroupAbPropsDrawer.react",
    "WAWebDeveloperMenuNuxManagerDrawer.react",
    "WAWebVoipStackInterface",
    "WAWebVoipUiDebugDrawer.react",
    "asyncToGeneratorRuntime",
    "cr:4620",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, s),
        l = i.initialStep,
        u = i.onBack,
        d = i.onCancel,
        m = o("useWAWebFlow").useFlow(
          l != null ? l : o("WAWebDeveloperMenuConstants").DeveloperMenu.Menu,
          { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight },
        ),
        p = m[0],
        _ = m[1];
      if (_.step == null) return null;
      var f;
      switch (_.step) {
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.Menu:
          f = c.jsx(r("WAWebDeveloperMenuDeveloperDrawer.react"), {
            onCancel: d,
            onBack: u,
            onABProps: function () {
              return _.push(
                o("WAWebDeveloperMenuConstants").DeveloperMenu.ABProps,
              );
            },
            onGroupABProps: function () {
              return _.push(
                o("WAWebDeveloperMenuConstants").DeveloperMenu.GroupABProps,
              );
            },
            onNuxManager: function () {
              return _.push(
                o("WAWebDeveloperMenuConstants").DeveloperMenu.NuxManager,
              );
            },
            onDebugCommands: function () {
              return _.push(
                o("WAWebDeveloperMenuConstants").DeveloperMenu.DebugCommands,
              );
            },
            onVoipWasmSamples: function () {
              return _.push(
                o("WAWebDeveloperMenuConstants").DeveloperMenu.VoipWasmSamples,
              );
            },
            onVoipUiDebug: function () {
              return _.push(
                o("WAWebDeveloperMenuConstants").DeveloperMenu.VoipUiDebug,
              );
            },
            onSimulateNativeANR: function () {
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  yield e == null ? void 0 : e.simulateNativeAnr(7e3, !1);
                } catch (e) {}
              })();
            },
          });
          break;
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.ABProps:
          f = c.jsx(r("WAWebDeveloperMenuAbPropsDrawer.react"), {
            onBack: function () {
              return _.pop();
            },
          });
          break;
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.GroupABProps:
          f = c.jsx(r("WAWebDeveloperMenuGroupAbPropsDrawer.react"), {
            onBack: function () {
              return _.pop();
            },
          });
          break;
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.DebugCommands:
          f = c.jsx(r("WAWebDeveloperMenuDebugCommandsDrawer.react"), {
            onBack: function () {
              return _.pop();
            },
          });
          break;
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.NuxManager:
          f = c.jsx(r("WAWebDeveloperMenuNuxManagerDrawer.react"), {
            onBack: function () {
              return _.pop();
            },
          });
          break;
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.VoipUiDebug:
          f = c.jsx(r("WAWebVoipUiDebugDrawer.react"), {
            onBack: function () {
              return _.pop();
            },
          });
          break;
        case o("WAWebDeveloperMenuConstants").DeveloperMenu.VoipWasmSamples:
          if (!n("cr:4620")) {
            (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[developer-menu] VoipWasmSamplesDrawer is not available",
                ])),
            ),
              _.pop());
            break;
          }
          f = c.jsx(n("cr:4620"), {
            onBack: function () {
              return _.pop();
            },
          });
          break;
      }
      return c.jsx(p, { ref: a, flow: _, children: f });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
