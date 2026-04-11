__d(
  "WAWebSettingsModel",
  ["WAWebAccountLinkingConstants", "WAWebBaseModel", "WAWebSettingsGetters"],
  function (t, n, r, o, a, i, l) {
    var e = { classic: !1, enabled: !1 },
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.archive = o("WAWebBaseModel").prop()),
            (e.isFBLinked = o("WAWebBaseModel").prop()),
            (e.isIGLinked = o("WAWebBaseModel").prop()),
            (e.linkState = o("WAWebBaseModel").prop()),
            (e.shareToFB = o("WAWebBaseModel").prop()),
            (e.shareToIG = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.delete = function () {
            (this.set({
              archive: e,
              isFBLinked: !1,
              isIGLinked: !1,
              linkState: o("WAWebAccountLinkingConstants").AccountLinkState
                .Unlinked,
              shareToFB: !1,
              shareToIG: !1,
            }),
              t.prototype.delete.call(this),
              o("WAWebSettingsGetters").clearSettingsGetterCacheFor(this));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "settings";
    var u = o("WAWebBaseModel").defineModel(s),
      c = new u({
        id: "default_settings_id",
        archive: e,
        isFBLinked: !1,
        isIGLinked: !1,
        linkState: o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked,
        shareToFB: !1,
        shareToIG: !1,
      });
    l.default = c;
  },
  98,
);
