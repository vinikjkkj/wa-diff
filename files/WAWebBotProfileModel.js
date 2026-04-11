__d(
  "WAWebBotProfileModel",
  ["WAWebBaseModel", "WAWebContactCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.attrs = o("WAWebBaseModel").prop("")),
          (t.description = o("WAWebBaseModel").prop()),
          (t.category = o("WAWebBaseModel").prop()),
          (t.isDefault = o("WAWebBaseModel").prop()),
          (t.prompts = o("WAWebBaseModel").prop(function () {
            return [];
          })),
          (t.personaId = o("WAWebBaseModel").prop()),
          (t.commands = o("WAWebBaseModel").prop(function () {
            return [];
          })),
          (t.commandsDescription = o("WAWebBaseModel").prop()),
          (t.isMetaCreated = o("WAWebBaseModel").prop()),
          (t.creatorName = o("WAWebBaseModel").prop()),
          (t.creatorProfileUrl = o("WAWebBaseModel").prop()),
          (t.posingAsProfessional = o("WAWebBaseModel").prop()),
          (t.lastUpdateTs = o("WAWebBaseModel").prop()),
          (t.contact = o("WAWebBaseModel").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            this.addChild(
              "contact",
              o("WAWebContactCollection").ContactCollection.gadd({
                id: this.id,
                name: this.name,
                verifiedName: this.name,
                shortName: this.name,
                pushName: this.name,
                isBusiness: !0,
                type: "out",
              }),
            ));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "botProfile"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
