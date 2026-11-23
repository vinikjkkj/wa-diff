__d(
  "WAFlowJSONData",
  [
    "invariant",
    "WAFlowJSONConstants",
    "WAFlowJSONLineColumnPointerUtil",
    "WAFlowJSONRuntimeSchema",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONVersionUtils",
    "WATypeUtils",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Set([
        (e = o("WAFlowJSONConstants")).WAFlowsActionType.COMPLETE,
        e.WAFlowsActionType.NAVIGATE,
        e.WAFlowsActionType.DATA_EXCHANGE,
        e.WAFlowsActionType.UPDATE_DATA,
      ]),
      c = new Set([
        e.WA_FLOW_JSON_COMPONENT_TYPE.CHECKBOX_GROUP,
        e.WA_FLOW_JSON_COMPONENT_TYPE.DROPDOWN,
        e.WA_FLOW_JSON_COMPONENT_TYPE.RADIO_BUTTONS_GROUP,
      ]);
    c.add(e.WA_FLOW_JSON_COMPONENT_TYPE.CHIPS_SELECTOR);
    var d = (function () {
      function e(e) {
        ((this.schema = {}), (this.flowJson = JSON.parse(e)));
        var t = o("WAFlowJSONVersionUtils").getFlowJSONVersionInternal(
          this.flowJson.version,
        );
        (t != null || s(0, 80945),
          (this.version = t),
          (this.flowJSONPointers = o(
            "WAFlowJSONLineColumnPointerUtil",
          ).getWAFlowJSONLineColumnPointerData(e)),
          (this.dataChannelLessActionData = new Map()),
          (this.dataChannelActionData = new Map()),
          (this.actionData = new Map()),
          (this.generatedRoutingModel = new Map()),
          (this.generatedRoutingModelScreens = new Set()),
          (this.screenData = new Map()),
          (this.componentNameDataMap = new Map()),
          (this.componentTypeDataMap = new Map()),
          (this.incomingScreensMap = new Map()),
          (this.flattenComponents = new Map()));
      }
      var t = e.prototype;
      return (
        (t.initData = function () {
          for (
            var e = this.flowJson.screens, t = new Map(), n = 0;
            n < e.length;
            n++
          ) {
            var a,
              i,
              l = e[n],
              s =
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                "/" +
                n +
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_PROPERTY_LAYOUT +
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_CHILDREN;
            this.screenData.set(l.id, { index: n, data: l });
            var c =
                (a = (i = l.layout) == null ? void 0 : i.children) != null
                  ? a
                  : [],
              d = C(u);
            (m(s, l.id, c, d), (t = y(t, d)));
            var p = o(
              "WAFlowJSONSchemaUtils",
            ).getFlattenComponentsFromChildrenArray(s, !1, c);
            (this.flattenComponents.set(l.id, p),
              this.initComponentDataMaps(l.id, p));
          }
          (this.initRoutingModel(t, this.getNavigationListScreens()),
            this.initIncomingScreensMap(),
            (this.schema = r("WAFlowJSONRuntimeSchema")(this.version)));
        }),
        (t.initIncomingScreensMap = function () {
          var e = this,
            t =
              this.flowJson.routing_model == null
                ? this.generatedRoutingModel
                : new Map(Object.entries(this.flowJson.routing_model));
          t.forEach(function (t, n) {
            for (var r of t)
              (v(e.incomingScreensMap, n, r), v(e.incomingScreensMap, r, n));
          });
        }),
        (t.initRoutingModel = function (t, n) {
          var e = this;
          (this.filterActions(t),
            (this.generatedRoutingModel = this.hasDataChannelLessAction()
              ? b(
                  this.dataChannelLessActionData,
                  this.getAllScreenIds(),
                  n,
                  this.isDataChannelLessFlow(),
                )
              : new Map()),
            (this.generatedRoutingModelScreens = new Set(
              this.generatedRoutingModel.keys(),
            )),
            this.generatedRoutingModel.forEach(function (t, n) {
              (e.generatedRoutingModelScreens.add(n),
                t.forEach(function (t) {
                  e.generatedRoutingModelScreens.add(t);
                }));
            }));
        }),
        (t.filterActions = function (t) {
          var e,
            n,
            r,
            a,
            i = this,
            l;
          ((this.dataChannelActionData = C(
            new Set([
              (l = o("WAFlowJSONConstants")).WAFlowsActionType.DATA_EXCHANGE,
              l.WAFlowsActionType.NAVIGATE,
            ]),
          )),
            (this.dataChannelLessActionData = C(
              new Set([
                l.WAFlowsActionType.COMPLETE,
                l.WAFlowsActionType.NAVIGATE,
              ]),
            )),
            (this.actionData = C(new Set([l.WAFlowsActionType.UPDATE_DATA]))),
            this.dataChannelActionData.set(
              l.WAFlowsActionType.DATA_EXCHANGE,
              (e = t.get(
                o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
              )) != null
                ? e
                : [],
            ),
            this.dataChannelLessActionData.set(
              o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
              (n = t.get(
                o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
              )) != null
                ? n
                : [],
            ),
            this.actionData.set(
              o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
              (r = t.get(
                o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
              )) != null
                ? r
                : [],
            ),
            (a = t.get(o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE)) ==
              null ||
              a.forEach(function (e) {
                var t,
                  n = (t = e.actionValue.next) == null ? void 0 : t.type;
                if (n === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_SCREEN) {
                  var r;
                  (r = i.dataChannelLessActionData.get(
                    o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
                  )) == null || r.push(e);
                } else {
                  var a;
                  (a = i.dataChannelActionData.get(
                    o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
                  )) == null || a.push(e);
                }
              }));
        }),
        (t.initComponentDataMaps = function (t, n) {
          var e = new Map(),
            r = new Map();
          (n.forEach(function (t) {
            var n,
              a = t.component.type,
              i = t.component.name;
            if (
              (e.has(a) || e.set(a, []),
              (n = e.get(a)) == null || n.push(t),
              o("WATypeUtils").isString(i))
            ) {
              var l;
              (r.has(i) || r.set(i, []), (l = r.get(i)) == null || l.push(t));
            }
          }),
            this.componentTypeDataMap.set(t, e),
            this.componentNameDataMap.set(t, r));
        }),
        (t.hasDataChannelLessAction = function () {
          return Array.from(this.dataChannelLessActionData.values()).some(
            function (e) {
              return e.length > 0;
            },
          );
        }),
        (t.getRoutingModel = function () {
          var e;
          return (e = this.flowJson.routing_model) != null ? e : {};
        }),
        (t.getAllScreenIds = function () {
          return Array.from(this.screenData.keys());
        }),
        (t.getEntryScreenIds = function () {
          var e = this.getAllScreenIds(),
            t = this.getRoutingModelDestinations();
          return e.filter(function (e) {
            return !t.has(e);
          });
        }),
        (t.getEntryScreenIdsWithNaviagteActionIncluded = function () {
          var e = this.getAllScreenIds(),
            t = Array.from(this.getRoutingModelDestinations()),
            n = Array.from(this.getDestinationFromNavigateActions()),
            r = new Set([].concat(t, n));
          return e.filter(function (e) {
            return !r.has(e);
          });
        }),
        (t.getNavigationListScreens = function () {
          var e = this,
            t = this.getAllScreenIds();
          return new Set(
            t.filter(function (t) {
              return (
                e.findComponent(
                  t,
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                    .NAVIGATION_LIST,
                ) != null
              );
            }),
          );
        }),
        (t.getEntryScreensFromGeneratedRouting = function () {
          var e = this.getAllScreenIds(),
            t = Array.from(this.generatedRoutingModel.values()).flat();
          return e.filter(function (e) {
            return !t.includes(e);
          });
        }),
        (t.getTerminalScreens = function () {
          return new Set(
            this.flowJson.screens
              .filter(function (e) {
                return e.terminal === !0;
              })
              .map(function (e) {
                return e.id;
              }),
          );
        }),
        (t.getRoutingModelDestinations = function () {
          return new Set(Object.values(this.getRoutingModel()).flat());
        }),
        (t.getDestinationFromNavigateActions = function () {
          var e = r("filterNulls")(
            this.getAllActions()
              .filter(function (e) {
                var t;
                return (
                  ((t = e.actionValue) == null ? void 0 : t.name) ===
                  o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE
                );
              })
              .map(function (e) {
                var t,
                  n = (t = e.actionValue) == null ? void 0 : t.next;
                if (n == null) return null;
                for (var r of Object.entries(n)) {
                  var o = r[0],
                    a = r[1];
                  if (o === "name" && typeof a == "string") return a;
                }
                return null;
              }),
          );
          return new Set(e);
        }),
        (t.getScreensWithRefreshOnBackTrue = function () {
          return this.flowJson.screens
            .filter(function (e) {
              return e.refresh_on_back === !0;
            })
            .map(function (e) {
              return e.id;
            });
        }),
        (t.isDataChannelLessFlow = function () {
          return this.flowJson.data_api_version == null;
        }),
        (t.getTemplateVersion = function () {
          return this.version;
        }),
        (t.getDataApiVersion = function () {
          return this.flowJson.data_api_version;
        }),
        (t.getScreenIndex = function (t) {
          var e, n;
          return (e =
            (n = this.screenData.get(t)) == null ? void 0 : n.index) != null
            ? e
            : -1;
        }),
        (t.getScreenLayout = function (t) {
          var e;
          return (e = this.screenData.get(t)) == null ||
            (e = e.data) == null ||
            (e = e.layout) == null
            ? void 0
            : e.type;
        }),
        (t.getFlowJSONSchema = function () {
          return (this.schema != null || s(0, 86970), this.schema);
        }),
        (t.getFlattenComponents = function (t, n) {
          var e, r;
          return (
            n === void 0 && (n = []),
            (e =
              (r = this.flattenComponents.get(t)) == null
                ? void 0
                : r.filter(function (e) {
                    return !n.includes(e.component.type);
                  })) != null
              ? e
              : []
          );
        }),
        (t.findComponent = function (t, n) {
          var e = this.getComponentDataByType(t, n);
          return e.length > 0 ? e[0].component : null;
        }),
        (t.getComponentDataByName = function (t, n) {
          var e;
          return (e = this.componentNameDataMap.get(t)) == null ||
            (e = e.get(n)) == null
            ? void 0
            : e[0];
        }),
        (t.getComponentDataByType = function (t, n) {
          var e = this,
            r = Array.isArray(n) ? n : [n];
          return r
            .map(function (n) {
              var r, o;
              return (r =
                (o = e.componentTypeDataMap.get(t)) == null
                  ? void 0
                  : o.get(n)) != null
                ? r
                : [];
            })
            .flat();
        }),
        (t.getAllActions = function () {
          var e = [];
          return (
            this.dataChannelLessActionData.forEach(function (t) {
              return e.push.apply(e, t);
            }),
            this.dataChannelActionData.forEach(function (t) {
              return e.push.apply(e, t);
            }),
            this.actionData.forEach(function (t) {
              return e.push.apply(e, t);
            }),
            e
          );
        }),
        (t.getScreenPointer = function (t) {
          var e = this.getScreenIndex(t);
          return e >= 0
            ? "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS + "/" + e
            : "";
        }),
        e
      );
    })();
    function m(e, t, n, r) {
      for (
        var a = function () {
            var a = n[i],
              l = e + "/" + i;
            if (
              a.type ===
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM
            )
              m(
                l + "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_CHILDREN,
                t,
                a.children,
                r,
              );
            else if (
              a.type === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF
            ) {
              var s;
              (m(
                l + "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_THEN,
                t,
                a.then,
                r,
              ),
                m(
                  l + "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ELSE,
                  t,
                  (s = a.else) != null ? s : [],
                  r,
                ));
            } else if (
              a.type ===
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH
            )
              for (var u of Object.entries(a.cases)) {
                var c = u[0],
                  d = u[1];
                m(l + "/cases/" + c, t, d, r);
              }
            else {
              var f;
              [
                p([
                  (f = o("WAFlowJSONConstants")).WA_FLOW_JSON_ON_CLICK_ACTION,
                  f.WA_FLOW_JSON_ON_SELECT_ACTION,
                  f.WA_FLOW_JSON_ON_UNSELECT_ACTION,
                ]),
                _([
                  f.WA_FLOW_JSON_ON_SELECT_ACTION,
                  f.WA_FLOW_JSON_ON_UNSELECT_ACTION,
                ]),
              ].forEach(function (e) {
                return e(l, t, a, r);
              });
            }
          },
          i = 0;
        i < n.length;
        i++
      )
        a();
    }
    function p(e) {
      return function (t, n, r, o) {
        f(e, t, n, r, o);
      };
    }
    function _(e) {
      return function (t, n, r, o) {
        g(e, t, n, r, o);
      };
    }
    function f(e, t, n, r, o) {
      e.forEach(function (e) {
        Object.prototype.hasOwnProperty.call(r, e) &&
          h(t + "/" + e, n, r[e], r, o, !1);
      });
    }
    function g(e, t, n, r, a) {
      var i = r[o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE];
      if (
        !(
          !c.has(r.type) ||
          !Object.prototype.hasOwnProperty.call(
            r,
            o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE,
          ) ||
          !Array.isArray(i)
        )
      ) {
        var l = function () {
          var i = s[0],
            l = s[1];
          e.forEach(function (e) {
            Object.prototype.hasOwnProperty.call(l, e) &&
              h(
                t +
                  "/" +
                  o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE +
                  "/" +
                  i +
                  "/" +
                  e,
                n,
                l[e],
                r,
                a,
                !0,
              );
          });
        };
        for (var s of i.entries()) l();
      }
    }
    function h(e, t, n, r, o, a) {
      if (n && e && u.has(n.name)) {
        var i;
        (i = o.get(n.name)) == null ||
          i.push({
            jsonDataPointer: e,
            screenId: t,
            actionValue: n,
            component: r,
            isFromDataSource: a,
          });
      }
    }
    function y(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e, t) {
          var r;
          (n.has(t) || n.set(t, []),
            (r = n.get(t)) == null || r.push.apply(r, e));
        }),
        t.forEach(function (e, t) {
          var r;
          (n.has(t) || n.set(t, []),
            (r = n.get(t)) == null || r.push.apply(r, e));
        }),
        n
      );
    }
    function C(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          t.set(e, []);
        }),
        t
      );
    }
    function b(e, t, n, r) {
      var a,
        i,
        l = new Map(),
        s =
          (a = e.get(o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE)) !=
          null
            ? a
            : [];
      for (var u of s) {
        var c,
          d,
          m = u.screenId,
          p = (c = u.actionValue.next) == null ? void 0 : c.name;
        if (
          (l.has(m) || l.set(m, []),
          o("WATypeUtils").isString(p) && !l.has(p) && l.set(p, []),
          o("WATypeUtils").isString(p) &&
            !((d = l.get(m)) != null && d.includes(p)))
        ) {
          var _;
          (_ = l.get(m)) == null || _.push(p);
        }
      }
      var f =
        (i = e.get(o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE)) != null
          ? i
          : [];
      for (var g of f) {
        var h = g.screenId;
        l.has(h) || l.set(h, []);
      }
      if (r) {
        var y = function (n) {
          var e = t.filter(function (e) {
            return e !== n;
          });
          l.set(n, e);
        };
        for (var C of n) y(C);
      }
      return l;
    }
    function v(e, t, n) {
      var r;
      (e.has(t) || e.set(t, new Set()), (r = e.get(t)) == null || r.add(n));
    }
    l.WAFlowJSONData = d;
  },
  98,
);
