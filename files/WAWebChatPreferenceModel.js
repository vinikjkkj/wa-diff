__d(
  "WAWebChatPreferenceModel",
  ["WAWebBaseModel", "WAWebChatPreferenceCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = "defaultPreference",
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.wallpaper = o("WAWebBaseModel").prop()),
            (t.saveToCameraRoll = o("WAWebBaseModel").prop()),
            (t.showDoodle = o("WAWebBaseModel").prop()),
            (t.spellcheck = o("WAWebBaseModel").prop()),
            (t.transformTextEmoji = o("WAWebBaseModel").prop()),
            (t.enterIsSend = o("WAWebBaseModel").prop()),
            (t.showExpandedComposer = o("WAWebBaseModel").prop()),
            (t.autoplayAnimatedImages = o("WAWebBaseModel").prop()),
            (t.hdMediaEnabled = o("WAWebBaseModel").prop()),
            (t.chatThemeId = o("WAWebBaseModel").prop()),
            (t.colorSchemeId = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getCollection = function () {
            return r("WAWebChatPreferenceCollection");
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    ((s.Proxy = "chatPreference"),
      (s.idClass = r("WAWebWid")),
      (s.allowedIds = [e]));
    var u = o("WAWebBaseModel").defineModel(s);
    ((l.DEFAULT_PREFERENCE = e), (l.ChatPreference = u));
  },
  98,
);
