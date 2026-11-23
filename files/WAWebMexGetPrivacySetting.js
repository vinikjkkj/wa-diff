__d(
  "WAWebMexGetPrivacySetting",
  [
    "WAHasProperty",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetPrivacySettingsQuery.graphql",
    "WAWebPrivacySettings",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("WAWebMexGetPrivacySettingsQuery.graphql"));
    async function c(e) {
      var t = await o("WAWebMexClient").fetchQuery(u, {
        input: {
          query_input: [
            { jid: e.jid.toString(), privacy_features: e.privacyFeatures },
          ],
        },
      });
      return d(t);
    }
    function d(e) {
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
                  var a = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").ALL_NONE_WITH_ERROR,
                  );
                  a !== "error"
                    ? (r.readReceipts = a)
                    : _("readReceipts", a + " is unknown type");
                  break;
                }
                case "LAST": {
                  var i = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  i !== "error"
                    ? (r.lastSeen = i)
                    : _("last", i + " is unknown type");
                  break;
                }
                case "ONLINE": {
                  var l = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").ONLINE_VISIBILITY_WITH_ERROR,
                  );
                  l !== "error"
                    ? (r.online = l)
                    : _("online", "categoryValue is unknown type");
                  break;
                }
                case "PROFILE": {
                  var s = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  s !== "error"
                    ? (r.profilePicture = s)
                    : _("profile", "categoryValue is unknown type");
                  break;
                }
                case "ABOUT": {
                  var u = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  u !== "error"
                    ? (r.about = u)
                    : _("about", "categoryValue is unknown type");
                  break;
                }
                case "GROUPADD": {
                  var c = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR,
                  );
                  c !== "error"
                    ? (r.groupAdd = c)
                    : _("groupAdd", "categoryValue is unknown type");
                  break;
                }
                case "CALLADD": {
                  var d = m(
                    t,
                    n,
                    o("WAWebPrivacySettings").CALL_ADD_WITH_ERROR,
                  );
                  d !== "error"
                    ? (r.callAdd = d)
                    : _("callAdd", "categoryValue is unknown type");
                  break;
                }
                case "MESSAGES": {
                  var p = m(t, n, o("WAWebPrivacySettings").ALL_CONTACTS);
                  r.messages = p;
                  break;
                }
                case "DEFENSE": {
                  var f = m(t, n, o("WAWebPrivacySettings").DEFENSE_MODE_STATE);
                  r.defenseMode = f;
                  break;
                }
                case "PIX":
                case "LINKED_PROFILES":
                case "DEPENDENT_ACCOUNT_MESSAGES":
                case "DEPENDENT_ACCOUNT_CALLING":
                case "STICKERS":
                  break;
                default: {
                  _("Feature parsing", t + " is unknown type");
                  break;
                }
              }
          }),
        r
      );
    }
    function m(e, t, n) {
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
        throw new p(
          r("err")('to have "' + e + '"={' + a + '} but has value "' + o + '"'),
        );
      }
      return n[o];
    }
    var p = (function (e) {
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
    function _(e, t) {
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
    ((l.fetchPrivacySettings = c), (l.MexPrivacyParsingError = p));
  },
  98,
);
