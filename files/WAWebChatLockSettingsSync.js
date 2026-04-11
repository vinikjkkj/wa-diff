__d(
  "WAWebChatLockSettingsSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebChatLockSettings",
    "WAWebProtobufsUserPassword.pb",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.ChatLockSettings;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r,
                  a = 0,
                  i = [],
                  l = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  y = 0,
                  C = t.map(function (e) {
                    if (e.operation !== "set")
                      return (
                        a++,
                        i.length < 3 && i.push(e.operation),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var t = e.value.chatLockSettings;
                    if (t == null)
                      return (
                        l++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        )
                      );
                    var s = t.hideLockedChats,
                      u = t.secretCode;
                    if (s == null)
                      return (
                        f++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        )
                      );
                    if (
                      ((r = { hideLockedChats: s, secretCode: null }),
                      u != null)
                    ) {
                      var c = u.encoding,
                        d = u.transformedData,
                        m = u.transformer,
                        p = u.transformerArg;
                      if (p == null || m == null || d == null || c == null)
                        return (
                          g++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            n.collectionName,
                          )
                        );
                      if (
                        m !==
                        o("WAWebProtobufsUserPassword.pb")
                          .UserPassword$Transformer.PBKDF2_HMAC_SHA512
                      )
                        return (
                          h++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            n.collectionName,
                          )
                        );
                      var _ = p.reduce(function (e, t) {
                        return (
                          t.value == null ||
                            (t.key === "iterations"
                              ? (e.iterations = t.value.asUnsignedInteger)
                              : t.key === "salt" && (e.salt = t.value.asBlob)),
                          e
                        );
                      }, {});
                      if (_.iterations == null || _.salt == null)
                        return (
                          y++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            n.collectionName,
                          )
                        );
                      r.secretCode = {
                        iterations: _.iterations,
                        encoding: c,
                        salt: _.salt,
                        transformer: m,
                        data: d,
                      };
                    }
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Success,
                    };
                  });
                if (
                  (a > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatLockSettingsSync: ",
                          " operations not supported => ",
                          "",
                        ])),
                      a,
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatLockSettingsSync: ",
                          " malformed mutations: settings is null",
                        ])),
                      l,
                    ),
                  f > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatLockSettingsSync: ",
                          " malformed: hideLockedChats null",
                        ])),
                      f,
                    ),
                  g > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatLockSettingsSync: ",
                          " malformed: secret data missing",
                        ])),
                      g,
                    ),
                  h > 0 &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatLockSettingsSync: ",
                          " malformed: transformer incompatible",
                        ])),
                      h,
                    ),
                  y > 0 &&
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatLockSettingsSync: ",
                          " malformed: transformer args missing",
                        ])),
                      y,
                    ),
                  r != null)
                ) {
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: saving chatlock settings",
                      ])),
                  );
                  var b = o("WAWebChatLockSettings").getChatLockSettings();
                  b.updateAndSave(r);
                } else
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: mutations parse failed",
                      ])),
                  );
                return C;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
