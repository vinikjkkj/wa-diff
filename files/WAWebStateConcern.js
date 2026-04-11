__d(
  "WAWebStateConcern",
  [
    "WALogger",
    "WAWebBaseMirror",
    "WAWebBaseModel",
    "WAWebCollections",
    "WAWebProxyStateFactory",
    "WAWebStreamModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    n("WAWebCollections");
    function d(e) {
      return typeof e == "string"
        ? e
        : e.toString
          ? e.toString()
          : "Invalid Object";
    }
    function m(t, n, r, a) {
      var i = {
          $ProxyState$ComponentName: { value: t },
          proxyBitMask: {
            value: o("WAWebBaseMirror").genBitMask(n.prototype.mirrorMask, r),
          },
        },
        l = function (r) {
          var n = {};
          ((n.enumerable = !0),
            (n.get = function () {
              return this.$ProxyState$state.get(r);
            }),
            (n.set = function () {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    'READ ONLY: prop "',
                    '" in <',
                    " /> not writable",
                  ])),
                r,
                t,
              );
            }),
            a ||
              (n.set = function (e) {
                this.$ProxyState$state.set(r, e);
              }),
            (i[r] = n));
        };
      for (var s of r) l(s);
      function u(e) {
        n.call(this, e);
      }
      return (
        (u.prototype = Object.create(n.prototype, i)),
        (u.prototype.constructor = u),
        u
      );
    }
    var p = (function () {
      function e(e, t, n, r, a) {
        (a === void 0 && (a = !1),
          (this.componentName = e),
          (this.name = t),
          (this.$1 = r),
          (this.keys = n));
        var i = o("WAWebProxyStateFactory").ProxyStates[t];
        (i ||
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  'Unknown StateHOC concern type "',
                  '"',
                ])),
              t,
            )
            .sendLogs("state-hoc-error"),
          (this.$2 = i),
          (this.$3 = m(e, i, n, a)));
      }
      var t = e.prototype;
      return (
        (t.getModel = function (t) {
          return t instanceof this.$2 ? t.$ProxyState$state : t;
        }),
        (t.getModelAndValidate = function (t) {
          var e = t instanceof this.$2 ? t.$ProxyState$state : t;
          return e
            ? e instanceof o("WAWebBaseModel").BaseModel
              ? e
              : (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " given invalid object for ",
                        ": ",
                        "",
                      ])),
                    this.componentName,
                    this.name,
                    d(e),
                  )
                  .sendLogs("state-hoc-error"),
                null)
            : (o("WAWebStreamModel").Stream.mode ===
                o("WAWebStreamModel").StreamMode.MAIN &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " was not supplied the ",
                        " model with keys ",
                        ".",
                      ])),
                    this.componentName,
                    this.name,
                    String(this.keys),
                  )
                  .sendLogs("state-hoc-error"),
              null);
        }),
        (t.createProxy = function (t) {
          return new this.$3(t);
        }),
        (t.attachConcern = function (t, n, r) {
          (t.incObservers(!this.$1), t.mirror.addListener(r, n, this));
        }),
        (t.detachConcern = function (t, n) {
          (t.decObservers(), t.mirror.removeListener(n));
        }),
        e
      );
    })();
    l.default = p;
  },
  98,
);
