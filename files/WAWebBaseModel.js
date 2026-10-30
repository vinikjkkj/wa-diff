__d(
  "WAWebBaseModel",
  [
    "WALogger",
    "WAWebBaseMirror",
    "WAWebEventEmitter",
    "WAWebModelUtils",
    "WAWebNetworkStatus",
    "WAWebProxyStateFactory",
    "WAWebUiIdleEventBus",
    "cr:18506",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = /^change:/,
      d = {},
      m = (function (t) {
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
            i && !_(i) && r.set(i, babelHelpers.extends({ silent: !0 }, n)),
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
            (!this._uiObservers && this.stale) ||
              (this.getCollection != null
                ? this.getCollection().find(this.id)
                : o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "base_model:_refreshStaleModel getCollection does not exist on ",
                          "",
                        ])),
                      this.constructor.name,
                    )
                    .sendLogs("base-model-stale-refresh-no-get-collection", {
                      sampling: 0.01,
                    }));
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
          (i.addChild = function (t, n) {
            var e = {};
            ((e[t] = n),
              this.set(e, { silent: !0 }),
              this.listenTo(
                n,
                "all",
                this._getUnboundCachedEventBubblingHandler(t),
              ));
          }),
          (i.get = function (t) {
            return this[t];
          }),
          (i.set = function (t, r, a) {
            var e;
            (n("cr:18506") == null
              ? void 0
              : n("cr:18506").currentTransaction) != null &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[txn] UI change in ",
                    ". See https://fburl.com/aleoj4tt",
                  ])),
                this.constructor.name,
              );
            var i = a;
            return typeof t == "string"
              ? this._set({ keyOrAttrs: t, maybeOptions: i, valueOrOptions: r })
              : ((i = r),
                (e = i) != null && e.merge
                  ? this._set({ keyOrAttrs: f(t), valueOrOptions: i })
                  : this._set({ keyOrAttrs: t, valueOrOptions: i }));
          }),
          (i._markChange = function (t, n) {
            this.__initialized &&
              (this._getChanges().push({ key: t, oldValue: n }),
              this.__fired && (this.__fired[t] = !1));
          }),
          (i._set = function (t) {
            var e,
              n = this,
              o = t.keyOrAttrs,
              a = t.maybeOptions,
              i = t.valueOrOptions;
            this.revisionNumber++;
            var l = !!this.__changes,
              s =
                typeof o == "string" ? [((e = {}), (e[o] = i), e), a] : [o, i],
              u = s[0],
              c = s[1],
              d = new Set();
            if (
              (Object.keys(u).forEach(function (e) {
                var t = n._setKV(e, u[e], c);
                t == null ||
                  t.forEach(function (e) {
                    d.add(e);
                  });
              }),
              d.size > 0)
            )
              for (
                var m = r("nullthrows")(
                    this._topo,
                    "_topo unexpectedly undefined",
                  ),
                  p = r("nullthrows")(this._topoIndexMap),
                  _ = function (t) {
                    var e = m[t];
                    if (!d.has(e)) return 1;
                    var o = n._setD(e);
                    o == null ||
                      o.forEach(function (e) {
                        var n = r("nullthrows")(p.get(e));
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
              return typeof n == "function" ? n() : n;
            }
          }),
          (i._getUnboundCachedEventBubblingHandler = function (t) {
            var e;
            return (e = d[t]) != null
              ? e
              : (d[t] = function (e, n, r) {
                  c.test(e)
                    ? this.trigger("change:" + t + "." + e.split(":")[1], n, r)
                    : e === "change" && this.trigger("change", this);
                });
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
    function p(e) {
      var t = o("WAWebModelUtils").convert(e),
        n = o("WAWebModelUtils").stateExtend(m, t);
      if (e.Proxy) {
        var r = o("WAWebBaseMirror").genMirrorMask(t);
        ((n.prototype.mirrorMask = r),
          (n.prototype.proxyName = e.Proxy),
          o("WAWebProxyStateFactory").ProxyStateFactory(e.Proxy, t, r));
      }
      return n;
    }
    function _(e) {
      for (var t in e) if (Object.hasOwn(e, t)) return !1;
      return !0;
    }
    function f(e) {
      for (var t = Object.keys(e), n = t.length, r = {}, o = 0; o < n; o++) {
        var a = t[o];
        e[a] !== void 0 && (r[a] = e[a]);
      }
      return r;
    }
    ((l.prop = (u = o("WAWebModelUtils")).prop),
      (l.session = u.session),
      (l.derived = u.derived),
      (l.getter = u.getter),
      (l.collection = u.collection),
      (l.BaseModel = m),
      (l.defineModel = p));
  },
  98,
);
