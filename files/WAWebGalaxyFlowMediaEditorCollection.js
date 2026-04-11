__d(
  "WAWebGalaxyFlowMediaEditorCollection",
  ["WAWebBaseCollection", "WAWebGalaxyFlowMediaEditorModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$GalaxyFlowMediaEditorCollectionImpl$p_1 = function (e, n, r) {
            var o,
              a = function () {
                t.trigger("mediaStageChanged", {
                  collectionId: e,
                  mediaId: n.id,
                  stage: n.mediaData.mediaStage,
                  msg: n,
                  maxFileSizeBytes: r,
                });
              };
            ((o = n.mediaData) == null || o.on("change:mediaStage", a),
              n.on("change:deprecatedMms3Url", a));
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addMsg = function (t, n, o) {
          var e = this.get(t);
          if (!e)
            ((e = new (r("WAWebGalaxyFlowMediaEditorModel"))({
              id: t,
              msgs: [n],
            })),
              this.add(e));
          else {
            var a,
              i = (a = e.get("msgs")) != null ? a : [];
            i.find(function (e) {
              return e.id === n.id;
            }) || e.set("msgs", [].concat(i, [n]));
          }
          this.$GalaxyFlowMediaEditorCollectionImpl$p_1(t, n, o);
        }),
        (n.getMsgs = function (t) {
          var e,
            n = this.get(t);
          return n ? ((e = n.get("msgs")) != null ? e : []) : [];
        }),
        (n.deleteMsgs = function (t) {
          var e = this.get(t);
          e && e.set("msgs", []);
        }),
        (n.deleteMsg = function (t, n) {
          var e = this.get(t);
          if (e) {
            var r,
              o = (r = e.get("msgs")) != null ? r : [],
              a = o.filter(function (e) {
                return e.id.id !== n;
              });
            a.length !== o.length && e.set("msgs", a);
          }
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebGalaxyFlowMediaEditorModel");
    var s = new e();
    l.GalaxyFlowMediaEditorCollection = s;
  },
  98,
);
