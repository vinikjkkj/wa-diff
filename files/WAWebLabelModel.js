__d(
  "WAWebLabelModel",
  [
    "Promise",
    "WAWebBaseModel",
    "WAWebLabelCollection",
    "WAWebLabelItemCollection",
    "WAWebListItemParentType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.name = o("WAWebBaseModel").prop()),
            (e.colorIndex = o("WAWebBaseModel").prop()),
            (e.color = o("WAWebBaseModel").prop()),
            (e.count = o("WAWebBaseModel").prop(0)),
            (e.chatCount = o("WAWebBaseModel").prop(0)),
            (e.orderIndex = o("WAWebBaseModel").prop()),
            (e.predefinedId = o("WAWebBaseModel").prop()),
            (e.isActive = o("WAWebBaseModel").prop()),
            (e.type = o("WAWebBaseModel").prop()),
            (e.isImmutable = o("WAWebBaseModel").prop()),
            (e.stale = o("WAWebBaseModel").session(!0)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.initialize = function () {
            (t.prototype.initialize.call(this),
              (this.labelItemCollection = new (o(
                "WAWebLabelItemCollection",
              ).LabelItemCollection)()),
              this.$LabelImpl$p_1(),
              this.listenTo(this, "change:name", this.$LabelImpl$p_1),
              this.listenTo(this, "change:color", this.$LabelImpl$p_1),
              this.listenTo(this, "change:colorIndex", this.$LabelImpl$p_1),
              this.listenTo(this, "change:count", this.$LabelImpl$p_1),
              this.listenTo(
                this.labelItemCollection,
                "add",
                this.$LabelImpl$p_2,
              ),
              this.listenTo(
                this.labelItemCollection,
                "remove",
                this.$LabelImpl$p_2,
              ),
              this.orderIndex == null && (this.orderIndex = Number(this.id)));
          }),
          (a.findImpl = function (r) {
            return (e || (e = n("Promise"))).resolve({ id: r });
          }),
          (a.$LabelImpl$p_1 = function () {
            this.name &&
              o("WAWebLabelCollection").LabelCollection.trigger(
                "label_updated_" + this.id,
              );
          }),
          (a.$LabelImpl$p_2 = function () {
            var e = this.labelItemCollection.reduce(function (e, t) {
              switch (t.parentType) {
                case o("WAWebListItemParentType").LabelItemParentType.Chat:
                  return e + 1;
                default:
                  return (t.parentType, e);
              }
            }, 0);
            ((this.chatCount = e), (this.count = e));
          }),
          r
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "label";
    var u = o("WAWebBaseModel").defineModel(s);
    l.Label = u;
  },
  98,
);
