__d(
  "WAWebMexGetPrivacySetting",
  [
    "WAHasProperty",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetPrivacySettingsQuery.graphql",
    "WAWebPrivacySettings",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("WAWebMexGetPrivacySettingsQuery.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMexClient").fetchQuery(u, {
            input: {
              query_input: [
                { jid: e.jid.toString(), privacy_features: e.privacyFeatures },
              ],
            },
          });
          return m(t);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t,
        n,
        r = {};
      if (
        ((t = e.xwa2_fetch_wa_users) == null
          ? void 0
          : t[0].privacy_settings) == null
      )
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          400,
          "privacy_settings is null",
        );
      return (
        (n = e.xwa2_fetch_wa_users) == null ||
          (n = n[0].privacy_settings) == null ||
          (n = n.settings) == null ||
          n.forEach(function (e) {
            var t = e.feature,
              n = e.setting;
            if (!(t == null || n == null))
              switch (t) {
                case "READRECEIPTS": {
                  var a = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").ALL_NONE_WITH_ERROR,
                  );
                  a !== "error"
                    ? (r.readReceipts = a)
                    : f("readReceipts", a + " is unknown type");
                  break;
                }
                case "LAST": {
                  var i = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  i !== "error"
                    ? (r.lastSeen = i)
                    : f("last", i + " is unknown type");
                  break;
                }
                case "ONLINE": {
                  var l = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").ONLINE_VISIBILITY_WITH_ERROR,
                  );
                  l !== "error"
                    ? (r.online = l)
                    : f("online", "categoryValue is unknown type");
                  break;
                }
                case "PROFILE": {
                  var s = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  s !== "error"
                    ? (r.profilePicture = s)
                    : f("profile", "categoryValue is unknown type");
                  break;
                }
                case "ABOUT": {
                  var u = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  u !== "error"
                    ? (r.about = u)
                    : f("about", "categoryValue is unknown type");
                  break;
                }
                case "GROUPADD": {
                  var c = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  c !== "error"
                    ? (r.groupAdd = c)
                    : f("groupAdd", "categoryValue is unknown type");
                  break;
                }
                case "CALLADD": {
                  var d = p(
                    t,
                    n,
                    o("WAWebPrivacySettings").CALL_ADD_WITH_ERROR,
                  );
                  d !== "error"
                    ? (r.callAdd = d)
                    : f("callAdd", "categoryValue is unknown type");
                  break;
                }
                case "MESSAGES": {
                  var m = p(t, n, o("WAWebPrivacySettings").ALL_CONTACTS);
                  r.messages = m;
                  break;
                }
                case "DEFENSE": {
                  var _ = p(t, n, o("WAWebPrivacySettings").DEFENSE_MODE_STATE);
                  r.defenseMode = _;
                  break;
                }
                case "PIX":
                case "LINKED_PROFILES":
                case "DEPENDENT_ACCOUNT_MESSAGES":
                case "DEPENDENT_ACCOUNT_CALLING":
                case "STICKERS":
                  break;
                default: {
                  f("Feature parsing", t + " is unknown type");
                  break;
                }
              }
          }),
        r
      );
    }
    function p(e, t, n) {
      var o = t.toLowerCase();
      switch (t) {
        case "MYCONTACTS":
          o = "contacts";
          break;
        case "MYCONTACTSEXCEPT":
          o = "contact_blacklist";
          break;
        default:
          break;
      }
      if (!r("WAHasProperty")(n, o)) {
        var a = Object.keys(n).join("|");
        throw new _(
          r("err")('to have "' + e + '"={' + a + '} but has value "' + o + '"'),
        );
      }
      return n[o];
    }
    var _ = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.name = "MexPrivacyParsingError"),
          (n.error = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function f(e, t) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "mexGetPrivacy error: ",
              " - text ",
              "",
            ])),
          e,
          t,
        )
        .sendLogs("mexGetPrivacy", { sampling: 0.01 });
    }
    ((l.fetchPrivacySettings = c), (l.MexPrivacyParsingError = _));
  },
  98,
);
