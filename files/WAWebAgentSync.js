__d(
  "WAWebAgentSync",
  [
    "WASyncdConst",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebMsgCollection",
    "WAWebSchemaAgent",
    "WAWebSyncdAction",
    "WAWebUnattributedMessageCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      Promise.resolve().finally(function () {
        o("WAWebUnattributedMessageCollection")
          .UnattributedMessageCollection.getModelsArray()
          .forEach(function (e) {
            var t = e.deviceId,
              n = e.id,
              r = o("WAWebMsgCollection").MsgCollection.get(n);
            if (r != null) {
              var a = o("WAWebAgentCollection").AgentCollection.getByDeviceId(
                t,
              );
              a != null &&
                ((r.agentId = String(a.id)),
                o(
                  "WAWebUnattributedMessageCollection",
                ).UnattributedMessageCollection.remove(n));
            }
          });
      });
    }
    var s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.Agent;
          }),
          (r.getValidatedContentSet = async function (t) {
            var e = t.indexParts,
              n = e[1];
            if (!n) return { result: "malformed_index" };
            var r = t.value.agentAction;
            return r
              ? {
                  result: "ok",
                  content: { operation: "set", agentId: n, agentAction: r },
                }
              : { result: "malformed_value" };
          }),
          (r.getValidatedContentRemove = async function (t) {
            var e = t.indexParts,
              n = e[1];
            return n
              ? { result: "ok", content: { operation: "remove", agentId: n } }
              : { result: "malformed_index" };
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = [],
              a = [],
              i = await Promise.all(
                n.map(function (e) {
                  return t.withValidatedContent(e, async function (e) {
                    var t = e.agentId;
                    e: {
                      var n = e;
                      if (
                        ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.operation === "remove"
                      ) {
                        return (
                          a.push(t),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      if (
                        ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.operation === "set" &&
                        "agentAction" in n
                      ) {
                        var i,
                          l,
                          s,
                          u = n.agentAction,
                          c = o("WAWebAgentModelUtils").getFormattedAgentName(
                            (i = u.name) != null ? i : "",
                            (l = u.deviceID) != null ? l : -1,
                          );
                        return (
                          r.push({
                            id: t,
                            name: c,
                            deviceId: (s = u.deviceID) != null ? s : -1,
                            isDeleted: !!u.isDeleted,
                          }),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          n,
                      );
                    }
                  });
                }),
              );
            return (
              await o("WAWebSchemaAgent").getAgentTable().bulkCreateOrMerge(r),
              o("WAWebAgentCollection").AgentCollection.add(
                r.map(function (e) {
                  return babelHelpers.extends({}, e);
                }),
                { merge: !0 },
              ),
              await o("WAWebSchemaAgent").getAgentTable().bulkRemove(a),
              o("WAWebAgentCollection").AgentCollection.remove(a),
              e(),
              i
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
