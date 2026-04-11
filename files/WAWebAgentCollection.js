__d(
  "WAWebAgentCollection",
  [
    "WAWebAgentModel",
    "WAWebAgentModelUtils",
    "WAWebBaseCollection",
    "WAWebConnModel",
    "WAWebSyncdOrphan",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          (t.$AgentCollectionImpl$p_1 = new Map()),
          (t.triggerDeviceIdMapUpdate = function () {
            ((t.$AgentCollectionImpl$p_1 = new Map()),
              t.getModelsArray().forEach(function (e) {
                t.$AgentCollectionImpl$p_1.set(e.deviceId, e);
              }));
          }),
          t.on("remove reset", t.triggerDeviceIdMapUpdate),
          o("WAWebConnModel").Conn.on("change:pushname", function () {
            var e = t.getModelsArray().filter(function (e) {
              return e.deviceId === o("WAWebAgentModelUtils").PRIMARY_DEVICE_ID;
            })[0];
            e != null &&
              e.set(
                "name",
                o("WAWebAgentModelUtils").getFormattedAgentNameForAgent(e),
              );
          }),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.add = function (n, a) {
          var t = e.prototype.add.call(this, n, a);
          return (
            this.triggerDeviceIdMapUpdate(),
            r("promiseDone")(
              o("WAWebSyncdOrphan").checkOrphanAgents(
                t.map(function (e) {
                  var t;
                  return (t = e == null ? void 0 : e.id) != null ? t : "";
                }),
              ),
            ),
            t
          );
        }),
        (n.getByDeviceId = function (t) {
          return this.$AgentCollectionImpl$p_1.get(t);
        }),
        (n.initializeFromCache = function (t) {
          this.add(t, { merge: !0 });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebAgentModel").Agent;
    var s = new e();
    l.AgentCollection = s;
  },
  98,
);
