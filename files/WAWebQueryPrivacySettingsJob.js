__d(
  "WAWebQueryPrivacySettingsJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebMexGetPrivacySetting",
    "WAWebPrivacySettings",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(t, n) {
      var r = n.maybeChild("error"),
        a = r && r.maybeAttrString("code"),
        i = r && r.maybeAttrString("text");
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "getPrivacy error: ",
              " - code ",
              " text ",
              "",
            ])),
          t,
          a,
          i,
        )
        .sendLogs("getPrivacy", { sampling: 0.01 });
    }
    var _ = new (r("WADeprecatedWapParser"))("privacyParser", function (e) {
      e.assertAttr("type", "result");
      var t = {};
      return (
        e.child("privacy").forEachChildWithTag("category", function (e) {
          var n = e.attrString("name");
          e: {
            if (n === "readreceipts") {
              var r = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").ALL_NONE_WITH_ERROR,
              );
              r !== "error" ? (t.readReceipts = r) : p("readreceipts", e);
              break e;
            }
            if (n === "last") {
              var a = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
              );
              a !== "error" ? (t.lastSeen = a) : p("last", e);
              break e;
            }
            if (n === "online") {
              var i = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").ONLINE_VISIBILITY_WITH_ERROR,
              );
              i !== "error" ? (t.online = i) : p("online", e);
              break e;
            }
            if (n === "profile") {
              var l = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
              );
              l !== "error" ? (t.profilePicture = l) : p("profile", e);
              break e;
            }
            if (n === "status") {
              var s = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
              );
              s !== "error" ? (t.about = s) : p("status", e);
              break e;
            }
            if (n === "groupadd") {
              var u = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
              );
              u !== "error" ? (t.groupAdd = u) : p("groupadd", e);
              break e;
            }
            if (n === "calladd") {
              var c = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").CALL_ADD_WITH_ERROR,
              );
              c !== "error" ? (t.callAdd = c) : p("calladd", e);
              break e;
            }
            if (n === "messages") {
              var d = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").ALL_CONTACTS,
              );
              t.messages = d;
              break e;
            }
            if (n === "defense") {
              var m = e.attrEnum(
                "value",
                o("WAWebPrivacySettings").DEFENSE_MODE_STATE,
              );
              t.defenseMode = m;
              break e;
            }
            if (
              n === "pix" ||
              n === "linked_profiles" ||
              n === "stickers" ||
              n === "dependentaccountmessages" ||
              n === "cover_photo" ||
              n === "dependent_account_calling" ||
              n === "groupcreation"
            )
              break e;
            {
              p(n + " is unknown type", e);
              break e;
            }
          }
        }),
        t
      );
    });
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (
            o("WAWebABProps").getABPropConfigValue(
              "mex_get_privacy_settings_mode",
            ) === 1 &&
            e != null
          )
            return yield h(e);
          if (
            o("WAWebABProps").getABPropConfigValue(
              "mex_get_privacy_settings_mode",
            ) === 2 &&
            e != null
          ) {
            var t,
              n = yield v(e);
            return (R(n), (t = n.xmlPrivacyResult.response) != null ? t : {});
          }
          return yield C();
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebMexGetPrivacySetting").fetchPrivacySettings({
            jid: e,
            privacyFeatures: [
              "LAST",
              "ONLINE",
              "PROFILE",
              "ABOUT",
              "READRECEIPTS",
              "GROUPADD",
              "CALLADD",
              "STICKERS",
              "MESSAGES",
              "DEFENSE",
            ],
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = (e = o("WAWap")).wap(
              "iq",
              {
                xmlns: "privacy",
                to: e.S_WHATSAPP_NET,
                type: "get",
                id: e.generateId(),
              },
              e.wap("privacy", null),
            ),
            n = yield o("WADeprecatedSendIq").deprecatedSendIq(t, _);
          if (n.success) return n.result;
          throw (
            o("WAWebABProps").getABPropConfigValue(
              "mex_get_privacy_settings_mode",
            ) === 2 &&
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "getPrivacyShadowMode: Request failed over SMAX errorCode:  ",
                      ":",
                      "",
                    ])),
                  n.errorCode,
                  n.errorType,
                )
                .sendLogs("getPrivacyShadowMode", { sampling: 0.01 }),
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              n.errorCode,
              n.errorText,
            )
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = yield C()
              .then(function (e) {
                return ((n = !0), e);
              })
              .catch(function (e) {
                t = e;
              }),
            o,
            a,
            i = yield h(e)
              .then(function (e) {
                return ((a = !0), e);
              })
              .catch(function (e) {
                o = e;
              });
          return {
            xmlPrivacyResult: { response: r, isSuccess: n === !0, error: t },
            mexPrivacyInfo: { response: i, isSuccess: a === !0, error: o },
          };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = e.mexPrivacyInfo,
        n = e.xmlPrivacyResult,
        r = t.response,
        a = n.response;
      if (n.isSuccess && t.isSuccess && r != null && a != null) {
        var i = [];
        (r.readReceipts !== a.readReceipts && i.push("readReceipts"),
          r.groupAdd !== a.groupAdd && i.push("groupAdd"),
          r.profilePicture !== a.profilePicture && i.push("profilePicture"),
          r.about !== a.about && i.push("about"),
          r.lastSeen !== a.lastSeen && i.push("lastSeen"),
          r.online !== a.online && i.push("online"),
          r.callAdd !== a.callAdd && i.push("callAdd"),
          r.messages !== a.messages && i.push("messages"),
          r.defenseMode !== a.defenseMode && i.push("defenseMode"),
          i.length > 0 &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getPrivacy: MEX/XML settings mismatch",
                  ])),
              )
              .sendLogs(
                "getPrivacy-xml-mex-privacySettings-notEqual mismatched fields: " +
                  JSON.stringify(i),
                { sampling: 0.01 },
              ));
      }
      if (
        (n.isSuccess &&
          !t.isSuccess &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getPrivacy: xml query succeeded but mex query failed",
                ])),
            )
            .sendLogs("getPrivacy-xml-succeeded-mex-failed", {
              sampling: 0.01,
            }),
        !n.isSuccess &&
          t.isSuccess &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "getPrivacy: mex query succeeded but xml query failed ",
                ])),
            )
            .sendLogs("getPrivacy-mex-succeeded-xml-failed", {
              sampling: 0.01,
            }),
        !n.isSuccess && !t.isSuccess)
      ) {
        var l, m;
        ((l = n.error) == null ? void 0 : l.statusCode) !==
          ((m = t.error) == null ? void 0 : m.statusCode) &&
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "getPrivacy: xml/mex error codes mismatch",
                ])),
            )
            .sendLogs("getPrivacy-error-codes-notEqual", { sampling: 0.01 });
      }
      if (!n.isSuccess) throw n.error;
    }
    l.getPrivacy = f;
  },
  98,
);
