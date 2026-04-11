__d(
  "WAWebAgentSync",
  [
    "Promise",
    "WASyncdConst",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebMsgCollection",
    "WAWebSchemaAgent",
    "WAWebSyncdAction",
    "WAWebUnattributedMessageCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      (e || (e = n("Promise"))).resolve().finally(function () {
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
    var u = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Agent;
          }),
          (a.getValidatedContentSet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.indexParts,
                  n = t[1];
                if (!n) return { result: "malformed_index" };
                var r = e.value.agentAction;
                return r
                  ? {
                      result: "ok",
                      content: { operation: "set", agentId: n, agentAction: r },
                    }
                  : { result: "malformed_value" };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getValidatedContentRemove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.indexParts,
                  n = t[1];
                return n
                  ? {
                      result: "ok",
                      content: { operation: "remove", agentId: n },
                    }
                  : { result: "malformed_index" };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = [],
                  i = [],
                  l = yield (e || (e = n("Promise"))).all(
                    t.map(function (e) {
                      return r.withValidatedContent(
                        e,
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t = e.agentId;
                              e: {
                                var n = e;
                                if (
                                  ((typeof n == "object" && n !== null) ||
                                    typeof n == "function") &&
                                  n.operation === "remove"
                                ) {
                                  return (
                                    i.push(t),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
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
                                  var r,
                                    l,
                                    s,
                                    u = n.agentAction,
                                    c = o(
                                      "WAWebAgentModelUtils",
                                    ).getFormattedAgentName(
                                      (r = u.name) != null ? r : "",
                                      (l = u.deviceID) != null ? l : -1,
                                    );
                                  return (
                                    a.push({
                                      id: t,
                                      name: c,
                                      deviceId:
                                        (s = u.deviceID) != null ? s : -1,
                                      isDeleted: !!u.isDeleted,
                                    }),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    n,
                                );
                              }
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      );
                    }),
                  );
                return (
                  yield o("WAWebSchemaAgent")
                    .getAgentTable()
                    .bulkCreateOrMerge(a),
                  o("WAWebAgentCollection").AgentCollection.add(
                    a.map(function (e) {
                      return babelHelpers.extends({}, e);
                    }),
                    { merge: !0 },
                  ),
                  yield o("WAWebSchemaAgent").getAgentTable().bulkRemove(i),
                  o("WAWebAgentCollection").AgentCollection.remove(i),
                  s(),
                  l
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
