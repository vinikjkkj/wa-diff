__d(
  "WAFlowJSONOnClickActionPayloadValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONDocumentPickerComponentSchemaV500",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WATypeUtils",
    "isObject",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30,
      s = 25 * 1024,
      u = 100 * 1024,
      c = 1,
      d = 10,
      m = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.validate = function () {
            var e = this,
              t = [],
              n = [],
              o = new Map(),
              a = [],
              i = [],
              l = [];
            return (
              this.flowJSONData
                .getAllActions()
                .filter(function (t) {
                  var n;
                  return e
                    .getTargetedActions()
                    .includes((n = t.actionValue) == null ? void 0 : n.name);
                })
                .forEach(function (s) {
                  var u, c;
                  if (
                    ((u = s.actionValue) == null ? void 0 : u.payload) != null
                  ) {
                    var d = s.actionValue.name,
                      m = (c = s.actionValue) == null ? void 0 : c.payload,
                      p = s.screenId,
                      f = new Map(),
                      g = new Map(),
                      h = s.jsonDataPointer + "/payload",
                      y = 0,
                      C = 0,
                      b = 0;
                    for (var v of Object.entries(m)) {
                      var S = v[0],
                        R = v[1],
                        L = h + "/" + S;
                      if (r("isObject")(R)) {
                        e.findNativeComponentReferences(p, L, R, g);
                        continue;
                      }
                      var E = e.validateNativeComponentStringReference(
                        p,
                        d,
                        R,
                        L,
                        t,
                        f,
                      );
                      E != null &&
                        (y++, (C += E.maxUploadFiles), (b += E.maxUploadSize));
                    }
                    _(
                      +e.flowJSONData.version,
                      d,
                      h,
                      y,
                      C,
                      b,
                      g,
                      f,
                      o,
                      n,
                      a,
                      i,
                      l,
                    );
                  }
                }),
              this.addNativeComponentPayloadErrors(t, o, a, n, i, l),
              t
            );
          }),
          (a.validateNativeComponentStringReference = function (
            t,
            n,
            a,
            i,
            l,
            u,
          ) {
            var e,
              c = o("WAFlowJSONValidationResultUtil").parseBindings(t, a);
            if (c == null || !o("WATypeUtils").isString(a)) return null;
            var d = this.checkBindingExistence(
              t,
              a,
              i,
              c,
              this.getKeysInDataModel(c.screenId),
              this.getFormKeys(c.screenId),
            );
            if (
              (l.push.apply(l, d),
              d.length > 0 ||
                n === o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE)
            )
              return null;
            var m =
              (e = this.getReferencedNativeComponentData(c)) == null
                ? void 0
                : e.component;
            if (m == null) return null;
            p(u, m.type, i);
            var _ = g(m),
              f = 0;
            if (+this.flowJSONData.version >= 500) {
              var h =
                (m.type ===
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                    .PHOTO_PICKER ||
                  m.type ===
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                      .DOCUMENT_PICKER) &&
                Object.prototype.hasOwnProperty.call(
                  m,
                  o("WAFlowJSONDocumentPickerComponentSchemaV500")
                    .MAX_FILE_SIZE_KB_PROP,
                )
                  ? r("unsafeCast")(
                      m[
                        o("WAFlowJSONDocumentPickerComponentSchemaV500")
                          .MAX_FILE_SIZE_KB_PROP
                      ],
                    )
                  : s;
              f = _ * h;
            }
            return { maxUploadFiles: _, maxUploadSize: f };
          }),
          (a.addNativeComponentPayloadErrors = function (n, r, a, i, l, m) {
            if (r.size > 0)
              for (var t of r) {
                var p = t[0],
                  _ = t[1],
                  f = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getComponentNotAllowedInNavigatePayloadErrorMsg(
                    p,
                  );
                n.push(this.createError(f, _));
              }
            if (a.length > 0) {
              var g = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionPayloadMoreThanOneNativeCompErrorMsg();
              n.push(this.createError(g, a));
            }
            if (i.length > 0) {
              var h = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getComponentOnlyAllowedInTopLevelErrorMsg(
                [
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                    .PHOTO_PICKER,
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                    .DOCUMENT_PICKER,
                ],
              );
              n.push(this.createError(h, i));
            }
            if (l.length > 0) {
              var y = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionPayloadMaxUploadFileErrorMsg(
                +this.flowJSONData.version >= 500 ? d : c,
                e,
              );
              n.push(this.createError(y, l));
            }
            if (m.length > 0) {
              var C = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionPayloadMaxUploadSizeErrorMsg(
                u,
                s,
              );
              n.push(this.createError(C, m));
            }
          }),
          (a.findNativeComponentReferences = function (t, n, a, i) {
            if (o("WATypeUtils").isString(a)) {
              var e,
                l = o("WAFlowJSONValidationResultUtil").parseBindings(t, a),
                s =
                  (e = this.getReferencedNativeComponentData(l)) == null
                    ? void 0
                    : e.component.type;
              s != null && p(i, s, n);
            } else if (r("isObject")(a)) {
              var u = a;
              for (var c of Object.entries(u)) {
                var d = c[0],
                  m = c[1];
                this.findNativeComponentReferences(t, n + "/" + d, m, i);
              }
            } else if (Array.isArray(a))
              for (var _ = a, f = 0; f < _.length; f++)
                this.findNativeComponentReferences(t, n + "/" + f, _[f], i);
          }),
          (a.getReferencedNativeComponentData = function (t) {
            if (
              t == null ||
              o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(t.store) !==
                o("WAFlowJSONConstants").WAFlowsDataStoreType.FORM
            )
              return null;
            var e = this.flowJSONData.getComponentDataByName(t.screenId, t.key),
              n = e == null ? void 0 : e.component.type;
            return o("WAFlowJSONValidationResultUtil").isNativeComponent(n)
              ? e
              : null;
          }),
          (a.getTargetedActions = function () {
            return [
              o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
              o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
              o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
            ];
          }),
          (a.createError = function (t, n) {
            return this.getError(
              t,
              n,
              o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .INVALID_ON_CLICK_ACTION_PAYLOAD,
            );
          }),
          (a.getKeysInDataModel = function (t) {
            var e,
              n,
              o = new Set(),
              a =
                (e =
                  (n = this.flowJSONData.flowJson.screens.find(function (e) {
                    return e.id === t;
                  })) == null
                    ? void 0
                    : n.data) != null
                  ? e
                  : {};
            for (var i of Object.entries(a)) {
              var l = i[0],
                s = i[1];
              if ((o.add(l), r("isObject")(s))) {
                var u = this.getKeysInSchema(s, l);
                u.forEach(function (e) {
                  return o.add(e);
                });
              }
            }
            return o;
          }),
          (a.getKeysInSchema = function (t, n) {
            var e = new Set();
            if (t.properties == null) return e;
            for (var o of Object.entries(t.properties)) {
              var a = o[0],
                i = o[1],
                l = n + "." + a;
              if ((e.add(l), r("isObject")(i))) {
                var s = this.getKeysInSchema(i, l);
                s.forEach(function (t) {
                  return e.add(t);
                });
              }
            }
            return e;
          }),
          (a.getFormKeys = function (t) {
            var e, n;
            return new Set(
              (e =
                (n = this.flowJSONData.componentNameDataMap.get(t)) == null
                  ? void 0
                  : n.keys()) != null
                ? e
                : [],
            );
          }),
          (a.validateActionPayload = function (t, n) {
            var e, r;
            if (((e = t.actionValue) == null ? void 0 : e.payload) != null) {
              var a = (r = t.actionValue) == null ? void 0 : r.payload,
                i = t.screenId,
                l = this.getKeysInDataModel(i);
              for (var s of Object.entries(a)) {
                var u = s[0],
                  c = s[1],
                  d = o("WAFlowJSONValidationResultUtil").parseBindings(i, c);
                if (!(!o("WATypeUtils").isString(c) || d == null)) {
                  var m = this.checkBindingExistence(
                    i,
                    c,
                    t.jsonDataPointer + "/payload/" + u,
                    d,
                    l,
                    this.getFormKeys(d.screenId),
                  );
                  n.push.apply(n, m);
                }
              }
            }
          }),
          (a.checkBindingExistence = function (t, n, r, a, i, l) {
            var e = null,
              s = o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(a.store);
            if (!this.flowJSONData.screenData.has(a.screenId))
              e = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getBindingScreenDoesNotExistErrorMsg(
                a.screenId,
                a.expression,
              );
            else if (s === o("WAFlowJSONConstants").WAFlowsDataStoreType.FORM)
              if (!l.has(a.key))
                e = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFormComponentErrorMsg(
                  n,
                  t,
                );
              else {
                var u,
                  c,
                  d =
                    (u =
                      (c = this.flowJSONData.componentNameDataMap.get(
                        a.screenId,
                      )) == null
                        ? void 0
                        : c.get(a.key)) != null
                      ? u
                      : [];
                d.length > 0 &&
                  d[0].component.type ===
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM &&
                  (e = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidComponentTypeForFormBindingErrorMsg(
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM,
                  ));
              }
            else
              s === o("WAFlowJSONConstants").WAFlowsDataStoreType.DATA &&
                !i.has(a.key) &&
                (e = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingDynamicDataErrorMsg(
                  n,
                  t,
                ));
            return e != null ? [this.createError(e, r)] : [];
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function p(e, t, n) {
      if ((e.has(t) || e.set(t, []), typeof n == "string")) {
        var r;
        (r = e.get(t)) == null || r.push(n);
      } else {
        var o;
        (o = e.get(t)) == null || o.push.apply(o, n);
      }
    }
    function _(e, t, n, r, a, i, l, s, u, c, d, m, _) {
      if (t === o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE) {
        for (var g of l) {
          var h = g[0],
            y = g[1];
          p(u, h, y);
        }
        for (var C of s) {
          var b = C[0],
            v = C[1];
          p(u, b, v);
        }
      } else {
        for (var S of l.values()) c.push.apply(c, S);
        f(e, t, r, a, i, n, d, m, _);
      }
    }
    function f(e, t, n, r, a, i, l, s, m) {
      if (e >= 500) {
        (r > d && s.push(i), a > u && m.push(i));
        return;
      }
      (r > c && s.push(i),
        t === o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE &&
          n > 1 &&
          l.push(i));
    }
    function g(t) {
      var n,
        r = t.type;
      if (!o("WAFlowJSONValidationResultUtil").isNativeComponent(r)) return 0;
      var a =
        (n = o("WAFlowJSONConstants").componentsToMinMaxPropertiesV400.get(
          r,
        )) == null
          ? void 0
          : n.at(1);
      return a != null && Object.prototype.hasOwnProperty.call(t, a) ? t[a] : e;
    }
    l.WAFlowJSONOnClickActionPayloadValidatorV500 = m;
  },
  98,
);
