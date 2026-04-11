__d(
  "WAWebBaseModel",
  [
    "WALogger",
    "WANullthrows",
    "WATypeUtils",
    "WAWebBaseMirror",
    "WAWebEventEmitter",
    "WAWebModelUtils",
    "WAWebNetworkStatus",
    "WAWebProxyStateFactory",
    "WAWebUiIdleEventBus",
    "cr:5292",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return typeof e == "string" ? e : e.toString();
    }
    var c = /^change:/,
      d = (function (t) {
        function a(e, n) {
          var r;
          if (
            (n === void 0 && (n = {}),
            (r = t.call(this) || this),
            (r.stale = o("WAWebModelUtils").session(!1)),
            (r.revisionNumber = 1),
            (r.__fired = null),
            (r.__changes = null),
            (r.__initialized = !1),
            n._internalInitializationDoNotUse)
          )
            return babelHelpers.assertThisInitialized(r);
          ((r.stale =
            (e == null ? void 0 : e.stale) || r.getDefault("stale") === !0),
            (r.parent = n.parent),
            (r.collection = n.collection),
            r._initDeriveds(),
            r._initCollections());
          var a = r.__defaults,
            i = a ? babelHelpers.extends({}, a, e) : e;
          return (
            i && !p(i) && r.set(i, babelHelpers.extends({ silent: !0 }, n)),
            r.initialize(),
            (r.__initialized = !0),
            r
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            if (
              this.collection &&
              this.id &&
              !this.collection.modelClass.prototype.isIdType(this.id)
            ) {
              var e = this.collection
                ? typeof this.collection.modelClass.prototype.idClass
                : "N/A";
              throw r("err")(
                "Model id:" +
                  String(this.id) +
                  " is wrong type (" +
                  typeof this.id +
                  " vs expected " +
                  e +
                  ")",
              );
            }
            ((this._uiObservers = 0),
              this.mirrorMask &&
                (this.mirror = new (o("WAWebBaseMirror").BaseMirror)(this)));
          }),
          (i._refreshStaleModel = function () {
            if (!(!this._uiObservers && this.stale))
              if (this.getCollection != null)
                this.getCollection().find(this.id);
              else
                throw r("err")(
                  "base_model:_refreshStaleModel getCollection does not exist",
                );
          }),
          (i.incObservers = function (t) {
            (this._uiObservers++,
              !t &&
                r("WAWebNetworkStatus").online &&
                this.stale &&
                (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy
                  ? this.listenToOnce(
                      o("WAWebUiIdleEventBus").UiIdleEventBus,
                      "ui_idle",
                      this._refreshStaleModel,
                    )
                  : this._refreshStaleModel()));
          }),
          (i.decObservers = function () {
            (this._uiObservers > 0 && this._uiObservers--,
              this._uiObservers === 0 &&
                this.stopListening(
                  o("WAWebUiIdleEventBus").UiIdleEventBus,
                  "ui_idle",
                  this._refreshStaleModel,
                ));
          }),
          (i.hasObservers = function () {
            return this._uiObservers > 0;
          }),
          (i.getObservers_TEST_ONLY = function () {
            return null;
          }),
          (i.addChild = function (t, n) {
            var e = {};
            ((e[t] = n),
              this.set(e, { silent: !0 }),
              this.listenTo(n, "all", this._getCachedEventBubblingHandler(t)));
          }),
          (i.get = function (t) {
            return this[t];
          }),
          (i.set = function (a, i, l) {
            var t;
            !r("gkx")("26258") &&
              (n("cr:5292") == null
                ? void 0
                : n("cr:5292").currentTransaction) != null &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[txn] UI change in ",
                    ". See https://fburl.com/aleoj4tt",
                  ])),
                this.constructor.name,
              );
            var s = l;
            return typeof a == "string"
              ? this._set(a, i, s)
              : ((s = i),
                (t = s) != null && t.merge
                  ? this._set(_(a), s)
                  : this._set(a, s));
          }),
          (i._markChange = function (t, n) {
            this.__initialized &&
              (this._getChanges().push({ key: t, oldValue: n }),
              this.__fired && (this.__fired[t] = !1));
          }),
          (i._set = function (t, n, a) {
            var e,
              i = this;
            this.revisionNumber++;
            var l = !!this.__changes,
              s = o("WATypeUtils").isString(t)
                ? [((e = {}), (e[t] = n), e), a]
                : [t, n],
              u = s[0],
              c = s[1],
              d = new Set();
            if (
              (Object.keys(u).forEach(function (e) {
                var t = i._setKV(e, u[e], c);
                t == null ||
                  t.forEach(function (e) {
                    d.add(e);
                  });
              }),
              d.size > 0)
            )
              for (
                var m = r("WANullthrows")(
                    this._topo,
                    "_topo unexpectedly undefined",
                  ),
                  p = r("WANullthrows")(this._topoIndexMap),
                  _ = function (t) {
                    var e = m[t];
                    if (!d.has(e)) return 1;
                    var n = i._setD(e);
                    n == null ||
                      n.forEach(function (e) {
                        var n = r("WANullthrows")(p.get(e));
                        if (n < t)
                          throw r("err")(
                            "Circular derived properties / event listeners",
                          );
                        d.add(e);
                      });
                  },
                  f = 0;
                f < m.length;
                f++
              )
                _(f);
            var g = c == null ? void 0 : c.silent;
            if (g !== !0 && this.hasUnfiredChanges()) {
              for (
                var h = (this.__fired = {}),
                  y = this._getChanges(),
                  C = y.length > 0;
                y.length;
              ) {
                var b = y.shift(),
                  v = b.key,
                  S = b.oldValue;
                if (!h[v]) {
                  h[v] = !0;
                  var R = this._definition[v].evt;
                  if (this.isListening(R) || this.isListening("all")) {
                    var L = this[v];
                    this.trigger(R, this, L, S);
                  }
                }
              }
              ((C && this.isListening("change")) || this.isListening("all")) &&
                this.trigger("change", this);
            }
            return (
              l ||
                (this.__changes && (this.__changes = null),
                this.__fired && (this.__fired = null)),
              this
            );
          }),
          (i._setKV = function (t, n, a) {
            var e;
            if (this._collections[t]) {
              this[t].set(n, a);
              return;
            }
            var i = this._definition[t];
            if (i) {
              if (i.attr === o("WAWebModelUtils").Attr.DERIVED)
                throw r("err")(
                  "Attempting to directly set derived property: " + t,
                );
            } else {
              this[t] = n;
              return;
            }
            var l = i.sk,
              s = this[t];
            if (n !== s)
              return (
                (this[l] = n),
                this._markChange(t, s),
                (e = this._deps) == null ? void 0 : e[t]
              );
          }),
          (i._setD = function (t) {
            var e,
              n = this._definition[t],
              r = n.sk,
              o = n.fn.call(this),
              a = this[r];
            if (o !== a)
              return (
                (this[r] = o),
                this._markChange(t, a),
                (e = this._deps) == null ? void 0 : e[t]
              );
          }),
          (i.hasUnfiredChanges = function () {
            var e = this.__fired,
              t = this.__changes;
            if (!t) return !1;
            if (!e) return !0;
            for (var n = 0; n < t.length; n++) if (!e[t[n].key]) return !0;
            return !1;
          }),
          (i._getChanges = function () {
            return this.__changes || (this.__changes = []);
          }),
          (i._initDeriveds = function () {
            var e = this;
            this.__derived.forEach(function (t) {
              e[e._definition[t].sk] = o("WAWebModelUtils").INIT;
            });
          }),
          (i._initCollections = function () {
            var e = this;
            Object.entries(this._collections).forEach(function (t) {
              var n = t[0],
                r = t[1];
              e[n] = new r(null, { parent: e });
            });
          }),
          (i.unset = function (t, n) {
            var e = Array.isArray(t) ? t : [t],
              r = {};
            for (var o of e) r[o] = void 0;
            this.set(r, n);
          }),
          (i.clear = function () {
            this.unset([].concat(this.__props, this.__session));
          }),
          (i.delete = function () {
            this.stopListening();
          }),
          (i.reset = function () {
            this.set(this.__defaults);
          }),
          (i.toJSON = function () {
            return this.serialize();
          }),
          (i.serialize = function () {
            for (var e = this, t = {}, n = 0; n < this.__props.length; n++)
              t[this.__props[n]] = this[this.__props[n]];
            return (
              Object.keys(this._collections).forEach(function (n) {
                t[n] = e[n].serialize();
              }),
              t
            );
          }),
          (i.getDefault = function (t) {
            var e = this._definition[t];
            if (e) {
              var n = e.defaultValue;
              return o("WATypeUtils").isFunction(n) ? n() : n;
            }
          }),
          (i._getCachedEventBubblingHandler = function (t) {
            return function (e, n, r) {
              c.test(e)
                ? this.trigger("change:" + t + "." + e.split(":")[1], n, r)
                : e === "change" && this.trigger("change", this);
            }.bind(this);
          }),
          (a.isIdType = function (t) {
            return this.allowedIds && this.allowedIds.includes(t)
              ? !0
              : this.idClass
                ? t instanceof this.idClass
                : typeof t == "string";
          }),
          a
        );
      })(r("WAWebEventEmitter"));
    function m(e) {
      var t = o("WAWebModelUtils").convert(e),
        n = o("WAWebModelUtils").stateExtend(d, t);
      if (e.Proxy) {
        var r = o("WAWebBaseMirror").genMirrorMask(t);
        ((n.prototype.mirrorMask = r),
          (n.prototype.proxyName = e.Proxy),
          o("WAWebProxyStateFactory").ProxyStateFactory(e.Proxy, t, r));
      }
      return n;
    }
    function p(e) {
      for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
      return !0;
    }
    function _(e) {
      for (var t = Object.keys(e), n = t.length, r = {}, o = 0; o < n; o++) {
        var a = t[o];
        e[a] !== void 0 && (r[a] = e[a]);
      }
      return r;
    }
    ((l.prop = (s = o("WAWebModelUtils")).prop),
      (l.session = s.session),
      (l.derived = s.derived),
      (l.getter = s.getter),
      (l.collection = s.collection),
      (l.idTypeToString = u),
      (l.BaseModel = d),
      (l.defineModel = m));
  },
  98,
);
