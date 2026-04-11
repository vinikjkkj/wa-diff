__d(
  "WAWebABPropsUpdateFromStorage",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebApiAbPropConfig",
    "WAWebGroupABPropsUpdateFromStorage",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = !1,
              n = t;
            if (!r("gkx")("26258")) {
              var a = yield o(
                "WAWebUserPrefsGeneral",
              ).getWhatsAppWebExternalBetaJoinedIdb();
              r("gkx")("26259") && a
                ? (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[abprops] intern beta joined, using DEBUG defaults",
                      ])),
                  ),
                  (n = !0))
                : t &&
                  a &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[abprops] dev beta joined, using NON-DEBUG defaults",
                      ])),
                  ),
                  (n = !1));
            }
            var i = yield o("WAWebApiAbPropConfig").getABPropConfigs(),
              l = [],
              d = 0,
              m = r("compactMap")(i, function (e) {
                var t = o("WAWebABPropsCache").getABPropConfigNameFromCode(
                  Number(e.configCode),
                );
                if (t == null) (d++, l.length < 3 && l.push(e.configCode));
                else {
                  var a = o("WAWebABPropsConfigs").ABPropConfigs[t],
                    i = a[0],
                    s = a[1],
                    u = a[2],
                    c = a[3],
                    m = n ? c : u,
                    p = o("WAWebABPropsParseConfigValue").parseConfigValue(
                      e.configValue,
                      s,
                      m,
                    ),
                    _;
                  return (
                    !r("gkx")("26258") &&
                      e.overriddenConfigValue != null &&
                      (_ = o("WAWebABPropsParseConfigValue").parseConfigValue(
                        e.overriddenConfigValue,
                        s,
                        m,
                      )),
                    {
                      configCode: i,
                      configValue: p,
                      configExpoKey: e.configExpoKey,
                      hasAccessed: e.hasAccessed,
                      overriddenConfigValue: _,
                    }
                  );
                }
              });
            (d > 0 &&
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[abprops] ",
                    " ABProps in storage unavailable => ",
                    "",
                  ])),
                d,
                l,
              ),
              o("WAWebABPropsCache").bulkCreateOrReplaceABPropConfigs(m),
              o("WAWebABPropsGlobals").updateGlobalExpoKey(),
              o("WAWebABPropsGlobals").updateGlobalABKey(),
              yield o(
                "WAWebGroupABPropsUpdateFromStorage",
              ).updateGroupABPropsFromStorage());
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[abprops] ABProps cache update failed: ",
                    "",
                  ])),
                e,
              )
              .verbose()
              .sendLogs(
                "[abprops] Failed to update ABProps configs cache from storage: " +
                  e,
              );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.updateABPropsFromStorage = d;
  },
  98,
);
