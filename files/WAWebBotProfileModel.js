__d(
  "WAWebBotProfileModel",
  [
    "WAWebBaseModel",
    "WAWebBotExposedName",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.name = o("WAWebBaseModel").prop()),
            (e.attrs = o("WAWebBaseModel").prop("")),
            (e.description = o("WAWebBaseModel").prop()),
            (e.category = o("WAWebBaseModel").prop()),
            (e.isDefault = o("WAWebBaseModel").prop()),
            (e.prompts = o("WAWebBaseModel").prop(function () {
              return [];
            })),
            (e.personaId = o("WAWebBaseModel").prop()),
            (e.commands = o("WAWebBaseModel").prop(function () {
              return [];
            })),
            (e.commandsDescription = o("WAWebBaseModel").prop()),
            (e.isMetaCreated = o("WAWebBaseModel").prop()),
            (e.creatorName = o("WAWebBaseModel").prop()),
            (e.creatorProfileUrl = o("WAWebBaseModel").prop()),
            (e.posingAsProfessional = o("WAWebBaseModel").prop()),
            (e.lastUpdateTs = o("WAWebBaseModel").prop()),
            (e.product = o("WAWebBaseModel").prop()),
            (e.isDeprecated = o("WAWebBaseModel").prop()),
            (e.isDeleted = o("WAWebBaseModel").prop()),
            (e.lastFetchedTimeMs = o("WAWebBaseModel").prop()),
            (e.contact = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.initialize = function () {
            var n = this;
            (t.prototype.initialize.call(this),
              this.addChild(
                "contact",
                o("WAWebContactCollection").ContactCollection.gadd({
                  id: this.id,
                  name: this.name,
                  verifiedName: this.name,
                  shortName: this.name,
                  pushname: this.name,
                  isBusiness: !0,
                  type: "out",
                }),
              ),
              this.listenTo(
                this,
                "change:product change:isDeprecated change:isDeleted",
                function () {
                  (n.$BotProfile$p_1(), n.$BotProfile$p_2());
                },
              ),
              this.listenTo(this, "change:name", function () {
                n.$BotProfile$p_2();
              }),
              this.listenTo(this, "destroy", function () {
                e.delete(n.id.toString());
              }),
              this.$BotProfile$p_1(),
              this.$BotProfile$p_2());
          }),
          (r.$BotProfile$p_1 = function () {
            var e = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
              this.id,
            );
            e != null && o("WAWebChatGroupUtils").updateCanSend(e);
          }),
          (r.$BotProfile$p_2 = function () {
            if (this.contact != null && !this.id.isAiHub()) {
              var t = !o("WAWebBotExposedName").shouldDisplayProfileName(
                  this.id,
                  {
                    product: this.product,
                    isDeprecated: this.isDeprecated,
                    isDeleted: this.isDeleted,
                  },
                  this.name,
                ),
                n = this.id.toString();
              if (t) {
                e.has(n) ||
                  e.set(n, {
                    name: this.contact.name,
                    verifiedName: this.contact.verifiedName,
                    shortName: this.contact.shortName,
                    pushname: this.contact.pushname,
                  });
                var r = o("WAWebBotExposedName").getUnknownAccountName();
                this.contact.set({
                  name: r,
                  verifiedName: r,
                  shortName: r,
                  pushname: r,
                });
              } else {
                var a = e.get(n);
                (e.delete(n),
                  this.name != null && this.name !== ""
                    ? this.contact.set({
                        name: this.name,
                        verifiedName: this.name,
                        shortName: this.name,
                        pushname: this.name,
                      })
                    : a != null &&
                      this.contact.set(babelHelpers.extends({}, a)));
              }
            }
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    ((s.Proxy = "botProfile"), (s.idClass = r("WAWebWid")));
    var u = o("WAWebBaseModel").defineModel(s);
    l.default = u;
  },
  98,
);
