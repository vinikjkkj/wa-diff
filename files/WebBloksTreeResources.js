__d(
  "WebBloksTreeResources",
  ["WebBloksFunctionTableManager", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e, t, n, r, o, a, i, l, s) {
          ((this.$1 = !0),
            (this.variableDefinitions = e != null ? e : []),
            (this.payloads = t != null ? t : new Map()),
            (this.dataPropsEntries = n != null ? n : []),
            (this.componentQueries = r != null ? r : []),
            (this.functionTable = o),
            (this.ftDeclare = a),
            (this.ftInclude = i),
            (this.values = s != null ? s : []),
            (this.templates = l != null ? l : new Map()));
        }
        var t = e.prototype;
        return (
          (t.setShouldCommitPublishStateUpdates = function (t) {
            (t === void 0 && (t = !0), (this.$1 = t));
          }),
          (t.shouldCommitPublishStateUpdates = function () {
            return this.$1;
          }),
          (t.clone = function () {
            return new e(
              this.variableDefinitions,
              this.payloads,
              this.dataPropsEntries,
              this.componentQueries,
              this.functionTable,
              this.ftDeclare,
              this.ftInclude,
              this.templates,
              this.values,
            );
          }),
          (e.empty = function () {
            return new e();
          }),
          e
        );
      })(),
      s = (function () {
        function e(e, t, n, r, a, i, l) {
          (e === void 0 && (e = new Map()),
            t === void 0 && (t = new Map()),
            n === void 0 && (n = new Map()),
            r === void 0 && (r = o("WebBloksUtils").EMPTY_OBJECT),
            a === void 0 &&
              (a = new (o(
                "WebBloksFunctionTableManager",
              ).WebBloksFunctionTableManager)()),
            i === void 0 && (i = new Map()),
            l === void 0 && (l = new Map()),
            (this.variableDefinitions = e),
            (this.payloads = t),
            (this.variables = n),
            (this.parameters = r),
            (this.functionTable = a),
            (this.values = i),
            (this.templates = l));
        }
        var t = e.prototype;
        return (
          (t.withUpdatedEntries = function (n, r) {
            return !n && !r
              ? this
              : new e(
                  n != null ? n : this.variableDefinitions,
                  this.payloads,
                  r != null ? r : this.variables,
                  this.parameters,
                  this.functionTable,
                  this.values,
                  this.templates,
                );
          }),
          (t.withUpdatedParameters = function (n) {
            return !n ||
              (o("WebBloksUtils").isEmptyObject(n) &&
                o("WebBloksUtils").isEmptyObject(this.parameters))
              ? this
              : new e(
                  this.variableDefinitions,
                  this.payloads,
                  this.variables,
                  n,
                  this.functionTable,
                  this.values,
                  this.templates,
                );
          }),
          (t.withVariableUpdates = function (n) {
            var t = new Map(this.variables);
            return (
              o("WebBloksUtils").putAll(t, n),
              new e(
                this.variableDefinitions,
                this.payloads,
                t,
                this.parameters,
                this.functionTable,
                this.values,
                this.templates,
              )
            );
          }),
          (t.withPayloadUpdates = function (n) {
            if (n.size === 0) return this;
            var t = new Map(this.payloads);
            return (
              o("WebBloksUtils").putAll(t, n),
              new e(
                this.variableDefinitions,
                t,
                this.variables,
                this.parameters,
                this.functionTable,
                this.values,
                this.templates,
              )
            );
          }),
          (t.withFunctionTableUpdates = function (n, r, a) {
            var t = new (o(
              "WebBloksFunctionTableManager",
            ).WebBloksFunctionTableManager)(
              n != null ? n : o("WebBloksUtils").EMPTY_OBJECT,
            );
            return (
              r != null &&
                o(
                  "WebBloksFunctionTableManager",
                ).WebBloksFunctionTableManager.cacheFunctionTable(r, t),
              a != null &&
                (t = t.combine(
                  o("WebBloksUtils").nullthrows(
                    o(
                      "WebBloksFunctionTableManager",
                    ).WebBloksFunctionTableManager.getFunctionTableFromCache(a),
                    "Shared bundle not found: " + a,
                  ),
                )),
              (t = t.combine(this.functionTable)),
              new e(
                this.variableDefinitions,
                this.payloads,
                this.variables,
                this.parameters,
                t,
                this.values,
                this.templates,
              )
            );
          }),
          (t.withValueUpdates = function (n) {
            if (n.length === 0) return this;
            var t = new Map();
            return (
              n.forEach(function (e) {
                t.set(e.id, e);
              }),
              new e(
                this.variableDefinitions,
                this.payloads,
                this.variables,
                this.parameters,
                this.functionTable,
                t,
                this.templates,
              )
            );
          }),
          (t.withTemplateUpdates = function (n) {
            if (n.size === 0) return this;
            var t = new Map(this.templates);
            return (
              o("WebBloksUtils").putAll(t, n),
              new e(
                this.variableDefinitions,
                this.payloads,
                this.variables,
                this.parameters,
                this.functionTable,
                this.values,
                t,
              )
            );
          }),
          (t.equalsTo = function (t) {
            return (
              this.payloads === t.payloads &&
              this.parameters === t.parameters &&
              this.variableDefinitions === t.variableDefinitions &&
              o("WebBloksUtils").shallowMapEqual(this.variables, t.variables) &&
              this.functionTable.equalsTo(t.functionTable) &&
              o("WebBloksUtils").shallowMapEqual(this.values, t.values) &&
              o("WebBloksUtils").shallowMapEqual(this.templates, t.templates)
            );
          }),
          e
        );
      })();
    ((l.WebBloksTreeResources = e), (l.WebBloksTreeResourcesState = s));
  },
  98,
);
